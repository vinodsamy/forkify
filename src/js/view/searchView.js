class SearchView {
  #parentElement = document.querySelector('.search');

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
}

export default new SearchView();
