class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { 'picture': 200, 'photo': 50, 'item': 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase()
        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error("This article model is not included in this gallery!")
        }
        let article = this.listOfArticles.filter((x) => x.articleName == articleName)[0]
        if (article && article.articleModel == articleModel) {
            article.quantity += quantity
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        }
        else {
            this.listOfArticles.push({ articleModel, articleName, quantity })
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        }
    }
    inviteGuest(guestName, personality) {
        let guest = this.guests.filter((x) => x.guestName == guestName)[0]
        let points = 0
        if (personality == 'Vip') points = 500
        else if (personality == 'Middle') points = 250
        else points = 50
        if (guest) {
            throw new Error(`${guestName} has already been invited.`)
        }
        else {
            this.guests.push({ guestName, points, purchaseArticle: 0 })
            return `You have successfully invited ${guestName}!`
        }
    }
    buyArticle(articleModel, articleName, guestName) {
        let item = this.listOfArticles.filter((x) => x.articleName == articleName)[0]
        let guest = this.guests.filter((x) => x.guestName == guestName)[0]
        if (!item || item.articleModel !== articleModel) {
            throw new Error("This article is not found.")
        }
        else if (item.quantity == 0) {
            return `The ${articleName} is not available.`
        }
        else if (!guest) {
            return "This guest is not invited."
        }
        else {
            if (guest.points < this.possibleArticles[articleModel]) {
                return "You need to more points to purchase the article."
            }
            else {
                guest.points -= this.possibleArticles[articleModel]
                item.quantity -= 1
                guest.purchaseArticle++
                return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
            }
        }
    }
    showGalleryInfo(criteria) {
        if (criteria == 'article') {
            let res = 'Articles information:\n'
            this.listOfArticles.forEach(el => res += `${el.articleModel} - ${el.articleName} - ${el.quantity}\n`)
            return res.trim()
        }
        else {
            let res = "Guests information:\n"
            this.guests.forEach(el => res += `${el.guestName} - ${el.purchaseArticle}\n`)
            return res.trim()
        }
    }
}

let art = new ArtGallery("Curtis Mayfield");
console.log(art.addArticle('picture', 'Mona Liza', 3))
console.log(art.addArticle('Item', 'Ancient vase', 2))
console.log(art.addArticle('picture', 'Mona Liza', 1))