// ===============================
// GLOBAL VARIABLES
// ===============================

let posts = [];

const postsContainer = document.querySelector(".posts-grid");

const categoryButtons =
document.querySelectorAll(".categories button");

const searchInput =
document.querySelector("#searchInput");


// ===============================
// LOAD POSTS
// ===============================

async function loadPosts() {

    try {

        const response =
        await fetch("posts.json");

        posts =
        await response.json();

        displayPosts(posts);

    }

    catch(error){

        console.error(

            "Failed to load posts",

            error

        );

        postsContainer.innerHTML =

        `

        <p class="empty">

        Failed to load articles.

        </p>

        `;

    }

}


// ===============================
// DISPLAY POSTS
// ===============================

function displayPosts(postsArray){

    postsContainer.innerHTML = "";

    if(postsArray.length === 0){

        postsContainer.innerHTML =

        `

        <div class="empty">

            <h3>

            No articles found

            </h3>

            <p>

            Try another keyword or category.

            </p>

        </div>

        `;

        return;

    }


    postsArray.forEach(post=>{

        postsContainer.innerHTML +=

        `

        <article class="post-card">

            <img

            src="${post.image}"

            alt="${post.title}">


            <div class="post-content">

                <span class="post-tag">

                ${post.category}

                </span>


                <h3>

                ${post.title}

                </h3>


                <p>

                ${post.description}

                </p>


                <div class="post-meta">

                    <span>

                    ${post.date}

                    </span>


                    <span>

                    ${post.readTime}

                    </span>

                </div>


                <a

                href="${post.link}"

                class="read-btn">

                Read More →

                </a>

            </div>

        </article>

        `;

    });

}


// ===============================
// CATEGORY FILTER
// ===============================

categoryButtons.forEach(button=>{

    button.addEventListener(

        "click",

        ()=>{

            categoryButtons.forEach(btn=>{

                btn.classList.remove(

                    "active"

                );

            });


            button.classList.add(

                "active"

            );


            const category =

            button.innerText;


            if(

                category==="All"

            ){

                displayPosts(posts);

            }

            else{

                const filtered =

                posts.filter(post=>{

                    return post.category

                    === category;

                });


                displayPosts(

                    filtered

                );

            }

        }

    );

});




// ===============================
// SEARCH
// ===============================

if(searchInput){

searchInput.addEventListener(

    "keyup",

    ()=>{

        const keyword =

        searchInput

        .value

        .toLowerCase()


        const filtered =

        posts.filter(post=>{


            return (

                post.title

                .toLowerCase()

                .includes(keyword)


                ||

                post.description

                .toLowerCase()

                .includes(keyword)


                ||

                post.category

                .toLowerCase()

                .includes(keyword)

            );

        });


        displayPosts(filtered);

    }

);

}


// ===============================
// SCROLL ANIMATION
// ===============================

window.addEventListener(

    "scroll",

    ()=>{

        const navbar =

        document.querySelector(

            ".navbar"

        );


        if(

            window.scrollY > 50

        ){

            navbar.style.background =

            "rgba(8,17,32,.92)";

        }

        else{

            navbar.style.background =

            "rgba(8,17,32,.75)";

        }

    }

);


// ===============================
// START
// ===============================

loadPosts();
