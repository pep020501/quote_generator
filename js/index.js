// connecting to html
const quote = document.querySelector("#quote-btn");

// array containing ten random famous quotes 
 const quotes = [
   "'The future belongs to who prepares for it today.' -Malcolm X",
   "'The most courageous act is still to think for yourself. Aloud.' -Coco Chanel",
   "'The successful warrior is the average man, with laser-like focus.' -Bruce Lee ",
   "'The greatest wealth is to live content with little.' -Plato",
   "'Those who dare to fail miserably can achieve greatly.' -John F. Kennedy",
   "'The root of suffering is attachment.' -Buddha",
   "'I think, therefore I am.' -René Descartes",
   "'A great man is always willing to be little.' -Ralph Waldo Emerson",
   "'That’s one small step for a man, one giant leap for mankind.' -Neil Armstrong",
   "'I came, I saw, I conquered.' -Julius Caesar"
 ];

// event listener for when button is clicked 
  quote.addEventListener("click", () => {
     let randIndex = Math.floor(Math.random() * quotes.length);
     const getQuote = quotes[randIndex];
    alert(getQuote);
  });
