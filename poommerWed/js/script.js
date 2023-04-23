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

function hoverContact (IdContact) {
   let id = document.getElementById(IdContact)
   let data = id.getAttribute('data-contact');
   let show = document.getElementById('contact-data');
   let showData = document.getElementById('show-data-contact');
    show.classList.add('contact-data-active');
    showData.innerText = data;

   let iframe = document.getElementById('iframe-link');
   let iframeLink = id.getAttribute('data-iframe-link');
    iframe.setAttribute('src',iframeLink)
    iframe.classList.add('contact-data-active');

}

function NotHoverContact (IdContact,iframeLink) {
    data = document.getElementById(IdContact).getAttribute('data-contact');
    show = document.getElementById('contact-data');
    showData = document.getElementById('show-data-contact');
    show.classList.remove('contact-data-active');
    showData.innerText = '';
    let iframe = document.getElementById('iframe-link');
    iframe.classList.remove('contact-data-active');

}