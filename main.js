import { fetcher } from './lib/fetcher.js';
import { renderContentPage } from './lib/pages/content-page.js';
import { renderIndexPage } from './lib/pages/index-page.js';
import { renderSubpage } from './lib/pages/sub-page.js';
import { renderNavigation } from './lib/components/navigation.js';
import { el } from './lib/elements.js';

async function render(root, querystring) {
  const mainIndexJson = await fetcher('public/data/index.json');

  const params = new URLSearchParams(querystring);
  const type = params.get('type');
  const content = params.get('content');
  
  console.log(type, content);
  // Rendera haus með navigation
  const headerElement = el('header', {}, el('h1', {}, mainIndexJson.title));
  headerElement.appendChild(el('p', {}, mainIndexJson.description));
  headerElement.appendChild(renderNavigation(mainIndexJson.navigation));
  root.appendChild(headerElement);
  const article = el('article');
  root.appendChild(article);

  if (!type) {
    renderIndexPage(article, mainIndexJson);
  } else {
    if (!mainIndexJson.navigation.find((i) => i.slug === type)) {
      article.appendChild(el('main', {}, el('p', {}, 'Fannst ekki')));
    } else {
      if (content) {
        renderContentPage(article, type, content);
      } else {
        renderSubpage(article, type);
      }
    }
  }
// mögulega bæta við hrópmerki seinna
  if (content) {
    return renderContentPage(root, type, content);
  }

  renderSubpage(root, mainIndexJson, type);
  const footerElement = el('footer', {}, mainIndexJson.footer);
  root.appendChild(footerElement);
}

const root = document.querySelector('#app');
console.log(window.location.search)
render(root, window.location.search);



// ygraiuaejnfkljaæLWD'Æ´ÆLÆKLKJJGHGSDFKASJL
