/* eslint-disable import/prefer-default-export */
export const elements = {
  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search__field'),
  searchRes: document.querySelector('.results'),
  results__list: document.querySelector('.results__list'),
};
const elementString = {
  loader: 'loader',
};

export const renderLoader = () => {
  const loader = `
    <div class="${elementString.loader}">
    <svg>
    <use href="../img/icons.svg#icon-cw"></use>
    </svg>
    </div>
  `;
  elements.searchRes.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementString.loader}`);
  if (loader) {
    loader.parentElement.removeChild(loader);
  }
};