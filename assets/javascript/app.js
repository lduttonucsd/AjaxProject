
var topics = ["pizza", "cheeseburgers", "barbeque", "ice cream"];
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=0CvLFNIibv2RnyEfX7vTiXE9viHifUW4"
function getGifs() {
    $.ajax({
        url: queryURL,
        method: "GET"

    })

        .then(function (response) {
            // console.log(response);
            // console.log(response.data[0].rating);
            var ratingVar = $("<p>");
            // var gifVar = $("<img>");
            // gifVar.text(response.embed_url);
            // $("#gifArea").append(gifVar);
            ratingVar.text(response.data[0].rating);
            $("#ratingArea").append(ratingVar);

        })
};

// on click listener targets "#searchBtn"
// on click
// jquery adds new search to topics array
// prepends that to list of buttons

function btnMaker() {
    
    for (var i = 0; i < topics.length; i++) {
        var btn = $("<button>");
        btn.text(topics[i]);
        btn.attr("data-title", topics[i]);
        btn.addClass("newBtn", "showBtn");
        $("#topicbuttons").append(btn);
    }
}
btnMaker();


$(document).on("click", ".showBtn", function (event) {
    // console.log("clicked");
    
    $("gifArea").empty();
    
    $(this).attr("data-title");
});
// listen for click on button
// clear gifs
// add new gifs
// getGifs(topic);