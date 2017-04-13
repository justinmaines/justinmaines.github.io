//mark completed on click
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});
// remove item from list
$("ul").on("click", "span", function(){
	$(this).parent().remove();
});

//add input to list
$(".inputText").keypress(function(event){
	if(event.which === 13){
		var textInBox = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>&times; </span>" + textInBox + "</li>")
	}
});