var listOfQuotes = [
    '“Be yourself; everyone else is already taken.” ― Oscar Wilde',
    '“Be the change that you wish to see in the world.” ― Mahatma Gandhi',
    '“If you tell the truth, you don\'t have to remember anything.” ― Mark Twain',
    '“I have not failed. I\'ve just found 10,000 ways that won\'t work.” ― Thomas A. Edison',
    '“It is never too late to be what you might have been.” ― George Eliot ',
    '“Anyone who has never made a mistake has never tried anything new.” ― Albert Einstein ',
    '“It takes courage to grow up and become who you really are.” ― E.E. Cummings ',
    '“It’s no use going back to yesterday, because I was a different person then.” ― Lewis Carroll ',
    '“When you see a person who has been given more than you in money and beauty, then look to those who have been given less.” ― Muhammad(PBUH)',
    '“Genius is one percent inspiration, ninety-nine percent perspiration.” ― Thomas A. Edison',
];



function showQuote(currentColor) {  

    document.getElementById(
        "quote-box").innerHTML=listOfQuotes[Math.floor(Math.random()* 9)];;

    document.getElementById(
        "quote-box").style.color="#353535";      

    if (currentColor == 'rouge') {
            document.getElementById(
        "quote-box").style.background="rgb(231, 161, 161)";
    } else if (currentColor == 'lyla') {
        document.getElementById(
        "quote-box").style.background="#f5a7e1";
    } else if (currentColor == 'noire') {
        document.getElementById(
        "quote-box").style.background="#5e5e5e";
        document.getElementById(
            "quote-box").style.color="#f1f1f1";
    } else {
        document.getElementById(
            "quote-box").style.background="#a0d8c1";
    }
    
};