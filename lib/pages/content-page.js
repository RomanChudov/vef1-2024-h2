import { fetcher } from '../fetcher.js';
import { el } from '../elements.js';

export async function renderContentPage(root, type, content_type) {
  console.log('rendering content page', root, content_type);
  const contentJsonFile = `public/data/${type}/${content_type}.json`;
  const contentJson = await fetcher(contentJsonFile);

  const mainElement = el(
    'main',
    {},
    el(
      'section',
      {},
      el(
        'p',
        {},
        'Ég er content page, þetta er contentið mitt' +
          JSON.stringify(contentJson),
      ),
    ),
  );
  root.appendChild(mainElement);
}
