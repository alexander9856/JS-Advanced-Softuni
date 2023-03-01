function getArticleGenerator(articles) {
    return func
    function func(){
        let article = document.createElement('article');
        let div = document.getElementById('content');
        if(articles.length > 0){
        article.textContent = articles.shift()
        div.appendChild(article)}
    }
}

