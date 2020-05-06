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
function q_and_a(){
	
	$("#q_and_a").html(`
<h5>☆★☆初心者向けQA☆★☆</h5>
<h5>Q.フレーム(F)ってなんですか？</h5>
1/60秒が1Fです。リンクの回転斬りは7/60秒だから～と表現するのは面倒なわけです。略して7Fと言います。
<h5>Q.表示結果の「発生」ってなんですか？</h5>
技の攻撃判定の開始～終了時間です。
<h5>Q.表示結果の「硬直差」と「猶予」ってなんですか？</h5>
硬直差は、攻撃側が技の反動で次の行動が取れない時間のことです。反撃側は硬直差の時間に間に合う技を当てれば反撃できます。ツールではこの受付時間を猶予と表します。
<h5>Q.表示結果に反撃側の技がない or 「猶予」がマイナス表記のものはなんですか？</h5>
反撃できません。もしくはツールに技が未登録です。空中攻撃の場合は、本ツールは着地までの時間を0Fとして計算するため、猶予がマイナス表記でも位置によって反撃できます。
<h5>Q.なぜ「猶予」に1Fでも間に合わなければ反撃できないのですか？</h5>
ガードが1Fで出せるからです。

<h5>★☆★中～上級者向け★☆★</h5>
<h5>Q.表示結果の投げの硬直が2F短いのはなぜですか？</h5>
その場回避を考慮してます。
<h5>Q&Aの表示なんで汚いの？やる気ある？</h5>
ごめんなさい	
`).append()
}