// Load posts from posts.json
fetch('posts.json')
.then(response => response.json())
.then(posts => {
    const container = document.getElementById('posts-container');
    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');
        postCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <h2>${post.title}</h2>
            <p>${post.snippet}</p>
        `;
        container.appendChild(postCard);
    });
})
.catch(err => console.error('Error loading posts:', err));