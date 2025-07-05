
document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-posts");

    fetch("assets/js/blogs.json")
        .then(response => response.json())
        .then(data => {
            blogContainer.innerHTML = "";
            data.articles.forEach(article => {
                const post = document.createElement("div");
                post.className = "col-md-4";
                post.innerHTML = `
                    <div class="card bg-black text-white h-100 border border-neon shadow">
                        <div class="card-body">
                            <h5 class="card-title text-neon">${article.title}</h5>
                            <p class="card-text">${article.description}</p>
                            <a href="#" class="btn btn-outline-light btn-sm">Lire plus</a>
                        </div>
                    </div>`;
                blogContainer.appendChild(post);
            });
        })
        .catch(err => {
            blogContainer.innerHTML = "<p class='text-danger'>Erreur de chargement des articles.</p>";
        });
});
