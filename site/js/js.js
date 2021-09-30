//navbar ABOUT US

var linkClick = document.querySelector('.dropdown');
var linkToShow = document.querySelector('a.nav-link.dropdown-toggle');
var linkContentToShow = document.querySelector('ul.dropdown-menu');
if (window.screen.width >= 992) {
    linkClick.addEventListener('mousemove', function() {
        linkToShow.classList.add('show');
        linkContentToShow.classList.add('show');
    });
    linkClick.addEventListener('mouseleave', function() {
        linkToShow.classList.remove('show');
        linkContentToShow.classList.remove('show');
    });

} else {
    linkClick.addEventListener('click', function() {
        linkToShow.classList.toogle('show');
        linkContentToShow.classList.toggle('show');
    });
};

// features

var featuresHover = document.querySelectorAll('.features-content');
var featureShow = document.querySelectorAll('.content');
featuresHover.forEach(function(element, index) {
    element.addEventListener('mouseover', function() {
        featureShow[index].classList.remove('hide');
        element.style.backgroundColor = "#f5a425";
    });
    element.addEventListener('mouseleave', function() {
        featureShow[index].classList.add('hide');
        element.style.backgroundColor = "rgb(16, 16, 41)";
    });
})