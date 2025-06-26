window.onscroll = function (){
     scrollFunction();
};

function scrollFunction(){
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop >20 || document.documentElement.scrollTop >20){
        scrollToTopBtn.style.display = "block";
    } else{
        scrollToTopBtn.style.display = "none";
    }
}
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const ani = ScrollReveal ({
    distance:'35px',
    duration:2200,
    reset:true
});

ani.reveal('.b-text',{delay:100, origin: 'top'});
ani.reveal('.about-img',{delay:200, origin: 'top'});
ani.reveal('.about-text',{delay:200, origin: 'bottom'});
ani.reveal('.skill-content',{delay:200, origin: 'bottom'});
ani.reveal('.section-header',{delay:200, origin: 'top'});
ani.reveal('.services-content',{delay:200, origin: 'top'});
ani.reveal('.contact-contect',{delay:200, origin: 'top'});