// Immediately Invoked Function Expressions (IIFE)
// IIFE is used to immediately run function & to avoid the pollution created due to global variables.

// named IIFE
(function chai(){
    console.log(`Named IIFE`);
})();   // if we don't use semicolon(;) at end if IIFE call then it will throw error for second IIFE

// unnamed IIFE
((name) => {
    console.log(`Unnamed IIFE ${name}`);
})("Aayush");
