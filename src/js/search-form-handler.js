import { debounce } from 'debounce';
import { countries } from './countries';
import { markapCountryList } from './select-country-markup';
import { displayGallery } from './displayGallery';
import { findeCountry } from './select-country-markup';
import { paginationList } from './displayGallery';
import svg from '../images/sprite.svg';

const refs = {
  keyword: document.querySelector('.keyword'),
  selectCountryField: document.querySelector('.select-country'),
  galleryList: document.querySelector('.gallery__list'),
  countrylistThumb: document.querySelector('.country_list-thumb'),
  countrylist: document.querySelector('.country_list'),
  searchSvg: document.querySelector('.search__svg'),
  selectSvg: document.querySelector('.select__svg'),
};

export let countryCode = '';
export let keyword = '';

refs.selectCountryField.addEventListener(
  'input',
  debounce(onSelectCountryFieldHdlr, 500)
);
refs.selectCountryField.addEventListener('focus', onSelectCountryFocusHdlr);
refs.selectCountryField.addEventListener('blur', onSelectCountryBlurHdlr);
refs.countrylist.addEventListener('click', onCountrylistHdlr);
refs.keyword.addEventListener('input', debounce(onKeywordHdlr, 500));
refs.keyword.addEventListener('focus', onKeywordFocusHdlr);
refs.keyword.addEventListener('blur', onKeywordBlurHdlr);

function onSelectCountryFieldHdlr(e) {
  const filterCountries = findeCountry(e.target.value, countries);
  refs.countrylist.innerHTML = markapCountryList(filterCountries);
  refs.selectCountryField.classList.add('select__field');
  refs.countrylistThumb.classList.remove('is-hidden');
}

function onSelectCountryFocusHdlr(e) {
  e.preventDefault();

  refs.countrylist.innerHTML = markapCountryList(countries);
  refs.countrylistThumb.classList.toggle('is-hidden');
  refs.selectCountryField.classList.toggle('select__field');
  refs.selectCountryField.placeholder = 'Choose country';
  refs.selectSvg.classList.add('focus');
}

function onSelectCountryBlurHdlr(e) {
  refs.countrylistThumb.classList.add('is-hidden');
  refs.selectCountryField.classList.remove('select__field');
  refs.selectSvg.classList.remove('focus');
}

function onCountrylistHdlr(e) {
  countryCode = e.target.dataset.id;

  if (countryCode === 'RU') {
    paginationList.innerHTML = '';
    refs.galleryList.innerHTML = `<li class="gallery__item kobzon" >
	  <div class="gallery__div"">
		  <a class="gallery__link animation js-gallery-card" href="">
				<img class="gallery__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsnt4vP2jNbIX4gRk6QxjRnRal972jC6HMw&usqp=CAU" width="267px" height="337px"
					 alt="thing">
				<div class="gallery__pinkBorder"></div>
				<div class="event-info">
					 <h3 class="event-heading">Kobzon Joseph</h3>
					 <p class="event-data">Now</p>
					 <p class="event-place">
						  <svg class="Map__icon" width="7" height="10">
								<use href="${svg}#Map"></use>
						  </svg>HELL</p>
				</div>
		  </a>
	 </div></li>`;

    refs.selectCountryField.placeholder = 'Choose another country';
  } else if (e.target.nodeName === 'LI') {
    refs.selectCountryField.placeholder = e.target.textContent;
    displayGallery({ countryCode, keyword });
  }
}

function onKeywordHdlr(e) {
  keyword = e.target.value;
  displayGallery({ countryCode, keyword });
}

function onKeywordFocusHdlr() {
  refs.searchSvg.classList.add('focus');
}

function onKeywordBlurHdlr(e) {
  refs.searchSvg.classList.remove('focus');
}
