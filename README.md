A very compact micro-templating solution created for learning purposes.

### Sample usage

```javascript
        var markup1 = "Test 1: I am a {{user.age}} year old {{user.sex}} from {{country}}",
            data1 = {
                country: "Ireland",
                user: {
                    age: 25,
                    name: "Addy",
                    sex: "male"
                }
            };

        alert(templatez(markup1, data1));
```


```javascript
	    <script type="text/micro" id="test">
	        <img src = "{{avatar}}" title = "{{username}}"  alt = "{{username}}" /> 
			<span> {{username}} </span>
	    </script>
	
		<script>
        var markup2 = document.getElementById("test").innerHTML,
            data2 = {
                username: "addyosmani",
                avatar: "http://a0.twimg.com/profile_images/1256987680/addyosmaniicon_reasonably_small.jpg",
                age: 25
            };

        alert('Test 2:' + templatez(markup2, data2));
		</script>
```


```javascript
        var markup3 = "<li><b>{{Name}}</b> ({{ReleaseYear}})</li>",
            buffer = "";

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

        for (var i = 0; i < movies.length; i++) {
            buffer += templatez(markup3, movies[i]);
        }
        alert('Test 3:' + buffer);
```