$(document).ready( function()
{
  const urlParameters = getUrlParameters()
  urlParameters.forEach(p=>parameterToInput(p))

  $("input").change(function() {
    run()
  });
  run()

   $(".js-modal-open").each(function(){
        $(this).on("click",function(i){
            winScrollTop = $(window).scrollTop()
            const target = $(this).attr('data-target')
                 ,player = $(this).attr('data-player')			
                 ,modal = document.getElementById(target)
			$(modal).attr('data-player',player)
            $(modal).fadeIn(100)
			$("#fighter_search").val("")
			$("#fighter_search").focus()
			fighterSearchInput()
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut(100)
        $('body,html').stop().animate({scrollTop:winScrollTop}, 100)
        return false;
    });
});


