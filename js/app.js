var responseDIV=document.body.querySelector(".response");

document.body.querySelector(".butt").addEventListener("click", function () {
    var enteredUsername = document.body.querySelector(".input").value;
    if (enteredUsername === "coolStudent123") {
        website();
    } else {
        responseDIV.innerHTML = "The wrong username was entered. Try again!"
    }
})

function website(){
    var list=["Home", "About", "Interact"];

    function Nav_creation(){
        var nav=document.createElement("nav");
        createButton(list[0]);
        createButton(list[1]);
        createButton(list[2]);
        document.body.appendChild(nav);

        function createButton(pages){
            var butt=document.createElement("button");
            butt.innerHTML=pages;
            butt.addEventListener("click", function (){
                navigate(pages);
            })
            nav.appendChild(butt);
        }
    }

    function createText(){
        var text=document.createElement("div");
        text.classList.add("text");
        document.body.appendChild(text);
    }

    function navigate(pages){
        if(pages==="Home"){
            homePage()
        }else if(pages==="About"){
            aboutPage()
        }
        else{
            interactPage()
        }
    }

    function homePage(){
        var text=document.body.querySelector(".text");
        text.innerHTML="";
        var title=document.createElement("h1");
        title.innerHTML="Home";
        text.appendChild(title);
    }

    function aboutPage(){
        var text=document.body.querySelector(".text");
        text.innerHTML="";
        var title=document.createElement("h1");
        title.innerHTML="About";
        var name=document.createElement("h3");
        name.innerHTML="Milan N Loncarevic";
        text.appendChild(title);
        text.appendChild(name);
    }

    function interactPage(){
        var text=document.body.querySelector(".text");
        text.innerHTML="";
        var title=document.createElement("h1");
        title.innerHTML="Interact";
        var line=document.createElement("h2");
        var startNumber=0;
        line.innerHTML="Counter: " + startNumber
        text.appendChild(title);
        text.appendChild(line)
        create_Button("Counter");

        function create_Button(counter){
            var butt=document.createElement("button");
            butt.innerHTML=counter;
            butt.addEventListener("click", function (){
                interactionCounter();
            })
            text.appendChild(butt);
        }

        function interactionCounter(){
            startNumber = startNumber + 1;
            line.innerHTML="Counter: " + startNumber
        }
    }

    Nav_creation();
    createText();
    navigate("Home");
}

