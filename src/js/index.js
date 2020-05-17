import '../css/style.css';
import axios from 'axios';

async function searchRecepie(query) {
  try {
    const rec = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
    const data = rec.data.recipes;
  } catch (error) {
    alert(error);
  }
}
searchRecepie('grape');