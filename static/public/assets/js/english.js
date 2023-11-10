const form = document.querySelector('form');
const input = document.querySelector('input');

const gamesjson = [
    {
        "name": "Monkey Mart",
        "link": "https://monkey-mart.io/iframe",
        "image": "https://github.com/InterstellarNetwork/Interstellar/blob/main/static/images/icons/mm.png?raw=true",
        "on": true
    },
    {
        name: "Roblox (Now.GG)",
        link: "https://now.gg/play/roblox-corporation/5349/roblox",
        image: "https://raw.githubusercontent.com/InterstellarNetwork/Interstellar/main/static/images/icons/roblox.png",
        on: true
    }
]
var idx = 0
gamesjson.forEach(app => {
    let gameDiv = document.createElement("div")
    gameDiv.id = app.name
    gameDiv.className = idx
    document.getElementById("games").appendChild(gameDiv)

    let btn = document.createElement("a")
    btn.id = idx
    btn.onclick = function () {
        console.log("app idx: "+ idx +"\napp name: "+app.name+"\napp link: "+app.name)
        games(btn.id)
    }
    gameDiv.appendChild(btn)

    let image = document.createElement("img")
    image.src = app.image
    btn.appendChild(image)
    
    let para = document.createElement("p")
    para.className = "games-para"
    para.innerHTML = app.name
    gameDiv.appendChild(para)

    idx++
})

function games(games) {
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = gamesjson[games].link
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
}

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
