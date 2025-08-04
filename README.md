# Do i really need to explain what this is?
> Run the code on the console or

Do this:
``` javascript
javascript:fetch("https://raw.githubusercontent.com/seu-usuario/seu-repo/main/seu-codigo.js")
  .then(r => r.text())
  .then(eval)
  .catch(e => alert("Failed to load the code: " + e));
```
