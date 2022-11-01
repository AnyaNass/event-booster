import { countryCode } from './search-form-handler';
import { keyword } from './search-form-handler';
import { displayGallery } from './displayGallery';

const paginationIteam = document.querySelector('.pagination');

paginationIteam.addEventListener('click', onpaginationIteamHdlr);

function onpaginationIteamHdlr(e) {
	const page = Number(e.target.dataset.page) - 1;
	displayGallery({ countryCode, keyword, page });
}

export function paginationMarkap(totalPages, pageNumber) {
	let pageArrResp = [];
	let pageArr = [];
	const maxPageQuantity = 30;
	const paginationLength = 7;
	const quantityVisiblePagesStartEnd = 5;
	const quantityVisiblePagesCenter = 3;

	for (let index = 1; index <= totalPages; index += 1) {
		pageArrResp.push(index);
	}
	if (pageArrResp.length > maxPageQuantity) {
		pageArr = pageArrResp.slice(0, maxPageQuantity);
	} else pageArr = pageArrResp;

	if (pageArr.length <= paginationLength) {
		const markap = pageArr.reduce(
			(acc, number) =>
				(acc += `<li class="pagination-item" data-page=${number}>${number}</li>`),
			``
		);
		return markap;
	} else if (pageNumber < quantityVisiblePagesStartEnd) {
		const markap = pageArr.reduce((acc, number, index, arr) => {
			if (number <= quantityVisiblePagesStartEnd) {
				acc += `<li class="pagination-item" data-page=${number}>${number}</li>`;
			} else if (number === 6) {
				acc += `<li class="pagination-item--points" data-page=${pageNumber + quantityVisiblePagesCenter
					}>...</li>`;
			} else if (number === paginationLength) {
				acc += `<li class="pagination-item" data-page=${arr.length}>${arr.length}</li>`;
			}
			return acc;
		}, ``);
		return markap;
	} else if (
		(pageNumber >= quantityVisiblePagesStartEnd) &
		(pageNumber <= pageArr.length - 4)
	) {
		const markap = pageArr.reduce((acc, number, index, arr) => {
			if (number === 1) {
				acc += `<li class="pagination-item" data-page=${number}>${number}</li>`;
			} else if ((number > 1) & (number < quantityVisiblePagesCenter)) {
				acc += `<li class="pagination-item--points" data-page=${pageNumber - quantityVisiblePagesCenter
					}>...</li>`;
			} else if (
				(number >= quantityVisiblePagesCenter) &
				(number < pageNumber - 1)
			) {
				acc += ``;
			} else if ((number >= pageNumber - 1) & (number <= pageNumber + 1)) {
				acc += `<li class="pagination-item" data-page=${number}>${number}</li>`;
			} else if (
				(number >= pageNumber + 1) &
				(number < pageNumber + quantityVisiblePagesCenter)
			) {
				acc += `<li class="pagination-item--points" data-page=${pageNumber + quantityVisiblePagesCenter
					}
        }>...</li>`;
			} else if (
				(number >= pageNumber + quantityVisiblePagesCenter) &
				(number < arr.length)
			) {
				acc += ``;
			} else if (number === arr.length) {
				acc += `<li class="pagination-item" data-page=${number}>${number}</li>`;
			}
			return acc;
		}, ``);
		return markap;
	} else if (pageNumber > pageArr.length - quantityVisiblePagesStartEnd) {
		const markap = pageArr.reduce((acc, number, index, arr) => {
			if (number === 1) {
				acc += `<li class="pagination-item" data-page=${number}>${number}</li>`;
			} else if (number === 2) {
				acc += `<li class="pagination-item--points" data-page=${pageNumber - quantityVisiblePagesCenter
					}>...</li>`;
			} else if (number > pageArr.length - quantityVisiblePagesStartEnd) {
				acc += `<li class="pagination-item" data-page=${number}>${number}</li>`;
			}
			return acc;
		}, ``);
		return markap;
	}
}
