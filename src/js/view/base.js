/* eslint-disable import/prefer-default-export */
export const elements = {
  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search__field'),
  searchRes: document.querySelector('.results'),
  results__list: document.querySelector('.results__list'),
};

export const renderLoader = () => {
  const loader = `
    <div class="loader">
    <svg>
    <use href="../img/icons.svg#icon-cw"></use>
    </svg>
    </div>
  `;
  elements.searchRes.insertAdjacentHTML('afterbegin', loader);
};