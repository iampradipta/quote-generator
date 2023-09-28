const quoteContainer = document.getElementById('quote-container')
const textQuote = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const tweetBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

let apiQuotes = []

//new quotes every time
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    textQuote.innerText = quote.text;
    quoteAuthor.innerText = quote.author.replace(', type.fit','');

}

//tweet
function  tweetQuote(){
    const tweetUrl = `https://twitter.com/intent/tweet?text=${textQuote.textContent} - author${quoteAuthor.textContent}`
    window.open(tweetUrl, '_blank')
}


//get quotes from api
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const responce = await fetch(apiUrl)
        apiQuotes = await responce.json();

        newQuote()
    } catch (error) {
        console.log('error', error);
    }

}

//buttons call
tweetBtn.addEventListener('click', tweetQuote)
newQuoteBtn.addEventListener('click', newQuote)

//onload
getQuotes()