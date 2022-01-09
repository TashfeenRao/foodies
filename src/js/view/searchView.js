/* eslint-disable import/prefer-default-export */
import { elements } from './base';

export const inputSearch = () => elements.searchInput.value;
export const clearInput = () => {
  elements.searchInput.value = '';
};
export const clearSearch = () => {
  elements.results__list.innerHTML = '';
};
const trimTitle = (title, limit = 17) => {
  if (title.length >= limit) {
    const newTitle = [];
    title.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);
    return `${newTitle.join(' ')} ...`;
  }
  return title;
};
const renderRecipe = recipe => {
  const li = `
    <li>
        <a class="results__link results__link--active" href="${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${trimTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
  `;
  elements.results__list.insertAdjacentHTML('beforeend', li);
};
export const displayRecipes = recipes => {
  recipes.forEach(renderRecipe);
};