async function navChangePlanet (hashed = window.location.hash) {
    
    const planetIndex= hashed ? hashed.substr(1,1) : 0;
    console.log(planetIndex)

    await $.get("../assets/json/data.json", async _ => {
        console.log(_[planetIndex])
        const content= _[planetIndex];

        changePlanetImage(content.images.planet)
    })
}

const changePlanetImage = (url) => {

    $("#main-image").attr("src", url)
}