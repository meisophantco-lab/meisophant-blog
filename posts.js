fetch("./posts.json")
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById("posts-container");

    posts.forEach((post, index) => {
      const card = document.createElement("div");
      card.className = "post-card";

      card.innerHTML = `
        <h2>${post.title}</h2>
        <small>${post.date} • ${post.author}</small>
        <p>${post.content.substring(0, 200)}...</p>
        <a href="post.html?id=${index}">Read More →</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading posts:", error);
  });