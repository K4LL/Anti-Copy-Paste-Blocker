// Literally just block the events
document.addEventListener("paste", (e) => {
  e.stopImmediatePropagation();
}, true);

// Lol
document.addEventListener("drop", (e) => {
  e.stopImmediatePropagation();
}, true);

// Don't copy my code >:( 
// (It's the best code ever written)
document.addEventListener("dragover", (e) => {
  e.stopImmediatePropagation();
}, true);