function RedOrGreen (elementTag) {
 // body...

 var newElement = document.createElement(elementTag);

 this.makeGreen = function() {
 // body...
 	newElement.style.backgroundColor = "green";
 	newElement.innerHTML = "Passed!";
 };

 this.makeRed = function() {
 // body...
 	newElement.style.backgroundColor = "red";
 	newElement.innerHTML = "Failed!";
 };

 document.getElementById('container').appendChild(newElement);
};

