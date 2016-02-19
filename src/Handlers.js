var Handler = (function(){
  var description;
  var placeHere = $(".load-here")
  function clickHandler(){
      placeHere.on('click',".clickInThisBox",function(){
      description = $( this ).parent().find(".onClickShow");
      description.toggleClass( "hide" );
      $(this).find(".snippet").toggleClass("hide");
    })
  }
  return {
    clickHandler: clickHandler
  }
})()
