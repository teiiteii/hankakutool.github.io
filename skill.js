const skills =
[
  {fighter_id:1010, skill_genre:10600, time:39, begin:9, end:12, base_damage:14, is_reverse:true},
  {fighter_id:1010, skill_genre:10904, time:45, begin:3, end:5, base_damage:8, landing_lag:6}, 


  {fighter_id:1010, skill_genre:10902, time:37, begin:5, end:7, base_damage:1.4, landing_lag:15, continue_count:5, continue_number:1, attribute1:"continue"},
  {fighter_id:1010, skill_genre:10902, time:37, begin:1, end:2, base_damage:2, landing_lag:15},
  {fighter_id:1010, skill_genre:10902, time:37, begin:1, end:2, base_damage:2, landing_lag:15, attribute1:"landing"},
  

  
  {fighter_id:1030, skill_genre:10300, time:24, begin:8, end:9, base_damage:3},
  {fighter_id:1030, skill_genre:10700, time:76, begin:7, end:8, base_damage:14},
  {fighter_id:1030, skill_genre:10200, time:34, begin:6, end:7, base_damage:0},
  {fighter_id:1030, skill_genre:10501, time:39, begin:15, end:15, base_damage:13},
  {fighter_id:1030, skill_genre:10501, time:39, begin:16, end:19, base_damage:13}, 
  {fighter_id:1030, skill_genre:10500, time:35, begin:8, end:12, base_damage:11, is_reverse:true},
  {fighter_id:1030, skill_genre:10500, time:35, begin:12, end:12, base_damage:11, name:"最終F当て"},
  
  {fighter_id:1030, skill_genre:10500, time:35, begin:11, end:12, base_damage:11, attribute1:"persistence"},
  {fighter_id:1211, skill_genre:10501, time:33, begin:8, end:11, base_damage:11,},
  
  
{tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:17, base_damage:1, damage_no:1, alias:"弱1", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:6, base_damage:1, damage_no:1, alias:"弱1", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:17, base_damage:1.2, damage_no:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:6, base_damage:1.2, damage_no:2, alias:"弱1", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:17, base_damage:1.4, damage_no:3, alias:"弱1", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:6, base_damage:1.4, damage_no:3, alias:"弱1", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"ダッシュ攻撃", fighter_id:1080, skill_genre:10400, begin:6, end:8, time:35, base_damage:11, tes_val:"", }
,{tesf:"ピカチュウ", tess:"ダッシュ攻撃", fighter_id:1080, skill_genre:10400, begin:9, end:12, time:35, base_damage:6, persistence_num:1, tes_val:"持続", }
,{tesf:"ピカチュウ", tess:"横強", fighter_id:1080, skill_genre:10501, begin:6, end:8, time:29, base_damage:10, shift:"up", tes_val:"上シフト", }
,{tesf:"ピカチュウ", tess:"横強", fighter_id:1080, skill_genre:10501, begin:6, end:8, time:29, base_damage:9, tes_val:"無シフト", }
,{tesf:"ピカチュウ", tess:"横強", fighter_id:1080, skill_genre:10501, begin:6, end:8, time:29, base_damage:8, shift:"under", tes_val:"下シフト", }
,{tesf:"ピカチュウ", tess:"上強", fighter_id:1080, skill_genre:10500, begin:7, end:13, time:26, base_damage:5, tes_val:"", }
,{tesf:"ピカチュウ", tess:"下強", fighter_id:1080, skill_genre:10502, begin:7, end:8, time:18, base_damage:6, tes_val:"", }
,{tesf:"ピカチュウ", tess:"横スマッシュ", fighter_id:1080, skill_genre:10601, begin:15, end:16, time:53, base_damage:15, tes_val:"始", }
,{tesf:"ピカチュウ", tess:"横スマッシュ", fighter_id:1080, skill_genre:10601, begin:17, end:19, time:53, base_damage:18, tes_val:"", }
,{tesf:"ピカチュウ", tess:"横スマッシュ", fighter_id:1080, skill_genre:10601, begin:20, end:29, time:53, base_damage:12, persistence_num:1, tes_val:"持続", }
,{tesf:"ピカチュウ", tess:"上スマッシュ", fighter_id:1080, skill_genre:10600, begin:10, end:12, time:44, base_damage:13, damage_no:1, tes_val:"", }
,{tesf:"ピカチュウ", tess:"上スマッシュ", fighter_id:1080, skill_genre:10600, begin:10, end:12, time:44, base_damage:14, damage_no:2, tes_val:"", }
,{tesf:"ピカチュウ", tess:"上スマッシュ", fighter_id:1080, skill_genre:10600, begin:13, end:14, time:44, base_damage:11, persistence_num:1, tes_val:"持続1", }
,{tesf:"ピカチュウ", tess:"上スマッシュ", fighter_id:1080, skill_genre:10600, begin:15, end:17, time:44, base_damage:7, persistence_num:2, tes_val:"持続2", }
,{tesf:"ピカチュウ", tess:"下スマッシュ", fighter_id:1080, skill_genre:10602, begin:8, end:9, time:65, base_damage:2, serial_num_str:"1-5", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"8-9, 11-12, 14-15, 17-18, 20-21", tes_val:"Hit 1-5", }

]