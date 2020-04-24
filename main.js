$(document).ready( function()
{

  $("<datalist>", {id:"fighter_datalist"}).appendTo( "body" )
  fighters.forEach(f=>$('#fighter_datalist').append($('<option>').html(f.hiragana).val(f.name)))

  $('#attack').append($('<list>').val("fighter_datalist"))
  const urlParameters = getUrlParameters()
  urlParameters.forEach(p=>parameterToInput(p))

  $("input").change(function() {
    run()
  });
  run()

   $(".js-modal-open").each(function(){
        $(this).on("click",function(i){
            winScrollTop = $(window).scrollTop()
            const target = $(this).data("target")
                 ,player = $(this).data("player")			
                 ,modal = document.getElementById(target)
			$(modal).attr('data-player',player)
            $(modal).fadeIn()
			$("#fighter_search").focus()
			fighterSearchInput()
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut()
        $('body,html').stop().animate({scrollTop:winScrollTop}, 100)
        return false;
    });
});


//  e=>(e.onclick = (c)=>
//  {
//             $('.js-modal').fadeIn();
//        return false;
//  }))
//   $('.js-modal-open').each(function()
//   {
//      $(this).on("click", function()
//	  {
//	     let target = $(this).data("")
//	  })
//   })
//   
//   .on('click',function(){
//        $('.js-modal').fadeIn();
//        return false;
//    });
//    $('.js-modal-close').on('click',function(){
//        $('.js-modal').fadeOut();
//        return false;
//    });



