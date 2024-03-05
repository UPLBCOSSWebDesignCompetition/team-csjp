document.addEventListener("DOMContentLoaded", () => {
  // search-box open close js code
  let navbar = document.querySelector(".navbar");
  let searchBox = document.querySelector(".search-box .bx-search");
  // let searchBoxCancel = document.querySelector(".search-box .bx-x");

  searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
      searchBox.classList.replace("bx-search", "bx-x");
    } else {
      searchBox.classList.replace("bx-x", "bx-search");
    }
  });

  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");
  menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
  };
  menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
  };

  // sidebar submenu open close js code
  let htmlcssArrow = document.querySelector(".htmlcss-arrow");
  htmlcssArrow.onclick = function () {
    navLinks.classList.toggle("show1");
  };
  let moreArrow = document.querySelector(".more-arrow");
  moreArrow.onclick = function () {
    navLinks.classList.toggle("show2");
  };
  let jsArrow = document.querySelector(".js-arrow");
  jsArrow.onclick = function () {
    navLinks.classList.toggle("show3");
  };

  typing();
  showImg()
  scroll ()
  About ()
});

// HOME Typing
function typing() {
  var typed = new Typed(".text", {
    strings: ["Grow", "Community", "Society"],
    typeSpeed: 101,
    backSpeed: 100,
    backDelay: 120,
    loop: true,
  });
}
// HOME Typing

// Gallery
function showImg() {
  const galleryImages = document.querySelectorAll(".img-gallery .img-show");
  galleryImages.forEach((img) => {
    img.addEventListener("click", showBox); 
  });
}

function showBox(event) {
  const boxGallery = document.querySelector(".show-img");
  const fullImg = document.querySelector("#fullimg");
  const clickedImg = event.target.src;
  fullImg.src = clickedImg;
  boxGallery.classList.add("active");
  document.body.classList.add("no-scroll");

  const close = document.querySelector('#closeBox')
  close.addEventListener('click', () => {
    boxGallery.classList.remove('active')
    document.body.classList.remove("no-scroll");
  })

}

function shuffleGallery () {
  var gallery = document.querySelector('.img-gallery')
  for(var i = gallery.children.length; i >= 0; i-- ) {
    gallery.appendChild(gallery.children[Math.random() * i | 0]);
  }


}

window.onload = shuffleGallery()

// Gallery

// Scroll
function scroll () {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  })

  const DOM = document.querySelectorAll('.hidden')
  DOM.forEach(e => obs.observe(e))
}


function About () {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  })

  const DOM = document.querySelectorAll('.about')
  DOM.forEach(e => obs.observe(e))
}
// Scroll