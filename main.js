window.addEventListener("DOMContentLoaded", main);

function main() {
  getData();
//   displayRandomNameOnClick();
}

function getData() {
  td = new Date();
  const year = td.getFullYear();

  fetch(`http://sholiday.faboul.se/dagar/v2.1/${year}`)
    .then((response) => response.json())
    .then((data) => {
      useData(data);
    });
}

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


function displayRandomNameOnClick(namnArray){
    const displayNameTag = document.querySelector("h4");
    const btn = document.querySelector("button")

    
    
    btn.addEventListener("click", ()=>{
        const randomNumber = Math.random() * namnArray.length;
        const randomInteger = Math.floor(randomNumber);
        const name = namnArray[randomInteger];
        displayNameTag.innerHTML = name;
    })
}