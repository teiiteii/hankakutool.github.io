function create_view(attack, defend)
{
   $("#attacks_result").children().remove()
   
   attack.skills.forEach((attack_skill, index)=>
   {
	  const result_row = $("#result_row_original").clone()
	  $(result_row).attr("id", "result_row" + index)
	  $(result_row).css("visibility","visible");
      defend.skills.forEach((defend_skill, index)=>
	  {
	    view_frame(attack, defend, attack_skill, defend_skill, result_row, index)
     })
	 
	 const tbody = $(result_row).find(".defend_table").children()
     const trs = $(tbody).find(".defend_tr")
     $(result_row).find(".defend_tr").remove()
	 
	 trs.sort((tr1,tr2)=>{
	   const sort1 = Number($(tr1).find(".sort").val())
	   const sort2 = Number($(tr2).find(".sort").val())
       return (sort1 > sort2) ? 1:-1
    })
	let minus_grace_num = 0
	const defend_tr_num = $(trs).length
	const is_attack_skill_air = skill_genres.filter((s=>(s.skill_genre == attack_skill.skill_genre)))[0].is_air	   
   $(trs).each((i,tr)=>{

	   if($(tr).find(".grace_ng").length >= 1)
	   {
		   minus_grace_num++
		   if(isUndefined(is_attack_skill_air) == true)
		   {
			  $(tr).hide();
		   }else if(is_attack_skill_air == true && minus_grace_num >= defend.minus_grace_max_num)
	   {
	      $(tr).hide();
	   }
	
	   }

	 
    })
	   
	   
	$(tbody).append($(trs))
	$("#attacks_result").append($(result_row)) 


	 const is_defend_tr_draw = ($(trs).find(".grace_ok").length >= 1 || is_attack_skill_air == true)
	   if(is_defend_tr_draw == false)
	   {
		  const attack_block_stun_difference = $(result_row).find(".val_attack_block_stun_difference")
		  const block_stun_difference = attack_block_stun_difference.text()
		  $(tbody).find("defend_tr").hide();
		  $(result_row).find(".error_message").text(`硬直差${block_stun_difference}に反撃できる技がありません or 技が未登録`)
  		   $(result_row).find(".error_message").css({"visibility":"visible"});
		   
	   }
  })

  function view_frame(attack, defend, attack_skill, defend_skill, result_row, index)
  {
	const is_add_info_draw = true
	,block_stun_difference = attack_skill.block_stun_difference
	     ,block_stun = attack_skill.block_stun
		 ,occurrence = defend_skill.begin + defend_skill.add_occurrence 
		 ,frame_trap = block_stun_difference - occurrence
         ,attack_tr = $("<tr>")
		 ,attack_tds = [
                		   {txt:`${attack_skill.skill_name}`,cls:`tr_th_left` ,sm_txt:`${(attack_skill.skill_detail_name == "")? "": "(" + attack_skill.skill_detail_name + ")"}`,cls_td:`tr_th_left`}
	                      ,{txt:`${attack_skill.begin}-${attack_skill.end}F`,cls:`` ,sm_txt:``,cls_td:``}
					      ,{txt:`${attack_skill.begin - 1}F`,cls:`` ,sm_txt:``,cls_td:``}
					      ,{txt:`${attack_skill.time - attack_skill.end}F`,cls:`` ,sm_txt:``,cls_td:``}
					      ,{txt:`${attack_skill.time}F`,cls:`` ,sm_txt:``,cls_td:``}
					      ,{txt:`${BigNumber(attack_skill.base_damage).times(1.2) == 0? "-":BigNumber(attack_skill.base_damage).times(1.2)}`,cls:`` ,sm_txt:``,cls_td:``}
					      ,{txt:`${block_stun}F`,cls:`val_attack_block_stun` ,sm_txt:``,cls_td:`${(is_add_info_draw == true) ? "":"d-none"}`}
					      ,{txt:`${block_stun_difference}F`,cls:`val_attack_block_stun_difference` ,sm_txt:``,cls_td:`${(is_add_info_draw == true) ? "":"d-none"}`}						  
					   ]
    const defend_tr = $("<tr>",{class:"defend_tr"})
	     ,defend_occurrence_text = (defend_skill.add_occurrence > 0) ? ` (${defend_skill.begin}F+硬直)` : ''	
		 ,defend_tds = [
		                 {txt:`${defend_skill.skill_name}`,cls:`tr_th_left` ,sm_txt:`${(defend_skill.skill_detail_name == "")? "": "(" + defend_skill.skill_detail_name + ")"}`,cls_td:`tr_th_left`}
	                    ,{txt:`${frame_trap}F`,cls:(frame_trap>=0) ? "grace_label grace_ok":"grace_label grace_ng" ,sm_txt:``,cls_td:`tr_th_right`}
					    ,{txt:`${block_stun_difference}F`,cls:`` ,sm_txt:``,cls_td:``}
                        ,{txt:`${occurrence}F`,cls:`` ,sm_txt:defend_occurrence_text,cls_td:`tr_th_left`}
					   ]	
	const add_td = (tr, {txt, cls, sm_txt,cls_td})=>
	{
		const td = $("<td>")
		    , span = $("<span>")
		    , sm_span = $("<span>")
		$(span).text(txt)
		$(span).addClass(cls)
		$(sm_span).text(sm_txt)
		$(sm_span).addClass("small_text")
		$(span).append(sm_span)	
        $(td).addClass(cls_td)		
		$(td).append(span)
		$(tr).append($(td))
	}
	 if(index == 0)
	 {
	   $(result_row).find(".th_attack_fighter_name").text(`${attack.adana}の攻撃`)
	   attack_tds.forEach(tds=>(add_td(attack_tr,tds,"")))
	   $(result_row).find(".attack_table").append($(attack_tr))
	   if(is_add_info_draw == false)
	   {
		   $(result_row).find(".th_attack_block_stun_difference").addClass("d-none")
		   $(result_row).find(".th_attack_block_stun").addClass("d-none")		   
	   }

	   $(result_row).find(".th_defend_fighter_name").text(`${defend.adana}の反撃`)
	 }
	 defend_tds.forEach(tds=>(add_td(defend_tr,tds,"")))
	 $(result_row).find(".defend_table").append($(defend_tr))
	 const skill_sort = $("<input>",{type:"hidden",class:"sort",value:frame_trap*-1})
	 $(defend_tr).append($(skill_sort))
  }
}