FormUtil = {
	/**
	 * Packs formdata into an array
	 * Supports array like names i.e. name="fishs[]", name="fishs[]"
	 * @param formId jQuery selector
	 */
	packForm: function(formId)
	{
		var data = {};
		var index = 0;
		var elem = $(formId).find('input, textarea, select').each(function(){
			if (!this.disabled && this.name.length > 0)
			{
				var tag = this.tagName.toUpperCase();
				var type = this.type.toUpperCase();
				if (tag !== "BUTTON" && tag !== "SUBMIT")
				{
					var foundValue = false;
					//console.log('tag/type: '+tag+'/'+type+' - name: '+this.name+' - value: '+this.value+' - checked: '+this.checked);
					if (type == 'CHECKBOX')
					{
						//This if cannot be nested, due to the nature of this.value, which is 'on' for all checkboxes, checked or not checked
						if (this.checked)
							foundValue = true;
					}
					else
					{
						foundValue = true;
					}

					if (foundValue == true)
					{
						var value = this.value;
						if (this.hasAttribute('multiple'))
						{
							var selData = [];
							$('[name=\'' + this.name + '\'] option:selected').each(function(){
								selData.push(this.value);
							});
							value = selData;
						}

						data[this.name] = value;
					}
				}
			}
		});

		return FormUtil.buildObject(data);
	},

	buildObject: function(data) {
		var ret = {};

		retloop:
		for (var input in data) {
			var val = data[input];
			var parts = input.split('[');
			var last = ret;

			for (var i in parts) {
				var part = parts[i];
				if (part.substr(-1) == ']') {
					part = part.substr(0, part.length - 1);
				}
				if (i == parts.length - 1) {
					last[part] = val;
					continue retloop;
				}
				else if (!last.hasOwnProperty(part)) {
					last[part] = {};
				}
				last = last[part];
			}
		}
		return ret;
	}
}
