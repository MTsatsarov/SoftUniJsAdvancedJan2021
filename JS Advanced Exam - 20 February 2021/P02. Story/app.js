class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.commments = [];
        this._likes = [];
    }
    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`
        }
        if (this._likes.length == 1) {
            var name = this._likes[0];
            return `${name} likes this story!`
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
    }
    like(username) {
        if (this._likes.includes(username)) {
            return "You can't like the same story twice!"
        }
        if (this.creator == username) {
            return "You can't like your own story!"
        }
        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            return "You can't dislike this story!"
        }
        var index = this._likes.findIndex(x => x == username)
        this._likes.splice(index, 1)
        return `${username} disliked ${this.title}`

    }

    comment(username, content, id) {
        if (id == undefined) {
            this.commments.push({ id: this.commments.length + 1, name: username, content: content, replies: 0 })
            return `${username} commented on ${this.title}`
        }
        var index = this.commments.findIndex(x => x.id == id)
        if (index + 1) {
            var comment = this.commments.find(x => x.id == id);
            this.commments.push({ id: `${index}. ${comment.replies}`, username, content })
            return "You replied successfully";
        }
    }

    toString(criteria) {
        var result = []
        result.push(`Title: ${this.title}`)
        result.push(`Creator: ${this.creator}`)
        result.push('Comments:')
        if (criteria == "asc") {
         this.commments.sort((a,b) => a.id.localeCompare(b.id)).forEach(x=>result.push(x))
        }
        else if(criteria=='desc') {
           var arr =  this.commments.sort()
           console.log(arr)
        }
        return result.join('\n')
    }

}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
