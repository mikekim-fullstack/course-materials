import get from 'https://lalasol-bootcamp.web.app/js/getElement.js';
import presentDrinks from 'https://lalasol-bootcamp.web.app/js/presentDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form');
const input = get('[name="drink"]');

form.addEventListener('keyup', function (e) {
    e.preventDefault();
    const value = input.value;
    if (!value) return;
    presentDrinks(`${baseURL}${value}`);
});
