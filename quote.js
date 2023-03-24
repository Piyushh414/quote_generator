// variables
let btn = document.querySelector('#new_quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =  [{
    quote: 'Success is the product of daily habits.',
    person: 'James Clear'
}, 

{
    quote: 'Believe you can and you\'re halfway there.',
    person: 'Theodore Roosevelt'
},

{
    quote: 'The only way to do great work is to love what you do.',
    person: 'Steve Jobs'
},

{
    quote: 'The best way to predict your future is to create it.',
    person: 'Abraham Lincoln'
},

{
    quote: 'The only thing we have to fear is fear itself.',
    person: 'Franklin D. Roosevelt'
},

{
    quote: 'Life is 10% what happens to us and 90% how we react to it.',
    person: 'Charles R. Swindoll'
},  

];

btn.addEventListener('click', function() {
  let randomIndex = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[randomIndex].quote;
  person.innerText = quotes[randomIndex].person;
});
