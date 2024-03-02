fetch('assets/js/games.json')
    .then(response => response.json())
    .then(games => {
        const cardsContainer = document.getElementById('cards');
        games.forEach(game => {
            const card = document.createElement('div');
            card.className = `card p`;
            var gameIcon = getCdnInfo(game.root+"/"+game.img)
            console.log(gameIcon);
            card.style= "background-image: url(" + gameIcon + "); background-size: cover; background-position: center;";
            console.log("/assets/imgs/thumbnails/"+game.img);
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

            cardsContainer.appendChild(a);
        });
    });