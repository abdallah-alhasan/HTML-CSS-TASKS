let theme = document.getElementById("theme")
let theme1= document.querySelectorAll(".c")
let theme2= document.querySelectorAll("#CV a")
let theme3= document.querySelectorAll(`.navbar .navbar-nav .nav-link`)
let theme4= document.querySelector(".img")
let theme5= document.querySelectorAll("h2")
for_h2= ()=> {
    for (i = 0 ; i < theme5.length ; i++){
        theme5[i].style.color = localStorage.getItem("color")
    }
}

for (i = 0 ; i < theme1.length ; i++){
    theme1[i].style.backgroundColor = localStorage.getItem("color")
    theme2[0].style.color = localStorage.getItem("color")
    theme2[0].style.borderColor = localStorage.getItem("color")
    theme4.style.background =  `url(../../images/pp4.png) top ${localStorage.getItem("color")} `
}
theme.onblur= function (){
    localStorage.setItem("color" , theme.value)
    for (i = 0 ; i < theme1.length ; i++){
    theme1[i].style.backgroundColor = localStorage.getItem("color")
    theme2[0].style.color = localStorage.getItem("color")
    theme2[0].style.borderColor = localStorage.getItem("color")
    theme4.style.background =  `url(../../images/pp4.png) top ${localStorage.getItem("color")} `
}
for_h2()
}


let defult = document.getElementById("defult")
defult.onclick = function (){
    localStorage.setItem("color" , "#3dcfd3")
    theme.value = "#3dcfd3"
    for (i = 0 ; i < theme1.length ; i++){
        theme1[i].style.backgroundColor = localStorage.getItem("color")
        theme2[0].style.color = localStorage.getItem("color")
        theme2[0].style.borderColor = localStorage.getItem("color")
        theme4.style.background =  `url(../../images/pp4.png) top ${localStorage.getItem("color")} `
    }
    for (i = 0 ; i < theme5.length ; i++){
        theme5[i].style.color = localStorage.getItem("color")
    }
}




for ( i = 0 ; i < theme3.length; i++){
    theme3[i].onmouseover = function (){
        this.style.color = localStorage.getItem("color")
    }
}
for ( i = 0 ; i < theme3.length; i++){
    theme3[i].onmouseout = function (){
        this.style.color = "white"
    }
}

