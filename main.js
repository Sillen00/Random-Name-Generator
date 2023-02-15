window.addEventListener("DOMContentLoaded", main);


/**Starts the program. */
function main() {
  getData();
}

/**Gets data from svenska helgdagar API. */
function getData() {
  td = new Date();
  const year = td.getFullYear();

  fetch(`https://sholiday.faboul.se/dagar/v2.1/${year}`)
    .then((response) => response.json())
    .then((data) => {
      useData(data);
    });
}

/**Finds every name from "svenska namnsdagar". */
function useData(data) {
  let namnArray = [];

  for (const dag of data.dagar) {
    if (dag.namnsdag.length > 0) {
      for (const namn of dag.namnsdag) {
        namnArray.push(namn);
      }
    }
  }
  displayRandomNameOnClick(namnArray);
}

/**Picks a random name from "svenska namnsdagar" and displays name on screen. */
function displayRandomNameOnClick(namnArray) {
  const displayNameTag = document.querySelector("h4");
  const btn = document.querySelector("button");

  btn.addEventListener("click", () => {
    const randomNumber = Math.random() * namnArray.length;
    const randomInteger = Math.floor(randomNumber);
    const name = namnArray[randomInteger];
    displayNameTag.innerHTML = name;
  });
}
