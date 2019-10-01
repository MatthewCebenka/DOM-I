const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



// NAV-BAR

const navOne = document.querySelectorAll('a');
navOne[0].textContent = siteContent["nav"]["nav-item-1"];
const navTwo = document.querySelectorAll('a');
navTwo[1].textContent = siteContent["nav"]["nav-item-2"];
const navThree = document.querySelectorAll('a');
navThree[2].textContent = siteContent['nav']['nav-item-3']
const navFour = document.querySelectorAll('a');
navFour[3].textContent = siteContent["nav"]["nav-item-4"];
const navFive = document.querySelectorAll('a');
navFive[4].textContent = siteContent['nav']['nav-item-5'];
const navSix = document.querySelectorAll('a');
navSix[5].textContent = siteContent['nav']['nav-item-6'];

const navPend = document.querySelector('header nav')

const navPre = document.createElement('a');
navPre.href = "#";
navPre.textContent = "Matthew"
navPend.prepend(navPre)

const navApp = document.createElement('a');
navApp.href = "#";
navApp.textContent = "MATT"
navPend.appendChild(navApp);

Array.from(document.querySelectorAll('a')).forEach(function(value) {
    value.style.color = 'green';
});

// CTA

const ctaOne = document.getElementsByTagName('h1');
ctaOne[0].textContent = siteContent['cta']['h1'];
const ctaTwo = document.getElementsByTagName('button');
ctaTwo[0].textContent = siteContent['cta']['button'];
const ctaThree = document.getElementById('cta-img');
ctaThree.setAttribute("src", siteContent['cta']['img-src']);

// Main Content

const mainContentOne = document.querySelectorAll('h4');
mainContentOne[0].textContent = siteContent['main-content']['features-h4'];
const mainContentTwo = document.querySelectorAll('p');
mainContentTwo[0].textContent = siteContent['main-content']['features-content'];
const mainContentThree = document.querySelectorAll('h4');
mainContentThree[1].textContent = siteContent["main-content"]['about-h4'];
const mainContentFour = document.querySelectorAll('p');
mainContentFour[1].textContent = siteContent['main-content']['about-content'];
const mainContentFive = document.getElementById('middle-img');
mainContentFive.setAttribute('src', siteContent['main-content']['middle-img-src']);
const mainContentSix = document.querySelectorAll('h4');
mainContentSix[2].textContent = siteContent['main-content']['services-h4'];
const mainContentSeven = document.querySelectorAll('p');
mainContentSeven[2].textContent = siteContent['main-content']['services-content'];
const mainContentEight = document.querySelectorAll('h4');
mainContentEight[3].textContent = siteContent['main-content']['product-h4'];
const mainContentNine = document.querySelectorAll('p');
mainContentNine[3].textContent = siteContent['main-content']['product-content'];
const mainContentTen = document.querySelectorAll('h4');
mainContentTen[4].textContent = siteContent['main-content']['vision-h4'];
const mainContentEleven = document.querySelectorAll('p');
mainContentEleven[4].textContent = siteContent['main-content']['vision-content'];

// Contact Section

const contactOne = document.querySelectorAll('h4');
contactOne[5].textContent = siteContent['contact']['contact-h4'];
const contactTwo = document.querySelectorAll('p');
contactTwo[5].textContent = siteContent['contact']['address'];
const contactThree = document.querySelectorAll('p');
contactThree[6].textContent = siteContent['contact']['phone'];
const contactFour = document.querySelectorAll('p');
contactFour[7].textContent = siteContent['contact']['email'];

// Footer 

const footer = document.querySelectorAll('p');
footer[8].textContent = siteContent['footer']['copyright'];