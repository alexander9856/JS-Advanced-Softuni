function printDeckOfCards(card) {
    function createCard(face, suit) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let codes = {
            'S': '\u2660 ',
            'H': '\u2665 ',
            'D': '\u2666 ',
            'C': '\u2663 ',
        }
        if (!Object.keys(codes).includes(suit) || !validFaces.includes(face)) {
            throw new Error('Error')
        }
        return {
            face,
            suit: codes[suit],
            toString() {
                return this.face + this.suit
            }
        }
    }
    let deck = []
    for (let i of card) {
        let faceCard = i.slice(0, -1);
        let suitCard = i.slice(- 1);
        try {
            deck.push(createCard(faceCard, suitCard).toString())
        }
        catch (err) {
            console.log(`Invalid card: ${i}`)
            return
        }
    }
    console.log(deck.join(' '))

}


printDeckOfCards(['AS', '10D', 'KH', '2C'])