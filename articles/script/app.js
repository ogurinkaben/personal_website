const username = 'simplytammy'
const perPage = 50; //If you have more articles, increase this or add pagination
const getArticles = async () => {
    const response = await fetch(`https://dev.to/api/articles?username=${username}&per_page=${perPage}`);
    const data = await response.json();
    const name = data[0].user.name;
    document.querySelectorAll('.name').forEach(el => el.textContent = name);
    for (article of data) {
        addArticle(article);
    }
}
const addArticle = article => {
    const template = document.querySelector('#blog-item');
    const clone = template.content.cloneNode(true);
    clone.querySelector('.title').textContent = article.title;
    clone.querySelector('.url').href = `article?id=${article.id}`;
    clone.querySelector('.desc').textContent = article.description;
    if (article.cover_image) {
        clone.querySelector('.cover').src = article.cover_image;
    } else {
        clone.querySelector('.cover').src = './images/placeholder.jpg';
    }
    document.querySelector('#blog-list').appendChild(clone);
}
getArticles();

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('body').classList.add("loaded");
    }, 1000)
});
