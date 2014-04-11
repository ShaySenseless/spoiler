//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1. hide spoiler
$(".spoiler span").hide();
//2. add a button
$(".spoiler").append("<button>Reveal spoiler</button>");
//3. when button is pressed
$(".spoiler button").click(function() {
	//3.1 show spoiler
	$(this).prev().show();
	//3.2 hide button
	$(this).remove();
});