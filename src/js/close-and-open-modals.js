import { renderGalleryCard } from './event-card-modal-markap';

const body = document.querySelector('body');
const openModalTeam = document.querySelector('.js-open-team-modal');
const modalTeam = document.querySelector('[data-modal-team]');
const closeTeam = document.querySelector('[data-close-team]');
const backdropModalTeam = document.querySelector('[data-modal-team]');
const developers = document.querySelector('.developers');

const modal = document.querySelector('[data-modal]');
const closeModal = document.querySelector('[data-close]');
const galleryCard = document.querySelector('.js-events-gallery');
const backdropModal = document.querySelector('[data-modal]');
const modalWindow = document.querySelector('.modal');

openModalTeam.addEventListener('click', addHiddenClassToTeam);
closeTeam.addEventListener('click', addHiddenClassToTeam);
backdropModalTeam.addEventListener('click', e => {
  if (!e.composedPath().includes(developers)) {
    modalTeam.classList.toggle('backdrop-hidden');
    body.classList.toggle('no-scroll');
  }
});

galleryCard.addEventListener('click', openEventCardInModal);
closeModal.addEventListener('click', addHiddenClassToModal);
backdropModal.addEventListener('click', e => {
  if (!e.composedPath().includes(modalWindow)) {
    modal.classList.toggle('backdrop-hidden');
    body.classList.remove('no-scroll');
  }
});

function addHiddenClassToTeam(e) {
  modalTeam.classList.toggle('backdrop-hidden');
  body.classList.toggle('no-scroll');
  closeByKeybord(modalTeam);
}

function openEventCardInModal(e) {
  e.preventDefault();

  if (
    (e.target.nodeName !== 'UL') &
    (e.target.nodeName !== 'LI') &
    !e.target.parentNode.classList.contains('zero-matches')
  ) {
    renderGalleryCard(e.target.parentNode.dataset.id);
    modal.classList.remove('backdrop-hidden');
    body.classList.add('no-scroll');
    closeByKeybord(modal);
  }
}

function addHiddenClassToModal() {
  modal.classList.add('backdrop-hidden');
  body.classList.remove('no-scroll');
}

function closeByKeybord(value) {
  document.addEventListener(
    'keydown',
    e => {
      if (e.code == 'Escape') {
        value.classList.add('backdrop-hidden');
        body.classList.remove('no-scroll');
      }
    },
    { once: true }
  );
}
