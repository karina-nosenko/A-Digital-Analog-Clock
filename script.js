// Clock
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrDegree = (hr*360/12) + (min*(360/60)/12);
let minDegree = (min*360/60) + (sec*(360/60)/60);
let secDegree = sec*360/60;

function runTheClock() {
    hrDegree += 3/360;
    minDegree += 6/60;
    secDegree += 6;

    HOURHAND.style.transform = "rotate(" + hrDegree + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minDegree + "deg)";
    SECONDHAND.style.transform = "rotate(" + secDegree + "deg)";
}

var interval = setInterval(runTheClock, 1000);
 
// Quote
const QUOTE = document.querySelector(".quote");

function Quote(quote, author) {
    this.quote = quote;
    this.author = author;
}

var quotes = [
    new Quote("The two most powerful warriors are patience and time.", "Leo Tolstoy, War and Peace"),
    new Quote("Time is money.", "Benjamin Franklin"),
    new Quote("Time waits for no one.", "Folklore"),
    new Quote("Better three hours too soon than a minute too late.", "William Shakespeare"),
    new Quote("Lost time is never found again.", "Benjamin Franklin"),
    new Quote("Time is the most valuable thing a man can spend.", "Theophrastus"),
    new Quote("Time is the wisest counselor of all.", "Pericles"),
    new Quote("The key is in not spending time, but in investing it.", "Stephen R. Covey"),
    new Quote("It is the time you have wasted for your rose that makes your rose so important.", "Antoine de Saint-Exupéry, The Little Prince"),
    new Quote("Punctuality is the thief of time.", "Oscar Wilde, The Picture of Dorian Gray"),
    new Quote("The trouble is, you think you have time.", "Jack Kornfield"),
    new Quote("Time brings all things to pass.", "Aeschylus")
];

function changeQuote() {
    let length = quotes.length;
    let index = Math.round(Math.random()*(length-1));
    console.log(index);

    let text = quotes[index]["quote"];
    let author = quotes[index]["author"];

    QUOTE.innerHTML = '<b>"' + text + '"</b> - ' + author;
}

var interval2 = setInterval(changeQuote, 5000);


