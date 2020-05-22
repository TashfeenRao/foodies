import '../css/style.css';
import * as searchView from './view/searchView';
import { elements, renderLoader, clearLoader } from './view/base';
import Search from './models/Search';

const state = {};
const searchController = async () => {
  const query = searchView.inputSearch();
  if (query) {
    state.search = new Search(query);
    searchView.clearInput();
    searchView.clearSearch();
    renderLoader();
    await state.search.getRecipes();
    clearLoader();
    searchView.displayRecipes(state.search.recipes);
  }
};
elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  searchController();
});

const search = new Search('pizza');
search.getRecipes();