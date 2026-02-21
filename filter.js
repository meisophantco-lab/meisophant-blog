const filterButtons = document.querySelectorAll(".filter-buttons button");
const posts = document.querySelectorAll(".post-card");

filterButtons.forEach(btn => {
  btn.onclick = () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    let filter = btn.dataset.filter;

    posts.forEach(post => {
      post.style.display = filter === "all" || post.dataset.category === filter ? "flex" : "none";
    });
  }
});