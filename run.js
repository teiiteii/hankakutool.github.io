//当たるフレーム速さで隙が変わるか
//2段技。連続技

function exchange_fighter()
{
  valExchange($("#attack"), $("#defend"))
  run()
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
    fighter:fighters.find(s=>(s.name == $("#attack").val()))
   ,skills:null
   ,op:1.05
   ,until_landing:0
  }
  
  defend = 
  {
    fighter:fighters.find(s=>(s.name == $("#defend").val()))
   ,skills:null
   ,action:action_shield
   ,is_ground:true
   ,is_jump_b:false
  }

  if(isUndefined(attack.fighter) || isUndefined(defend.fighter))
  {
    //alert("おっ 新ファイターかい？ ファイターは正しく入力してね")
	return
  }

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
      defend_skills = skills.filter(s=>(s.fighter_id == defend.fighter.fighter_id))
    }
    else
    {
      attack_skills = skills.filter(s=>(s.fighter_id == attack.fighter.fighter_id))
      defend_skills = [skills[selected_skill_id]]
    }
	//テスト用
	if(true){
		      attack_skills = skills.filter(s=>(s.fighter_id == attack.fighter.fighter_id))
           defend_skills = skills.filter(s=>(s.fighter_id == defend.fighter.fighter_id))
	}
    attack.skills = attack_skills.map((skill)=>
    {
      const block_stun = getBlockStun(skill)
           ,block_stun_difference = getBlockStunDifference(skill, block_stun)
	       ,skill_type_name = getSkillTypeName(skill.skill_type)
	       ,skill_full_name = getSkillFullName(skill)
      return {
	    ...skill, 
	    block_stun,
		block_stun_difference,
		skill_type_name,
		skill_full_name
      }
    })
    defend.skills = defend_skills.map((skill)=>
    {
      return {
	    ...skill
	   ,add_occurrence:getAddOccurrence(defend, skill)
       ,skill_type_name:getSkillTypeName(skill.skill_type)
	   ,skill_full_name:getSkillFullName(skill)
	  }
    })
  }
 
  function getBlockStun(attack_skill)
  {
	const skill_type = skill_types.find(s=>(s.skill_type == attack_skill.skill_type))
    if(isUndefined(attack_skill.base_damage))
    {
      return "基礎ダメージ未登録"
    }
    if(attack_skill.base_damage == 0) 
    {
      return 0
    }
	let correction = 1.0

	if(skill_type.is_air == true)
	{
	  correction = 0.33
	}
	else if(skill_type.is_smach == true)
	{
	  correction = 0.725
	}
	else if(skill_type.is_item_throw == true)
	{
	  correction = 0.29
	}

   const block_stun = Math.floor((attack_skill.base_damage * attack.op * 0.8 * correction) + 2)
   return defend.action == action_just_shield ? block_stun + 3 : block_stun
  
  }
  
  function getBlockStunDifference(attack_skill,block_stun)
  {
	const skill_type = skill_types.find(s=>(s.skill_type == attack_skill.skill_type))
    if(skill_type.is_air == true)
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
	const skill_type = skill_types.find(s=>(s.skill_type == skill.skill_type))
	var add_frame = 0

	if(player.is_ground == true && isUndefined(skill_type.jump_frame) == false)
	{
	  if(isUndefined(skill_type.is_b)  == true)
	  {
	     add_frame += skill_type.jump_frame
	  }
	  else if(player.is_jump_b)
	  {
	     add_frame += skill_type.jump_frame
	  }
	}
    add_frame += (player.action == action_shield && isUndefined(skill_type.shield_add_frame) == false)   ? skill_type.shield_add_frame : 0
	add_frame += (player.action == action_shield && isUndefined(skill_type.guard_cancel) == false)       ? skill_type.guard_cancel     : 0
	add_frame += (isUndefined(skill_type.throw_minus_frame) == false) ? skill_type.throw_minus_frame: 0

    return add_frame
  }
  function getSkillTypeName(skill_type){return skill_types.find(s=>(s.skill_type == skill_type)).name}


  function getSkillFullName(skill)
  {
     const skill_type_name = getSkillTypeName(skill.skill_type)
     var add_name = ""
	 add_name += (skill.is_reverse == true) ? "反転" : "" 	 
	 add_name += (skill.is_meaty == true) ? "持続" : "" 
	 add_name += (isUndefined(skill.name) == false) ? "[" + skill.name + "]": ""
	 return (add_name == "") ? skill_type_name : skill_type_name + "(" + add_name + ")"
  }



}