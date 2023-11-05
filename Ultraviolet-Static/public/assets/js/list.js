const appList = [
    {
        name: "example.com",
        link: "https://example.com",
        on: false   
    },
    {
        name: "Monkey<br>Mart",
        link: "https://monkey-mart.io/iframe/",
        image: "assets/imgs/mImgs/MM.jpeg",
        on: true
    },
    {
        name: "Slope",
        link: "https://kdata1.com/2020/05/slope/",
        image: "assets/imgs/mImgs/Slope.png",
        on: true
    },
    {
        name: "vscode",
        link: "https://vscode.dev/",
        image: "https://i.ibb.co/mHrC2Hc/image-removebg-preview.png",
        on: true
    }
];

var idx = 1

appList.forEach(app => {
    if (app.on == true) {
        if (app.name) {
            if (app.image) {
                if (app.link) {
                    // creating elements here
                    var appDiv = document.createElement("div")
                    appDiv.className = idx
                    console.log(appDiv.className)
                    document.getElementById("apps").appendChild(appDiv)

                    var btn = document.createElement("a")
                    btn.id = app.link
                    appDiv.appendChild(btn)
                    btn.onclick = function() {
                        console.log(
                            "app link: " + app.link + "\napp idx: " + appDiv.className
                        )
                    }
                    var image = document.createElement("img")
                    image.src = app.image
                    btn.appendChild(image)

                    var text = document.createElement("p")
                    text.innerHTML = app.name
                    text.className = "app-para"
                    appDiv.appendChild(text)
                } else {
                    console.log(app.name + " has no link (hiding)")
                }
            } else {
                console.log(app.name + " Has no image (hiding)")
            }
        } else {
            console.log("app idx: " + idx + " has no name! (hiding)")
        }
    } else {
        console.log(app.name+" is off (idx: " + idx + ")")
        var appDiv = document.createElement("div")
        appDiv.className = idx
        appDiv.id = "off"
        console.log(appDiv.className)
        document.getElementById("apps").appendChild(appDiv)
    }
    idx++
}); 

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

function games(app) {
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        var input = "https://www.google.com/search?q=ex"
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        console.log(url)
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
        
    });
}