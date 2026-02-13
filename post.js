const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const post = posts.reverse()[id];

    document.getElementById("title").innerHTML = post.title;
    document.getElementById("meta").innerHTML = `By ${post.author} • ${post.date}`;
    document.getElementById("image").src = post.image;
    document.getElementById("content").innerHTML = post.content;
  });