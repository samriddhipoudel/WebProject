var quotes = [
    "Printers whisper the poetry of ideas, transforming mere words into a symphony of ink on the pages of possibility."
   ];

   function generateQuote() {
      var quoteElement = document.getElementById('quote');
      var randomIndex = Math.floor(Math.random() * quotes.length);
      quoteElement.innerText = quotes[randomIndex];
   }
