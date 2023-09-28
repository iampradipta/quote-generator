const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

//show new quote
function newQuote() {
    //pick a random quote from array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
    quoteText.textContent = quote.text;

    //check author field is blamck or not
    if (!quote.author)
        authorText.textContent = 'unknown';
    else
        authorText.textContent = quote.author.replace(', type.fit');

    //Quote length
    if (quote.text.length > 120)
        quoteText.classList.add('long-quote')
    else
        quoteText.classList.remove('long-quote')
}

// get quotes from API
async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes"
    try {
        const responce = await fetch(apiUrl);
        apiQuotes = await responce.json()
        newQuote()
    } catch (error) {

    }
}

//tweeet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank');
}

//event listener
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

//onload 
getQuotes()