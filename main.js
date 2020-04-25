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
			$("body").addClass('fixed')
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut(100)
        $('body,html').stop().animate({scrollTop:winScrollTop}, 100)
		$("body").removeClass('fixed')
        return false;
    });
// エンターキーで以下を処理する
$("#fighter_search").keypress((e)=>{
  if(e.which==13 && $(".fighter_search_text").length == 1){
	  $(".fighter_search_text").click()
// スマホのキーボードを閉じる
//  $("#fighter_search").blur();
   return false;
}	})
});


