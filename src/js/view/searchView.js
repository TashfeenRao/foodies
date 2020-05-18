/* eslint-disable import/prefer-default-export */
import { elements } from './base';

export const inputSearch = () => elements.searchInput.value;
export const clearInput = () => {
  elements.searchInput.value = '';
};
export const clearSearch = () => {
  elements.results__list.innerHTML = '';
}
const renderRecipe = recipe => {
  const li = `
    <li>
        <a class="results__link results__link--active" href="${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
  `;
  elements.results__list.insertAdjacentHTML('beforeend', li);
};
export const getRecipes = recipes => {
  recipes.forEach(renderRecipe);
};