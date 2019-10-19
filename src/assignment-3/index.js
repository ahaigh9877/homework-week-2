function getDarth() {
    fetch("https://swapi.co/api/people/4/")
        .then(response => response.json())
        .then(object => {
            const pre = document.createElement("pre")
            document.getElementById("second").appendChild(pre)
            pre.innerHTML = JSON.stringify(object, null, " ")
        })
}

fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(object => {
        const pre = document.createElement("pre")
        document.getElementById("first").appendChild(pre)
        pre.innerHTML = JSON.stringify(object, null, " ")
    })