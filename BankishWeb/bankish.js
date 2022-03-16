'use strict';
const model = document.querySelector('.pop-up-window');
const overlay = document.querySelector('.overlay');
const closeModel = document.querySelector('.btn-close');
const btnDonate = document.querySelectorAll('.open-model');
const allSections = document.querySelectorAll('.section');
const allNavLinks = document.querySelector('.nav-links');

btnDonate.forEach(function (btton) {
  btton.addEventListener('click', function (e) {
    e.preventDefault();
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

const closeMode = function () {
  overlay.classList.add('hidden');
  model.classList.add('hidden');
};

closeModel.addEventListener('click', closeMode);

overlay.addEventListener('click', closeMode);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeMode();
  }
});

///implementing a scroll button from main Nav

const btnScroll = document.querySelector('.btn--scroll-to');
const sectionOne = document.getElementById('about-section');

btnScroll.addEventListener('click', function (e) {
  sectionOne.scrollIntoView({ behavior: 'smooth' });
});

//implemeting smooth scroll to the individual NAV links
//remember to select the parent elemets and let it delegate the event
allNavLinks.addEventListener('click', function (e) {
  e.preventDefault();

  //matching strategy
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
//
///
//
//
// -----------------------------scrolling intoView from footer-----------------------------
//
document.querySelector('.footer-nav').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('footer-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
//
//
//

// -----------------Tabbed component-------------------
const tabs = document.querySelectorAll('.operations-tab');
const tabsContainer = document.querySelector('.operations-tab-container');
const tabsContent = document.querySelectorAll('.operations-content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations-tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove('operations-tab--active'));
  tabsContent.forEach((c) => c.classList.remove('operations-content--active'));

  // Activate tab
  clicked.classList.add('operations-tab--active');

  // Activate content area
  document
    .querySelector(`.operations-content--${clicked.dataset.tab}`)
    .classList.add('operations-content--active');
});

//-------------Events Bubble up---------------------

// [[[[
// ]]]]
// [[]]

const nav = document.querySelector('.main-nav');

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav-link')) {
    const link = e.target;
    const siblings = link.closest('.main-nav').querySelectorAll('.nav-link');
    const logo = link.closest('.main-nav').querySelector('img');

    siblings.forEach(function (ele) {
      if (ele !== link) ele.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

//pasing urguments into handlers
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.2);
});
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

//
///
///-------------------implementing a sticky navigation------------
//

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  //   console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
});

headerObserver.observe(header);

///
//
//
//------------Revealing sections as we approact them using js------

const revealSection = function (entries, observer) {
  const [entry] = entries;
  //   console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  //   observer.unobserver(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (secti) {
  sectionObserver.observe(secti);
  secti.classList.add('section--hidden');
});

//------------lazy loading images-----------------
const imageTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  //   observer.unobserver(entry.target);
};
const imgOberver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: `150px`, //start loading the images 150px before reaching
});

imageTargets.forEach((img) => imgOberver.observe(img));

///

//
// ------------------TOP Image SLIDER----------------------
const sliders = function () {
  const tslides = document.querySelectorAll('.tslide');
  const btnLeft = document.querySelector('.slider-btn--left');
  const btnRight = document.querySelector('.slider-btn--right');
  const dotContainer = document.querySelector('.dots');

  let currentSlide = 0;
  const maxSlide = tslides.length;

  //function go to slide
  const gotoSlide = function (slide) {
    tslides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //activate dot

  const activateDot = function (slide) {
    document.querySelectorAll('.dots-dot').forEach(function (dot) {
      dot.classList.remove('dots-dot--active');

      document
        .querySelector(`.dots-dot[data-slide="${slide}"]`)
        .classList.add('dots-dot--active');
    });
  };
  //
  //
  //
  //

  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    gotoSlide(currentSlide);
    activateDot(currentSlide);
  };
  //
  //

  const createDots = function () {
    tslides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        `beforeend`,
        `<button class="dots-dot" data-slide="${i}">
          </button>`
      );
    });
  };
  //
  //
  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    gotoSlide(currentSlide);
    activateDot(currentSlide);
  };
  //
  //
  //
  //
  // Initialization
  const init = function () {
    gotoSlide(0);
    createDots();
    activateDot(0);
  };
  init();
  //
  //
  //--------going to the next image

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  //
  //
  //
  //
  //---------keyboard event handler

  document.addEventListener('keydown', function (e) {
    if (e.key === `ArrowLeft`) prevSlide();
    e.key === `ArrowRight` && nextSlide();
  });
  //
  //
  //
  //
  //------------using the dots

  dotContainer.addEventListener('click', function (e) {
    e.target.classList.contains('dots-dot');
    const { slide } = e.target.dataset;
    gotoSlide(slide);
    activateDot(slide);
  });
};
sliders();
//
///
//
//
//
// ------------------BUILDING LOWER SLIDER--------------
// overall functions
const slidersLow = function () {
  // selecting elements for use
  const lslides = document.querySelectorAll('.lslide');
  const lbtnLeft = document.querySelector('.lslider-btn--left');
  const lbtnRight = document.querySelector('.lslider-btn--right');
  const ldotContainer = document.querySelector('.ldots');

  //   initialising the current slider and number of slides
  let lcurrentSlide = 0;
  const maxSlide = lslides.length;

  //function go to slide
  const gotoSlide = function (lslide) {
    lslides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - lslide)}%)`)
    );
  };
  //
  //activate dot

  const activateDot = function (lslide) {
    document.querySelectorAll('.ldots-dot').forEach(function (ldot) {
      ldot.classList.remove('ldots-dot--active');

      document
        .querySelector(`.ldots-dot[data-slide="${lslide}"]`)
        .classList.add('ldots-dot--active');
    });
  };
  //
  //
  // creating dots /
  const createDots = function () {
    lslides.forEach(function (_, i) {
      ldotContainer.insertAdjacentHTML(
        `beforeend`,
        `<button class="ldots-dot" data-slide="${i}">
            </button>`
      );
    });
  };
  //move to the next slide

  const nextSlide = function () {
    if (lcurrentSlide === maxSlide - 1) {
      lcurrentSlide = 0;
    } else {
      lcurrentSlide++;
    }
    gotoSlide(lcurrentSlide);
    activateDot(lcurrentSlide);
  };
  //
  //
  //
  //slide to the predious slide
  const prevSlide = function () {
    if (lcurrentSlide === 0) {
      lcurrentSlide = maxSlide - 1;
      console.log('next ');
    } else {
      lcurrentSlide--;
      console.log('no next');
    }
    gotoSlide(lcurrentSlide);
    activateDot(lcurrentSlide);
  };
  //
  // Initialization
  const linit = function () {
    gotoSlide(0);
    createDots();
    activateDot(0);
  };
  linit();
  //
  //--------going to the next image

  lbtnRight.addEventListener('click', nextSlide);
  lbtnLeft.addEventListener('click', prevSlide);
  //
  //---------keyboard event handler

  document.addEventListener('keydown', function (e) {
    if (e.key === `ArrowLeft`) prevSlide();
    e.key === `ArrowRight` && nextSlide();
  });
  //
  //------------using the dots

  ldotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('ldots-dot')) {
      const { lslide } = e.target.dataset;
      gotoSlide(lslide);
      activateDot(lslide);
    }
  });
};
slidersLow();
