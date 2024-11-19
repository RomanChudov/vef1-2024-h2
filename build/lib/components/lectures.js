import { fetcher } from "../fetcher.js";
import { el } from "../elements.js";

/**
 *
 * @param root root element
 * @param keywords keywords arrayið úr json skjalinu
 */
export async function renderLectures(root, type) {
  console.log("rendering keywords page", root, type);

  const contentjsonfile = `public/data/${type}/lectures.json`;
  const contentJson = await fetcher(contentJsonFile);
  console.log(contentJson.title);

  // Undirtitill síðunnar, t.d. HTML eða CSS
  // const header = el('h2', {}, contentJson.title);
  // root.append(header);
  var x;
  const contentData = el("p", {});

  for (let i = 0; i < contentJson.lectures.length; i++) {
    console.log(contentJson.lectures.length);

    console.log(i);
    root.append(el("h3", { class: "subtitle" }, contentJson.lectures[i].title));

    for (let j = 0; j < contentJson.lectures[i].content.length; j++) {
      console.log(j);

      if (contentJson.lectures[i].content[j].type == "text") {
        root.append(el("p", {}, contentJson.lectures[i].content[j].data));
      }

      if (contentJson.lectures[i].content[j].type == "quote") {
        root.append(
          el(
            "p",
            { class: "quote" },
            contentJson.lectures[i].content[j].data +
              " - " +
              contentJson.lectures[i].content[j].attribute
          )
        );
      }

      if (contentJson.lectures[i].content[j].type == "heading") {
        root.append(
          el("p", { class: "heading" }, contentJson.lectures[i].content[j].data)
        );
      }

      if (contentJson.lectures[i].content[j].type == "code") {
        root.append(
          el("p", { class: "code" }, contentJson.lectures[i].content[j].data)
        );
      }

      var image;

      if (contentJson.lectures[i].content[j].type == "image") {
        image = el("img", { class: "image" });
        image.src = contentJson.lectures[i].content[j].data;

        root.append(image);
        root.append(
          el(
            "p",
            { class: "caption" },
            contentJson.lectures[i].content[j].caption
          )
        );
      }

      var listData = el("ul", { class: "listData" });

      if (contentJson.lectures[i].content[j].type == "list") {
        for (
          let k = 0;
          k < contentJson.lectures[i].content[j].data.length;
          k++
        ) {
          var listDataelement = el(
            "li",
            { class: "listData__item" },
            contentJson.lectures[i].content[j].data[k]
          );

          listData.appendChild(listDataelement);
        }
        root.append(listData);
      }
    }
  }
  console.log("fgrehdkjskal");

  // const content = contentJson.content;
  // const contentElement = document.createElement("div");

  // // TODO ættum að skoða html structure hér
  // for (const item of content) {
  //   const itemElement = document.createElement("section");

  //   const button = document.createElement("button");
  //   button.textContent = item.title;
  //   itemElement.appendChild(button);
  //   button.addEventListener("click", (e) => {
  //     if (!e) {
  //       return;
  //     }

  //     const contentDiv = e?.target?.parentElement?.querySelector("div");
  //     contentDiv.classList.toggle("hidden");
  //   });

  //   const link = el(
  //     "a",
  //     { href: window.location.search + "&content=" + item.slug },
  //     item.text
  //   );
  //   const itemText = el("div", { class: "hidden" }, link);

  //   itemElement.appendChild(button);
  //   itemElement.appendChild(itemText);

  //   contentElement.appendChild(itemElement);
  // }

  // const mainElement = el("main", {}, el("p", {}, contentElement));

  // root.appendChild(mainElement);
}
