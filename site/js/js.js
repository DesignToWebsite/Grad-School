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


// $(document).ready(function() {
$(".features-post").hover(function() {
    $(".features-post .content").css("height", "180px");
}, function() {
    $(".features-post .content").css("height", "0px");
});
    element.addEventListener('mouseleave', function() {
        featureShow[index].classList.add('hide');
        element.style.backgroundColor = "rgb(16, 16, 41)";
    });
})