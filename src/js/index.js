import '../css/style.css';
import Search from './models/Search';

const state = {};
const searchController = async () => {
  const query = 'pizza';
  if (query) {
    state.search = new Search(query);
    await state.search.getRecipes();
  }
};
document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  searchController();
});

const search = new Search('pizza');
search.getRecipes();