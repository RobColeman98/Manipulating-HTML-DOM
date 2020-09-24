let button = document.createElement('button');
let btnText = document.createTextNode('Click Here');
let container = document.querySelector("div");
let para = document.querySelector("p");
let newButton = document.querySelector("#newBtn");
let spans = document.getElementsByTagName('span');
let nameDiv = document.getElementById("pizza");
let yBTn = document.getElementById('yep');

 
const colorArray = ['red', 'blue', 'purple', 'orange', 'green', 'yellow', 'pink'];
button.appendChild(btnText);
document.body.appendChild(button);

button.addEventListener("click", function () {
    alert("Gotcha Punk!");
});


let otherBtn = document.getElementById("otherBtn");
let otherText = document.getElementById("Text Box");
console.log(otherBtn)
otherBtn.addEventListener("click", function () {
    alert("How about now");
});

container.addEventListener('mouseover', function () {
    const randomNum = Math.floor((Math.random() * 7));
    container.style.backgroundColor = colorArray[randomNum]
});

container.addEventListener('mouseout', function () {
    container.style.backgroundColor = ""
});

para.addEventListener("click", function() {
    const randomNum = Math.floor((Math.random() * 7));
    para.style.color = colorArray[randomNum];
});

newButton.addEventListener("click", function () {
    let nameSpan = document.createElement('span')
    let nameText = document.createTextNode("Robert Coleman")
    nameSpan.appendChild(nameText)
   nameDiv.appendChild(nameSpan)

   newButton.disabled = true
}); 

let list = document.getElementById("list")
const friends = ['Daniel', 'Mike', 'Anthony', 'Victor', 'Matt', 'Craig', 'Danny', 'P', 'Quentin', 'Dom'];
let counter = 0
yBTn.addEventListener('click' , function () {
   let li = document.createElement('li');
   li.innerText = friends[counter]
    list.appendChild(li);
    counter++
});
