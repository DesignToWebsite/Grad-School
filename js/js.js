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


// carousel

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        500: {
            items: 2,
            nav: false
        },
        750: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            loop: false
        },
        1200: {
            items: 5,
            nav: true,
            loop: false
        }

    }
});


///date footer

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();



//timer

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];


//select element

//the text in desc to change the time
//the container of the timer
var countdown = document.querySelector(".count");
//select the container that container the day hours min...
var num = document.querySelectorAll(".number");

//select the time that existe in the computer

let tempsNow = new Date();
console.log(tempsNow);

//select the year
let yearNow = tempsNow.getFullYear();
console.log("year " + yearNow);

//select the months
let monthNow = tempsNow.getMonth();
console.log("month " + monthNow);

//select the day
let dayNow = tempsNow.getDate();
console.log("day " + dayNow);


//date au future
let futureDate = new Date(yearNow, monthNow, dayNow + 30, 12, 60, 60);
console.log(futureDate);

//select the future year
let yearFuture = futureDate.getFullYear();
console.log("year future " + yearFuture);

//select the future months
let monthFuture = futureDate.getMonth();
console.log("month future " + monthFuture);

//select the future day
let dayFuture = futureDate.getDate();
console.log("day future " + dayFuture);

//select the hour
let hourFuture = futureDate.getHours();
console.log("the future hour " + hourFuture);

//select minutes
let minuteFuture = futureDate.getMinutes();
console.log("the future minutes " + minuteFuture);

//select hours
let secondFuture = futureDate.getSeconds();
console.log("the futre seconds " + secondFuture);


//solve the problem of the month and day number

monthFuture = months[monthFuture];
console.log("the problem of the mounth is solved : " + monthFuture);

const weekday = weekdays[futureDate.getDay()];
console.log("the problem of the day is solved :: " + weekday);




//select the time now 

let timeFuture = futureDate.getTime();
console.log("the future time " + timeFuture);

function counter() {
    let timeNow = new Date().getTime();
    console.log("time now :::::" + timeNow);

    const t = timeFuture - timeNow;

    console.log("the time counter t : " + t);

    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    oneDay = 24 * 60 * 60 * 1000;
    oneHour = 60 * 60 * 1000;
    oneMinute = 60 * 1000;

    let days = Math.floor(t / oneDay);
    console.log("days :" + days);

    let hours = Math.floor((t % oneDay) / oneHour);
    console.log("hours :" + hours);

    let minutes = Math.floor((t % oneHour) / oneMinute);
    console.log("minutes :" + minutes);

    let secondes = Math.floor((t % oneMinute) / 1000);
    console.log("secondes :" + secondes);

    let value = [days, hours, minutes, secondes];

    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        } else {
            return item;
        }
    }

    num.forEach(function(item, index) {
        item.innerHTML = format(value[index]);
    });
    if (t < 0) {
        clearInterval(countdown);
        countdown.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }

}
let countdownS = setInterval(counter, 1000);
counter();

//lessons