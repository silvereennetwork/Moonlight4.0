fetch(`/api/api/games`)
    .then(response => response.json())
    .then(games => {
        const cardsContainer = document.getElementById('cards');
        const cardsContainerApps = document.getElementById('cards-apps');
        games.forEach(game => {
            if (game.proxy == null && game.type == null) {
            const card = document.createElement('div');
            card.className = `card p`;
            card.title = game.name;
            card.onclick = function() {
                setGameInfo(`${game.root}/${game.file}`, game.name);
            };

            const h2 = document.createElement('h2');
            h2.className = 'black';
            h2.innerHTML = `<i>${game.name}</i>`;

            card.appendChild(h2);

            const a = document.createElement('a');
            a.href = "iframe.html";
            a.appendChild(card);

            var gameIcon = getCdnInfo(game.root+"/"+game.img)
            console.log(gameIcon);
            card.style = `background-image: url(${gameIcon});`;
            //card.style= "background-image: url(" + gameIcon + "); background-size: cover; background-position: center;";
            console.log("/assets/imgs/thumbnails/"+game.img);

            cardsContainer.appendChild(a);
        } else if (game.proxy && game.type == null) {
            const card = document.createElement('div');
            card.className = `card p`;
            card.onclick = function() {
                setProxyInfo(`${game.proxy}`, game.proxy);
            };

            const h2 = document.createElement('h2');
            h2.className = 'black';
            h2.innerHTML = `<i>${game.name}</i>`;

            card.appendChild(h2);

            const a = document.createElement('a');
            a.href = "iframe.html";
            a.appendChild(card);

            var gameIcon = getCdnInfo('imgs/'+game.img)
            console.log(gameIcon);
            card.style = `background-image: url(${gameIcon});`;
            //card.style= "background-image: url(" + gameIcon + "); background-size: cover; background-position: center;";
            console.log("/assets/imgs/thumbnails/"+game.img);

            cardsContainer.appendChild(a);
        } else if (game.type == "app") {
            const card = document.createElement('div');
            card.className = `card p`;
            card.onclick = function() {
                setProxyInfo(`${game.proxy}`, game.proxy);
            };

            const h2 = document.createElement('h2');
            h2.className = 'black';
            h2.innerHTML = `<i>${game.name}</i>`;

            card.appendChild(h2);

            const a = document.createElement('a');
            a.href = "iframe.html";
            a.appendChild(card);

            var gameIcon = getCdnInfo('imgs/'+game.img)
            console.log(gameIcon);
            card.style = `background-image: url(${gameIcon});`;
            //card.style= "background-image: url(" + gameIcon + "); background-size: cover; background-position: center;";
            console.log("/assets/imgs/thumbnails/"+game.img);

            cardsContainerApps.appendChild(a);
        }
    });
    });
