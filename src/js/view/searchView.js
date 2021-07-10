import icons from 'url:../../img/icons.svg';

class SearchView {
  #parentElement = document.querySelector('.search');
  #resultsElement = document.querySelector('.results');

  getQuery() {
    const query = this.#parentElement.querySelector('.search__field').value;
    this.#clearSearchInput();
    return query;
  }
  #clearSearchInput() {
    this.#parentElement.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }

  renderSearchResults(data) {
    const markup = `
    ${data.map(recipe => {
      return `
            <li class="preview">
                <a class="preview__link preview__link--active" href="#23456">
                  <figure class="preview__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}" />
                  </figure>
                  <div class="preview__data">
                    <h4 class="preview__title">${recipe.title}</h4>
                    <p class="preview__publisher">${recipe.publisher}</p>
                    <div class="preview__user-generated">
                      <svg>
                        <use href="${icons}#icon-user"></use>
                      </svg>
                    </div>
                  </div>
                </a>
             </li>
      `;
    })};
    `;
    this.#resultsElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new SearchView();
