function fetchGames(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        });
}

function createCard(game, container) {
    const card = document.createElement('div');
    card.className = `card p`;
    card.title = `${game.name} - ${game.id}`;
    card.onclick = function() {
        setGameInfo(`${game.root}/${game.file}`, game.name);
        umami.track(`Game - ${game.name}`);
    };

    const h2 = document.createElement('h2');
    h2.className = 'black';
    h2.innerHTML = `${game.name}`;

    card.appendChild(h2);

    const a = document.createElement('a');
    a.href = "iframe.html";
    a.appendChild(card);

    var gameIcon = getCdnInfo(game.root + "/" + game.img);
    // console.log(gameIcon);
    card.style = `background-image: url(${gameIcon});`;
    // console.log("/assets/imgs/thumbnails/" + game.img);
    container.appendChild(a);
}

function createProxyCard(game, container) {
    const card = document.createElement('div');
    card.className = `card p`;
    card.title = `${game.name} - ${game.id}`;
    card.onclick = function() {
        setProxyInfo(`${game.proxy}`, game.proxy);
        umami.track(`App - ${game.name}`);
    };

    const h2 = document.createElement('h2');
    h2.className = 'black';
    h2.innerHTML = `${game.name}`;

    card.appendChild(h2);

    const a = document.createElement('a');
    a.href = "iframe.html";
    a.appendChild(card);

    var gameIcon = getCdnInfo('imgs/' + game.img);
    // console.log(gameIcon);
    card.style = `background-image: url(${gameIcon});`;
    // console.log("/assets/imgs/thumbnails/" + game.img);
    container.appendChild(a);
}

function handleGames(games) {
    // console.log(games)
    const cardsContainer = document.getElementById('cards');
    const cardsContainerApps = document.getElementById('cards-apps');
    games.forEach(game => {
        if (game.proxy == null && game.type == null) {
            createCard(game, cardsContainer);
        } else if (game.proxy && game.type == null) {
            createProxyCard(game, cardsContainer);
        } else if (game.type == "app") {
            createProxyCard(game, cardsContainerApps);
        }
    });
}

fetchGames('/api/api/games')
    .then(games => handleGames(games))
    .catch(error => {
        console.error('Error fetching /api/api/games:', error);
        showNotifi(5, 5, '#ff0000', 'Error!', `Error fetching games from API, reverting to built in game renderer. <br><sup>(Some games and apps may be missing)</sup><br> Error code: <strong>${error}</strong>`, null, true)
        fetchGames('/assets/js/games.json')
            .then(games => handleGames(games))
            //.catch(error => console.error('Error fetching /assets/js/games.json:', error) )
            .catch(error => showNotifi(5, 5, '#ff0000', 'Error!', `Error fetching games from games.json <br><sup>(Some games and apps may be missing)</sup><br> Error code: <strong>${error}</strong>`, null, true) );
    });