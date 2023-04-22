function CloseNav() {
    let Nav = document.querySelector(".nav-area");
    Nav.classList.remove('openNav-active');
}

function openNav() {
    let Nav = document.querySelector(".nav-area");
    Nav.classList.toggle('openNav-active');
}

function goto(secID){
    document.getElementById(secID).scrollIntoView();
    document.querySelector(".nav-area").classList.remove('openNav-active');
}

window.onload = function () {
    let i = 0;
    let selectedText = "briefly introduce myself";
    let text2 = "";
    (function type() {
        text2 = selectedText.slice(0, i++);
        document.getElementById('topic-text-intro').innerHTML = text2;

        if (text2.length == selectedText.length) {
            setTimeout(function () { i = 0; }, 3000);
        }
        setTimeout(type, 80);
    })();
};

