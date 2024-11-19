import { el } from '../elements.js';


export function renderIndexPage(root, indexJson) {
  console.log('rendering', root, indexJson.title);

  

  const mainElement = el(
    'main',
    {},
    el(
      'section',
      {},
    ),
  );
  
  root.appendChild(mainElement);
}
