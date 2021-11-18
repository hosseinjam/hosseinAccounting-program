var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLenght() {
    return input.value.length;
}

function createListElement() {
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";

    function crossOut() {
        li.classList.toggle("done");
    }
    li.addEventListener("click",crossOut);

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click",deleteListItem);


    function deleteListItem() {
        li.classList.add("delete");
    }
}




function addListAfterClick() {
    
    if (inputLenght() > 0) {
        createListElement();
    }
}

function addListAfterClickKeyPress(event) {
    if (inputLenght() > 0 && event.which === 13) {
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterClickKeyPress);


// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
    }
    // This function display values
    function display(value) {
    document.getElementById("result").value += value;
    }
    // This function evaluates the expression and return result
    function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    }

    function display(value) {
        document.getElementById("result").value += value;
        }

        function calculate() {
            var p = document.getElementById("result").value;
            var q = eval(p);
            document.getElementById("result").value = q;
            }