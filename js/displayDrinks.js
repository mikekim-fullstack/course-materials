import get from 'https://lalasol-bootcamp.web.app/js/getElement.js';
import { hideLoading } from 'https://lalasol-bootcamp.web.app/js/toggleLoading.js';
const displayDrinks = ({ drinks }) => {
    const section = get('.section-center');
    const title = get('.title');
    if (!drinks) {
        // hide loading
        hideLoading();
        title.textContent = 'sorry, no drinks matched your search';
        section.innerHTML = null;
        return;
    }
    const newDrinks = drinks
        .map((drink) => {
            const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

            return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
        })
        .join('');
    hideLoading();
    title.textContent = '';
    section.innerHTML = newDrinks;
    return section;
};

export default displayDrinks;
