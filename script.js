var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var del=ul.querySelector("button");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var b=document.createElement("button");
	b.className="one";
	b.appendChild(document.createTextNode("delete"));
	console.log(b);

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	// li.append("&nbsp;");
	li.appendChild(b);
	ul.appendChild(li);
	input.value = "";
	console.log(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function done(event){
	// console.log(event.target.tagName)
	if(event.target.tagName==="BUTTON")
	{
		delll(event.target.parentElement);
	}
	else{
	var z=event.target.classList.toggle("done");  //target gives the specfic object which caused the event in this case list element.
}}
function delll(node){
	var dd=node;
	node.remove()
	// console.log(dd);
	// dd.remove();
	// event.target.remove();
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click",done);
// del.addEventListener("click",delll);


