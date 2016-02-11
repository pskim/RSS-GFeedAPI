var Handler = (function(){
  var description;

  function clickHandler(){
    $(".load-here").on('click','li',function(){
      description = $( this ).find(".onClickShow")
      description.toggleClass( "hide" );

      $(this).find(".snippet").toggleClass("hide")


    })

  }

  // favorites
  // popupvid

  return {
    clickHandler: clickHandler
  }

})()
