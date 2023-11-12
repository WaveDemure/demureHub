const form = document.querySelector('form');
const input = document.querySelector('input');

const gamesjson = [
    {

        "name": "vscode",
        "link": "https://vscode.dev",
        "image": "https://raw.githubusercontent.com/InterstellarNetwork/Interstellar/main/static/images/icons/apps/vscode.png",
        "on": true
    },
    {
        name: "Amazon",
        link: "https://amazon.com/",
        image: "/images/icons/apps/amazon.png",
        "on": true
      },
      {
        name: "BuzzFeed Quizzes",
        link: "https://buzzfeed.com/quizzes",
        image: "/images/icons/apps/buzzfeed.png",
        "on": true
      },
      {
        name: "Movie Web",
        link: "https://movie-web.app",
        image: "https://movie-web.app/apple-touch-icon.png",
        "on": true
      },
      {
        name: "Scratch",
        link: "https://scratch.mit.edu",
        image: "/images/icons/scratch.jpg",
        "on": true
      },
      {
        name: "Chess.com",
        link: "https://chess.com",
        image: "/images/icons/chess.png",
        "on": true
      },
      {
        name: "Cool Math Games",
        link: "https://coolmathgames.com",
        image: "/images/icons/apps/coolmath.png",
        "on": true
      },
      {
        name: "Discord",
        link: "https://canary.discord.com",
        image: "/images/icons/apps/discord.jpg",
        categories: ["all", "social"],
        "on": true
      },
      {
        name: "DuckDuckGo",
        link: "https://start.duckduckgo.com/",
        image: "/images/icons/apps/duckduckgo.png",
        "on": true
      },
      {
        name: "ESPN",
        link: "https://www.espn.com/watch/",
        image: "/images/icons/apps/espn.webp",
        "on": true
      },
      {
        name: "Fifa Rosters",
        link: "https://fifarosters.com/",
        image: "/images/icons/fifa.png",
        "on": true
      },
      {
        name: "Firefox Web Browser",
        link: "https://replit.com/@cooleddie001/Firefox-Legacy?v=1",
        image: "/images/icons/apps/firefox.png",
        "on": true
      },
      {
        name: "Flix HQ",
        link: "https://flixhq.to",
        image: "/images/icons/apps/flixhq.png",
        "on": true
      },
      {
        name: "Geforce NOW",
        link: "https://play.geforcenow.com",
        image: "/images/icons/apps/geforce-now.png",
        "on": true
      },
      {
        name: "Github",
        link: "https://github.com",
        image: "/images/icons/apps/github.png",
        "on": true
      },
      {
        name: "Google",
        link: "https://google.com",
        image: "/images/icons/apps/google.png",
        "on": true
      },
      {
        name: "HBO MAX",
        link: "https://www.hbomax.com/",
        image: "/images/icons/apps/hbo.webp",
        "on": true
      },
      {
        name: "Messenger",
        link: "https://messenger.com/",
        image: "/images/icons/apps/messenger.png",
        "on": true
      },
      {
        name: "Paramount Plus",
        link: "https://paramountplus.com",
        image: "/images/icons/apps/paramount.png",
        "on": true
      },
      {
        name: "Pinterest",
        link: "https://pinterest.com",
        image: "/images/icons/apps/pinterest.png",
        "on": true
      },
      {
        name: "Pixlr",
        link: "https://pixlr.com/",
        image: "/images/icons/pix.png",
        "on": true
      },
      {
        name: "Poki",
        link: "https://poki.com",
        image: "/images/icons/apps/poki.png",
        "on": true
      },
      {
        name: "Soundcloud",
        link: "https://soundcloud.com",
        image: "/images/icons/apps/soundcloud.jpg",
        "on": true
      },
      {
        name: "Spotify ( Broken )",
        link: "https://open.spotify.com",
        image: "/images/icons/apps/spotify.png",
        say: "Spotify is currently broken on the proxy",
        "on": true
      },
      {
        name: "Telegram",
        link: "https://web.telegram.org/",
        image: "/images/icons/apps/telegram.png",
        "on": true
      },
      {
        name: "Tiktok",
        link: "https://tiktok.com",
        image: "/images/icons/apps/tiktok.png",
        "on": true
      },
      {
        name: "Tumblr",
        link: "https://tumblr.com/",
        image: "/images/icons/apps/tumblr.png",
        "on": true

      },
      {
        name: "Twitch",
        link: "https://twitch.tv",
        image: "/images/icons/apps/twitch-tv.png",
        "on": true

      },
      {
        name: "Twitter",
        link: "https://twitter.com",
        image: "/images/icons/apps/twitter.png",
        "on": true

      },
      {
        name: "VS Code",
        link: "https://vscode.dev",
        image: "/images/icons/apps/vscode.png",
        "on": true

      },
      {
        name: "Y8 Games",
        link: "https://y8.com/",
        image: "/images/icons/apps/y8.png",
        "on": true

      },
      {
        name: "YouTube",
        link: "https://youtube.com",
        image: "/images/icons/apps/yt.png",
        "on": true

      },
      {
        name: "Whatsapp",
        link: "https://web.whatsapp.com/",
        image: "/images/icons/apps/whatsapp.png",
        "on": true

      },
      {
        name: "Wattpad",
        link: "https://wattpad.com/",
        image: "/images/icons/apps/wattpad.webp",
        "on": true

      },
      {
        name: "ChatGPT Clone",
        link: "https://chat.shuttleai.app/",
        image: "/images/icons/chatgpt.png",
        "on": true

      },
      {
        name: "Discord - Login",
        link: "https://canary.discord.com/login",
        image: "/images/icons/discord.jpg",
        "on": true
      },
      {
        name: "HD Today",
        link: "https://hdtoday.tv",
        image: "/images/icons/hd.png",
        "on": true
      },
      {
        name: "Roblox (Now.GG)",
        link: "https://now.gg/play/roblox-corporation/5349/roblox",
        image: "/images/icons/roblox.png",
        "on": true
      },
      {
        name: "Now.GG",
        link: "https://now.gg",
        image: "/images/icons/now-gg.png",
        "on": true
      },
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
