A very compact micro-templating solution created for learning purposes. Currently 0.2KB minified

### Sample usage

Example: Populating a separately defined template

```javascript
<script type="text/micro" id="myTemplate">
    <img src = "{{avatar}}" title = "{{username}}"  alt = "{{username}}" /> 
	<span> {{username}} </span>
</script>

<script>
// alternatively $("#myTemplate").html() works just as well
var markup = document.getElementById("myTemplate").innerHTML,
    data2 = {
        username: "addyosmani",
        avatar: "http://a0.twimg.com/profile_images/1256987680/addyosmaniicon_reasonably_small.jpg",
        age: 25
    };

// Log the templated output or populate some an element
// on the page with it
console.log('Test:' + templatez(markup, data2));
</script>
```


Example: Basic inline templating

```javascript
var markup = "Test: I am a {{user.age}} year old {{user.sex}} from {{country}}",
    data1 = {
        country: "Ireland",
        user: {
            age: 25,
            name: "Addy",
            sex: "male"
        }
    };

console.log(templatez(markup, data1));
```


Example: Templating an array

```javascript
var markup = "<li><b>{{Name}}</b> ({{ReleaseYear}})</li>",
    template = "",
    len = 0;

var movies = [{
    Name: "The Red Violin",
    ReleaseYear: "1998"
}, {
    Name: "Eyes Wide Shut",
    ReleaseYear: "1999"
}, {
    Name: "The Inheritance",
    ReleaseYear: "1976"
}];

len =  movies.length;

while(len--) {
    template += templatez(markup, movies[len]);
}
console.log('Test:' + template);
```

#184-byte version
```javascript
function t(a,b){return a.replace(RegExp("{{\\s*([a-z0-9_][\\.a-z0-9_]*)\\s*}}","gi"),function(a,c){var d=c.split("."),e=d.length,f=b,g=0;for(;g<e;g++){f=f[d[g]];if(g===e-1)return f}})}
```