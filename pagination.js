const postsContainer = document.getElementById("postsContainer");
const pagination = document.getElementById("pagination");

const itemsPerPage = 4;
let currentPage = 1;

function setupPagination(){
  const posts = [...document.querySelectorAll(".post-card")];
  const pageCount = Math.ceil(posts.length / itemsPerPage);

  pagination.innerHTML = "";

  for(let i=1;i<=pageCount;i++){
    const btn = document.createElement("button");
    btn.textContent = i;
    if(i === currentPage) btn.classList.add("active");

    btn.onclick = () => {
      currentPage = i;
      showPage(posts);
      setupPagination();
    };

    pagination.appendChild(btn);
  }

  showPage(posts);
}

function showPage(posts){
  posts.forEach((post, index) => {
    post.style.display = (index >= (currentPage-1)*itemsPerPage && index < currentPage*itemsPerPage) ? "flex" : "none";
  });
}

setupPagination();