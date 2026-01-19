// Immediately Invoked Function Expressions (IIFE)

// An IIFE is a function expression that executes immediately after its creation to avoid polluting the global scope.

//named iife
(function one() {
    console.log(`DB Connected`);
})();

//unnamed iife
( (name) => {
    console.log(`DB CONNECTED Two ${name}`);
})('PRIYA');