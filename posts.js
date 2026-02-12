// posts.js

// Path to the JSON file
const postsURL = "posts.json";

// Fetch and display posts
async function loadPosts() {
  try {
    const response = await fetch(postsURL);
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error("Error loading posts:", error);
  }
}

// Display posts on the page
function displayPosts(posts) {
  const container = document.getElementById("posts-container");
  container.innerHTML = "";

  posts.forEach((post, index) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";

    postDiv.innerHTML = `
      <h2 class="post-title">${post.title}</h2>
      <p class="post-meta">By ${post.author} | ${post.date}</p>
      <img src="${post.image}" alt="${post.title}" class="post-image">
      <div class="post-content" id="content-${index}">
        ${post.content.substring(0, 400)}...
      </div>
      <button class="read-more-btn" onclick="togglePost(${index}, this)">Read More</button>
    `;

    container.appendChild(postDiv);
  });
}

// Toggle full content
function togglePost(index, btn) {
  const contentDiv = document.getElementById(`content-${index}`);
  const postsURL = "posts.json";

  fetch(postsURL)
    .then(res => res.json())
    .then(posts => {
      const post = posts[index];
      if (btn.textContent === "Read More") {
        contentDiv.innerHTML = post.content;
        btn.textContent = "Show Less";
      } else {
        contentDiv.innerHTML = post.content.substring(0, 400) + "...";
        btn.textContent = "Read More";
      }
    });
}

// Initialize
document.addEventListener("DOMContentLoaded", loadPosts);