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
  

  /*
  <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
        <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
        <h1>John Doe</h1> 
        <p>Architect & Engineer</p> 
        <p>We love that guy</p>
        </div>
    </div>
  </div>
  */
}
