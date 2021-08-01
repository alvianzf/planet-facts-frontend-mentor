$.get("../assets/json/data.json", async function (res) {
    await res.map((_, i)=> {
        const name = res[i].name
        $(".nav-links").append(`<a class="nav-item" href="#${i}" onclick=navChangePlanet()>${name}</a>`)
    })

    // init first planet
    const hash = window.location.hash ? window.location.hash.substr(1,1) : false
    changePlanetImage(hash ? res[hash].images.planet : res[0].images.planet)
})