function clicker(){
$(".load-here").on('click','a',function(){
  var description = $( this ).find("p")
  description.toggleClass( "hide" );
})
}
