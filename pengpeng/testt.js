document.write('hello!<br>');

document.write(window.screen.width + "x" + window.screen.height + "y")
function change(){
    // window.document.body.innerHTML="Hello~aaaaaa";
    var spanObj = window.document.getElementById("emotion") //window 可以不寫
    spanObj.innerHTML = "bad";
    spanObj.style.color="red";
    spanObj.style.fontWeight="bold";
    // spanObj.style.display="none";

}


