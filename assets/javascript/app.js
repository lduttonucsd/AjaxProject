var topics = [
    "pizza", "ice cream", "sushi", "burritos", "coffee", "tea"
];
console.log(topics);
// alert("works");
// create and storing buttons with jquery
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topics + "&api_key=0CvLFNIibv2RnyEfX7vTiXE9viHifUW4";

$.ajax({
    url: queryURL,
    method: "GET"
    
})
console.log(Response);
var topicBtns = document.createElement("BUTTONS");
for (var i = 0; i < topics.length; i++) {

}
