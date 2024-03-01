fetch('assets/js/games.json')
    .then(response => response.json())
    .then(games => {
        const cardsContainer = document.getElementById('cards');
        games.forEach(game => {
            const card = document.createElement('div');
            card.className = `card p`;
            card.style= `background-image: url(/assets/imgs/thumbnails/${game.icon}); background-size: cover; background-position: center;` 
            console.log("/assets/imgs/thumbnails/"+game.icon);
            card.onclick = function() {
                setGameInfo(game.gameName, game.appName);
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