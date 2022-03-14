// Toggle .nav-scrolled class to #nav when page is scrolled

const selectNav = document.getElementById('nav');
const selectTopbar = document.getElementById('topbar');

 function scrollNav() {
  if (selectNav) {
    const navScrolled = () => {
      if (window.scrollY > 100) {
        selectNav.classList.add('nav-scrolled');
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled');
        }
      } else {
        selectNav.classList.remove('nav-scrolled');
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled');
        }
      }
    }
    window.addEventListener('scroll', navScrolled);
  }
}

scrollNav();


// Open Mobile Menu and Dropdown
const hamburger = document.querySelector('.hamburger');
const openNav = document.querySelector('.list-wrap');
const icon = document.querySelector('.fa-bars');
const dropList = document.querySelector('.drop');
const dropItem = document.querySelector('.dropdown');

hamburger.onclick = function (){
  if(icon.classList.contains("fa-bars")){
    icon.classList.replace("fa-bars", "fa-times");
    openNav.style.display = 'block';
  }
  else{
    icon.classList.replace("fa-times", "fa-bars");
    openNav.style.display = 'none';
  }
}

dropList.addEventListener('click', () => {
  dropItem.classList.toggle('active');
})


// Scroll To Top Page
const backtotop = document.querySelector('.back-to-top');
backtotop.addEventListener('scroll', scrollToTop);

function clickIcon() {
  if(backtotop) {
   const showIcon = () => {
    if(document.documentElement.scrollTop > 100) {
      backtotop.style.visibility = 'visible';
      backtotop.style.opacity = '1';
    }else{
      backtotop.style.visibility = 'hidden';
      backtotop.style.opacity = '0';
    }
   }
   window.addEventListener('scroll', showIcon);
  }
}

clickIcon()

function scrollToTop() {
  document.documentElement.scrollTop = 0;
}


// Sroll to Next Section and change active state
const navbar = document.querySelector('.list').querySelectorAll('a[href^="#"]');

function scrollSection() {
  navbar.forEach(el => {
    el.addEventListener('click', function(){
      navbar.forEach(nav => nav.classList.remove('active'));

      this.classList.add('active');
    })
  })
}

scrollSection();


// Counter Page
const counters = document.querySelectorAll('.counter');
let counterSection = document.querySelector('.counts');

function runCounter() {
  counters.forEach(counter => {
    counter.innerText = 0;

    let target = +counter.getAttribute('data-target');
    let step = target / 100;
    
    let countIt = function() {
      let displayedCount = +counter.innerText;
      if(displayedCount < target) {
        counter.innerText = Math.ceil(displayedCount + step);
        setTimeout(countIt, 1);
      }else{
        counter.innerText = target;
      }
    }
    countIt();
  })
}

runCounter();

let options = {
  rootMargin : '0px 0px -200px 0px'
}

const sectionObserver = new IntersectionObserver(function(e) {
  if(e[0].isIntersecting) {
    runCounter();
  }
}, options);
sectionObserver.observe(counterSection);



// Dynamic Page Switcher
window.onload = () => {
  const tab_switchers = document.querySelectorAll('[data-switcher]');

  for (let i = 0; i < tab_switchers.length; i++) {
    const tab_switcher = tab_switchers[i];
    const page_id = tab_switcher.dataset.tab;

    tab_switcher.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.tabs .tab.active').classList.remove('active');
      tab_switcher.parentNode.classList.add('active');

      switchPage(page_id);
    })
  }
}

function switchPage(page_id) {
  const current_page = document.querySelector('.departments-text.active');
  current_page.classList.remove('active');

  const next_page = document.querySelector(`.departments-text[data-page="${page_id}"]`);
  next_page.classList.add('active');
}



// Faq Accordions
const faqHeaders = document.querySelectorAll('.faq-header');

faqHeaders.forEach(faqHeader => {
  faqHeader.addEventListener('click', function(e) {
    e.preventDefault()
    this.classList.toggle('active');
    const faqItemBody = faqHeader.nextElementSibling;
    if(faqHeader.classList.contains('active')) {
      faqItemBody.style.maxHeight = faqItemBody.scrollHeight + 'px';
      faqItemBody.style.transition = '.3s ease-in-out';
    }else{
      faqItemBody.style.maxHeight = 0;
    }
  })
})



//Gallery PopUp Slider
let buttons = document.querySelectorAll('.btn');
let gallery = document.querySelector('.gallery-popup-container');

let counter = 0;
const pictures = [
  "gallery-1", "gallery-2", "gallery-3", "gallery-4", "gallery-5", "gallery-6", "gallery-7", "gallery-8"
];

function galleryPopup () {

  buttons.forEach(function(button) {
    button.addEventListener('click', function(){

      if(button.classList.contains('btn-left')){
        counter--;
        if(counter < 0) {
          counter = pictures.length - 1;
        }
        gallery.style.backgroundImage = `url('img/gallery/${pictures[counter]}.jpg')`;
      }

      if(button.classList.contains('btn-right')){
        counter++;
        if(counter > pictures.length - 1) {
          counter = 0;
        }
        gallery.style.backgroundImage = `url(img/gallery/${pictures[counter]}.jpg)`;
      }

    })
  })
}

galleryPopup();



