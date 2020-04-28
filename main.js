$(document).ready( function()
{
  const urlParameters = getUrlParameters()
  urlParameters.forEach(p=>parameterToInput(p))
  updateSkillGenreSelect("attack", null)
  updateSkillGenreSelect("defend", null)

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
			fighterSearchInput()
			$("body").addClass('fixed')
			$("#fighter_search").focus()			
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut(100)
        $('body,html').stop().animate({scrollTop:winScrollTop}, 100)
		$("body").removeClass('fixed')
        return false;
    });
	
$("#fighter_search").keypress((e)=>{
  if(e.which!=13)
  {
	return
  }
  if($(".fighter_search_text").length == 1){
    $(".fighter_search_text").click()
	$("#fighter_search").blur()
    return false
    }
	$(".fighter_search_text").each((i,e)=>{
  const fighter_name_input = $("#fighter_search").val()
       ,fighter_name = fighter_name_input.replace(/\s+/g, "")
       ,fighter = fighters.find(s=>(s.hiragana == fighter_name_input))
	  if(fighter_name == $(e).text() || (isUndefined(fighter) == false && fighter_name == fighter.hiragana))
	  {
	    $(e).click()
		$("#fighter_search").blur()
        return false 
	  }
	})
  })
});


