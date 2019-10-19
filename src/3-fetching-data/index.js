fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(object => {
        const pre = document.createElement("pre")
        const text = JSON.stringify(object, null, " ").replace(/[\[\]",{}]+/g,"").replace(/\_/g," ")
        document.getElementById("first").appendChild(pre)
        pre.innerHTML = text
    })

function getDarth() {
    fetch("https://swapi.co/api/people/4/")
        .then(response => response.json())
        .then(object => {
            const div = document.getElementById("second")
            div.removeChild(div.childNodes[2]);
            const pre = document.createElement("pre")
            const text = JSON.stringify(object, null, " ").replace(/[\[\]",{}]+/g,"").replace(/\_/g," ")
            div.appendChild(pre)
            pre.innerHTML = text
        })
}

function getRandomCharacter() {

    const randNr = Math.ceil(Math.random() * 87)
    const apiUrl = "https://swapi.co/api/people/"+randNr

    fetch(apiUrl)
        .then(response => response.json())
        .then(object => {
            const div = document.getElementById("third")
            div.removeChild(div.childNodes[2]);
            const pre = document.createElement("pre")
            const text = JSON.stringify(object, null, " ").replace(/[\[\]",{}]+/g,"").replace(/\_/g," ")
            div.appendChild(pre)
            pre.innerHTML = text
        })
}


function getRandomPlanet() {

    const randNr = Math.ceil(Math.random() * 61)
    const apiUrl = "https://swapi.co/api/planets/"+randNr

    fetch(apiUrl)
        .then(response => response.json())
        .then(object => {
            const div = document.getElementById("fourth")
            div.removeChild(div.childNodes[2]);
            const pre = document.createElement("pre")
            const text = JSON.stringify(object, null, " ").replace(/[\[\]",{}]+/g,"").replace(/\_/g," ")
            div.appendChild(pre)
            pre.innerHTML = text
        })
}