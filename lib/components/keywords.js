import { el } from '../elements.js';

/**
 * 
 * @param root root element 
 * @param keywords keywords arrayið úr json skjalinu
 */
export function renderKeywords(root, keywords) {
  console.log('rendering keywords page', root, keywords);

  // teiknum upp hvert keyword sem flashcard (css)
  for (let keyword of keywords) {
    console.log(keywords);
    const card = el('div', {'class': 'flip-card'},
        el('div', {'class': 'flip-card-inner'},
            el('div', {'class': 'flip-card-front'}, keyword.title),
            el('div', {'class': 'flip-card-back'}, keyword.content)
        )
    );
    root.appendChild(card);
  }
  

 