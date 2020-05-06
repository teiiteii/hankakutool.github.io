function create_view(attack, defend, is_frame_view_mode, is_attack_color, frame_view_mode_player) {
  $(".memo_row").addClass("d-none")
  $("#attacks_result").children().remove()

  attack.skills.forEach((attack_skill, index, array) => {
    const result_row = $("#result_row_original").clone()
    $(result_row).attr("id", "result_row_clone_" + index)
    $(result_row).removeClass("d-none")
    defend.skills.forEach((defend_skill, index) => {
      view_frame(attack, defend, attack_skill, defend_skill, result_row, index, is_frame_view_mode)
    })

    const tbody = $(result_row).find(".defend_table").children()
    const trs = $(tbody).find(".defend_tr")
    $(result_row).find(".defend_tr").remove()

    trs.sort((tr1, tr2) => {
      const sort1 = Number($(tr1).find(".sort").val())
      const sort2 = Number($(tr2).find(".sort").val())
      return (sort1 > sort2) ? 1 : -1
    })
    let minus_grace_num = 0
    const defend_tr_num = $(trs).length
    const is_attack_skill_air = skill_genres.filter((s => (s.skill_genre == attack_skill.skill_genre)))[0].is_air
    $(trs).each((i, tr) => {

      if ($(tr).find(".grace_ng").length >= 1) {
        minus_grace_num++
        if (isUndefined(is_attack_skill_air) == true) {
          $(tr).hide();
        } else if (is_attack_skill_air == true && minus_grace_num > defend.minus_grace_max_num) {
          $(tr).hide();
        }

      }


    })
    if (index == array.length - 1) {
      $(result_row).find(".normal_mode").removeClass("d-none")
    }
    $(tbody).append($(trs))
    $("#attacks_result").append($(result_row))

    const is_defend_tr_draw = ($(trs).find(".grace_ok").length >= 1 || is_attack_skill_air == true)
    if (is_defend_tr_draw == false && is_frame_view_mode == false) {
      const attack_block_stun_difference = $(result_row).find(".val_attack_block_stun_difference")
      const block_stun_difference = attack_block_stun_difference.text()
      $(result_row).find(".error_message").html(`硬直差${block_stun_difference}に反撃できません。or 未登録技`)
      $(result_row).find(".error_message").removeClass("d-none");
    }
    if (is_defend_tr_draw == true && attack_skill.not_attack_view == "serial") {
      $(result_row).find(".defend_table").hide();
      $(result_row).find(".error_message").html(`攻撃側が特殊な技のため結果なしです。`)
      $(result_row).find(".error_message").removeClass("d-none");
    }
    drawMemo(attack_skill, is_frame_view_mode)
  })
  $(".row_frame_view_mode").removeClass("attack")
  $(".row_frame_view_mode").removeClass("defend")

  //最終処理
  if (is_frame_view_mode == true) {
    frameViewMode()
    $(".row_frame_view_mode").addClass(frame_view_mode_player)
  } else {
    putTogether()
  }

  function putTogether() {
    const trs = $("[id *= 'result_row_clone']").find(".attack_tr")
    const block_stun_differences = []
    const tr_objs = []
    trs.each((i, tr) => {
      const block_stun_difference = $(tr).find(".val_attack_block_stun_difference").text()
      block_stun_differences.push(block_stun_difference)
      tr_objs.push(tr)
    })
    $(trs).each((index, tr) => {
      const block_stun_difference = $(tr).find(".val_attack_block_stun_difference").text()
      const startIndex = block_stun_differences.indexOf(block_stun_difference)
      if(index == startIndex){
        return true
      }
      $(tr).parent().parent().parent().parent().parent().parent().addClass("d-none")
      $(tr_objs[startIndex]).parent().append($(tr))

    })

  }


  function frameViewMode() {

    const result_row0 = $("#result_row_clone_0"),
      attack_trs = $("[id *= 'result_row_clone']").find(".attack_table").find("tr"),
      result_row0_tr_th = $("#result_row0").find(".attack_tr_th")
    $("[id *= 'result_row']").addClass("d-none")
    $(result_row0).removeClass("d-none")
    $(result_row0).find(".defend_table").addClass("d-none")
    $(result_row0).find(".row error_message").addClass("d-none")
    $(result_row0).find(".attack_tr_th").removeClass("d-none")
    $(result_row0).find(".attack_tr_th").removeClass("attack_tr_th")
    $(result_row0).find("tbody").append($(attack_trs))
    $(result_row0).find(".attack_tr_th").addClass("d-none")
    $(result_row0).find(".row_frame_view_mode").removeClass("d-none")
    if (is_attack_color == false) {
      $(result_row0).find(".th_attack_fighter_name").addClass("defend_table_background_color")
    }
  }

  function view_frame(attack, defend, attack_skill, defend_skill, result_row, index, is_frame_view_mode) {
    const is_add_info_draw = is_frame_view_mode,
      block_stun_difference = attack_skill.block_stun_difference //硬直差 硬直差の基本[全体F - 発生F - ガード硬直]
      ,
      block_stun = attack_skill.block_stun //ガード硬直
      ,
      occurrence = defend_skill.begin + defend_skill.add_occurrence //発生
      ,
      frame_trap = block_stun_difference - occurrence //反撃確定の猶予
      ,
      attack_tr = $("<tr>", {class:"attack_tr"}),
      op = (attack_skill.is_op_invalid == true) ? 1.05 : (isUndefined(attack_skill.op) == false) ? attack_skill.op : attack.op
      ,damage = BigNumber(attack_skill.base_damage == 0 ? 0:attack_skill.base_damage).times(op).times(1.2).toNumber()

    let attack_tds = [{
        txt: `${attack_skill.skill_name}`,
        cls: `tr_th_left`,
        sm_txt: `${(attack_skill.skill_detail_name == "")? "": "(" + attack_skill.skill_detail_name + ")"}`,
        cls_td: `tr_th_left`
      }, {
        txt: `${(attack_skill.is_unknown_end == true) ? attack_skill.begin + "-" + "?":attack_skill.begin + "-" + attack_skill.end}F`,
        cls: ``,
        sm_txt: ``,
        cls_td: `tr_th_right`
      }, {
        txt: `${attack_skill.begin - 1}F`,
        cls: ``,
        sm_txt: ``,
        cls_td: `${(is_add_info_draw == true) ? "d-none":"tr_th_right"}`
      }, {
        txt: `${attack_skill.time - attack_skill.end}F`,
        cls: ``,
        sm_txt: ``,
        cls_td: `${(is_add_info_draw == true) ? "d-none":"tr_th_right"}`
      }, {
        txt: `${attack_skill.time}F`,
        cls: ``,
        sm_txt: ``,
        cls_td: `tr_th_right`
      }, {
        txt: `${BigNumber(attack_skill.base_damage) == 0? "-":damage}`,
        cls: ``,
        sm_txt: ``,
        cls_td: `${(is_add_info_draw == true) ? "tr_th_right":"d-none"}`
      },
      {
        txt: `${BigNumber(attack_skill.base_damage) == 0? "-":Math.round(damage)}%`,
        cls: ``,
        sm_txt: ``,
        cls_td: `${(is_add_info_draw == true) ? "d-none":""}`
      },
       {
        txt: `${block_stun_difference}F`,
        cls: `val_attack_block_stun_difference`,
        sm_txt: ``,
        cls_td: `${(is_add_info_draw == true) ? "tr_th_right":"d-none"}`
      }, {
        txt: `${block_stun}F`,
        cls: `val_attack_block_stun`,
        sm_txt: ``,
        cls_td: `${(is_add_info_draw == true) ? "tr_th_right":"d-none"}`
      }

    ]
    const defend_tr = $("<tr>", {
        class: "defend_tr"
      }),
      defend_occurrence_text = (defend_skill.add_occurrence > 0) ? ` (${defend_skill.begin}F+硬直)` : '',
      defend_tds = [{
        txt: `${defend_skill.skill_name}`,
        cls: `tr_th_left`,
        sm_txt: `${(defend_skill.skill_detail_name == "")? "": "(" + defend_skill.skill_detail_name + ")"}`,
        cls_td: `tr_th_left`
      }, {
        txt: `${frame_trap}F`,
        cls: (frame_trap >= 0) ? "grace_label grace_ok" : "grace_label grace_ng",
        sm_txt: ``,
        cls_td: `tr_th_right`
      }, {
        txt: `${block_stun_difference}F`,
        cls: ``,
        sm_txt: ``,
        cls_td: ``
      }, {
        txt: `${occurrence}F`,
        cls: ``,
        sm_txt: defend_occurrence_text,
        cls_td: `tr_th_left`
      }]
    const add_td = (tr, {
      txt,
      cls,
      sm_txt,
      cls_td
    }) => {
      const td = $("<td>"),
        span = $("<span>"),
        sm_span = $("<span>")
      $(span).text(txt)
      $(span).addClass(cls)
      $(sm_span).text(sm_txt)
      $(sm_span).addClass("small_text")
      $(span).append(sm_span)
      $(td).addClass(cls_td)
      $(td).append(span)
      $(tr).append($(td))
    }
    if (index == 0) {
      if (is_add_info_draw == true) {
        attack_tds = attack_tds.map((a, index) => ({
          ...a,
          cls_td: (index == 0) ? a.cls_td : a.cls_td + " tr_th_right"
        }))
      }
      $(result_row).find(".th_attack_fighter_name").text(`攻:${attack.adana}`)
      attack_tds.forEach(tds => (add_td(attack_tr, tds, "")))
      $(result_row).find(".attack_table").append($(attack_tr))
      if (is_add_info_draw == false) {
        $(result_row).find(".th_attack_block_stun_difference").addClass("d-none")
        $(result_row).find(".th_attack_block_stun").addClass("d-none")
        $(result_row).find(".th_par").addClass("d-none")

      } else {
        $(result_row).find(".th_prev_gap").addClass("d-none")
        $(result_row).find(".th_next_gap").addClass("d-none")
        $(result_row).find(".th_par_roughly").addClass("d-none")
      }

      $(result_row).find(".th_defend_fighter_name").text(`反:${defend.adana}`)
    }

    defend_tds.forEach(tds => (add_td(defend_tr, tds, "")))
    $(result_row).find(".defend_table").append($(defend_tr))
    const skill_sort = $("<input>", {
      type: "hidden",
      class: "sort",
      value: frame_trap * -1
    })
    $(defend_tr).append($(skill_sort))

  }

  function drawMemo(attack_skill, is_frame_view_mode) {
    const memos = memo.filter(m => (m.fighter_id == attack_skill.fighter_id && m.skill_genre == attack_skill.skill_genre))
    if (memos.length == 0) {
      $(".memo_row").addClass("d-none")
    } else if (is_frame_view_mode == false) {
      $(".memo_row").removeClass("d-none")
      $(".memo").html(memos[0].memo + "<br><br><br>")
    }
  }
}
