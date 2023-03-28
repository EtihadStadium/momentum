const quotes = [
    {
        quote: "Lorem ipsum dolor sit amet1",
        author: "author1",
    },
    {
        quote: "Lorem ipsum dolor sit amet2",
        author: "author2",
    },
    {
        quote: "Lorem ipsum dolor sit amet3",
        author: "author3",
    },
    {
        quote: "Lorem ipsum dolor sit amet4",
        author: "author4",
    },
    {
        quote: "Lorem ipsum dolor sit amet5",
        author: "author5",
    },
];
const quote = document.getElementById("quote");
const today = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = `${today.quote}, ${today.author}`;
