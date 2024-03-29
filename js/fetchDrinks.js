import { showLoading } from 'https://lalasol-bootcamp.web.app/js/toggleLoading.js';
const fetchDrinks = async (url) => {
    showLoading();
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default fetchDrinks;
