import get from 'https://lalasol-bootcamp.web.app/js/getElement.js';

const loading = get('.loading');

export const showLoading = () => {
    loading.classList.remove('hide-loading');
};
export const hideLoading = () => {
    loading.classList.add('hide-loading');
};