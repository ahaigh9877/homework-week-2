function getDarth() {
    fetch("https://swapi.co/api/people/4/")
        .then(response => response.json())
        .then(object => {
            const pre = document.createElement("pre")
            const text = JSON.stringify(object, null, " ")
            document.getElementById("second").appendChild(pre)
            pre.innerHTML = text
        })
}

fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(object => {
        const pre = document.createElement("pre")
        const text = JSON.stringify(object, null, " ")
        document.getElementById("first").appendChild(pre)
        pre.innerHTML = text
    })