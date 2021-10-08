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

var featuresHover = document.querySelectorAll('.features-post');
var featureShow = document.querySelectorAll('.features-post .content');
featuresHover.forEach(function(element, index) {
    element.addEventListener('mouseover', function() {
        if (window.screen.width >= 1020) {
            featureShow[index].style.height = "180px";
        } else if (window.screen.width >= 1000) {
            featureShow[index].style.height = "230px";
        } else if (window.screen.width >= 770) {
            featureShow[index].style.height = "140px";

        } else if (window.screen.width >= 480) {
            featureShow[index].style.height = "100px";
        } else {
            featureShow[index].style.height = "140px";
        }

    });
    element.addEventListener('mouseleave', function() {
        featureShow[index].style.height = "0px";
    });
});

//why us

var linkToChoose = document.querySelectorAll('li.list-category');
var contentWhyUs = document.querySelectorAll('.why');

linkToChoose.forEach(function(element) {
    element.addEventListener('click', function(e) {
        contentWhyUs.forEach(function(elem) {
            elem.classList.add('hide');
        });
        var linkClass = e.currentTarget.classList;
        if (linkClass.contains("best")) {
            document.querySelector('.why.best').classList.remove('hide');

        } else if (linkClass.contains("quality")) {
            document.querySelector('.why.quality').classList.remove('hide');

        } else if (linkClass.contains('top')) {
            document.querySelector('.why.top').classList.remove('hide');
        }


    });
});