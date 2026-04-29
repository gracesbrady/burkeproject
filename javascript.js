const bio = document.getElementById("bio-button");
const book = document.getElementById("book-button");
const career = document.getElementById("career-button");
const thought = document.getElementById("thought-button");
const resources = document.getElementById("resources-button");

bio.addEventListener("click", function() {

    document.getElementById("bio-header").scrollIntoView({behavior: "smooth"});

});

book.addEventListener("click", function() {

    document.getElementById("book-header").scrollIntoView({behavior: "smooth"});

});

career.addEventListener("click", function() {

    document.getElementById("political-career-header").scrollIntoView({behavior: "smooth"});

});

thought.addEventListener("click", function() {

    document.getElementById("political-thought-header").scrollIntoView({behavior: "smooth"});

});

resources.addEventListener("click", function() {

    document.getElementById("further-resources-header").scrollIntoView({behavior: "smooth"});

});