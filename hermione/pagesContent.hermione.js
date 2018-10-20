const assert = require('assert');

describe('Содержимое страниц', () => {

  describe('история коммитов', () => {
    it('содержит breadcrumbs и коммит', function () {
      return this.browser
        .url('/')
        .assertExists('.breadcrumbs', 'Breadcrumbs не появились')
        .assertExists('.content .commit .commit__link', 'Ни одного коммита не найдено')
    });
  });

  describe('файловая система коммита', () => {
    it('содержит breadcrumbs и список файлов', function () {
      return this.browser
        .url('/files/38429bed94bd7c107c65fed6bffbf443ff0f4183/')
        .assertExists('.breadcrumbs', 'Breadcrumbs не появились')
        .assertExists('.content ul li', 'Ни одного элемента списка не найдено')
    });
  });

  describe('файл .gitignore', () => {
    it('содержит breadcrumbs и внутриности файла', function () {
      return this.browser
        .url('/content/38429bed94bd7c107c65fed6bffbf443ff0f4183/.gitignore')
        .assertExists('.breadcrumbs', 'Breadcrumbs не появились')
        .assertExists('.content .file-content', 'Элемент с контентом файла не найден')
        .textEqual('.content .file-content', 'node_modules');
    });
  });
});
