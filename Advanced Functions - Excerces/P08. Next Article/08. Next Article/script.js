function getArticleGenerator(articles) {
    var arr = Array.from(articles);
    arr = arr.splice(', \n')
    var body = document.getElementById('content');

    return function showNext() {
        var str = arr.shift();
        if (str === undefined) {
            return;
        }
        var article = document.createElement('article');
        article.textContent = str;
        body.appendChild(article);

    }


}
