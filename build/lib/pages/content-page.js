import { fetcher } from "../fetcher.js";
import { el } from "../elements.js";
import { renderKeywords } from "../components/keywords.js";
import { renderLectures } from "../components/lectures.js";
import { renderQuestions } from "../components/questions.js";

export async function renderContentPage(root, type, content_type) {
  console.log("rendering content page", root, content_type);
  const contentJsonFile = `../public/data/${type}/${content_type}.json`;
  const contentJson = await fetcher(contentJsonFile);

  // Undirtitill síðunnar
  const header = el("h2", {}, contentJson.title);
  root.append(header);

  const mainElement = el("main");
  root.appendChild(mainElement);

  if (content_type === "keywords") {
    renderKeywords(mainElement, contentJson.keywords);
  } else if (content_type === "lectures") {
    renderLectures(mainElement, type, contentJson);
  } else if (content_type === "questions") {
    renderQuestions(mainElement, contentJson.questions);
  }
}
