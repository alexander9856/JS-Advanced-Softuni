function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes
            this.comments = []
        }
        addComment(com) {
            this.comments.push(com)
        }
        toString() {
            let res = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}\n`
            if (this.comments.length > 0) {
                res += 'Comments:\n'
                this.comments.forEach((el) => res += ' * '+ el + "\n")
                return res.trim()
            }
            return res.trim()
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content)
            this.views = views
        }
        view() {
            this.views++
            return this
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`
        }
    }

    return{
        Post,
        SocialMediaPost,
        BlogPost
    }
}

const classes = solution();
let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());
