$(document).ready(function() {
  console.log("スキル読込")

  //Form要素を取得する
  var form = document.forms.myform;

  //ファイルが読み込まれた時の処理
  form.myfile.addEventListener('change', function(e) {

    var results = e.target.files;
    // ファイルの数を取得
    var file_count = results.length;

    for (var i = 0; i < file_count; i++) {
      exe(results[i]);
      console.log(i)
      //setTimeout(function(){exe(results[i])}, 1000);
    }
  })
})

function exe(result) {
  //Form要素を取得する
  var form = document.forms.myform;
  //FileReaderのインスタンスを作成する
  var reader = new FileReader();

  //読み込んだファイルの中身を取得する
  reader.readAsText(result);

  //ファイルの中身を取得後に処理を行う
  reader.addEventListener('load', function() {
    console.log("start")
    //CSVを1行ずつ読み込む
    // console.log( reader.result.split('\n') );
    const frame = JSON.parse(reader.result)
    //JSON形式に変換する


    //ファイルの中身をtextarea内に表示する
    // form.output.textContent = reader.result;

    const run_data = run(frame)
    const run_data2 = run2(run_data)
    const run_data3 = run3(run_data2)
    const run_data4 = run4(run_data3)
    const run_data5 = run5(run_data4)

    const frame_str_datas = run_data5.map(f => (getFrameData(f)))

    frame_str_datas.reduce((strs, str) => (strs + str))
    form.output.textContent = ", " + frame_str_datas + form.output.textContent;
    //console.log(run_data5)

    var str = ", " + frame_str_datas

    var listener = function(e) {

      e.clipboardData.setData("text/plain", str);
      // 本来のイベントをキャンセル
      e.preventDefault();
      // 終わったら一応削除
      document.removeEventListener("copy", listener);
    }

    // コピーのイベントが発生したときに、クリップボードに書き込むようにしておく
    document.addEventListener("copy", listener);

    // コピー
    document.execCommand("copy");

  })
}



// jsonデータの足りないデータ行（技種類と判定持続フレームと全体フレーム）にデータ追加
function run(json_data) {

  let prev_skill_genre_full_name = json_data[0].name1
  let prev_time1 = json_data[0].time1
  let prev_time2 = json_data[0].time2
  let prev_landing_lag = json_data[0].landing_lag
  let prev_landing_occurrence = json_data[0].landing_occurrence

  // 技種類名と全体フレームがない行に、それらのデータ付与
  const frame_data = json_data.map((f) => {
    let name1
    if (f.name1 == "") {
      name1 = prev_skill_genre_full_name
    } else {
      name1 = f.name1
      prev_skill_genre_full_name = f.name1
    }

    let time2
    if (f.time2 == "") {
      time2 = prev_time2
    } else {
      time2 = f.time2
      prev_time2 = f.time2

    }

    let time1
    if (f.time1 == "") {
      time1 = prev_time1
    } else {
      time1 = f.time1
      prev_time1 = f.time1
    }


    let landing_lag
    if (f.landing_lag == "") {
      landing_lag = prev_landing_lag
    } else if (isUndefined(f.landing_lag) == false) {
      landing_lag = f.landing_lag
      prev_landing_lag = f.landing_lag
    }
    let landing_occurrence
    if (f.landing_occurrence == "") {
      landing_occurrence = prev_landing_occurrence
    } else if (isUndefined(f.landing_occurrence) == false) {
      landing_occurrence = f.landing_occurrence
      prev_landing_occurrence = f.landing_occurrence
    }
    return {
      ...f,
      name1,
      time1,
      time2,
      landing_lag,
      landing_occurrence
    }
  })
  return frame_data
}




// 判定持続からRehitを取り出す
function run2(frame_data) {
  const result_frame_data = frame_data.map((f) => {

    if (f.time1.toString().indexOf("Rehit") == -1) {
      return {
        ...f
      }
    }



    const occurrences = f.time1.toString().split(/\((.+)\)/)
    const time1 = occurrences[0].trim()
    const rehit = occurrences[1].replace("Rehit:", "").trim()
    return {
      ...f,
      time1,
      rehit
    }
  })
  return result_frame_data
}


// ダメージ別データ分けとダメージ重複行排除
function run3(frame_data) {
  const result_frame_data = []

  frame_data.forEach((f) => {

    const damages = f.damage.toString().split("/")
    const distinct_damages = damages.filter((d, i, array) => (array.indexOf(d) === i))
    const num_damages = distinct_damages.map(Number)
    const sorted_damages = distinct_damages.map(Number).sort((a, b) => (a < b ? 1 : -1))

    sorted_damages.forEach((d, index, array) => {

      const data = {
        ...f,
        damage: d
      }
      if (array.length >= 2) {
        data["attribute1"] = "multiple_damage"
        data["damage_no"] = index + 1
      }
      result_frame_data.push(data)
    })
  })
  return result_frame_data
}

// 全体フレームのカッコの中のデータ分け
function run4(frame_data) {
  const result_frame_data = []

  frame_data.forEach((f) => {

    const time2s = f.time2.toString().split(/\((.+)\)/)


    result_frame_data.push({
      ...f,
      time2: time2s[0]
    })
    if (time2s.length <= 1) {
      return
    }
    result_frame_data.push({
      ...f,
      time2: time2s[1],
      test_message: "(全体フレームのカッコ外した行)",
      cancel: "empty_attack_again" //再攻撃時用のデータ
    })


  })
  return result_frame_data
}
// 技情報追加と連続ヒット設定。開始フレーム、終了フレーム設定
function run5(frame_data) {
  const result_frame_data = frame_data.map((f) => {

    const name2s = f.name2.toString().split(",")
    let alias = undefined,
      persistence_num = undefined,
      serial_num_str = undefined,
      test_serial_num_strs = undefined,
      shift = undefined,
      is_landing_attack = undefined,
      test_message = isUndefined(f.test_message) ? "" : f.test_message,
      test_persistences = undefined,
      test_skill_genre_name = f.name1,
      defend_position = undefined,
      landing_occurrence_begin = undefined,
      landing_occurrence_end = undefined,
      detail_name = undefined

    if (name2s.some(t => (t.trim() == "弱1"))) {
      alias = "弱1"
    }
    if (name2s.some(t => (t.trim() == "弱2"))) {
      alias = "弱2"
    }
    if (name2s.some(t => (t.trim() == "弱3"))) {
      alias = "弱3"
    }
    if (name2s.some(t => (t.trim() == "百裂"))) {
      alias = "百裂"
    }
    if (name2s.some(t => (t.trim() == "百裂")) && name2s.some(t => (t.trim() == "始"))) {
      alias = "百裂始"
    }
    if (name2s.some(t => (t.trim() == "百裂")) && name2s.some(t => (t.trim() == "連"))) {
      alias = "百裂"
    }
    if (name2s.some(t => (t.trim() == "百裂")) && name2s.some(t => (t.trim() == "〆"))) {
      alias = "百裂〆"
    }
    if (name2s.some(t => (t.trim() == "横スマ1"))) {
      alias = "横スマ1"
    }
    if (name2s.some(t => (t.trim() == "横スマ2"))) {
      alias = "横スマ2"
    }
    if (name2s.some(t => (t.trim() == "横強1"))) {
      alias = "横強1"
    }
    if (name2s.some(t => (t.trim() == "横強2"))) {
      alias = "横強2"
    }
    if (name2s.some(t => (t.trim() == "衝撃"))) {
      alias = "衝撃"
    }
    if (name2s.some(t => (t.trim() == "衝撃波"))) {
      alias = "衝撃"
    }

    if (name2s.some(t => (t.trim() == "剣ビーム"))) {
      alias = "剣ビーム"
    }
    if (name2s.some(t => (t.trim() == "剣ビーム")) && name2s.some(t => (t.trim() == "最大"))) {
      alias = "剣ビーム最大"
    }
    if (name2s.some(t => (t.trim() == "着地"))) {
      is_landing_attack = true
    }

    if (name2s.some(t => (t.trim() == "始"))) {
      persistence_num = 0
    }
    if (name2s.some(t => (t.trim() == "〆"))) {
      persistence_num = 9
    }

    if (name2s.some(t => (t.trim() == "持続"))) {
      persistence_num = 1
    }
    if (name2s.some(t => (t.trim() == "持続1"))) {
      persistence_num = 1
    }
    if (name2s.some(t => (t.trim() == "持続2"))) {
      persistence_num = 2
    }
    if (name2s.some(t => (t.trim() == "持続3"))) {
      persistence_num = 3
    }
    if (name2s.some(t => (t.trim() == "持続4"))) {
      persistence_num = 4
    }
    if (name2s.some(t => (t.trim() == "持続5"))) {
      persistence_num = 5
    }
    if (name2s.some(t => (t.trim() == "持続6"))) {
      persistence_num = 6
    }
    if (name2s.some(t => (t.trim() == "全シフト"))) {
      shift = "all"
    }
    if (name2s.some(t => (t.trim() == "上シフト"))) {
      shift = "up"
    }
    if (name2s.some(t => (t.trim() == "下シフト"))) {
      shift = "under"
    }
    if (name2s.some(t => (t.trim() == "対地"))) {
      defend_position = "ground"
    }
    if (name2s.some(t => (t.trim() == "対地のみ"))) {
      defend_position = "ground_only"
    }
    if (name2s.some(t => (t.trim() == "対空"))) {
      defend_position = "air"
    }
    if (name2s.some(t => (t.trim() == "対空のみ"))) {
      defend_position = "air_only"
    }
    if (name2s.some(t => (t.trim() == "空中ワイヤー"))) {
      alias = "空中ワイヤー"
    }
    if (name2s.some(t => (t.trim() == "右足"))) {
      detail_name = "右足"
    }
    if (name2s.some(t => (t.trim() == "左足"))) {
      detail_name = "左足"
    }
    if (name2s.some(t => (t.trim() == "爆発"))) {
      detail_name = "爆発"
    }
    if (name2s.some(t => (t.trim() == "打ち上げ"))) {
      detail_name = "打ち上げ"
    }
    if (name2s.some(t => (t.trim() == "連"))) {
      detail_name = "連"
    }
    if (name2s.some(t => (t.trim() == "カス当て"))) {
      detail_name = "カス当て"
    }
    if (name2s.some(t => (t.trim() == "本当て"))) {
      detail_name = "本当て"
    }
    if (name2s.some(t => (t.trim() == "本当て1"))) {
      detail_name = "本当て1"
    }
    if (name2s.some(t => (t.trim() == "本当て2"))) {
      detail_name = "本当て2"
    }

    if (name2s.some(t => (t.trim() == "赤"))) {
      detail_name = "赤"
    }
    if (name2s.some(t => (t.trim() == "黄青"))) {
      detail_name = "黄青"
    }
    if (name2s.some(t => (t.trim() == "白"))) {
      detail_name = "白"
    }
    if (name2s.some(t => (t.trim() == "紫"))) {
      detail_name = "紫"
    }
    if (name2s.some(t => (t.trim() == "蕪1"))) {
      detail_name = "カブ1"
    }
    if (name2s.some(t => (t.trim() == "蕪2"))) {
      detail_name = "カブ2"
    }
    if (name2s.some(t => (t.trim() == "蕪3"))) {
      detail_name = "カブ3"
    }
    if (name2s.some(t => (t.trim() == "チコ"))) {
      detail_name = "チコ"
    }
    if (name2s.some(t => (t.trim() == "風"))) {
      detail_name = "風"
    }
    if (name2s.some(t => (t.trim() == "風判定"))) {
      detail_name = "風"
    }
    if (name2s.some(t => (t.trim() == "バウンド"))) {
      detail_name = "バウンド"
    }
    if (name2s.some(t => (t.trim() == "サンダー"))) {
      detail_name = "サンダー"
    }
    if (name2s.some(t => (t.trim() == "青銅"))) {
      detail_name = "青銅"
    }
    if (name2s.some(t => (t.trim() == "最終"))) {
      detail_name = "最終"
    }
    if (name2s.some(t => (t.trim() == "弱1 (強)"))) {
      alias = "弱1 (強)"
    }
    if (name2s.some(t => (t.trim() == "弱1 (弱)"))) {
      alias = "弱1 (弱)"
    }
    if (name2s.some(t => (t.trim() == "密着"))) {
      detail_name = "密着"
    }
    if (name2s.some(t => (t.trim() == "強"))) {
      detail_name = "強"
    }
    if (name2s.some(t => (t.trim() == "弱"))) {
      detail_name = "弱"
    }
    if (name2s.some(t => (t.trim() == "派生1"))) {
      detail_name = "派生1"
    }
    if (name2s.some(t => (t.trim() == "派生2"))) {
      detail_name = "派生2"
    }
    if (name2s.some(t => (t.trim() == "派生3"))) {
      detail_name = "派生3"
    }
    if (name2s.some(t => (t.trim() == "派生4"))) {
      detail_name = "派生4"
    }
    if (name2s.some(t => (t.trim() == "空振り時"))) {
      detail_name = "空振り時"
    }
    if (name2s.some(t => (t.trim() == "敵ヒット時"))) {
      detail_name = "敵ヒット時"
    }
    if (name2s.some(t => (t.trim() == "アルセーヌ"))) {
      detail_name = "アルセーヌ"
    }
    if (name2s.some(t => (t.trim() == "会心の一撃"))) {
      detail_name = "会心の一撃"
    }
    if (name2s.some(t => (t.trim() == "溜め"))) {
      detail_name = "溜め"
    }
    if (name2s.some(t => (t.trim() == "最大溜め"))) {
      detail_name = "最大溜め"
    }
    if (name2s.some(t => (t.trim() == "溜め無し"))) {
      detail_name = "溜め無し"
    }
    if (name2s.some(t => (t.trim() == "弾1"))) {
      detail_name = "弾1"
    }
    if (name2s.some(t => (t.trim() == "弾2"))) {
      detail_name = "弾2"
    }
    if (name2s.some(t => (t.trim() == "弾3"))) {
      detail_name = "弾3"
    }
    if (name2s.some(t => (t.trim() == "本体"))) {
      detail_name = "本体"
    }
    if (name2s.some(t => (t.trim() == "上下"))) {
      detail_name = "上下"
    }
    if (name2s.some(t => (t.trim() == "無"))) {
      detail_name = "無"
    }
    if (name2s.some(t => (t.trim() == "盾"))) {
      detail_name = "盾"
    }
    if (name2s.some(t => (t.trim() == "疾"))) {
      detail_name = "疾"
    }
    if (name2s.some(t => (t.trim() == "撃"))) {
      detail_name = "撃"
    }
    if (name2s.some(t => (t.trim() == "斬"))) {
      detail_name = "斬"
    }
    if (name2s.some(t => (t.trim() == "後方1"))) {
      detail_name = "後方1"
    }
    if (name2s.some(t => (t.trim() == "後方2"))) {
      detail_name = "後方2"
    }

    if (name2s.some(t => (t.trim() == "空前1"))) {
      alias = "空前1"
    }
    if (name2s.some(t => (t.trim() == "空前2"))) {
      alias = "空前2"
    }
    if (name2s.some(t => (t.trim() == "空前3"))) {
      alias = "空前3"
    }
    if (name2s.some(t => (t.trim() == "インク切れ"))) {
      detail_name = "インク切れ"
    }
    if (name2s.some(t => (t.trim() == "最短"))) {
      detail_name = "最短"
    }
    if (name2s.some(t => (t.trim() == "解除"))) {
      detail_name = "解除"
    }
    if (name2s.some(t => (t.trim() == "派生なし"))) {
      detail_name = "派生なし"
    }

    name2s.forEach(t => {
      if (t.includes("Hit")) {
        serial_num_str = t.replace("Hit", "").trim();
        test_message += "(連続ヒットする技)"
      }
    })

    let time1 = f.time1.toString().trim(),
      start, end

    // 連続ヒット技でひとまとめにされているデータの1つ目を発生とする
    if ((isUndefined(serial_num_str) == false && serial_num_str.includes("-")) || alias === "百裂") {
      test_message += "(連続ヒットまとめ技)"
      time1 = f.time1.split(",")[0]
      //テスト用にひとまとめ全データぶちこむ
      test_serial_num_strs = f.time1

    }
    // 発生が数字。持続1F
    if (isNaN(time1) == false) {
      start = time1
      end = time1
    }
    //	発生が持続する。2-5みたいな
    else {
      const occurrences = time1.split("-")
      start = occurrences[0]
      end = occurrences[1]
    }

    if (isUndefined(f.landing_occurrence) == false) {
      const landing_occurrences = f.landing_occurrence.split("-")
      landing_occurrence_begin = landing_occurrences[0]
      landing_occurrence_end = landing_occurrences[1]
    }
    const skill_genrelist = skill_genres.filter(s => (s.full_name == f.name1))
    const skill_genre = skill_genrelist[0].skill_genre

    const fighterslist = fighters.filter(s => (s.name == f.fighter_name))
    const fighter_id = fighterslist[0].fighter_id

    if (test_message == "") {
      test_message = undefined
    }
    return {
      ...f,
      alias,
      persistence_num,
      shift,
      serial_num_str,
      is_landing_attack,
      test_message,
      test_persistences,
      test_skill_genre_name,
      start,
      end,
      skill_genre,
      fighter_id,
      test_serial_num_strs,
      defend_position,
      landing_occurrence_begin,
      landing_occurrence_end,
      detail_name
    }
  })
  return result_frame_data
}


function getFrameData({
  alias,
  persistence_num,
  shift,
  is_landing_attack,
  test_message,
  test_persistences,
  test_skill_genre_name,
  start,
  end,
  time,
  skill_genre,
  fighter_id,
  damage,
  damage_no,
  serial_num_str,
  test_serial_num_strs,
  name2,
  time2,
  fighter_name,
  defend_position,
  cancel,
  landing_lag,
  landing_occurrence,
  landing_occurrence_begin,
  landing_occurrence_end,
  rehit,
  detail_name,
  is_hidden
}) {

  const getStr = ((name, val) => {
    if (isUndefined(val)) {
      return ""
    }
    return `${name}:"${val.toString().trim()}", `
  })
  const getNum = ((name, val) => {
    if (isUndefined(val)) {
      return ""
    }
    return `${name}:${Number(val.toString().trim())}, `
  })
  const getBol = ((name, val) => {
    if (isUndefined(val)) {
      return ""
    }
    return `${name}:${val.toString().trim()}, `
  })
  let d = "{"
  d += getStr("tesf", fighter_name) //テスト用ファイター名
  d += getStr("tess", test_skill_genre_name) //テスト用スキル名
  d += getNum("fighter_id", fighter_id) //ファイターID
  d += getNum("skill_genre", skill_genre) //スキルID
  d += getNum("begin", start) //発生フレ
  d += getNum("end", end) //発生終了フレ
  d += getNum("time", time2) //全体フレ
  d += getNum("base_damage", damage) //基礎ダメージ
  d += getNum("landing_lag", landing_lag) //着地隙
  d += getNum("landing_occurrence_begin", landing_occurrence_begin) //着地隙発生Fはじめ
  d += getNum("landing_occurrence_end", landing_occurrence_end) //着地隙発生Fおわおわり

  d += getNum("damage_no", damage_no) //同技のヒット位置で変わるダメージ順番
  d += getStr("alias", alias) //別名
  d += getStr("detail_name", detail_name) //別名（カッコ内）
  d += getNum("rehit", rehit) //再ヒット
  d += getNum("persistence_num", persistence_num) //持続技
  d += getStr("serial_num_str", serial_num_str) //Hit文字を除いた連続ヒット技
  d += getStr("shift", shift) // シフト攻撃
  d += getBol("is_landing_attack", is_landing_attack) //着地攻撃
  d += getStr("defend_position", defend_position) //相手の位置
  d += getStr("cancel", cancel) //技キャンセル
  d += getStr("tes_message", test_message) //テストメッセージ
  d += getStr("test_serial_num_strs", test_serial_num_strs) //テスト用Hit文字を除いた連続ヒットまとめ技
  d += getStr("tes_val", name2) //技種類属性
  d += getBol("is_hidden", is_hidden) //表示非表示
  d = d.replace(/\r?\n/g, "") //改行コード削除
  return d + "}\n"
}
