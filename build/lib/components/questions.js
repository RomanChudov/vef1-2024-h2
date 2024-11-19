import { el } from '../elements.js';

/**
 *
 * @param root root element
 * @param questions questions arrayið úr json skjalinu
 */

export function renderQuestions(root, questions) {
  console.log('Rendering questions page', root, questions);

  for (let questionObj of questions) {
    const accordion = el('button', { class: 'accordion' }, questionObj.question);

   
    const panel = el('div', { class: 'panel' });

    questionObj.answers.forEach((answer, index) => {
      const answerId = `${questionObj.question}-${index}`; 
      const radio = el('input', {
        type: 'radio',
        name: questionObj.question, 
        id: answerId,
        value: answer.correct,
      });

      const label = el('label', { for: answerId }, answer.answer);

      
      const answerWrapper = el('div', {}, radio, label);
      panel.appendChild(answerWrapper);
    });

    
    root.appendChild(accordion);
    root.appendChild(panel);
  }

 
  const accordions = root.getElementsByClassName('accordion');
  for (let acc of accordions) {
    acc.addEventListener('click', function () {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
  }
}
