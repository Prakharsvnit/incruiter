const keywordsObject = {
  2007: "DATE",
  "Sebastian Thrun": "PERSON",
  Google: "ORG",
  American: "NORP",
  Thrun: "PERSON",
  Recode: "ORG",
  "earlier this week": "DATE",
};

const text =
  "When Sebastian Thrun started working on self-driving cars at Google in 2007, few people outside of the company took him seriously. I can tell you very senior CEOs of major American car companies would shake my hand and turn away because I wasn’t worth talking to said Thrun, now the co-founder and CEO of online higher education start-up Udacity, in an interview with Recode earlier this week";

function answer(text, keywordsObject) {
  for (const property in keywordsObject) {
    let pattern = property.toString();
    text = text.replace(
      new RegExp(pattern, "g"),
      property + keywordsObject[property]
    );
  }
  return text;
}

const highlightedText = answer(text, keywordsObject);

console.log(answer(text, keywordsObject));

const getElementId = document.getElementById("text-highlight");
const createParagraphElement = document.createElement("p");
const outerSpan = document.createElement("span");
const innerSpan = document.createElement("span");
innerSpan.setAttribute("id", "innerSpan");
outerSpan.setAttribute("id", "outerSpan");
outerSpan.appendChild(innerSpan);
createParagraphElement.innerHTML = highlightedText;
getElementId.append(createParagraphElement);
