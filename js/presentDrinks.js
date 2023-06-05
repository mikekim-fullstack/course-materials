import fetchDrinks from 'https://lalasol-bootcamp.web.app/js/fetchDrinks.js';
import displayDrinks from 'https://lalasol-bootcamp.web.app/js/displayDrinks.js';
import setDrink from 'https://lalasol-bootcamp.web.app/js/setDrink.js';
const showDrinks = async (url) => {
    // fetch drinks
    const data = await fetchDrinks(url);

    // display drinks
    const section = await displayDrinks(data);
    if (section) {
        setDrink(section);
    }
};

export default showDrinks;
