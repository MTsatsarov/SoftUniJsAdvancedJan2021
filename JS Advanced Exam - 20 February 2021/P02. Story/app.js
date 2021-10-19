class Story {
    constructor(title, creator) {
        this.title = title
        this.creator = creator
        this._comments = [];
        this._likes = [];
    }
    Getterlikes() {
        if (this._likes.length == 0) {
            return `${title} has 0 likes`
        } else if (this._likes.length == 1) {
            return `${username} likes this story!`
        } else {
            this._likes.push(username)
            return `${this._likes[1]} and ${this._likes.length - 1} others like this story!`
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw Error("You can't like the same story twice!")
        } else if (username == this.creator) {
            throw Error("You can't like your own story!")
        }
    }
}
