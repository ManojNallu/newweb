// create the close button and append it to the li.

var mylists = document.getElementsByTagName("li");
for (let i = 0; i < mylists.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt)
    mylists[i].appendChild(span);
}

//click on the close button to hide the current list elememt

var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var ele = this.parentElement;
        ele.style.display = "none";
    }
}

// make the list elements checked when u clicked 

var list = document.querySelector("ul");
list.addEventListener("click", function (elem) {
    if (elem.target.tagName === "LI") {
        elem.target.classList.toggle("checked");
    }
}, false);

//add the new li to the list when clicks the add button



function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt)
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var ele = this.parentElement;
            ele.style.display = "none";
        }
    }
}


