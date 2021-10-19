class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 }
        this.listOfArticles = []
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles[articleModel.toLowerCase()]) {
            throw new Error("This article model is not included in this gallery!"
            )
        }
        var currentArticle = this.listOfArticles.find(x => x.articleName == articleName);
        if (currentArticle && currentArticle.articleModel == articleModel) {
            currentArticle.quantity += quantity;
        } else {
            articleModel = articleModel.toLowerCase()
            this.listOfArticles.push({ articleModel, articleName, quantity })
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }
    inviteGuest(guestName, personality) {
        if (this.guests.some(x => x.guest == guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        } else if (personality == 'Vip') {
            this.guests.push({ guest: guestName, points: 500, purchaseArticle: 0 })
        }
        else if (personality == 'Middle') {
            this.guests.push({ guest: guestName, points: 250, purchaseArticle: 0 })
        } else {
            this.guests.push({ guest: guestName, points: 50, purchaseArticle: 0 })
        }

        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        var article = this.listOfArticles.find(x => x.articleName == articleName);
        if (!article || article.articleModel != articleModel) {
            throw new Error("This article is not found.")
        }

        var guest = this.guests.find(x => x.guest == guestName)
        if (article.quantity <= 0) {
            return `The ${articleName} is not available.`
        } else if (guest == null) {
            return "This guest is not invited.";
        }
        var neededPoints = this.possibleArticles[articleModel];
        if (neededPoints > guest.points) {
            return "You need to more points to purchase the article."

        }
        guest.points -= neededPoints;
        guest.purchaseArticle++;
        article.quantity--;

        return `${guestName} successfully purchased the article worth ${neededPoints} points.`
    }
    showGalleryInfo(criteria) {
        if (criteria == 'article') {
            var result = [];
            result.push("Articles information:")
            let arr = [];
            this.listOfArticles.forEach(x=>arr.push(Object.values(x)))
            arr.forEach(x=> result.push(`${x[0]} - ${x[1]} - ${x[2]}`))
            return result.join("\n")
        }
        if (criteria == 'guest') {
            var result = [];
            result.push("Guests information:")
            let arr = [];
            this.guests.forEach(x=>arr.push(Object.values(x)))
            arr.forEach(x=> result.push(`${x[0]} - ${x[2]}`))
            return result.join("\n")
        }
    }

}