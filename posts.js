fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById('posts');

    posts.reverse().forEach((post, index) => {
      container.innerHTML += `
        <article class="post-card">
          <img src="${post.image}" alt="${post.title}">
          <h2>${post.title}</h2>
          <p class="meta">By ${post.author} • ${post.date}</p>
          <p>${post.content.substring(0, 160)}...</p>
          <a href="post.html?id=${index}" class="read-btn">Read Full Article →</a>
        </article>
      `;
    });
  });