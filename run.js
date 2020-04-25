//当たるフレーム速さで隙が変わるか
//2段技。連続技


function fighterSearchInput()
{
  const fighter_name = $("#fighter_search").val()
  const getSearchedFighter = (fighter_name)=>{
	  const searchedFighter = fighters.map((f)=>{
  let index_of = f.name.indexOf(fighter_name)
  let hiragana_index_of = f.hiragana.indexOf(fighter_name)	
  index_of = (index_of == -1) ? hiragana_index_of:index_of
  hiragana_index_of = (hiragana_index_of) == -1 ? index_of:hiragana_index_of
  let ans_index_of = index_of < hiragana_index_of ? index_of:hiragana_index_of
  if(index_of == -1 && hiragana_index_of == -1)
  {
	ans_index_of = undefined
  }
    return{
      name:f.name
     ,hiragana:f.hiragana	
     ,index_of:ans_index_of
    }
  }).filter(f=>(isUndefined(f.index_of) == false))

  searchedFighter.sort((a, b)=>
  {
    if(a.hiragana < b.hiragana) return -1
    if(a.hiragana > b.hiragana) return 1
    return 0
  })

  searchedFighter.sort((a, b)=>
  {
    if(a.index_of < b.index_of) return -1
    if(a.index_of > b.index_of) return 1
    return 0
  })
  return searchedFighter
  }
  const histry_max = 20
  const histry_fighter_key = "search_fighter"
  
  const getHistoryFighter = ()=>{
	  const histry_fighters = []
	  for(let i = 0; i <histry_max;i++)
	  {
	    const histry_fighter_name = (localStorage.getItem(histry_fighter_key + i))
		if(histry_fighter_name != null && histry_fighter_name !=""){
			histry_fighters.push({name:histry_fighter_name})
	    }
	  }
	  return histry_fighters
  }
  
  
const searchedFighter = fighter_name == "" ? getHistoryFighter():getSearchedFighter(fighter_name)
    $(".fighter_search_text").remove()
  $(".fighter_search_history").remove()

	 const history_text = $("<p>",{class:"fighter_search_history"})
	 const selected_histry_count = Object.keys(searchedFighter).length
	 if(selected_histry_count >= 1)
	 {
	   $(history_text).text("履歴" + selected_histry_count +"件")	 
	 }
	 if(fighter_name=="")
	 {
	 	$(history_text).appendTo("#fighter_search_texts")  
	 }
  searchedFighter.forEach((s)=>{
    const fighter_search_text = $("<p>",{class:"fighter_search_text", ontouchstart:""})
	$(fighter_search_text).text(s.name)
    $(fighter_search_text).on("click",function(i){
      const fighter_text = "#" + $(fighter_select_modal).attr("data-player") + "_fighter_text"
	  const selected_fighter_name = $(this).text()
	  $(fighter_text).val(selected_fighter_name)
	  $('.js-modal-close').click()
      const setHistoryFighter = (selected_fighter_name)=>{
	  let histry_fighters = []
	  for(let i = 0; i <histry_max;i++)
	  {
		 	    const histry_fighter_name = (localStorage.getItem(histry_fighter_key + i))
		histry_fighters.push((histry_fighter_name == null || histry_fighter_name == "")? "":histry_fighter_name)
	  }
	  const exist_count = histry_fighters.filter(h=>(h != selected_fighter_name)).length	  
	  histry_fighters = histry_fighters.filter(h=>(h != selected_fighter_name))
	  histry_fighters.unshift(selected_fighter_name)
	  if(exist_count == 0)
	  {
	  histry_fighters.pop()
	  }
	  for(i = 0; i < histry_fighters.length;i++)
	  {
	    localStorage.setItem(histry_fighter_key + i, histry_fighters[i])
	  }
	  
	  return histry_fighters
  }	 	
setHistoryFighter(selected_fighter_name)  
run()
     });

	$(fighter_search_text).appendTo("#fighter_search_texts")

  })
  
}
function exchange_fighter()
{
  valExchange($("#attack_fighter_text"), $("#defend_fighter_text"))
  run()
}
function selected_fighter(fighter_id, attack_flg)
{
  if(attack_flg)
  {
    
  }
  else
  {
     
  }
}

function run()
{
  const urlParameter = inputToUrlParameter()
       ,action_shield = 1
       ,action_just_shield = 2
  
  const prevUrlParameter = decodeURIComponent(location.search)
 // if(urlParameter == prevUrlParameter)
  {
  //  return
  }
  attack =
  {
    ...fighters.find(s=>(s.name == $("#attack_fighter_text").val()))
   ,skills:null
   ,op:1.05
   ,until_landing:0
  }
  
  defend = 
  {
    ...fighters.find(s=>(s.name == $("#defend_fighter_text").val()))
   ,skills:null
   ,action:action_shield
   ,is_ground:true
   ,is_jump_b:false
  }

  if(isUndefined(attack.fighter_id) || isUndefined(defend.fighter_id))
  {
    //alert("おっ 新ファイターかい？ ファイターは正しく入力してね")
	return
  }
  console.log("測定開始")
  init()
  create_view(attack, defend)
  
  console.log(defend)
  //console.log(attack)
  //location.search = urlParameter
  history.pushState(null,null,urlParameter);

  function init()
  {
    const is_criterion_attacker_spell = true
         ,selected_skill_id = 0//test
    let attack_skills;
    let defend_skills;
    if(is_criterion_attacker_spell)
    {
      attack_skills = [skills[selected_skill_id]]
      defend_skills = skills.filter(s=>(s.fighter_id == defend.fighter_id))
    }
    else
    {
      attack_skills = skills.filter(s=>(s.fighter_id == attack.fighter_id))
      defend_skills = [skills[selected_skill_id]]
    }
	//テスト用
	if(true){
		      attack_skills = skills.filter(s=>(s.fighter_id == attack.fighter_id))
           defend_skills = skills.filter(s=>(s.fighter_id == defend.fighter_id))
	}
    attack.skills = attack_skills.map((skill)=>
    {
      const block_stun = getBlockStun(skill)
           ,block_stun_difference = getBlockStunDifference(skill, block_stun)
	       ,skill_genre_name = getSkillGenreName(skill.skill_genre)
	       ,skill_full_name = getSkillFullName(skill)
      return {
	    ...skill, 
	    block_stun,
		block_stun_difference,
		skill_genre_name,
		skill_full_name
      }
    })
    defend.skills = defend_skills.map((skill)=>
    {
      return {
	    ...skill
	   ,add_occurrence:getAddOccurrence(defend, skill)
       ,skill_genre_name:getSkillGenreName(skill.skill_genre)
	   ,skill_full_name:getSkillFullName(skill)
	  }
    })
  }
 
  function getBlockStun(attack_skill)
  {
	const skill_genre = skill_genres.find(s=>(s.skill_genre == attack_skill.skill_genre))
    if(isUndefined(attack_skill.base_damage))
    {
      return "基礎ダメージ未登録"
    }
    if(attack_skill.base_damage == 0) 
    {
      return 0
    }
	let correction = 1.0

	if(skill_genre.is_air == true)
	{
	  correction = 0.33
	}
	else if(skill_genre.is_smach == true)
	{
	  correction = 0.725
	}
	else if(skill_genre.is_item_throw == true)
	{
	  correction = 0.29
	}

   const block_stun = Math.floor((attack_skill.base_damage * attack.op * 0.8 * correction) + 2)
   return defend.action == action_just_shield ? block_stun + 3 : block_stun
  
  }
  
  function getBlockStunDifference(attack_skill,block_stun)
  {
	const skill_genre = skill_genres.find(s=>(s.skill_genre == attack_skill.skill_genre))
    if(skill_genre.is_air == true)
    {
      return attack_skill.landing_lag + attack.until_landing - block_stun
    }
    else
    {
      return attack_skill.time - attack_skill.begin - block_stun	  
    }
  }
  
  function getAddOccurrence(player, skill)
  {
	const skill_genre = skill_genres.find(s=>(s.skill_genre == skill.skill_genre))
	var add_frame = 0

	if(player.is_ground == true && isUndefined(skill_genre.jump_frame) == false)
	{
	  if(isUndefined(skill_genre.is_b)  == true)
	  {
	     add_frame += skill_genre.jump_frame
	  }
	  else if(player.is_jump_b)
	  {
	     add_frame += skill_genre.jump_frame
	  }
	}
    add_frame += (player.action == action_shield && isUndefined(skill_genre.shield_add_frame) == false)   ? skill_genre.shield_add_frame : 0
	add_frame += (player.action == action_shield && isUndefined(skill_genre.guard_cancel) == false)       ? skill_genre.guard_cancel     : 0
	add_frame += (isUndefined(skill_genre.throw_minus_frame) == false) ? skill_genre.throw_minus_frame: 0

    return add_frame
  }
  function getSkillGenreName(skill_genre){return skill_genres.find(s=>(s.skill_genre == skill_genre)).name}


  function getSkillFullName(skill)
  {
     const skill_genre_name = getSkillGenreName(skill.skill_genre)
     var add_name = ""
	 add_name += (skill.is_reverse == true) ? "反転" : "" 	 
	 add_name += (skill.is_meaty == true) ? "持続" : "" 
	 add_name += (isUndefined(skill.name) == false) ? "[" + skill.name + "]": ""
	 return (add_name == "") ? skill_genre_name : skill_genre_name + "(" + add_name + ")"
  }



}