const searchInput = document.getElementById("searchInput");
const posts = document.querySelectorAll(".post-card");

searchInput.addEventListener("keyup", function(){
  const value = this.value.toLowerCase();
  posts.forEach(post => {
    post.style.display = post.innerText.toLowerCase().includes(value) ? "flex" : "none";
  });
});