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

function gototop(){
    window.scrollTo(0, 0);
}

window.onload = function () {
    let i = 0;
    let y = 0;
    let selectedText = "briefly introduce myself";
    let text = "";
    let selectedText2 = "''...เราไม่สามารถเปลี่ยนนิสัยของคนอื่นได้ แต่สามารถเพิ่มหรือลดระยะห่างความัมพันธ์กับคนอื่นได้ตามใจ...''";
    let text2 = "";
    (function type() {
        text = selectedText.slice(0, i++);
        document.getElementById('topic-text-intro').innerHTML = text;
        text2 = selectedText2.slice(0, y++);
        document.getElementById('text-intro2').innerHTML = text2;
        if (text.length == selectedText.length) {
            setTimeout(function () { i = 0; }, 3000);
        }

        if (text2.length == selectedText2.length) {
            setTimeout(function () { y = 0; }, 3000);
        }
        setTimeout(type, 90);
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


function  moreWork(Workactive,Work1,Work2){
    document.getElementById(Workactive).classList.add('show-work-active')
    document.getElementById(Work1).classList.remove('show-work-active')
    document.getElementById(Work2).classList.remove('show-work-active')
}


    var slideIndex = 1;
    ShowImg(slideIndex);
    function plusSlides(n) {
        ShowImg(slideIndex += n);
    }

    function currentSlide(n) {
        ShowImg(slideIndex = n);
    }

    function ShowImg(n) {
        var i;
        var slides = document.getElementsByClassName("Act-img");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "flex";
    }

// ---------------------------------------------------------------------------------------------
    var slideIndex2 = 1;
    ShowImg2(slideIndex2);
    function plusSlides2(n) {
        ShowImg2(slideIndex2 += n);
    }

    function currentSlide2(n) {
        ShowImg2(slideIndex2 = n);
    }

    function ShowImg2(n) {
        var i;
        var slides2 = document.getElementsByClassName("Act-img2");
        if (n > slides2.length) { slideIndex2 = 1 }
        if (n < 1) { slideIndex2 = slides2.length }
        for (i = 0; i < slides2.length; i++) {
            slides2[i].style.display = "none";
        }
        slides2[slideIndex2 - 1].style.display = "flex";
    }

// ---------------------------------------------------------------------------------------------

var slideIndex3 = 1;
ShowImg3(slideIndex3);
function plusSlides3(n) {
    ShowImg3(slideIndex3 += n);
}

function currentSlide3(n) {
    ShowImg3(slideIndex3 = n);
}

function ShowImg3(n) {
    var i;
    var slides = document.getElementsByClassName("Act-img3");
    if (n > slides.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex3 - 1].style.display = "flex";
}