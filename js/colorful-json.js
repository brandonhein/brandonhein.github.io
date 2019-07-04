var ColorJson = function(){
}

ColorJson.prototype = {
    colorify(json) {
        if (typeof json != 'string'){
            json = JSON.stringify(json, null, '\t');
        }

        /*json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            var result = '<span class="' + cls + '">' + match + '</span>';
            if (cls == 'boolean' || cls == 'string' || cls == 'number' || cls == 'null') {
                result = result + "<br/>";
            }
            return result;
        });*/
    }
}