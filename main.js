window.addEventListener("DOMContentLoaded",main)


function main(){
    getData();
}


function getData(){
    td = new Date();
    const year = td.getFullYear();

    fetch(`http://sholiday.faboul.se/dagar/v2.1/${year}`)
    .then(response => response.json())
    .then(data => {
        useData(data);
    });
    
}



function useData(data){
    const displayNameTag = document.querySelector("h4")
    let namnArray = [];

    for (const dag of data.dagar) {
        if(dag.namnsdag.length >= 1){
            namnArray.push(dag.namnsdag) 

        }
    }
    const randomNumber = Math.random() * namnArray.length
    const randomInteger = Math.floor(randomNumber)
    
    const name = data.dagar[randomInteger].namnsdag


    displayNameTag.innerHTML = name;
}