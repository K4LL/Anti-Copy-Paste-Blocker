# Do i really need to explain what this is?
> Run the code on the console (press F12 and search for console, then paste the code on main) or

Save this code as a favorite or bookmark:
``` javascript
javascript:fetch("")
  .then(r => r.text())
  .then(eval)
  .catch(e => alert("Failed to load the code: " + e));
```
