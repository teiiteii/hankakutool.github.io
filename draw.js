// 描画処理になった途端、クソコードどすなぁ
function create_view(attack, defend)
{
   $(".result").remove()
   const result = $("<div>",{class:"result"})
   $(result).appendTo("body")
   
   attack.skills.forEach((attack_skill, index)=>
   {
	  view_skill(attack_skill)
	  const table_id = "frame_table" + index
      defend.skills.forEach((defend_skill, index)=>
	  {
	    view_frame(attack_skill, defend_skill, table_id, index)
     })
  })
  

 // function view_frame_head(attack_skill, defend_skill)
 // {
//	const table_tr = $("table tr")
 //   const th = $("th")
//	$(th).
//	
//		
 // }   
  function view_skill(attack_skill)
  {
 
  }
  function view_frame(attack_skill, defend_skill, table_id, index)
  {
	const block_stun_difference = attack_skill.block_stun_difference
		 ,occurrence = defend_skill.begin + defend_skill.add_occurrence 
		 ,frame_trap = block_stun_difference - occurrence

	 if(index == 0)
	 {
       const p = $("<p>")
       $(p).text(`${attack_skill.skill_full_name}に対する反確リスト`)
	   
	   const new_table1 = $("<table>")
	        ,new_table1_th1 = $("<th>")
	        ,new_table1_th2 = $("<th>")
	        ,new_table1_th3 = $("<th>")
            ,new_table1_th4 = $("<th>")
            ,new_table1_th5 = $("<th>")
            ,new_table1_th6 = $("<th>")
            ,new_table1_th7 = $("<th>")
			
            ,new_table1_tr = $("<tr>")
            ,new_table1_td1 = $("<td>")
            ,new_table1_td2 = $("<td>")
            ,new_table1_td3 = $("<td>")
            ,new_table1_td4 = $("<td>")
            ,new_table1_td5 = $("<td>")
            ,new_table1_td6 = $("<td>")

	   $(new_table1_th1).text("技名")
	   $(new_table1_th2).text("発生F")		   
   
	   $(new_table1_th3).text("前隙F")
	   $(new_table1_th4).text("後隙F") 
	   $(new_table1_th5).text("全体F")		   
	   $(new_table1_th6).text("ダメージ")
	   
	   $(new_table1_td1).text(attack_skill.skill_full_name)
   
	   $(new_table1_td2).text(`${attack_skill.begin}F-${attack_skill.end}F`)

	   $(new_table1_td3).text(`${attack_skill.begin - 1}F`)		   
	   $(new_table1_td4).text(`${attack_skill.time - attack_skill.end}F`)	   
   	   $(new_table1_td5).text(`${attack_skill.time}F`)	

	   $(new_table1_td6).text(`${attack_skill.base_damage * 1.2}%`)	

	   $(new_table1_td1).appendTo($(new_table1_tr))
	   $(new_table1_td2).appendTo($(new_table1_tr))
	   $(new_table1_td3).appendTo($(new_table1_tr))
	   $(new_table1_td4).appendTo($(new_table1_tr))
	   $(new_table1_td5).appendTo($(new_table1_tr))
	   $(new_table1_td6).appendTo($(new_table1_tr))
	   
	   $(new_table1_th1).appendTo($(new_table1))
	   $(new_table1_th2).appendTo($(new_table1))
	   $(new_table1_th3).appendTo($(new_table1))
	   $(new_table1_th4).appendTo($(new_table1))
	   $(new_table1_th5).appendTo($(new_table1))
	   $(new_table1_th6).appendTo($(new_table1))	   
	   $(new_table1_tr).appendTo($(new_table1))	

       const new_table2 = $("<table>", {id:table_id})
	        ,new_table2_th1 = $("<th>")
	        ,new_table2_th2 = $("<th>")
	        ,new_table2_th3 = $("<th>")
            ,new_table2_th4 = $("<th>")
	   $(new_table2_th1).text("技名")
	   $(new_table2_th2).text("猶予F")	   
	   $(new_table2_th3).text("硬直差")
	   $(new_table2_th4).text("発生F")
	   
	   $(new_table2_th1).appendTo($(new_table2))
	   $(new_table2_th2).appendTo($(new_table2))
	   $(new_table2_th3).appendTo($(new_table2))
	   $(new_table2_th4).appendTo($(new_table2))

	   $(new_table1).appendTo($(result))	   
	   $(new_table2).appendTo($(result))
	 }
	const table = $("#" + table_id)
	     ,tr = $("<tr>")
	     ,td1 = $("<td>")
	     ,td2 = $("<td>")
         ,td3 = $("<td>")
         ,td4 = $("<td>")

	let th4text = `${occurrence}F`
    th4text += (defend_skill.add_occurrence > 0) ? `（発生${defend_skill.begin}F+硬直${defend_skill.add_occurrence}F）` : ''		 
	$(td1).text(defend_skill.skill_full_name)
	$(td2).text(`${frame_trap}F`)
	$(td3).text(`${block_stun_difference}F`)
	$(td4).text(th4text)
	$(td1).appendTo($(tr))
	$(td2).appendTo($(tr))
	$(td3).appendTo($(tr))
	$(td4).appendTo($(tr))	
	$(tr).appendTo($(table))

  }
}



