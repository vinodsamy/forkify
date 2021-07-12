import View from './view.js';
import icons from 'url:../../img/icons.svg';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = "We could't find the recipe.Please try another one!";
  _message = '';

  _generateMarkup() {
    console.log('resultView search Results', this._data);
    return this._data.map(this._generatePreviewMarkup).join('');
  }

  _generatePreviewMarkup(recipe) {
    return `
      <li class="preview">
                <a class="preview__link preview__link--active" href="#${recipe.id}">
                  <figure class="preview__fig">
                    <img src="${recipe.imageUrl}" alt="${recipe.title}" />
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
  }
}

export default new ResultView();
