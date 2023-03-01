class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }
    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`
        }
        else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`
        }
        else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }
    }
    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!")
        }
        else if (username == this.creator) {
            throw new Error("You can't like your own story!")
        }
        else {
            this._likes.push(username)
            return `${username} liked ${this.title}!`
        }
    }
    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!")
        }
        else {
            this._likes.splice(this._likes.indexOf(username), 1)
            return `${username} disliked ${this.title}`
        }
    }
    comment(username, content, id) {
        let found = this._comments.filter((x) => x.newId == id)[0]
        if (!id || !found) {
            let newId = this._comments.length + 1
            this._comments.push({ username, content, newId, replies: [] })
            return `${username} commented on ${this.title}`
        }
        else if (id == found.newId) {
            let replyId = `${id}.${found.replies.length + 1}`
            found.replies.push({ username, content, replyId })
            return "You replied successfully"
        }
    }
    toString(sortingType) {
        let res = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`

        if (sortingType == 'asc') {
            this._comments.forEach(el => el.replies.sort((a, b) => a.replyId - b.replyId))
            this._comments.sort((a, b) => a.newId - b.newId)
        }
        else if (sortingType == 'desc') {
            this._comments.forEach(el => el.replies.sort((a, b) => b.replyId - a.replyId))
            this._comments.sort((a, b) => b.newId - a.newId)
        }
        else if (sortingType == 'username'){
            this._comments.forEach(el => el.replies.sort((a, b) => a.username.localeCompare(b.username)))
            this._comments.sort((a, b) => a.username.localeCompare(b.username))
        }
            this._comments.forEach((el) => {
                res += `-- ${el.newId}. ${el.username}: ${el.content}\n`
                el.replies.forEach((c) => res += `--- ${c.replyId}. ${c.username}: ${c.content}\n`)
            })

        return res.trim()
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

