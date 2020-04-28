//当たるフレーム速さで隙が変わるか
//2段技。連続技
 const skillSort = (a, b)=>{ 
    if (a.sort_no < b.sort_no){ return -1}
    if (a.sort_no > b.sort_no){return 1}
         return 0
        }
function updateSkillGenreSelect(player, fighter) {
    const pulldown = $(`#${player}_skill_genre_select`)
    $(pulldown).children("option").remove()
    const sorted_skill_genres = [...skill_genres].sort((a,b)=>(skillSort(a,b)))
	if(player == "attack")
	{
	$(pulldown).append(`<option value="none"></option>`)		
	}
	else
	{
	$(pulldown).append(`<option value="all">全て</option>`)
	}
    sorted_skill_genres.forEach(s=>$(pulldown).append(`<option value="${s.skill_genre}">${s.full_name}</option>`))
if(player == "attack")
	{
	$(pulldown).append(`<option value="all">全て</option>`)		
	}
}
function getSkillBigGenre(skill)
{
  return Number(skill.skill_genre.toString().substr(0,3))
}
function getFilterSkills(fighter_id, skill_genre, skill_big_genre, is_damage_no_include, is_shift_include, is_persistence_num_include){
	let edit_skills = skills
	if(isUndefined(fighter_id) == false)
	{
		edit_skills = edit_skills.filter(s=>(s.fighter_id == fighter_id))
	}
	if(skill_genre != "all" && isUndefined(skill_genre) == false)
	{
		edit_skills = edit_skills.filter(s=>(s.skill_genre == skill_genre))
	}
	if(skill_genre == "none")
	{
		edit_skills = []
	}
	
	if(isUndefined(skill_big_genre) == false)
	{
		edit_skills = edit_skills.filter(s=>(getSkillBigGenre(s) == skill_big_genre))
	}
	if(is_damage_no_include == false)
	{
	    edit_skills = edit_skills.filter(s=>((isUndefined(s.damage_no) == true || s.damage_no == 1)))
	}
	
	if(is_shift_include == false)
	{
	    edit_skills = edit_skills.filter(s=>(isUndefined(s.shift)))
	}

	if(is_shift_include == false)
	{
	    edit_skills = edit_skills.filter(s=>(isUndefined(s.persistence_num)))
	}		

	return edit_skills
}
function fighterSearchInput() {
    const fighter_name_input = $("#fighter_search").val()
      , fighter_name = fighter_name_input.replace(/\s+/g, "");
    const getSearchedFighter = (fighter_name)=>{
        const searchedFighter = fighters.map((f)=>{
            let index_of = f.name.indexOf(fighter_name)
            let hiragana_index_of = f.hiragana.indexOf(fighter_name)
            index_of = (index_of == -1) ? hiragana_index_of : index_of
            hiragana_index_of = (hiragana_index_of) == -1 ? index_of : hiragana_index_of
            let ans_index_of = index_of < hiragana_index_of ? index_of : hiragana_index_of
            if (index_of == -1 && hiragana_index_of == -1) {
                ans_index_of = undefined
            }
            return {
                name: f.name,
                hiragana: f.hiragana,
                index_of: ans_index_of
            }
        }
        ).filter(f=>(isUndefined(f.index_of) == false))

        searchedFighter.sort((a,b)=>{
            if (a.hiragana < b.hiragana)
                return -1
            if (a.hiragana > b.hiragana)
                return 1
            return 0
        }
        )

        searchedFighter.sort((a,b)=>{
            if (a.index_of < b.index_of)
                return -1
            if (a.index_of > b.index_of)
                return 1
            return 0
        }
        )
        return searchedFighter
    }
    const histry_max = 150
    const histry_fighter_key = "search_fighter"

    const getHistoryFighter = ()=>{
        const histry_fighters = []
        for (let i = 0; i < histry_max; i++) {
            const histry_fighter_name = (localStorage.getItem(histry_fighter_key + i))
            if (histry_fighter_name != null && histry_fighter_name != "") {
                histry_fighters.push({
                    name: histry_fighter_name
                })
            }
        }
        return histry_fighters
    }

    const searchedFighter = fighter_name == "" ? getHistoryFighter() : getSearchedFighter(fighter_name)
    $(".fighter_search_text").remove()
    $(".fighter_search_history").remove()

    const history_text = $("<p>", {
        class: "fighter_search_history"
    })
    const selected_histry_count = Object.keys(searchedFighter).length
    if (selected_histry_count >= 1) {
        $(history_text).text("履歴"/* + selected_histry_count +"件"*/
        )
    }
    if (fighter_name == "") {
        $(history_text).appendTo("#fighter_search_texts")
    }
    searchedFighter.forEach((s)=>{
        const fighter_search_text = $("<p>", {
            class: "fighter_search_text",
            /*ontouchstart:""*/
        })
        $(fighter_search_text).text(s.name)
        $(fighter_search_text).on("click", function(i) {
			const player = $(fighter_select_modal).attr("data-player")
            const fighter_text = "#" + player + "_fighter_text"
            const selected_fighter_name = $(this).text()
            $(fighter_text).val(selected_fighter_name)
            $('.js-modal-close').click()
            const setHistoryFighter = (selected_fighter_name)=>{
                let histry_fighters = []
                for (let i = 0; i < histry_max; i++) {
                    const histry_fighter_name = (localStorage.getItem(histry_fighter_key + i))
                    histry_fighters.push((histry_fighter_name == null || histry_fighter_name == "") ? "" : histry_fighter_name)
                }
                const exist_count = histry_fighters.filter(h=>(h != selected_fighter_name)).length
                histry_fighters = histry_fighters.filter(h=>(h != selected_fighter_name))
                histry_fighters.unshift(selected_fighter_name)
                if (exist_count == 0) {
                    histry_fighters.pop()
                }
                for (i = 0; i < histry_fighters.length; i++) {
                    localStorage.setItem(histry_fighter_key + i, histry_fighters[i])
                }

                return histry_fighters
            }
            setHistoryFighter(selected_fighter_name)
			//updateSkillGenreSelect(player, selected_fighter_name)
            run()
        });

        $(fighter_search_text).appendTo("#fighter_search_texts")

    }
    )

}
function exchange_fighter() {
    valExchange($("#attack_fighter_text"), $("#defend_fighter_text"))
    run()
}
function attack_skill_genre_selected() {
    run()
}

function selected_fighter(fighter_id, attack_flg) {
    if (attack_flg) {
    } else {
    }
}

function run() {
    const urlParameter = inputToUrlParameter()
      , action_shield = 1
      , action_just_shield = 2

    const prevUrlParameter = decodeURIComponent(location.search)
    // if(urlParameter == prevUrlParameter)
    {//  return
    }
    attack = {
        ...fighters.find(s=>(s.name == $("#attack_fighter_text").val()))
        ,skills: null
        ,op: 1.05
        ,until_landing: 0
    }

    const minus_grace_max_num = $("#minus_grace_max_num").val()
    defend = {
        ...fighters.find(s=>(s.name == $("#defend_fighter_text").val()))
        ,skills: null
        ,action: action_shield
        ,is_ground: true
        ,is_jump_b: false
		,minus_grace_max_num
    }

    if (isUndefined(attack.fighter_id) || isUndefined(defend.fighter_id)) {
        //ファイター未入力
    }else
	{
    console.log("測定開始")
    init()
    create_view(attack, defend)
	}
    console.log(defend)
    //console.log(attack)
    //location.search = urlParameter
    history.pushState(null, null, urlParameter);
	$("#share_url_text").val(location.href)
	$("#twitter_button").children().remove()
	const hashtags = "スマブラ反撃確認エアッー"
	     ,url = location.href
		 ,langage = "ja"
		 ,tw_attack = $("#attack_fighter_text").val()
		 ,tw_defend = $("#defend_fighter_text").val()
		 ,tw_attack_skill = $("[id='attack_skill_genre_select'] option:selected").text()
		 ,text = (tw_attack == "" || tw_defend == "" || tw_attack_skill == "") ? "スマブラspの反撃確定をチェックするツール↓🦉":`${tw_attack}の${tw_attack_skill}に${tw_defend}が反撃確定できる技↓🦉🦉` 	 

	const twitter = `<a data-text="${text}" data-hashtags="${hashtags}" data-url="${url}" data-lang="{langage}" href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
	$("#twitter_button").html(twitter)
	
    function init() {
        const is_criterion_attacker_spell = true
          , selected_skill_id = 0
        //test
        let attack_skills;
        let defend_skills;
        if (is_criterion_attacker_spell) {
            attack_skills = [skills[selected_skill_id]]
            defend_skills = skills.filter(s=>(s.fighter_id == defend.fighter_id))
        } else {
            attack_skills = skills.filter(s=>(s.fighter_id == attack.fighter_id))
            defend_skills = [skills[selected_skill_id]]
        }
        //テスト用
        if (true) {
            attack_skills = skills.filter(s=>(s.fighter_id == attack.fighter_id))
            defend_skills = skills.filter(s=>(s.fighter_id == defend.fighter_id))
        }
		
		{
		  const select_skill_genre = $(attack_skill_genre_select).val()
		  
		  attack_skills = getFilterSkills(attack.fighter_id, select_skill_genre, undefined,true, true,true)
		}
		{
		  const select_skill_genre = $(defend_skill_genre_select).val()
		  defend_skills = getFilterSkills(defend.fighter_id, select_skill_genre, undefined,false,false,false)
		}
		
        attack.skills = attack_skills.map((skill)=>{
            const block_stun = getBlockStun(skill)
              , block_stun_difference = getBlockStunDifference(skill, block_stun)
              , skill_genre_name = getSkillGenreName(skill.skill_genre)
              , skill_name = getSkillName(skill)
              , skill_detail_name = getSkillDetailName(skill)

            return {
                ...skill,
                block_stun,
                block_stun_difference,
                skill_genre_name,
                skill_name,
                skill_detail_name
            }
        }
        )
        defend.skills = defend_skills.map((skill)=>{
            return {
                ...skill,
                add_occurrence: getAddOccurrence(defend, skill),
                skill_genre_name: getSkillGenreName(skill.skill_genre),
                skill_name: getSkillName(skill),
                skill_detail_name: getSkillDetailName(skill)
            }
        }
        )
    }

    function getBlockStun(attack_skill) {
        const skill_genre = skill_genres.find(s=>(s.skill_genre == attack_skill.skill_genre))
        if (isUndefined(attack_skill.base_damage)) {
            return "基礎ダメージ未登録"
        }
        if (attack_skill.base_damage == 0) {
            return 0
        }
        let correction = 1.0

        if (skill_genre.is_air == true) {
            correction = 0.33
        } else if (skill_genre.is_smach == true) {
            correction = 0.725
        } else if (skill_genre.is_item_throw == true) {
            correction = 0.29
        }
        //(attack_skill.base_damage * attack.op * 0.8 * correction) + 2)
        const calc1 = BigNumber(attack_skill.base_damage).times(attack.op)
          , calc2 = calc1.times(0.8).times(correction)
          , calc_result = calc2.plus(2).toNumber()

        const block_stun = Math.floor(calc_result)
        return defend.action == action_just_shield ? block_stun + 3 : block_stun

    }

    function getBlockStunDifference(attack_skill, block_stun) {
        const skill_genre = skill_genres.find(s=>(s.skill_genre == attack_skill.skill_genre))
        if (skill_genre.is_air == true) {
            return attack_skill.landing_lag + attack.until_landing - block_stun
        } else {
            return attack_skill.time - attack_skill.begin - block_stun
        }
    }

    function getAddOccurrence(player, skill) {
        const skill_genre = skill_genres.find(s=>(s.skill_genre == skill.skill_genre))
        var add_frame = 0

        if (player.is_ground == true && isUndefined(skill_genre.jump_frame) == false) {
            if (isUndefined(skill_genre.is_b) == true) {
                add_frame += skill_genre.jump_frame
            } else if (player.is_jump_b) {
                add_frame += skill_genre.jump_frame
            }
        }
        add_frame += (player.action == action_shield && isUndefined(skill_genre.shield_add_frame) == false) ? skill_genre.shield_add_frame : 0
        add_frame += (player.action == action_shield && isUndefined(skill_genre.guard_cancel) == false) ? skill_genre.guard_cancel : 0
        add_frame += (isUndefined(skill_genre.throw_minus_frame) == false) ? skill_genre.throw_minus_frame : 0

        return add_frame
    }
    function getSkillGenreName(skill_genre) {
        return skill_genres.find(s=>(s.skill_genre == skill_genre)).name
    }

    function getSkillName(skill) {
        let name = (isUndefined(skill.alias) == false) ? skill.alias : getSkillGenreName(skill.skill_genre)
        return name
    }
    function getSkillDetailName(skill) {
        let add_name = ""
        add_name += (isUndefined(skill.persistence_num) == false) ? "持続" : ""
        add_name += (isUndefined(skill.serial_num_str) == false) ? "連続" : ""
        add_name += (isUndefined(skill.shift) == false) ? {"up":"上シフト","under":"下シフト","all":"全シフト"}[skill.shift] : ""
        add_name += (isUndefined(skill.damage_no) == false) ? {"1":"最大","2":"大","3":"中","3":"小","3":"最低"}[skill.damage_no] : ""		
        return add_name
    }

}
