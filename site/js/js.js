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

// var features = document.querySelectorAll('.features-post');
// var featuresContent = document.querySelectorAll('.features-post .content');
// features.forEach(function(elm, index) {
//     elm.hover(function() {
//         featuresContent[index].css('height', "180px");
//     }, function() {
//         featuresContent[index].css('height', "0px");
//     })
// })

var featuresHover = document.querySelectorAll('.features-post');
var featureShow = document.querySelectorAll('.features-post .content');
featuresHover.forEach(function(element, index) {
    element.addEventListener('mouseover', function() {
        featureShow[index].style.height = "150px";
    });
    element.addEventListener('mouseleave', function() {
        featureShow[index].style.height = "0px";
    });
});