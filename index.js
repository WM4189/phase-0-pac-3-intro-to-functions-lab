function shout(string) {
return string.toUpperCase();
}
//console.log(shout("woo"));

function whisper(string) {
    return string.toLowerCase();
}
//console.log(whisper("WOO"));

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
        return ("I can't hear you!");
    } else if (string === string.toUpperCase()) {
        return ("YES INDEED!");
    } else if (string === "I love you, Grandma.") {
        return ("I love you, too.");
    }
}
/*console.log(sayHiToGrandma("slow and low"));
console.log(sayHiToGrandma("HIGH AND DRY"));
console.log(sayHiToGrandma("I love you, Grandma."));*/
