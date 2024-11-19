import { el } from '../elements.js';
import { fetcher } from '../fetcher.js';

export async function renderSubpage(root, type) {
  const contentjsonfile = `public/data/${type}/index.json`;
  const contentJson = await fetcher(contentJsonFile);

  // Undirtitill síðunnar, t.d. HTML eða CSS
  const header = el('h2', {}, contentJson.title);
  root.append(header);
  root.append(el('p', {'class': 'subtitle'}, contentJson.text));

  const content = contentJson.content;
  const contentElement = document.createElement('div');

  // TODO ættum að skoða html structure hér
  for (const item of content) {
    const itemElement = document.createElement('section');

    const button = document.createElement('button');
    button.textContent = item.title;
    itemElement.appendChild(button);
    button.addEventListener('click', (e) => {
      if (!e) {
        return;
      }

      const contentDiv = e?.target?.parentElement?.querySelector('div');
      contentDiv.classList.toggle('hidden');
    });


    const link = el('a', {'href': window.location.search + '&content=' + item.slug}, item.text);
    const itemText = el('div', {'class': 'hidden'}, link);

    itemElement.appendChild(button);
    itemElement.appendChild(itemText);

    contentElement.appendChild(itemElement);
  }

  const mainElement = el('main', {}, el('p', {}, contentElement));
  
  root.appendChild(mainElement);
}
