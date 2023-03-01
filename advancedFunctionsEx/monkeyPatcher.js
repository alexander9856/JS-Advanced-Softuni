function solution(command, comand2) {
    switch (command) {
        case 'upvote':
            return this.upvotes++;
        case 'downvote':
            return this.downvotes++;
        case 'score':
            let upvotes = this.upvotes;
            let downvotes = this.downvotes
            let totalVotes = upvotes + downvotes;
            let balance = upvotes - downvotes
            return opinion()
            function opinion() {
                let newDownvotes = downvotes;
                let newUpvotes = upvotes;
                let rating = ''
                if (totalVotes > 50) {
                    let bigger = Math.max(upvotes, downvotes);
                    newDownvotes += Math.ceil(bigger * 0.25)
                    newUpvotes += Math.ceil(bigger * 0.25)
                }
                if (totalVotes < 10) rating = 'new'
                else if (((upvotes / totalVotes) * 100) > 66) rating = 'hot'
                else if (balance >= 0 && totalVotes > 100) rating = 'controversial'
                else if (balance < 0) rating = 'unpopular'
                else rating = 'new'
                return [newUpvotes, newDownvotes, balance, rating]
            }
    }
}
let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

console.log(solution.call(post, 'upvote'))
console.log(solution.call(post, 'downvote'));
let score = console.log(solution.call(post, 'score')); // [127, 127, 0, 'controversial']
console.log(solution.call(post, 'downvote'));         // (executed 50 times)
console.log(score = solution.call(post, 'score'));     // [139, 189, -50, 'unpopular']


// console.log(solution.call(post, 'upvote'));
// console.log(solution.call(post, 'downvote'));
// let score = console.log(solution.call(post, 'score')); // [127, 127, 0, 'controversial']
// console.log(solution.call(post, 'downvote'));         // (executed 50 times)
// console.log(score = solution.call(post, 'score'));     // [139, 189, -50, 'unpopular']


