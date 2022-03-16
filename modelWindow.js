'use strict';

const modal = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const buttCloseModel = document.querySelector('.close-model');
const buttons = document.querySelectorAll('.butt');

for (let butts of buttons)
  butts.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

const closeModel = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

buttCloseModel.addEventListener('click', closeModel);

overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
