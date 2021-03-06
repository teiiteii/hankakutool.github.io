//当たるフレーム速さで隙が変わるか
//2段技。連続技

const attack_skill_no_select_text = ""
const skillSort = (a, b) => {
  if (a.sort_no < b.sort_no) {
    return -1
  }
  if (a.sort_no > b.sort_no) {
    return 1
  }
  return 0
}

function updateSkillGenreSelect(player, fighter) {
  const pulldown = $(`#${player}_skill_genre_select`)
  $(pulldown).children("option").remove()
  const sorted_skill_genres = [...skill_genres].sort((a, b) => (skillSort(a, b)))
  if (player == "attack") {
    $(pulldown).append(`<option value="none">${attack_skill_no_select_text}</option>`)
  } else {
    $(pulldown).append(`<option value="all">全て</option>`)
  }
  sorted_skill_genres.forEach(s => $(pulldown).append(`<option value="${s.skill_genre}">${s.full_name}</option>`))
  if (player == "attack") {
    $(pulldown).append(`<option value="all">全て</option>`)
  }
}

function getSkillBigGenre(skill) {
  return Number(skill.skill_genre.toString().substr(0, 3))
}

function getFilterSkills(fighter_id, skill_genre, skill_big_genre, is_damage_no_include, is_shift_include, is_persistence_num_include, is_landing_attack, is_serial_num_str_include, is_empty_attack_again, is_detail_name, is_attack,is_include_long_skill) {
  let edit_skills = skills
  if (isUndefined(fighter_id) == false) {
    edit_skills = edit_skills.filter(s => (s.fighter_id == fighter_id))
  }
  if (skill_genre != "all" && isUndefined(skill_genre) == false) {
    edit_skills = edit_skills.filter(s => (s.skill_genre == skill_genre))
  }
  if (skill_genre == "none") {
    edit_skills = []
  }

  //技大分類で絞る。未実装
  //if(isUndefined(skill_big_genre) == false)
  //{
  //	edit_skills = edit_skills.filter(s=>(getSkillBigGenre(s) == skill_big_genre))
  //}

  if (is_persistence_num_include == false || is_include_long_skill == false) {
    edit_skills = edit_skills.filter(s => ((isUndefined(s.persistence_num)) || (s.persistence_num == 0)))
  }

  if (is_serial_num_str_include == false  || is_include_long_skill == false) {
    edit_skills = edit_skills.filter((s) => ((isUndefined(s.serial_num_str) || s.serial_num_str.substring(0, 1) == "1")))
  }

  // 持続除いた後にダメージ別処理はしたい。後ろ向きの場合、ドンキーの上強など早い技があるが開発スピード優先。無視
  // 持続技と違って同フレームに発生する
  if (is_damage_no_include == false) {
    edit_skills = edit_skills.filter(s => ((isUndefined(s.damage_no) == true || s.damage_no == 1)))
  }

  if (is_shift_include == false) {
    edit_skills = edit_skills.filter(s => (isUndefined(s.shift)))

  }

  if (is_landing_attack == false) {
    edit_skills = edit_skills.filter(s => (isUndefined(s.is_landing_attack)))
  }

  if (is_empty_attack_again == false) {
    edit_skills = edit_skills.filter(s => ((isUndefined(s.cancel) || s.cancel != "empty_attack_again")))
  }

  if (is_detail_name == false) {
    edit_skills = edit_skills.filter(s => (s.detail_name != "アルセーヌ"))
  }
  if(is_attack == false){
    edit_skills = edit_skills.filter(s => (!(s.is_not_defend == true)))
  }


  return edit_skills
}

function fighterSearchInput() {
  const fighter_name_input = $("#fighter_search").val(),
    fighter_name = fighter_name_input.replace(/\s+/g, "");
  const getSearchedFighter = (fighter_name) => {
    const searchedFighter = fighters.map((f) => {
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
    }).filter(f => (isUndefined(f.index_of) == false))

    searchedFighter.sort((a, b) => {
      if (a.hiragana < b.hiragana)
        return -1
      if (a.hiragana > b.hiragana)
        return 1
      return 0
    })

    searchedFighter.sort((a, b) => {
      if (a.index_of < b.index_of)
        return -1
      if (a.index_of > b.index_of)
        return 1
      return 0
    })
    return searchedFighter
  }
  const histry_max = 150
  const histry_fighter_key = "search_fighter"

  const getHistoryFighter = () => {
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
    $(history_text).text("履歴" /* + selected_histry_count +"件"*/ )
  }
  if (fighter_name == "") {
    $(history_text).appendTo("#fighter_search_texts")
  }
  searchedFighter.forEach((s) => {
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
      const setHistoryFighter = (selected_fighter_name) => {
        let histry_fighters = []
        for (let i = 0; i < histry_max; i++) {
          const histry_fighter_name = (localStorage.getItem(histry_fighter_key + i))
          histry_fighters.push((histry_fighter_name == null || histry_fighter_name == "") ? "" : histry_fighter_name)
        }
        const exist_count = histry_fighters.filter(h => (h != selected_fighter_name)).length
        histry_fighters = histry_fighters.filter(h => (h != selected_fighter_name))
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

  })

}

function exchange_fighter() {
  valExchange($("#attack_fighter_text"), $("#defend_fighter_text"))
  run()
}

function attack_skill_genre_selected() {
  run()
}

function selected_fighter(fighter_id, attack_flg) {
  if (attack_flg) {} else {}
}

function run(frame_view_mode = "") {
  const urlParameter = inputToUrlParameter(),
    action_shield = 1,
    action_just_shield = 2,
    action_spot_dodge = 3,
    action_spot_dodge_not_cancel = -3,
    action_attack = 4

  const prevUrlParameter = decodeURIComponent(location.search)
  // if(urlParameter == prevUrlParameter)
  { //  return
  }

  let attack_fighter_text = $("#attack_fighter_text").val(),
  defend_fighter_text = $("#defend_fighter_text").val(),
  defend_action = $("#defend_action").val()

  if (frame_view_mode == "defend") {
    [attack_fighter_text] = [defend_fighter_text]
  } else if (frame_view_mode == "attack") {
    defend_fighter_text = attack_fighter_text
  }
  let tmp_defend_action
  let tmp_action_conf
  let tmp_include_long_skill = true
  if(defend_action == action_just_shield.toString()){
    tmp_defend_action = action_just_shield
  }else if(defend_action == action_spot_dodge.toString()){
    tmp_defend_action = action_spot_dodge
    tmp_action_conf = true  // その場回避キャンセル
  }else if(defend_action == action_spot_dodge_not_cancel.toString()){
    tmp_defend_action = action_spot_dodge
    tmp_action_conf = false  // その場回避キャンセル
  }else if(defend_action == action_attack.toString()){
    tmp_defend_action = action_attack
    tmp_include_long_skill = false
  }else{
    tmp_defend_action = action_shield
  }

  const op_val_int = Number($("#op").text())
  const op_val = BigNumber(op_val_int).times(0.01).toNumber()
  attack = {
    ...fighters.find(s => (s.name == attack_fighter_text)),
    skills: null,
    op: op_val,
    until_landing: 0,
    is_ground:true,
    is_include_long_skill:tmp_include_long_skill,
  }

  const minus_grace_max_num = $("#minus_grace_max_num").val()
  defend = {
    ...fighters.find(s => (s.name == defend_fighter_text)),
    skills: null,
    action: tmp_defend_action,
    action_conf: tmp_action_conf,
    is_ground: true,
    is_jump_b: false,
    minus_grace_max_num
  }

  if (frame_view_mode != "" && attack_fighter_text == "") {
    alert("技表を見るにはファイターの入力が必要です")
  }
  //ファイター未入力
  else if (isUndefined(attack.fighter_id) || isUndefined(defend.fighter_id)) {
    $("#attacks_result").children().remove()
    $(".memo_row").addClass("d-none")

  } else {
    console.log("測定開始")
    init()
    create_view(attack, defend, frame_view_mode != "", frame_view_mode == "attack", frame_view_mode)

  }
  console.log(defend)
  //console.log(attack)
  //location.search = urlParameter
  history.pushState(null, null, urlParameter);
  $("#share_url_text").val(location.href)
  $("#twitter_button").children().remove()
  const hashtags = "スマブラsp反確チェッカー",
    url = location.href,
    langage = "ja",
    tw_attack = $("#attack_fighter_text").val(),
    tw_defend = $("#defend_fighter_text").val(),
    tw_attack_skill = $("[id='attack_skill_genre_select'] option:selected").text(),
    text = (tw_attack == "" || tw_defend == "" || tw_attack_skill == "" || tw_attack_skill == attack_skill_no_select_text) ? "スマブラspの反撃確定をチェックするツール↓🦉" : `${tw_attack}の${tw_attack_skill}に${tw_defend}が反撃できる技↓🦉🦉`

  const twitter = `<a data-text="${text}" data-hashtags="${hashtags}" data-url="${url}" data-lang="{langage}" href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  $("#twitter_button").html(twitter)

  function init() {
    const is_criterion_attacker_spell = true,
      selected_skill_id = 0
    //test
    let attack_skills;
    let defend_skills;
    if (is_criterion_attacker_spell) {
      attack_skills = [skills[selected_skill_id]]
      defend_skills = skills.filter(s => (s.fighter_id == defend.fighter_id))
    } else {
      attack_skills = skills.filter(s => (s.fighter_id == attack.fighter_id))
      defend_skills = [skills[selected_skill_id]]
    } {
      const select_skill_genre = (frame_view_mode != "") ? "all" : $(attack_skill_genre_select).val();

      attack_skills = frame_view_mode != "" ? getFilterSkills(attack.fighter_id, select_skill_genre, undefined, true, true, true, true, true, true, true,true) //フレーム表用
        :
        getFilterSkills(attack.fighter_id, select_skill_genre, undefined, true, true, true, true, true, false, true,true, attack.is_include_long_skill); //攻撃側用
      attack_skills = (attack_skills.concat(newShortJumpAirAttackSkills(attack_skills))).concat(newCancelTimeAttackSkills(attack_skills));
      if(defend.action == action_attack){
        attack_skills = attack_skills.concat(newGroundJumpAttackSkills(attack_skills))
      }

    } {
      const select_skill_genre = $(defend_skill_genre_select).val()
      defend_skills = getFilterSkills(defend.fighter_id, select_skill_genre, undefined, false, false, false, false, false, false, false,false,true)
    }

    attack.skills = attack_skills.map((skill) => {
      const block_stun = getBlockStun(skill),
        block_stun_difference = getBlockStunDifference(skill, block_stun),
        skill_genre_name = getSkillGenreName(skill.skill_genre),
        skill_name = getSkillName(skill, "attack"),
        skill_detail_name = getSkillDetailName(skill, "attack")

      return {
        ...skill,
        block_stun,
        block_stun_difference,
        skill_genre_name,
        skill_name,
        skill_detail_name
      }
    })
    defend.skills = defend_skills.map((skill) => {
    let spot_dodge_time = undefined
    if(defend.action == action_spot_dodge) {
      const skill_genre = skill_genres.find(s => (s.skill_genre == skill.skill_genre))
      const spot_dodge = skills.find(s => (s.fighter_id == defend.fighter_id && s.skill_genre == "11500"))
      spot_dodge_time = (skill_genre.is_spot_dodge_cancel == true && defend.action_conf == true) ? spot_dodge.cancel_time : spot_dodge.time
      defend.error_draw_spot_dodge_time = spot_dodge.time
      defend.error_draw_spot_dodge_cancel_time = spot_dodge.cancel_time
    }
      return {
        ...skill,
        add_occurrence: getAddOccurrence(defend, skill, spot_dodge_time),
        skill_genre_name: getSkillGenreName(skill.skill_genre),
        skill_name: getSkillName(skill, "defend"),
        skill_detail_name: getSkillDetailName(skill, "defend"),
        spot_dodge_time
      }
    })
  }

  function newShortJumpAirAttackSkills(skills) {
    const sky_skill_genre = 109
    const filter_skills = skills.filter(s => (getSkillBigGenre(s) == sky_skill_genre) && isUndefined(s.is_landing_attack))
    const sky_skills = filter_skills.map(f => ({
      ...f
    }))
    sky_skills.forEach(s => {
      s.base_damage = BigNumber(s.base_damage).times(0.85).toNumber()
      s.is_short_jump_air_attack = true
    })
    return sky_skills
  }
  function newGroundJumpAttackSkills(skills) {
    const sky_skill_genre = 109
    const filter_skills = skills.filter(s => (getSkillBigGenre(s) == sky_skill_genre && isUndefined(s.is_landing_attack)))
    const sky_skills = filter_skills.map(f => ({
      ...f
    }))
    sky_skills.forEach(s => {
      s.base_damage = BigNumber(s.base_damage).times(0.85).toNumber()
      s.is_short_jump_air_attack = true
      const occurrence = getAddOccurrence(attack, s, null)
      s.begin += occurrence
      s.end += occurrence
      s.time += occurrence
      s.is_b_ground = true
    })
    return sky_skills
  }
  function newCancelTimeAttackSkills(skills) {
    const filter_skills = skills.filter(s => (isUndefined(s.cancel_time) == false))
    const clone_skills = filter_skills.map(f => ({
      ...f
    }))
    clone_skills.forEach(s => {
      s.time = s.cancel_time
      s.is_cancel_time = true
    })
    return clone_skills
  }
  function getHitStop(attack_skill) {
    if (isUndefined(attack_skill.base_damage)) {
      return "基礎ダメージ未登録"
    }
    if (attack_skill.base_damage == 0) {
      return 0
    }
    const correction = (isUndefined(attack_skill.hit_stop_correction) == false)? attack_skill.hit_stop_correction : 1
      op = getOP(attack_skill)
    const electrical_correction = (attack_skill.is_electrical == true)? 1.5:1

    const calc1 = BigNumber(attack_skill.base_damage).times(op),
      calc2 = calc1.times(0.65).plus(6).times(correction).times(electrical_correction)
      calc_result = calc2.minus(1),
      guard_stop_correction = (defend.action == action_shield && attack_skill.is_item_throw == true && isUndefined(attack_skill.is_not_guard_stop)) ? 0.67:1
      hit_stop = Math.floor(calc_result.times(guard_stop_correction).toNumber())
    return hit_stop
  }

  function getOP(attack_skill) {
    let op = attack.op
    if (isUndefined(attack_skill.op) == false) {
      op = attack_skill.op
    }
    if (attack_skill.is_op_invalid == true) {
      op = 1.05
    }
    return op
  }

  function getBlockStun(attack_skill) {
    const skill_genre = skill_genres.find(s => (s.skill_genre == attack_skill.skill_genre)),
      op = getOP(attack_skill)

    if (isUndefined(attack_skill.base_damage)) {
      return "基礎ダメージ未登録"
    }
    if (defend.action == action_attack || attack_skill.base_damage == 0) {
      return 0
    }

    let correction = 1.0

    if (isUndefined(attack_skill.correction) == false) {
      correction = attack_skill.correction
    } else if (attack_skill.is_item_throw == true) {
      correction = 0.29
    } else if (skill_genre.is_air == true) {
      correction = 0.33
    } else if (skill_genre.is_smach == true) {
      correction = 0.725
    }
if(attack_skill.is_smash_correction == true) {
    correction = 0.725
   }
    const calc1 = BigNumber(attack_skill.base_damage).times(op),
      calc2 = calc1.times(0.8).times(correction),
      calc_result = calc2.plus(2).toNumber()

    let block_stun = Math.floor(calc_result)
    let result = block_stun
    if (attack_skill.is_item_throw == true && defend.action == action_shield) {
      const hit_stop = getHitStop(attack_skill)
      result += hit_stop
    }
    return defend.action == action_just_shield ? result + 3 : result

  }

  function getBlockStunDifference(attack_skill, block_stun) {
    const skill_genre = skill_genres.find(s => (s.skill_genre == attack_skill.skill_genre))
    if(defend.action == action_spot_dodge) {
      return attack_skill.time
    }
    else if (defend.action == action_attack || attack_skill.base_damage == 0) {
      return attack_skill.begin
    }
    else if(skill_genre.is_air == true) {
      return attack_skill.landing_lag + attack.until_landing - block_stun
    } else {
      return attack_skill.time - attack_skill.begin - block_stun
    }

  }

  function getAddOccurrence(player, skill, spot_dodge_time) {
    const skill_genre = skill_genres.find(s => (s.skill_genre == skill.skill_genre))
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

    if(player.action == action_spot_dodge) {
      add_frame += spot_dodge_time
  }
    return add_frame
  }

  function getSkillGenreName(skill_genre) {
    return skill_genres.find(s => (s.skill_genre == skill_genre)).name
  }

  function getSkillName(skill, player) {
    let name = ""

    name += (isUndefined(skill.alias) == false) ? skill.alias : getSkillGenreName(skill.skill_genre)
    name += (player == "attack" && isUndefined(skill.serial_num_str) == false) ? "Hit" + skill.serial_num_str : ""

    return name
  }

  function getSkillDetailName(skill, player) {
    let add_name = ""
    if (skill.is_b_ground == true && skill.is_b_air == true) {} else if (skill.is_b_ground == true) {
      add_name += (skill.is_b_ground == true) ? "地上" : ""
    } else if (skill.is_b_air == true) {
      add_name += (skill.is_b_air == true) ? "空中" : ""
    }

    add_name += (skill.is_short_jump_air_attack == true) ? `SJ` : ""
    add_name += (player == "attack" && isUndefined(skill.detail_name) == false) ? skill.detail_name : ""
    add_name += (isUndefined(skill.persistence_num) == false) ? (["始", "持続", "持続2", "持続3", "持続4", "持続5", "持続6", "持続7", "持続8", "〆"])[skill.persistence_num] : ""
    add_name += (skill.is_cancel_time == true) ? `キャンセル` : ""
    add_name += (isUndefined(skill.shift) == false) ? {
      "up": "上シフト",
      "under": "下シフト",
      "all": "全シフト"
    } [skill.shift] : ""
    add_name += (isUndefined(skill.defend_position) == false) ? {
      "ground": "対地",
      "air": "対空",
      "ground_only": "[対地のみ]",
      "air_only": "[対空のみ]"
    } [skill.defend_position] : ""
    add_name += (skill.is_landing_attack == true) ? `着地` : ""
    add_name += (skill.cancel == "empty_attack_again") ? "空振り再攻撃" : ""
    add_name += (player == "attack" && isUndefined(skill.damage_no) == false) ? `ダメ${skill.damage_no}` : ""
    add_name += (player == "attack" && skill.is_op_invalid == true) ? `OP無効` : ""

    return add_name
  }

}
