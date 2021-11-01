var responseDIV=document.body.querySelector(".response");
var list = ["Home", "About", "View"];
var listTwo = [];

function Nav_creation() {
    var nav = document.createElement("nav");
    createButton(list[0]);
    createButton(list[1]);
    createButton(list[2]);
    document.body.appendChild(nav);

    function createButton(pages) {
        var butt = document.createElement("button");
        butt.innerHTML = pages;
        butt.addEventListener("click", function () {
            navigate(pages);
        })
        nav.appendChild(butt);
    }
}

function createText() {
    var text = document.createElement("div");
    text.classList.add("text");
    document.body.appendChild(text);
}

function navigate(pages) {
    if (pages === "Home") {
        homePage()
    } else if (pages === "About") {
        aboutPage()
    } else {
        viewPage()
    }
}

function homePage() {
    var text = document.body.querySelector(".text");
    text.innerHTML = "";
    var title = document.createElement("h1");
    title.innerHTML = "Home";
    text.appendChild(title);
}

function aboutPage() {
    var text = document.body.querySelector(".text");
    text.innerHTML = "";
    var title = document.createElement("h1");
    title.innerHTML = "About";
    var name = document.createElement("h3");
    name.innerHTML = "Milan N Loncarevic";
    text.appendChild(title);
    text.appendChild(name);
}

function viewPage() {
    var textValue = document.body.querySelector(".input").value;
    var textValuePass = document.body.querySelector(".importance").value;
    var entertoday=document.body.querySelector(".enter")
    entertoday.innerHTML="";
    var title=document.createElement('h1');
    entertoday.innerHTML="View Notes"
    listTwo.push(textValue);
    listTwo.push(textValuePass);
    addNote();
}

function addNote() {
    var itemsDiv = document.body.querySelector(".items");
    itemsDiv.innerHTML = ";"
    for (var i = 0; i < listTwo.length; i++) {
        var ele = document.createElement("div");
        ele.innerHTML = listTwo[i];
        itemsDiv.appendChild(ele);
    }
}

document.body.querySelector(".butt").addEventListener("click", function () {
    var enteredUsername = document.body.querySelector(".input").value;
    if (enteredUsername === "coolStudent123") {
        responseDIV.innerHTML="";
        Nav_creation();
        createText();
        navigate("Home");
    } else {
        responseDIV.innerHTML = "The wrong username was entered. Try again!"
    }
})

