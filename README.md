A very compact micro-templating solution created for learning purposes. Currently 0.2KB minified

### Sample usage

Example: Script-tag based templating

```javascript
<script type="text/micro" id="myTemplate">
    <img src = "{{avatar}}" title = "{{username}}"  alt = "{{username}}" /> 
    <div class='info'>
        <div class='realname'> {{realName}} </div>
        <div class='age'> {{age}} </div>
        <div class='lang'> {{language}} </div>
    </div>
	
</script>

<script>
var markup = document.getElementById("myTemplate").innerHTML,
    data = {
        username: "addyosmani",
        realName: 'Addy Osmani',
        avatar: "http://a0.twimg.com/profile_images/1256987680/addyosmaniicon_reasonably_small.jpg",
        language:'English',
        age: 25
    };

// Log the templated output or populate some an element
// on the page with it
console.log('Test:' + templatez(markup, data));
</script>
```

Example: Support for nested paths (ie x.y)

```javascript
<script  id="myTemplate" type="text/micro">
    <div class='username'> {{username}} </div>
    <div class="features"> {{features.hair}}, {{features.eyes}}, {{features.height}}</div>
</script>

<script>
var markup = $("#myTemplate").html(),
    data = {
        username: "addyosmani",
        features:{
            hair:'black',
            eyes: 'brown',
            height:'5.8'
        }
    };

// Log the templated output or populate some an element
// on the page with it
console.log('Test:' + templatez(markup, data));
</script>
```


Example: Basic inline templating

```javascript
var markup = "Test: I am a {{user.age}} year old {{user.sex}} from {{country}}",
    data = {
        country: "Ireland",
        user: {
            age: 25,
            name: "Addy",
            sex: "male"
        }
    };

console.log(templatez(markup, data));
```


Example: Templating an array of objects

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

Example: Templating JSON

```javascript
<script>
var markup = "<li><b>{{Name}}</b> ({{ReleaseYear}}), Rating:{{Rating}}/5</li>",
    template = "",
    len = 0;

var jsonMovies = {
    "movie1": {
        "Name": "TheRedViolin",
        "ReleaseYear": "1998",
        "Rating": "3"

    },
    "movie2": {
        "Name": "EyesWideShut",
        "ReleaseYear": "1999",
        "Rating" : "2.5"
    },
    "movie3": {
        "Name": "TheInheritance",
        "ReleaseYear": "1976",
        "Rating": "3"
    }
};

for(var item in jsonMovies){
    template += templatez(markup, jsonMovies[item]);
}
console.log('Test:' + template);
</script>
```

#184-byte version
```javascript
function t(a,b){return a.replace(RegExp("{{\\s*([a-z0-9_][\\.a-z0-9_]*)\\s*}}","gi"),function(a,c){var d=c.split("."),e=d.length,f=b,g=0;for(;g<e;g++){f=f[d[g]];if(g===e-1)return f}})}
```