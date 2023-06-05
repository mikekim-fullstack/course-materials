import presentDrinks from 'https://lalasol-bootcamp.web.app/js/presentDrinks.js';
import 'https://lalasol-bootcamp.web.app/js/searchForm.js';
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

window.addEventListener('DOMContentLoaded', () => {
    presentDrinks(URL);
});