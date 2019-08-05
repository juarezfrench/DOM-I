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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItem = document.querySelectorAll("a");
// console.log('index.js -> %cnavItem:', 'color: blue', navItem)

navItem.forEach((item,i) => {
  (item.textContent = Object.values(siteContent.nav)[i])
  })

  let slogan = document.querySelector(".cta-text h1")
  // console.log('index.js -> %cctaText:', 'color: indigo',slogan)

  slogan.textContent=siteContent.cta.h1

  let ctaImage = document.querySelector("#cta-img")
  console.log('index.js -> %cctaImage:', 'color: red', ctaImage)
  ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

  let ctaButton = document.querySelector("button")
  // console.log('index.js -> %cctaButton:', 'color: violet', ctaButton)
  ctaButton.textContent=siteContent.cta.button  


let middleImage= document.querySelector("#middle-img")
//console.log('index.js -> %cmiddleImage:', 'color: blue', middleImage)
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])



let contactInfo = document.querySelectorAll('.contact > *')
//console.log('index.js -> %ccontactInfo:', 'color: green', contactInfo)
contactInfo.forEach((item,i) => {
  (item.textContent = Object.values(siteContent.contact)[i])
  })




let titles = document.querySelectorAll("h4");
console.log('index.js -> %ctitles:', 'color: purple', titles)

titles[0].textContent=siteContent["main-content"]["features-h4"]
titles[1].textContent=siteContent["main-content"]["about-h4"]
titles[2].textContent=siteContent["main-content"]["services-h4"]
titles[3].textContent=siteContent["main-content"]["product-h4"]
titles[4].textContent=siteContent["main-content"]["vision-h4"]


let contents = document.querySelectorAll("p");
console.log('index.js -> %cContents:', 'color: orange', contents)

contents[0].textContent=siteContent["main-content"]["features-content"]
contents[1].textContent=siteContent["main-content"]["about-content"]
contents[2].textContent=siteContent["main-content"]["services-content"]
contents[3].textContent=siteContent["main-content"]["product-content"]
contents[4].textContent=siteContent["main-content"]["vision-content"]


let footer = document.querySelector("footer")
footer.textContent=siteContent.footer.copyright









// featuresTitle.innerText=siteContent["main-content"]["features-h4"] 

// let featuresText = document.querySelector(".main-content",".top-content", ".text-content", "p")
// console.log('index.js -> %cfeaturesContent:', 'color: maroon', featuresText)

// // featuresText.innerText=siteContent["main-content"]["features-content"]  