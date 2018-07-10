// json2.js
if(!this.JSON){JSON={};}
(function(){function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z';};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapeable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapeable.lastIndex=0;return escapeable.test(string)?'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==='string'){return c;}
return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(typeof value.length==='number'&&!value.propertyIsEnumerable('length')){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+
partial.join(',\n'+gap)+'\n'+
mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+
mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}})();

// JsonRpcRequest(string method, [Array params], [function onSuccess], [function onFailure])
function JsonRpcRequest(method, params, onSuccess, onFailure)
{
	if (typeof(method) != "string")
		throw new TypeError("Invalid argument");
	if (params instanceof Array)
	{
		this.method = method;
		this.params = params;
		this.onSuccess = onSuccess;
		this.onFailure = onFailure;
	}
	else
		throw new TypeError("Invalid argument");
}

// string JsonRpcRequest.toString()
JsonRpcRequest.prototype.toString = function()
{
	return "JsonRpcRequest(" + this.method + ")";
}

// JsonRpcClient(string url, [string version])
function JsonRpcClient(url, version)
{
	this.url = url;
	switch (version)
	{
		case "1.0":
		case "1.1":
		case "2.0":
			this.version = version;
			break;

		default:
			this.version = "2.0";
	}
}

// string JsonRpcClient.toString()
JsonRpcClient.prototype.toString = function()
{
	return "JsonRpcClient(" + url + ")";
}

// void JsonRpcClient.invoke(JsonRpcRequest request)
// void JsonRpcClient.invoke(Object request) // JsonRpcRequest-compatible object
// void JsonRpcClient.invoke(JsonRpcRequest[] requests) // Varargs
// void JsonRpcClient.invoke(string method, [any args...], [function onSuccess], [function onFailure], [string method...])
JsonRpcClient.prototype.invoke = function(args)
{
	var i;

	if (args instanceof Array)
	{
		var data;
		var req;
		try
		{
			req = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch (e)
		{
			req = new XMLHttpRequest();
		}

		var jsonrpc = {type : "unknown", ids : {}};

		if (args.length == 0)
		{
			throw new TypeError("Invalid argument");
		}
		else if (args.length == 1)
		{
			if (args[0] instanceof JsonRpcRequest)
			{
				data = {};
				if (this.version == "1.1")
					data.version = "1.1";
				else if (this.version == "2.0")
					data.jsonrpc = "2.0";

				data.method = args[0].method;
				data.params = args[0].params;
				if (typeof(args[0].onSuccess) == "function" || typeof(args[0].onFailure) == "function")
				{
					data.id = "1";
					jsonrpc.ids[1] = args[0];
				}
				else if (this.version == "1.0")
					data.id = null;

				jsonrpc.type = "unicall";
			}
			else
			{
				throw new TypeError("Invalid argument");
			}
		}
		else // if (args.length > 1)
		{
			var nextId = 1;
			if (this.version == "1.1")
			{
				data = {};
				data.version = "1.1";
				data.method = "system.multicall";
				data.params = [[]];
				jsonrpc.type = "multicall-1.1";

				for (i = 0; i != args.length; ++i)
				{
					if (args[i] instanceof JsonRpcRequest)
					{
						var param = {};
						param.version = "1.1";
						param.method = args[i].method;
						param.params = args[i].params;
						if (typeof(args[i].onSuccess) == "function" || typeof(args[i].onFailure) == "function")
						{
							param.id = nextId++;
							jsonrpc.ids[param.id] = args[i];
						}
						data.params[0].push(param);
					}
					else
					{
						throw new TypeError("Invalid argument");
					}
				}
			}
			else if (this.version == "2.0")
			{
				data = [];

				for (i = 0; i != args.length; ++i)
				{
					if (args[i] instanceof JsonRpcRequest)
					{
						var param = {};
						param.jsonrpc = "2.0";
						param.method = args[i].method;
						param.params = args[i].params;
						if (typeof(args[i].onSuccess) == "function" || typeof(args[i].onFailure) == "function")
						{
							param.id = nextId++;
							jsonrpc.ids[param.id] = args[i];
						}
						data.push(param);
					}
					else
					{
						throw new TypeError("Invalid argument");
					}
				}

				jsonrpc.type = "multicall-2.0";
			}
			else
			{
				throw new TypeError("Invalid argument");
			}
		}

		req.open("POST", this.url, true);
		req.setRequestHeader("Content-Type", "application/json");
		req.setRequestHeader("Accept", "application/json; q=0.5, application/jsonrpc, application/jsonrequest; q=0.2, */*");
		req.onreadystatechange = function()
		{
			if (req.readyState == 4)
			{
				var id;

				// Prepare responses
				var responses = {};
				for (id in jsonrpc.ids)
				{
					if (jsonrpc.ids.hasOwnProperty(id))
						responses[id] = {};
				}

				// Parse response
				if (req.responseText != null && req.responseText.length > 0)
				{
					try
					{
						var response = JSON.parse(req.responseText);
						
						if (jsonrpc.type == "unicall")
						{
							// Expected format:
							// {result: ..., id: ...}
							if (response.hasOwnProperty("id"))
							{
								id = response.id;
								if (responses.hasOwnProperty(id))
									responses[id] = response;
							}
						}
						else if (jsonrpc.type == "multicall-1.1")
						{
							// Expected format:
							// {version: "1.1", result: ..., [id: ...]}
							if (response.hasOwnProperty("result") && response.result instanceof Array)
							{
								for (i = 0; i != response.result.length; ++i)
								{
									if (response.result[i].hasOwnProperty("id"))
									{
										id = response.result[i].id;
										if (responses.hasOwnProperty(id))
											responses[id] = response.result[i];
									}
								}
							}
						}
						else if (jsonrpc.type == "multicall-2.0")
						{
							// Expected format:
							// [{jsonrpc: "2.0", result: ..., [id: ...]}, {jsonrpc: "2.0", result: ..., [id: ...]}]
							if (response instanceof Array)
							{
								for (i = 0; i != response.length; ++i)
								{
									if (response[i].hasOwnProperty("id"))
									{
										id = response[i].id;
										if (responses.hasOwnProperty(id))
											responses[id] = response[i];
									}
								}
							}
						}
						else
						{
							throw new Error("Internal error");
						}
					}
					catch (ignored)
					{
					}
				}

				// Invoke callbacks
				for (id in responses)
				{
					if (responses.hasOwnProperty(id))
					{
						if (responses[id].hasOwnProperty("error"))
						{
							if (jsonrpc.ids[id].onFailure != null)
								jsonrpc.ids[id].onFailure(responses[id].error);
						}
						else if (responses[id].hasOwnProperty("result"))
						{
							if (jsonrpc.ids[id].onSuccess != null)
								jsonrpc.ids[id].onSuccess(responses[id].result);	
						}
						else
						{
							if (jsonrpc.ids[id].onFailure != null)
								jsonrpc.ids[id].onFailure({code: -32700, message: "Missing or invalid response from server"});
						}
					}
				}
			}
		}

		req.send(JSON.stringify(data));
	}
	else if (args instanceof JsonRpcRequest)
	{
		var requests = [];

		// Varargs
		for (i = 0; i != arguments.length; ++i)
		{
			if (arguments[i] instanceof JsonRpcRequest)
				requests.push(arguments[i]);
			else
				throw new TypeError("Invalid argument");
		}
		this.invoke(requests);
	}
	// JsonRpcRequest-compatible literal(s)
	else if (typeof(args) == "object")
	{
		var requests = [];

		// Varargs
		for (i = 0; i != arguments.length; ++i)
		{
			if (typeof(arguments[i]) == "object")
			{
				requests.push(new JsonRpcRequest(
					arguments[i].method,
					arguments[i].params,
					arguments[i].onSuccess,
					arguments[i].onFailure
				));
			}
			else
				throw new TypeError("Invalid argument");
		}
		this.invoke(requests);
	}
	else
	{
		var requests = [];
		i = 0;
		while (i != arguments.length)
		{
			var method = arguments[i];
			var params = [];
			var onSuccess = null;
			var onFailure = null;

			for (++i; i != arguments.length && typeof(arguments[i]) != "function"; ++i)
				params.push(arguments[i]);

			if (i != arguments.length && typeof(arguments[i]) == "function")
			{
				onSuccess = arguments[i++];
				if (i != arguments.length && typeof(arguments[i]) == "function")
					onFailure = arguments[i++];
			}

			requests.push(new JsonRpcRequest(method, params, onSuccess, onFailure));
		}

		this.invoke(requests);
	}
}
