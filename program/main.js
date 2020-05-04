$(document).ready( function()
{
  const urlParameters = getUrlParameters()
    updateSkillGenreSelect("attack", null)
  updateSkillGenreSelect("defend", null)
  urlParameters.forEach(p=>parameterToInput(p))

$("#op_select").select2({
    tags: true,
    tokenSeparators: [',', ' ']
    ,dropdownAutoWidth: true,
    width: '100%'
})
//$('#op_select').select2().val([8.545,7.65]).trigger("change")


$("#op_select").on("select2:select select2:unselect", function (e) {

    const items = $(this).val();
    const item_nums = items.map(m=>(Number(m)));
	if(item_nums.length == 0)
	{
			$("#op").text(105)
	}else{
	const op_sum = item_nums.reduce((a,b)=>(BigNumber(a).plus(b)))
	const op = BigNumber(100).minus(op_sum).toNumber()
	$("#op").text(op)

	}

	if($(".row_frame_view_mode").hasClass("attack"))
	{
	run("attack")

	}else if($(".row_frame_view_mode").hasClass("defend"))
	{
	run("defend")
	}
	else{
	run()
	}
  })

  // run実行
  $('#op_select').trigger('select2:select')

  $("input").change(function() {
    run()
  });



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
     const clipboard = new Clipboard('.clipboard_btn');
	 clipboard.on('success',(e)=>{
     e.clearSelection();
     });
});
