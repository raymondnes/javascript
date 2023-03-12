# Variables
---
### Variables are used to store date temporarily in a location and the given location is named so we can comfortably retrieve the data in the future.

# JavaScript Display Possibilities
## JavaScript can "display" data in different ways:
---
Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log()

#Using innerHTML
To access an HTML element, JavaScript can use the document.getElementById(id) method.

The id attribute defines the HTML element. The innerHTML property defines the HTML content:

<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html>

# Using document.write()
For testing purposes, it is convenient to use document.write():

<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html>

#Onclick document.write()

<!DOCTYPE html>
<html>
<body>

<h2>My First Web Page</h2>
<p>My first paragraph.</p>

<button type="button" onclick="document.write('Hate me if you want')">Try it</button>

</body>
</html> 

# Using window.alert()
You can use an alert box to display data:

<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6); // you can skip the window keyword and just use alert()
</script>

</body>
</html>

# Using console.log()
For debugging purposes, you can call the console.log() method in the browser to display data.


<!DOCTYPE html>
<html>
<body>

<script>
console.log(5 + 6);
</script>

</body>
</html>
