/*!
* Compact micro-templating implementation
* http://addyosmani.com/
* Licensed under the GPL
*/
var templatez = (function(){
  return function(tmpl, data){
        return tmpl.replace((RegExp("{{\\s*([a-z0-9_][\\.a-z0-9_]*)\\s*}}", "gi")), function(tag, k){
            var path = k.split("."),
                len = path.length,
                temp = data,
                i = 0;
            for(i=0; i<len; i++){
                temp = temp[path[i]];
                if (i === len - 1){
                    return temp;
                }
            }
        });
    };
}());
