// test function
document.querySelector('li').onclick = function() {
    alert("that's a list item");
}

// onclick function sample
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ayyy1.png') {
      myImage.setAttribute ('src','images/ayyy2.png');
    } else {
      myImage.setAttribute ('src','images/ayyy1.png');
    }
}


// user id save and button usage
var myButton = document.getElementById('userButton');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome, ' + myName;
}
if(!localStorage.getItem('name')) { // if username is not set
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}