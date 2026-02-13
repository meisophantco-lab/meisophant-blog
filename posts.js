fetch("posts.json")
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById("posts-container");

    if (!container) return;

    posts.forEach(post => {
      const div = document.createElement("div");
      div.className = "post-card";

      div.innerHTML = `
        <h2>${post.title}</h2>
        <small>${post.date} • ${post.author}</small>
        <p>${post.excerpt}</p>
        <a href="post.html?id=${post.id}">Read More →</a>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error("Posts loading error:", err);
  });