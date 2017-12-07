$(document).ready(function() {

var kitchenUtensils = ["spoon", "fork", "knife", "spatula", "ladle", "whisk", "tongs"];


function makeNewButton() {

$(".buttons").empty();

for(var i = 0; i < kitchenUtensils.length; i++) {
	
	var newButton = $("<button>");
	newButton.addClass("btn btn-primary btn-lg  utensils");
	newButton.text(kitchenUtensils[i]);
	$(".buttons").append(newButton);

}
}

$("#newButton").on("click", function() {
	
	var searchItem = $("input").val();
	console.log(searchItem);
	kitchenUtensils.push(searchItem);
	makeNewButton();

});

$(".buttons").on("click" , ".utensils" , function() {

	$(this);
	var clickItem = $(this).text;

	getUtensils(clickItem);

	console.log(this);

});

function getUtensils(grab) {

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + grab + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);

  	var arrayOfPictures = response.data; 

   for(var i = 0; i < arrayOfPictures.length; i++) {
    
    var newPicture = $("<img>");
    newPicture.attr("src", arrayOfPictures[i].images.fixed_width_small_still.url);
    $(".pictures").append(newPicture);

	}



    });
}

makeNewButton();

});