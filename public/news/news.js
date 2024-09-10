function appendNews(jsonData) {
    const newsContainer = document.getElementById('news');

    jsonData.forEach(item => {
        const newContainer = document.createElement('div');
        newContainer.classList.add('newscontainer');

        newContainer.style = `border-top: 5px solid ${item.bannerColor}`

        // Create title element
        const title = document.createElement('h2');
        title.innerHTML = item.title;
        title.title = `ID: ${item.id}`;
        newContainer.appendChild(title);

        /*// Create the sup for time
        const time = document.createElement('sup');
        time.innerHTML = item.time;
        title.appendChild(time)*/

        // Create tags
        const tagsDiv = document.createElement('div');
        tagsDiv.classList.add('tags');
        const tags = ['tag1', 'tag2', 'tag3']; // Assuming these are the only tags
        tags.forEach(tag => {
            if (tag) {
                const tagElement = document.createElement('div');
                tagElement.classList.add('tag', tag);
                console.log(tag)
                tagElement.innerHTML = item[tag];
                tagsDiv.appendChild(tagElement);
            }
        });
        newContainer.appendChild(tagsDiv);

        // Create content element
        const content = document.createElement('p');
        content.innerHTML = item.content;
        newContainer.appendChild(content);

        // Append the entire new container to the 'news' div
        newsContainer.appendChild(newContainer);
    });
}

async function fetchAndAppendNews() {
    try {
        const response = await fetch('/api/api/news');

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const jsonData = await response.json();

        // Call the appendNews function with the fetched data
        appendNews(jsonData);
    } catch (error) {
        console.error('Error fetching or appending news:', error);
    }
}

// Assuming the appendNews function from the previous response is defined
fetchAndAppendNews();