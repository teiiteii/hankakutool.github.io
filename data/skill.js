const skills =
[
  {tesf:"マリオ", tess:"弱攻撃", fighter_id:1010, skill_genre:10300, begin:2, end:3, time:19, base_damage:2.2, alias:"弱1", tes_val:"弱1", }
,{tesf:"マリオ", tess:"弱攻撃", fighter_id:1010, skill_genre:10300, begin:2, end:3, time:6, base_damage:2.2, alias:"弱1", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1",  cancel:"empty_attack_again"}
,{tesf:"マリオ", tess:"弱攻撃", fighter_id:1010, skill_genre:10300, begin:2, end:3, time:21, base_damage:1.7, alias:"弱2", tes_val:"弱2", }
,{tesf:"マリオ", tess:"弱攻撃", fighter_id:1010, skill_genre:10300, begin:3, end:4, time:33, base_damage:4, alias:"弱3", tes_val:"弱3", }
,{tesf:"マリオ", tess:"ダッシュ攻撃", fighter_id:1010, skill_genre:10400, begin:6, end:9, time:37, base_damage:8, tes_val:"", correction:1.875}
,{tesf:"マリオ", tess:"ダッシュ攻撃", fighter_id:1010, skill_genre:10400, begin:10, end:25, time:37, base_damage:6, persistence_num:1, tes_val:"持続", correction:1.875}
,{tesf:"マリオ", tess:"横強", fighter_id:1010, skill_genre:10501, begin:5, end:7, time:25, base_damage:7, shift:"all", tes_val:"全シフト", }
,{tesf:"マリオ", tess:"上強", fighter_id:1010, skill_genre:10500, begin:5, end:11, time:29, base_damage:5.5, tes_val:"", }
,{tesf:"マリオ", tess:"下強", fighter_id:1010, skill_genre:10502, begin:5, end:7, time:27, base_damage:7, damage_no:1, tes_val:"", }
,{tesf:"マリオ", tess:"下強", fighter_id:1010, skill_genre:10502, begin:5, end:7, time:27, base_damage:5, damage_no:2, tes_val:"", }
,{tesf:"マリオ", tess:"横スマッシュ", fighter_id:1010, skill_genre:10601, begin:15, end:17, time:47, base_damage:17.8, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"マリオ", tess:"横スマッシュ", fighter_id:1010, skill_genre:10601, begin:15, end:17, time:47, base_damage:14.7, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"マリオ", tess:"上スマッシュ", fighter_id:1010, skill_genre:10600, begin:9, end:12, time:39, base_damage:14, tes_val:"", }
,{tesf:"マリオ", tess:"下スマッシュ", fighter_id:1010, skill_genre:10602, begin:5, end:6, time:43, base_damage:10, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"マリオ", tess:"下スマッシュ", fighter_id:1010, skill_genre:10602, begin:14, end:14, time:43, base_damage:12, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"マリオ", tess:"空N", fighter_id:1010, skill_genre:10904, begin:3, end:5, time:45, base_damage:8, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:38, tes_val:"", }
,{tesf:"マリオ", tess:"空N", fighter_id:1010, skill_genre:10904, begin:6, end:27, time:45, base_damage:5, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:38, persistence_num:1, tes_val:"持続", }
,{tesf:"マリオ", tess:"空前", fighter_id:1010, skill_genre:10901, begin:16, end:16, time:59, base_damage:12, landing_lag:17, landing_occurrence_begin:3, landing_occurrence_end:42, persistence_num:0, tes_val:"始", }
,{tesf:"マリオ", tess:"空前", fighter_id:1010, skill_genre:10901, begin:17, end:20, time:59, base_damage:14, landing_lag:17, landing_occurrence_begin:3, landing_occurrence_end:42, tes_val:"メテオ", }
,{tesf:"マリオ", tess:"空前", fighter_id:1010, skill_genre:10901, begin:21, end:21, time:59, base_damage:10, landing_lag:17, landing_occurrence_begin:3, landing_occurrence_end:42, persistence_num:1, tes_val:"持続", }
,{tesf:"マリオ", tess:"空後", fighter_id:1010, skill_genre:10903, begin:6, end:7, time:33, base_damage:10.5, landing_lag:6, landing_occurrence_begin:6, landing_occurrence_end:18, tes_val:"", }
,{tesf:"マリオ", tess:"空後", fighter_id:1010, skill_genre:10903, begin:8, end:10, time:33, base_damage:7, landing_lag:6, landing_occurrence_begin:6, landing_occurrence_end:18, persistence_num:1, tes_val:"持続", }
,{tesf:"マリオ", tess:"空上", fighter_id:1010, skill_genre:10900, begin:4, end:7, time:30, base_damage:7, landing_lag:6, landing_occurrence_begin:2, landing_occurrence_end:16, tes_val:"", }
,{tesf:"マリオ", tess:"空下", fighter_id:1010, skill_genre:10902, begin:5, end:5, time:37, base_damage:1.4, landing_lag:15, landing_occurrence_begin:5, landing_occurrence_end:32, serial_num_str:"1-5", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"5, 7, 9, 11, 13", tes_val:"Hit 1-5", }
,{tesf:"マリオ", tess:"空下", fighter_id:1010, skill_genre:10902, begin:23, end:23, time:37, base_damage:5.5, landing_lag:15, landing_occurrence_begin:5, landing_occurrence_end:32, serial_num_str:"6", tes_message:"(連続ヒットする技)", tes_val:"Hit 6", }
,{tesf:"マリオ", tess:"空下", fighter_id:1010, skill_genre:10902, begin:1, end:2, time:37, base_damage:2, landing_lag:15, landing_occurrence_begin:5, landing_occurrence_end:32, is_landing_attack:true, tes_val:"着地", }
,{tess:"その場投げ", fighter_id:1010, skill_genre:10200, base_damage:0, begin:6, end:7, time:34,}
,{tess:"ダッシュ投げ", fighter_id:1010, skill_genre:10201, base_damage:0, begin:9, end:10, time:42,}
,{tess:"ふりむき投げ", fighter_id:1010, skill_genre:10202, base_damage:0, begin:10, end:11, time:36,}
, {tesf:"ドンキーコング", tess:"弱攻撃", fighter_id:1020, skill_genre:10300, begin:5, end:6, time:24, base_damage:4, alias:"弱1", tes_val:"弱1", }
,{tesf:"ドンキーコング", tess:"弱攻撃", fighter_id:1020, skill_genre:10300, begin:4, end:5, time:34, base_damage:6, alias:"弱2", tes_val:"弱2", }
,{tesf:"ドンキーコング", tess:"ダッシュ攻撃", fighter_id:1020, skill_genre:10400, begin:9, end:12, time:34, base_damage:12, tes_val:"", }
,{tesf:"ドンキーコング", tess:"ダッシュ攻撃", fighter_id:1020, skill_genre:10400, begin:13, end:24, time:34, base_damage:9, persistence_num:1, tes_val:"持続", }
,{tesf:"ドンキーコング", tess:"横強", fighter_id:1020, skill_genre:10501, begin:7, end:9, time:34, base_damage:9, shift:"up", tes_val:"上シフト", }
,{tesf:"ドンキーコング", tess:"横強", fighter_id:1020, skill_genre:10501, begin:7, end:9, time:34, base_damage:8, tes_val:"無シフト", }
,{tesf:"ドンキーコング", tess:"横強", fighter_id:1020, skill_genre:10501, begin:7, end:9, time:34, base_damage:9, shift:"under", tes_val:"下シフト", }
,{tesf:"ドンキーコング", tess:"上強", fighter_id:1020, skill_genre:10500, begin:5, end:11, time:38, base_damage:10, damage_no:1, tes_val:"", }
,{tesf:"ドンキーコング", tess:"上強", fighter_id:1020, skill_genre:10500, begin:5, end:11, time:38, base_damage:9, damage_no:2, tes_val:"", }
,{tesf:"ドンキーコング", tess:"上強", fighter_id:1020, skill_genre:10500, begin:5, end:11, time:38, base_damage:8, damage_no:3, tes_val:"", }
,{tesf:"ドンキーコング", tess:"下強", fighter_id:1020, skill_genre:10502, begin:6, end:7, time:24, base_damage:7, damage_no:1, tes_val:"", }
,{tesf:"ドンキーコング", tess:"下強", fighter_id:1020, skill_genre:10502, begin:6, end:7, time:24, base_damage:6, damage_no:2, tes_val:"", }
,{tesf:"ドンキーコング", tess:"横スマッシュ", fighter_id:1020, skill_genre:10601, begin:22, end:23, time:54, base_damage:22, damage_no:1, tes_val:"", }
,{tesf:"ドンキーコング", tess:"横スマッシュ", fighter_id:1020, skill_genre:10601, begin:22, end:23, time:54, base_damage:21, damage_no:2, tes_val:"", }
,{tesf:"ドンキーコング", tess:"上スマッシュ", fighter_id:1020, skill_genre:10600, begin:14, end:15, time:49, base_damage:19, tes_val:"", }
,{tesf:"ドンキーコング", tess:"下スマッシュ", fighter_id:1020, skill_genre:10602, begin:11, end:12, time:55, base_damage:17, damage_no:1, persistence_num:0, tes_val:"始", }
,{tesf:"ドンキーコング", tess:"下スマッシュ", fighter_id:1020, skill_genre:10602, begin:11, end:12, time:55, base_damage:14, damage_no:2, persistence_num:0, tes_val:"始", }
,{tesf:"ドンキーコング", tess:"下スマッシュ", fighter_id:1020, skill_genre:10602, begin:13, end:14, time:55, base_damage:18, damage_no:1, tes_val:"", }
,{tesf:"ドンキーコング", tess:"下スマッシュ", fighter_id:1020, skill_genre:10602, begin:13, end:14, time:55, base_damage:14, damage_no:2, tes_val:"", }
, {tesf:"ドンキーコング", tess:"空N", fighter_id:1020, skill_genre:10904, begin:10, end:13, time:38, base_damage:12, landing_lag:10, landing_occurrence_begin:10, landing_occurrence_end:26, tes_val:"", }
,{tesf:"ドンキーコング", tess:"空N", fighter_id:1020, skill_genre:10904, begin:14, end:26, time:38, base_damage:9, landing_lag:10, landing_occurrence_begin:10, landing_occurrence_end:26, persistence_num:1, tes_val:"持続", }
,{tesf:"ドンキーコング", tess:"空前", fighter_id:1020, skill_genre:10901, begin:18, end:20, time:55, base_damage:16, landing_lag:17, landing_occurrence_begin:1, landing_occurrence_end:55, tes_val:"", }
,{tesf:"ドンキーコング", tess:"空前", fighter_id:1020, skill_genre:10901, begin:21, end:23, time:55, base_damage:15, landing_lag:17, landing_occurrence_begin:1, landing_occurrence_end:55, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"ドンキーコング", tess:"空前", fighter_id:1020, skill_genre:10901, begin:21, end:23, time:55, base_damage:13, landing_lag:17, landing_occurrence_begin:1, landing_occurrence_end:55, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"ドンキーコング", tess:"空後", fighter_id:1020, skill_genre:10903, begin:7, end:8, time:31, base_damage:13, landing_lag:11, landing_occurrence_begin:7, landing_occurrence_end:30, tes_val:"", }
,{tesf:"ドンキーコング", tess:"空後", fighter_id:1020, skill_genre:10903, begin:9, end:16, time:31, base_damage:8, landing_lag:11, landing_occurrence_begin:7, landing_occurrence_end:30, persistence_num:1, tes_val:"持続", }
,{tesf:"ドンキーコング", tess:"空上", fighter_id:1020, skill_genre:10900, begin:6, end:10, time:37, base_damage:13, landing_lag:15, landing_occurrence_begin:6, landing_occurrence_end:25, tes_val:"", }
,{tesf:"ドンキーコング", tess:"空下", fighter_id:1020, skill_genre:10902, begin:14, end:16, time:54, base_damage:16, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:49, damage_no:1, tes_val:"", }
,{tesf:"ドンキーコング", tess:"空下", fighter_id:1020, skill_genre:10902, begin:14, end:16, time:54, base_damage:13, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:49, damage_no:2, tes_val:"", }
,{tess:"その場投げ", fighter_id:1020, skill_genre:10200, base_damage:0, begin:8, end:10, time:38}
,{tess:"ダッシュ投げ", fighter_id:1020, skill_genre:10201, base_damage:0, begin:11, end:13, time:46}
,{tess:"ふりむき投げ", fighter_id:1020, skill_genre:10202, base_damage:0, begin:12, end:14, time:41}
,{tesf:"リンク", tess:"弱攻撃", fighter_id:1030, skill_genre:10300, begin:8, end:9, time:24, base_damage:3, alias:"弱1", tes_val:"弱1", }
,{tesf:"リンク", tess:"弱攻撃", fighter_id:1030, skill_genre:10300, begin:5, end:6, time:24, base_damage:3, alias:"弱2", tes_val:"弱2", }
,{tesf:"リンク", tess:"弱攻撃", fighter_id:1030, skill_genre:10300, begin:6, end:7, time:34, base_damage:4, alias:"弱3", tes_val:"弱3", }
,{tesf:"リンク", tess:"ダッシュ攻撃", fighter_id:1030, skill_genre:10400, begin:20, end:23, time:56, base_damage:14, damage_no:1, tes_val:"", correction:1.4}
,{tesf:"リンク", tess:"ダッシュ攻撃", fighter_id:1030, skill_genre:10400, begin:20, end:23, time:56, base_damage:13, damage_no:2, tes_val:"", correction:1.4}
,{tesf:"リンク", tess:"ダッシュ攻撃", fighter_id:1030, skill_genre:10400, begin:20, end:23, time:56, base_damage:12, damage_no:3, tes_val:"", correction:1.4}
,{tesf:"リンク", tess:"横強", fighter_id:1030, skill_genre:10501, begin:15, end:15, time:39, base_damage:13, tes_val:"", }
,{tesf:"リンク", tess:"横強", fighter_id:1030, skill_genre:10501, begin:16, end:19, time:39, base_damage:13, persistence_num:1, tes_val:"持続", }
,{tesf:"リンク", tess:"上強", fighter_id:1030, skill_genre:10500, begin:8, end:12, time:35, base_damage:11, tes_val:"", }
,{tesf:"リンク", tess:"下強", fighter_id:1030, skill_genre:10502, begin:10, end:11, time:30, base_damage:9, tes_val:"", }
,{tesf:"リンク", tess:"横スマッシュ", fighter_id:1030, skill_genre:10601, begin:17, end:18, time:50, base_damage:14, damage_no:1, alias:"横スマ1", tes_val:"横スマ1", }
,{tesf:"リンク", tess:"横スマッシュ", fighter_id:1030, skill_genre:10601, begin:17, end:18, time:50, base_damage:7, damage_no:2, alias:"横スマ1", tes_val:"横スマ1", }
,{tesf:"リンク", tess:"横スマッシュ", fighter_id:1030, skill_genre:10601, begin:19, end:48, time:50, base_damage:5, alias:"剣ビーム", tes_val:"剣ビーム", }
,{tesf:"リンク", tess:"横スマッシュ", fighter_id:1030, skill_genre:10601, begin:10, end:11, time:60, base_damage:13, damage_no:1, alias:"横スマ2", tes_val:"横スマ2", }
,{tesf:"リンク", tess:"横スマッシュ", fighter_id:1030, skill_genre:10601, begin:10, end:11, time:60, base_damage:12, damage_no:2, alias:"横スマ2", tes_val:"横スマ2", }
,{tesf:"リンク", tess:"上スマッシュ", fighter_id:1030, skill_genre:10600, begin:10, end:13, time:77, base_damage:4, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リンク", tess:"上スマッシュ", fighter_id:1030, skill_genre:10600, begin:14, end:15, time:77, base_damage:4, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"リンク", tess:"上スマッシュ", fighter_id:1030, skill_genre:10600, begin:25, end:28, time:77, base_damage:3, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"リンク", tess:"上スマッシュ", fighter_id:1030, skill_genre:10600, begin:29, end:30, time:77, base_damage:3, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続", }
,{tesf:"リンク", tess:"上スマッシュ", fighter_id:1030, skill_genre:10600, begin:41, end:45, time:77, base_damage:11, damage_no:1, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"リンク", tess:"上スマッシュ", fighter_id:1030, skill_genre:10600, begin:41, end:45, time:77, base_damage:10, damage_no:2, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"リンク", tess:"上スマッシュ", fighter_id:1030, skill_genre:10600, begin:41, end:45, time:77, base_damage:9, damage_no:3, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"リンク", tess:"下スマッシュ", fighter_id:1030, skill_genre:10602, begin:12, end:13, time:54, base_damage:17, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リンク", tess:"下スマッシュ", fighter_id:1030, skill_genre:10602, begin:12, end:13, time:54, base_damage:16, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リンク", tess:"下スマッシュ", fighter_id:1030, skill_genre:10602, begin:12, end:13, time:54, base_damage:14, damage_no:3, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リンク", tess:"下スマッシュ", fighter_id:1030, skill_genre:10602, begin:24, end:25, time:54, base_damage:12, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"リンク", tess:"下スマッシュ", fighter_id:1030, skill_genre:10602, begin:24, end:25, time:54, base_damage:11, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"リンク", tess:"下スマッシュ", fighter_id:1030, skill_genre:10602, begin:24, end:25, time:54, base_damage:10, damage_no:3, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"リンク", tess:"空N", fighter_id:1030, skill_genre:10904, begin:7, end:8, time:38, base_damage:11, landing_lag:6, landing_occurrence_begin:4, landing_occurrence_end:35, damage_no:1, tes_val:"", }
,{tesf:"リンク", tess:"空N", fighter_id:1030, skill_genre:10904, begin:7, end:8, time:38, base_damage:9, landing_lag:6, landing_occurrence_begin:4, landing_occurrence_end:35, damage_no:2, tes_val:"", }
,{tesf:"リンク", tess:"空N", fighter_id:1030, skill_genre:10904, begin:9, end:31, time:38, base_damage:6, landing_lag:6, landing_occurrence_begin:4, landing_occurrence_end:35, persistence_num:1, tes_val:"持続", }
,{tesf:"リンク", tess:"空前", fighter_id:1030, skill_genre:10901, begin:16, end:17, time:51, base_damage:8, landing_lag:11, landing_occurrence_begin:1, landing_occurrence_end:52, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リンク", tess:"空前", fighter_id:1030, skill_genre:10901, begin:24, end:25, time:51, base_damage:10, landing_lag:11, landing_occurrence_begin:1, landing_occurrence_end:52, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"リンク", tess:"空後", fighter_id:1030, skill_genre:10903, begin:6, end:8, time:30, base_damage:5, landing_lag:6, landing_occurrence_begin:1, landing_occurrence_end:28, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リンク", tess:"空後", fighter_id:1030, skill_genre:10903, begin:15, end:17, time:30, base_damage:7, landing_lag:6, landing_occurrence_begin:1, landing_occurrence_end:28, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"リンク", tess:"空上", fighter_id:1030, skill_genre:10900, begin:11, end:13, time:59, base_damage:15, landing_lag:14, landing_occurrence_begin:11, landing_occurrence_end:42, tes_val:"", }
,{tesf:"リンク", tess:"空上", fighter_id:1030, skill_genre:10900, begin:14, end:40, time:59, base_damage:13, landing_lag:14, landing_occurrence_begin:11, landing_occurrence_end:42, persistence_num:1, tes_val:"持続", }
,{tesf:"リンク", tess:"空下", fighter_id:1030, skill_genre:10902, begin:14, end:19, time:79, base_damage:18, landing_lag:19, landing_occurrence_begin:10, landing_occurrence_end:64, tes_val:"", }
,{tesf:"リンク", tess:"空下", fighter_id:1030, skill_genre:10902, begin:20, end:64, time:79, base_damage:15, landing_lag:19, landing_occurrence_begin:10, landing_occurrence_end:64, persistence_num:1, tes_val:"持続", }
,{tesf:"リンク", tess:"空下", fighter_id:1030, skill_genre:10902, begin:20, end:64, time:79, base_damage:11, landing_lag:19, landing_occurrence_begin:10, landing_occurrence_end:64, detail_name:"バウンド" ,tes_val:"バウンド", }
,{tess:"その場投げ", fighter_id:1030, skill_genre:10200, base_damage:0,begin:6, end:7, time:34}
,{tess:"ダッシュ投げ", fighter_id:1030, skill_genre:10201, base_damage:0,begin:9, end:10, time:42}
,{tess:"ふりむき投げ", fighter_id:1030, skill_genre:10202, base_damage:0,begin:10, end:11, time:37}

, {tesf:"サムス", tess:"弱攻撃", fighter_id:1040, skill_genre:10300, begin:3, end:4, time:17, base_damage:3, alias:"弱1", tes_val:"弱1", }
,{tesf:"サムス", tess:"弱攻撃", fighter_id:1040, skill_genre:10300, begin:6, end:9, time:29, base_damage:8, alias:"弱2", tes_val:"弱2", }
,{tesf:"サムス", tess:"ダッシュ攻撃", fighter_id:1040, skill_genre:10400, begin:8, end:9, time:41, base_damage:10, persistence_num:0, tes_val:"始", }
,{tesf:"サムス", tess:"ダッシュ攻撃", fighter_id:1040, skill_genre:10400, begin:10, end:13, time:41, base_damage:10, tes_val:"", }
,{tesf:"サムス", tess:"ダッシュ攻撃", fighter_id:1040, skill_genre:10400, begin:14, end:18, time:41, base_damage:6, persistence_num:1, tes_val:"持続", }
,{tesf:"サムス", tess:"横強", fighter_id:1040, skill_genre:10501, begin:8, end:10, time:33, base_damage:11, damage_no:1, shift:"up", tes_val:"上シフト", }
,{tesf:"サムス", tess:"横強", fighter_id:1040, skill_genre:10501, begin:8, end:10, time:33, base_damage:10, damage_no:2, shift:"up", tes_val:"上シフト", }
,{tesf:"サムス", tess:"横強", fighter_id:1040, skill_genre:10501, begin:8, end:10, time:33, base_damage:9, damage_no:3, shift:"up", tes_val:"上シフト", }
,{tesf:"サムス", tess:"横強", fighter_id:1040, skill_genre:10501, begin:8, end:10, time:33, base_damage:10, damage_no:1, tes_val:"無シフト", }
,{tesf:"サムス", tess:"横強", fighter_id:1040, skill_genre:10501, begin:8, end:10, time:33, base_damage:9, damage_no:2, tes_val:"無シフト", }
,{tesf:"サムス", tess:"横強", fighter_id:1040, skill_genre:10501, begin:8, end:10, time:33, base_damage:8, damage_no:3, tes_val:"無シフト", }
,{tesf:"サムス", tess:"横強", fighter_id:1040, skill_genre:10501, begin:8, end:10, time:33, base_damage:11, damage_no:1, shift:"under", tes_val:"下シフト", }
,{tesf:"サムス", tess:"横強", fighter_id:1040, skill_genre:10501, begin:8, end:10, time:33, base_damage:10, damage_no:2, shift:"under", tes_val:"下シフト", }
,{tesf:"サムス", tess:"横強", fighter_id:1040, skill_genre:10501, begin:8, end:10, time:33, base_damage:9, damage_no:3, shift:"under", tes_val:"下シフト", }
,{tesf:"サムス", tess:"上強", fighter_id:1040, skill_genre:10500, begin:15, end:18, time:39, base_damage:13, defend_position:"ground", tes_val:"対地", }
,{tesf:"サムス", tess:"上強", fighter_id:1040, skill_genre:10500, begin:15, end:18, time:39, base_damage:12, defend_position:"air", tes_val:"対空", }
,{tesf:"サムス", tess:"下強", fighter_id:1040, skill_genre:10502, begin:6, end:8, time:44, base_damage:12, tes_val:"", }
,{tesf:"サムス", tess:"横スマッシュ", fighter_id:1040, skill_genre:10601, begin:10, end:11, time:48, base_damage:15, damage_no:1, shift:"up", tes_val:"上シフト", }
,{tesf:"サムス", tess:"横スマッシュ", fighter_id:1040, skill_genre:10601, begin:10, end:11, time:48, base_damage:13, damage_no:2, shift:"up", tes_val:"上シフト", }
,{tesf:"サムス", tess:"横スマッシュ", fighter_id:1040, skill_genre:10601, begin:10, end:11, time:48, base_damage:14, damage_no:1, tes_val:"無シフト", }
,{tesf:"サムス", tess:"横スマッシュ", fighter_id:1040, skill_genre:10601, begin:10, end:11, time:48, base_damage:12, damage_no:2, tes_val:"無シフト", }
,{tesf:"サムス", tess:"横スマッシュ", fighter_id:1040, skill_genre:10601, begin:10, end:11, time:48, base_damage:13.5, damage_no:1, shift:"under", tes_val:"下シフト", }
,{tesf:"サムス", tess:"横スマッシュ", fighter_id:1040, skill_genre:10601, begin:10, end:11, time:48, base_damage:11, damage_no:2, shift:"under", tes_val:"下シフト", }
,{tesf:"サムス", tess:"上スマッシュ", fighter_id:1040, skill_genre:10600, begin:11, end:12, time:56, base_damage:3, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"サムス", tess:"上スマッシュ", fighter_id:1040, skill_genre:10600, begin:15, end:16, time:56, base_damage:3, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"サムス", tess:"上スマッシュ", fighter_id:1040, skill_genre:10600, begin:19, end:20, time:56, base_damage:3, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"サムス", tess:"上スマッシュ", fighter_id:1040, skill_genre:10600, begin:23, end:24, time:56, base_damage:3, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }
,{tesf:"サムス", tess:"上スマッシュ", fighter_id:1040, skill_genre:10600, begin:27, end:28, time:56, base_damage:6, serial_num_str:"5", tes_message:"(連続ヒットする技)", tes_val:"Hit 5", }
,{tesf:"サムス", tess:"下スマッシュ", fighter_id:1040, skill_genre:10602, begin:9, end:10, time:44, base_damage:10, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"サムス", tess:"下スマッシュ", fighter_id:1040, skill_genre:10602, begin:17, end:18, time:44, base_damage:12, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"サムス", tess:"空N", fighter_id:1040, skill_genre:10904, begin:8, end:11, time:45, base_damage:10, landing_lag:9, landing_occurrence_begin:8, landing_occurrence_end:34, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"サムス", tess:"空N", fighter_id:1040, skill_genre:10904, begin:14, end:15, time:45, base_damage:9, landing_lag:9, landing_occurrence_begin:8, landing_occurrence_end:34, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"サムス", tess:"空N", fighter_id:1040, skill_genre:10904, begin:16, end:22, time:45, base_damage:8, landing_lag:9, landing_occurrence_begin:8, landing_occurrence_end:34, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続", }
,{tesf:"サムス", tess:"空前", fighter_id:1040, skill_genre:10901, begin:6, end:7, time:59, base_damage:3, landing_lag:14, landing_occurrence_begin:1, landing_occurrence_end:46, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"サムス", tess:"空前", fighter_id:1040, skill_genre:10901, begin:12, end:13, time:59, base_damage:1.6, landing_lag:14, landing_occurrence_begin:1, landing_occurrence_end:46, serial_num_str:"2-4", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"12-13,18-19, 24-25", tes_val:"Hit 2-4", }
,{tesf:"サムス", tess:"空前", fighter_id:1040, skill_genre:10901, begin:30, end:31, time:59, base_damage:5, landing_lag:14, landing_occurrence_begin:1, landing_occurrence_end:46, serial_num_str:"5", tes_message:"(連続ヒットする技)", tes_val:"Hit 5", }
,{tesf:"サムス", tess:"空後", fighter_id:1040, skill_genre:10903, begin:9, end:10, time:41, base_damage:14, landing_lag:14, landing_occurrence_begin:9, landing_occurrence_end:41, damage_no:1, tes_val:"", }
,{tesf:"サムス", tess:"空後", fighter_id:1040, skill_genre:10903, begin:9, end:10, time:41, base_damage:12, landing_lag:14, landing_occurrence_begin:9, landing_occurrence_end:41, damage_no:2, tes_val:"", }
,{tesf:"サムス", tess:"空後", fighter_id:1040, skill_genre:10903, begin:11, end:14, time:41, base_damage:9, landing_lag:14, landing_occurrence_begin:9, landing_occurrence_end:41, persistence_num:1, tes_val:"持続", }
,{tesf:"サムス", tess:"空上", fighter_id:1040, skill_genre:10900, begin:5, end:5, time:39, base_damage:3, landing_lag:18, landing_occurrence_begin:3, landing_occurrence_end:33, persistence_num:0, tes_val:"始", }
,{tesf:"サムス", tess:"空上", fighter_id:1040, skill_genre:10900, begin:7, end:14, time:39, base_damage:1.3, landing_lag:18, landing_occurrence_begin:3, landing_occurrence_end:33, rehit:3, tes_val:"連", }
,{tesf:"サムス", tess:"空上", fighter_id:1040, skill_genre:10900, begin:16, end:17, time:39, base_damage:4, landing_lag:18, landing_occurrence_begin:3, landing_occurrence_end:33, persistence_num:9, tes_val:"〆", }
,{tesf:"サムス", tess:"空下", fighter_id:1040, skill_genre:10902, begin:17, end:18, time:48, base_damage:10, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:33, persistence_num:0, tes_val:"始", }
,{tesf:"サムス", tess:"空下", fighter_id:1040, skill_genre:10902, begin:19, end:21, time:48, base_damage:14, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:33, tes_val:"メテオ", }
,{tess:"その場投げ", fighter_id:1040, skill_genre:10200, base_damage:0, begin:15, end:22, time:59,detail_name:"うねうね"}
,{tess:"ダッシュ投げ", fighter_id:1040, skill_genre:10201, base_damage:0, begin:17, end:24, time:67,detail_name:"うねうね"}
,{tess:"ふりむき投げ", fighter_id:1040, skill_genre:10202, base_damage:0, begin:18, end:25, time:62,detail_name:"うねうね"}

, {tesf:"ダークサムス", tess:"弱攻撃", fighter_id:1041, skill_genre:10300, begin:3, end:4, time:17, base_damage:3, alias:"弱1", tes_val:"弱1", }
,{tesf:"ダークサムス", tess:"弱攻撃", fighter_id:1041, skill_genre:10300, begin:6, end:9, time:29, base_damage:8, alias:"弱2", tes_val:"弱2", }
,{tesf:"ダークサムス", tess:"ダッシュ攻撃", fighter_id:1041, skill_genre:10400, begin:8, end:9, time:41, base_damage:10, persistence_num:0, tes_val:"始", }
,{tesf:"ダークサムス", tess:"ダッシュ攻撃", fighter_id:1041, skill_genre:10400, begin:10, end:13, time:41, base_damage:10, tes_val:"", }
,{tesf:"ダークサムス", tess:"ダッシュ攻撃", fighter_id:1041, skill_genre:10400, begin:14, end:18, time:41, base_damage:6, persistence_num:1, tes_val:"持続", }
,{tesf:"ダークサムス", tess:"横強", fighter_id:1041, skill_genre:10501, begin:8, end:10, time:33, base_damage:11, damage_no:1, tes_val:"無シフト", }
,{tesf:"ダークサムス", tess:"横強", fighter_id:1041, skill_genre:10501, begin:8, end:10, time:33, base_damage:10, damage_no:2, tes_val:"無シフト", }
,{tesf:"ダークサムス", tess:"横強", fighter_id:1041, skill_genre:10501, begin:8, end:10, time:33, base_damage:9, damage_no:3, tes_val:"無シフト", }
,{tesf:"ダークサムス", tess:"横強", fighter_id:1041, skill_genre:10501, begin:8, end:10, time:33, base_damage:10, damage_no:1, shift:"up", tes_val:"上シフト", }
,{tesf:"ダークサムス", tess:"横強", fighter_id:1041, skill_genre:10501, begin:8, end:10, time:33, base_damage:9, damage_no:2, shift:"up", tes_val:"上シフト", }
,{tesf:"ダークサムス", tess:"横強", fighter_id:1041, skill_genre:10501, begin:8, end:10, time:33, base_damage:8, damage_no:3, shift:"up", tes_val:"上シフト", }
,{tesf:"ダークサムス", tess:"横強", fighter_id:1041, skill_genre:10501, begin:8, end:10, time:33, base_damage:11, damage_no:1, shift:"under", tes_val:"下シフト", }
,{tesf:"ダークサムス", tess:"横強", fighter_id:1041, skill_genre:10501, begin:8, end:10, time:33, base_damage:10, damage_no:2, shift:"under", tes_val:"下シフト", }
,{tesf:"ダークサムス", tess:"横強", fighter_id:1041, skill_genre:10501, begin:8, end:10, time:33, base_damage:9, damage_no:3, shift:"under", tes_val:"下シフト", }
,{tesf:"ダークサムス", tess:"上強", fighter_id:1041, skill_genre:10500, begin:15, end:18, time:39, base_damage:13, defend_position:"ground", tes_val:"対地", }
,{tesf:"ダークサムス", tess:"上強", fighter_id:1041, skill_genre:10500, begin:15, end:18, time:39, base_damage:12, defend_position:"air", tes_val:"対空", }
,{tesf:"ダークサムス", tess:"下強", fighter_id:1041, skill_genre:10502, begin:6, end:8, time:44, base_damage:12, tes_val:"", }
,{tesf:"ダークサムス", tess:"横スマッシュ", fighter_id:1041, skill_genre:10601, begin:10, end:11, time:48, base_damage:15, damage_no:1, shift:"up", tes_val:"上シフト", }
,{tesf:"ダークサムス", tess:"横スマッシュ", fighter_id:1041, skill_genre:10601, begin:10, end:11, time:48, base_damage:13, damage_no:2, shift:"up", tes_val:"上シフト", }
,{tesf:"ダークサムス", tess:"横スマッシュ", fighter_id:1041, skill_genre:10601, begin:10, end:11, time:48, base_damage:14, damage_no:1, tes_val:"無シフト", }
,{tesf:"ダークサムス", tess:"横スマッシュ", fighter_id:1041, skill_genre:10601, begin:10, end:11, time:48, base_damage:12, damage_no:2, tes_val:"無シフト", }
,{tesf:"ダークサムス", tess:"横スマッシュ", fighter_id:1041, skill_genre:10601, begin:10, end:11, time:48, base_damage:13.5, damage_no:1, shift:"under", tes_val:"下シフト", }
,{tesf:"ダークサムス", tess:"横スマッシュ", fighter_id:1041, skill_genre:10601, begin:10, end:11, time:48, base_damage:11, damage_no:2, shift:"under", tes_val:"下シフト", }
,{tesf:"ダークサムス", tess:"上スマッシュ", fighter_id:1041, skill_genre:10600, begin:11, end:12, time:56, base_damage:3, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ダークサムス", tess:"上スマッシュ", fighter_id:1041, skill_genre:10600, begin:15, end:16, time:56, base_damage:3, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ダークサムス", tess:"上スマッシュ", fighter_id:1041, skill_genre:10600, begin:19, end:20, time:56, base_damage:3, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"ダークサムス", tess:"上スマッシュ", fighter_id:1041, skill_genre:10600, begin:23, end:24, time:56, base_damage:3, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }
,{tesf:"ダークサムス", tess:"上スマッシュ", fighter_id:1041, skill_genre:10600, begin:27, end:28, time:56, base_damage:6, serial_num_str:"5", tes_message:"(連続ヒットする技)", tes_val:"Hit 5", }
,{tesf:"ダークサムス", tess:"下スマッシュ", fighter_id:1041, skill_genre:10602, begin:9, end:10, time:44, base_damage:10, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ダークサムス", tess:"下スマッシュ", fighter_id:1041, skill_genre:10602, begin:17, end:18, time:44, base_damage:12, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"ダークサムス", tess:"空N", fighter_id:1041, skill_genre:10904, begin:8, end:11, time:45, base_damage:10, landing_lag:9, landing_occurrence_begin:8, landing_occurrence_end:34, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ダークサムス", tess:"空N", fighter_id:1041, skill_genre:10904, begin:14, end:15, time:45, base_damage:9, landing_lag:9, landing_occurrence_begin:8, landing_occurrence_end:34, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ダークサムス", tess:"空N", fighter_id:1041, skill_genre:10904, begin:16, end:22, time:45, base_damage:8, landing_lag:9, landing_occurrence_begin:8, landing_occurrence_end:34, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続", }
,{tesf:"ダークサムス", tess:"空前", fighter_id:1041, skill_genre:10901, begin:6, end:7, time:59, base_damage:3, landing_lag:14, landing_occurrence_begin:1, landing_occurrence_end:46, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ダークサムス", tess:"空前", fighter_id:1041, skill_genre:10901, begin:12, end:13, time:59, base_damage:1.6, landing_lag:14, landing_occurrence_begin:1, landing_occurrence_end:46, serial_num_str:"2-4", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"12-13,18-19, 24-25", tes_val:"Hit 2-4", }
,{tesf:"ダークサムス", tess:"空前", fighter_id:1041, skill_genre:10901, begin:30, end:31, time:59, base_damage:5, landing_lag:14, landing_occurrence_begin:1, landing_occurrence_end:46, serial_num_str:"5", tes_message:"(連続ヒットする技)", tes_val:"Hit 5", }
,{tesf:"ダークサムス", tess:"空後", fighter_id:1041, skill_genre:10903, begin:9, end:10, time:41, base_damage:14, landing_lag:14, landing_occurrence_begin:9, landing_occurrence_end:41, damage_no:1, tes_val:"", }
,{tesf:"ダークサムス", tess:"空後", fighter_id:1041, skill_genre:10903, begin:9, end:10, time:41, base_damage:12, landing_lag:14, landing_occurrence_begin:9, landing_occurrence_end:41, damage_no:2, tes_val:"", }
,{tesf:"ダークサムス", tess:"空後", fighter_id:1041, skill_genre:10903, begin:11, end:14, time:41, base_damage:9, landing_lag:14, landing_occurrence_begin:9, landing_occurrence_end:41, persistence_num:1, tes_val:"持続", }
,{tesf:"ダークサムス", tess:"空上", fighter_id:1041, skill_genre:10900, begin:5, end:5, time:39, base_damage:3, landing_lag:18, landing_occurrence_begin:3, landing_occurrence_end:33, persistence_num:0, tes_val:"始", }
,{tesf:"ダークサムス", tess:"空上", fighter_id:1041, skill_genre:10900, begin:7, end:14, time:39, base_damage:1.3, landing_lag:18, landing_occurrence_begin:3, landing_occurrence_end:33, rehit:3, tes_val:"連", }
,{tesf:"ダークサムス", tess:"空上", fighter_id:1041, skill_genre:10900, begin:16, end:17, time:39, base_damage:4, landing_lag:18, landing_occurrence_begin:3, landing_occurrence_end:33, persistence_num:9, tes_val:"〆", }
,{tesf:"ダークサムス", tess:"空下", fighter_id:1041, skill_genre:10902, begin:17, end:18, time:48, base_damage:10, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:33, persistence_num:0, tes_val:"始", }
,{tesf:"ダークサムス", tess:"空下", fighter_id:1041, skill_genre:10902, begin:19, end:21, time:48, base_damage:14, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:33, tes_val:"メテオ", }
,{tess:"その場投げ", fighter_id:1041, skill_genre:10200, base_damage:0, begin:15, end:22, time:59,detail_name:"うねうね"}
,{tess:"ダッシュ投げ", fighter_id:1041, skill_genre:10201, base_damage:0, begin:17, end:24, time:67,detail_name:"うねうね"}
,{tess:"ふりむき投げ", fighter_id:1041, skill_genre:10202, base_damage:0, begin:18, end:25, time:62,detail_name:"うねうね"}

, {tesf:"ヨッシー", tess:"弱攻撃", fighter_id:1050, skill_genre:10300, begin:3, end:3, time:17, base_damage:3, alias:"弱1", tes_val:"弱1", }
,{tesf:"ヨッシー", tess:"弱攻撃", fighter_id:1050, skill_genre:10300, begin:3, end:4, time:19, base_damage:4, alias:"弱2", tes_val:"弱2", }
,{tesf:"ヨッシー", tess:"ダッシュ攻撃", fighter_id:1050, skill_genre:10400, begin:10, end:12, time:40, base_damage:11, tes_val:"", }
,{tesf:"ヨッシー", tess:"ダッシュ攻撃", fighter_id:1050, skill_genre:10400, begin:13, end:20, time:40, base_damage:8, persistence_num:1, tes_val:"持続", }
,{tesf:"ヨッシー", tess:"横強", fighter_id:1050, skill_genre:10501, begin:5, end:7, time:29, base_damage:8, shift:"all", tes_val:"全シフト", }
,{tesf:"ヨッシー", tess:"上強", fighter_id:1050, skill_genre:10500, begin:8, end:15, time:31, base_damage:7, tes_val:"", }
,{tesf:"ヨッシー", tess:"下強", fighter_id:1050, skill_genre:10502, begin:8, end:10, time:23, base_damage:5, damage_no:1, tes_val:"", }
,{tesf:"ヨッシー", tess:"下強", fighter_id:1050, skill_genre:10502, begin:8, end:10, time:23, base_damage:4.5, damage_no:2, tes_val:"", }
,{tesf:"ヨッシー", tess:"下強", fighter_id:1050, skill_genre:10502, begin:8, end:10, time:23, base_damage:4, damage_no:3, tes_val:"", }
,{tesf:"ヨッシー", tess:"横スマッシュ", fighter_id:1050, skill_genre:10601, begin:14, end:16, time:52, base_damage:15.5, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"ヨッシー", tess:"横スマッシュ", fighter_id:1050, skill_genre:10601, begin:14, end:16, time:52, base_damage:14, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"ヨッシー", tess:"上スマッシュ", fighter_id:1050, skill_genre:10600, begin:11, end:13, time:46, base_damage:14, tes_val:"", }
,{tesf:"ヨッシー", tess:"上スマッシュ", fighter_id:1050, skill_genre:10600, begin:14, end:16, time:46, base_damage:12, persistence_num:1, tes_val:"持続", }
,{tesf:"ヨッシー", tess:"下スマッシュ", fighter_id:1050, skill_genre:10602, begin:7, end:8, time:49, base_damage:12, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ヨッシー", tess:"下スマッシュ", fighter_id:1050, skill_genre:10602, begin:7, end:8, time:49, base_damage:10, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ヨッシー", tess:"下スマッシュ", fighter_id:1050, skill_genre:10602, begin:22, end:23, time:49, base_damage:12, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ヨッシー", tess:"下スマッシュ", fighter_id:1050, skill_genre:10602, begin:22, end:23, time:49, base_damage:10, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"ヨッシー", tess:"空N", fighter_id:1050, skill_genre:10904, begin:3, end:4, time:44, base_damage:10, landing_lag:7, landing_occurrence_begin:3, landing_occurrence_end:37, tes_val:"", }
,{tesf:"ヨッシー", tess:"空N", fighter_id:1050, skill_genre:10904, begin:5, end:11, time:44, base_damage:7, landing_lag:7, landing_occurrence_begin:3, landing_occurrence_end:37, persistence_num:1, tes_val:"持続1", }
,{tesf:"ヨッシー", tess:"空N", fighter_id:1050, skill_genre:10904, begin:12, end:25, time:44, base_damage:5, landing_lag:7, landing_occurrence_begin:3, landing_occurrence_end:37, persistence_num:2, tes_val:"持続2", }
,{tesf:"ヨッシー", tess:"空前", fighter_id:1050, skill_genre:10901, begin:16, end:20, time:43, base_damage:15, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:39, damage_no:1, tes_val:"", }
,{tesf:"ヨッシー", tess:"空前", fighter_id:1050, skill_genre:10901, begin:16, end:20, time:43, base_damage:14, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:39, damage_no:2, tes_val:"", }
,{tesf:"ヨッシー", tess:"空後", fighter_id:1050, skill_genre:10903, begin:11, end:11, time:55, base_damage:3.5, landing_lag:11, landing_occurrence_begin:6, landing_occurrence_end:43, tes_val:"HIt 1", }
,{tesf:"ヨッシー", tess:"空後", fighter_id:1050, skill_genre:10903, begin:14, end:14, time:55, base_damage:3.5, landing_lag:11, landing_occurrence_begin:6, landing_occurrence_end:43, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ヨッシー", tess:"空後", fighter_id:1050, skill_genre:10903, begin:18, end:19, time:55, base_damage:5.5, landing_lag:11, landing_occurrence_begin:6, landing_occurrence_end:43, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"ヨッシー", tess:"空上", fighter_id:1050, skill_genre:10900, begin:5, end:6, time:36, base_damage:12, landing_lag:8, landing_occurrence_begin:5, landing_occurrence_end:30, tes_val:"", }
,{tesf:"ヨッシー", tess:"空下", fighter_id:1050, skill_genre:10902, begin:16, end:16, time:56, base_damage:2.3, landing_lag:17, landing_occurrence_begin:14, landing_occurrence_end:49, serial_num_str:"1-6", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"16, 18, 20, 22, 24, 26", tes_val:"Hit 1-6", }
,{tesf:"ヨッシー", tess:"空下", fighter_id:1050, skill_genre:10902, begin:28, end:28, time:56, base_damage:1.9, landing_lag:17, landing_occurrence_begin:14, landing_occurrence_end:49, serial_num_str:"7-12", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"28, 30, 32, 34, 36, 38", tes_val:"Hit 7-12", }
,{tesf:"ヨッシー", tess:"空下", fighter_id:1050, skill_genre:10902, begin:41, end:41, time:56, base_damage:2.8, landing_lag:17, landing_occurrence_begin:14, landing_occurrence_end:49, serial_num_str:"13", tes_message:"(連続ヒットする技)", tes_val:"Hit 13", }
,{tesf:"ヨッシー", tess:"空下", fighter_id:1050, skill_genre:10902, begin:1, end:1, time:56, base_damage:1, landing_lag:17, landing_occurrence_begin:14, landing_occurrence_end:49, is_landing_attack:true, defend_position:"ground_only", tes_val:"着地, 対地のみ", }

,{tess:"その場投げ", fighter_id:1050 , skill_genre:10200, base_damage:0,begin:14, end:21, time:48,detail_name:"ベロ"}
,{tess:"ダッシュ投げ", fighter_id:1050 , skill_genre:10201, base_damage:0,begin:16, end:23, time:56,detail_name:"ベロ"}
,{tess:"ふりむき投げ", fighter_id:1050 , skill_genre:10202, base_damage:0,begin:17, end:24, time:51,detail_name:"ベロ"}

, {tesf:"カービィ", tess:"弱攻撃", fighter_id:1060, skill_genre:10300, begin:2, end:2, time:14, base_damage:1.8, alias:"弱1", tes_val:"弱1", }
,{tesf:"カービィ", tess:"弱攻撃", fighter_id:1060, skill_genre:10300, begin:2, end:2, time:4, base_damage:1.8, alias:"弱1", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", cancel:"empty_attack_again"}
,{tesf:"カービィ", tess:"弱攻撃", fighter_id:1060, skill_genre:10300, begin:3, end:3, time:15, base_damage:1.6, alias:"弱2", tes_val:"弱2", }
,{tesf:"カービィ", tess:"弱攻撃", fighter_id:1060, skill_genre:10300, begin:3, end:3, time:4, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"カービィ", tess:"弱攻撃", fighter_id:1060, skill_genre:10300, begin:3, end:3, time:17, base_damage:0.2, alias:"百裂", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 5, 7, 9, 11, 13, 15, 17", tes_val:"百裂, 連", correction:7}
,{tesf:"カービィ", tess:"弱攻撃", fighter_id:1060, skill_genre:10300, begin:3, end:4, time:39, base_damage:3, alias:"百裂〆", tes_val:"百裂, 〆", }
,{tesf:"カービィ", tess:"ダッシュ攻撃", fighter_id:1060, skill_genre:10400, begin:9, end:17, time:59, base_damage:12, tes_val:"", }
,{tesf:"カービィ", tess:"ダッシュ攻撃", fighter_id:1060, skill_genre:10400, begin:18, end:26, time:59, base_damage:9, persistence_num:1, tes_val:"持続1", }
,{tesf:"カービィ", tess:"ダッシュ攻撃", fighter_id:1060, skill_genre:10400, begin:27, end:34, time:59, base_damage:6, persistence_num:2, tes_val:"持続2", }
,{tesf:"カービィ", tess:"横強", fighter_id:1060, skill_genre:10501, begin:5, end:8, time:23, base_damage:8, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"カービィ", tess:"横強", fighter_id:1060, skill_genre:10501, begin:5, end:8, time:23, base_damage:7, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"カービィ", tess:"上強", fighter_id:1060, skill_genre:10500, begin:4, end:5, time:20, base_damage:5, tes_val:"", }
,{tesf:"カービィ", tess:"上強", fighter_id:1060, skill_genre:10500, begin:6, end:10, time:20, base_damage:4, persistence_num:1, tes_val:"持続", }
,{tesf:"カービィ", tess:"下強", fighter_id:1060, skill_genre:10502, begin:4, end:6, time:20, base_damage:6, tes_val:"", }
,{tesf:"カービィ", tess:"横スマッシュ", fighter_id:1060, skill_genre:10601, begin:13, end:15, time:47, base_damage:15, shift:"all", tes_val:"全シフト", }
,{tesf:"カービィ", tess:"横スマッシュ", fighter_id:1060, skill_genre:10601, begin:16, end:19, time:47, base_damage:11, persistence_num:1, shift:"all", tes_val:"全シフト, 持続", }
,{tesf:"カービィ", tess:"上スマッシュ", fighter_id:1060, skill_genre:10600, begin:12, end:14, time:45, base_damage:15, damage_no:1, tes_val:"", }
,{tesf:"カービィ", tess:"上スマッシュ", fighter_id:1060, skill_genre:10600, begin:12, end:14, time:45, base_damage:14, damage_no:2, tes_val:"", }
,{tesf:"カービィ", tess:"上スマッシュ", fighter_id:1060, skill_genre:10600, begin:15, end:16, time:45, base_damage:14, damage_no:1, persistence_num:1, tes_val:"持続1", }
,{tesf:"カービィ", tess:"上スマッシュ", fighter_id:1060, skill_genre:10600, begin:15, end:16, time:45, base_damage:13, damage_no:2, persistence_num:1, tes_val:"持続1", }
,{tesf:"カービィ", tess:"上スマッシュ", fighter_id:1060, skill_genre:10600, begin:17, end:17, time:45, base_damage:13, damage_no:1, persistence_num:2, tes_val:"持続2", }
,{tesf:"カービィ", tess:"上スマッシュ", fighter_id:1060, skill_genre:10600, begin:17, end:17, time:45, base_damage:12, damage_no:2, persistence_num:2, tes_val:"持続2", }
,{tesf:"カービィ", tess:"下スマッシュ", fighter_id:1060, skill_genre:10602, begin:10, end:14, time:53, base_damage:14, tes_val:"", }
,{tesf:"カービィ", tess:"下スマッシュ", fighter_id:1060, skill_genre:10602, begin:15, end:22, time:53, base_damage:10, persistence_num:1, tes_val:"持続", }
, {tesf:"カービィ", tess:"空N", fighter_id:1060, skill_genre:10904, begin:8, end:9, time:54, base_damage:10, landing_lag:6, landing_occurrence_begin:5, landing_occurrence_end:48, tes_val:"", }
,{tesf:"カービィ", tess:"空N", fighter_id:1060, skill_genre:10904, begin:10, end:13, time:54, base_damage:8, landing_lag:6, landing_occurrence_begin:5, landing_occurrence_end:48, persistence_num:1, tes_val:"持続1", }
,{tesf:"カービィ", tess:"空N", fighter_id:1060, skill_genre:10904, begin:14, end:18, time:54, base_damage:6, landing_lag:6, landing_occurrence_begin:5, landing_occurrence_end:48, persistence_num:2, tes_val:"持続2", }
,{tesf:"カービィ", tess:"空N", fighter_id:1060, skill_genre:10904, begin:19, end:32, time:54, base_damage:4, landing_lag:6, landing_occurrence_begin:5, landing_occurrence_end:48, persistence_num:3, tes_val:"持続3", }
,{tesf:"カービィ", tess:"空前", fighter_id:1060, skill_genre:10901, begin:10, end:11, time:47, base_damage:4, landing_lag:8, landing_occurrence_begin:10, landing_occurrence_end:40, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"カービィ", tess:"空前", fighter_id:1060, skill_genre:10901, begin:17, end:18, time:47, base_damage:3, landing_lag:8, landing_occurrence_begin:10, landing_occurrence_end:40, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"カービィ", tess:"空前", fighter_id:1060, skill_genre:10901, begin:25, end:27, time:47, base_damage:5, landing_lag:8, landing_occurrence_begin:10, landing_occurrence_end:40, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"カービィ", tess:"空後", fighter_id:1060, skill_genre:10903, begin:6, end:8, time:40, base_damage:13, landing_lag:10, landing_occurrence_begin:3, landing_occurrence_end:31, tes_val:"", }
,{tesf:"カービィ", tess:"空後", fighter_id:1060, skill_genre:10903, begin:9, end:12, time:40, base_damage:8, landing_lag:10, landing_occurrence_begin:3, landing_occurrence_end:31, persistence_num:1, tes_val:"持続", }
,{tesf:"カービィ", tess:"空上", fighter_id:1060, skill_genre:10900, begin:8, end:13, time:37, base_damage:10, landing_lag:7, landing_occurrence_begin:8, landing_occurrence_end:19, tes_val:"", }
,{tesf:"カービィ", tess:"空下", fighter_id:1060, skill_genre:10902, begin:18, end:19, time:54, base_damage:1.3, landing_lag:16, landing_occurrence_begin:18, landing_occurrence_end:47, serial_num_str:"1-5", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"18-19, 21-22, 24-25, 27-28, 30-31", tes_val:"Hit 1-5", }
,{tesf:"カービィ", tess:"空下", fighter_id:1060, skill_genre:10902, begin:34, end:34, time:54, base_damage:2, landing_lag:16, landing_occurrence_begin:18, landing_occurrence_end:47, serial_num_str:"6", tes_message:"(連続ヒットする技)", tes_val:"Hit 6", }
,{tesf:"カービィ", tess:"空下", fighter_id:1060, skill_genre:10902, begin:1, end:2, time:54, base_damage:2, landing_lag:16, landing_occurrence_begin:18, landing_occurrence_end:47, is_landing_attack:true, tes_val:"着地", }
,{tess:"その場投げ", fighter_id:1060 , skill_genre:10200, base_damage:0,begin:6, end:7, time:33}
,{tess:"ダッシュ投げ", fighter_id:1060 , skill_genre:10201, base_damage:0,begin:9, end:10, time:41}
,{tess:"ふりむき投げ", fighter_id:1060 , skill_genre:10202, base_damage:0,begin:10, end:11, time:36}


, {tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:17, base_damage:1.4, damage_no:1, alias:"弱1", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:6, base_damage:1.4, damage_no:1, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:17, base_damage:1.2, damage_no:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:6, base_damage:1.2, damage_no:2, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:17, base_damage:1, damage_no:3, alias:"弱1", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:6, base_damage:1, damage_no:3, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"ダッシュ攻撃", fighter_id:1080, skill_genre:10400, begin:6, end:8, time:35, base_damage:11, tes_val:"", correction:1.8}
,{tesf:"ピカチュウ", tess:"ダッシュ攻撃", fighter_id:1080, skill_genre:10400, begin:9, end:12, time:35, base_damage:6, persistence_num:1, tes_val:"持続", correction:1.8}
,{tesf:"ピカチュウ", tess:"横強", fighter_id:1080, skill_genre:10501, begin:6, end:8, time:29, base_damage:10, shift:"up", tes_val:"上シフト", }
,{tesf:"ピカチュウ", tess:"横強", fighter_id:1080, skill_genre:10501, begin:6, end:8, time:29, base_damage:9, tes_val:"無シフト", }
,{tesf:"ピカチュウ", tess:"横強", fighter_id:1080, skill_genre:10501, begin:6, end:8, time:29, base_damage:8, shift:"under", tes_val:"下シフト", }
,{tesf:"ピカチュウ", tess:"上強", fighter_id:1080, skill_genre:10500, begin:7, end:13, time:26, base_damage:5, tes_val:"", }
,{tesf:"ピカチュウ", tess:"下強", fighter_id:1080, skill_genre:10502, begin:7, end:8, time:18, base_damage:6, tes_val:"", }
,{tesf:"ピカチュウ", tess:"横スマッシュ", fighter_id:1080, skill_genre:10601, begin:15, end:16, time:53, base_damage:15, persistence_num:0, tes_val:"始", }
,{tesf:"ピカチュウ", tess:"横スマッシュ", fighter_id:1080, skill_genre:10601, begin:17, end:19, time:53, base_damage:18, tes_val:"", }
,{tesf:"ピカチュウ", tess:"横スマッシュ", fighter_id:1080, skill_genre:10601, begin:20, end:29, time:53, base_damage:12, persistence_num:1, tes_val:"持続", }
,{tesf:"ピカチュウ", tess:"上スマッシュ", fighter_id:1080, skill_genre:10600, begin:10, end:12, time:44, base_damage:14, damage_no:1, tes_val:"", }
,{tesf:"ピカチュウ", tess:"上スマッシュ", fighter_id:1080, skill_genre:10600, begin:10, end:12, time:44, base_damage:13, damage_no:2, tes_val:"", }
,{tesf:"ピカチュウ", tess:"上スマッシュ", fighter_id:1080, skill_genre:10600, begin:13, end:14, time:44, base_damage:11, persistence_num:1, tes_val:"持続1", }
,{tesf:"ピカチュウ", tess:"上スマッシュ", fighter_id:1080, skill_genre:10600, begin:15, end:17, time:44, base_damage:7, persistence_num:2, tes_val:"持続2", }
,{tesf:"ピカチュウ", tess:"下スマッシュ", fighter_id:1080, skill_genre:10602, begin:8, end:9, time:65, base_damage:2, serial_num_str:"1-5", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"8-9, 11-12, 14-15, 17-18, 20-21", tes_val:"Hit 1-5", not_attack_view:"serial" }
,{tesf:"ピカチュウ", tess:"下スマッシュ", fighter_id:1080, skill_genre:10602, begin:23, end:23, time:65, base_damage:3, serial_num_str:"6", tes_message:"(連続ヒットする技)", tes_val:"Hit 6", }
, {tesf:"ピカチュウ", tess:"空N", fighter_id:1080, skill_genre:10904, begin:3, end:6, time:38, base_damage:1.8, landing_lag:9, landing_occurrence_begin:1, landing_occurrence_end:36, serial_num_str:"1-3", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"3-6, 9-12, 15-18", tes_val:"Hit 1-3", }
,{tesf:"ピカチュウ", tess:"空N", fighter_id:1080, skill_genre:10904, begin:21, end:22, time:38, base_damage:3.5, landing_lag:9, landing_occurrence_begin:1, landing_occurrence_end:36, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }
,{tesf:"ピカチュウ", tess:"空前", fighter_id:1080, skill_genre:10901, begin:11, end:25, time:41, base_damage:1.4, landing_lag:12, landing_occurrence_begin:5, landing_occurrence_end:31, rehit:3, tes_val:"連", }
,{tesf:"ピカチュウ", tess:"空前", fighter_id:1080, skill_genre:10901, begin:27, end:27, time:41, base_damage:4.8, landing_lag:12, landing_occurrence_begin:5, landing_occurrence_end:31, persistence_num:9, tes_val:"〆", }
,{tesf:"ピカチュウ", tess:"空後", fighter_id:1080, skill_genre:10903, begin:4, end:5, time:43, base_damage:1, landing_lag:18, landing_occurrence_begin:4, landing_occurrence_end:37, serial_num_str:"1-5", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"4-5, 8-9, 12-13,16-17, 20-21", tes_val:"Hit 1-5", }
,{tesf:"ピカチュウ", tess:"空後", fighter_id:1080, skill_genre:10903, begin:24, end:25, time:43, base_damage:3.6, landing_lag:18, landing_occurrence_begin:4, landing_occurrence_end:37, serial_num_str:"6", tes_message:"(連続ヒットする技)", tes_val:"Hit 6", }
,{tesf:"ピカチュウ", tess:"空後", fighter_id:1080, skill_genre:10903, begin:1, end:2, time:43, base_damage:4, landing_lag:18, landing_occurrence_begin:4, landing_occurrence_end:37, is_landing_attack:true, tes_val:"着地", }
,{tesf:"ピカチュウ", tess:"空上", fighter_id:1080, skill_genre:10900, begin:4, end:6, time:26, base_damage:6, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:17, damage_no:1, tes_val:"", }
,{tesf:"ピカチュウ", tess:"空上", fighter_id:1080, skill_genre:10900, begin:4, end:6, time:26, base_damage:5, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:17, damage_no:2, tes_val:"", }
,{tesf:"ピカチュウ", tess:"空上", fighter_id:1080, skill_genre:10900, begin:7, end:8, time:26, base_damage:4, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:17, persistence_num:1, tes_val:"持続", }
,{tesf:"ピカチュウ", tess:"空下", fighter_id:1080, skill_genre:10902, begin:14, end:15, time:47, base_damage:13, landing_lag:22, landing_occurrence_begin:1, landing_occurrence_end:38, tes_val:"メテオ", }
,{tesf:"ピカチュウ", tess:"空下", fighter_id:1080, skill_genre:10902, begin:16, end:26, time:47, base_damage:12, landing_lag:22, landing_occurrence_begin:1, landing_occurrence_end:38, persistence_num:1, tes_val:"持続", }
,{tesf:"ピカチュウ", tess:"空下", fighter_id:1080, skill_genre:10902, begin:1, end:2, time:47, base_damage:4, landing_lag:22, landing_occurrence_begin:1, landing_occurrence_end:38, is_landing_attack:true, defend_position:"ground_only", tes_val:"着地, 対地のみ", }
,{tess:"その場投げ", fighter_id:1080 , skill_genre:10200, base_damage:0,begin:7, end:8, time:36}
,{tess:"ダッシュ投げ", fighter_id:1080 , skill_genre:10201, base_damage:0,begin:11, end:12, time:44}
,{tess:"ふりむき投げ", fighter_id:1080 , skill_genre:10202, base_damage:0,begin:12, end:13, time:39}

, {tesf:"フォックス", tess:"弱攻撃", fighter_id:1070, skill_genre:10300, begin:2, end:2, time:17, base_damage:1.8, alias:"弱1", tes_val:"弱1", }
,{tesf:"フォックス", tess:"弱攻撃", fighter_id:1070, skill_genre:10300, begin:2, end:2, time:5, base_damage:1.8, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"フォックス", tess:"弱攻撃", fighter_id:1070, skill_genre:10300, begin:2, end:2, time:20, base_damage:1, alias:"弱2", tes_val:"弱2", }
,{tesf:"フォックス", tess:"弱攻撃", fighter_id:1070, skill_genre:10300, begin:2, end:2, time:2, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"フォックス", tess:"弱攻撃", fighter_id:1070, skill_genre:10300, begin:3, end:3, time:12, base_damage:0.6, alias:"百裂", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 5, 7, 9, 11", tes_val:"百裂, 連", correction:6}
,{tesf:"フォックス", tess:"弱攻撃", fighter_id:1070, skill_genre:10300, begin:3, end:4, time:38, base_damage:2, alias:"百裂〆", tes_val:"百裂, 〆", }
,{tesf:"フォックス", tess:"ダッシュ攻撃", fighter_id:1070, skill_genre:10400, begin:4, end:7, time:31, base_damage:6, tes_val:"", correction:1.8}
,{tesf:"フォックス", tess:"ダッシュ攻撃", fighter_id:1070, skill_genre:10400, begin:8, end:15, time:31, base_damage:4, persistence_num:1, tes_val:"持続", correction:1.8}
,{tesf:"フォックス", tess:"横強", fighter_id:1070, skill_genre:10501, begin:6, end:8, time:23, base_damage:7, shift:"up", tes_val:"上シフト", }
,{tesf:"フォックス", tess:"横強", fighter_id:1070, skill_genre:10501, begin:6, end:8, time:23, base_damage:6, tes_val:"無シフト", }
,{tesf:"フォックス", tess:"横強", fighter_id:1070, skill_genre:10501, begin:6, end:8, time:23, base_damage:7, shift:"under", tes_val:"下シフト", }
,{tesf:"フォックス", tess:"上強", fighter_id:1070, skill_genre:10500, begin:3, end:5, time:27, base_damage:8, damage_no:1, tes_val:"", }
,{tesf:"フォックス", tess:"上強", fighter_id:1070, skill_genre:10500, begin:3, end:5, time:27, base_damage:7, damage_no:2, tes_val:"", }
,{tesf:"フォックス", tess:"上強", fighter_id:1070, skill_genre:10500, begin:3, end:5, time:27, base_damage:6, damage_no:3, tes_val:"", }
,{tesf:"フォックス", tess:"上強", fighter_id:1070, skill_genre:10500, begin:6, end:7, time:27, base_damage:6, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"フォックス", tess:"上強", fighter_id:1070, skill_genre:10500, begin:6, end:7, time:27, base_damage:5, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"フォックス", tess:"下強", fighter_id:1070, skill_genre:10502, begin:7, end:8, time:27, base_damage:8, damage_no:1, tes_val:"", }
,{tesf:"フォックス", tess:"下強", fighter_id:1070, skill_genre:10502, begin:7, end:8, time:27, base_damage:7, damage_no:2, tes_val:"", }
,{tesf:"フォックス", tess:"横スマッシュ", fighter_id:1070, skill_genre:10601, begin:13, end:14, time:45, base_damage:14, tes_val:"", }
,{tesf:"フォックス", tess:"横スマッシュ", fighter_id:1070, skill_genre:10601, begin:15, end:16, time:45, base_damage:11, persistence_num:1, tes_val:"持続", }
,{tesf:"フォックス", tess:"上スマッシュ", fighter_id:1070, skill_genre:10600, begin:8, end:9, time:55, base_damage:16, tes_val:"", }
,{tesf:"フォックス", tess:"上スマッシュ", fighter_id:1070, skill_genre:10600, begin:10, end:11, time:55, base_damage:11, persistence_num:1, tes_val:"持続", }
,{tesf:"フォックス", tess:"下スマッシュ", fighter_id:1070, skill_genre:10602, begin:6, end:7, time:52, base_damage:14, damage_no:1, tes_val:"", }
,{tesf:"フォックス", tess:"下スマッシュ", fighter_id:1070, skill_genre:10602, begin:6, end:7, time:52, base_damage:12, damage_no:2, tes_val:"", }
, {tesf:"フォックス", tess:"空N", fighter_id:1070, skill_genre:10904, begin:4, end:6, time:38, base_damage:9, landing_lag:7, landing_occurrence_begin:4, landing_occurrence_end:31, tes_val:"", }
,{tesf:"フォックス", tess:"空N", fighter_id:1070, skill_genre:10904, begin:7, end:23, time:38, base_damage:6, landing_lag:7, landing_occurrence_begin:4, landing_occurrence_end:31, persistence_num:1, tes_val:"持続", }
,{tesf:"フォックス", tess:"空前", fighter_id:1070, skill_genre:10901, begin:7, end:8, time:43, base_damage:1.8, landing_lag:18, landing_occurrence_begin:1, landing_occurrence_end:44, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"フォックス", tess:"空前", fighter_id:1070, skill_genre:10901, begin:11, end:12, time:43, base_damage:1.3, landing_lag:18, landing_occurrence_begin:1, landing_occurrence_end:44, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"フォックス", tess:"空前", fighter_id:1070, skill_genre:10901, begin:16, end:17, time:43, base_damage:1.8, landing_lag:18, landing_occurrence_begin:1, landing_occurrence_end:44, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"フォックス", tess:"空前", fighter_id:1070, skill_genre:10901, begin:21, end:22, time:43, base_damage:2.8, landing_lag:18, landing_occurrence_begin:1, landing_occurrence_end:44, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }
,{tesf:"フォックス", tess:"空前", fighter_id:1070, skill_genre:10901, begin:26, end:27, time:43, base_damage:4.8, landing_lag:18, landing_occurrence_begin:1, landing_occurrence_end:44, serial_num_str:"5", tes_message:"(連続ヒットする技)", tes_val:"Hit 5", }
,{tesf:"フォックス", tess:"空前", fighter_id:1070, skill_genre:10901, begin:1, end:1, time:43, base_damage:2, landing_lag:18, landing_occurrence_begin:1, landing_occurrence_end:44, is_landing_attack:true, tes_val:"着地", }
,{tesf:"フォックス", tess:"空後", fighter_id:1070, skill_genre:10903, begin:9, end:11, time:48, base_damage:13, landing_lag:9, landing_occurrence_begin:7, landing_occurrence_end:17, tes_val:"", }
,{tesf:"フォックス", tess:"空上", fighter_id:1070, skill_genre:10900, begin:9, end:10, time:35, base_damage:5, landing_lag:13, landing_occurrence_begin:9, landing_occurrence_end:24, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"フォックス", tess:"空上", fighter_id:1070, skill_genre:10900, begin:12, end:13, time:35, base_damage:10, landing_lag:13, landing_occurrence_begin:9, landing_occurrence_end:24, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"フォックス", tess:"空下", fighter_id:1070, skill_genre:10902, begin:5, end:6, time:49, base_damage:1.4, landing_lag:17, landing_occurrence_begin:5, landing_occurrence_end:27, serial_num_str:"1-6", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"5-6, 8-9, 11-12, 14-15, 17-18, 20-21", tes_val:"Hit 1-6", }
,{tesf:"フォックス", tess:"空下", fighter_id:1070, skill_genre:10902, begin:23, end:23, time:49, base_damage:3, landing_lag:17, landing_occurrence_begin:5, landing_occurrence_end:27, serial_num_str:"7", tes_message:"(連続ヒットする技)", tes_val:"Hit 7", }
,{tesf:"フォックス", tess:"空下", fighter_id:1070, skill_genre:10902, begin:1, end:2, time:49, base_damage:1, landing_lag:17, landing_occurrence_begin:5, landing_occurrence_end:27, is_landing_attack:true, tes_val:"着地", }
,{tess:"その場投げ", fighter_id:1070 , skill_genre:10200, base_damage:0,begin:6, end:8, time:36}
,{tess:"ダッシュ投げ", fighter_id:1070 , skill_genre:10201, base_damage:0,begin:10, end:11, time:44}
,{tess:"ふりむき投げ", fighter_id:1070 , skill_genre:10202, base_damage:0,begin:11, end:13, time:39}

, {tesf:"ルイージ", tess:"弱攻撃", fighter_id:1090, skill_genre:10300, begin:2, end:3, time:18, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ルイージ", tess:"弱攻撃", fighter_id:1090, skill_genre:10300, begin:2, end:3, time:6, base_damage:2, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ルイージ", tess:"弱攻撃", fighter_id:1090, skill_genre:10300, begin:3, end:4, time:18, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"ルイージ", tess:"弱攻撃", fighter_id:1090, skill_genre:10300, begin:6, end:7, time:30, base_damage:4, alias:"弱3", tes_val:"弱3", }
,{tesf:"ルイージ", tess:"ダッシュ攻撃", fighter_id:1090, skill_genre:10400, begin:4, end:4, time:47, base_damage:2, serial_num_str:"1-4", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"4, 8, 12, 16", tes_val:"Hit 1-4", }
,{tesf:"ルイージ", tess:"ダッシュ攻撃", fighter_id:1090, skill_genre:10400, begin:25, end:25, time:47, base_damage:4, serial_num_str:"5", tes_message:"(連続ヒットする技)", tes_val:"Hit 5", }
,{tesf:"ルイージ", tess:"横強", fighter_id:1090, skill_genre:10501, begin:5, end:7, time:32, base_damage:9, shift:"all", tes_val:"全シフト", }
,{tesf:"ルイージ", tess:"上強", fighter_id:1090, skill_genre:10500, begin:5, end:10, time:27, base_damage:6, tes_val:"", }
,{tesf:"ルイージ", tess:"下強", fighter_id:1090, skill_genre:10502, begin:5, end:8, time:13, base_damage:5, tes_val:"", }
,{tesf:"ルイージ", tess:"横スマッシュ", fighter_id:1090, skill_genre:10601, begin:12, end:13, time:41, base_damage:15, shift:"up", tes_val:"上シフト", }
,{tesf:"ルイージ", tess:"横スマッシュ", fighter_id:1090, skill_genre:10601, begin:12, end:13, time:41, base_damage:0, tes_val:"無シフト", }
,{tesf:"ルイージ", tess:"横スマッシュ", fighter_id:1090, skill_genre:10601, begin:12, end:13, time:41, base_damage:0, shift:"under", tes_val:"下シフト", }
,{tesf:"ルイージ", tess:"上スマッシュ", fighter_id:1090, skill_genre:10600, begin:9, end:13, time:39, base_damage:14, damage_no:1, tes_val:"", }
,{tesf:"ルイージ", tess:"上スマッシュ", fighter_id:1090, skill_genre:10600, begin:9, end:13, time:39, base_damage:12, damage_no:2, tes_val:"", }
,{tesf:"ルイージ", tess:"下スマッシュ", fighter_id:1090, skill_genre:10602, begin:6, end:7, time:37, base_damage:15, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ルイージ", tess:"下スマッシュ", fighter_id:1090, skill_genre:10602, begin:6, end:7, time:37, base_damage:14, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ルイージ", tess:"下スマッシュ", fighter_id:1090, skill_genre:10602, begin:14, end:15, time:37, base_damage:15, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ルイージ", tess:"下スマッシュ", fighter_id:1090, skill_genre:10602, begin:14, end:15, time:37, base_damage:14, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ルイージ", tess:"下アピール", fighter_id:1090, skill_genre:11102, begin:45, end:45, time:69, base_damage:2, tes_val:"", is_op_invalid:true}
, {tesf:"ルイージ", tess:"空N", fighter_id:1090, skill_genre:10904, begin:3, end:5, time:44, base_damage:12, landing_lag:8, landing_occurrence_begin:3, landing_occurrence_end:35, tes_val:"", }
,{tesf:"ルイージ", tess:"空N", fighter_id:1090, skill_genre:10904, begin:6, end:31, time:44, base_damage:6, landing_lag:8, landing_occurrence_begin:3, landing_occurrence_end:35, persistence_num:1, tes_val:"持続", }
,{tesf:"ルイージ", tess:"空前", fighter_id:1090, skill_genre:10901, begin:7, end:10, time:23, base_damage:8, landing_lag:13, landing_occurrence_begin:2, landing_occurrence_end:20, tes_val:"", }
,{tesf:"ルイージ", tess:"空後", fighter_id:1090, skill_genre:10903, begin:6, end:7, time:44, base_damage:14, landing_lag:10, landing_occurrence_begin:3, landing_occurrence_end:32, damage_no:1, tes_val:"", }
,{tesf:"ルイージ", tess:"空後", fighter_id:1090, skill_genre:10903, begin:6, end:7, time:44, base_damage:8, landing_lag:10, landing_occurrence_begin:3, landing_occurrence_end:32, damage_no:2, tes_val:"", }
,{tesf:"ルイージ", tess:"空後", fighter_id:1090, skill_genre:10903, begin:8, end:13, time:44, base_damage:8, landing_lag:10, landing_occurrence_begin:3, landing_occurrence_end:32, persistence_num:1, tes_val:"持続", }
,{tesf:"ルイージ", tess:"空上", fighter_id:1090, skill_genre:10900, begin:5, end:7, time:26, base_damage:11, landing_lag:7, landing_occurrence_begin:2, landing_occurrence_end:18, tes_val:"", }
,{tesf:"ルイージ", tess:"空上", fighter_id:1090, skill_genre:10900, begin:8, end:11, time:26, base_damage:7, landing_lag:7, landing_occurrence_begin:2, landing_occurrence_end:18, persistence_num:1, tes_val:"持続", }
,{tesf:"ルイージ", tess:"空下", fighter_id:1090, skill_genre:10902, begin:10, end:10, time:28, base_damage:10, landing_lag:12, landing_occurrence_begin:6, landing_occurrence_end:23, tes_val:"", }
,{tesf:"ルイージ", tess:"空下", fighter_id:1090, skill_genre:10902, begin:11, end:14, time:28, base_damage:8, landing_lag:12, landing_occurrence_begin:6, landing_occurrence_end:23, persistence_num:1, tes_val:"持続", }
,{tesf:"ルイージ", tess:"空中ワイヤー", fighter_id:1090, skill_genre:10905, begin:14, end:68, time:52, base_damage:5, landing_lag:20, landing_occurrence_begin:1, landing_occurrence_end:48, tes_val:"", }
,{tesf:"ルイージ", tess:"空中ワイヤー", fighter_id:1090, skill_genre:10905, begin:6, end:30, time:20, base_damage:5, landing_lag:20, landing_occurrence_begin:1, landing_occurrence_end:48, is_landing_attack:true, tes_val:"着地", }
,{tess:"その場投げ", fighter_id:1090 , skill_genre:10200, base_damage:0,begin:14, end:20, time:47}
,{tess:"ダッシュ投げ", fighter_id:1090 , skill_genre:10201, base_damage:0,begin:16, end:22, time:51}
,{tess:"ふりむき投げ", fighter_id:1090 , skill_genre:10202, base_damage:0,begin:17, end:23, time:49}

, {tesf:"キャプテン・ファルコン", tess:"弱攻撃", fighter_id:1110, skill_genre:10300, begin:3, end:3, time:17, base_damage:1.5, alias:"弱1", tes_val:"弱1", }
,{tesf:"キャプテン・ファルコン", tess:"弱攻撃", fighter_id:1110, skill_genre:10300, begin:3, end:3, time:6, base_damage:1.5, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"キャプテン・ファルコン", tess:"弱攻撃", fighter_id:1110, skill_genre:10300, begin:5, end:5, time:18, base_damage:1.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"キャプテン・ファルコン", tess:"弱攻撃", fighter_id:1110, skill_genre:10300, begin:6, end:7, time:32, base_damage:5, alias:"弱3", tes_val:"弱3", }
,{tesf:"キャプテン・ファルコン", tess:"弱攻撃", fighter_id:1110, skill_genre:10300, begin:6, end:7, time:5, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"キャプテン・ファルコン", tess:"弱攻撃", fighter_id:1110, skill_genre:10300, begin:5, end:5, time:19, base_damage:0.6, alias:"百裂", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"5, 7, 9, 11,13, 15, 17, 19", tes_val:"百裂, 連", correction:9}
,{tesf:"キャプテン・ファルコン", tess:"弱攻撃", fighter_id:1110, skill_genre:10300, begin:6, end:7, time:49, base_damage:3, alias:"百裂〆", tes_val:"百裂, 〆", }
,{tesf:"キャプテン・ファルコン", tess:"ダッシュ攻撃", fighter_id:1110, skill_genre:10400, begin:7, end:9, time:37, base_damage:10, tes_val:"", correction:1.875}
,{tesf:"キャプテン・ファルコン", tess:"ダッシュ攻撃", fighter_id:1110, skill_genre:10400, begin:10, end:16, time:37, base_damage:6, persistence_num:1, tes_val:"持続", correction:1.875}
,{tesf:"キャプテン・ファルコン", tess:"横強", fighter_id:1110, skill_genre:10501, begin:7, end:10, time:29, base_damage:10, damage_no:1, shift:"up", tes_val:"上シフト", }
,{tesf:"キャプテン・ファルコン", tess:"横強", fighter_id:1110, skill_genre:10501, begin:7, end:10, time:29, base_damage:9, damage_no:2, shift:"up", tes_val:"上シフト", }
,{tesf:"キャプテン・ファルコン", tess:"横強", fighter_id:1110, skill_genre:10501, begin:7, end:10, time:29, base_damage:9, damage_no:1, tes_val:"無シフト", }
,{tesf:"キャプテン・ファルコン", tess:"横強", fighter_id:1110, skill_genre:10501, begin:7, end:10, time:29, base_damage:8, damage_no:2, tes_val:"無シフト", }
,{tesf:"キャプテン・ファルコン", tess:"横強", fighter_id:1110, skill_genre:10501, begin:7, end:10, time:29, base_damage:10, damage_no:1, shift:"under", tes_val:"下シフト", }
,{tesf:"キャプテン・ファルコン", tess:"横強", fighter_id:1110, skill_genre:10501, begin:7, end:10, time:29, base_damage:9, damage_no:2, shift:"under", tes_val:"下シフト", }
,{tesf:"キャプテン・ファルコン", tess:"上強", fighter_id:1110, skill_genre:10500, begin:14, end:17, time:36, base_damage:11, defend_position:"ground", tes_val:"対地", }
,{tesf:"キャプテン・ファルコン", tess:"上強", fighter_id:1110, skill_genre:10500, begin:14, end:17, time:36, base_damage:11, defend_position:"air", tes_val:"対空", }
,{tesf:"キャプテン・ファルコン", tess:"下強", fighter_id:1110, skill_genre:10502, begin:11, end:12, time:34, base_damage:10, tes_val:"", }
,{tesf:"キャプテン・ファルコン", tess:"横スマッシュ", fighter_id:1110, skill_genre:10601, begin:19, end:22, time:59, base_damage:20, shift:"up", tes_val:"上シフト", }
,{tesf:"キャプテン・ファルコン", tess:"横スマッシュ", fighter_id:1110, skill_genre:10601, begin:19, end:22, time:59, base_damage:19, tes_val:"無シフト", }
,{tesf:"キャプテン・ファルコン", tess:"横スマッシュ", fighter_id:1110, skill_genre:10601, begin:19, end:22, time:59, base_damage:20, shift:"under", tes_val:"下シフト", }
,{tesf:"キャプテン・ファルコン", tess:"上スマッシュ", fighter_id:1110, skill_genre:10600, begin:22, end:22, time:45, base_damage:12, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"キャプテン・ファルコン", tess:"上スマッシュ", fighter_id:1110, skill_genre:10600, begin:22, end:22, time:45, base_damage:7, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"キャプテン・ファルコン", tess:"上スマッシュ", fighter_id:1110, skill_genre:10600, begin:23, end:23, time:45, base_damage:12, damage_no:1, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"キャプテン・ファルコン", tess:"上スマッシュ", fighter_id:1110, skill_genre:10600, begin:23, end:23, time:45, base_damage:7, damage_no:2, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"キャプテン・ファルコン", tess:"上スマッシュ", fighter_id:1110, skill_genre:10600, begin:28, end:29, time:45, base_damage:14, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"キャプテン・ファルコン", tess:"下スマッシュ", fighter_id:1110, skill_genre:10602, begin:19, end:20, time:48, base_damage:14, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"キャプテン・ファルコン", tess:"下スマッシュ", fighter_id:1110, skill_genre:10602, begin:29, end:30, time:48, base_damage:18, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"キャプテン・ファルコン", tess:"空N", fighter_id:1110, skill_genre:10904, begin:7, end:8, time:39, base_damage:4, landing_lag:7, landing_occurrence_begin:4, landing_occurrence_end:31, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"キャプテン・ファルコン", tess:"空N", fighter_id:1110, skill_genre:10904, begin:13, end:15, time:39, base_damage:6, landing_lag:7, landing_occurrence_begin:4, landing_occurrence_end:31, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"キャプテン・ファルコン", tess:"空前", fighter_id:1110, skill_genre:10901, begin:14, end:14, time:45, base_damage:22, landing_lag:18, landing_occurrence_begin:5, landing_occurrence_end:41, damage_no:1, tes_val:"", }
,{tesf:"キャプテン・ファルコン", tess:"空前", fighter_id:1110, skill_genre:10901, begin:14, end:14, time:45, base_damage:6, landing_lag:18, landing_occurrence_begin:5, landing_occurrence_end:41, damage_no:2, tes_val:"", }
,{tesf:"キャプテン・ファルコン", tess:"空前", fighter_id:1110, skill_genre:10901, begin:15, end:30, time:45, base_damage:3, landing_lag:18, landing_occurrence_begin:5, landing_occurrence_end:41, persistence_num:1, tes_val:"持続", }
,{tesf:"キャプテン・ファルコン", tess:"空後", fighter_id:1110, skill_genre:10903, begin:10, end:11, time:35, base_damage:13, landing_lag:10, landing_occurrence_begin:5, landing_occurrence_end:18, tes_val:"", }
,{tesf:"キャプテン・ファルコン", tess:"空後", fighter_id:1110, skill_genre:10903, begin:12, end:15, time:35, base_damage:8, landing_lag:10, landing_occurrence_begin:5, landing_occurrence_end:18, persistence_num:1, tes_val:"持続", }
,{tesf:"キャプテン・ファルコン", tess:"空上", fighter_id:1110, skill_genre:10900, begin:7, end:10, time:31, base_damage:10, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:23, damage_no:1, tes_val:"", }
,{tesf:"キャプテン・ファルコン", tess:"空上", fighter_id:1110, skill_genre:10900, begin:7, end:10, time:31, base_damage:9, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:23, damage_no:2, tes_val:"", }
,{tesf:"キャプテン・ファルコン", tess:"空上", fighter_id:1110, skill_genre:10900, begin:11, end:12, time:31, base_damage:9, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:23, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"キャプテン・ファルコン", tess:"空上", fighter_id:1110, skill_genre:10900, begin:11, end:12, time:31, base_damage:8, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:23, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"キャプテン・ファルコン", tess:"空下", fighter_id:1110, skill_genre:10902, begin:16, end:18, time:44, base_damage:14, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:38, tes_val:"", }
,{tess:"その場投げ", fighter_id:1110 , skill_genre:10200, base_damage:0,begin:6, end:7, time:35}
,{tess:"ダッシュ投げ", fighter_id:1110 , skill_genre:10201, base_damage:0,begin:9, end:10, time:43}
,{tess:"ふりむき投げ", fighter_id:1110 , skill_genre:10202, base_damage:0,begin:10, end:11, time:38}

, {tesf:"プリン", tess:"弱攻撃", fighter_id:1120, skill_genre:10300, begin:5, end:6, time:16, base_damage:3, alias:"弱1", tes_val:"弱1", }
,{tesf:"プリン", tess:"弱攻撃", fighter_id:1120, skill_genre:10300, begin:5, end:6, time:11, base_damage:3, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"プリン", tess:"弱攻撃", fighter_id:1120, skill_genre:10300, begin:5, end:6, time:19, base_damage:3, alias:"弱2", tes_val:"弱2", }
,{tesf:"プリン", tess:"ダッシュ攻撃", fighter_id:1120, skill_genre:10400, begin:5, end:7, time:39, base_damage:12, tes_val:"", }
,{tesf:"プリン", tess:"ダッシュ攻撃", fighter_id:1120, skill_genre:10400, begin:8, end:20, time:39, base_damage:8, persistence_num:1, tes_val:"持続", }
,{tesf:"プリン", tess:"横強", fighter_id:1120, skill_genre:10501, begin:7, end:10, time:24, base_damage:10, shift:"all", tes_val:"全シフト", }
,{tesf:"プリン", tess:"上強", fighter_id:1120, skill_genre:10500, begin:9, end:10, time:24, base_damage:9, tes_val:"", }
,{tesf:"プリン", tess:"上強", fighter_id:1120, skill_genre:10500, begin:11, end:13, time:24, base_damage:8, persistence_num:1, tes_val:"持続", }
,{tesf:"プリン", tess:"下強", fighter_id:1120, skill_genre:10502, begin:10, end:12, time:30, base_damage:10, tes_val:"", }
,{tesf:"プリン", tess:"横スマッシュ", fighter_id:1120, skill_genre:10601, begin:16, end:19, time:49, base_damage:16, tes_val:"", }
,{tesf:"プリン", tess:"横スマッシュ", fighter_id:1120, skill_genre:10601, begin:20, end:24, time:49, base_damage:14, persistence_num:1, tes_val:"持続", }
,{tesf:"プリン", tess:"上スマッシュ", fighter_id:1120, skill_genre:10600, begin:16, end:19, time:45, base_damage:15, tes_val:"", }
,{tesf:"プリン", tess:"下スマッシュ", fighter_id:1120, skill_genre:10602, begin:14, end:16, time:48, base_damage:11, tes_val:"", }
, {tesf:"プリン", tess:"空N", fighter_id:1120, skill_genre:10904, begin:6, end:7, time:43, base_damage:11, landing_lag:9, landing_occurrence_begin:4, landing_occurrence_end:39, tes_val:"", }
,{tesf:"プリン", tess:"空N", fighter_id:1120, skill_genre:10904, begin:8, end:30, time:43, base_damage:6, landing_lag:9, landing_occurrence_begin:4, landing_occurrence_end:39, persistence_num:1, tes_val:"持続", }
,{tesf:"プリン", tess:"空前", fighter_id:1120, skill_genre:10901, begin:8, end:9, time:36, base_damage:9, landing_lag:9, landing_occurrence_begin:4, landing_occurrence_end:27, tes_val:"", }
,{tesf:"プリン", tess:"空前", fighter_id:1120, skill_genre:10901, begin:10, end:20, time:36, base_damage:6, landing_lag:9, landing_occurrence_begin:4, landing_occurrence_end:27, persistence_num:1, tes_val:"持続", }
,{tesf:"プリン", tess:"空後", fighter_id:1120, skill_genre:10903, begin:10, end:11, time:37, base_damage:13, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:25, tes_val:"", }
,{tesf:"プリン", tess:"空上", fighter_id:1120, skill_genre:10900, begin:9, end:21, time:39, base_damage:9, landing_lag:9, landing_occurrence_begin:4, landing_occurrence_end:34, tes_val:"", }
,{tesf:"プリン", tess:"空下", fighter_id:1120, skill_genre:10902, begin:7, end:8, time:52, base_damage:1.5, landing_lag:12, landing_occurrence_begin:2, landing_occurrence_end:41, serial_num_str:"1-8", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"7-8, 10-11, 13-14, 16-17, 19-20, 22-23, 25-26, 28-29", tes_val:"Hit 1-8", }
,{tesf:"プリン", tess:"空下", fighter_id:1120, skill_genre:10902, begin:31, end:32, time:52, base_damage:2, landing_lag:12, landing_occurrence_begin:2, landing_occurrence_end:41, serial_num_str:"9", tes_message:"(連続ヒットする技)", tes_val:"Hit 9", }
,{tess:"その場投げ", fighter_id:1120 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34}
,{tess:"ダッシュ投げ", fighter_id:1120 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42}
,{tess:"ふりむき投げ", fighter_id:1120 , skill_genre:10202, base_damage:0,begin:10, end:11, time:37}


, {tesf:"ピーチ", tess:"弱攻撃", fighter_id:1130, skill_genre:10300, begin:2, end:2, time:27, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ピーチ", tess:"弱攻撃", fighter_id:1130, skill_genre:10300, begin:2, end:3, time:29, base_damage:3, alias:"弱2", tes_val:"弱2", }
,{tesf:"ピーチ", tess:"ダッシュ攻撃", fighter_id:1130, skill_genre:10400, begin:6, end:9, time:37, base_damage:4, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", correction:2.9}
,{tesf:"ピーチ", tess:"ダッシュ攻撃", fighter_id:1130, skill_genre:10400, begin:17, end:19, time:37, base_damage:6, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ピーチ", tess:"横強", fighter_id:1130, skill_genre:10501, begin:7, end:7, time:36, base_damage:7, persistence_num:0, tes_val:"始", }
,{tesf:"ピーチ", tess:"横強", fighter_id:1130, skill_genre:10501, begin:8, end:9, time:36, base_damage:8, damage_no:1, tes_val:"", }
,{tesf:"ピーチ", tess:"横強", fighter_id:1130, skill_genre:10501, begin:8, end:9, time:36, base_damage:7, damage_no:2, tes_val:"", }
,{tesf:"ピーチ", tess:"横強", fighter_id:1130, skill_genre:10501, begin:10, end:15, time:36, base_damage:6, persistence_num:1, tes_val:"持続", }
,{tesf:"ピーチ", tess:"上強", fighter_id:1130, skill_genre:10500, begin:9, end:13, time:37, base_damage:10, damage_no:1, tes_val:"", }
,{tesf:"ピーチ", tess:"上強", fighter_id:1130, skill_genre:10500, begin:9, end:13, time:37, base_damage:8, damage_no:2, tes_val:"", }
,{tesf:"ピーチ", tess:"下強", fighter_id:1130, skill_genre:10502, begin:8, end:9, time:23, base_damage:7, tes_val:"", }
,{tesf:"ピーチ", tess:"横スマッシュ", fighter_id:1130, skill_genre:10601, begin:15, end:17, time:45, base_damage:18, tes_val:"フライパン", }
,{tesf:"ピーチ", tess:"横スマッシュ", fighter_id:1130, skill_genre:10601, begin:15, end:17, time:45, base_damage:15, tes_val:"ゴルフクラブ", }
,{tesf:"ピーチ", tess:"横スマッシュ", fighter_id:1130, skill_genre:10601, begin:15, end:17, time:45, base_damage:13.5, tes_val:"テニスラケット", }
,{tesf:"ピーチ", tess:"上スマッシュ", fighter_id:1130, skill_genre:10600, begin:14, end:16, time:44, base_damage:17, damage_no:1, tes_val:"", }
,{tesf:"ピーチ", tess:"上スマッシュ", fighter_id:1130, skill_genre:10600, begin:14, end:16, time:44, base_damage:15, damage_no:2, tes_val:"", }
,{tesf:"ピーチ", tess:"上スマッシュ", fighter_id:1130, skill_genre:10600, begin:14, end:16, time:44, base_damage:12, damage_no:3, tes_val:"", }
,{tesf:"ピーチ", tess:"上スマッシュ", fighter_id:1130, skill_genre:10600, begin:17, end:20, time:44, base_damage:12, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"ピーチ", tess:"上スマッシュ", fighter_id:1130, skill_genre:10600, begin:17, end:20, time:44, base_damage:10, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"ピーチ", tess:"下スマッシュ", fighter_id:1130, skill_genre:10602, begin:6, end:7, time:54, base_damage:2, serial_num_str:"1-6", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"6-7, 10-11, 14-15, 18-19,22-12, 26-27", tes_val:"Hit 1-6", }
,{tesf:"ピーチ", tess:"下スマッシュ", fighter_id:1130, skill_genre:10602, begin:30, end:31, time:54, base_damage:3, serial_num_str:"7", tes_message:"(連続ヒットする技)", tes_val:"Hit 7", }
, {tesf:"ピーチ", tess:"空N", fighter_id:1130, skill_genre:10904, begin:5, end:8, time:48, base_damage:13, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:35, tes_val:"", }
,{tesf:"ピーチ", tess:"空N", fighter_id:1130, skill_genre:10904, begin:9, end:19, time:48, base_damage:6, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:35, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"ピーチ", tess:"空N", fighter_id:1130, skill_genre:10904, begin:9, end:19, time:48, base_damage:5, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:35, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"ピーチ", tess:"空前", fighter_id:1130, skill_genre:10901, begin:16, end:20, time:57, base_damage:15, landing_lag:13, landing_occurrence_begin:10, landing_occurrence_end:40, damage_no:1, tes_val:"", }
,{tesf:"ピーチ", tess:"空前", fighter_id:1130, skill_genre:10901, begin:16, end:20, time:57, base_damage:14, landing_lag:13, landing_occurrence_begin:10, landing_occurrence_end:40, damage_no:2, tes_val:"", }
,{tesf:"ピーチ", tess:"空後", fighter_id:1130, skill_genre:10903, begin:6, end:7, time:53, base_damage:12, landing_lag:11, landing_occurrence_begin:5, landing_occurrence_end:29, tes_val:"", }
,{tesf:"ピーチ", tess:"空後", fighter_id:1130, skill_genre:10903, begin:8, end:13, time:53, base_damage:7, landing_lag:11, landing_occurrence_begin:5, landing_occurrence_end:29, persistence_num:1, tes_val:"持続", }
,{tesf:"ピーチ", tess:"空上", fighter_id:1130, skill_genre:10900, begin:10, end:10, time:45, base_damage:4, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:40, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ピーチ", tess:"空上", fighter_id:1130, skill_genre:10900, begin:11, end:11, time:45, base_damage:4, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:40, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続1", }
,{tesf:"ピーチ", tess:"空上", fighter_id:1130, skill_genre:10900, begin:12, end:13, time:45, base_damage:4, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:40, persistence_num:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続2", }
,{tesf:"ピーチ", tess:"空上", fighter_id:1130, skill_genre:10900, begin:15, end:15, time:45, base_damage:6, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:40, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ピーチ", tess:"空上", fighter_id:1130, skill_genre:10900, begin:16, end:17, time:45, base_damage:6, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:40, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続1", }
,{tesf:"ピーチ", tess:"空上", fighter_id:1130, skill_genre:10900, begin:18, end:19, time:45, base_damage:6, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:40, persistence_num:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続2", }
,{tesf:"ピーチ", tess:"空下", fighter_id:1130, skill_genre:10902, begin:12, end:13, time:38, base_damage:2, landing_lag:8, landing_occurrence_begin:12, landing_occurrence_end:37, damage_no:1, serial_num_str:"1-3", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"12-13, 18-19, 24-25", tes_val:"Hit 1-3", }
,{tesf:"ピーチ", tess:"空下", fighter_id:1130, skill_genre:10902, begin:12, end:13, time:38, base_damage:1, landing_lag:8, landing_occurrence_begin:12, landing_occurrence_end:37, damage_no:2, serial_num_str:"1-3", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"12-13, 18-19, 24-25", tes_val:"Hit 1-3", }
,{tesf:"ピーチ", tess:"空下", fighter_id:1130, skill_genre:10902, begin:30, end:31, time:38, base_damage:5, landing_lag:8, landing_occurrence_begin:12, landing_occurrence_end:37, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }
,{tess:"その場投げ", fighter_id:1130 , skill_genre:10200, base_damage:0,begin:6, end:7, time:36}
,{tess:"ダッシュ投げ", fighter_id:1130 , skill_genre:10201, base_damage:0,begin:9, end:10, time:44}
,{tess:"ふりむき投げ", fighter_id:1130 , skill_genre:10202, base_damage:0,begin:10, end:11, time:39}

, {tesf:"デイジー", tess:"空N", fighter_id:1131, skill_genre:10904, begin:5, end:8, time:48, base_damage:13, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:35, tes_val:"", }
,{tesf:"デイジー", tess:"空N", fighter_id:1131, skill_genre:10904, begin:9, end:19, time:48, base_damage:6, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:35, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"デイジー", tess:"空N", fighter_id:1131, skill_genre:10904, begin:9, end:19, time:48, base_damage:5, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:35, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"デイジー", tess:"空前", fighter_id:1131, skill_genre:10901, begin:16, end:20, time:57, base_damage:15, landing_lag:13, landing_occurrence_begin:10, landing_occurrence_end:40, damage_no:1, tes_val:"", }
,{tesf:"デイジー", tess:"空前", fighter_id:1131, skill_genre:10901, begin:16, end:20, time:57, base_damage:14, landing_lag:13, landing_occurrence_begin:10, landing_occurrence_end:40, damage_no:2, tes_val:"", }
,{tesf:"デイジー", tess:"空後", fighter_id:1131, skill_genre:10903, begin:6, end:7, time:53, base_damage:12, landing_lag:11, landing_occurrence_begin:5, landing_occurrence_end:29, tes_val:"", }
,{tesf:"デイジー", tess:"空後", fighter_id:1131, skill_genre:10903, begin:8, end:13, time:53, base_damage:7, landing_lag:11, landing_occurrence_begin:5, landing_occurrence_end:29, persistence_num:1, tes_val:"持続", }
,{tesf:"デイジー", tess:"空上", fighter_id:1131, skill_genre:10900, begin:10, end:10, time:45, base_damage:4, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:40, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"デイジー", tess:"空上", fighter_id:1131, skill_genre:10900, begin:11, end:11, time:45, base_damage:4, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:40, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続1", }
,{tesf:"デイジー", tess:"空上", fighter_id:1131, skill_genre:10900, begin:12, end:13, time:45, base_damage:4, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:40, persistence_num:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続2", }
,{tesf:"デイジー", tess:"空上", fighter_id:1131, skill_genre:10900, begin:15, end:15, time:45, base_damage:6, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:40, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"デイジー", tess:"空上", fighter_id:1131, skill_genre:10900, begin:16, end:17, time:45, base_damage:6, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:40, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続1", }
,{tesf:"デイジー", tess:"空上", fighter_id:1131, skill_genre:10900, begin:18, end:19, time:45, base_damage:6, landing_lag:7, landing_occurrence_begin:5, landing_occurrence_end:40, persistence_num:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続2", }
,{tesf:"デイジー", tess:"空下", fighter_id:1131, skill_genre:10902, begin:12, end:13, time:38, base_damage:2, landing_lag:8, landing_occurrence_begin:12, landing_occurrence_end:37, damage_no:1, serial_num_str:"1-3", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"12-13, 18-19, 24-25", tes_val:"Hit 1-3", }
,{tesf:"デイジー", tess:"空下", fighter_id:1131, skill_genre:10902, begin:12, end:13, time:38, base_damage:1, landing_lag:8, landing_occurrence_begin:12, landing_occurrence_end:37, damage_no:2, serial_num_str:"1-3", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"12-13, 18-19, 24-25", tes_val:"Hit 1-3", }
,{tesf:"デイジー", tess:"空下", fighter_id:1131, skill_genre:10902, begin:30, end:31, time:38, base_damage:5, landing_lag:8, landing_occurrence_begin:12, landing_occurrence_end:37, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }


, {tesf:"デイジー", tess:"弱攻撃", fighter_id:1131, skill_genre:10300, begin:2, end:2, time:27, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"デイジー", tess:"弱攻撃", fighter_id:1131, skill_genre:10300, begin:2, end:3, time:29, base_damage:3, alias:"弱2", tes_val:"弱2", }
,{tesf:"デイジー", tess:"ダッシュ攻撃", fighter_id:1131, skill_genre:10400, begin:6, end:9, time:37, base_damage:4, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", correction:2.9}
,{tesf:"デイジー", tess:"ダッシュ攻撃", fighter_id:1131, skill_genre:10400, begin:17, end:19, time:37, base_damage:6, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"デイジー", tess:"横強", fighter_id:1131, skill_genre:10501, begin:7, end:7, time:36, base_damage:7, persistence_num:0, tes_val:"始", }
,{tesf:"デイジー", tess:"横強", fighter_id:1131, skill_genre:10501, begin:8, end:9, time:36, base_damage:8, damage_no:1, tes_val:"", }
,{tesf:"デイジー", tess:"横強", fighter_id:1131, skill_genre:10501, begin:8, end:9, time:36, base_damage:7, damage_no:2, tes_val:"", }
,{tesf:"デイジー", tess:"横強", fighter_id:1131, skill_genre:10501, begin:10, end:15, time:36, base_damage:6, persistence_num:1, tes_val:"持続", }
,{tesf:"デイジー", tess:"上強", fighter_id:1131, skill_genre:10500, begin:9, end:13, time:37, base_damage:10, damage_no:1, tes_val:"", }
,{tesf:"デイジー", tess:"上強", fighter_id:1131, skill_genre:10500, begin:9, end:13, time:37, base_damage:8, damage_no:2, tes_val:"", }
,{tesf:"デイジー", tess:"下強", fighter_id:1131, skill_genre:10502, begin:8, end:9, time:23, base_damage:7, tes_val:"", }
,{tesf:"デイジー", tess:"横スマッシュ", fighter_id:1131, skill_genre:10601, begin:15, end:17, time:45, base_damage:18, tes_val:"フライパン", }
,{tesf:"デイジー", tess:"横スマッシュ", fighter_id:1131, skill_genre:10601, begin:15, end:17, time:45, base_damage:15, tes_val:"ゴルフクラブ", }
,{tesf:"デイジー", tess:"横スマッシュ", fighter_id:1131, skill_genre:10601, begin:15, end:17, time:45, base_damage:13.5, tes_val:"テニスラケット", }
,{tesf:"デイジー", tess:"上スマッシュ", fighter_id:1131, skill_genre:10600, begin:14, end:16, time:44, base_damage:17, damage_no:1, tes_val:"", }
,{tesf:"デイジー", tess:"上スマッシュ", fighter_id:1131, skill_genre:10600, begin:14, end:16, time:44, base_damage:15, damage_no:2, tes_val:"", }
,{tesf:"デイジー", tess:"上スマッシュ", fighter_id:1131, skill_genre:10600, begin:14, end:16, time:44, base_damage:12, damage_no:3, tes_val:"", }
,{tesf:"デイジー", tess:"上スマッシュ", fighter_id:1131, skill_genre:10600, begin:17, end:20, time:44, base_damage:12, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"デイジー", tess:"上スマッシュ", fighter_id:1131, skill_genre:10600, begin:17, end:20, time:44, base_damage:10, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"デイジー", tess:"下スマッシュ", fighter_id:1131, skill_genre:10602, begin:6, end:7, time:54, base_damage:2, serial_num_str:"1-6", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"6-7, 10-11, 14-15, 18-19,22-12, 26-27", tes_val:"Hit 1-6", }
,{tesf:"デイジー", tess:"下スマッシュ", fighter_id:1131, skill_genre:10602, begin:30, end:31, time:54, base_damage:3, serial_num_str:"7", tes_message:"(連続ヒットする技)", tes_val:"Hit 7", }
,{tess:"その場投げ", fighter_id:1131 , skill_genre:10200, base_damage:0,begin:6, end:7, time:36}
,{tess:"ダッシュ投げ", fighter_id:1131 , skill_genre:10201, base_damage:0,begin:9, end:10, time:44}
,{tess:"ふりむき投げ", fighter_id:1131 , skill_genre:10202, base_damage:0,begin:10, end:11, time:39}

, {tesf:"クッパ", tess:"弱攻撃", fighter_id:1140, skill_genre:10300, begin:7, end:8, time:25, base_damage:4, alias:"弱1", tes_val:"弱1", }
,{tesf:"クッパ", tess:"弱攻撃", fighter_id:1140, skill_genre:10300, begin:9, end:11, time:25, base_damage:7, alias:"弱2", tes_val:"弱2", }
,{tesf:"クッパ", tess:"ダッシュ攻撃", fighter_id:1140, skill_genre:10400, begin:11, end:14, time:55, base_damage:12, tes_val:"", }
,{tesf:"クッパ", tess:"ダッシュ攻撃", fighter_id:1140, skill_genre:10400, begin:15, end:20, time:55, base_damage:10, persistence_num:1, tes_val:"持続", }
,{tesf:"クッパ", tess:"横強", fighter_id:1140, skill_genre:10501, begin:10, end:14, time:37, base_damage:13, shift:"all", tes_val:"全シフト", }
,{tesf:"クッパ", tess:"上強", fighter_id:1140, skill_genre:10500, begin:11, end:16, time:40, base_damage:11, tes_val:"", }
,{tesf:"クッパ", tess:"下強", fighter_id:1140, skill_genre:10502, begin:10, end:12, time:45, base_damage:7, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"クッパ", tess:"下強", fighter_id:1140, skill_genre:10502, begin:15, end:17, time:45, base_damage:8, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"クッパ", tess:"横スマッシュ", fighter_id:1140, skill_genre:10601, begin:22, end:23, time:69, base_damage:23, damage_no:1, tes_val:"", }
,{tesf:"クッパ", tess:"横スマッシュ", fighter_id:1140, skill_genre:10601, begin:22, end:23, time:69, base_damage:20, damage_no:2, tes_val:"", }
,{tesf:"クッパ", tess:"横スマッシュ", fighter_id:1140, skill_genre:10601, begin:24, end:27, time:69, base_damage:17, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"クッパ", tess:"横スマッシュ", fighter_id:1140, skill_genre:10601, begin:24, end:27, time:69, base_damage:14, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"クッパ", tess:"上スマッシュ", fighter_id:1140, skill_genre:10600, begin:16, end:23, time:57, base_damage:22, damage_no:1, tes_val:"", }
,{tesf:"クッパ", tess:"上スマッシュ", fighter_id:1140, skill_genre:10600, begin:16, end:23, time:57, base_damage:16, damage_no:2, tes_val:"", }
,{tesf:"クッパ", tess:"上スマッシュ", fighter_id:1140, skill_genre:10600, begin:37, end:37, time:57, base_damage:12, is_landing_attack:true, defend_position:"ground_only", tes_val:"着地, 対地のみ", }
,{tesf:"クッパ", tess:"下スマッシュ", fighter_id:1140, skill_genre:10602, begin:12, end:14, time:71, base_damage:16, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"クッパ", tess:"下スマッシュ", fighter_id:1140, skill_genre:10602, begin:28, end:30, time:71, base_damage:15, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"クッパ", tess:"空N", fighter_id:1140, skill_genre:10904, begin:8, end:29, time:47, base_damage:6, landing_lag:15, landing_occurrence_begin:4, landing_occurrence_end:40, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"クッパ", tess:"空N", fighter_id:1140, skill_genre:10904, begin:14, end:29, time:47, base_damage:6, landing_lag:15, landing_occurrence_begin:4, landing_occurrence_end:40, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"クッパ", tess:"空N", fighter_id:1140, skill_genre:10904, begin:18, end:29, time:47, base_damage:6, landing_lag:15, landing_occurrence_begin:4, landing_occurrence_end:40, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"クッパ", tess:"空N", fighter_id:1140, skill_genre:10904, begin:18, end:29, time:47, base_damage:6, landing_lag:15, landing_occurrence_begin:4, landing_occurrence_end:40, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }
,{tesf:"クッパ", tess:"空前", fighter_id:1140, skill_genre:10901, begin:11, end:14, time:41, base_damage:13, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:30, damage_no:1, tes_val:"", }
,{tesf:"クッパ", tess:"空前", fighter_id:1140, skill_genre:10901, begin:11, end:14, time:41, base_damage:12, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:30, damage_no:2, tes_val:"", }
,{tesf:"クッパ", tess:"空前", fighter_id:1140, skill_genre:10901, begin:11, end:14, time:41, base_damage:11, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:30, damage_no:3, tes_val:"", }
,{tesf:"クッパ", tess:"空後", fighter_id:1140, skill_genre:10903, begin:9, end:11, time:44, base_damage:19, landing_lag:24, landing_occurrence_begin:3, landing_occurrence_end:30, tes_val:"", }
,{tesf:"クッパ", tess:"空上", fighter_id:1140, skill_genre:10900, begin:9, end:13, time:44, base_damage:15, landing_lag:17, landing_occurrence_begin:3, landing_occurrence_end:39, tes_val:"", }
,{tesf:"クッパ", tess:"空下", fighter_id:1140, skill_genre:10902, begin:17, end:24, time:77, base_damage:16, landing_lag:34, landing_occurrence_begin:14, landing_occurrence_end:69, tes_val:"メテオ", }
,{tesf:"クッパ", tess:"空下", fighter_id:1140, skill_genre:10902, begin:25, end:49, time:77, base_damage:16, landing_lag:34, landing_occurrence_begin:14, landing_occurrence_end:69, persistence_num:1, tes_val:"持続", }
,{tesf:"クッパ", tess:"空下", fighter_id:1140, skill_genre:10902, begin:1, end:6, time:77, base_damage:2, landing_lag:34, landing_occurrence_begin:14, landing_occurrence_end:69, is_landing_attack:true, tes_val:"着地", }
,{tess:"その場投げ", fighter_id:1140 , skill_genre:10200, base_damage:0,begin:8, end:10, time:40}
,{tess:"ダッシュ投げ", fighter_id:1140 , skill_genre:10201, base_damage:0,begin:11, end:13, time:48}
,{tess:"ふりむき投げ", fighter_id:1140 , skill_genre:10202, base_damage:0,begin:12, end:14, time:43}

, {tesf:"シーク", tess:"弱攻撃", fighter_id:1160, skill_genre:10300, begin:2, end:2, time:17, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"シーク", tess:"弱攻撃", fighter_id:1160, skill_genre:10300, begin:3, end:3, time:17, base_damage:1.6, alias:"弱2", tes_val:"弱2", }
,{tesf:"シーク", tess:"弱攻撃", fighter_id:1160, skill_genre:10300, begin:3, end:3, time:2, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"シーク", tess:"弱攻撃", fighter_id:1160, skill_genre:10300, begin:3, end:3, time:12, base_damage:0.3, alias:"百裂", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3,.5, 7, 9, 11", tes_val:"百裂, 連", correction:9}
,{tesf:"シーク", tess:"弱攻撃", fighter_id:1160, skill_genre:10300, begin:5, end:6, time:35, base_damage:2, alias:"百裂〆", tes_val:"百裂, 〆", }
,{tesf:"シーク", tess:"ダッシュ攻撃", fighter_id:1160, skill_genre:10400, begin:5, end:6, time:34, base_damage:7, tes_val:"", correction:1.5}
,{tesf:"シーク", tess:"ダッシュ攻撃", fighter_id:1160, skill_genre:10400, begin:7, end:8, time:34, base_damage:5, persistence_num:1, tes_val:"持続", correction:1.5}
,{tesf:"シーク", tess:"横強", fighter_id:1160, skill_genre:10501, begin:5, end:8, time:24, base_damage:3, tes_val:"", }
,{tesf:"シーク", tess:"上強", fighter_id:1160, skill_genre:10500, begin:5, end:8, time:32, base_damage:3, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"シーク", tess:"上強", fighter_id:1160, skill_genre:10500, begin:16, end:23, time:32, base_damage:4, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"シーク", tess:"下強", fighter_id:1160, skill_genre:10502, begin:5, end:6, time:26, base_damage:4.5, tes_val:"", }
,{tesf:"シーク", tess:"横スマッシュ", fighter_id:1160, skill_genre:10601, begin:12, end:12, time:44, base_damage:5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"シーク", tess:"横スマッシュ", fighter_id:1160, skill_genre:10601, begin:20, end:21, time:44, base_damage:8, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"シーク", tess:"上スマッシュ", fighter_id:1160, skill_genre:10600, begin:11, end:11, time:52, base_damage:15, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"シーク", tess:"上スマッシュ", fighter_id:1160, skill_genre:10600, begin:14, end:15, time:52, base_damage:11, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"シーク", tess:"下スマッシュ", fighter_id:1160, skill_genre:10602, begin:8, end:9, time:48, base_damage:4, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"シーク", tess:"下スマッシュ", fighter_id:1160, skill_genre:10602, begin:15, end:16, time:48, base_damage:6, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"シーク", tess:"空N", fighter_id:1160, skill_genre:10904, begin:3, end:6, time:49, base_damage:6, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:30, damage_no:1, tes_val:"", }
,{tesf:"シーク", tess:"空N", fighter_id:1160, skill_genre:10904, begin:3, end:6, time:49, base_damage:5, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:30, damage_no:2, tes_val:"", }
,{tesf:"シーク", tess:"空N", fighter_id:1160, skill_genre:10904, begin:7, end:30, time:49, base_damage:4, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:30, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"シーク", tess:"空N", fighter_id:1160, skill_genre:10904, begin:7, end:30, time:49, base_damage:3, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:30, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"シーク", tess:"空前", fighter_id:1160, skill_genre:10901, begin:5, end:7, time:34, base_damage:4.5, landing_lag:5, landing_occurrence_begin:5, landing_occurrence_end:10, damage_no:1, tes_val:"", }
,{tesf:"シーク", tess:"空前", fighter_id:1160, skill_genre:10901, begin:5, end:7, time:34, base_damage:3.8, landing_lag:5, landing_occurrence_begin:5, landing_occurrence_end:10, damage_no:2, tes_val:"", }
,{tesf:"シーク", tess:"空後", fighter_id:1160, skill_genre:10903, begin:4, end:6, time:37, base_damage:9.5, landing_lag:7, landing_occurrence_begin:4, landing_occurrence_end:30, damage_no:1, tes_val:"", }
,{tesf:"シーク", tess:"空後", fighter_id:1160, skill_genre:10903, begin:4, end:6, time:37, base_damage:7.5, landing_lag:7, landing_occurrence_begin:4, landing_occurrence_end:30, damage_no:2, tes_val:"", }
,{tesf:"シーク", tess:"空後", fighter_id:1160, skill_genre:10903, begin:7, end:14, time:37, base_damage:6, landing_lag:7, landing_occurrence_begin:4, landing_occurrence_end:30, persistence_num:1, tes_val:"持続", }
,{tesf:"シーク", tess:"空上", fighter_id:1160, skill_genre:10900, begin:4, end:15, time:43, base_damage:1, landing_lag:13, landing_occurrence_begin:4, landing_occurrence_end:43, rehit:4, tes_val:"連", }
,{tesf:"シーク", tess:"空上", fighter_id:1160, skill_genre:10900, begin:23, end:24, time:43, base_damage:4, landing_lag:13, landing_occurrence_begin:4, landing_occurrence_end:43, persistence_num:9, tes_val:"〆", }
,{tesf:"シーク", tess:"空下", fighter_id:1160, skill_genre:10902, begin:15, end:18, time:54, base_damage:10, landing_lag:22, landing_occurrence_begin:3, landing_occurrence_end:52, tes_val:"メテオ", }
,{tesf:"シーク", tess:"空下", fighter_id:1160, skill_genre:10902, begin:19, end:33, time:54, base_damage:10, landing_lag:22, landing_occurrence_begin:3, landing_occurrence_end:52, persistence_num:1, tes_val:"持続", }
,{tesf:"シーク", tess:"空下", fighter_id:1160, skill_genre:10902, begin:1, end:2, time:54, base_damage:2, landing_lag:22, landing_occurrence_begin:3, landing_occurrence_end:52, is_landing_attack:true, tes_val:"着地", }
,{tess:"その場投げ", fighter_id:1160 , skill_genre:10200, base_damage:0,begin:6, end:7, time:36}
,{tess:"ダッシュ投げ", fighter_id:1160 , skill_genre:10201, base_damage:0,begin:9, end:10, time:44}
,{tess:"ふりむき投げ", fighter_id:1160 , skill_genre:10202, base_damage:0,begin:11, end:12, time:39}

, {tesf:"ゼルダ", tess:"弱攻撃", fighter_id:1170, skill_genre:10300, begin:4, end:5, time:24, base_damage:2.5, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:30, alias:"弱1", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"弱1, Hit 1", }
,{tesf:"ゼルダ", tess:"弱攻撃", fighter_id:1170, skill_genre:10300, begin:7, end:7, time:24, base_damage:2.5, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:30, alias:"弱1", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"弱1, Hit 2", }
,{tesf:"ゼルダ", tess:"弱攻撃", fighter_id:1170, skill_genre:10300, begin:7, end:7, time:2, base_damage:0, landing_lag:5, landing_occurrence_begin:5, landing_occurrence_end:10, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"ゼルダ", tess:"弱攻撃", fighter_id:1170, skill_genre:10300, begin:2, end:2, time:17, base_damage:0.2, landing_lag:7, landing_occurrence_begin:4, landing_occurrence_end:30, alias:"百裂", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"2, 4, 6, 8, 10, 12, 14, 16", tes_val:"百裂, 連", correction:8}
,{tesf:"ゼルダ", tess:"弱攻撃", fighter_id:1170, skill_genre:10300, begin:6, end:7, time:42, base_damage:3, landing_lag:7, landing_occurrence_begin:4, landing_occurrence_end:30, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"ゼルダ", tess:"ダッシュ攻撃", fighter_id:1170, skill_genre:10400, begin:6, end:7, time:35, base_damage:12, landing_lag:13, landing_occurrence_begin:4, landing_occurrence_end:43, damage_no:1, tes_val:"", }
,{tesf:"ゼルダ", tess:"ダッシュ攻撃", fighter_id:1170, skill_genre:10400, begin:6, end:7, time:35, base_damage:9, landing_lag:13, landing_occurrence_begin:4, landing_occurrence_end:43, damage_no:2, tes_val:"", }
,{tesf:"ゼルダ", tess:"ダッシュ攻撃", fighter_id:1170, skill_genre:10400, begin:8, end:12, time:35, base_damage:6, landing_lag:13, landing_occurrence_begin:4, landing_occurrence_end:43, persistence_num:1, tes_val:"持続", }
,{tesf:"ゼルダ", tess:"横強", fighter_id:1170, skill_genre:10501, begin:12, end:13, time:36, base_damage:15, landing_lag:22, landing_occurrence_begin:3, landing_occurrence_end:52, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"ゼルダ", tess:"横強", fighter_id:1170, skill_genre:10501, begin:12, end:13, time:36, base_damage:11.5, landing_lag:22, landing_occurrence_begin:3, landing_occurrence_end:52, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"ゼルダ", tess:"上強", fighter_id:1170, skill_genre:10500, begin:7, end:19, time:29, base_damage:7.2, landing_lag:22, landing_occurrence_begin:3, landing_occurrence_end:52, tes_val:"", }
,{tesf:"ゼルダ", tess:"下強", fighter_id:1170, skill_genre:10502, begin:5, end:11, time:21, base_damage:5.5, landing_lag:22, landing_occurrence_begin:3, landing_occurrence_end:52, tes_val:"", }
,{tesf:"ゼルダ", tess:"横スマッシュ", fighter_id:1170, skill_genre:10601, begin:16, end:16, time:49, base_damage:1, landing_lag:22, landing_occurrence_begin:3, landing_occurrence_end:52, serial_num_str:"1-4", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"16, 18, 20, 22", tes_val:"Hit 1-4", }
,{tesf:"ゼルダ", tess:"横スマッシュ", fighter_id:1170, skill_genre:10601, begin:24, end:24, time:49, base_damage:13, landing_lag:22, landing_occurrence_begin:3, landing_occurrence_end:52, serial_num_str:"5", tes_message:"(連続ヒットする技)", tes_val:"Hit 5", }
,{tesf:"ゼルダ", tess:"上スマッシュ", fighter_id:1170, skill_genre:10600, begin:9, end:23, time:63, base_damage:2, landing_lag:22, landing_occurrence_begin:3, landing_occurrence_end:52, rehit:4, tes_val:"連1", }
,{tesf:"ゼルダ", tess:"上スマッシュ", fighter_id:1170, skill_genre:10600, begin:25, end:32, time:63, base_damage:0.8, landing_lag:22, landing_occurrence_begin:3, landing_occurrence_end:52, rehit:4, tes_val:"連2", }
,{tesf:"ゼルダ", tess:"上スマッシュ", fighter_id:1170, skill_genre:10600, begin:34, end:34, time:63, base_damage:5, landing_lag:22, landing_occurrence_begin:3, landing_occurrence_end:52, persistence_num:9, tes_val:"〆", }
,{tesf:"ゼルダ", tess:"下スマッシュ", fighter_id:1170, skill_genre:10602, begin:5, end:6, time:37, base_damage:12, landing_lag:22, landing_occurrence_begin:3, landing_occurrence_end:52, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ゼルダ", tess:"下スマッシュ", fighter_id:1170, skill_genre:10602, begin:13, end:14, time:37, base_damage:10, landing_lag:22, landing_occurrence_begin:3, landing_occurrence_end:52, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"ゼルダ", tess:"空N", fighter_id:1170, skill_genre:10904, begin:6, end:7, time:50, base_damage:2.5, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:37, damage_no:1, serial_num_str:"1-4", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"6-7, 10-11, 14-15, 18-19", tes_val:"Hit 1-4", }
,{tesf:"ゼルダ", tess:"空N", fighter_id:1170, skill_genre:10904, begin:6, end:7, time:50, base_damage:1.5, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:37, damage_no:2, serial_num_str:"1-4", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"6-7, 10-11, 14-15, 18-19", tes_val:"Hit 1-4", }
,{tesf:"ゼルダ", tess:"空N", fighter_id:1170, skill_genre:10904, begin:22, end:23, time:50, base_damage:5, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:37, serial_num_str:"5", tes_message:"(連続ヒットする技)", tes_val:"Hit 5", }
,{tesf:"ゼルダ", tess:"空前", fighter_id:1170, skill_genre:10901, begin:6, end:6, time:49, base_damage:20, landing_lag:15, landing_occurrence_begin:3, landing_occurrence_end:42, damage_no:1, tes_val:"", }
,{tesf:"ゼルダ", tess:"空前", fighter_id:1170, skill_genre:10901, begin:6, end:6, time:49, base_damage:4, landing_lag:15, landing_occurrence_begin:3, landing_occurrence_end:42, damage_no:2, tes_val:"", }
,{tesf:"ゼルダ", tess:"空前", fighter_id:1170, skill_genre:10901, begin:7, end:10, time:49, base_damage:4, landing_lag:15, landing_occurrence_begin:3, landing_occurrence_end:42, persistence_num:1, tes_val:"持続", }
,{tesf:"ゼルダ", tess:"空後", fighter_id:1170, skill_genre:10903, begin:6, end:6, time:49, base_damage:20, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:44, damage_no:1, tes_val:"", }
,{tesf:"ゼルダ", tess:"空後", fighter_id:1170, skill_genre:10903, begin:6, end:6, time:49, base_damage:4, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:44, damage_no:2, tes_val:"", }
,{tesf:"ゼルダ", tess:"空後", fighter_id:1170, skill_genre:10903, begin:7, end:10, time:49, base_damage:4, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:44, persistence_num:1, tes_val:"持続", }
,{tesf:"ゼルダ", tess:"空上", fighter_id:1170, skill_genre:10900, begin:14, end:16, time:54, base_damage:17, landing_lag:12, landing_occurrence_begin:5, landing_occurrence_end:53, tes_val:"", }
,{tesf:"ゼルダ", tess:"空上", fighter_id:1170, skill_genre:10900, begin:17, end:19, time:54, base_damage:12, landing_lag:12, landing_occurrence_begin:5, landing_occurrence_end:53, persistence_num:1, tes_val:"持続", }
,{tesf:"ゼルダ", tess:"空下", fighter_id:1170, skill_genre:10902, begin:14, end:14, time:44, base_damage:16, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:39, tes_val:"", }
,{tesf:"ゼルダ", tess:"空下", fighter_id:1170, skill_genre:10902, begin:15, end:24, time:44, base_damage:5, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:39, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"ゼルダ", tess:"空下", fighter_id:1170, skill_genre:10902, begin:15, end:24, time:44, base_damage:4, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:39, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tess:"その場投げ", fighter_id:1170 , skill_genre:10200, base_damage:0,begin:10, end:11, time:39}
,{tess:"ダッシュ投げ", fighter_id:1170 , skill_genre:10201, base_damage:0,begin:13, end:14, time:47}
,{tess:"ふりむき投げ", fighter_id:1170 , skill_genre:10202, base_damage:0,begin:14, end:15, time:42}

, {tesf:"ドクターマリオ", tess:"弱攻撃", fighter_id:1180, skill_genre:10300, begin:2, end:3, time:19, base_damage:2.94, alias:"弱1", tes_val:"弱1", }
,{tesf:"ドクターマリオ", tess:"弱攻撃", fighter_id:1180, skill_genre:10300, begin:2, end:3, time:6, base_damage:2.94, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ドクターマリオ", tess:"弱攻撃", fighter_id:1180, skill_genre:10300, begin:2, end:3, time:21, base_damage:1.764, alias:"弱2", tes_val:"弱2", }
,{tesf:"ドクターマリオ", tess:"弱攻撃", fighter_id:1180, skill_genre:10300, begin:3, end:4, time:33, base_damage:4.704, alias:"弱3", tes_val:"弱3", }
,{tesf:"ドクターマリオ", tess:"ダッシュ攻撃", fighter_id:1180, skill_genre:10400, begin:6, end:9, time:37, base_damage:11.5248, tes_val:"", correction:1.875}
,{tesf:"ドクターマリオ", tess:"ダッシュ攻撃", fighter_id:1180, skill_genre:10400, begin:10, end:25, time:37, base_damage:7.056, persistence_num:1, tes_val:"持続", correction:1.875}
,{tesf:"ドクターマリオ", tess:"横強", fighter_id:1180, skill_genre:10501, begin:5, end:7, time:25, base_damage:10.584, shift:"all", tes_val:"全シフト", }
,{tesf:"ドクターマリオ", tess:"上強", fighter_id:1180, skill_genre:10500, begin:5, end:11, time:29, base_damage:7.4088, tes_val:"", }
,{tesf:"ドクターマリオ", tess:"下強", fighter_id:1180, skill_genre:10502, begin:5, end:7, time:27, base_damage:8.232, damage_no:1, tes_val:"", }
,{tesf:"ドクターマリオ", tess:"下強", fighter_id:1180, skill_genre:10502, begin:5, end:7, time:27, base_damage:5.88, damage_no:2, tes_val:"", }
,{tesf:"ドクターマリオ", tess:"横スマッシュ", fighter_id:1180, skill_genre:10601, begin:15, end:17, time:47, base_damage:20.9328, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"ドクターマリオ", tess:"横スマッシュ", fighter_id:1180, skill_genre:10601, begin:15, end:17, time:47, base_damage:17.2872, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"ドクターマリオ", tess:"上スマッシュ", fighter_id:1180, skill_genre:10600, begin:9, end:13, time:39, base_damage:16.464, tes_val:"", }
,{tesf:"ドクターマリオ", tess:"下スマッシュ", fighter_id:1180, skill_genre:10602, begin:5, end:6, time:43, base_damage:11.76, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ドクターマリオ", tess:"下スマッシュ", fighter_id:1180, skill_genre:10602, begin:14, end:14, time:43, base_damage:14.112, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"ドクターマリオ", tess:"空N", fighter_id:1180, skill_genre:10904, begin:3, end:10, time:45, base_damage:5.88, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:33, tes_val:"", }
,{tesf:"ドクターマリオ", tess:"空N", fighter_id:1180, skill_genre:10904, begin:11, end:27, time:45, base_damage:11.76, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:33, persistence_num:1, tes_val:"持続", }
,{tesf:"ドクターマリオ", tess:"空前", fighter_id:1180, skill_genre:10901, begin:16, end:16, time:59, base_damage:11.76, landing_lag:17, landing_occurrence_begin:3, landing_occurrence_end:42, persistence_num:0, tes_val:"始", }
,{tesf:"ドクターマリオ", tess:"空前", fighter_id:1180, skill_genre:10901, begin:17, end:20, time:59, base_damage:17.64, landing_lag:17, landing_occurrence_begin:3, landing_occurrence_end:42, tes_val:"", }
,{tesf:"ドクターマリオ", tess:"空前", fighter_id:1180, skill_genre:10901, begin:21, end:21, time:59, base_damage:10.584, landing_lag:17, landing_occurrence_begin:3, landing_occurrence_end:42, persistence_num:1, tes_val:"持続", }
,{tesf:"ドクターマリオ", tess:"空後", fighter_id:1180, skill_genre:10903, begin:6, end:8, time:33, base_damage:14.112, landing_lag:6, landing_occurrence_begin:6, landing_occurrence_end:18, tes_val:"", }
,{tesf:"ドクターマリオ", tess:"空後", fighter_id:1180, skill_genre:10903, begin:9, end:13, time:33, base_damage:8.232, landing_lag:6, landing_occurrence_begin:6, landing_occurrence_end:18, persistence_num:1, tes_val:"持続", }
,{tesf:"ドクターマリオ", tess:"空上", fighter_id:1180, skill_genre:10900, begin:4, end:7, time:30, base_damage:10.2312, landing_lag:6, landing_occurrence_begin:2, landing_occurrence_end:16, tes_val:"", }
,{tesf:"ドクターマリオ", tess:"空下", fighter_id:1180, skill_genre:10902, begin:16, end:19, time:44, base_damage:14.112, landing_lag:15, landing_occurrence_begin:6, landing_occurrence_end:34, tes_val:"", }
,{tess:"その場投げ", fighter_id:1180 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34}
,{tess:"ダッシュ投げ", fighter_id:1180 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42}
,{tess:"ふりむき投げ", fighter_id:1180 , skill_genre:10202, base_damage:0,begin:10, end:11, time:36}

, {tesf:"ピチュー", tess:"弱攻撃", fighter_id:1190, skill_genre:10300, begin:2, end:3, time:16, base_damage:1.2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ピチュー", tess:"弱攻撃", fighter_id:1190, skill_genre:10300, begin:2, end:3, time:6, base_damage:1.2, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ピチュー", tess:"ダッシュ攻撃", fighter_id:1190, skill_genre:10400, begin:6, end:9, time:34, base_damage:8, tes_val:"", }
,{tesf:"ピチュー", tess:"ダッシュ攻撃", fighter_id:1190, skill_genre:10400, begin:10, end:15, time:34, base_damage:6, persistence_num:1, tes_val:"持続", }
,{tesf:"ピチュー", tess:"横強", fighter_id:1190, skill_genre:10501, begin:5, end:9, time:24, base_damage:8, detail_name:"左足", tes_val:"左足", }
,{tesf:"ピチュー", tess:"横強", fighter_id:1190, skill_genre:10501, begin:9, end:12, time:24, base_damage:0, detail_name:"右足", tes_val:"右足", }
,{tesf:"ピチュー", tess:"上強", fighter_id:1190, skill_genre:10500, begin:7, end:14, time:23, base_damage:5, tes_val:"", }
,{tesf:"ピチュー", tess:"下強", fighter_id:1190, skill_genre:10502, begin:7, end:8, time:18, base_damage:6, tes_val:"", }
,{tesf:"ピチュー", tess:"横スマッシュ", fighter_id:1190, skill_genre:10601, begin:16, end:18, time:53, base_damage:2, serial_num_str:"1-5", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"16-18, 19-21,22-24, 25-2728-30", tes_val:"Hit 1-5", }
,{tesf:"ピチュー", tess:"横スマッシュ", fighter_id:1190, skill_genre:10601, begin:31, end:33, time:53, base_damage:8, serial_num_str:"6", tes_message:"(連続ヒットする技)", tes_val:"Hit 6", }
,{tesf:"ピチュー", tess:"上スマッシュ", fighter_id:1190, skill_genre:10600, begin:9, end:11, time:40, base_damage:14, tes_val:"", }
,{tesf:"ピチュー", tess:"下スマッシュ", fighter_id:1190, skill_genre:10602, begin:8, end:9, time:50, base_damage:1.5, serial_num_str:"1-4", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"8-9, 11-12,15-16, 19-20", tes_val:"Hit 1-4", }
,{tesf:"ピチュー", tess:"下スマッシュ", fighter_id:1190, skill_genre:10602, begin:23, end:24, time:50, base_damage:8, serial_num_str:"5", tes_message:"(連続ヒットする技)", tes_val:"Hit 5", }
, {tesf:"ピチュー", tess:"空N", fighter_id:1190, skill_genre:10904, begin:3, end:9, time:39, base_damage:7, landing_lag:7, landing_occurrence_begin:3, landing_occurrence_end:34, tes_val:"", }
,{tesf:"ピチュー", tess:"空N", fighter_id:1190, skill_genre:10904, begin:10, end:27, time:39, base_damage:5, landing_lag:7, landing_occurrence_begin:3, landing_occurrence_end:34, persistence_num:1, tes_val:"持続", }
,{tesf:"ピチュー", tess:"空前", fighter_id:1190, skill_genre:10901, begin:10, end:12, time:39, base_damage:3.5, landing_lag:12, landing_occurrence_begin:10, landing_occurrence_end:33, serial_num_str:"1-3", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"10-12, 14-16, 18-20", tes_val:"Hit 1-3", }
,{tesf:"ピチュー", tess:"空前", fighter_id:1190, skill_genre:10901, begin:22, end:23, time:39, base_damage:3.5, landing_lag:12, landing_occurrence_begin:10, landing_occurrence_end:33, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }
,{tesf:"ピチュー", tess:"空後", fighter_id:1190, skill_genre:10903, begin:5, end:6, time:54, base_damage:2, landing_lag:18, landing_occurrence_begin:5, landing_occurrence_end:37, serial_num_str:"1-5", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"5-6, 11-12, 15-16, 19-20, 26-27", tes_val:"Hit 1-5", }
,{tesf:"ピチュー", tess:"空後", fighter_id:1190, skill_genre:10903, begin:30, end:31, time:54, base_damage:2.5, landing_lag:18, landing_occurrence_begin:5, landing_occurrence_end:37, serial_num_str:"6", tes_message:"(連続ヒットする技)", tes_val:"Hit 6", }
,{tesf:"ピチュー", tess:"空上", fighter_id:1190, skill_genre:10900, begin:4, end:9, time:26, base_damage:4, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:17, tes_val:"", }
,{tesf:"ピチュー", tess:"空下", fighter_id:1190, skill_genre:10902, begin:14, end:17, time:47, base_damage:13, landing_lag:22, landing_occurrence_begin:1, landing_occurrence_end:31, tes_val:"", }
,{tesf:"ピチュー", tess:"空下", fighter_id:1190, skill_genre:10902, begin:18, end:26, time:47, base_damage:12, landing_lag:22, landing_occurrence_begin:1, landing_occurrence_end:31, persistence_num:1, tes_val:"持続", }
,{tesf:"ピチュー", tess:"空下", fighter_id:1190, skill_genre:10902, begin:1, end:2, time:47, base_damage:4, landing_lag:22, landing_occurrence_begin:1, landing_occurrence_end:31, is_landing_attack:true, tes_val:"着地", }
,{tess:"その場投げ", fighter_id:1190 , skill_genre:10200, base_damage:0,begin:6, end:7, time:31}
,{tess:"ダッシュ投げ", fighter_id:1190 , skill_genre:10201, base_damage:0,begin:8, end:9, time:39}
,{tess:"ふりむき投げ", fighter_id:1190 , skill_genre:10202, base_damage:0,begin:9, end:10, time:36}

, {tesf:"ファルコ", tess:"弱攻撃", fighter_id:1200, skill_genre:10300, begin:2, end:2, time:22, base_damage:1.5, alias:"弱1", tes_val:"弱1", }
,{tesf:"ファルコ", tess:"弱攻撃", fighter_id:1200, skill_genre:10300, begin:3, end:4, time:25, base_damage:1.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"ファルコ", tess:"弱攻撃", fighter_id:1200, skill_genre:10300, begin:3, end:4, time:2, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"ファルコ", tess:"弱攻撃", fighter_id:1200, skill_genre:10300, begin:3, end:3, time:17, base_damage:0.3, alias:"百裂", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 5, 7, 9, 11, 13, 15, 17", tes_val:"百裂, 連", correction:5}
,{tesf:"ファルコ", tess:"弱攻撃", fighter_id:1200, skill_genre:10300, begin:5, end:6, time:40, base_damage:3, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"ファルコ", tess:"ダッシュ攻撃", fighter_id:1200, skill_genre:10400, begin:8, end:11, time:39, base_damage:9, tes_val:"", }
,{tesf:"ファルコ", tess:"ダッシュ攻撃", fighter_id:1200, skill_genre:10400, begin:12, end:18, time:39, base_damage:6, persistence_num:1, tes_val:"持続", }
,{tesf:"ファルコ", tess:"横強", fighter_id:1200, skill_genre:10501, begin:6, end:8, time:24, base_damage:6, shift:"all", tes_val:"全シフト", }
,{tesf:"ファルコ", tess:"上強", fighter_id:1200, skill_genre:10500, begin:5, end:5, time:29, base_damage:3.5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ファルコ", tess:"上強", fighter_id:1200, skill_genre:10500, begin:6, end:9, time:29, base_damage:3.5, damage_no:1, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"ファルコ", tess:"上強", fighter_id:1200, skill_genre:10500, begin:6, end:9, time:29, base_damage:2.7, damage_no:2, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"ファルコ", tess:"上強", fighter_id:1200, skill_genre:10500, begin:12, end:16, time:29, base_damage:4, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ファルコ", tess:"下強", fighter_id:1200, skill_genre:10502, begin:10, end:12, time:31, base_damage:13, damage_no:1, tes_val:"", }
,{tesf:"ファルコ", tess:"下強", fighter_id:1200, skill_genre:10502, begin:10, end:12, time:31, base_damage:12, damage_no:2, tes_val:"", }
,{tesf:"ファルコ", tess:"下強", fighter_id:1200, skill_genre:10502, begin:10, end:12, time:31, base_damage:10.5, damage_no:3, tes_val:"", }
,{tesf:"ファルコ", tess:"横スマッシュ", fighter_id:1200, skill_genre:10601, begin:17, end:19, time:48, base_damage:16, tes_val:"", }
,{tesf:"ファルコ", tess:"横スマッシュ", fighter_id:1200, skill_genre:10601, begin:20, end:20, time:48, base_damage:12, persistence_num:1, tes_val:"持続", }
,{tesf:"ファルコ", tess:"上スマッシュ", fighter_id:1200, skill_genre:10600, begin:7, end:7, time:49, base_damage:4, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ファルコ", tess:"上スマッシュ", fighter_id:1200, skill_genre:10600, begin:8, end:12, time:49, base_damage:4, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"ファルコ", tess:"上スマッシュ", fighter_id:1200, skill_genre:10600, begin:13, end:18, time:49, base_damage:13, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ファルコ", tess:"下スマッシュ", fighter_id:1200, skill_genre:10602, begin:8, end:10, time:46, base_damage:15, damage_no:1, tes_val:"", }
,{tesf:"ファルコ", tess:"下スマッシュ", fighter_id:1200, skill_genre:10602, begin:8, end:10, time:46, base_damage:12, damage_no:2, tes_val:"", }
, {tesf:"ファルコ", tess:"空N", fighter_id:1200, skill_genre:10904, begin:3, end:5, time:48, base_damage:3, landing_lag:9, landing_occurrence_begin:3, landing_occurrence_end:42, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ファルコ", tess:"空N", fighter_id:1200, skill_genre:10904, begin:6, end:9, time:48, base_damage:2, landing_lag:9, landing_occurrence_begin:3, landing_occurrence_end:42, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ファルコ", tess:"空N", fighter_id:1200, skill_genre:10904, begin:10, end:13, time:48, base_damage:2, landing_lag:9, landing_occurrence_begin:3, landing_occurrence_end:42, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"ファルコ", tess:"空N", fighter_id:1200, skill_genre:10904, begin:19, end:20, time:48, base_damage:4, landing_lag:9, landing_occurrence_begin:3, landing_occurrence_end:42, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }
,{tesf:"ファルコ", tess:"空前", fighter_id:1200, skill_genre:10901, begin:7, end:25, time:49, base_damage:1, landing_lag:15, landing_occurrence_begin:5, landing_occurrence_end:41, rehit:4, tes_val:"連", }
,{tesf:"ファルコ", tess:"空前", fighter_id:1200, skill_genre:10901, begin:26, end:27, time:49, base_damage:4, landing_lag:15, landing_occurrence_begin:5, landing_occurrence_end:41, persistence_num:9, tes_val:"〆", }
,{tesf:"ファルコ", tess:"空前", fighter_id:1200, skill_genre:10901, begin:1, end:1, time:49, base_damage:3, landing_lag:15, landing_occurrence_begin:5, landing_occurrence_end:41, is_landing_attack:true, tes_val:"着地", }
,{tesf:"ファルコ", tess:"空後", fighter_id:1200, skill_genre:10903, begin:9, end:10, time:37, base_damage:13, landing_lag:13, landing_occurrence_begin:4, landing_occurrence_end:19, tes_val:"", }
,{tesf:"ファルコ", tess:"空後", fighter_id:1200, skill_genre:10903, begin:11, end:16, time:37, base_damage:7, landing_lag:13, landing_occurrence_begin:4, landing_occurrence_end:19, persistence_num:1, tes_val:"持続", }
,{tesf:"ファルコ", tess:"空上", fighter_id:1200, skill_genre:10900, begin:7, end:11, time:33, base_damage:9, landing_lag:9, landing_occurrence_begin:4, landing_occurrence_end:22, tes_val:"", }
,{tesf:"ファルコ", tess:"空下", fighter_id:1200, skill_genre:10902, begin:10, end:14, time:51, base_damage:13, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:29, defend_position:"ground", tes_val:"本当て, 対地", }
,{tesf:"ファルコ", tess:"空下", fighter_id:1200, skill_genre:10902, begin:10, end:14, time:51, base_damage:0, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:29, defend_position:"air", tes_val:"本当て, 対空", }
,{tesf:"ファルコ", tess:"空下", fighter_id:1200, skill_genre:10902, begin:15, end:24, time:51, base_damage:8, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:29, persistence_num:1, tes_val:"持続", }
,{tess:"その場投げ", fighter_id:1200 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34}
,{tess:"ダッシュ投げ", fighter_id:1200 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42}
,{tess:"ふりむき投げ", fighter_id:1200 , skill_genre:10202, base_damage:0,begin:10, end:11, time:37}

, {tesf:"ルキナ", tess:"弱攻撃", fighter_id:1211, skill_genre:10300, begin:5, end:6, time:25, base_damage:3.325, alias:"弱1", tes_val:"弱1", }
,{tesf:"ルキナ", tess:"弱攻撃", fighter_id:1211, skill_genre:10300, begin:4, end:5, time:28, base_damage:4.75, alias:"弱2", tes_val:"弱2", }
,{tesf:"ルキナ", tess:"ダッシュ攻撃", fighter_id:1211, skill_genre:10400, begin:13, end:16, time:49, base_damage:10.925, tes_val:"", correction:1.5}
,{tesf:"ルキナ", tess:"横強", fighter_id:1211, skill_genre:10501, begin:8, end:11, time:33, base_damage:11, tes_val:"", }
,{tesf:"ルキナ", tess:"上強", fighter_id:1211, skill_genre:10500, begin:6, end:8, time:33, base_damage:7.6, persistence_num:0, tes_val:"始", }
,{tesf:"ルキナ", tess:"上強", fighter_id:1211, skill_genre:10500, begin:9, end:12, time:33, base_damage:8.075, tes_val:"", }
,{tesf:"ルキナ", tess:"下強", fighter_id:1211, skill_genre:10502, begin:7, end:8, time:23, base_damage:8.5, tes_val:"", }
,{tesf:"ルキナ", tess:"横スマッシュ", fighter_id:1211, skill_genre:10601, begin:10, end:13, time:51, base_damage:15, tes_val:"", }
,{tesf:"ルキナ", tess:"上スマッシュ", fighter_id:1211, skill_genre:10600, begin:13, end:14, time:58, base_damage:3, rehit:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ルキナ", tess:"上スマッシュ", fighter_id:1211, skill_genre:10600, begin:13, end:17, time:58, base_damage:14.25, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ルキナ", tess:"下スマッシュ", fighter_id:1211, skill_genre:10602, begin:6, end:7, time:55, base_damage:9.5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ルキナ", tess:"下スマッシュ", fighter_id:1211, skill_genre:10602, begin:21, end:23, time:55, base_damage:14, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"ルキナ", tess:"空N", fighter_id:1211, skill_genre:10904, begin:6, end:7, time:49, base_damage:4.275, landing_lag:6, landing_occurrence_begin:2, landing_occurrence_end:46, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ルキナ", tess:"空N", fighter_id:1211, skill_genre:10904, begin:15, end:21, time:49, base_damage:8.55, landing_lag:6, landing_occurrence_begin:2, landing_occurrence_end:46, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ルキナ", tess:"空前", fighter_id:1211, skill_genre:10901, begin:6, end:8, time:37, base_damage:10.5, landing_lag:17, landing_occurrence_begin:1, landing_occurrence_end:35, tes_val:"", }
,{tesf:"ルキナ", tess:"空後", fighter_id:1211, skill_genre:10903, begin:7, end:11, time:39, base_damage:11.875, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:31, tes_val:"", }
,{tesf:"ルキナ", tess:"空上", fighter_id:1211, skill_genre:10900, begin:5, end:9, time:45, base_damage:11.4, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:37, tes_val:"", }
,{tesf:"ルキナ", tess:"空下", fighter_id:1211, skill_genre:10902, begin:9, end:13, time:59, base_damage:12.35, landing_lag:15, landing_occurrence_begin:3, landing_occurrence_end:54, tes_val:"", }
,{tesf:"ルキナ", tess:"空下", fighter_id:1211, skill_genre:10902, begin:11, end:11, time:59, base_damage:14.25, landing_lag:15, landing_occurrence_begin:3, landing_occurrence_end:54, tes_val:"メテオ", }
,{tess:"その場投げ", fighter_id:1211 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34}
,{tess:"ダッシュ投げ", fighter_id:1211 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42}
,{tess:"ふりむき投げ", fighter_id:1211 , skill_genre:10202, base_damage:0,begin:10, end:11, time:37}

, {tesf:"マルス", tess:"弱攻撃", fighter_id:1210, skill_genre:10300, begin:5, end:6, time:25, base_damage:5, damage_no:1, alias:"弱1", tes_val:"弱1", }
,{tesf:"マルス", tess:"弱攻撃", fighter_id:1210, skill_genre:10300, begin:5, end:6, time:25, base_damage:3, damage_no:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"マルス", tess:"弱攻撃", fighter_id:1210, skill_genre:10300, begin:4, end:5, time:28, base_damage:6, damage_no:1, alias:"弱2", tes_val:"弱2", }
,{tesf:"マルス", tess:"弱攻撃", fighter_id:1210, skill_genre:10300, begin:4, end:5, time:28, base_damage:4, damage_no:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"マルス", tess:"ダッシュ攻撃", fighter_id:1210, skill_genre:10400, begin:13, end:15, time:49, base_damage:12, damage_no:1, tes_val:"", correction:1.5}
,{tesf:"マルス", tess:"ダッシュ攻撃", fighter_id:1210, skill_genre:10400, begin:13, end:15, time:49, base_damage:10, damage_no:2, tes_val:"", correction:1.5}
,{tesf:"マルス", tess:"ダッシュ攻撃", fighter_id:1210, skill_genre:10400, begin:13, end:15, time:49, base_damage:9, damage_no:3, tes_val:"", }
,{tesf:"マルス", tess:"ダッシュ攻撃", fighter_id:1210, skill_genre:10400, begin:16, end:16, time:49, base_damage:12, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"マルス", tess:"ダッシュ攻撃", fighter_id:1210, skill_genre:10400, begin:16, end:16, time:49, base_damage:10, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"マルス", tess:"ダッシュ攻撃", fighter_id:1210, skill_genre:10400, begin:16, end:16, time:49, base_damage:9, damage_no:3, persistence_num:1, tes_val:"持続", }
,{tesf:"マルス", tess:"横強", fighter_id:1210, skill_genre:10501, begin:8, end:11, time:33, base_damage:12, damage_no:1, tes_val:"", }
,{tesf:"マルス", tess:"横強", fighter_id:1210, skill_genre:10501, begin:8, end:11, time:33, base_damage:9, damage_no:2, tes_val:"", }
,{tesf:"マルス", tess:"上強", fighter_id:1210, skill_genre:10500, begin:6, end:6, time:33, base_damage:9, damage_no:1, tes_val:"", }
,{tesf:"マルス", tess:"上強", fighter_id:1210, skill_genre:10500, begin:6, end:6, time:33, base_damage:6, damage_no:2, tes_val:"", }
,{tesf:"マルス", tess:"上強", fighter_id:1210, skill_genre:10500, begin:6, end:6, time:33, base_damage:5, damage_no:3, tes_val:"", }
,{tesf:"マルス", tess:"上強", fighter_id:1210, skill_genre:10500, begin:7, end:8, time:33, base_damage:9, damage_no:1, persistence_num:1, tes_val:"持続1", }
,{tesf:"マルス", tess:"上強", fighter_id:1210, skill_genre:10500, begin:7, end:8, time:33, base_damage:6, damage_no:2, persistence_num:1, tes_val:"持続1", }
,{tesf:"マルス", tess:"上強", fighter_id:1210, skill_genre:10500, begin:7, end:8, time:33, base_damage:5, damage_no:3, persistence_num:1, tes_val:"持続1", }
,{tesf:"マルス", tess:"上強", fighter_id:1210, skill_genre:10500, begin:9, end:12, time:33, base_damage:9, damage_no:1, persistence_num:2, tes_val:"持続2", }
,{tesf:"マルス", tess:"上強", fighter_id:1210, skill_genre:10500, begin:9, end:12, time:33, base_damage:6, damage_no:2, persistence_num:2, tes_val:"持続2", }
,{tesf:"マルス", tess:"上強", fighter_id:1210, skill_genre:10500, begin:9, end:12, time:33, base_damage:5, damage_no:3, persistence_num:2, tes_val:"持続2", }
,{tesf:"マルス", tess:"下強", fighter_id:1210, skill_genre:10502, begin:7, end:8, time:23, base_damage:10, damage_no:1, tes_val:"", }
,{tesf:"マルス", tess:"下強", fighter_id:1210, skill_genre:10502, begin:7, end:8, time:23, base_damage:7, damage_no:2, tes_val:"", }
,{tesf:"マルス", tess:"横スマッシュ", fighter_id:1210, skill_genre:10601, begin:10, end:13, time:51, base_damage:18, damage_no:1, tes_val:"", }
,{tesf:"マルス", tess:"横スマッシュ", fighter_id:1210, skill_genre:10601, begin:10, end:13, time:51, base_damage:13, damage_no:2, tes_val:"", }
,{tesf:"マルス", tess:"上スマッシュ", fighter_id:1210, skill_genre:10600, begin:13, end:14, time:58, base_damage:3, rehit:2, serial_num_str:"1", defend_position:"ground_only", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 対地のみ", }
,{tesf:"マルス", tess:"上スマッシュ", fighter_id:1210, skill_genre:10600, begin:13, end:17, time:58, base_damage:17, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"マルス", tess:"上スマッシュ", fighter_id:1210, skill_genre:10600, begin:13, end:17, time:58, base_damage:13, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"マルス", tess:"下スマッシュ", fighter_id:1210, skill_genre:10602, begin:6, end:7, time:55, base_damage:12, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"マルス", tess:"下スマッシュ", fighter_id:1210, skill_genre:10602, begin:6, end:7, time:55, base_damage:8, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"マルス", tess:"下スマッシュ", fighter_id:1210, skill_genre:10602, begin:21, end:23, time:55, base_damage:17, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"マルス", tess:"下スマッシュ", fighter_id:1210, skill_genre:10602, begin:21, end:23, time:55, base_damage:12, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"マルス", tess:"空N", fighter_id:1210, skill_genre:10904, begin:6, end:7, time:49, base_damage:5, landing_lag:7, landing_occurrence_begin:2, landing_occurrence_end:46, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"マルス", tess:"空N", fighter_id:1210, skill_genre:10904, begin:6, end:7, time:49, base_damage:3.5, landing_lag:7, landing_occurrence_begin:2, landing_occurrence_end:46, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"マルス", tess:"空N", fighter_id:1210, skill_genre:10904, begin:15, end:21, time:49, base_damage:9.5, landing_lag:7, landing_occurrence_begin:2, landing_occurrence_end:46, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"マルス", tess:"空N", fighter_id:1210, skill_genre:10904, begin:15, end:21, time:49, base_damage:7, landing_lag:7, landing_occurrence_begin:2, landing_occurrence_end:46, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"マルス", tess:"空前", fighter_id:1210, skill_genre:10901, begin:6, end:8, time:37, base_damage:11.5, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:35, damage_no:1, tes_val:"", }
,{tesf:"マルス", tess:"空前", fighter_id:1210, skill_genre:10901, begin:6, end:8, time:37, base_damage:8, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:35, damage_no:2, tes_val:"", }
,{tesf:"マルス", tess:"空後", fighter_id:1210, skill_genre:10903, begin:7, end:11, time:39, base_damage:12.5, landing_lag:10, landing_occurrence_begin:3, landing_occurrence_end:31, damage_no:1, tes_val:"", }
,{tesf:"マルス", tess:"空後", fighter_id:1210, skill_genre:10903, begin:7, end:11, time:39, base_damage:9, landing_lag:10, landing_occurrence_begin:3, landing_occurrence_end:31, damage_no:2, tes_val:"", }
,{tesf:"マルス", tess:"空上", fighter_id:1210, skill_genre:10900, begin:5, end:9, time:45, base_damage:13, landing_lag:8, landing_occurrence_begin:3, landing_occurrence_end:37, damage_no:1, tes_val:"", }
,{tesf:"マルス", tess:"空上", fighter_id:1210, skill_genre:10900, begin:5, end:9, time:45, base_damage:9.5, landing_lag:8, landing_occurrence_begin:3, landing_occurrence_end:37, damage_no:2, tes_val:"", }
,{tesf:"マルス", tess:"空下", fighter_id:1210, skill_genre:10902, begin:9, end:13, time:59, base_damage:14, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:54, damage_no:1, tes_val:"", }
,{tesf:"マルス", tess:"空下", fighter_id:1210, skill_genre:10902, begin:9, end:13, time:59, base_damage:12, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:54, damage_no:2, tes_val:"", }
,{tesf:"マルス", tess:"空下", fighter_id:1210, skill_genre:10902, begin:11, end:11, time:59, base_damage:15, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:54, tes_val:"メテオ", }
,{tess:"その場投げ", fighter_id:1210 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34}
,{tess:"ダッシュ投げ", fighter_id:1210 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42}
,{tess:"ふりむき投げ", fighter_id:1210 , skill_genre:10202, base_damage:0,begin:10, end:11, time:37}

, {tesf:"こどもリンク", tess:"弱攻撃", fighter_id:1220, skill_genre:10300, begin:4, end:5, time:17, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"こどもリンク", tess:"弱攻撃", fighter_id:1220, skill_genre:10300, begin:6, end:7, time:16, base_damage:1.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"こどもリンク", tess:"弱攻撃", fighter_id:1220, skill_genre:10300, begin:6, end:7, time:35, base_damage:3.5, alias:"弱3", tes_val:"弱3", }
,{tesf:"こどもリンク", tess:"弱攻撃", fighter_id:1220, skill_genre:10300, begin:6, end:7, time:3, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"こどもリンク", tess:"弱攻撃", fighter_id:1220, skill_genre:10300, begin:3, end:3, time:17, base_damage:0.3, alias:"百裂", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 5, 7, 9, 11, 13, 15, 17", tes_val:"百裂, 連",correction:6 }
,{tesf:"こどもリンク", tess:"弱攻撃", fighter_id:1220, skill_genre:10300, begin:4, end:5, time:45, base_damage:2.5, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"こどもリンク", tess:"ダッシュ攻撃", fighter_id:1220, skill_genre:10400, begin:8, end:10, time:34, base_damage:11, damage_no:1, tes_val:"", }
,{tesf:"こどもリンク", tess:"ダッシュ攻撃", fighter_id:1220, skill_genre:10400, begin:8, end:10, time:34, base_damage:10, damage_no:2, tes_val:"", }
,{tesf:"こどもリンク", tess:"横強", fighter_id:1220, skill_genre:10501, begin:10, end:12, time:33, base_damage:12, damage_no:1, tes_val:"", }
,{tesf:"こどもリンク", tess:"横強", fighter_id:1220, skill_genre:10501, begin:10, end:12, time:33, base_damage:11, damage_no:2, tes_val:"", }
,{tesf:"こどもリンク", tess:"上強", fighter_id:1220, skill_genre:10500, begin:9, end:14, time:31, base_damage:8, tes_val:"", }
,{tesf:"こどもリンク", tess:"下強", fighter_id:1220, skill_genre:10502, begin:8, end:9, time:25, base_damage:10, damage_no:1, tes_val:"", }
,{tesf:"こどもリンク", tess:"下強", fighter_id:1220, skill_genre:10502, begin:8, end:9, time:25, base_damage:9, damage_no:2, tes_val:"", }
,{tesf:"こどもリンク", tess:"下強", fighter_id:1220, skill_genre:10502, begin:8, end:9, time:25, base_damage:7, damage_no:3, tes_val:"", }
,{tesf:"こどもリンク", tess:"横スマッシュ", fighter_id:1220, skill_genre:10601, begin:15, end:16, time:47, base_damage:6, alias:"横スマ1", tes_val:"横スマ1", }
,{tesf:"こどもリンク", tess:"横スマッシュ", fighter_id:1220, skill_genre:10601, begin:11, end:12, time:49, base_damage:12, damage_no:1, alias:"横スマ2", tes_val:"横スマ2", }
,{tesf:"こどもリンク", tess:"横スマッシュ", fighter_id:1220, skill_genre:10601, begin:11, end:12, time:49, base_damage:10, damage_no:2, alias:"横スマ2", tes_val:"横スマ2", }
,{tesf:"こどもリンク", tess:"上スマッシュ", fighter_id:1220, skill_genre:10600, begin:10, end:14, time:69, base_damage:3, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"こどもリンク", tess:"上スマッシュ", fighter_id:1220, skill_genre:10600, begin:25, end:29, time:69, base_damage:3, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"こどもリンク", tess:"上スマッシュ", fighter_id:1220, skill_genre:10600, begin:41, end:45, time:69, base_damage:8, damage_no:1, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"こどもリンク", tess:"上スマッシュ", fighter_id:1220, skill_genre:10600, begin:41, end:45, time:69, base_damage:7, damage_no:2, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"こどもリンク", tess:"下スマッシュ", fighter_id:1220, skill_genre:10602, begin:9, end:10, time:49, base_damage:13, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"こどもリンク", tess:"下スマッシュ", fighter_id:1220, skill_genre:10602, begin:9, end:10, time:49, base_damage:10, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"こどもリンク", tess:"下スマッシュ", fighter_id:1220, skill_genre:10602, begin:21, end:22, time:49, base_damage:12, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"こどもリンク", tess:"下スマッシュ", fighter_id:1220, skill_genre:10602, begin:21, end:22, time:49, base_damage:9, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"こどもリンク", tess:"空N", fighter_id:1220, skill_genre:10904, begin:4, end:5, time:35, base_damage:10, landing_lag:6, landing_occurrence_begin:4, landing_occurrence_end:31, tes_val:"", }
,{tesf:"こどもリンク", tess:"空N", fighter_id:1220, skill_genre:10904, begin:6, end:27, time:35, base_damage:5, landing_lag:6, landing_occurrence_begin:4, landing_occurrence_end:31, persistence_num:1, tes_val:"持続", }
,{tesf:"こどもリンク", tess:"空前", fighter_id:1220, skill_genre:10901, begin:14, end:15, time:40, base_damage:6, landing_lag:6, landing_occurrence_begin:1, landing_occurrence_end:40, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"こどもリンク", tess:"空前", fighter_id:1220, skill_genre:10901, begin:24, end:25, time:40, base_damage:8, landing_lag:6, landing_occurrence_begin:1, landing_occurrence_end:40, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"こどもリンク", tess:"空前", fighter_id:1220, skill_genre:10901, begin:24, end:25, time:40, base_damage:7, landing_lag:6, landing_occurrence_begin:1, landing_occurrence_end:40, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"こどもリンク", tess:"空後", fighter_id:1220, skill_genre:10903, begin:6, end:8, time:29, base_damage:5, landing_lag:6, landing_occurrence_begin:1, landing_occurrence_end:28, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"こどもリンク", tess:"空後", fighter_id:1220, skill_genre:10903, begin:18, end:20, time:29, base_damage:7, landing_lag:6, landing_occurrence_begin:1, landing_occurrence_end:28, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"こどもリンク", tess:"空上", fighter_id:1220, skill_genre:10900, begin:5, end:7, time:59, base_damage:15, landing_lag:14, landing_occurrence_begin:5, landing_occurrence_end:55, tes_val:"", }
,{tesf:"こどもリンク", tess:"空上", fighter_id:1220, skill_genre:10900, begin:8, end:49, time:59, base_damage:12, landing_lag:14, landing_occurrence_begin:5, landing_occurrence_end:55, persistence_num:1, tes_val:"持続", }
,{tesf:"こどもリンク", tess:"空下", fighter_id:1220, skill_genre:10902, begin:13, end:15, time:79, base_damage:18, landing_lag:17, landing_occurrence_begin:13, landing_occurrence_end:64, tes_val:"", }
,{tesf:"こどもリンク", tess:"空下", fighter_id:1220, skill_genre:10902, begin:16, end:64, time:79, base_damage:15, landing_lag:17, landing_occurrence_begin:13, landing_occurrence_end:64, persistence_num:1, tes_val:"持続", }
,{tesf:"こどもリンク", tess:"空下", fighter_id:1220, skill_genre:10902, begin:16, end:64, time:79, base_damage:9, landing_lag:17, landing_occurrence_begin:13, landing_occurrence_end:64, tes_val:"バウンド", }
,{tesf:"こどもリンク", tess:"空中ワイヤー", fighter_id:1220, skill_genre:10905, begin:9, end:16, time:71, base_damage:4, landing_lag:8, landing_occurrence_begin:13, landing_occurrence_end:64, detail_name:"バウンド", tes_val:"", }
,{tess:"その場投げ", fighter_id:1220 , skill_genre:10200, base_damage:0,begin:12, end:18, time:52}
,{tess:"ダッシュ投げ", fighter_id:1220 , skill_genre:10201, base_damage:0,begin:14, end:20, time:60}
,{tess:"ふりむき投げ", fighter_id:1220 , skill_genre:10202, base_damage:0,begin:15, end:21, time:55}

, {tesf:"ガノンドロフ", tess:"弱攻撃", fighter_id:1230, skill_genre:10300, begin:7, end:8, time:26, base_damage:11, alias:"弱1", tes_val:"弱1", }
,{tesf:"ガノンドロフ", tess:"ダッシュ攻撃", fighter_id:1230, skill_genre:10400, begin:10, end:12, time:37, base_damage:15, tes_val:"",correction:1.3 }
,{tesf:"ガノンドロフ", tess:"ダッシュ攻撃", fighter_id:1230, skill_genre:10400, begin:13, end:19, time:37, base_damage:11, persistence_num:1, tes_val:"持続", correction:1.3}
,{tesf:"ガノンドロフ", tess:"横強", fighter_id:1230, skill_genre:10501, begin:10, end:12, time:39, base_damage:14, damage_no:1, tes_val:"", }
,{tesf:"ガノンドロフ", tess:"横強", fighter_id:1230, skill_genre:10501, begin:10, end:12, time:39, base_damage:13, damage_no:2, tes_val:"", }
,{tesf:"ガノンドロフ", tess:"上強", fighter_id:1230, skill_genre:10500, begin:6, end:52, time:94, base_damage:0, rehit:6, tes_val:"風判定", }
,{tesf:"ガノンドロフ", tess:"上強", fighter_id:1230, skill_genre:10500, begin:60, end:61, time:94, base_damage:24, tes_val:"", }
,{tesf:"ガノンドロフ", tess:"上強", fighter_id:1230, skill_genre:10500, begin:62, end:63, time:94, base_damage:13, persistence_num:1, tes_val:"持続", }
,{tesf:"ガノンドロフ", tess:"下強", fighter_id:1230, skill_genre:10502, begin:10, end:12, time:35, base_damage:14, tes_val:"", }
,{tesf:"ガノンドロフ", tess:"横スマッシュ", fighter_id:1230, skill_genre:10601, begin:29, end:31, time:69, base_damage:24, tes_val:"", }
,{tesf:"ガノンドロフ", tess:"上スマッシュ", fighter_id:1230, skill_genre:10600, begin:20, end:25, time:61, base_damage:24, damage_no:1, tes_val:"", }
,{tesf:"ガノンドロフ", tess:"上スマッシュ", fighter_id:1230, skill_genre:10600, begin:20, end:25, time:61, base_damage:21, damage_no:2, tes_val:"", }
,{tesf:"ガノンドロフ", tess:"下スマッシュ", fighter_id:1230, skill_genre:10602, begin:15, end:18, time:59, base_damage:5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ガノンドロフ", tess:"下スマッシュ", fighter_id:1230, skill_genre:10602, begin:35, end:38, time:59, base_damage:15, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"ガノンドロフ", tess:"空N", fighter_id:1230, skill_genre:10904, begin:7, end:8, time:40, base_damage:7, landing_lag:10, landing_occurrence_begin:4, landing_occurrence_end:36, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ガノンドロフ", tess:"空N", fighter_id:1230, skill_genre:10904, begin:9, end:12, time:40, base_damage:5.25, landing_lag:10, landing_occurrence_begin:4, landing_occurrence_end:36, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"ガノンドロフ", tess:"空N", fighter_id:1230, skill_genre:10904, begin:17, end:18, time:40, base_damage:12, landing_lag:10, landing_occurrence_begin:4, landing_occurrence_end:36, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ガノンドロフ", tess:"空N", fighter_id:1230, skill_genre:10904, begin:19, end:26, time:40, base_damage:9, landing_lag:10, landing_occurrence_begin:4, landing_occurrence_end:36, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続", }
,{tesf:"ガノンドロフ", tess:"空前", fighter_id:1230, skill_genre:10901, begin:14, end:19, time:44, base_damage:18, landing_lag:13, landing_occurrence_begin:7, landing_occurrence_end:44, damage_no:1, tes_val:"", }
,{tesf:"ガノンドロフ", tess:"空前", fighter_id:1230, skill_genre:10901, begin:14, end:19, time:44, base_damage:17, landing_lag:13, landing_occurrence_begin:7, landing_occurrence_end:44, damage_no:2, tes_val:"", }
,{tesf:"ガノンドロフ", tess:"空後", fighter_id:1230, skill_genre:10903, begin:10, end:12, time:35, base_damage:18.5, landing_lag:11, landing_occurrence_begin:7, landing_occurrence_end:21, damage_no:1, tes_val:"", }
,{tesf:"ガノンドロフ", tess:"空後", fighter_id:1230, skill_genre:10903, begin:10, end:12, time:35, base_damage:17, landing_lag:11, landing_occurrence_begin:7, landing_occurrence_end:21, damage_no:2, tes_val:"", }
,{tesf:"ガノンドロフ", tess:"空上", fighter_id:1230, skill_genre:10900, begin:8, end:10, time:33, base_damage:13, landing_lag:11, landing_occurrence_begin:1, landing_occurrence_end:24, damage_no:1, tes_val:"", }
,{tesf:"ガノンドロフ", tess:"空上", fighter_id:1230, skill_genre:10900, begin:8, end:10, time:33, base_damage:12, landing_lag:11, landing_occurrence_begin:1, landing_occurrence_end:24, damage_no:2, tes_val:"", }
,{tesf:"ガノンドロフ", tess:"空上", fighter_id:1230, skill_genre:10900, begin:11, end:13, time:33, base_damage:12, landing_lag:11, landing_occurrence_begin:1, landing_occurrence_end:24, damage_no:1, persistence_num:1, tes_val:"持続1", }
,{tesf:"ガノンドロフ", tess:"空上", fighter_id:1230, skill_genre:10900, begin:11, end:13, time:33, base_damage:10, landing_lag:11, landing_occurrence_begin:1, landing_occurrence_end:24, damage_no:2, persistence_num:1, tes_val:"持続1", }
,{tesf:"ガノンドロフ", tess:"空上", fighter_id:1230, skill_genre:10900, begin:14, end:16, time:33, base_damage:8, landing_lag:11, landing_occurrence_begin:1, landing_occurrence_end:24, damage_no:1, persistence_num:2, tes_val:"持続2", }
,{tesf:"ガノンドロフ", tess:"空上", fighter_id:1230, skill_genre:10900, begin:14, end:16, time:33, base_damage:6, landing_lag:11, landing_occurrence_begin:1, landing_occurrence_end:24, damage_no:2, persistence_num:2, tes_val:"持続2", }
,{tesf:"ガノンドロフ", tess:"空下", fighter_id:1230, skill_genre:10902, begin:16, end:18, time:44, base_damage:19, landing_lag:16, landing_occurrence_begin:4, landing_occurrence_end:31, damage_no:1, tes_val:"", }
,{tesf:"ガノンドロフ", tess:"空下", fighter_id:1230, skill_genre:10902, begin:16, end:18, time:44, base_damage:17, landing_lag:16, landing_occurrence_begin:4, landing_occurrence_end:31, damage_no:2, tes_val:"", }
,{tess:"その場投げ", fighter_id:1230 , skill_genre:10200, base_damage:0,begin:12, end:18, time:52}
,{tess:"ダッシュ投げ", fighter_id:1230 , skill_genre:10201, base_damage:0,begin:14, end:20, time:60}
,{tess:"ふりむき投げ", fighter_id:1230 , skill_genre:10202, base_damage:0,begin:15, end:21, time:55}

, {tesf:"ミュウツー", tess:"弱攻撃", fighter_id:1240, skill_genre:10300, begin:5, end:6, time:21, base_damage:3, alias:"弱1", tes_val:"弱1", }
,{tesf:"ミュウツー", tess:"弱攻撃", fighter_id:1240, skill_genre:10300, begin:5, end:6, time:2, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"ミュウツー", tess:"弱攻撃", fighter_id:1240, skill_genre:10300, begin:3, end:3, time:22, base_damage:0.8, alias:"百裂", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 6, 9, 12, 15, 18, 21", tes_val:"百裂, 連", correction:4}
,{tesf:"ミュウツー", tess:"弱攻撃", fighter_id:1240, skill_genre:10300, begin:6, end:7, time:40, base_damage:2.5, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"ミュウツー", tess:"ダッシュ攻撃", fighter_id:1240, skill_genre:10400, begin:10, end:11, time:38, base_damage:12, damage_no:1, tes_val:"", correction:1.3}
,{tesf:"ミュウツー", tess:"ダッシュ攻撃", fighter_id:1240, skill_genre:10400, begin:10, end:11, time:38, base_damage:9, damage_no:2, tes_val:"", correction:1.3}
,{tesf:"ミュウツー", tess:"ダッシュ攻撃", fighter_id:1240, skill_genre:10400, begin:12, end:20, time:38, base_damage:6, damage_no:1, persistence_num:1, tes_val:"持続", correction:1.3}
,{tesf:"ミュウツー", tess:"ダッシュ攻撃", fighter_id:1240, skill_genre:10400, begin:12, end:20, time:38, base_damage:4.5, damage_no:2, persistence_num:1, tes_val:"持続", correction:1.3}
,{tesf:"ミュウツー", tess:"横強", fighter_id:1240, skill_genre:10501, begin:10, end:11, time:35, base_damage:11, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"ミュウツー", tess:"横強", fighter_id:1240, skill_genre:10501, begin:10, end:11, time:35, base_damage:10, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"ミュウツー", tess:"横強", fighter_id:1240, skill_genre:10501, begin:10, end:11, time:35, base_damage:9, damage_no:3, shift:"all", tes_val:"全シフト", }
,{tesf:"ミュウツー", tess:"上強", fighter_id:1240, skill_genre:10500, begin:8, end:8, time:29, base_damage:7, damage_no:1, tes_val:"", }
,{tesf:"ミュウツー", tess:"上強", fighter_id:1240, skill_genre:10500, begin:8, end:8, time:29, base_damage:6, damage_no:2, tes_val:"", }
,{tesf:"ミュウツー", tess:"上強", fighter_id:1240, skill_genre:10500, begin:8, end:8, time:29, base_damage:5.5, damage_no:3, tes_val:"", }
,{tesf:"ミュウツー", tess:"上強", fighter_id:1240, skill_genre:10500, begin:9, end:13, time:29, base_damage:6, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"ミュウツー", tess:"上強", fighter_id:1240, skill_genre:10500, begin:9, end:13, time:29, base_damage:5, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"ミュウツー", tess:"上強", fighter_id:1240, skill_genre:10500, begin:9, end:13, time:29, base_damage:4, damage_no:3, persistence_num:1, tes_val:"持続", }
,{tesf:"ミュウツー", tess:"下強", fighter_id:1240, skill_genre:10502, begin:6, end:7, time:23, base_damage:5, damage_no:1, tes_val:"", }
,{tesf:"ミュウツー", tess:"下強", fighter_id:1240, skill_genre:10502, begin:6, end:7, time:23, base_damage:4.5, damage_no:2, tes_val:"", }
,{tesf:"ミュウツー", tess:"下強", fighter_id:1240, skill_genre:10502, begin:6, end:7, time:23, base_damage:4, damage_no:3, tes_val:"", }
,{tesf:"ミュウツー", tess:"横スマッシュ", fighter_id:1240, skill_genre:10601, begin:19, end:22, time:52, base_damage:20, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"ミュウツー", tess:"横スマッシュ", fighter_id:1240, skill_genre:10601, begin:19, end:22, time:52, base_damage:16, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"ミュウツー", tess:"上スマッシュ", fighter_id:1240, skill_genre:10600, begin:9, end:9, time:68, base_damage:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ミュウツー", tess:"上スマッシュ", fighter_id:1240, skill_genre:10600, begin:10, end:11, time:68, base_damage:2, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"ミュウツー", tess:"上スマッシュ", fighter_id:1240, skill_genre:10600, begin:14, end:15, time:68, base_damage:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ミュウツー", tess:"上スマッシュ", fighter_id:1240, skill_genre:10600, begin:18, end:19, time:68, base_damage:2, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"ミュウツー", tess:"上スマッシュ", fighter_id:1240, skill_genre:10600, begin:22, end:25, time:68, base_damage:10, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }
,{tesf:"ミュウツー", tess:"下スマッシュ", fighter_id:1240, skill_genre:10602, begin:21, end:23, time:40, base_damage:16, tes_val:"", }
, {tesf:"ミュウツー", tess:"空N", fighter_id:1240, skill_genre:10904, begin:7, end:8, time:49, base_damage:1.6, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:45, serial_num_str:"1-5", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"7-8, 11-12, 15-16, 19-20, 23-24", tes_val:"Hit 1-5", }
,{tesf:"ミュウツー", tess:"空N", fighter_id:1240, skill_genre:10904, begin:27, end:28, time:49, base_damage:4, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:45, serial_num_str:"6", tes_message:"(連続ヒットする技)", tes_val:"Hit 6", }
,{tesf:"ミュウツー", tess:"空前", fighter_id:1240, skill_genre:10901, begin:7, end:9, time:39, base_damage:13, landing_lag:8, landing_occurrence_begin:1, landing_occurrence_end:36, tes_val:"", }
,{tesf:"ミュウツー", tess:"空後", fighter_id:1240, skill_genre:10903, begin:13, end:17, time:39, base_damage:13, landing_lag:10, landing_occurrence_begin:3, landing_occurrence_end:37, damage_no:1, tes_val:"", }
,{tesf:"ミュウツー", tess:"空後", fighter_id:1240, skill_genre:10903, begin:13, end:17, time:39, base_damage:11, landing_lag:10, landing_occurrence_begin:3, landing_occurrence_end:37, damage_no:2, tes_val:"", }
,{tesf:"ミュウツー", tess:"空後", fighter_id:1240, skill_genre:10903, begin:13, end:17, time:39, base_damage:9, landing_lag:10, landing_occurrence_begin:3, landing_occurrence_end:37, damage_no:3, tes_val:"", }
,{tesf:"ミュウツー", tess:"空上", fighter_id:1240, skill_genre:10900, begin:10, end:14, time:39, base_damage:12, landing_lag:8, landing_occurrence_begin:3, landing_occurrence_end:35, damage_no:1, tes_val:"", }
,{tesf:"ミュウツー", tess:"空上", fighter_id:1240, skill_genre:10900, begin:10, end:14, time:39, base_damage:11, landing_lag:8, landing_occurrence_begin:3, landing_occurrence_end:35, damage_no:2, tes_val:"", }
,{tesf:"ミュウツー", tess:"空上", fighter_id:1240, skill_genre:10900, begin:10, end:14, time:39, base_damage:10, landing_lag:8, landing_occurrence_begin:3, landing_occurrence_end:35, damage_no:3, tes_val:"", }
,{tesf:"ミュウツー", tess:"空下", fighter_id:1240, skill_genre:10902, begin:15, end:18, time:47, base_damage:14, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:41, defend_position:"ground", tes_val:"対地", }
,{tesf:"ミュウツー", tess:"空下", fighter_id:1240, skill_genre:10902, begin:15, end:18, time:47, base_damage:15, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:41, damage_no:1, defend_position:"air", tes_val:"対空", }
,{tesf:"ミュウツー", tess:"空下", fighter_id:1240, skill_genre:10902, begin:15, end:18, time:47, base_damage:14, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:41, damage_no:2, defend_position:"air", tes_val:"対空", }
,{tess:"その場投げ", fighter_id:1240 , skill_genre:10200, base_damage:0,begin:7, end:8, time:39}
,{tess:"ダッシュ投げ", fighter_id:1240 , skill_genre:10201, base_damage:0,begin:10, end:11, time:47}
,{tess:"ふりむき投げ", fighter_id:1240 , skill_genre:10202, base_damage:0,begin:11, end:12, time:42}

, {tesf:"ロイ", tess:"弱攻撃", fighter_id:1250, skill_genre:10300, begin:5, end:7, time:22, base_damage:7.5, damage_no:1, alias:"弱1", tes_val:"弱1", }
,{tesf:"ロイ", tess:"弱攻撃", fighter_id:1250, skill_genre:10300, begin:5, end:7, time:22, base_damage:4.8, damage_no:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ロイ", tess:"ダッシュ攻撃", fighter_id:1250, skill_genre:10400, begin:13, end:16, time:45, base_damage:13, damage_no:1, tes_val:"",correction:1.25 }
,{tesf:"ロイ", tess:"ダッシュ攻撃", fighter_id:1250, skill_genre:10400, begin:13, end:16, time:45, base_damage:9, damage_no:2, tes_val:"", correction:1.25}
,{tesf:"ロイ", tess:"横強", fighter_id:1250, skill_genre:10501, begin:8, end:10, time:33, base_damage:12.5, damage_no:1, tes_val:"", }
,{tesf:"ロイ", tess:"横強", fighter_id:1250, skill_genre:10501, begin:8, end:10, time:33, base_damage:9, damage_no:2, tes_val:"", }
,{tesf:"ロイ", tess:"横強", fighter_id:1250, skill_genre:10501, begin:8, end:10, time:33, base_damage:8, damage_no:3, tes_val:"", }
,{tesf:"ロイ", tess:"上強", fighter_id:1250, skill_genre:10500, begin:6, end:6, time:38, base_damage:12, damage_no:1, tes_val:"", }
,{tesf:"ロイ", tess:"上強", fighter_id:1250, skill_genre:10500, begin:6, end:6, time:38, base_damage:7, damage_no:2, tes_val:"", }
,{tesf:"ロイ", tess:"上強", fighter_id:1250, skill_genre:10500, begin:7, end:8, time:38, base_damage:12, damage_no:1, persistence_num:1, tes_val:"持続1", }
,{tesf:"ロイ", tess:"上強", fighter_id:1250, skill_genre:10500, begin:7, end:8, time:38, base_damage:7, damage_no:2, persistence_num:1, tes_val:"持続1", }
,{tesf:"ロイ", tess:"上強", fighter_id:1250, skill_genre:10500, begin:9, end:11, time:38, base_damage:12, damage_no:1, persistence_num:2, tes_val:"持続2", }
,{tesf:"ロイ", tess:"上強", fighter_id:1250, skill_genre:10500, begin:9, end:11, time:38, base_damage:7, damage_no:2, persistence_num:2, tes_val:"持続2", }
,{tesf:"ロイ", tess:"下強", fighter_id:1250, skill_genre:10502, begin:7, end:8, time:21, base_damage:11, damage_no:1, tes_val:"", }
,{tesf:"ロイ", tess:"下強", fighter_id:1250, skill_genre:10502, begin:7, end:8, time:21, base_damage:6.5, damage_no:2, tes_val:"", }
,{tesf:"ロイ", tess:"横スマッシュ", fighter_id:1250, skill_genre:10601, begin:13, end:14, time:53, base_damage:20, damage_no:1, tes_val:"", }
,{tesf:"ロイ", tess:"横スマッシュ", fighter_id:1250, skill_genre:10601, begin:13, end:14, time:53, base_damage:17, damage_no:2, tes_val:"", }
,{tesf:"ロイ", tess:"横スマッシュ", fighter_id:1250, skill_genre:10601, begin:13, end:14, time:53, base_damage:12, damage_no:3, tes_val:"", }
,{tesf:"ロイ", tess:"上スマッシュ", fighter_id:1250, skill_genre:10600, begin:12, end:12, time:58, base_damage:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ロイ", tess:"上スマッシュ", fighter_id:1250, skill_genre:10600, begin:13, end:13, time:58, base_damage:2, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"ロイ", tess:"上スマッシュ", fighter_id:1250, skill_genre:10600, begin:15, end:15, time:58, base_damage:2, serial_num_str:"2-4", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"15, 17, 19", tes_val:"Hit 2-4", }
,{tesf:"ロイ", tess:"上スマッシュ", fighter_id:1250, skill_genre:10600, begin:22, end:23, time:58, base_damage:10, serial_num_str:"5", tes_message:"(連続ヒットする技)", tes_val:"Hit 5", }
,{tesf:"ロイ", tess:"下スマッシュ", fighter_id:1250, skill_genre:10602, begin:6, end:7, time:62, base_damage:15, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ロイ", tess:"下スマッシュ", fighter_id:1250, skill_genre:10602, begin:6, end:7, time:62, base_damage:10, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ロイ", tess:"下スマッシュ", fighter_id:1250, skill_genre:10602, begin:21, end:22, time:62, base_damage:17, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ロイ", tess:"下スマッシュ", fighter_id:1250, skill_genre:10602, begin:21, end:22, time:62, base_damage:11, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"ロイ", tess:"空N", fighter_id:1250, skill_genre:10904, begin:6, end:7, time:45, base_damage:6, landing_lag:9, landing_occurrence_begin:2, landing_occurrence_end:46, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ロイ", tess:"空N", fighter_id:1250, skill_genre:10904, begin:6, end:7, time:45, base_damage:4, landing_lag:9, landing_occurrence_begin:2, landing_occurrence_end:46, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ロイ", tess:"空N", fighter_id:1250, skill_genre:10904, begin:15, end:21, time:45, base_damage:8.5, landing_lag:9, landing_occurrence_begin:2, landing_occurrence_end:46, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ロイ", tess:"空N", fighter_id:1250, skill_genre:10904, begin:15, end:21, time:45, base_damage:5, landing_lag:9, landing_occurrence_begin:2, landing_occurrence_end:46, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ロイ", tess:"空前", fighter_id:1250, skill_genre:10901, begin:10, end:12, time:29, base_damage:11, landing_lag:8, landing_occurrence_begin:1, landing_occurrence_end:30, damage_no:1, tes_val:"", }
,{tesf:"ロイ", tess:"空前", fighter_id:1250, skill_genre:10901, begin:10, end:12, time:29, base_damage:7, landing_lag:8, landing_occurrence_begin:1, landing_occurrence_end:30, damage_no:2, tes_val:"", }
,{tesf:"ロイ", tess:"空後", fighter_id:1250, skill_genre:10903, begin:8, end:10, time:35, base_damage:12, landing_lag:10, landing_occurrence_begin:3, landing_occurrence_end:31, damage_no:1, tes_val:"", }
,{tesf:"ロイ", tess:"空後", fighter_id:1250, skill_genre:10903, begin:8, end:10, time:35, base_damage:9, landing_lag:10, landing_occurrence_begin:3, landing_occurrence_end:31, damage_no:2, tes_val:"", }
,{tesf:"ロイ", tess:"空上", fighter_id:1250, skill_genre:10900, begin:5, end:12, time:41, base_damage:9, landing_lag:8, landing_occurrence_begin:3, landing_occurrence_end:37, damage_no:1, tes_val:"", }
,{tesf:"ロイ", tess:"空上", fighter_id:1250, skill_genre:10900, begin:5, end:12, time:41, base_damage:6, landing_lag:8, landing_occurrence_begin:3, landing_occurrence_end:37, damage_no:2, tes_val:"", }
,{tesf:"ロイ", tess:"空下", fighter_id:1250, skill_genre:10902, begin:16, end:17, time:51, base_damage:15, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:51, damage_no:1, tes_val:"", }
,{tesf:"ロイ", tess:"空下", fighter_id:1250, skill_genre:10902, begin:16, end:17, time:51, base_damage:10, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:51, damage_no:2, tes_val:"", }
,{tess:"その場投げ", fighter_id:1250 , skill_genre:10200, base_damage:0,begin:7, end:8, time:36}
,{tess:"ダッシュ投げ", fighter_id:1250 , skill_genre:10201, base_damage:0,begin:10, end:11, time:44}
,{tess:"ふりむき投げ", fighter_id:1250 , skill_genre:10202, base_damage:0,begin:11, end:12, time:39}

, {tesf:"メタナイト", tess:"弱攻撃", fighter_id:1270, skill_genre:10300, begin:0, end:0, time:2, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"メタナイト", tess:"弱攻撃", fighter_id:1270, skill_genre:10300, begin:2, end:2, time:22, base_damage:1, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"2, 5, 8, 11, 14, 17, 20", tes_val:"百裂, 連", correction:4}
,{tesf:"メタナイト", tess:"弱攻撃", fighter_id:1270, skill_genre:10300, begin:3, end:3, time:30, base_damage:2, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"メタナイト", tess:"ダッシュ攻撃", fighter_id:1270, skill_genre:10400, begin:7, end:11, time:32, base_damage:7, damage_no:1, tes_val:"", }
,{tesf:"メタナイト", tess:"ダッシュ攻撃", fighter_id:1270, skill_genre:10400, begin:7, end:11, time:32, base_damage:6, damage_no:2, tes_val:"", }
,{tesf:"メタナイト", tess:"横強", fighter_id:1270, skill_genre:10501, begin:6, end:6, time:25, base_damage:2, alias:"横強1", tes_val:"横強1", }
,{tesf:"メタナイト", tess:"横強", fighter_id:1270, skill_genre:10501, begin:2, end:2, time:27, base_damage:2, alias:"横強2", tes_val:"横強2", }
,{tesf:"メタナイト", tess:"横強", fighter_id:1270, skill_genre:10501, begin:2, end:2, time:30, base_damage:4, tes_val:"横強3", }
,{tesf:"メタナイト", tess:"上強", fighter_id:1270, skill_genre:10500, begin:8, end:8, time:34, base_damage:7, damage_no:1, tes_val:"", }
,{tesf:"メタナイト", tess:"上強", fighter_id:1270, skill_genre:10500, begin:8, end:8, time:34, base_damage:6, damage_no:2, tes_val:"", }
,{tesf:"メタナイト", tess:"上強", fighter_id:1270, skill_genre:10500, begin:9, end:10, time:34, base_damage:7, damage_no:1, persistence_num:1, tes_val:"持続1", }
,{tesf:"メタナイト", tess:"上強", fighter_id:1270, skill_genre:10500, begin:9, end:10, time:34, base_damage:6, damage_no:2, persistence_num:1, tes_val:"持続1", }
,{tesf:"メタナイト", tess:"上強", fighter_id:1270, skill_genre:10500, begin:11, end:14, time:34, base_damage:5, persistence_num:2, tes_val:"持続2", }
,{tesf:"メタナイト", tess:"下強", fighter_id:1270, skill_genre:10502, begin:3, end:4, time:18, base_damage:5, tes_val:"", }
,{tesf:"メタナイト", tess:"横スマッシュ", fighter_id:1270, skill_genre:10601, begin:24, end:24, time:41, base_damage:16, tes_val:"", }
,{tesf:"メタナイト", tess:"上スマッシュ", fighter_id:1270, skill_genre:10600, begin:8, end:8, time:49, base_damage:4, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"メタナイト", tess:"上スマッシュ", fighter_id:1270, skill_genre:10600, begin:12, end:12, time:49, base_damage:3, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"メタナイト", tess:"上スマッシュ", fighter_id:1270, skill_genre:10600, begin:17, end:17, time:49, base_damage:5, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"メタナイト", tess:"下スマッシュ", fighter_id:1270, skill_genre:10602, begin:4, end:4, time:37, base_damage:10, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"メタナイト", tess:"下スマッシュ", fighter_id:1270, skill_genre:10602, begin:9, end:9, time:37, base_damage:13, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"メタナイト", tess:"空N", fighter_id:1270, skill_genre:10904, begin:6, end:7, time:43, base_damage:10, landing_lag:7, landing_occurrence_begin:6, landing_occurrence_end:39, tes_val:"", }
,{tesf:"メタナイト", tess:"空N", fighter_id:1270, skill_genre:10904, begin:8, end:20, time:43, base_damage:7.5, landing_lag:7, landing_occurrence_begin:6, landing_occurrence_end:39, persistence_num:1, tes_val:"持続", }
,{tesf:"メタナイト", tess:"空前", fighter_id:1270, skill_genre:10901, begin:9, end:9, time:45, base_damage:1.5, landing_lag:10, landing_occurrence_begin:2, landing_occurrence_end:43, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"メタナイト", tess:"空前", fighter_id:1270, skill_genre:10901, begin:12, end:12, time:45, base_damage:1.5, landing_lag:10, landing_occurrence_begin:2, landing_occurrence_end:43, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"メタナイト", tess:"空前", fighter_id:1270, skill_genre:10901, begin:15, end:15, time:45, base_damage:3, landing_lag:10, landing_occurrence_begin:2, landing_occurrence_end:43, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"メタナイト", tess:"空後", fighter_id:1270, skill_genre:10903, begin:7, end:8, time:51, base_damage:1.5, landing_lag:11, landing_occurrence_begin:7, landing_occurrence_end:39, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"メタナイト", tess:"空後", fighter_id:1270, skill_genre:10903, begin:13, end:14, time:51, base_damage:1.5, landing_lag:11, landing_occurrence_begin:7, landing_occurrence_end:39, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"メタナイト", tess:"空後", fighter_id:1270, skill_genre:10903, begin:20, end:21, time:51, base_damage:4, landing_lag:11, landing_occurrence_begin:7, landing_occurrence_end:39, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"メタナイト", tess:"空上", fighter_id:1270, skill_genre:10900, begin:6, end:6, time:26, base_damage:4, landing_lag:9, landing_occurrence_begin:6, landing_occurrence_end:23, tes_val:"", }
,{tesf:"メタナイト", tess:"空下", fighter_id:1270, skill_genre:10902, begin:4, end:4, time:27, base_damage:6, landing_lag:9, landing_occurrence_begin:4, landing_occurrence_end:25, tes_val:"", }
,{tess:"その場投げ", fighter_id:1270 , skill_genre:10200, base_damage:0,begin:7, end:8, time:36}
,{tess:"ダッシュ投げ", fighter_id:1270 , skill_genre:10201, base_damage:0,begin:11, end:12, time:44}
,{tess:"ふりむき投げ", fighter_id:1270 , skill_genre:10202, base_damage:0,begin:12, end:13, time:39}

, {tesf:"ブラックピット", tess:"弱攻撃", fighter_id:1281, skill_genre:10300, begin:4, end:5, time:25, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ブラックピット", tess:"弱攻撃", fighter_id:1281, skill_genre:10300, begin:5, end:6, time:29, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"ブラックピット", tess:"弱攻撃", fighter_id:1281, skill_genre:10300, begin:3, end:3, time:31, base_damage:4, alias:"弱3", tes_val:"弱3", }
,{tesf:"ブラックピット", tess:"弱攻撃", fighter_id:1281, skill_genre:10300, begin:3, end:3, time:4, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"ブラックピット", tess:"弱攻撃", fighter_id:1281, skill_genre:10300, begin:2, end:2, time:16, base_damage:0.5, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"2, 4, 6, 8, 10, 12, 14, 16", tes_val:"百裂, 連", correction:3}
,{tesf:"ブラックピット", tess:"弱攻撃", fighter_id:1281, skill_genre:10300, begin:4, end:5, time:47, base_damage:2, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"ブラックピット", tess:"ダッシュ攻撃", fighter_id:1281, skill_genre:10400, begin:7, end:9, time:38, base_damage:11, tes_val:"", correction:1.37}
,{tesf:"ブラックピット", tess:"横強", fighter_id:1281, skill_genre:10501, begin:10, end:14, time:39, base_damage:10, damage_no:1, tes_val:"", }
,{tesf:"ブラックピット", tess:"横強", fighter_id:1281, skill_genre:10501, begin:10, end:14, time:39, base_damage:7, damage_no:2, tes_val:"", }
,{tesf:"ブラックピット", tess:"上強", fighter_id:1281, skill_genre:10500, begin:6, end:8, time:32, base_damage:4, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ブラックピット", tess:"上強", fighter_id:1281, skill_genre:10500, begin:15, end:16, time:32, base_damage:5, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ブラックピット", tess:"下強", fighter_id:1281, skill_genre:10502, begin:6, end:7, time:25, base_damage:6, tes_val:"", }
,{tesf:"ブラックピット", tess:"横スマッシュ", fighter_id:1281, skill_genre:10601, begin:10, end:10, time:54, base_damage:5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ブラックピット", tess:"横スマッシュ", fighter_id:1281, skill_genre:10601, begin:21, end:22, time:54, base_damage:10, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ブラックピット", tess:"上スマッシュ", fighter_id:1281, skill_genre:10600, begin:6, end:6, time:51, base_damage:3, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ブラックピット", tess:"上スマッシュ", fighter_id:1281, skill_genre:10600, begin:7, end:7, time:51, base_damage:3, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"ブラックピット", tess:"上スマッシュ", fighter_id:1281, skill_genre:10600, begin:10, end:10, time:51, base_damage:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ブラックピット", tess:"上スマッシュ", fighter_id:1281, skill_genre:10600, begin:18, end:18, time:51, base_damage:8, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"ブラックピット", tess:"下スマッシュ", fighter_id:1281, skill_genre:10602, begin:5, end:6, time:40, base_damage:12, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ブラックピット", tess:"下スマッシュ", fighter_id:1281, skill_genre:10602, begin:5, end:6, time:40, base_damage:10, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ブラックピット", tess:"下スマッシュ", fighter_id:1281, skill_genre:10602, begin:18, end:20, time:40, base_damage:12, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ブラックピット", tess:"下スマッシュ", fighter_id:1281, skill_genre:10602, begin:18, end:20, time:40, base_damage:10, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"ブラックピット", tess:"空N", fighter_id:1281, skill_genre:10904, begin:4, end:5, time:54, base_damage:0.7, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:29, serial_num_str:"1-7", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"4-5, 7-8, 10-11, 13-14, 16-17, 19-20,22-23", tes_val:"Hit 1-7", }
,{tesf:"ブラックピット", tess:"空N", fighter_id:1281, skill_genre:10904, begin:25, end:25, time:54, base_damage:4.5, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:29, serial_num_str:"8", tes_message:"(連続ヒットする技)", tes_val:"Hit 8", }
,{tesf:"ブラックピット", tess:"空前", fighter_id:1281, skill_genre:10901, begin:11, end:12, time:46, base_damage:2.5, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:27, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ブラックピット", tess:"空前", fighter_id:1281, skill_genre:10901, begin:14, end:15, time:46, base_damage:2.5, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:27, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ブラックピット", tess:"空前", fighter_id:1281, skill_genre:10901, begin:18, end:19, time:46, base_damage:6, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:27, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"ブラックピット", tess:"空後", fighter_id:1281, skill_genre:10903, begin:10, end:10, time:40, base_damage:12, landing_lag:8, landing_occurrence_begin:1, landing_occurrence_end:27, damage_no:1, persistence_num:0, tes_val:"始", }
,{tesf:"ブラックピット", tess:"空後", fighter_id:1281, skill_genre:10903, begin:10, end:10, time:40, base_damage:8, landing_lag:8, landing_occurrence_begin:1, landing_occurrence_end:27, damage_no:2, persistence_num:0, tes_val:"始", }
,{tesf:"ブラックピット", tess:"空後", fighter_id:1281, skill_genre:10903, begin:11, end:12, time:40, base_damage:12, landing_lag:8, landing_occurrence_begin:1, landing_occurrence_end:27, tes_val:"", }
,{tesf:"ブラックピット", tess:"空上", fighter_id:1281, skill_genre:10900, begin:12, end:13, time:49, base_damage:1.5, landing_lag:14, landing_occurrence_begin:5, landing_occurrence_end:36, serial_num_str:"1-4", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"12-13, 15-16, 18-19, 21-22", tes_val:"Hit 1-4", }
,{tesf:"ブラックピット", tess:"空上", fighter_id:1281, skill_genre:10900, begin:24, end:25, time:49, base_damage:5, landing_lag:14, landing_occurrence_begin:5, landing_occurrence_end:36, serial_num_str:"5", tes_message:"(連続ヒットする技)", tes_val:"Hit 5", }
,{tesf:"ブラックピット", tess:"空下", fighter_id:1281, skill_genre:10902, begin:10, end:10, time:36, base_damage:10, landing_lag:12, landing_occurrence_begin:7, landing_occurrence_end:35, tes_val:"", }
,{tesf:"ブラックピット", tess:"空下", fighter_id:1281, skill_genre:10902, begin:11, end:12, time:36, base_damage:10, landing_lag:12, landing_occurrence_begin:7, landing_occurrence_end:35, persistence_num:1, tes_val:"持続", }
,{tess:"その場投げ", fighter_id:1281 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34}
,{tess:"ダッシュ投げ", fighter_id:1281 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42}
,{tess:"ふりむき投げ", fighter_id:1281 , skill_genre:10202, base_damage:0,begin:10, end:11, time:37}

, {tesf:"ゼロスーツサムス", tess:"弱攻撃", fighter_id:1290, skill_genre:10300, begin:1, end:1, time:23, base_damage:1.5, alias:"弱1", tes_val:"弱1", }
,{tesf:"ゼロスーツサムス", tess:"弱攻撃", fighter_id:1290, skill_genre:10300, begin:1, end:1, time:7, base_damage:1.5, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ゼロスーツサムス", tess:"弱攻撃", fighter_id:1290, skill_genre:10300, begin:2, end:2, time:25, base_damage:1.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"ゼロスーツサムス", tess:"弱攻撃", fighter_id:1290, skill_genre:10300, begin:3, end:4, time:34, base_damage:3, alias:"弱3", tes_val:"弱3", }
,{tesf:"ゼロスーツサムス", tess:"ダッシュ攻撃", fighter_id:1290, skill_genre:10400, begin:7, end:9, time:51, base_damage:8, tes_val:"", }
,{tesf:"ゼロスーツサムス", tess:"ダッシュ攻撃", fighter_id:1290, skill_genre:10400, begin:10, end:19, time:51, base_damage:5, persistence_num:1, tes_val:"持続", }
,{tesf:"ゼロスーツサムス", tess:"横強", fighter_id:1290, skill_genre:10501, begin:6, end:8, time:28, base_damage:8, damage_no:1, shift:"up", tes_val:"上シフト", }
,{tesf:"ゼロスーツサムス", tess:"横強", fighter_id:1290, skill_genre:10501, begin:6, end:8, time:28, base_damage:6.5, damage_no:2, shift:"up", tes_val:"上シフト", }
,{tesf:"ゼロスーツサムス", tess:"横強", fighter_id:1290, skill_genre:10501, begin:6, end:8, time:28, base_damage:7, damage_no:1, tes_val:"無シフト", }
,{tesf:"ゼロスーツサムス", tess:"横強", fighter_id:1290, skill_genre:10501, begin:6, end:8, time:28, base_damage:6, damage_no:2, tes_val:"無シフト", }
,{tesf:"ゼロスーツサムス", tess:"横強", fighter_id:1290, skill_genre:10501, begin:6, end:8, time:28, base_damage:8, damage_no:1, shift:"under", tes_val:"下シフト", }
,{tesf:"ゼロスーツサムス", tess:"横強", fighter_id:1290, skill_genre:10501, begin:6, end:8, time:28, base_damage:6.5, damage_no:2, shift:"under", tes_val:"下シフト", }
,{tesf:"ゼロスーツサムス", tess:"上強", fighter_id:1290, skill_genre:10500, begin:3, end:4, time:45, base_damage:5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ゼロスーツサムス", tess:"上強", fighter_id:1290, skill_genre:10500, begin:9, end:10, time:45, base_damage:7, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ゼロスーツサムス", tess:"下強", fighter_id:1290, skill_genre:10502, begin:8, end:9, time:29, base_damage:8, damage_no:1, tes_val:"", }
,{tesf:"ゼロスーツサムス", tess:"下強", fighter_id:1290, skill_genre:10502, begin:8, end:9, time:29, base_damage:6, damage_no:2, tes_val:"", }
,{tesf:"ゼロスーツサムス", tess:"横スマッシュ", fighter_id:1290, skill_genre:10601, begin:13, end:14, time:64, base_damage:5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ゼロスーツサムス", tess:"横スマッシュ", fighter_id:1290, skill_genre:10601, begin:26, end:28, time:64, base_damage:11, serial_num_str:"2", shift:"all", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 全シフト", }
,{tesf:"ゼロスーツサムス", tess:"上スマッシュ", fighter_id:1290, skill_genre:10600, begin:10, end:11, time:48, base_damage:4, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ゼロスーツサムス", tess:"上スマッシュ", fighter_id:1290, skill_genre:10600, begin:14, end:14, time:48, base_damage:0.8, serial_num_str:"2-6", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"14, 17, 20,23, 26", tes_val:"Hit 2-6", }
,{tesf:"ゼロスーツサムス", tess:"上スマッシュ", fighter_id:1290, skill_genre:10600, begin:28, end:29, time:48, base_damage:3, serial_num_str:"7", tes_message:"(連続ヒットする技)", tes_val:"Hit 7", }
,{tesf:"ゼロスーツサムス", tess:"下スマッシュ", fighter_id:1290, skill_genre:10602, begin:20, end:24, time:41, base_damage:8, damage_no:1, defend_position:"ground", tes_val:"対地", }
,{tesf:"ゼロスーツサムス", tess:"下スマッシュ", fighter_id:1290, skill_genre:10602, begin:20, end:24, time:41, base_damage:6, damage_no:2, defend_position:"ground", tes_val:"対地", }
,{tesf:"ゼロスーツサムス", tess:"下スマッシュ", fighter_id:1290, skill_genre:10602, begin:20, end:24, time:41, base_damage:8, defend_position:"air", tes_val:"対空", }
, {tesf:"ゼロスーツサムス", tess:"空N", fighter_id:1290, skill_genre:10904, begin:10, end:11, time:51, base_damage:8, landing_lag:6, landing_occurrence_begin:4, landing_occurrence_end:41, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ゼロスーツサムス", tess:"空N", fighter_id:1290, skill_genre:10904, begin:15, end:16, time:51, base_damage:8, landing_lag:6, landing_occurrence_begin:4, landing_occurrence_end:41, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ゼロスーツサムス", tess:"空前", fighter_id:1290, skill_genre:10901, begin:6, end:7, time:46, base_damage:5, landing_lag:17, landing_occurrence_begin:4, landing_occurrence_end:37, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ゼロスーツサムス", tess:"空前", fighter_id:1290, skill_genre:10901, begin:13, end:14, time:46, base_damage:7, landing_lag:17, landing_occurrence_begin:4, landing_occurrence_end:37, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ゼロスーツサムス", tess:"空後", fighter_id:1290, skill_genre:10903, begin:8, end:9, time:39, base_damage:12, landing_lag:6, landing_occurrence_begin:4, landing_occurrence_end:30, damage_no:1, tes_val:"", }
,{tesf:"ゼロスーツサムス", tess:"空後", fighter_id:1290, skill_genre:10903, begin:8, end:9, time:39, base_damage:10, landing_lag:6, landing_occurrence_begin:4, landing_occurrence_end:30, damage_no:2, tes_val:"", }
,{tesf:"ゼロスーツサムス", tess:"空上", fighter_id:1290, skill_genre:10900, begin:6, end:12, time:34, base_damage:6.5, landing_lag:6, landing_occurrence_begin:1, landing_occurrence_end:24, tes_val:"", }
,{tesf:"ゼロスーツサムス", tess:"空下", fighter_id:1290, skill_genre:10902, begin:14, end:49, time:67, base_damage:5, landing_lag:15, landing_occurrence_begin:4, landing_occurrence_end:49, defend_position:"ground", tes_val:"対地", }
,{tess:"その場投げ", fighter_id:1290 , skill_genre:10200, base_damage:0,begin:15, end:25, time:58}
,{tess:"ダッシュ投げ", fighter_id:1290 , skill_genre:10201, base_damage:0,begin:17, end:26, time:66}
,{tess:"ふりむき投げ", fighter_id:1290 , skill_genre:10202, base_damage:0,begin:18, end:26, time:61}


, {tesf:"ワリオ", tess:"弱攻撃", fighter_id:1300, skill_genre:10300, begin:8, end:9, time:29, base_damage:4, alias:"弱1", tes_val:"弱1", }
,{tesf:"ワリオ", tess:"弱攻撃", fighter_id:1300, skill_genre:10300, begin:4, end:5, time:33, base_damage:5, alias:"弱2", tes_val:"弱2", }
,{tesf:"ワリオ", tess:"ダッシュ攻撃", fighter_id:1300, skill_genre:10400, begin:5, end:8, time:48, base_damage:11, damage_no:1, tes_val:"", }
,{tesf:"ワリオ", tess:"ダッシュ攻撃", fighter_id:1300, skill_genre:10400, begin:5, end:8, time:48, base_damage:5, damage_no:2, tes_val:"", }
,{tesf:"ワリオ", tess:"ダッシュ攻撃", fighter_id:1300, skill_genre:10400, begin:9, end:23, time:48, base_damage:5, persistence_num:1, tes_val:"持続", }
,{tesf:"ワリオ", tess:"横強", fighter_id:1300, skill_genre:10501, begin:12, end:15, time:39, base_damage:13, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"ワリオ", tess:"横強", fighter_id:1300, skill_genre:10501, begin:12, end:15, time:39, base_damage:11, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"ワリオ", tess:"上強", fighter_id:1300, skill_genre:10500, begin:8, end:10, time:27, base_damage:6, tes_val:"", }
,{tesf:"ワリオ", tess:"上強", fighter_id:1300, skill_genre:10500, begin:11, end:19, time:27, base_damage:5, persistence_num:1, tes_val:"持続", }
,{tesf:"ワリオ", tess:"下強", fighter_id:1300, skill_genre:10502, begin:5, end:5, time:17, base_damage:4, tes_val:"", }
,{tesf:"ワリオ", tess:"横スマッシュ", fighter_id:1300, skill_genre:10601, begin:18, end:19, time:65, base_damage:20, tes_val:"", }
,{tesf:"ワリオ", tess:"上スマッシュ", fighter_id:1300, skill_genre:10600, begin:11, end:12, time:57, base_damage:17, tes_val:"", }
,{tesf:"ワリオ", tess:"上スマッシュ", fighter_id:1300, skill_genre:10600, begin:13, end:13, time:57, base_damage:13, persistence_num:1, tes_val:"持続", }
,{tesf:"ワリオ", tess:"下スマッシュ", fighter_id:1300, skill_genre:10602, begin:8, end:17, time:61, base_damage:13, tes_val:"", }
,{tesf:"ワリオ", tess:"下スマッシュ", fighter_id:1300, skill_genre:10602, begin:18, end:27, time:61, base_damage:10, persistence_num:1, tes_val:"持続1", }
,{tesf:"ワリオ", tess:"下スマッシュ", fighter_id:1300, skill_genre:10602, begin:28, end:36, time:61, base_damage:5, persistence_num:2, tes_val:"持続2", }
, {tesf:"ワリオ", tess:"空N", fighter_id:1300, skill_genre:10904, begin:4, end:12, time:45, base_damage:6, landing_lag:7, landing_occurrence_begin:4, landing_occurrence_end:42, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ワリオ", tess:"空N", fighter_id:1300, skill_genre:10904, begin:13, end:17, time:45, base_damage:6, landing_lag:7, landing_occurrence_begin:4, landing_occurrence_end:42, damage_no:1, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"ワリオ", tess:"空N", fighter_id:1300, skill_genre:10904, begin:13, end:17, time:45, base_damage:3, landing_lag:7, landing_occurrence_begin:4, landing_occurrence_end:42, damage_no:2, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"ワリオ", tess:"空N", fighter_id:1300, skill_genre:10904, begin:20, end:26, time:45, base_damage:4, landing_lag:7, landing_occurrence_begin:4, landing_occurrence_end:42, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ワリオ", tess:"空N", fighter_id:1300, skill_genre:10904, begin:27, end:42, time:45, base_damage:5, landing_lag:7, landing_occurrence_begin:4, landing_occurrence_end:42, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続", }
,{tesf:"ワリオ", tess:"空前", fighter_id:1300, skill_genre:10901, begin:5, end:6, time:37, base_damage:7, landing_lag:10, landing_occurrence_begin:5, landing_occurrence_end:26, tes_val:"", }
,{tesf:"ワリオ", tess:"空前", fighter_id:1300, skill_genre:10901, begin:7, end:17, time:37, base_damage:4.5, landing_lag:10, landing_occurrence_begin:5, landing_occurrence_end:26, persistence_num:1, tes_val:"持続", }
,{tesf:"ワリオ", tess:"空後", fighter_id:1300, skill_genre:10903, begin:9, end:11, time:49, base_damage:12, landing_lag:16, landing_occurrence_begin:5, landing_occurrence_end:33, tes_val:"", }
,{tesf:"ワリオ", tess:"空上", fighter_id:1300, skill_genre:10900, begin:8, end:9, time:46, base_damage:13, landing_lag:7, landing_occurrence_begin:4, landing_occurrence_end:36, tes_val:"", }
,{tesf:"ワリオ", tess:"空下", fighter_id:1300, skill_genre:10902, begin:9, end:9, time:47, base_damage:1.3, landing_lag:18, landing_occurrence_begin:3, landing_occurrence_end:41, serial_num_str:"1-6", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"9, 11, 13, 15, 17, 19", tes_val:"Hit 1-6", }
,{tesf:"ワリオ", tess:"空下", fighter_id:1300, skill_genre:10902, begin:21, end:21, time:47, base_damage:4, landing_lag:18, landing_occurrence_begin:3, landing_occurrence_end:41, serial_num_str:"7", tes_message:"(連続ヒットする技)", tes_val:"Hit 7", }
,{tess:"その場投げ", fighter_id:1300 , skill_genre:10200, base_damage:0,begin:8, end:10, time:35}
,{tess:"ダッシュ投げ", fighter_id:1300 , skill_genre:10201, base_damage:0,begin:11, end:13, time:43}
,{tess:"ふりむき投げ", fighter_id:1300 , skill_genre:10202, base_damage:0,begin:12, end:14, time:38}

, {tesf:"スネーク", tess:"弱攻撃", fighter_id:1310, skill_genre:10300, begin:3, end:4, time:15, base_damage:2.5, alias:"弱1", tes_val:"弱1", }
,{tesf:"スネーク", tess:"弱攻撃", fighter_id:1310, skill_genre:10300, begin:3, end:4, time:6, base_damage:2.5, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"スネーク", tess:"弱攻撃", fighter_id:1310, skill_genre:10300, begin:4, end:5, time:24, base_damage:2.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"スネーク", tess:"弱攻撃", fighter_id:1310, skill_genre:10300, begin:8, end:9, time:46, base_damage:6, alias:"弱3", tes_val:"弱3", }
,{tesf:"スネーク", tess:"ダッシュ攻撃", fighter_id:1310, skill_genre:10400, begin:5, end:8, time:41, base_damage:11, damage_no:1, tes_val:"", }
,{tesf:"スネーク", tess:"ダッシュ攻撃", fighter_id:1310, skill_genre:10400, begin:5, end:8, time:41, base_damage:9, damage_no:2, tes_val:"", }
,{tesf:"スネーク", tess:"ダッシュ攻撃", fighter_id:1310, skill_genre:10400, begin:9, end:12, time:41, base_damage:8, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"スネーク", tess:"ダッシュ攻撃", fighter_id:1310, skill_genre:10400, begin:9, end:12, time:41, base_damage:6, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"スネーク", tess:"横強", fighter_id:1310, skill_genre:10501, begin:4, end:5, time:31, base_damage:4, alias:"横強1", tes_val:"横強1", }
,{tesf:"スネーク", tess:"横強", fighter_id:1310, skill_genre:10501, begin:8, end:8, time:39, base_damage:11, damage_no:1, alias:"横強2", tes_val:"横強2", }
,{tesf:"スネーク", tess:"横強", fighter_id:1310, skill_genre:10501, begin:8, end:8, time:39, base_damage:10, damage_no:2, alias:"横強2", tes_val:"横強2", }
,{tesf:"スネーク", tess:"横強", fighter_id:1310, skill_genre:10501, begin:8, end:8, time:39, base_damage:9, damage_no:3, alias:"横強2", tes_val:"横強2", }
,{tesf:"スネーク", tess:"上強", fighter_id:1310, skill_genre:10500, begin:6, end:8, time:37, base_damage:14.5, tes_val:"", }
,{tesf:"スネーク", tess:"上強", fighter_id:1310, skill_genre:10500, begin:9, end:13, time:37, base_damage:13.5, persistence_num:1, tes_val:"持続", }
,{tesf:"スネーク", tess:"下強", fighter_id:1310, skill_genre:10502, begin:6, end:7, time:30, base_damage:12, tes_val:"", }
,{tesf:"スネーク", tess:"横スマッシュ", fighter_id:1310, skill_genre:10601, begin:41, end:43, time:73, base_damage:22, tes_val:"", }
,{tesf:"スネーク", tess:"上スマッシュ", fighter_id:1310, skill_genre:10600, begin:11, end:12, time:54, base_damage:4, tes_val:"打ち上げ対地のみ", }
,{tesf:"スネーク", tess:"下スマッシュ", fighter_id:1310, skill_genre:10602, begin:8, end:10, time:44, base_damage:12, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"スネーク", tess:"下スマッシュ", fighter_id:1310, skill_genre:10602, begin:20, end:22, time:44, base_damage:14, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }

, {tesf:"スネーク", tess:"空N", fighter_id:1310, skill_genre:10904, begin:10, end:11, time:59, base_damage:3, landing_lag:16, landing_occurrence_begin:4, landing_occurrence_end:49, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"スネーク", tess:"空N", fighter_id:1310, skill_genre:10904, begin:18, end:19, time:59, base_damage:3, landing_lag:16, landing_occurrence_begin:4, landing_occurrence_end:49, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"スネーク", tess:"空N", fighter_id:1310, skill_genre:10904, begin:26, end:27, time:59, base_damage:3, landing_lag:16, landing_occurrence_begin:4, landing_occurrence_end:49, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"スネーク", tess:"空N", fighter_id:1310, skill_genre:10904, begin:36, end:38, time:59, base_damage:12, landing_lag:16, landing_occurrence_begin:4, landing_occurrence_end:49, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }
,{tesf:"スネーク", tess:"空前", fighter_id:1310, skill_genre:10901, begin:23, end:26, time:69, base_damage:15, landing_lag:19, landing_occurrence_begin:4, landing_occurrence_end:62, damage_no:1, tes_val:"", }
,{tesf:"スネーク", tess:"空前", fighter_id:1310, skill_genre:10901, begin:23, end:26, time:69, base_damage:14, landing_lag:19, landing_occurrence_begin:4, landing_occurrence_end:62, damage_no:2, tes_val:"", }
,{tesf:"スネーク", tess:"空後", fighter_id:1310, skill_genre:10903, begin:7, end:9, time:42, base_damage:16, landing_lag:19, landing_occurrence_begin:2, landing_occurrence_end:39, damage_no:1, tes_val:"", }
,{tesf:"スネーク", tess:"空後", fighter_id:1310, skill_genre:10903, begin:7, end:9, time:42, base_damage:14, landing_lag:19, landing_occurrence_begin:2, landing_occurrence_end:39, damage_no:2, tes_val:"", }
,{tesf:"スネーク", tess:"空後", fighter_id:1310, skill_genre:10903, begin:10, end:26, time:42, base_damage:10, landing_lag:19, landing_occurrence_begin:2, landing_occurrence_end:39, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"スネーク", tess:"空後", fighter_id:1310, skill_genre:10903, begin:10, end:26, time:42, base_damage:9, landing_lag:19, landing_occurrence_begin:2, landing_occurrence_end:39, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"スネーク", tess:"空上", fighter_id:1310, skill_genre:10900, begin:10, end:12, time:47, base_damage:14, landing_lag:15, landing_occurrence_begin:5, landing_occurrence_end:35, tes_val:"", }
,{tesf:"スネーク", tess:"空上", fighter_id:1310, skill_genre:10900, begin:13, end:23, time:47, base_damage:10, landing_lag:15, landing_occurrence_begin:5, landing_occurrence_end:35, persistence_num:1, tes_val:"持続", }
,{tesf:"スネーク", tess:"空下", fighter_id:1310, skill_genre:10902, begin:3, end:4, time:59, base_damage:4, landing_lag:20, landing_occurrence_begin:2, landing_occurrence_end:52, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"スネーク", tess:"空下", fighter_id:1310, skill_genre:10902, begin:10, end:11, time:59, base_damage:3, landing_lag:20, landing_occurrence_begin:2, landing_occurrence_end:52, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"スネーク", tess:"空下", fighter_id:1310, skill_genre:10902, begin:17, end:18, time:59, base_damage:3, landing_lag:20, landing_occurrence_begin:2, landing_occurrence_end:52, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"スネーク", tess:"空下", fighter_id:1310, skill_genre:10902, begin:25, end:26, time:59, base_damage:10, landing_lag:20, landing_occurrence_begin:2, landing_occurrence_end:52, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }
,{tess:"その場投げ", fighter_id:1310 , skill_genre:10200, base_damage:0,begin:8, end:9, time:34}
,{tess:"ダッシュ投げ", fighter_id:1310 , skill_genre:10201, base_damage:0,begin:11, end:12, time:42}
,{tess:"ふりむき投げ", fighter_id:1310 , skill_genre:10202, base_damage:0,begin:9, end:10, time:37}

, {tesf:"アイク", tess:"弱攻撃", fighter_id:1320, skill_genre:10300, begin:4, end:5, time:23, base_damage:2.5, alias:"弱1", tes_val:"弱1", }
,{tesf:"アイク", tess:"弱攻撃", fighter_id:1320, skill_genre:10300, begin:4, end:5, time:15, base_damage:2.5, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"アイク", tess:"弱攻撃", fighter_id:1320, skill_genre:10300, begin:3, end:4, time:27, base_damage:2.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"アイク", tess:"弱攻撃", fighter_id:1320, skill_genre:10300, begin:5, end:8, time:40, base_damage:5, alias:"弱3", tes_val:"弱3", }
,{tesf:"アイク", tess:"ダッシュ攻撃", fighter_id:1320, skill_genre:10400, begin:15, end:16, time:47, base_damage:14, damage_no:1, tes_val:"", correction:1.2}
,{tesf:"アイク", tess:"ダッシュ攻撃", fighter_id:1320, skill_genre:10400, begin:15, end:16, time:47, base_damage:11, damage_no:2, tes_val:""}
,{tesf:"アイク", tess:"ダッシュ攻撃", fighter_id:1320, skill_genre:10400, begin:17, end:19, time:47, base_damage:9, persistence_num:1, tes_val:"持続", correction:1.2}
,{tesf:"アイク", tess:"横強", fighter_id:1320, skill_genre:10501, begin:12, end:13, time:41, base_damage:13.5, shift:"all", tes_val:"全シフト", }
,{tesf:"アイク", tess:"上強", fighter_id:1320, skill_genre:10500, begin:11, end:16, time:39, base_damage:12, tes_val:"", }
,{tesf:"アイク", tess:"上強", fighter_id:1320, skill_genre:10500, begin:17, end:21, time:39, base_damage:8, persistence_num:1, tes_val:"持続", }
,{tesf:"アイク", tess:"下強", fighter_id:1320, skill_genre:10502, begin:7, end:8, time:28, base_damage:8, tes_val:"", }
,{tesf:"アイク", tess:"横スマッシュ", fighter_id:1320, skill_genre:10601, begin:31, end:32, time:83, base_damage:19, persistence_num:0, tes_val:"始", }
,{tesf:"アイク", tess:"横スマッシュ", fighter_id:1320, skill_genre:10601, begin:33, end:35, time:83, base_damage:22, damage_no:1, tes_val:"", }
,{tesf:"アイク", tess:"横スマッシュ", fighter_id:1320, skill_genre:10601, begin:33, end:35, time:83, base_damage:19, damage_no:2, tes_val:"", }
,{tesf:"アイク", tess:"上スマッシュ", fighter_id:1320, skill_genre:10600, begin:25, end:29, time:70, base_damage:17, tes_val:"", }
,{tesf:"アイク", tess:"上スマッシュ", fighter_id:1320, skill_genre:10600, begin:30, end:31, time:70, base_damage:10, alias:"衝撃", defend_position:"ground_only", tes_val:"衝撃, 対地のみ", }
,{tesf:"アイク", tess:"下スマッシュ", fighter_id:1320, skill_genre:10602, begin:13, end:15, time:70, base_damage:16, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"アイク", tess:"下スマッシュ", fighter_id:1320, skill_genre:10602, begin:32, end:33, time:70, base_damage:19, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"アイク", tess:"下スマッシュ", fighter_id:1320, skill_genre:10602, begin:34, end:36, time:70, base_damage:9, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続", }
, {tesf:"アイク", tess:"空N", fighter_id:1320, skill_genre:10904, begin:10, end:14, time:59, base_damage:7.5, landing_lag:10, landing_occurrence_begin:3, landing_occurrence_end:49, tes_val:"", }
,{tesf:"アイク", tess:"空N", fighter_id:1320, skill_genre:10904, begin:15, end:22, time:59, base_damage:6, landing_lag:10, landing_occurrence_begin:3, landing_occurrence_end:49, persistence_num:1, tes_val:"持続", }
,{tesf:"アイク", tess:"空前", fighter_id:1320, skill_genre:10901, begin:11, end:15, time:59, base_damage:11.5, landing_lag:17, landing_occurrence_begin:2, landing_occurrence_end:41, tes_val:"", }
,{tesf:"アイク", tess:"空後", fighter_id:1320, skill_genre:10903, begin:7, end:9, time:54, base_damage:14, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:34, tes_val:"", }
,{tesf:"アイク", tess:"空上", fighter_id:1320, skill_genre:10900, begin:13, end:18, time:56, base_damage:11, landing_lag:15, landing_occurrence_begin:6, landing_occurrence_end:50, tes_val:"", }
,{tesf:"アイク", tess:"空下", fighter_id:1320, skill_genre:10902, begin:16, end:17, time:54, base_damage:15, landing_lag:14, landing_occurrence_begin:5, landing_occurrence_end:47, tes_val:"", }
,{tess:"その場投げ", fighter_id:1320 , skill_genre:10200, base_damage:0,begin:7, end:8, time:36}
,{tess:"ダッシュ投げ", fighter_id:1320 , skill_genre:10201, base_damage:0,begin:10, end:11, time:44}
,{tess:"ふりむき投げ", fighter_id:1320 , skill_genre:10202, base_damage:0,begin:11, end:12, time:39}

, {tesf:"ゼニガメ", tess:"弱攻撃", fighter_id:1330, skill_genre:10300, begin:2, end:3, time:16, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ゼニガメ", tess:"弱攻撃", fighter_id:1330, skill_genre:10300, begin:2, end:3, time:6, base_damage:2, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ゼニガメ", tess:"弱攻撃", fighter_id:1330, skill_genre:10300, begin:4, end:5, time:24, base_damage:1.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"ゼニガメ", tess:"弱攻撃", fighter_id:1330, skill_genre:10300, begin:5, end:6, time:31, base_damage:4, alias:"弱3", tes_val:"弱3", }
,{tesf:"ゼニガメ", tess:"ダッシュ攻撃", fighter_id:1330, skill_genre:10400, begin:8, end:11, time:35, base_damage:8, tes_val:"", correction:1.45}
,{tesf:"ゼニガメ", tess:"ダッシュ攻撃", fighter_id:1330, skill_genre:10400, begin:12, end:17, time:35, base_damage:7, persistence_num:1, tes_val:"持続", }
,{tesf:"ゼニガメ", tess:"横強", fighter_id:1330, skill_genre:10501, begin:5, end:6, time:17, base_damage:5, shift:"all", tes_val:"全シフト", }
,{tesf:"ゼニガメ", tess:"上強", fighter_id:1330, skill_genre:10500, begin:5, end:6, time:19, base_damage:5, tes_val:"", }
,{tesf:"ゼニガメ", tess:"下強", fighter_id:1330, skill_genre:10502, begin:8, end:13, time:29, base_damage:9, tes_val:"", }
,{tesf:"ゼニガメ", tess:"横スマッシュ", fighter_id:1330, skill_genre:10601, begin:20, end:21, time:49, base_damage:15, shift:"all", tes_val:"全シフト", }
,{tesf:"ゼニガメ", tess:"上スマッシュ", fighter_id:1330, skill_genre:10600, begin:19, end:19, time:65, base_damage:3, serial_num_str:"1", defend_position:"ground_only", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 対地のみ", }
,{tesf:"ゼニガメ", tess:"上スマッシュ", fighter_id:1330, skill_genre:10600, begin:21, end:21, time:65, base_damage:13, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続1", }
,{tesf:"ゼニガメ", tess:"上スマッシュ", fighter_id:1330, skill_genre:10600, begin:22, end:22, time:65, base_damage:12, persistence_num:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続2", }
,{tesf:"ゼニガメ", tess:"上スマッシュ", fighter_id:1330, skill_genre:10600, begin:23, end:23, time:65, base_damage:10, persistence_num:3, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続3", }
,{tesf:"ゼニガメ", tess:"上スマッシュ", fighter_id:1330, skill_genre:10600, begin:24, end:24, time:65, base_damage:9, persistence_num:4, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続4", }
,{tesf:"ゼニガメ", tess:"上スマッシュ", fighter_id:1330, skill_genre:10600, begin:25, end:25, time:65, base_damage:8, persistence_num:5, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続5", }
,{tesf:"ゼニガメ", tess:"下スマッシュ", fighter_id:1330, skill_genre:10602, begin:18, end:19, time:40, base_damage:13, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ゼニガメ", tess:"下スマッシュ", fighter_id:1330, skill_genre:10602, begin:24, end:25, time:40, base_damage:13, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"ゼニガメ", tess:"空N", fighter_id:1330, skill_genre:10904, begin:4, end:6, time:41, base_damage:10, landing_lag:8, landing_occurrence_begin:4, landing_occurrence_end:34, tes_val:"", }
,{tesf:"ゼニガメ", tess:"空N", fighter_id:1330, skill_genre:10904, begin:7, end:26, time:41, base_damage:7, landing_lag:8, landing_occurrence_begin:4, landing_occurrence_end:34, persistence_num:1, tes_val:"持続", }
,{tesf:"ゼニガメ", tess:"空前", fighter_id:1330, skill_genre:10901, begin:5, end:6, time:35, base_damage:7, landing_lag:6, landing_occurrence_begin:5, landing_occurrence_end:34, tes_val:"", }
,{tesf:"ゼニガメ", tess:"空前", fighter_id:1330, skill_genre:10901, begin:7, end:14, time:35, base_damage:6, landing_lag:6, landing_occurrence_begin:5, landing_occurrence_end:34, persistence_num:1, tes_val:"持続", }
,{tesf:"ゼニガメ", tess:"空後", fighter_id:1330, skill_genre:10903, begin:5, end:14, time:35, base_damage:1, landing_lag:18, landing_occurrence_begin:5, landing_occurrence_end:21, detail_name:"連", rehit:2, tes_val:"連", }
,{tesf:"ゼニガメ", tess:"空後", fighter_id:1330, skill_genre:10903, begin:15, end:16, time:35, base_damage:6, landing_lag:18, landing_occurrence_begin:5, landing_occurrence_end:21, persistence_num:9, tes_val:"〆", }
,{tesf:"ゼニガメ", tess:"空後", fighter_id:1330, skill_genre:10903, begin:1, end:2, time:35, base_damage:2, landing_lag:18, landing_occurrence_begin:5, landing_occurrence_end:21, is_landing_attack:true, tes_val:"着地", }
,{tesf:"ゼニガメ", tess:"空上", fighter_id:1330, skill_genre:10900, begin:5, end:9, time:29, base_damage:7, landing_lag:6, landing_occurrence_begin:2, landing_occurrence_end:19, tes_val:"", }
,{tesf:"ゼニガメ", tess:"空下", fighter_id:1330, skill_genre:10902, begin:6, end:20, time:44, base_damage:1.5, landing_lag:16, landing_occurrence_begin:6, landing_occurrence_end:34, detail_name:"連", rehit:3, tes_val:"連", }
,{tesf:"ゼニガメ", tess:"空下", fighter_id:1330, skill_genre:10902, begin:22, end:22, time:44, base_damage:4, landing_lag:16, landing_occurrence_begin:6, landing_occurrence_end:34, persistence_num:9, tes_val:"〆", }
,{tess:"その場投げ", fighter_id:1330 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34}
,{tess:"ダッシュ投げ", fighter_id:1330 , skill_genre:10201, base_damage:0,begin:8, end:9, time:39}
,{tess:"ふりむき投げ", fighter_id:1330 , skill_genre:10202, base_damage:0,begin:9, end:10, time:37}

, {tesf:"フシギソウ", tess:"弱攻撃", fighter_id:1340, skill_genre:10300, begin:7, end:8, time:27, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"フシギソウ", tess:"弱攻撃", fighter_id:1340, skill_genre:10300, begin:5, end:6, time:27, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"フシギソウ", tess:"弱攻撃", fighter_id:1340, skill_genre:10300, begin:5, end:6, time:19, base_damage:2, alias:"弱2", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱2", }
,{tesf:"フシギソウ", tess:"弱攻撃", fighter_id:1340, skill_genre:10300, begin:5, end:6, time:2, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"フシギソウ", tess:"弱攻撃", fighter_id:1340, skill_genre:10300, begin:2, end:2, time:20, base_damage:0.5, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"2, 5, 8, 11, 14, 17, 20", tes_val:"百裂, 連",correction:3 }
,{tesf:"フシギソウ", tess:"弱攻撃", fighter_id:1340, skill_genre:10300, begin:4, end:5, time:39, base_damage:2, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"フシギソウ", tess:"ダッシュ攻撃", fighter_id:1340, skill_genre:10400, begin:4, end:11, time:43, base_damage:12, tes_val:"", }
,{tesf:"フシギソウ", tess:"ダッシュ攻撃", fighter_id:1340, skill_genre:10400, begin:12, end:19, time:43, base_damage:10, persistence_num:1, tes_val:"持続", }
,{tesf:"フシギソウ", tess:"横強", fighter_id:1340, skill_genre:10501, begin:10, end:10, time:45, base_damage:1.5, serial_num_str:"1-6", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"10, 12, 14,16, 18, 20", tes_val:"Hit 1-6", }
,{tesf:"フシギソウ", tess:"横強", fighter_id:1340, skill_genre:10501, begin:22, end:22, time:45, base_damage:2, serial_num_str:"7", tes_message:"(連続ヒットする技)", tes_val:"Hit 7", }
,{tesf:"フシギソウ", tess:"上強", fighter_id:1340, skill_genre:10500, begin:7, end:13, time:32, base_damage:7, tes_val:"", }
,{tesf:"フシギソウ", tess:"下強", fighter_id:1340, skill_genre:10502, begin:4, end:6, time:31, base_damage:5.5, tes_val:"", }
,{tesf:"フシギソウ", tess:"横スマッシュ", fighter_id:1340, skill_genre:10601, begin:15, end:18, time:59, base_damage:16, shift:"all", tes_val:"全シフト", }
,{tesf:"フシギソウ", tess:"横スマッシュ", fighter_id:1340, skill_genre:10601, begin:19, end:20, time:59, base_damage:14, persistence_num:1, shift:"all", tes_val:"全シフト, 持続", }
,{tesf:"フシギソウ", tess:"上スマッシュ", fighter_id:1340, skill_genre:10600, begin:26, end:29, time:59, base_damage:17, tes_val:"", }
,{tesf:"フシギソウ", tess:"下スマッシュ", fighter_id:1340, skill_genre:10602, begin:13, end:14, time:45, base_damage:12, damage_no:1, tes_val:"", }
,{tesf:"フシギソウ", tess:"下スマッシュ", fighter_id:1340, skill_genre:10602, begin:13, end:14, time:45, base_damage:10, damage_no:2, tes_val:"", }
,{tesf:"フシギソウ", tess:"下スマッシュ", fighter_id:1340, skill_genre:10602, begin:13, end:14, time:45, base_damage:8, damage_no:3, tes_val:"", }
, {tesf:"フシギソウ", tess:"空N", fighter_id:1340, skill_genre:10904, begin:7, end:26, time:41, base_damage:1, landing_lag:16, landing_occurrence_begin:4, landing_occurrence_end:40, detail_name:"連", rehit:3, tes_val:"連", }
,{tesf:"フシギソウ", tess:"空N", fighter_id:1340, skill_genre:10904, begin:28, end:29, time:41, base_damage:2, landing_lag:16, landing_occurrence_begin:4, landing_occurrence_end:40, persistence_num:9, tes_val:"〆", }
,{tesf:"フシギソウ", tess:"空前", fighter_id:1340, skill_genre:10901, begin:14, end:18, time:48, base_damage:12, landing_lag:13, landing_occurrence_begin:3, landing_occurrence_end:38, tes_val:"", }
,{tesf:"フシギソウ", tess:"空後", fighter_id:1340, skill_genre:10903, begin:7, end:9, time:43, base_damage:3, landing_lag:7, landing_occurrence_begin:7, landing_occurrence_end:42, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"フシギソウ", tess:"空後", fighter_id:1340, skill_genre:10903, begin:13, end:15, time:43, base_damage:6, landing_lag:7, landing_occurrence_begin:7, landing_occurrence_end:42, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"フシギソウ", tess:"空上", fighter_id:1340, skill_genre:10900, begin:12, end:13, time:51, base_damage:15, landing_lag:11, landing_occurrence_begin:1, landing_occurrence_end:40, tes_val:"", }
,{tesf:"フシギソウ", tess:"空下", fighter_id:1340, skill_genre:10902, begin:11, end:12, time:63, base_damage:10, landing_lag:13, landing_occurrence_begin:3, landing_occurrence_end:51, tes_val:"", }
,{tess:"その場投げ", fighter_id:1340 , skill_genre:10200, base_damage:0,begin:13, end:14, time:42}
,{tess:"ダッシュ投げ", fighter_id:1340 , skill_genre:10201, base_damage:0,begin:13, end:14, time:48}
,{tess:"ふりむき投げ", fighter_id:1340 , skill_genre:10202, base_damage:0,begin:13, end:14, time:44}

, {tesf:"リザードン", tess:"弱攻撃", fighter_id:1350, skill_genre:10300, begin:4, end:5, time:22, base_damage:2.5, alias:"弱1", tes_val:"弱1", }
,{tesf:"リザードン", tess:"弱攻撃", fighter_id:1350, skill_genre:10300, begin:5, end:6, time:25, base_damage:2.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"リザードン", tess:"弱攻撃", fighter_id:1350, skill_genre:10300, begin:7, end:8, time:33, base_damage:5, alias:"弱3", tes_val:"弱3", }
,{tesf:"リザードン", tess:"ダッシュ攻撃", fighter_id:1350, skill_genre:10400, begin:10, end:12, time:39, base_damage:13, tes_val:"", correction:1.5}
,{tesf:"リザードン", tess:"ダッシュ攻撃", fighter_id:1350, skill_genre:10400, begin:13, end:20, time:39, base_damage:10, persistence_num:1, tes_val:"持続", correction:1.5}
,{tesf:"リザードン", tess:"横強", fighter_id:1350, skill_genre:10501, begin:12, end:13, time:37, base_damage:11, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"リザードン", tess:"横強", fighter_id:1350, skill_genre:10501, begin:12, end:13, time:37, base_damage:7, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"リザードン", tess:"上強", fighter_id:1350, skill_genre:10500, begin:9, end:12, time:33, base_damage:8, tes_val:"", }
,{tesf:"リザードン", tess:"下強", fighter_id:1350, skill_genre:10502, begin:9, end:10, time:30, base_damage:10, tes_val:"", }
,{tesf:"リザードン", tess:"横スマッシュ", fighter_id:1350, skill_genre:10601, begin:22, end:22, time:69, base_damage:19, tes_val:"", }
,{tesf:"リザードン", tess:"横スマッシュ", fighter_id:1350, skill_genre:10601, begin:23, end:24, time:69, base_damage:19, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"リザードン", tess:"横スマッシュ", fighter_id:1350, skill_genre:10601, begin:23, end:24, time:69, base_damage:16.4, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"リザードン", tess:"上スマッシュ", fighter_id:1350, skill_genre:10600, begin:6, end:6, time:46, base_damage:5, serial_num_str:"1", defend_position:"ground", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 対地", }
,{tesf:"リザードン", tess:"上スマッシュ", fighter_id:1350, skill_genre:10600, begin:7, end:7, time:46, base_damage:5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リザードン", tess:"上スマッシュ", fighter_id:1350, skill_genre:10600, begin:8, end:8, time:46, base_damage:5, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続1", }
,{tesf:"リザードン", tess:"上スマッシュ", fighter_id:1350, skill_genre:10600, begin:9, end:9, time:46, base_damage:5, persistence_num:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続2", }
,{tesf:"リザードン", tess:"上スマッシュ", fighter_id:1350, skill_genre:10600, begin:14, end:19, time:46, base_damage:11, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"リザードン", tess:"下スマッシュ", fighter_id:1350, skill_genre:10602, begin:14, end:16, time:60, base_damage:16, tes_val:"", }
, {tesf:"リザードン", tess:"空N", fighter_id:1350, skill_genre:10904, begin:8, end:20, time:39, base_damage:12, landing_lag:10, landing_occurrence_begin:4, landing_occurrence_end:30, damage_no:1, tes_val:"", }
,{tesf:"リザードン", tess:"空N", fighter_id:1350, skill_genre:10904, begin:8, end:20, time:39, base_damage:9, landing_lag:10, landing_occurrence_begin:4, landing_occurrence_end:30, damage_no:2, tes_val:"", }
,{tesf:"リザードン", tess:"空前", fighter_id:1350, skill_genre:10901, begin:8, end:9, time:45, base_damage:12, landing_lag:19, landing_occurrence_begin:5, landing_occurrence_end:34, persistence_num:0, tes_val:"始", }
,{tesf:"リザードン", tess:"空前", fighter_id:1350, skill_genre:10901, begin:10, end:12, time:45, base_damage:13, landing_lag:19, landing_occurrence_begin:5, landing_occurrence_end:34, damage_no:1, tes_val:"", }
,{tesf:"リザードン", tess:"空前", fighter_id:1350, skill_genre:10901, begin:10, end:12, time:45, base_damage:12, landing_lag:19, landing_occurrence_begin:5, landing_occurrence_end:34, damage_no:2, tes_val:"", }
,{tesf:"リザードン", tess:"空後", fighter_id:1350, skill_genre:10903, begin:14, end:14, time:45, base_damage:14, landing_lag:20, landing_occurrence_begin:4, landing_occurrence_end:43, damage_no:1, persistence_num:0, tes_val:"始", }
,{tesf:"リザードン", tess:"空後", fighter_id:1350, skill_genre:10903, begin:14, end:14, time:45, base_damage:11, landing_lag:20, landing_occurrence_begin:4, landing_occurrence_end:43, damage_no:2, persistence_num:0, tes_val:"始", }
,{tesf:"リザードン", tess:"空後", fighter_id:1350, skill_genre:10903, begin:15, end:16, time:45, base_damage:16, landing_lag:20, landing_occurrence_begin:4, landing_occurrence_end:43, damage_no:1, tes_val:"", }
,{tesf:"リザードン", tess:"空後", fighter_id:1350, skill_genre:10903, begin:15, end:16, time:45, base_damage:14, landing_lag:20, landing_occurrence_begin:4, landing_occurrence_end:43, damage_no:2, tes_val:"", }
,{tesf:"リザードン", tess:"空後", fighter_id:1350, skill_genre:10903, begin:15, end:16, time:45, base_damage:11, landing_lag:20, landing_occurrence_begin:4, landing_occurrence_end:43, damage_no:3, tes_val:"", }
,{tesf:"リザードン", tess:"空上", fighter_id:1350, skill_genre:10900, begin:12, end:15, time:45, base_damage:13, landing_lag:13, landing_occurrence_begin:4, landing_occurrence_end:37, tes_val:"", }
,{tesf:"リザードン", tess:"空下", fighter_id:1350, skill_genre:10902, begin:18, end:21, time:51, base_damage:14, landing_lag:21, landing_occurrence_begin:6, landing_occurrence_end:41, tes_val:"", }
,{tesf:"リザードン", tess:"空下", fighter_id:1350, skill_genre:10902, begin:22, end:25, time:51, base_damage:8, landing_lag:21, landing_occurrence_begin:6, landing_occurrence_end:41, persistence_num:1, tes_val:"持続", }
,{tess:"その場投げ", fighter_id:1350 , skill_genre:10200, base_damage:0,begin:8, end:10, time:39}
,{tess:"ダッシュ投げ", fighter_id:1350 , skill_genre:10201, base_damage:0,begin:11, end:13, time:45}
,{tess:"ふりむき投げ", fighter_id:1350 , skill_genre:10202, base_damage:0,begin:12, end:14, time:42}

, {tesf:"ディディーコング", tess:"弱攻撃", fighter_id:1360, skill_genre:10300, begin:3, end:3, time:19, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ディディーコング", tess:"弱攻撃", fighter_id:1360, skill_genre:10300, begin:3, end:3, time:9, base_damage:2, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ディディーコング", tess:"弱攻撃", fighter_id:1360, skill_genre:10300, begin:5, end:5, time:20, base_damage:1.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"ディディーコング", tess:"弱攻撃", fighter_id:1360, skill_genre:10300, begin:5, end:5, time:34, base_damage:4, alias:"弱3", tes_val:"弱3", }
,{tesf:"ディディーコング", tess:"ダッシュ攻撃", fighter_id:1360, skill_genre:10400, begin:8, end:9, time:40, base_damage:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ディディーコング", tess:"ダッシュ攻撃", fighter_id:1360, skill_genre:10400, begin:16, end:17, time:40, base_damage:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ディディーコング", tess:"ダッシュ攻撃", fighter_id:1360, skill_genre:10400, begin:22, end:23, time:40, base_damage:3, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"ディディーコング", tess:"横強", fighter_id:1360, skill_genre:10501, begin:10, end:11, time:36, base_damage:10, shift:"all", tes_val:"全シフト", }
,{tesf:"ディディーコング", tess:"横強", fighter_id:1360, skill_genre:10501, begin:12, end:12, time:36, base_damage:10, persistence_num:1, shift:"all", tes_val:"全シフト, 持続1", }
,{tesf:"ディディーコング", tess:"横強", fighter_id:1360, skill_genre:10501, begin:13, end:14, time:36, base_damage:7, persistence_num:2, shift:"all", tes_val:"全シフト, 持続2", }
,{tesf:"ディディーコング", tess:"上強", fighter_id:1360, skill_genre:10500, begin:6, end:11, time:29, base_damage:6, tes_val:"", }
,{tesf:"ディディーコング", tess:"下強", fighter_id:1360, skill_genre:10502, begin:4, end:5, time:18, base_damage:5.5, tes_val:"", }
,{tesf:"ディディーコング", tess:"横スマッシュ", fighter_id:1360, skill_genre:10601, begin:12, end:12, time:50, base_damage:5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ディディーコング", tess:"横スマッシュ", fighter_id:1360, skill_genre:10601, begin:13, end:13, time:50, base_damage:5, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"ディディーコング", tess:"横スマッシュ", fighter_id:1360, skill_genre:10601, begin:21, end:23, time:50, base_damage:11, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ディディーコング", tess:"横スマッシュ", fighter_id:1360, skill_genre:10601, begin:21, end:23, time:50, base_damage:9, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ディディーコング", tess:"上スマッシュ", fighter_id:1360, skill_genre:10600, begin:5, end:5, time:53, base_damage:2.5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ディディーコング", tess:"上スマッシュ", fighter_id:1360, skill_genre:10600, begin:6, end:8, time:53, base_damage:2.5, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"ディディーコング", tess:"上スマッシュ", fighter_id:1360, skill_genre:10600, begin:12, end:14, time:53, base_damage:2.5, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ディディーコング", tess:"上スマッシュ", fighter_id:1360, skill_genre:10600, begin:15, end:15, time:53, base_damage:2.5, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続", }
,{tesf:"ディディーコング", tess:"上スマッシュ", fighter_id:1360, skill_genre:10600, begin:19, end:23, time:53, base_damage:6, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"ディディーコング", tess:"下スマッシュ", fighter_id:1360, skill_genre:10602, begin:9, end:10, time:52, base_damage:12, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ディディーコング", tess:"下スマッシュ", fighter_id:1360, skill_genre:10602, begin:14, end:14, time:52, base_damage:15, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"ディディーコング", tess:"空N", fighter_id:1360, skill_genre:10904, begin:8, end:20, time:48, base_damage:6, landing_lag:8, landing_occurrence_begin:4, landing_occurrence_end:26, tes_val:"", }
,{tesf:"ディディーコング", tess:"空前", fighter_id:1360, skill_genre:10901, begin:6, end:9, time:46, base_damage:10, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:25, tes_val:"", }
,{tesf:"ディディーコング", tess:"空前", fighter_id:1360, skill_genre:10901, begin:10, end:16, time:46, base_damage:8, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:25, persistence_num:1, tes_val:"持続", }
,{tesf:"ディディーコング", tess:"空後", fighter_id:1360, skill_genre:10903, begin:5, end:8, time:30, base_damage:9, landing_lag:7, landing_occurrence_begin:3, landing_occurrence_end:19, tes_val:"", }
,{tesf:"ディディーコング", tess:"空上", fighter_id:1360, skill_genre:10900, begin:4, end:7, time:35, base_damage:7, landing_lag:9, landing_occurrence_begin:1, landing_occurrence_end:26, tes_val:"", }
,{tesf:"ディディーコング", tess:"空下", fighter_id:1360, skill_genre:10902, begin:15, end:16, time:46, base_damage:13, landing_lag:17, landing_occurrence_begin:15, landing_occurrence_end:34, detail_name:"本当て", tes_val:"本当て", }
,{tesf:"ディディーコング", tess:"空下", fighter_id:1360, skill_genre:10902, begin:15, end:15, time:46, base_damage:10, landing_lag:17, landing_occurrence_begin:15, landing_occurrence_end:34, detail_name:"カス当て", tes_val:"カス当て", }
,{tess:"その場投げ", fighter_id:1360 , skill_genre:10200, base_damage:0,begin:7, end:8, time:36}
,{tess:"ダッシュ投げ", fighter_id:1360 , skill_genre:10201, base_damage:0,begin:10, end:11, time:44}
,{tess:"ふりむき投げ", fighter_id:1360 , skill_genre:10202, base_damage:0,begin:11, end:12, time:39}

, {tesf:"ソニック", tess:"弱攻撃", fighter_id:1380, skill_genre:10300, begin:3, end:3, time:19, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ソニック", tess:"弱攻撃", fighter_id:1380, skill_genre:10300, begin:3, end:3, time:9, base_damage:2, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ソニック", tess:"弱攻撃", fighter_id:1380, skill_genre:10300, begin:2, end:2, time:21, base_damage:1.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"ソニック", tess:"弱攻撃", fighter_id:1380, skill_genre:10300, begin:4, end:5, time:35, base_damage:4, alias:"弱3", tes_val:"弱3", }
,{tesf:"ソニック", tess:"ダッシュ攻撃", fighter_id:1380, skill_genre:10400, begin:5, end:8, time:49, base_damage:6, tes_val:"", }
,{tesf:"ソニック", tess:"ダッシュ攻撃", fighter_id:1380, skill_genre:10400, begin:9, end:20, time:49, base_damage:4, persistence_num:1, tes_val:"持続", correction:1.57}
,{tesf:"ソニック", tess:"横強", fighter_id:1380, skill_genre:10501, begin:6, end:6, time:35, base_damage:4, serial_num_str:"1", shift:"all", tes_message:"(連続ヒットする技)", tes_val:"全シフト, Hit 1", }
,{tesf:"ソニック", tess:"横強", fighter_id:1380, skill_genre:10501, begin:8, end:11, time:35, base_damage:7, damage_no:1, serial_num_str:"2", shift:"all", tes_message:"(連続ヒットする技)", tes_val:"全シフト, Hit 2", }
,{tesf:"ソニック", tess:"横強", fighter_id:1380, skill_genre:10501, begin:8, end:11, time:35, base_damage:5, damage_no:2, serial_num_str:"2", shift:"all", tes_message:"(連続ヒットする技)", tes_val:"全シフト, Hit 2", }
,{tesf:"ソニック", tess:"上強", fighter_id:1380, skill_genre:10500, begin:6, end:8, time:39, base_damage:2, serial_num_str:"1", defend_position:"ground_only", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 対地のみ", }
,{tesf:"ソニック", tess:"上強", fighter_id:1380, skill_genre:10500, begin:7, end:8, time:39, base_damage:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ソニック", tess:"上強", fighter_id:1380, skill_genre:10500, begin:13, end:14, time:39, base_damage:6, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ソニック", tess:"下強", fighter_id:1380, skill_genre:10502, begin:6, end:7, time:27, base_damage:6, tes_val:"", }
,{tesf:"ソニック", tess:"横スマッシュ", fighter_id:1380, skill_genre:10601, begin:18, end:20, time:47, base_damage:14, shift:"all", tes_val:"全シフト", }
,{tesf:"ソニック", tess:"上スマッシュ", fighter_id:1380, skill_genre:10600, begin:18, end:18, time:65, base_damage:5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ソニック", tess:"上スマッシュ", fighter_id:1380, skill_genre:10600, begin:21, end:21, time:65, base_damage:1, serial_num_str:"2-7", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"21, 23, 25, 27, 29, 31", tes_val:"Hit 2-7", }
,{tesf:"ソニック", tess:"上スマッシュ", fighter_id:1380, skill_genre:10600, begin:33, end:34, time:65, base_damage:3, serial_num_str:"8", tes_message:"(連続ヒットする技)", tes_val:"Hit 8", }
,{tesf:"ソニック", tess:"下スマッシュ", fighter_id:1380, skill_genre:10602, begin:12, end:13, time:54, base_damage:12, tes_val:"", }
, {tesf:"ソニック", tess:"空N", fighter_id:1380, skill_genre:10904, begin:6, end:9, time:49, base_damage:12, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:47, tes_val:"", }
,{tesf:"ソニック", tess:"空N", fighter_id:1380, skill_genre:10904, begin:10, end:19, time:49, base_damage:8, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:47, persistence_num:1, tes_val:"持続1", }
,{tesf:"ソニック", tess:"空N", fighter_id:1380, skill_genre:10904, begin:20, end:38, time:49, base_damage:5, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:47, persistence_num:2, tes_val:"持続2", }
,{tesf:"ソニック", tess:"空前", fighter_id:1380, skill_genre:10901, begin:5, end:5, time:45, base_damage:0.8, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:33, serial_num_str:"1-5", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"5, 7, 9, 11, 13", tes_val:"Hit 1-5", }
,{tesf:"ソニック", tess:"空前", fighter_id:1380, skill_genre:10901, begin:15, end:15, time:45, base_damage:3, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:33, serial_num_str:"6", tes_message:"(連続ヒットする技)", tes_val:"Hit 6", }
,{tesf:"ソニック", tess:"空後", fighter_id:1380, skill_genre:10903, begin:13, end:14, time:37, base_damage:14, landing_lag:15, landing_occurrence_begin:5, landing_occurrence_end:32, tes_val:"", }
,{tesf:"ソニック", tess:"空後", fighter_id:1380, skill_genre:10903, begin:15, end:19, time:37, base_damage:10, landing_lag:15, landing_occurrence_begin:5, landing_occurrence_end:32, persistence_num:1, tes_val:"持続", }
,{tesf:"ソニック", tess:"空上", fighter_id:1380, skill_genre:10900, begin:5, end:7, time:39, base_damage:3, landing_lag:13, landing_occurrence_begin:5, landing_occurrence_end:15, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ソニック", tess:"空上", fighter_id:1380, skill_genre:10900, begin:14, end:15, time:39, base_damage:8, landing_lag:13, landing_occurrence_begin:5, landing_occurrence_end:15, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ソニック", tess:"空下", fighter_id:1380, skill_genre:10902, begin:17, end:19, time:45, base_damage:8, landing_lag:21, landing_occurrence_begin:4, landing_occurrence_end:40, tes_val:"メテオ", }
,{tesf:"ソニック", tess:"空下", fighter_id:1380, skill_genre:10902, begin:20, end:32, time:45, base_damage:7, landing_lag:21, landing_occurrence_begin:4, landing_occurrence_end:40, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"ソニック", tess:"空下", fighter_id:1380, skill_genre:10902, begin:20, end:32, time:45, base_damage:5, landing_lag:21, landing_occurrence_begin:4, landing_occurrence_end:40, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tess:"その場投げ", fighter_id:1380 , skill_genre:10200, base_damage:0,begin:7, end:8, time:37}
,{tess:"ダッシュ投げ", fighter_id:1380 , skill_genre:10201, base_damage:0,begin:10, end:11, time:47}
,{tess:"ふりむき投げ", fighter_id:1380 , skill_genre:10202, base_damage:0,begin:11, end:12, time:39}

, {tesf:"ピクミン&オリマー", tess:"弱攻撃", fighter_id:1400, skill_genre:10300, begin:4, end:4, time:19, base_damage:3, alias:"弱1", tes_val:"弱1", }
,{tesf:"ピクミン&オリマー", tess:"弱攻撃", fighter_id:1400, skill_genre:10300, begin:5, end:5, time:19, base_damage:4, damage_no:1, alias:"弱1", persistence_num:1, tes_val:"弱1, 持続", }
,{tesf:"ピクミン&オリマー", tess:"弱攻撃", fighter_id:1400, skill_genre:10300, begin:5, end:5, time:19, base_damage:3, damage_no:2, alias:"弱1", persistence_num:1, tes_val:"弱1, 持続", }
,{tesf:"ピクミン&オリマー", tess:"弱攻撃", fighter_id:1400, skill_genre:10300, begin:4, end:5, time:17, base_damage:4, damage_no:1, alias:"弱2", tes_val:"弱2", }
,{tesf:"ピクミン&オリマー", tess:"弱攻撃", fighter_id:1400, skill_genre:10300, begin:4, end:5, time:17, base_damage:3, damage_no:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"ピクミン&オリマー", tess:"ダッシュ攻撃", fighter_id:1400, skill_genre:10400, begin:8, end:10, time:37, base_damage:7, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ピクミン&オリマー", tess:"ダッシュ攻撃", fighter_id:1400, skill_genre:10400, begin:11, end:14, time:37, base_damage:4, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ピクミン&オリマー", tess:"横強", fighter_id:1400, skill_genre:10501, begin:15, end:17, time:35, base_damage:11, tes_val:"", }
,{tesf:"ピクミン&オリマー", tess:"上強", fighter_id:1400, skill_genre:10500, begin:6, end:6, time:38, base_damage:0.6, serial_num_str:"1-5", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"6, 8,10, 12, 14", tes_val:"Hit 1-5", }
,{tesf:"ピクミン&オリマー", tess:"上強", fighter_id:1400, skill_genre:10500, begin:16, end:16, time:38, base_damage:4, serial_num_str:"6", defend_position:"air_only", tes_message:"(連続ヒットする技)", tes_val:"Hit 6, 対空のみ", }
,{tesf:"ピクミン&オリマー", tess:"下強", fighter_id:1400, skill_genre:10502, begin:6, end:12, time:29, base_damage:6, tes_val:"", }
,{tesf:"ピクミン&オリマー", tess:"横スマッシュ", fighter_id:1400, skill_genre:10601, begin:11, end:12, time:42, base_damage:20.3, detail_name:"赤", tes_val:"赤", }
,{tesf:"ピクミン&オリマー", tess:"横スマッシュ", fighter_id:1400, skill_genre:10601, begin:11, end:12, time:42, base_damage:14.5, detail_name:"黄青", tes_val:"黄青", }
,{tesf:"ピクミン&オリマー", tess:"横スマッシュ", fighter_id:1400, skill_genre:10601, begin:11, end:12, time:42, base_damage:11.6, detail_name:"白", tes_val:"白", }
,{tesf:"ピクミン&オリマー", tess:"横スマッシュ", fighter_id:1400, skill_genre:10601, begin:11, end:12, time:42, base_damage:23.2, detail_name:"紫", tes_val:"紫", }
,{tesf:"ピクミン&オリマー", tess:"横スマッシュ", fighter_id:1400, skill_genre:10601, begin:13, end:19, time:42, base_damage:14, detail_name:"赤", persistence_num:1, tes_val:"持続1, 赤", }
,{tesf:"ピクミン&オリマー", tess:"横スマッシュ", fighter_id:1400, skill_genre:10601, begin:13, end:19, time:42, base_damage:10, detail_name:"黄青", persistence_num:1, tes_val:"持続1, 黄青", }
,{tesf:"ピクミン&オリマー", tess:"横スマッシュ", fighter_id:1400, skill_genre:10601, begin:13, end:19, time:42, base_damage:8, detail_name:"白", persistence_num:1, tes_val:"持続1, 白", }
,{tesf:"ピクミン&オリマー", tess:"横スマッシュ", fighter_id:1400, skill_genre:10601, begin:13, end:18, time:42, base_damage:16, detail_name:"紫", persistence_num:1, tes_val:"持続1, 紫", }
,{tesf:"ピクミン&オリマー", tess:"横スマッシュ", fighter_id:1400, skill_genre:10601, begin:20, end:29, time:42, base_damage:8.4, detail_name:"赤", persistence_num:2, tes_val:"持続2, 赤", }
,{tesf:"ピクミン&オリマー", tess:"横スマッシュ", fighter_id:1400, skill_genre:10601, begin:20, end:29, time:42, base_damage:6, detail_name:"黄青", persistence_num:2, tes_val:"持続2, 黄青", }
,{tesf:"ピクミン&オリマー", tess:"横スマッシュ", fighter_id:1400, skill_genre:10601, begin:20, end:29, time:42, base_damage:4.8, detail_name:"白", persistence_num:2, tes_val:"持続2, 白", }
,{tesf:"ピクミン&オリマー", tess:"横スマッシュ", fighter_id:1400, skill_genre:10601, begin:19, end:24, time:42, base_damage:9.6, detail_name:"紫", persistence_num:2, tes_val:"持続2, 紫", }
,{tesf:"ピクミン&オリマー", tess:"上スマッシュ", fighter_id:1400, skill_genre:10600, begin:12, end:16, time:39, base_damage:18.2, detail_name:"赤", tes_val:"本当て, 赤", }
,{tesf:"ピクミン&オリマー", tess:"上スマッシュ", fighter_id:1400, skill_genre:10600, begin:12, end:16, time:39, base_damage:13, detail_name:"黄青", tes_val:"本当て, 黄青", }
,{tesf:"ピクミン&オリマー", tess:"上スマッシュ", fighter_id:1400, skill_genre:10600, begin:12, end:16, time:39, base_damage:10.4, detail_name:"白", tes_val:"本当て, 白", }
,{tesf:"ピクミン&オリマー", tess:"上スマッシュ", fighter_id:1400, skill_genre:10600, begin:12, end:16, time:39, base_damage:20.8, detail_name:"紫", tes_val:"本当て, 紫", }
,{tesf:"ピクミン&オリマー", tess:"上スマッシュ", fighter_id:1400, skill_genre:10600, begin:12, end:13, time:39, base_damage:14, detail_name:"赤", tes_val:"カス当て, 赤", }
,{tesf:"ピクミン&オリマー", tess:"上スマッシュ", fighter_id:1400, skill_genre:10600, begin:12, end:13, time:39, base_damage:10, detail_name:"黄青", tes_val:"カス当て, 黄青", }
,{tesf:"ピクミン&オリマー", tess:"上スマッシュ", fighter_id:1400, skill_genre:10600, begin:12, end:13, time:39, base_damage:8, detail_name:"白", tes_val:"カス当て, 白", }
,{tesf:"ピクミン&オリマー", tess:"上スマッシュ", fighter_id:1400, skill_genre:10600, begin:12, end:13, time:39, base_damage:16, detail_name:"紫", tes_val:"カス当て, 紫", }
,{tesf:"ピクミン&オリマー", tess:"上スマッシュ", fighter_id:1400, skill_genre:10600, begin:17, end:22, time:39, base_damage:15.4, detail_name:"赤", persistence_num:1, tes_val:"持続, 赤", }
,{tesf:"ピクミン&オリマー", tess:"上スマッシュ", fighter_id:1400, skill_genre:10600, begin:17, end:22, time:39, base_damage:11, detail_name:"黄青", persistence_num:1, tes_val:"持続, 黄青", }
,{tesf:"ピクミン&オリマー", tess:"上スマッシュ", fighter_id:1400, skill_genre:10600, begin:17, end:22, time:39, base_damage:8.8, detail_name:"白", persistence_num:1, tes_val:"持続, 白", }
,{tesf:"ピクミン&オリマー", tess:"上スマッシュ", fighter_id:1400, skill_genre:10600, begin:17, end:22, time:39, base_damage:17.6, detail_name:"紫", persistence_num:1, tes_val:"持続, 紫", }
,{tesf:"ピクミン&オリマー", tess:"下スマッシュ", fighter_id:1400, skill_genre:10602, begin:10, end:13, time:38, base_damage:15.4, detail_name:"赤", tes_val:"赤", }
,{tesf:"ピクミン&オリマー", tess:"下スマッシュ", fighter_id:1400, skill_genre:10602, begin:10, end:13, time:38, base_damage:11, detail_name:"黄青", tes_val:"黄青", }
,{tesf:"ピクミン&オリマー", tess:"下スマッシュ", fighter_id:1400, skill_genre:10602, begin:10, end:13, time:38, base_damage:8.8, detail_name:"白", tes_val:"白", }
,{tesf:"ピクミン&オリマー", tess:"下スマッシュ", fighter_id:1400, skill_genre:10602, begin:10, end:13, time:38, base_damage:17.6, detail_name:"紫", tes_val:"紫", }
,{tesf:"ピクミン&オリマー", tess:"下スマッシュ", fighter_id:1400, skill_genre:10602, begin:14, end:18, time:38, base_damage:12.6, detail_name:"赤", persistence_num:1, tes_val:"持続, 赤", }
,{tesf:"ピクミン&オリマー", tess:"下スマッシュ", fighter_id:1400, skill_genre:10602, begin:14, end:18, time:38, base_damage:9, detail_name:"黄青", persistence_num:1, tes_val:"持続, 黄青", }
,{tesf:"ピクミン&オリマー", tess:"下スマッシュ", fighter_id:1400, skill_genre:10602, begin:14, end:18, time:38, base_damage:7.2, detail_name:"白", persistence_num:1, tes_val:"持続, 白", }
,{tesf:"ピクミン&オリマー", tess:"下スマッシュ", fighter_id:1400, skill_genre:10602, begin:14, end:15, time:38, base_damage:14.4, detail_name:"紫", persistence_num:1, tes_val:"持続, 紫", }
, {tesf:"ピクミン&オリマー", tess:"空N", fighter_id:1400, skill_genre:10904, begin:7, end:8, time:53, base_damage:1.5, landing_lag:13, landing_occurrence_begin:3, landing_occurrence_end:33, serial_num_str:"1-4", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"7-8, 11-12, 15-16, 19-20", tes_val:"Hit 1-4", }
,{tesf:"ピクミン&オリマー", tess:"空N", fighter_id:1400, skill_genre:10904, begin:23, end:24, time:53, base_damage:2, landing_lag:13, landing_occurrence_begin:3, landing_occurrence_end:33, serial_num_str:"5", tes_message:"(連続ヒットする技)", tes_val:"Hit 5", }
,{tesf:"ピクミン&オリマー", tess:"空前", fighter_id:1400, skill_genre:10901, begin:7, end:9, time:42, base_damage:11.9, landing_lag:9, landing_occurrence_begin:6, landing_occurrence_end:30, detail_name:"赤", tes_val:"赤", }
,{tesf:"ピクミン&オリマー", tess:"空前", fighter_id:1400, skill_genre:10901, begin:7, end:9, time:42, base_damage:8.5, landing_lag:9, landing_occurrence_begin:6, landing_occurrence_end:30, detail_name:"黄青", tes_val:"黄青", }
,{tesf:"ピクミン&オリマー", tess:"空前", fighter_id:1400, skill_genre:10901, begin:7, end:9, time:42, base_damage:6.8, landing_lag:9, landing_occurrence_begin:6, landing_occurrence_end:30, detail_name:"白", tes_val:"白", }
,{tesf:"ピクミン&オリマー", tess:"空前", fighter_id:1400, skill_genre:10901, begin:7, end:9, time:42, base_damage:13.6, landing_lag:9, landing_occurrence_begin:6, landing_occurrence_end:30, detail_name:"紫", tes_val:"紫", }
,{tesf:"ピクミン&オリマー", tess:"空後", fighter_id:1400, skill_genre:10903, begin:10, end:13, time:48, base_damage:15.12, landing_lag:9, landing_occurrence_begin:6, landing_occurrence_end:35, detail_name:"赤", tes_val:"赤", }
,{tesf:"ピクミン&オリマー", tess:"空後", fighter_id:1400, skill_genre:10903, begin:10, end:13, time:48, base_damage:10.8, landing_lag:9, landing_occurrence_begin:6, landing_occurrence_end:35, detail_name:"黄青", tes_val:"黄青", }
,{tesf:"ピクミン&オリマー", tess:"空後", fighter_id:1400, skill_genre:10903, begin:10, end:13, time:48, base_damage:8.64, landing_lag:9, landing_occurrence_begin:6, landing_occurrence_end:35, detail_name:"白", tes_val:"白", }
,{tesf:"ピクミン&オリマー", tess:"空後", fighter_id:1400, skill_genre:10903, begin:10, end:13, time:48, base_damage:17.28, landing_lag:9, landing_occurrence_begin:6, landing_occurrence_end:35, detail_name:"紫", tes_val:"紫", }
,{tesf:"ピクミン&オリマー", tess:"空上", fighter_id:1400, skill_genre:10900, begin:8, end:15, time:34, base_damage:12.6, landing_lag:18, landing_occurrence_begin:6, landing_occurrence_end:30, detail_name:"赤", tes_val:"赤", }
,{tesf:"ピクミン&オリマー", tess:"空上", fighter_id:1400, skill_genre:10900, begin:8, end:15, time:34, base_damage:9, landing_lag:18, landing_occurrence_begin:6, landing_occurrence_end:30, detail_name:"黄青", tes_val:"黄青", }
,{tesf:"ピクミン&オリマー", tess:"空上", fighter_id:1400, skill_genre:10900, begin:8, end:15, time:34, base_damage:7.2, landing_lag:18, landing_occurrence_begin:6, landing_occurrence_end:30, detail_name:"白", tes_val:"白", }
,{tesf:"ピクミン&オリマー", tess:"空上", fighter_id:1400, skill_genre:10900, begin:8, end:15, time:34, base_damage:14.4, landing_lag:18, landing_occurrence_begin:6, landing_occurrence_end:30, detail_name:"紫", tes_val:"紫", }
,{tesf:"ピクミン&オリマー", tess:"空下", fighter_id:1400, skill_genre:10902, begin:9, end:10, time:51, base_damage:12.6, landing_lag:18, landing_occurrence_begin:6, landing_occurrence_end:30, detail_name:"赤", tes_val:"メテオ, 赤", }
,{tesf:"ピクミン&オリマー", tess:"空下", fighter_id:1400, skill_genre:10902, begin:9, end:10, time:51, base_damage:9, landing_lag:18, landing_occurrence_begin:6, landing_occurrence_end:30, detail_name:"黄青", tes_val:"メテオ, 黄青", }
,{tesf:"ピクミン&オリマー", tess:"空下", fighter_id:1400, skill_genre:10902, begin:9, end:10, time:51, base_damage:7.2, landing_lag:18, landing_occurrence_begin:6, landing_occurrence_end:30, detail_name:"白", tes_val:"メテオ, 白", }
,{tesf:"ピクミン&オリマー", tess:"空下", fighter_id:1400, skill_genre:10902, begin:9, end:10, time:51, base_damage:14.4, landing_lag:18, landing_occurrence_begin:6, landing_occurrence_end:30, detail_name:"紫", tes_val:"メテオ, 紫", }
,{tesf:"ピクミン&オリマー", tess:"空下", fighter_id:1400, skill_genre:10902, begin:9, end:16, time:51, base_damage:12.6, landing_lag:18, landing_occurrence_begin:6, landing_occurrence_end:30, detail_name:"赤", tes_val:"非メテオ, 赤", }
,{tesf:"ピクミン&オリマー", tess:"空下", fighter_id:1400, skill_genre:10902, begin:9, end:16, time:51, base_damage:9, landing_lag:18, landing_occurrence_begin:6, landing_occurrence_end:30, detail_name:"黄青", tes_val:"非メテオ, 黄青", }
,{tesf:"ピクミン&オリマー", tess:"空下", fighter_id:1400, skill_genre:10902, begin:9, end:16, time:51, base_damage:7.2, landing_lag:18, landing_occurrence_begin:6, landing_occurrence_end:30, detail_name:"白", tes_val:"非メテオ, 白", }
,{tesf:"ピクミン&オリマー", tess:"空下", fighter_id:1400, skill_genre:10902, begin:9, end:16, time:51, base_damage:14.4, landing_lag:18, landing_occurrence_begin:6, landing_occurrence_end:30, detail_name:"紫", tes_val:"非メテオ, 紫", }
,{tess:"その場投げ", fighter_id:1400 , skill_genre:10200, base_damage:0,begin:12, end:23, time:41,detail_name:"0匹"}
,{tess:"ダッシュ投げ", fighter_id:1400 , skill_genre:10201, base_damage:0,begin:12, end:23, time:49,detail_name:"0匹"}
,{tess:"ふりむき投げ", fighter_id:1400 , skill_genre:10202, base_damage:0,begin:12, end:23, time:44,detail_name:"0匹"}
,{tess:"その場投げ", fighter_id:1400 , skill_genre:10200, base_damage:0,begin:12, end:23, time:41,detail_name:"1匹"}
,{tess:"ダッシュ投げ", fighter_id:1400 , skill_genre:10201, base_damage:0,begin:12, end:23, time:49,detail_name:"1匹"}
,{tess:"ふりむき投げ", fighter_id:1400 , skill_genre:10202, base_damage:0,begin:12, end:23, time:44,detail_name:"1匹"}
,{tess:"その場投げ", fighter_id:1400 , skill_genre:10200, base_damage:0,begin:12, end:23, time:47,detail_name:"2匹"}
,{tess:"ダッシュ投げ", fighter_id:1400 , skill_genre:10201, base_damage:0,begin:12, end:23, time:57,detail_name:"2匹"}
,{tess:"ふりむき投げ", fighter_id:1400 , skill_genre:10202, base_damage:0,begin:12, end:23, time:51,detail_name:"2匹"}
,{tess:"その場投げ", fighter_id:1400 , skill_genre:10200, base_damage:0,begin:12, end:23, time:56,detail_name:"3匹"}
,{tess:"ダッシュ投げ", fighter_id:1400 , skill_genre:10201, base_damage:0,begin:12, end:23, time:67,detail_name:"3匹"}
,{tess:"ふりむき投げ", fighter_id:1400 , skill_genre:10202, base_damage:0,begin:12, end:23, time:60,detail_name:"3匹"}


, {tesf:"ルカリオ", tess:"弱攻撃", fighter_id:1410, skill_genre:10300, begin:7, end:8, time:26, base_damage:2.5, alias:"弱1", tes_val:"弱1", }
,{tesf:"ルカリオ", tess:"弱攻撃", fighter_id:1410, skill_genre:10300, begin:5, end:6, time:26, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"ルカリオ", tess:"弱攻撃", fighter_id:1410, skill_genre:10300, begin:9, end:10, time:35, base_damage:3, alias:"弱3", tes_val:"弱3", }
,{tesf:"ルカリオ", tess:"ダッシュ攻撃", fighter_id:1410, skill_genre:10400, begin:7, end:9, time:41, base_damage:10, damage_no:1, tes_val:"", }
,{tesf:"ルカリオ", tess:"ダッシュ攻撃", fighter_id:1410, skill_genre:10400, begin:7, end:9, time:41, base_damage:8.5, damage_no:2, tes_val:"", }
,{tesf:"ルカリオ", tess:"ダッシュ攻撃", fighter_id:1410, skill_genre:10400, begin:10, end:15, time:41, base_damage:7, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"ルカリオ", tess:"ダッシュ攻撃", fighter_id:1410, skill_genre:10400, begin:10, end:15, time:41, base_damage:6, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"ルカリオ", tess:"横強", fighter_id:1410, skill_genre:10501, begin:12, end:14, time:32, base_damage:4, serial_num_str:"1", shift:"all", tes_message:"(連続ヒットする技)", tes_val:"全シフト, Hit 1", }
,{tesf:"ルカリオ", tess:"横強", fighter_id:1410, skill_genre:10501, begin:15, end:16, time:32, base_damage:6, serial_num_str:"2", shift:"all", tes_message:"(連続ヒットする技)", tes_val:"全シフト, Hit 2", }
,{tesf:"ルカリオ", tess:"上強", fighter_id:1410, skill_genre:10500, begin:6, end:13, time:32, base_damage:6, damage_no:1, tes_val:"", }
,{tesf:"ルカリオ", tess:"上強", fighter_id:1410, skill_genre:10500, begin:6, end:13, time:32, base_damage:5, damage_no:2, tes_val:"", }
,{tesf:"ルカリオ", tess:"下強", fighter_id:1410, skill_genre:10502, begin:9, end:12, time:22, base_damage:5, tes_val:"", }
,{tesf:"ルカリオ", tess:"横スマッシュ", fighter_id:1410, skill_genre:10601, begin:19, end:20, time:54, base_damage:16, tes_val:"", }
,{tesf:"ルカリオ", tess:"横スマッシュ", fighter_id:1410, skill_genre:10601, begin:21, end:22, time:54, base_damage:13, persistence_num:1, tes_val:"持続", }
,{tesf:"ルカリオ", tess:"上スマッシュ", fighter_id:1410, skill_genre:10600, begin:15, end:17, time:63, base_damage:4, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ルカリオ", tess:"上スマッシュ", fighter_id:1410, skill_genre:10600, begin:19, end:20, time:63, base_damage:14, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ルカリオ", tess:"上スマッシュ", fighter_id:1410, skill_genre:10600, begin:19, end:20, time:63, base_damage:12, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ルカリオ", tess:"上スマッシュ", fighter_id:1410, skill_genre:10600, begin:21, end:23, time:63, base_damage:9, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続", }
,{tesf:"ルカリオ", tess:"下スマッシュ", fighter_id:1410, skill_genre:10602, begin:19, end:21, time:54, base_damage:14, tes_val:"", }
, {tesf:"ルカリオ", tess:"空N", fighter_id:1410, skill_genre:10904, begin:10, end:14, time:42, base_damage:8, landing_lag:5, landing_occurrence_begin:5, landing_occurrence_end:35, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ルカリオ", tess:"空N", fighter_id:1410, skill_genre:10904, begin:18, end:21, time:42, base_damage:6, landing_lag:5, landing_occurrence_begin:5, landing_occurrence_end:35, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ルカリオ", tess:"空前", fighter_id:1410, skill_genre:10901, begin:7, end:8, time:27, base_damage:6, landing_lag:9, landing_occurrence_begin:2, landing_occurrence_end:27, tes_val:"", }
,{tesf:"ルカリオ", tess:"空後", fighter_id:1410, skill_genre:10903, begin:13, end:14, time:49, base_damage:14, landing_lag:14, landing_occurrence_begin:5, landing_occurrence_end:40, damage_no:1, tes_val:"", }
,{tesf:"ルカリオ", tess:"空後", fighter_id:1410, skill_genre:10903, begin:13, end:14, time:49, base_damage:13, landing_lag:14, landing_occurrence_begin:5, landing_occurrence_end:40, damage_no:2, tes_val:"", }
,{tesf:"ルカリオ", tess:"空後", fighter_id:1410, skill_genre:10903, begin:15, end:16, time:49, base_damage:13, landing_lag:14, landing_occurrence_begin:5, landing_occurrence_end:40, persistence_num:1, tes_val:"持続", }
,{tesf:"ルカリオ", tess:"空上", fighter_id:1410, skill_genre:10900, begin:10, end:11, time:38, base_damage:11, landing_lag:13, landing_occurrence_begin:2, landing_occurrence_end:28, tes_val:"", }
,{tesf:"ルカリオ", tess:"空上", fighter_id:1410, skill_genre:10900, begin:12, end:13, time:38, base_damage:6, landing_lag:13, landing_occurrence_begin:2, landing_occurrence_end:28, persistence_num:1, tes_val:"持続", }
,{tesf:"ルカリオ", tess:"空下", fighter_id:1410, skill_genre:10902, begin:4, end:5, time:30, base_damage:5, landing_lag:12, landing_occurrence_begin:2, landing_occurrence_end:24, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ルカリオ", tess:"空下", fighter_id:1410, skill_genre:10902, begin:11, end:12, time:30, base_damage:6, landing_lag:12, landing_occurrence_begin:2, landing_occurrence_end:24, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tess:"その場投げ", fighter_id:1410 , skill_genre:10200, base_damage:0,begin:7, end:8, time:39,}
,{tess:"ダッシュ投げ", fighter_id:1410 , skill_genre:10201, base_damage:0,begin:10, end:11, time:46,}
,{tess:"ふりむき投げ", fighter_id:1410 , skill_genre:10202, base_damage:0,begin:11, end:12, time:42,}

, {tesf:"ロボット", tess:"弱攻撃", fighter_id:1420, skill_genre:10300, begin:3, end:4, time:20, base_damage:3, alias:"弱1", tes_val:"弱1", }
,{tesf:"ロボット", tess:"弱攻撃", fighter_id:1420, skill_genre:10300, begin:3, end:4, time:13, base_damage:3, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ロボット", tess:"弱攻撃", fighter_id:1420, skill_genre:10300, begin:3, end:4, time:20, base_damage:3, alias:"弱2", tes_val:"弱2", }
,{tesf:"ロボット", tess:"ダッシュ攻撃", fighter_id:1420, skill_genre:10400, begin:7, end:8, time:31, base_damage:7, tes_val:"", }
,{tesf:"ロボット", tess:"横強", fighter_id:1420, skill_genre:10501, begin:7, end:9, time:33, base_damage:10, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"ロボット", tess:"横強", fighter_id:1420, skill_genre:10501, begin:7, end:9, time:33, base_damage:8, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"ロボット", tess:"横強", fighter_id:1420, skill_genre:10501, begin:7, end:9, time:33, base_damage:7, damage_no:3, shift:"all", tes_val:"全シフト", }
,{tesf:"ロボット", tess:"上強", fighter_id:1420, skill_genre:10500, begin:4, end:5, time:26, base_damage:3, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ロボット", tess:"上強", fighter_id:1420, skill_genre:10500, begin:6, end:7, time:26, base_damage:6, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ロボット", tess:"上強", fighter_id:1420, skill_genre:10500, begin:6, end:7, time:26, base_damage:5, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ロボット", tess:"下強", fighter_id:1420, skill_genre:10502, begin:3, end:3, time:14, base_damage:5, tes_val:"", }
,{tesf:"ロボット", tess:"横スマッシュ", fighter_id:1420, skill_genre:10601, begin:16, end:17, time:54, base_damage:15, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"ロボット", tess:"横スマッシュ", fighter_id:1420, skill_genre:10601, begin:16, end:17, time:54, base_damage:11.5, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"ロボット", tess:"横スマッシュ", fighter_id:1420, skill_genre:10601, begin:16, end:17, time:54, base_damage:6, damage_no:3, shift:"all", tes_val:"全シフト", }
,{tesf:"ロボット", tess:"上スマッシュ", fighter_id:1420, skill_genre:10600, begin:10, end:11, time:48, base_damage:3, serial_num_str:"1", defend_position:"ground_only", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 対地のみ", }
,{tesf:"ロボット", tess:"上スマッシュ", fighter_id:1420, skill_genre:10600, begin:14, end:18, time:48, base_damage:14, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ロボット", tess:"上スマッシュ", fighter_id:1420, skill_genre:10600, begin:14, end:18, time:48, base_damage:13, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ロボット", tess:"下スマッシュ", fighter_id:1420, skill_genre:10602, begin:7, end:8, time:45, base_damage:3.5, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ロボット", tess:"下スマッシュ", fighter_id:1420, skill_genre:10602, begin:7, end:8, time:45, base_damage:3, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ロボット", tess:"下スマッシュ", fighter_id:1420, skill_genre:10602, begin:11, end:12, time:45, base_damage:3.5, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ロボット", tess:"下スマッシュ", fighter_id:1420, skill_genre:10602, begin:11, end:12, time:45, base_damage:3, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ロボット", tess:"下スマッシュ", fighter_id:1420, skill_genre:10602, begin:16, end:16, time:45, base_damage:5, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
, {tesf:"ロボット", tess:"空N", fighter_id:1420, skill_genre:10904, begin:14, end:32, time:47, base_damage:9.5, landing_lag:7, landing_occurrence_begin:1, landing_occurrence_end:32, damage_no:1, tes_val:"", }
,{tesf:"ロボット", tess:"空N", fighter_id:1420, skill_genre:10904, begin:14, end:32, time:47, base_damage:7.5, landing_lag:7, landing_occurrence_begin:1, landing_occurrence_end:32, damage_no:2, tes_val:"", }
,{tesf:"ロボット", tess:"空前", fighter_id:1420, skill_genre:10901, begin:6, end:8, time:35, base_damage:7, landing_lag:9, landing_occurrence_begin:1, landing_occurrence_end:24, tes_val:"", }
,{tesf:"ロボット", tess:"空後", fighter_id:1420, skill_genre:10903, begin:19, end:23, time:52, base_damage:15, landing_lag:13, landing_occurrence_begin:1, landing_occurrence_end:45, damage_no:1, tes_val:"", }
,{tesf:"ロボット", tess:"空後", fighter_id:1420, skill_genre:10903, begin:19, end:23, time:52, base_damage:13, landing_lag:13, landing_occurrence_begin:1, landing_occurrence_end:45, damage_no:2, tes_val:"", }
,{tesf:"ロボット", tess:"空後", fighter_id:1420, skill_genre:10903, begin:24, end:32, time:52, base_damage:9, landing_lag:13, landing_occurrence_begin:1, landing_occurrence_end:45, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"ロボット", tess:"空後", fighter_id:1420, skill_genre:10903, begin:24, end:32, time:52, base_damage:7.5, landing_lag:13, landing_occurrence_begin:1, landing_occurrence_end:45, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"ロボット", tess:"空上", fighter_id:1420, skill_genre:10900, begin:7, end:7, time:51, base_damage:1.5, landing_lag:13, landing_occurrence_begin:1, landing_occurrence_end:39, serial_num_str:"1-4", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"7, 9, 13, 17", tes_val:"Hit 1-4", }
,{tesf:"ロボット", tess:"空上", fighter_id:1420, skill_genre:10900, begin:23, end:24, time:51, base_damage:4, landing_lag:13, landing_occurrence_begin:1, landing_occurrence_end:39, serial_num_str:"5", tes_message:"(連続ヒットする技)", tes_val:"Hit 5", }
,{tesf:"ロボット", tess:"空下", fighter_id:1420, skill_genre:10902, begin:20, end:21, time:69, base_damage:12, landing_lag:13, landing_occurrence_begin:1, landing_occurrence_end:44, damage_no:1, detail_name:"本当て", tes_val:"本当て", }
,{tesf:"ロボット", tess:"空下", fighter_id:1420, skill_genre:10902, begin:20, end:21, time:69, base_damage:11, landing_lag:13, landing_occurrence_begin:1, landing_occurrence_end:44, damage_no:2, detail_name:"本当て", tes_val:"本当て", }
,{tesf:"ロボット", tess:"空下", fighter_id:1420, skill_genre:10902, begin:20, end:26, time:69, base_damage:6, landing_lag:13, landing_occurrence_begin:1, landing_occurrence_end:44, detail_name:"カス当て", tes_val:"カス当て", }
,{tesf:"ロボット", tess:"空下", fighter_id:1420, skill_genre:10902, begin:22, end:26, time:69, base_damage:8, landing_lag:13, landing_occurrence_begin:1, landing_occurrence_end:44, persistence_num:1, defend_position:"ground", tes_val:"持続, 対地", }
,{tesf:"ロボット", tess:"空下", fighter_id:1420, skill_genre:10902, begin:22, end:26, time:69, base_damage:11, landing_lag:13, landing_occurrence_begin:1, landing_occurrence_end:44, damage_no:1, persistence_num:1, defend_position:"air", tes_val:"持続, 対空", }
,{tesf:"ロボット", tess:"空下", fighter_id:1420, skill_genre:10902, begin:22, end:26, time:69, base_damage:8, landing_lag:13, landing_occurrence_begin:1, landing_occurrence_end:44, damage_no:2, persistence_num:1, defend_position:"air", tes_val:"持続, 対空", }
,{tess:"その場投げ", fighter_id:1420 , skill_genre:10200, base_damage:0,begin:6, end:7, time:37,}
,{tess:"ダッシュ投げ", fighter_id:1420 , skill_genre:10201, base_damage:0,begin:9, end:10, time:45,}
,{tess:"ふりむき投げ", fighter_id:1420 , skill_genre:10202, base_damage:0,begin:10, end:11, time:40,}

, {tesf:"トゥーンリンク", tess:"弱攻撃", fighter_id:1430, skill_genre:10300, begin:5, end:6, time:18, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"トゥーンリンク", tess:"弱攻撃", fighter_id:1430, skill_genre:10300, begin:6, end:7, time:20, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"トゥーンリンク", tess:"弱攻撃", fighter_id:1430, skill_genre:10300, begin:6, end:7, time:36, base_damage:4, alias:"弱3", tes_val:"弱3", }
,{tesf:"トゥーンリンク", tess:"ダッシュ攻撃", fighter_id:1430, skill_genre:10400, begin:7, end:9, time:28, base_damage:8, damage_no:1, tes_val:"", }
,{tesf:"トゥーンリンク", tess:"ダッシュ攻撃", fighter_id:1430, skill_genre:10400, begin:7, end:9, time:28, base_damage:6, damage_no:2, tes_val:"", }
,{tesf:"トゥーンリンク", tess:"横強", fighter_id:1430, skill_genre:10501, begin:9, end:13, time:29, base_damage:9, tes_val:"", }
,{tesf:"トゥーンリンク", tess:"上強", fighter_id:1430, skill_genre:10500, begin:8, end:12, time:25, base_damage:5, tes_val:"", }
,{tesf:"トゥーンリンク", tess:"下強", fighter_id:1430, skill_genre:10502, begin:9, end:10, time:22, base_damage:7, tes_val:"", }
,{tesf:"トゥーンリンク", tess:"横スマッシュ", fighter_id:1430, skill_genre:10601, begin:16, end:17, time:48, base_damage:14, tes_val:"", }
,{tesf:"トゥーンリンク", tess:"上スマッシュ", fighter_id:1430, skill_genre:10600, begin:11, end:11, time:42, base_damage:13, tes_val:"", }
,{tesf:"トゥーンリンク", tess:"上スマッシュ", fighter_id:1430, skill_genre:10600, begin:12, end:13, time:42, base_damage:13, persistence_num:1, tes_val:"持続1", }
,{tesf:"トゥーンリンク", tess:"上スマッシュ", fighter_id:1430, skill_genre:10600, begin:14, end:15, time:42, base_damage:10, persistence_num:2, tes_val:"持続2", }
,{tesf:"トゥーンリンク", tess:"下スマッシュ", fighter_id:1430, skill_genre:10602, begin:9, end:10, time:46, base_damage:12, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"トゥーンリンク", tess:"下スマッシュ", fighter_id:1430, skill_genre:10602, begin:17, end:18, time:46, base_damage:13, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"トゥーンリンク", tess:"空N", fighter_id:1430, skill_genre:10904, begin:6, end:7, time:41, base_damage:8.5, landing_lag:7, landing_occurrence_begin:3, landing_occurrence_end:40, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"トゥーンリンク", tess:"空N", fighter_id:1430, skill_genre:10904, begin:13, end:14, time:41, base_damage:7, landing_lag:7, landing_occurrence_begin:3, landing_occurrence_end:40, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"トゥーンリンク", tess:"空前", fighter_id:1430, skill_genre:10901, begin:14, end:15, time:38, base_damage:13, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:38, tes_val:"", }
,{tesf:"トゥーンリンク", tess:"空後", fighter_id:1430, skill_genre:10903, begin:6, end:9, time:35, base_damage:8, landing_lag:8, landing_occurrence_begin:1, landing_occurrence_end:33, tes_val:"", }
,{tesf:"トゥーンリンク", tess:"空上", fighter_id:1430, skill_genre:10900, begin:11, end:13, time:59, base_damage:14, landing_lag:13, landing_occurrence_begin:6, landing_occurrence_end:46, tes_val:"", }
,{tesf:"トゥーンリンク", tess:"空上", fighter_id:1430, skill_genre:10900, begin:14, end:40, time:59, base_damage:11, landing_lag:13, landing_occurrence_begin:6, landing_occurrence_end:46, persistence_num:1, tes_val:"持続", }
,{tesf:"トゥーンリンク", tess:"空下", fighter_id:1430, skill_genre:10902, begin:17, end:25, time:79, base_damage:16, landing_lag:23, landing_occurrence_begin:6, landing_occurrence_end:64, tes_val:"", }
,{tess:"その場投げ", fighter_id:1430 , skill_genre:10200, base_damage:0,begin:12, end:18, time:52,}
,{tess:"ダッシュ投げ", fighter_id:1430 , skill_genre:10201, base_damage:0,begin:14, end:20, time:60,}
,{tess:"ふりむき投げ", fighter_id:1430 , skill_genre:10202, base_damage:0,begin:15, end:21, time:55,}

, {tesf:"ウルフ", tess:"弱攻撃", fighter_id:1440, skill_genre:10300, begin:4, end:4, time:21, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ウルフ", tess:"弱攻撃", fighter_id:1440, skill_genre:10300, begin:4, end:4, time:10, base_damage:2, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ウルフ", tess:"弱攻撃", fighter_id:1440, skill_genre:10300, begin:4, end:4, time:21, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"ウルフ", tess:"弱攻撃", fighter_id:1440, skill_genre:10300, begin:4, end:4, time:34, base_damage:4, alias:"弱3", tes_val:"弱3", }
,{tesf:"ウルフ", tess:"ダッシュ攻撃", fighter_id:1440, skill_genre:10400, begin:11, end:14, time:37, base_damage:11, tes_val:"", }
,{tesf:"ウルフ", tess:"ダッシュ攻撃", fighter_id:1440, skill_genre:10400, begin:15, end:18, time:37, base_damage:8, persistence_num:1, tes_val:"持続", }
,{tesf:"ウルフ", tess:"横強", fighter_id:1440, skill_genre:10501, begin:8, end:8, time:34, base_damage:5, serial_num_str:"1", shift:"all", tes_message:"(連続ヒットする技)", tes_val:"全シフト, Hit 1", }
,{tesf:"ウルフ", tess:"横強", fighter_id:1440, skill_genre:10501, begin:9, end:10, time:34, base_damage:6, serial_num_str:"2", shift:"all", tes_message:"(連続ヒットする技)", tes_val:"全シフト, Hit 2", }
,{tesf:"ウルフ", tess:"上強", fighter_id:1440, skill_genre:10500, begin:7, end:8, time:35, base_damage:10, damage_no:1, tes_val:"", }
,{tesf:"ウルフ", tess:"上強", fighter_id:1440, skill_genre:10500, begin:7, end:8, time:35, base_damage:9, damage_no:2, tes_val:"", }
,{tesf:"ウルフ", tess:"上強", fighter_id:1440, skill_genre:10500, begin:7, end:8, time:35, base_damage:8, damage_no:3, tes_val:"", }
,{tesf:"ウルフ", tess:"上強", fighter_id:1440, skill_genre:10500, begin:9, end:11, time:35, base_damage:10, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"ウルフ", tess:"上強", fighter_id:1440, skill_genre:10500, begin:9, end:11, time:35, base_damage:9, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"ウルフ", tess:"上強", fighter_id:1440, skill_genre:10500, begin:9, end:11, time:35, base_damage:8, damage_no:3, persistence_num:1, tes_val:"持続", }
,{tesf:"ウルフ", tess:"下強", fighter_id:1440, skill_genre:10502, begin:5, end:6, time:27, base_damage:6, tes_val:"", }
,{tesf:"ウルフ", tess:"横スマッシュ", fighter_id:1440, skill_genre:10601, begin:20, end:23, time:41, base_damage:15, tes_val:"", }
,{tesf:"ウルフ", tess:"上スマッシュ", fighter_id:1440, skill_genre:10600, begin:13, end:15, time:47, base_damage:6, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ウルフ", tess:"上スマッシュ", fighter_id:1440, skill_genre:10600, begin:20, end:23, time:47, base_damage:12, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ウルフ", tess:"下スマッシュ", fighter_id:1440, skill_genre:10602, begin:14, end:15, time:43, base_damage:16, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ウルフ", tess:"下スマッシュ", fighter_id:1440, skill_genre:10602, begin:14, end:15, time:43, base_damage:14, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ウルフ", tess:"下スマッシュ", fighter_id:1440, skill_genre:10602, begin:21, end:22, time:43, base_damage:14, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ウルフ", tess:"下スマッシュ", fighter_id:1440, skill_genre:10602, begin:21, end:22, time:43, base_damage:12, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"ウルフ", tess:"空N", fighter_id:1440, skill_genre:10904, begin:7, end:9, time:42, base_damage:12, landing_lag:9, landing_occurrence_begin:7, landing_occurrence_end:38, tes_val:"", }
,{tesf:"ウルフ", tess:"空N", fighter_id:1440, skill_genre:10904, begin:10, end:26, time:42, base_damage:8, landing_lag:9, landing_occurrence_begin:7, landing_occurrence_end:38, persistence_num:1, tes_val:"持続", }
,{tesf:"ウルフ", tess:"空前", fighter_id:1440, skill_genre:10901, begin:7, end:9, time:40, base_damage:9, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:29, tes_val:"", }
,{tesf:"ウルフ", tess:"空後", fighter_id:1440, skill_genre:10903, begin:13, end:15, time:44, base_damage:15, landing_lag:15, landing_occurrence_begin:8, landing_occurrence_end:18, damage_no:1, tes_val:"", }
,{tesf:"ウルフ", tess:"空後", fighter_id:1440, skill_genre:10903, begin:13, end:15, time:44, base_damage:13, landing_lag:15, landing_occurrence_begin:8, landing_occurrence_end:18, damage_no:2, tes_val:"", }
,{tesf:"ウルフ", tess:"空後", fighter_id:1440, skill_genre:10903, begin:13, end:15, time:44, base_damage:11, landing_lag:15, landing_occurrence_begin:8, landing_occurrence_end:18, damage_no:3, tes_val:"", }
,{tesf:"ウルフ", tess:"空上", fighter_id:1440, skill_genre:10900, begin:7, end:9, time:38, base_damage:12, landing_lag:10, landing_occurrence_begin:4, landing_occurrence_end:30, tes_val:"", }
,{tesf:"ウルフ", tess:"空下", fighter_id:1440, skill_genre:10902, begin:16, end:17, time:53, base_damage:15, landing_lag:19, landing_occurrence_begin:5, landing_occurrence_end:35, damage_no:1, tes_val:"", }
,{tesf:"ウルフ", tess:"空下", fighter_id:1440, skill_genre:10902, begin:16, end:17, time:53, base_damage:13, landing_lag:19, landing_occurrence_begin:5, landing_occurrence_end:35, damage_no:2, tes_val:"", }
,{tesf:"ウルフ", tess:"空下", fighter_id:1440, skill_genre:10902, begin:16, end:17, time:53, base_damage:0, landing_lag:19, landing_occurrence_begin:5, landing_occurrence_end:35, tes_val:"", }
,{tess:"その場投げ", fighter_id:1440 , skill_genre:10200, base_damage:0,begin:6, end:7, time:36,}
,{tess:"ダッシュ投げ", fighter_id:1440 , skill_genre:10201, base_damage:0,begin:8, end:9, time:44,}
,{tess:"ふりむき投げ", fighter_id:1440 , skill_genre:10202, base_damage:0,begin:9, end:10, time:39,}

, {tesf:"むらびと", tess:"弱攻撃", fighter_id:1450, skill_genre:10300, begin:3, end:4, time:21, base_damage:1, alias:"弱1", tes_val:"弱1", }
,{tesf:"むらびと", tess:"弱攻撃", fighter_id:1450, skill_genre:10300, begin:4, end:5, time:35, base_damage:2, alias:"弱1", persistence_num:9, tes_val:"弱1, 〆", }
,{tesf:"むらびと", tess:"弱攻撃", fighter_id:1450, skill_genre:10300, begin:3, end:4, time:23, base_damage:1, alias:"弱2", tes_val:"弱2", }
,{tesf:"むらびと", tess:"弱攻撃", fighter_id:1450, skill_genre:10300, begin:4, end:5, time:35, base_damage:2, alias:"弱2", persistence_num:9, tes_val:"弱2, 〆", }
,{tesf:"むらびと", tess:"ダッシュ攻撃",is_item_throw:true, fighter_id:1450, skill_genre:10400, begin:9, end:14, time:44, base_damage:10, tes_val:"", }
,{tesf:"むらびと", tess:"ダッシュ攻撃",is_item_throw:true, fighter_id:1450, skill_genre:10400, begin:15, end:23, time:44, base_damage:6, persistence_num:1, tes_val:"持続", }
,{tesf:"むらびと", tess:"横強", fighter_id:1450, skill_genre:10501, begin:8, end:11, time:33, base_damage:9, tes_val:"", }
,{tesf:"むらびと", tess:"上強", fighter_id:1450, skill_genre:10500, begin:7, end:18, time:47, base_damage:5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"むらびと", tess:"上強", fighter_id:1450, skill_genre:10500, begin:22, end:25, time:47, base_damage:6, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"むらびと", tess:"下強", fighter_id:1450, skill_genre:10502, begin:9, end:11, time:37, base_damage:12, damage_no:1, defend_position:"ground", tes_val:"対地", }
,{tesf:"むらびと", tess:"下強", fighter_id:1450, skill_genre:10502, begin:9, end:11, time:37, base_damage:10, damage_no:2, defend_position:"ground", tes_val:"対地", }
,{tesf:"むらびと", tess:"下強", fighter_id:1450, skill_genre:10502, begin:9, end:11, time:37, base_damage:12, defend_position:"air", tes_val:"対空", }
,{tesf:"むらびと", tess:"横スマッシュ",is_item_throw:true, is_smash_correction:true,fighter_id:1450, skill_genre:10601, begin:25, end:30, time:49, base_damage:15, tes_val:"", }
,{tesf:"むらびと", tess:"横スマッシュ",is_item_throw:true, is_smash_correction:true,fighter_id:1450, skill_genre:10601, begin:31, end:144, time:49, base_damage:17, persistence_num:1, tes_val:"持続", }
,{tesf:"むらびと", tess:"上スマッシュ", fighter_id:1450, skill_genre:10600, begin:12, end:13, time:53, base_damage:3, serial_num_str:"1", defend_position:"ground_only", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 対地のみ", }
,{tesf:"むらびと", tess:"上スマッシュ",is_item_throw:true, fighter_id:1450, skill_genre:10600, begin:17, end:18, time:53, base_damage:1, serial_num_str:"2-5", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"17-18, 21-22, 25-26, 29-30", tes_val:"Hit 2-5", }
,{tesf:"むらびと", tess:"上スマッシュ",is_item_throw:true, fighter_id:1450, skill_genre:10600, begin:33, end:34, time:53, base_damage:4, serial_num_str:"6", tes_message:"(連続ヒットする技)", tes_val:"Hit 6", }
,{tesf:"むらびと", tess:"下スマッシュ", fighter_id:1450, skill_genre:10602, begin:9, end:9, time:49, base_damage:6, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"むらびと", tess:"下スマッシュ", fighter_id:1450, skill_genre:10602, begin:10, end:11, time:49, base_damage:3, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"むらびと", tess:"下スマッシュ", fighter_id:1450, skill_genre:10602, begin:29, end:29, time:49, base_damage:6, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"むらびと", tess:"下スマッシュ", fighter_id:1450, skill_genre:10602, begin:30, end:31, time:49, base_damage:3, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続", }
, {tesf:"むらびと", tess:"空N", fighter_id:1450, skill_genre:10904, begin:3, end:10, time:35, base_damage:9, landing_lag:8, landing_occurrence_begin:3, landing_occurrence_end:26, tes_val:"", }
,{tesf:"むらびと", tess:"空N", fighter_id:1450, skill_genre:10904, begin:11, end:23, time:35, base_damage:5, landing_lag:8, landing_occurrence_begin:3, landing_occurrence_end:26, persistence_num:1, tes_val:"持続", }
,{tesf:"むらびと", tess:"空前",is_item_throw:true, fighter_id:1450, skill_genre:10901, begin:10, end:12, time:39, base_damage:7, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:29, tes_val:"", }
,{tesf:"むらびと", tess:"空前",not_attack_view:"help", help_text:"弾の持続当てなので実際の硬直差は5F以下になり、遠距離のため反確は取れない。",is_item_throw:true, fighter_id:1450, skill_genre:10901, begin:13, end:18, time:39, base_damage:4, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:29, persistence_num:1, tes_val:"持続1", }
,{tesf:"むらびと", tess:"空前",not_attack_view:"help", help_text:"弾の持続当てなので実際の硬直差は5F以下になり、遠距離のため反確は取れない。",is_item_throw:true, fighter_id:1450, skill_genre:10901, begin:19, end:23, time:39, base_damage:2.5, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:29, persistence_num:2, tes_val:"持続2", }
,{tesf:"むらびと", tess:"空後", fighter_id:1450, skill_genre:10903, begin:13, end:15, time:35, base_damage:9, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:29, tes_val:"", }
,{tesf:"むらびと", tess:"空後", fighter_id:1450, skill_genre:10903, begin:16, end:21, time:35, base_damage:5, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:29, persistence_num:1, tes_val:"持続1", }
,{tesf:"むらびと", tess:"空後", fighter_id:1450, skill_genre:10903, begin:22, end:26, time:35, base_damage:3, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:29, persistence_num:2, tes_val:"持続2", }
,{tesf:"むらびと", tess:"空上", fighter_id:1450, skill_genre:10900, begin:6, end:7, time:42, base_damage:8, landing_lag:12, landing_occurrence_begin:6, landing_occurrence_end:38, detail_name:"カブ1", tes_val:"蕪1", }
,{tesf:"むらびと", tess:"空上", fighter_id:1450, skill_genre:10900, begin:6, end:7, time:42, base_damage:10, landing_lag:12, landing_occurrence_begin:6, landing_occurrence_end:38, detail_name:"カブ2", tes_val:"蕪2", }
,{tesf:"むらびと", tess:"空上", fighter_id:1450, skill_genre:10900, begin:6, end:7, time:42, base_damage:13, landing_lag:12, landing_occurrence_begin:6, landing_occurrence_end:38, detail_name:"カブ3", tes_val:"蕪3", }
,{tesf:"むらびと", tess:"空上", fighter_id:1450, skill_genre:10900, begin:8, end:21, time:42, base_damage:4, landing_lag:12, landing_occurrence_begin:6, landing_occurrence_end:38, detail_name:"カブ1", persistence_num:1, tes_val:"蕪1, 持続", }
,{tesf:"むらびと", tess:"空上", fighter_id:1450, skill_genre:10900, begin:8, end:21, time:42, base_damage:5, landing_lag:12, landing_occurrence_begin:6, landing_occurrence_end:38, detail_name:"カブ2", persistence_num:1, tes_val:"蕪2, 持続", }
,{tesf:"むらびと", tess:"空上", fighter_id:1450, skill_genre:10900, begin:8, end:21, time:42, base_damage:6, landing_lag:12, landing_occurrence_begin:6, landing_occurrence_end:38, detail_name:"カブ3", persistence_num:1, tes_val:"蕪3, 持続", }
,{tesf:"むらびと", tess:"空下", fighter_id:1450, skill_genre:10902, begin:14, end:15, time:45, base_damage:8, landing_lag:12, landing_occurrence_begin:14, landing_occurrence_end:38, detail_name:"カブ1", tes_val:"蕪1", }
,{tesf:"むらびと", tess:"空下", fighter_id:1450, skill_genre:10902, begin:14, end:15, time:45, base_damage:10, landing_lag:12, landing_occurrence_begin:14, landing_occurrence_end:38, detail_name:"カブ2", tes_val:"蕪2", }
,{tesf:"むらびと", tess:"空下", fighter_id:1450, skill_genre:10902, begin:14, end:15, time:45, base_damage:13, landing_lag:12, landing_occurrence_begin:14, landing_occurrence_end:38, detail_name:"カブ3", tes_val:"蕪3", }
,{tesf:"むらびと", tess:"空下", fighter_id:1450, skill_genre:10902, begin:16, end:29, time:45, base_damage:4, landing_lag:12, landing_occurrence_begin:14, landing_occurrence_end:38, detail_name:"カブ1", persistence_num:1, tes_val:"蕪1, 持続", }
,{tesf:"むらびと", tess:"空下", fighter_id:1450, skill_genre:10902, begin:16, end:29, time:45, base_damage:5, landing_lag:12, landing_occurrence_begin:14, landing_occurrence_end:38, detail_name:"カブ2", persistence_num:1, tes_val:"蕪2, 持続", }
,{tesf:"むらびと", tess:"空下", fighter_id:1450, skill_genre:10902, begin:16, end:29, time:45, base_damage:6, landing_lag:12, landing_occurrence_begin:14, landing_occurrence_end:38, detail_name:"カブ3", persistence_num:1, tes_val:"蕪3, 持続", }
,{tess:"その場投げ", fighter_id:1450 , skill_genre:10200, base_damage:0,begin:14, end:16, time:43,}
,{tess:"ダッシュ投げ", fighter_id:1450 , skill_genre:10201, base_damage:0,begin:16, end:18, time:47,}
,{tess:"ふりむき投げ", fighter_id:1450 , skill_genre:10202, base_damage:0,begin:17, end:19, time:44,}
, {tesf:"Wii Fit トレーナー", tess:"弱攻撃", fighter_id:1470, skill_genre:10300, begin:4, end:5, time:25, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"Wii Fit トレーナー", tess:"弱攻撃", fighter_id:1470, skill_genre:10300, begin:4, end:5, time:9, base_damage:2, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"Wii Fit トレーナー", tess:"弱攻撃", fighter_id:1470, skill_genre:10300, begin:5, end:5, time:25, base_damage:2, alias:"弱1", tes_val:"弱1, 前方下", }
,{tesf:"Wii Fit トレーナー", tess:"弱攻撃", fighter_id:1470, skill_genre:10300, begin:5, end:5, time:9, base_damage:2, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1, 前方下", }
,{tesf:"Wii Fit トレーナー", tess:"弱攻撃", fighter_id:1470, skill_genre:10300, begin:3, end:4, time:29, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"Wii Fit トレーナー", tess:"弱攻撃", fighter_id:1470, skill_genre:10300, begin:5, end:6, time:39, base_damage:3, alias:"弱3", tes_val:"弱3", }
,{tesf:"Wii Fit トレーナー", tess:"ダッシュ攻撃", fighter_id:1470, skill_genre:10400, begin:6, end:8, time:38, base_damage:10, tes_val:"", correction:1.3}
,{tesf:"Wii Fit トレーナー", tess:"ダッシュ攻撃", fighter_id:1470, skill_genre:10400, begin:9, end:13, time:38, base_damage:6, persistence_num:1, tes_val:"持続", correction:1.8}
,{tesf:"Wii Fit トレーナー", tess:"横強", fighter_id:1470, skill_genre:10501, begin:6, end:10, time:32, base_damage:11, tes_val:"", }
,{tesf:"Wii Fit トレーナー", tess:"上強", fighter_id:1470, skill_genre:10500, begin:5, end:12, time:29, base_damage:10, damage_no:1, tes_val:"", }
,{tesf:"Wii Fit トレーナー", tess:"上強", fighter_id:1470, skill_genre:10500, begin:5, end:12, time:29, base_damage:7, damage_no:2, tes_val:"", }
,{tesf:"Wii Fit トレーナー", tess:"下強", fighter_id:1470, skill_genre:10502, begin:9, end:12, time:38, base_damage:13.5, damage_no:1, tes_val:"", }
,{tesf:"Wii Fit トレーナー", tess:"下強", fighter_id:1470, skill_genre:10502, begin:9, end:12, time:38, base_damage:12, damage_no:2, tes_val:"", }
,{tesf:"Wii Fit トレーナー", tess:"横スマッシュ", fighter_id:1470, skill_genre:10601, begin:16, end:19, time:56, base_damage:15.5, damage_no:1, tes_val:"", }
,{tesf:"Wii Fit トレーナー", tess:"横スマッシュ", fighter_id:1470, skill_genre:10601, begin:16, end:19, time:56, base_damage:14, damage_no:2, tes_val:"", }
,{tesf:"Wii Fit トレーナー", tess:"上スマッシュ", fighter_id:1470, skill_genre:10600, begin:14, end:15, time:57, base_damage:18, damage_no:1, tes_val:"", }
,{tesf:"Wii Fit トレーナー", tess:"上スマッシュ", fighter_id:1470, skill_genre:10600, begin:14, end:15, time:57, base_damage:15, damage_no:2, tes_val:"", }
,{tesf:"Wii Fit トレーナー", tess:"上スマッシュ", fighter_id:1470, skill_genre:10600, begin:16, end:22, time:57, base_damage:11, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"Wii Fit トレーナー", tess:"上スマッシュ", fighter_id:1470, skill_genre:10600, begin:16, end:22, time:57, base_damage:8, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"Wii Fit トレーナー", tess:"下スマッシュ", fighter_id:1470, skill_genre:10602, begin:18, end:21, time:51, base_damage:12, damage_no:1, tes_val:"", }
,{tesf:"Wii Fit トレーナー", tess:"下スマッシュ", fighter_id:1470, skill_genre:10602, begin:18, end:21, time:51, base_damage:10, damage_no:2, tes_val:"", }
, {tesf:"Wii Fit トレーナー", tess:"空N", fighter_id:1470, skill_genre:10904, begin:9, end:11, time:34, base_damage:5, landing_lag:8, landing_occurrence_begin:6, landing_occurrence_end:32, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"Wii Fit トレーナー", tess:"空N", fighter_id:1470, skill_genre:10904, begin:12, end:13, time:34, base_damage:9, landing_lag:8, landing_occurrence_begin:6, landing_occurrence_end:32, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"Wii Fit トレーナー", tess:"空前", fighter_id:1470, skill_genre:10901, begin:9, end:9, time:38, base_damage:12, landing_lag:9, landing_occurrence_begin:9, landing_occurrence_end:24, damage_no:1, tes_val:"", }
,{tesf:"Wii Fit トレーナー", tess:"空前", fighter_id:1470, skill_genre:10901, begin:9, end:9, time:38, base_damage:10, landing_lag:9, landing_occurrence_begin:9, landing_occurrence_end:24, damage_no:2, tes_val:"", }
,{tesf:"Wii Fit トレーナー", tess:"空前", fighter_id:1470, skill_genre:10901, begin:10, end:10, time:38, base_damage:12, landing_lag:9, landing_occurrence_begin:9, landing_occurrence_end:24, damage_no:1, persistence_num:1, tes_val:"持続1", }
,{tesf:"Wii Fit トレーナー", tess:"空前", fighter_id:1470, skill_genre:10901, begin:10, end:10, time:38, base_damage:10, landing_lag:9, landing_occurrence_begin:9, landing_occurrence_end:24, damage_no:2, persistence_num:1, tes_val:"持続1", }
,{tesf:"Wii Fit トレーナー", tess:"空前", fighter_id:1470, skill_genre:10901, begin:11, end:15, time:38, base_damage:7.5, landing_lag:9, landing_occurrence_begin:9, landing_occurrence_end:24, damage_no:1, persistence_num:2, tes_val:"持続2", }
,{tesf:"Wii Fit トレーナー", tess:"空前", fighter_id:1470, skill_genre:10901, begin:11, end:15, time:38, base_damage:6, landing_lag:9, landing_occurrence_begin:9, landing_occurrence_end:24, damage_no:2, persistence_num:2, tes_val:"持続2", }
,{tesf:"Wii Fit トレーナー", tess:"空後", fighter_id:1470, skill_genre:10903, begin:5, end:5, time:48, base_damage:13.5, landing_lag:12, landing_occurrence_begin:3, landing_occurrence_end:42, damage_no:1, tes_val:"", }
,{tesf:"Wii Fit トレーナー", tess:"空後", fighter_id:1470, skill_genre:10903, begin:5, end:5, time:48, base_damage:11, landing_lag:12, landing_occurrence_begin:3, landing_occurrence_end:42, damage_no:2, tes_val:"", }
,{tesf:"Wii Fit トレーナー", tess:"空後", fighter_id:1470, skill_genre:10903, begin:5, end:5, time:48, base_damage:9, landing_lag:12, landing_occurrence_begin:3, landing_occurrence_end:42, damage_no:3, tes_val:"", }
,{tesf:"Wii Fit トレーナー", tess:"空後", fighter_id:1470, skill_genre:10903, begin:6, end:11, time:48, base_damage:6, landing_lag:12, landing_occurrence_begin:3, landing_occurrence_end:42, persistence_num:1, tes_val:"持続", }
,{tesf:"Wii Fit トレーナー", tess:"空上", fighter_id:1470, skill_genre:10900, begin:6, end:10, time:39, base_damage:10, landing_lag:9, landing_occurrence_begin:6, landing_occurrence_end:35, tes_val:"", }
,{tesf:"Wii Fit トレーナー", tess:"空下", fighter_id:1470, skill_genre:10902, begin:15, end:17, time:39, base_damage:13, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:34, detail_name:"本当て", defend_position:"ground", tes_val:"本当て, 対地", }
,{tesf:"Wii Fit トレーナー", tess:"空下", fighter_id:1470, skill_genre:10902, begin:15, end:17, time:39, base_damage:14, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:34, detail_name:"本当て", defend_position:"air", tes_val:"本当て, 対空", }
,{tesf:"Wii Fit トレーナー", tess:"空下", fighter_id:1470, skill_genre:10902, begin:18, end:20, time:39, base_damage:10, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:34, persistence_num:1, tes_val:"持続", }
,{tess:"その場投げ", fighter_id:1470 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34,}
,{tess:"ダッシュ投げ", fighter_id:1470 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42,}
,{tess:"ふりむき投げ", fighter_id:1470 , skill_genre:10202, base_damage:0,begin:10, end:11, time:37,}
, {tesf:"ロゼッタ&チコ", tess:"弱攻撃", fighter_id:1480, skill_genre:10300, begin:5, end:5, time:20, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ロゼッタ&チコ", tess:"弱攻撃", fighter_id:1480, skill_genre:10300, begin:4, end:4, time:20, base_damage:1, alias:"弱1", detail_name:"チコ", tes_val:"弱1, チコ", }
,{tesf:"ロゼッタ&チコ", tess:"弱攻撃", fighter_id:1480, skill_genre:10300, begin:6, end:7, time:24, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"ロゼッタ&チコ", tess:"弱攻撃", fighter_id:1480, skill_genre:10300, begin:6, end:6, time:24, base_damage:1, alias:"弱2", detail_name:"チコ", tes_val:"弱2, チコ", }
,{tesf:"ロゼッタ&チコ", tess:"弱攻撃", fighter_id:1480, skill_genre:10300, begin:7, end:8, time:35, base_damage:3, alias:"弱3", tes_val:"弱3", }
,{tesf:"ロゼッタ&チコ", tess:"弱攻撃", fighter_id:1480, skill_genre:10300, begin:7, end:8, time:35, base_damage:2, alias:"弱3", detail_name:"チコ", tes_val:"弱3, チコ", }
,{tesf:"ロゼッタ&チコ", tess:"弱攻撃", fighter_id:1480, skill_genre:10300, begin:7, end:8, time:2, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"ロゼッタ&チコ", tess:"弱攻撃", fighter_id:1480, skill_genre:10300, begin:3, end:3, time:12, base_damage:0.3, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 6, 9, 12", tes_val:"百裂, 連", correction:5}
,{tesf:"ロゼッタ&チコ", tess:"弱攻撃", fighter_id:1480, skill_genre:10300, begin:1, end:1, time:12, base_damage:0.1, alias:"百裂", detail_name:"チコ", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"1, 4, 7, 10", tes_val:"百裂, 連, チコ", }
,{tesf:"ロゼッタ&チコ", tess:"弱攻撃", fighter_id:1480, skill_genre:10300, begin:6, end:7, time:39, base_damage:2.5, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"ロゼッタ&チコ", tess:"弱攻撃", fighter_id:1480, skill_genre:10300, begin:6, end:7, time:39, base_damage:1, alias:"百裂〆", detail_name:"チコ", persistence_num:9, tes_val:"百裂, 〆, チコ", }
,{tesf:"ロゼッタ&チコ", tess:"ダッシュ攻撃", fighter_id:1480, skill_genre:10400, begin:6, end:9, time:40, base_damage:3, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ロゼッタ&チコ", tess:"ダッシュ攻撃", fighter_id:1480, skill_genre:10400, begin:17, end:19, time:40, base_damage:4, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ロゼッタ&チコ", tess:"ダッシュ攻撃", fighter_id:1480, skill_genre:10400, begin:6, end:8, time:40, base_damage:3, detail_name:"チコ", tes_val:"チコ", }
,{tesf:"ロゼッタ&チコ", tess:"横強", fighter_id:1480, skill_genre:10501, begin:7, end:9, time:37, base_damage:7.5, damage_no:1, tes_val:"", }
,{tesf:"ロゼッタ&チコ", tess:"横強", fighter_id:1480, skill_genre:10501, begin:7, end:9, time:37, base_damage:6.5, damage_no:2, tes_val:"", }
,{tesf:"ロゼッタ&チコ", tess:"横強", fighter_id:1480, skill_genre:10501, begin:8, end:10, time:37, base_damage:4.5, detail_name:"チコ", tes_val:"チコ", }
,{tesf:"ロゼッタ&チコ", tess:"上強", fighter_id:1480, skill_genre:10500, begin:7, end:10, time:40, base_damage:10, tes_val:"", }
,{tesf:"ロゼッタ&チコ", tess:"上強", fighter_id:1480, skill_genre:10500, begin:11, end:17, time:40, base_damage:8, persistence_num:1, tes_val:"持続", }
,{tesf:"ロゼッタ&チコ", tess:"上強", fighter_id:1480, skill_genre:10500, begin:3, end:3, time:40, base_damage:8, detail_name:"チコ", tes_val:"チコ", }
,{tesf:"ロゼッタ&チコ", tess:"上強", fighter_id:1480, skill_genre:10500, begin:4, end:5, time:40, base_damage:4, detail_name:"チコ", persistence_num:1, tes_val:"チコ, 持続1", }
,{tesf:"ロゼッタ&チコ", tess:"上強", fighter_id:1480, skill_genre:10500, begin:6, end:10, time:40, base_damage:3, detail_name:"チコ", persistence_num:2, tes_val:"チコ, 持続2", }
,{tesf:"ロゼッタ&チコ", tess:"下強", fighter_id:1480, skill_genre:10502, begin:5, end:8, time:32, base_damage:5.5, tes_val:"", }
,{tesf:"ロゼッタ&チコ", tess:"下強", fighter_id:1480, skill_genre:10502, begin:8, end:13, time:32, base_damage:3.5, detail_name:"チコ", tes_val:"チコ", }
,{tesf:"ロゼッタ&チコ", tess:"横スマッシュ", fighter_id:1480, skill_genre:10601, begin:16, end:18, time:51, base_damage:12, shift:"all", tes_val:"全シフト", }
,{tesf:"ロゼッタ&チコ", tess:"横スマッシュ", fighter_id:1480, skill_genre:10601, begin:17, end:18, time:51, base_damage:7, damage_no:1, detail_name:"チコ", shift:"all", tes_val:"全シフト, チコ", }
,{tesf:"ロゼッタ&チコ", tess:"横スマッシュ", fighter_id:1480, skill_genre:10601, begin:17, end:18, time:51, base_damage:5, damage_no:2, detail_name:"チコ", shift:"all", tes_val:"全シフト, チコ", }
,{tesf:"ロゼッタ&チコ", tess:"上スマッシュ", fighter_id:1480, skill_genre:10600, begin:8, end:16, time:47, base_damage:12, tes_val:"", }
,{tesf:"ロゼッタ&チコ", tess:"上スマッシュ", fighter_id:1480, skill_genre:10600, begin:10, end:12, time:47, base_damage:6, detail_name:"チコ", tes_val:"チコ", }
,{tesf:"ロゼッタ&チコ", tess:"上スマッシュ", fighter_id:1480, skill_genre:10600, begin:13, end:17, time:47, base_damage:5, detail_name:"チコ", persistence_num:1, tes_val:"チコ, 持続", }
,{tesf:"ロゼッタ&チコ", tess:"下スマッシュ", fighter_id:1480, skill_genre:10602, begin:6, end:7, time:41, base_damage:7, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ロゼッタ&チコ", tess:"下スマッシュ", fighter_id:1480, skill_genre:10602, begin:17, end:18, time:41, base_damage:9, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ロゼッタ&チコ", tess:"下スマッシュ", fighter_id:1480, skill_genre:10602, begin:7, end:8, time:41, base_damage:4, detail_name:"チコ", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, チコ", }
,{tesf:"ロゼッタ&チコ", tess:"下スマッシュ", fighter_id:1480, skill_genre:10602, begin:19, end:20, time:41, base_damage:5, detail_name:"チコ", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, チコ", }
, {tesf:"ロゼッタ&チコ", tess:"空N", fighter_id:1480, skill_genre:10904, begin:9, end:19, time:43, base_damage:10, landing_lag:8, landing_occurrence_begin:5, landing_occurrence_end:32, damage_no:1, tes_val:"", }
,{tesf:"ロゼッタ&チコ", tess:"空N", fighter_id:1480, skill_genre:10904, begin:9, end:19, time:43, base_damage:8, landing_lag:8, landing_occurrence_begin:5, landing_occurrence_end:32, damage_no:2, tes_val:"", }
,{tesf:"ロゼッタ&チコ", tess:"空N", fighter_id:1480, skill_genre:10904, begin:20, end:33, time:43, base_damage:8, landing_lag:8, landing_occurrence_begin:5, landing_occurrence_end:32, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"ロゼッタ&チコ", tess:"空N", fighter_id:1480, skill_genre:10904, begin:20, end:33, time:43, base_damage:7, landing_lag:8, landing_occurrence_begin:5, landing_occurrence_end:32, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"ロゼッタ&チコ", tess:"空N", fighter_id:1480, skill_genre:10904, begin:7, end:9, time:43, base_damage:3, landing_lag:8, landing_occurrence_begin:5, landing_occurrence_end:32, detail_name:"チコ", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, チコ", }
,{tesf:"ロゼッタ&チコ", tess:"空N", fighter_id:1480, skill_genre:10904, begin:13, end:14, time:43, base_damage:3, landing_lag:8, landing_occurrence_begin:5, landing_occurrence_end:32, detail_name:"チコ", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, チコ", }
,{tesf:"ロゼッタ&チコ", tess:"空前", fighter_id:1480, skill_genre:10901, begin:10, end:20, time:54, base_damage:1, landing_lag:16, landing_occurrence_begin:4, landing_occurrence_end:49, detail_name:"連", rehit:3, tes_val:"連", }
,{tesf:"ロゼッタ&チコ", tess:"空前", fighter_id:1480, skill_genre:10901, begin:22, end:23, time:54, base_damage:4, landing_lag:16, landing_occurrence_begin:4, landing_occurrence_end:49, persistence_num:9, tes_val:"〆", }
,{tesf:"ロゼッタ&チコ", tess:"空前", fighter_id:1480, skill_genre:10901, begin:11, end:13, time:54, base_damage:3, landing_lag:16, landing_occurrence_begin:4, landing_occurrence_end:49, detail_name:"チコ", tes_val:"チコ", }
,{tesf:"ロゼッタ&チコ", tess:"空後", fighter_id:1480, skill_genre:10903, begin:9, end:11, time:54, base_damage:11, landing_lag:10, landing_occurrence_begin:4, landing_occurrence_end:49, tes_val:"", }
,{tesf:"ロゼッタ&チコ", tess:"空後", fighter_id:1480, skill_genre:10903, begin:10, end:15, time:54, base_damage:4, landing_lag:10, landing_occurrence_begin:4, landing_occurrence_end:49, detail_name:"チコ", tes_val:"チコ", }
,{tesf:"ロゼッタ&チコ", tess:"空上", fighter_id:1480, skill_genre:10900, begin:8, end:10, time:49, base_damage:10, landing_lag:11, landing_occurrence_begin:2, landing_occurrence_end:44, tes_val:"", }
,{tesf:"ロゼッタ&チコ", tess:"空上", fighter_id:1480, skill_genre:10900, begin:11, end:14, time:49, base_damage:5, landing_lag:11, landing_occurrence_begin:2, landing_occurrence_end:44, persistence_num:1, tes_val:"持続1", }
,{tesf:"ロゼッタ&チコ", tess:"空上", fighter_id:1480, skill_genre:10900, begin:15, end:19, time:49, base_damage:2, landing_lag:11, landing_occurrence_begin:2, landing_occurrence_end:44, persistence_num:2, tes_val:"持続2", }
,{tesf:"ロゼッタ&チコ", tess:"空上", fighter_id:1480, skill_genre:10900, begin:6, end:11, time:49, base_damage:4, landing_lag:11, landing_occurrence_begin:2, landing_occurrence_end:44, detail_name:"チコ", tes_val:"チコ", }
,{tesf:"ロゼッタ&チコ", tess:"空下", fighter_id:1480, skill_genre:10902, begin:17, end:17, time:49, base_damage:8, landing_lag:12, landing_occurrence_begin:2, landing_occurrence_end:49, tes_val:"", }
,{tesf:"ロゼッタ&チコ", tess:"空下", fighter_id:1480, skill_genre:10902, begin:18, end:22, time:49, base_damage:7, landing_lag:12, landing_occurrence_begin:2, landing_occurrence_end:49, persistence_num:1, tes_val:"持続1", }
,{tesf:"ロゼッタ&チコ", tess:"空下", fighter_id:1480, skill_genre:10902, begin:23, end:25, time:49, base_damage:6, landing_lag:12, landing_occurrence_begin:2, landing_occurrence_end:49, persistence_num:2, tes_val:"持続2", }
,{tesf:"ロゼッタ&チコ", tess:"空下", fighter_id:1480, skill_genre:10902, begin:26, end:32, time:49, base_damage:2, landing_lag:12, landing_occurrence_begin:2, landing_occurrence_end:49, persistence_num:3, tes_val:"持続3", }
,{tesf:"ロゼッタ&チコ", tess:"空下", fighter_id:1480, skill_genre:10902, begin:15, end:19, time:49, base_damage:5, landing_lag:12, landing_occurrence_begin:2, landing_occurrence_end:49, detail_name:"チコ", tes_val:"チコ", }
,{tess:"その場投げ", fighter_id:1480 , skill_genre:10200, base_damage:0,begin:6, end:7, time:39,}
,{tess:"ダッシュ投げ", fighter_id:1480 , skill_genre:10201, base_damage:0,begin:9, end:10, time:46,}
,{tess:"ふりむき投げ", fighter_id:1480 , skill_genre:10202, base_damage:0,begin:10, end:11, time:41,}
, {tesf:"リトル・マック", tess:"弱攻撃", fighter_id:1490, skill_genre:10300, begin:1, end:1, time:16, base_damage:1.5, alias:"弱1", tes_val:"弱1", }
,{tesf:"リトル・マック", tess:"弱攻撃", fighter_id:1490, skill_genre:10300, begin:1, end:1, time:6, base_damage:1.5, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"リトル・マック", tess:"弱攻撃", fighter_id:1490, skill_genre:10300, begin:1, end:1, time:16, base_damage:1.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"リトル・マック", tess:"弱攻撃", fighter_id:1490, skill_genre:10300, begin:4, end:5, time:29, base_damage:5, alias:"弱3", tes_val:"弱3", }
,{tesf:"リトル・マック", tess:"弱攻撃", fighter_id:1490, skill_genre:10300, begin:4, end:5, time:2, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"リトル・マック", tess:"弱攻撃", fighter_id:1490, skill_genre:10300, begin:2, end:2, time:20, base_damage:0.5, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"2, 4, 6, 8,10, 12, 14,16, 18, 20", tes_val:"百裂, 連", }
,{tesf:"リトル・マック", tess:"弱攻撃", fighter_id:1490, skill_genre:10300, begin:5, end:5, time:34, base_damage:3, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"リトル・マック", tess:"ダッシュ攻撃", fighter_id:1490, skill_genre:10400, begin:1, end:4, time:33, base_damage:0, detail_name:"風", defend_position:"ground_only", tes_val:"風, 対地のみ", }
,{tesf:"リトル・マック", tess:"ダッシュ攻撃", fighter_id:1490, skill_genre:10400, begin:7, end:9, time:33, base_damage:10, tes_val:"", }
,{tesf:"リトル・マック", tess:"横強", fighter_id:1490, skill_genre:10501, begin:4, end:5, time:37, base_damage:4, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リトル・マック", tess:"横強", fighter_id:1490, skill_genre:10501, begin:12, end:13, time:37, base_damage:8, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"リトル・マック", tess:"上強", fighter_id:1490, skill_genre:10500, begin:4, end:10, time:29, base_damage:6.5, tes_val:"", }
,{tesf:"リトル・マック", tess:"下強", fighter_id:1490, skill_genre:10502, begin:3, end:4, time:25, base_damage:8, tes_val:"", }
,{tesf:"リトル・マック", tess:"横スマッシュ", fighter_id:1490, skill_genre:10601, begin:14, end:15, time:43, base_damage:20, damage_no:1, shift:"up", tes_val:"上シフト", }
,{tesf:"リトル・マック", tess:"横スマッシュ", fighter_id:1490, skill_genre:10601, begin:14, end:15, time:43, base_damage:18, damage_no:2, shift:"up", tes_val:"上シフト", }
,{tesf:"リトル・マック", tess:"横スマッシュ", fighter_id:1490, skill_genre:10601, begin:14, end:15, time:43, base_damage:20, damage_no:1, tes_val:"無シフト", }
,{tesf:"リトル・マック", tess:"横スマッシュ", fighter_id:1490, skill_genre:10601, begin:14, end:15, time:43, base_damage:18, damage_no:2, tes_val:"無シフト", }
,{tesf:"リトル・マック", tess:"横スマッシュ", fighter_id:1490, skill_genre:10601, begin:15, end:15, time:43, base_damage:24, shift:"under", tes_val:"下シフト", }
,{tesf:"リトル・マック", tess:"上スマッシュ", fighter_id:1490, skill_genre:10600, begin:10, end:10, time:47, base_damage:21, tes_val:"", }
,{tesf:"リトル・マック", tess:"上スマッシュ", fighter_id:1490, skill_genre:10600, begin:11, end:13, time:47, base_damage:16, persistence_num:1, tes_val:"持続", }
,{tesf:"リトル・マック", tess:"下スマッシュ", fighter_id:1490, skill_genre:10602, begin:10, end:11, time:42, base_damage:13, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リトル・マック", tess:"下スマッシュ", fighter_id:1490, skill_genre:10602, begin:17, end:18, time:42, base_damage:13, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"リトル・マック", tess:"空N", fighter_id:1490, skill_genre:10904, begin:2, end:2, time:15, base_damage:2, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:15, tes_val:"", }
,{tesf:"リトル・マック", tess:"空前", fighter_id:1490, skill_genre:10901, begin:10, end:12, time:36, base_damage:5, landing_lag:13, landing_occurrence_begin:1, landing_occurrence_end:34, damage_no:1, tes_val:"", }
,{tesf:"リトル・マック", tess:"空前", fighter_id:1490, skill_genre:10901, begin:10, end:12, time:36, base_damage:4, landing_lag:13, landing_occurrence_begin:1, landing_occurrence_end:34, damage_no:2, tes_val:"", }
,{tesf:"リトル・マック", tess:"空後", fighter_id:1490, skill_genre:10903, begin:11, end:12, time:37, base_damage:6, landing_lag:16, landing_occurrence_begin:1, landing_occurrence_end:35, damage_no:1, tes_val:"", }
,{tesf:"リトル・マック", tess:"空後", fighter_id:1490, skill_genre:10903, begin:11, end:12, time:37, base_damage:4, landing_lag:16, landing_occurrence_begin:1, landing_occurrence_end:35, damage_no:2, tes_val:"", }
,{tesf:"リトル・マック", tess:"空上", fighter_id:1490, skill_genre:10900, begin:5, end:8, time:41, base_damage:5, landing_lag:13, landing_occurrence_begin:1, landing_occurrence_end:39, damage_no:1, tes_val:"", }
,{tesf:"リトル・マック", tess:"空上", fighter_id:1490, skill_genre:10900, begin:5, end:8, time:41, base_damage:4, landing_lag:13, landing_occurrence_begin:1, landing_occurrence_end:39, damage_no:2, tes_val:"", }
,{tesf:"リトル・マック", tess:"空下", fighter_id:1490, skill_genre:10902, begin:7, end:10, time:27, base_damage:5, landing_lag:18, landing_occurrence_begin:1, landing_occurrence_end:24, damage_no:1, tes_val:"", }
,{tesf:"リトル・マック", tess:"空下", fighter_id:1490, skill_genre:10902, begin:7, end:10, time:27, base_damage:4, landing_lag:18, landing_occurrence_begin:1, landing_occurrence_end:24, damage_no:2, tes_val:"", }
,{tess:"その場投げ", fighter_id:1490 , skill_genre:10200, base_damage:0,begin:9, end:10, time:38,}
,{tess:"ダッシュ投げ", fighter_id:1490 , skill_genre:10201, base_damage:0,begin:13, end:14, time:46,}
,{tess:"ふりむき投げ", fighter_id:1490 , skill_genre:10202, base_damage:0,begin:14, end:15, time:41,}
, {tesf:"ゲッコウガ", tess:"弱攻撃", fighter_id:1500, skill_genre:10300, begin:3, end:3, time:21, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ゲッコウガ", tess:"弱攻撃", fighter_id:1500, skill_genre:10300, begin:3, end:4, time:21, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"ゲッコウガ", tess:"弱攻撃", fighter_id:1500, skill_genre:10300, begin:5, end:6, time:35, base_damage:3, alias:"弱3", tes_val:"弱3", }
,{tesf:"ゲッコウガ", tess:"弱攻撃", fighter_id:1500, skill_genre:10300, begin:5, end:6, time:3, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"ゲッコウガ", tess:"弱攻撃", fighter_id:1500, skill_genre:10300, begin:2, end:2, time:18, base_damage:0.5, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"2, 5, 8, 11, 14, 17", tes_val:"百裂, 連", correction:4}
,{tesf:"ゲッコウガ", tess:"弱攻撃", fighter_id:1500, skill_genre:10300, begin:4, end:5, time:47, base_damage:2, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"ゲッコウガ", tess:"ダッシュ攻撃", fighter_id:1500, skill_genre:10400, begin:7, end:11, time:28, base_damage:8, tes_val:"", }
,{tesf:"ゲッコウガ", tess:"横強", fighter_id:1500, skill_genre:10501, begin:10, end:12, time:32, base_damage:8.3, shift:"up", tes_val:"上シフト", }
,{tesf:"ゲッコウガ", tess:"横強", fighter_id:1500, skill_genre:10501, begin:10, end:12, time:32, base_damage:7.3, tes_val:"無シフト", }
,{tesf:"ゲッコウガ", tess:"横強", fighter_id:1500, skill_genre:10501, begin:10, end:12, time:32, base_damage:8.3, shift:"under", tes_val:"下シフト", }
,{tesf:"ゲッコウガ", tess:"上強", fighter_id:1500, skill_genre:10500, begin:9, end:12, time:32, base_damage:4.5, tes_val:"", }
,{tesf:"ゲッコウガ", tess:"下強", fighter_id:1500, skill_genre:10502, begin:5, end:6, time:22, base_damage:4, tes_val:"", }
,{tesf:"ゲッコウガ", tess:"横スマッシュ", fighter_id:1500, skill_genre:10601, begin:13, end:15, time:49, base_damage:14, tes_val:"", }
,{tesf:"ゲッコウガ", tess:"上スマッシュ", fighter_id:1500, skill_genre:10600, begin:12, end:17, time:51, base_damage:5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ゲッコウガ", tess:"上スマッシュ", fighter_id:1500, skill_genre:10600, begin:18, end:18, time:51, base_damage:14, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ゲッコウガ", tess:"上スマッシュ", fighter_id:1500, skill_genre:10600, begin:18, end:18, time:51, base_damage:11, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ゲッコウガ", tess:"上スマッシュ", fighter_id:1500, skill_genre:10600, begin:19, end:20, time:51, base_damage:11, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続1", }
,{tesf:"ゲッコウガ", tess:"上スマッシュ", fighter_id:1500, skill_genre:10600, begin:21, end:21, time:51, base_damage:10, persistence_num:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続2", }
,{tesf:"ゲッコウガ", tess:"下スマッシュ", fighter_id:1500, skill_genre:10602, begin:11, end:12, time:49, base_damage:13, damage_no:1, tes_val:"", }
,{tesf:"ゲッコウガ", tess:"下スマッシュ", fighter_id:1500, skill_genre:10602, begin:11, end:12, time:49, base_damage:11, damage_no:2, tes_val:"", }
,{tesf:"ゲッコウガ", tess:"下スマッシュ", fighter_id:1500, skill_genre:10602, begin:13, end:13, time:49, base_damage:11, persistence_num:1, tes_val:"持続", }
,{tesf:"ゲッコウガ", tess:"下アピール", fighter_id:1500, skill_genre:11102, begin:30, end:73, time:109, base_damage:0.5, rehit:3, tes_val:"", }
, {tesf:"ゲッコウガ", tess:"空N", fighter_id:1500, skill_genre:10904, begin:12, end:13, time:52, base_damage:11, landing_lag:7, landing_occurrence_begin:10, landing_occurrence_end:39, tes_val:"", }
,{tesf:"ゲッコウガ", tess:"空N", fighter_id:1500, skill_genre:10904, begin:14, end:19, time:52, base_damage:6, landing_lag:7, landing_occurrence_begin:10, landing_occurrence_end:39, persistence_num:1, tes_val:"持続", }
,{tesf:"ゲッコウガ", tess:"空前", fighter_id:1500, skill_genre:10901, begin:16, end:17, time:54, base_damage:14, landing_lag:11, landing_occurrence_begin:13, landing_occurrence_end:39, tes_val:"", }
,{tesf:"ゲッコウガ", tess:"空後", fighter_id:1500, skill_genre:10903, begin:5, end:5, time:40, base_damage:3, landing_lag:10, landing_occurrence_begin:4, landing_occurrence_end:34, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ゲッコウガ", tess:"空後", fighter_id:1500, skill_genre:10903, begin:7, end:7, time:40, base_damage:2.5, landing_lag:10, landing_occurrence_begin:4, landing_occurrence_end:34, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ゲッコウガ", tess:"空後", fighter_id:1500, skill_genre:10903, begin:11, end:14, time:40, base_damage:6, landing_lag:10, landing_occurrence_begin:4, landing_occurrence_end:34, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"ゲッコウガ", tess:"空上", fighter_id:1500, skill_genre:10900, begin:7, end:8, time:41, base_damage:1.3, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:34, serial_num_str:"1-4", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"7-8, 10-11, 13-14, 16-17", tes_val:"Hit 1-4", }
,{tesf:"ゲッコウガ", tess:"空上", fighter_id:1500, skill_genre:10900, begin:19, end:20, time:41, base_damage:1.3, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:34, serial_num_str:"5", tes_message:"(連続ヒットする技)", tes_val:"Hit 5", }
,{tesf:"ゲッコウガ", tess:"空上", fighter_id:1500, skill_genre:10900, begin:22, end:22, time:41, base_damage:3, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:34, serial_num_str:"6", tes_message:"(連続ヒットする技)", tes_val:"Hit 6", }
,{tesf:"ゲッコウガ", tess:"空下", fighter_id:1500, skill_genre:10902, begin:17, end:19, time:51, base_damage:8, landing_lag:30, landing_occurrence_begin:3, landing_occurrence_end:52, tes_val:"", }
,{tesf:"ゲッコウガ", tess:"空下", fighter_id:1500, skill_genre:10902, begin:20, end:45, time:51, base_damage:8, landing_lag:30, landing_occurrence_begin:3, landing_occurrence_end:52, persistence_num:1, tes_val:"持続", }
,{tesf:"ゲッコウガ", tess:"空下", fighter_id:1500, skill_genre:10902, begin:20, end:45, time:20, base_damage:0, landing_lag:30, landing_occurrence_begin:3, landing_occurrence_end:52, detail_name:"バウンド", tes_val:"バウンド", }
,{tess:"その場投げ", fighter_id:1500 , skill_genre:10200, base_damage:0,begin:10, end:11, time:38,}
,{tess:"ダッシュ投げ", fighter_id:1500 , skill_genre:10201, base_damage:0,begin:13, end:14, time:46,}
,{tess:"ふりむき投げ", fighter_id:1500 , skill_genre:10202, base_damage:0,begin:114, end:15, time:41,}
, {tesf:"格闘Mii", tess:"弱攻撃", fighter_id:1510, skill_genre:10300, begin:2, end:3, time:15, base_damage:1.8, alias:"弱1", tes_val:"弱1", }
,{tesf:"格闘Mii", tess:"弱攻撃", fighter_id:1510, skill_genre:10300, begin:2, end:3, time:6, base_damage:1.8, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"格闘Mii", tess:"弱攻撃", fighter_id:1510, skill_genre:10300, begin:2, end:3, time:18, base_damage:1, alias:"弱2", tes_val:"弱2", }
,{tesf:"格闘Mii", tess:"弱攻撃", fighter_id:1510, skill_genre:10300, begin:2, end:3, time:2, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"格闘Mii", tess:"弱攻撃", fighter_id:1510, skill_genre:10300, begin:3, end:3, time:19, base_damage:0.5, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 5, 7, 9, 11, 13, 15, 17, 19", tes_val:"百裂, 連", }
,{tesf:"格闘Mii", tess:"弱攻撃", fighter_id:1510, skill_genre:10300, begin:4, end:5, time:40, base_damage:2, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"格闘Mii", tess:"ダッシュ攻撃", fighter_id:1510, skill_genre:10400, begin:6, end:9, time:35, base_damage:11, tes_val:"", }
,{tesf:"格闘Mii", tess:"ダッシュ攻撃", fighter_id:1510, skill_genre:10400, begin:10, end:17, time:35, base_damage:6, persistence_num:1, tes_val:"持続", }
,{tesf:"格闘Mii", tess:"横強", fighter_id:1510, skill_genre:10501, begin:6, end:8, time:27, base_damage:8.5, shift:"up", tes_val:"上シフト", }
,{tesf:"格闘Mii", tess:"横強", fighter_id:1510, skill_genre:10501, begin:6, end:8, time:27, base_damage:8, tes_val:"無シフト", }
,{tesf:"格闘Mii", tess:"横強", fighter_id:1510, skill_genre:10501, begin:6, end:8, time:27, base_damage:8.3, shift:"under", tes_val:"下シフト", }
,{tesf:"格闘Mii", tess:"上強", fighter_id:1510, skill_genre:10500, begin:5, end:12, time:29, base_damage:6, tes_val:"", }
,{tesf:"格闘Mii", tess:"下強", fighter_id:1510, skill_genre:10502, begin:7, end:8, time:27, base_damage:8, tes_val:"", }
,{tesf:"格闘Mii", tess:"横スマッシュ", fighter_id:1510, skill_genre:10601, begin:17, end:18, time:67, base_damage:18, shift:"all", tes_val:"全シフト", }
,{tesf:"格闘Mii", tess:"上スマッシュ", fighter_id:1510, skill_genre:10600, begin:8, end:12, time:47, base_damage:14, tes_val:"", }
,{tesf:"格闘Mii", tess:"上スマッシュ", fighter_id:1510, skill_genre:10600, begin:13, end:14, time:47, base_damage:10, persistence_num:1, tes_val:"持続", }
,{tesf:"格闘Mii", tess:"下スマッシュ", fighter_id:1510, skill_genre:10602, begin:9, end:10, time:43, base_damage:13, tes_val:"", }
, {tesf:"格闘Mii", tess:"空N", fighter_id:1510, skill_genre:10904, begin:3, end:5, time:45, base_damage:10, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:36, tes_val:"", }
,{tesf:"格闘Mii", tess:"空N", fighter_id:1510, skill_genre:10904, begin:6, end:29, time:45, base_damage:5, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:36, persistence_num:1, tes_val:"持続", }
,{tesf:"格闘Mii", tess:"空前", fighter_id:1510, skill_genre:10901, begin:8, end:9, time:44, base_damage:5, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:29, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"格闘Mii", tess:"空前", fighter_id:1510, skill_genre:10901, begin:15, end:17, time:44, base_damage:6, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:29, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"格闘Mii", tess:"空後", fighter_id:1510, skill_genre:10903, begin:7, end:9, time:39, base_damage:12, landing_lag:11, landing_occurrence_begin:2, landing_occurrence_end:27, tes_val:"", }
,{tesf:"格闘Mii", tess:"空上", fighter_id:1510, skill_genre:10900, begin:6, end:10, time:35, base_damage:9, landing_lag:10, landing_occurrence_begin:2, landing_occurrence_end:22, tes_val:"", }
,{tesf:"格闘Mii", tess:"空下", fighter_id:1510, skill_genre:10902, begin:16, end:17, time:49, base_damage:13, landing_lag:18, landing_occurrence_begin:5, landing_occurrence_end:36, tes_val:"", }
,{tess:"その場投げ", fighter_id:1510 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34,}
,{tess:"ダッシュ投げ", fighter_id:1510 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42,}
,{tess:"ふりむき投げ", fighter_id:1510 , skill_genre:10202, base_damage:0,begin:10, end:11, time:37,}
, {tesf:"剣術Mii", tess:"弱攻撃", fighter_id:1520, skill_genre:10300, begin:6, end:7, time:19, base_damage:3, alias:"弱1", tes_val:"弱1", }
,{tesf:"剣術Mii", tess:"弱攻撃", fighter_id:1520, skill_genre:10300, begin:6, end:7, time:22, base_damage:3, alias:"弱2", tes_val:"弱2", }
,{tesf:"剣術Mii", tess:"弱攻撃", fighter_id:1520, skill_genre:10300, begin:6, end:8, time:38, base_damage:5, alias:"弱3", tes_val:"弱3", }
,{tesf:"剣術Mii", tess:"ダッシュ攻撃", fighter_id:1520, skill_genre:10400, begin:9, end:10, time:41, base_damage:10, tes_val:"", }
,{tesf:"剣術Mii", tess:"横強", fighter_id:1520, skill_genre:10501, begin:10, end:11, time:34, base_damage:12, tes_val:"", }
,{tesf:"剣術Mii", tess:"上強", fighter_id:1520, skill_genre:10500, begin:8, end:12, time:32, base_damage:7, tes_val:"", }
,{tesf:"剣術Mii", tess:"下強", fighter_id:1520, skill_genre:10502, begin:5, end:6, time:19, base_damage:8, tes_val:"", }
,{tesf:"剣術Mii", tess:"横スマッシュ", fighter_id:1520, skill_genre:10601, begin:15, end:17, time:59, base_damage:16, damage_no:1, tes_val:"", }
,{tesf:"剣術Mii", tess:"横スマッシュ", fighter_id:1520, skill_genre:10601, begin:15, end:17, time:59, base_damage:15, damage_no:2, tes_val:"", }
,{tesf:"剣術Mii", tess:"横スマッシュ", fighter_id:1520, skill_genre:10601, begin:15, end:17, time:59, base_damage:14, damage_no:3, tes_val:"", }
,{tesf:"剣術Mii", tess:"上スマッシュ", fighter_id:1520, skill_genre:10600, begin:11, end:12, time:59, base_damage:4, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"剣術Mii", tess:"上スマッシュ", fighter_id:1520, skill_genre:10600, begin:14, end:15, time:59, base_damage:3, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"剣術Mii", tess:"上スマッシュ", fighter_id:1520, skill_genre:10600, begin:21, end:22, time:59, base_damage:7, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"剣術Mii", tess:"下スマッシュ", fighter_id:1520, skill_genre:10602, begin:7, end:8, time:53, base_damage:12, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
, {tesf:"剣術Mii", tess:"空N", fighter_id:1520, skill_genre:10904, begin:10, end:23, time:48, base_damage:8, landing_lag:9, landing_occurrence_begin:6, landing_occurrence_end:31, tes_val:"", }
,{tesf:"剣術Mii", tess:"空前", fighter_id:1520, skill_genre:10901, begin:12, end:13, time:46, base_damage:3, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:47, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"剣術Mii", tess:"空前", fighter_id:1520, skill_genre:10901, begin:16, end:17, time:46, base_damage:3, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:47, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"剣術Mii", tess:"空前", fighter_id:1520, skill_genre:10901, begin:21, end:22, time:46, base_damage:5, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:47, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"剣術Mii", tess:"空後", fighter_id:1520, skill_genre:10903, begin:10, end:11, time:37, base_damage:14, landing_lag:9, landing_occurrence_begin:1, landing_occurrence_end:28, tes_val:"", }
,{tesf:"剣術Mii", tess:"空上", fighter_id:1520, skill_genre:10900, begin:11, end:13, time:44, base_damage:16, landing_lag:10, landing_occurrence_begin:11, landing_occurrence_end:29, tes_val:"", }
,{tesf:"剣術Mii", tess:"空上", fighter_id:1520, skill_genre:10900, begin:14, end:23, time:44, base_damage:10, landing_lag:10, landing_occurrence_begin:11, landing_occurrence_end:29, persistence_num:1, tes_val:"持続", }
,{tesf:"剣術Mii", tess:"空下", fighter_id:1520, skill_genre:10902, begin:14, end:37, time:58, base_damage:1.5, landing_lag:18, landing_occurrence_begin:5, landing_occurrence_end:49, rehit:5, tes_val:"", }
,{tess:"その場投げ", fighter_id:1520 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34,}
,{tess:"ダッシュ投げ", fighter_id:1520 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42,}
,{tess:"ふりむき投げ", fighter_id:1520 , skill_genre:10202, base_damage:0,begin:10, end:11, time:37,}
, {tesf:"射撃Mii", tess:"弱攻撃", fighter_id:1530, skill_genre:10300, begin:5, end:6, time:25, base_damage:1.7, alias:"弱1", tes_val:"弱1", }
,{tesf:"射撃Mii", tess:"弱攻撃", fighter_id:1530, skill_genre:10300, begin:5, end:6, time:9, base_damage:1.7, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"射撃Mii", tess:"弱攻撃", fighter_id:1530, skill_genre:10300, begin:4, end:5, time:25, base_damage:1.8, alias:"弱2", tes_val:"弱2", }
,{tesf:"射撃Mii", tess:"弱攻撃", fighter_id:1530, skill_genre:10300, begin:6, end:7, time:37, base_damage:1, alias:"弱3", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"弱3, Hit 1", }
,{tesf:"射撃Mii", tess:"弱攻撃", fighter_id:1530, skill_genre:10300, begin:12, end:13, time:37, base_damage:4.5, alias:"弱3", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"弱3, Hit 2", }
,{tesf:"射撃Mii", tess:"ダッシュ攻撃", fighter_id:1530, skill_genre:10400, begin:10, end:14, time:45, base_damage:11, tes_val:"", correction:1.5}
,{tesf:"射撃Mii", tess:"横強", fighter_id:1530, skill_genre:10501, begin:7, end:8, time:33, base_damage:13, tes_val:"", }
,{tesf:"射撃Mii", tess:"横強", fighter_id:1530, skill_genre:10501, begin:9, end:10, time:33, base_damage:10.5, persistence_num:1, tes_val:"持続1", }
,{tesf:"射撃Mii", tess:"横強", fighter_id:1530, skill_genre:10501, begin:11, end:12, time:33, base_damage:8, persistence_num:2, tes_val:"持続2", }
,{tesf:"射撃Mii", tess:"上強", fighter_id:1530, skill_genre:10500, begin:5, end:5, time:37, base_damage:10, damage_no:1, tes_val:"", }
,{tesf:"射撃Mii", tess:"上強", fighter_id:1530, skill_genre:10500, begin:5, end:5, time:37, base_damage:9, damage_no:2, tes_val:"", }
,{tesf:"射撃Mii", tess:"上強", fighter_id:1530, skill_genre:10500, begin:6, end:7, time:37, base_damage:10, persistence_num:1, tes_val:"持続1", }
,{tesf:"射撃Mii", tess:"上強", fighter_id:1530, skill_genre:10500, begin:8, end:9, time:37, base_damage:8, persistence_num:2, tes_val:"持続2", }
,{tesf:"射撃Mii", tess:"下強", fighter_id:1530, skill_genre:10502, begin:8, end:10, time:40, base_damage:14, tes_val:"", }
,{tesf:"射撃Mii", tess:"横スマッシュ", fighter_id:1530, skill_genre:10601, begin:17, end:38, time:77, base_damage:1.8, detail_name:"連", rehit:4, tes_val:"連", }
,{tesf:"射撃Mii", tess:"横スマッシュ", fighter_id:1530, skill_genre:10601, begin:40, end:40, time:77, base_damage:7.5, persistence_num:9, tes_val:"〆", }
,{tesf:"射撃Mii", tess:"上スマッシュ", fighter_id:1530, skill_genre:10600, begin:11, end:12, time:55, base_damage:3, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"射撃Mii", tess:"上スマッシュ", fighter_id:1530, skill_genre:10600, begin:15, end:16, time:55, base_damage:2.5, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"射撃Mii", tess:"上スマッシュ", fighter_id:1530, skill_genre:10600, begin:19, end:20, time:55, base_damage:2.5, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"射撃Mii", tess:"上スマッシュ", fighter_id:1530, skill_genre:10600, begin:23, end:24, time:55, base_damage:2.5, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }
,{tesf:"射撃Mii", tess:"上スマッシュ", fighter_id:1530, skill_genre:10600, begin:27, end:28, time:55, base_damage:7, serial_num_str:"5", tes_message:"(連続ヒットする技)", tes_val:"Hit 5", }
,{tesf:"射撃Mii", tess:"下スマッシュ", fighter_id:1530, skill_genre:10602, begin:9, end:9, time:52, base_damage:11.5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
, {tesf:"射撃Mii", tess:"空N", fighter_id:1530, skill_genre:10904, begin:8, end:21, time:41, base_damage:10, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:34, tes_val:"", }
,{tesf:"射撃Mii", tess:"空前", fighter_id:1530, skill_genre:10901, begin:12, end:16, time:43, base_damage:8, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:43, tes_val:"", }
,{tesf:"射撃Mii", tess:"空前", fighter_id:1530, skill_genre:10901, begin:17, end:20, time:43, base_damage:6, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:43, persistence_num:1, tes_val:"持続", }
,{tesf:"射撃Mii", tess:"空後", fighter_id:1530, skill_genre:10903, begin:9, end:10, time:47, base_damage:13, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:31, tes_val:"", }
,{tesf:"射撃Mii", tess:"空後", fighter_id:1530, skill_genre:10903, begin:11, end:11, time:47, base_damage:11, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:31, persistence_num:1, tes_val:"持続", }
,{tesf:"射撃Mii", tess:"空上", fighter_id:1530, skill_genre:10900, begin:17, end:17, time:59, base_damage:1.8, landing_lag:13, landing_occurrence_begin:11, landing_occurrence_end:57, persistence_num:0, tes_val:"始", }
,{tesf:"射撃Mii", tess:"空上", fighter_id:1530, skill_genre:10900, begin:18, end:32, time:59, base_damage:1.8, landing_lag:13, landing_occurrence_begin:11, landing_occurrence_end:57, detail_name:"連", rehit:3, tes_val:"連", }
,{tesf:"射撃Mii", tess:"空上", fighter_id:1530, skill_genre:10900, begin:34, end:34, time:59, base_damage:4, landing_lag:13, landing_occurrence_begin:11, landing_occurrence_end:57, persistence_num:9, tes_val:"〆", }
,{tesf:"射撃Mii", tess:"空下", fighter_id:1530, skill_genre:10902, begin:20, end:21, time:54, base_damage:15, landing_lag:17, landing_occurrence_begin:4, landing_occurrence_end:53, damage_no:1, tes_val:"", }
,{tesf:"射撃Mii", tess:"空下", fighter_id:1530, skill_genre:10902, begin:20, end:21, time:54, base_damage:10, landing_lag:17, landing_occurrence_begin:4, landing_occurrence_end:53, damage_no:2, tes_val:"", }
,{tess:"その場投げ", fighter_id:1530 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34,}
,{tess:"ダッシュ投げ", fighter_id:1530 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42,}
,{tess:"ふりむき投げ", fighter_id:1530 , skill_genre:10202, base_damage:0,begin:10, end:11, time:37,}
, {tesf:"パルテナ", tess:"弱攻撃", fighter_id:1540, skill_genre:10300, begin:8, end:9, time:24, base_damage:3, alias:"弱1", tes_val:"弱1", }
,{tesf:"パルテナ", tess:"弱攻撃", fighter_id:1540, skill_genre:10300, begin:8, end:9, time:2, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"パルテナ", tess:"弱攻撃", fighter_id:1540, skill_genre:10300, begin:2, end:2, time:21, base_damage:0.6, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"2, 5, 8, 11, 14, 17, 20", tes_val:"百裂, 連", correction:7}
,{tesf:"パルテナ", tess:"弱攻撃", fighter_id:1540, skill_genre:10300, begin:3, end:4, time:39, base_damage:3.5, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"パルテナ", tess:"ダッシュ攻撃", fighter_id:1540, skill_genre:10400, begin:6, end:9, time:37, base_damage:11, tes_val:"", }
,{tesf:"パルテナ", tess:"ダッシュ攻撃", fighter_id:1540, skill_genre:10400, begin:10, end:17, time:37, base_damage:7, persistence_num:1, tes_val:"持続", }
,{tesf:"パルテナ", tess:"横強", fighter_id:1540, skill_genre:10501, begin:14, end:23, time:59, base_damage:6, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"パルテナ", tess:"横強", fighter_id:1540, skill_genre:10501, begin:24, end:35, time:59, base_damage:7, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"パルテナ", tess:"上強", fighter_id:1540, skill_genre:10500, begin:8, end:22, time:55, base_damage:1.4, detail_name:"連", rehit:3, tes_val:"連", }
,{tesf:"パルテナ", tess:"上強", fighter_id:1540, skill_genre:10500, begin:24, end:25, time:55, base_damage:4.5, persistence_num:9, tes_val:"〆", }
,{tesf:"パルテナ", tess:"下強", fighter_id:1540, skill_genre:10502, begin:14, end:27, time:39, base_damage:8.5, defend_position:"ground", tes_val:"対地", }
,{tesf:"パルテナ", tess:"下強", fighter_id:1540, skill_genre:10502, begin:14, end:27, time:39, base_damage:5, defend_position:"air", tes_val:"対空", }
,{tesf:"パルテナ", tess:"横スマッシュ", fighter_id:1540, skill_genre:10601, begin:18, end:20, time:63, base_damage:16, damage_no:1, tes_val:"", }
,{tesf:"パルテナ", tess:"横スマッシュ", fighter_id:1540, skill_genre:10601, begin:18, end:20, time:63, base_damage:13, damage_no:2, tes_val:"", }
,{tesf:"パルテナ", tess:"横スマッシュ", fighter_id:1540, skill_genre:10601, begin:21, end:25, time:63, base_damage:0, detail_name:"風", tes_val:"風判定", }
,{tesf:"パルテナ", tess:"横スマッシュ", fighter_id:1540, skill_genre:10601, begin:26, end:31, time:63, base_damage:0, detail_name:"風", persistence_num:1, tes_val:"風判定, 持続", }
,{tesf:"パルテナ", tess:"上スマッシュ", fighter_id:1540, skill_genre:10600, begin:18, end:29, time:63, base_damage:16, damage_no:1, tes_val:"", }
,{tesf:"パルテナ", tess:"上スマッシュ", fighter_id:1540, skill_genre:10600, begin:18, end:29, time:63, base_damage:12, damage_no:2, tes_val:"", }
,{tesf:"パルテナ", tess:"上スマッシュ", fighter_id:1540, skill_genre:10600, begin:18, end:29, time:63, base_damage:9, damage_no:3, tes_val:"", }
,{tesf:"パルテナ", tess:"上スマッシュ", fighter_id:1540, skill_genre:10600, begin:30, end:35, time:63, base_damage:13, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"パルテナ", tess:"上スマッシュ", fighter_id:1540, skill_genre:10600, begin:30, end:35, time:63, base_damage:9, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"パルテナ", tess:"上スマッシュ", fighter_id:1540, skill_genre:10600, begin:30, end:35, time:63, base_damage:7, damage_no:3, persistence_num:1, tes_val:"持続", }
,{tesf:"パルテナ", tess:"下スマッシュ", fighter_id:1540, skill_genre:10602, begin:17, end:17, time:68, base_damage:15, tes_val:"", }
,{tesf:"パルテナ", tess:"下スマッシュ", fighter_id:1540, skill_genre:10602, begin:18, end:19, time:68, base_damage:13, persistence_num:1, tes_val:"持続", }
,{tesf:"パルテナ", tess:"下スマッシュ", fighter_id:1540, skill_genre:10602, begin:20, end:29, time:68, base_damage:0, detail_name:"風", tes_val:"風判定", }
, {tesf:"パルテナ", tess:"空N", fighter_id:1540, skill_genre:10904, begin:5, end:27, time:51, base_damage:1.4, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:39, detail_name:"連", rehit:4, tes_val:"連", }
,{tesf:"パルテナ", tess:"空N", fighter_id:1540, skill_genre:10904, begin:29, end:30, time:51, base_damage:5.1, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:39, persistence_num:9, tes_val:"〆", }
,{tesf:"パルテナ", tess:"空前", fighter_id:1540, skill_genre:10901, begin:9, end:11, time:44, base_damage:10, landing_lag:7, landing_occurrence_begin:4, landing_occurrence_end:23, tes_val:"", }
,{tesf:"パルテナ", tess:"空後", fighter_id:1540, skill_genre:10903, begin:8, end:10, time:49, base_damage:12, landing_lag:10, landing_occurrence_begin:3, landing_occurrence_end:34, tes_val:"", }
,{tesf:"パルテナ", tess:"空上", fighter_id:1540, skill_genre:10900, begin:10, end:22, time:51, base_damage:1, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:41, detail_name:"連", rehit:3, tes_val:"連", }
,{tesf:"パルテナ", tess:"空上", fighter_id:1540, skill_genre:10900, begin:24, end:25, time:51, base_damage:5, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:41, persistence_num:9, tes_val:"〆", }
,{tesf:"パルテナ", tess:"空下", fighter_id:1540, skill_genre:10902, begin:10, end:11, time:58, base_damage:11, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:47, tes_val:"", }
,{tess:"その場投げ", fighter_id:1540 , skill_genre:10200, base_damage:0,begin:7, end:8, time:379}
,{tess:"ダッシュ投げ", fighter_id:1540 , skill_genre:10201, base_damage:0,begin:10, end:11, time:47,}
,{tess:"ふりむき投げ", fighter_id:1540 , skill_genre:10202, base_damage:0,begin:11, end:12, time:42,}
, {tesf:"パックマン", tess:"弱攻撃", fighter_id:1550, skill_genre:10300, begin:4, end:4, time:19, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"パックマン", tess:"弱攻撃", fighter_id:1550, skill_genre:10300, begin:4, end:4, time:9, base_damage:2, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"パックマン", tess:"弱攻撃", fighter_id:1550, skill_genre:10300, begin:4, end:4, time:21, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"パックマン", tess:"弱攻撃", fighter_id:1550, skill_genre:10300, begin:4, end:5, time:33, base_damage:4, alias:"弱3", tes_val:"弱3", }
,{tesf:"パックマン", tess:"ダッシュ攻撃", fighter_id:1550, skill_genre:10400, begin:3, end:9, time:45, base_damage:0, detail_name:"風", rehit:4, defend_position:"ground_only", tes_val:"風, 対地のみ", }
,{tesf:"パックマン", tess:"ダッシュ攻撃", fighter_id:1550, skill_genre:10400, begin:10, end:11, time:45, base_damage:2, serial_num_str:"1-3", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"10-11, 19-20, 28-29", tes_val:"Hit 1-3", }
,{tesf:"パックマン", tess:"ダッシュ攻撃", fighter_id:1550, skill_genre:10400, begin:37, end:37, time:45, base_damage:4, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }
,{tesf:"パックマン", tess:"横強", fighter_id:1550, skill_genre:10501, begin:5, end:7, time:30, base_damage:8, shift:"all", tes_val:"全シフト", }
,{tesf:"パックマン", tess:"上強", fighter_id:1550, skill_genre:10500, begin:7, end:10, time:24, base_damage:6.5, tes_val:"", }
,{tesf:"パックマン", tess:"下強", fighter_id:1550, skill_genre:10502, begin:7, end:9, time:26, base_damage:6, tes_val:"", }
,{tesf:"パックマン", tess:"横スマッシュ", fighter_id:1550, skill_genre:10601, begin:16, end:18, time:52, base_damage:16, damage_no:1, tes_val:"", }
,{tesf:"パックマン", tess:"横スマッシュ", fighter_id:1550, skill_genre:10601, begin:16, end:18, time:52, base_damage:15, damage_no:2, tes_val:"", }
,{tesf:"パックマン", tess:"横スマッシュ", fighter_id:1550, skill_genre:10601, begin:19, end:29, time:52, base_damage:9, persistence_num:1, tes_val:"持続", }
,{tesf:"パックマン", tess:"上スマッシュ", fighter_id:1550, skill_genre:10600, begin:11, end:11, time:49, base_damage:3, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"パックマン", tess:"上スマッシュ", fighter_id:1550, skill_genre:10600, begin:15, end:17, time:49, base_damage:14, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"パックマン", tess:"上スマッシュ", fighter_id:1550, skill_genre:10600, begin:18, end:28, time:49, base_damage:8, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続", }
,{tesf:"パックマン", tess:"下スマッシュ", fighter_id:1550, skill_genre:10602, begin:15, end:17, time:54, base_damage:13, tes_val:"", }
,{tesf:"パックマン", tess:"下スマッシュ", fighter_id:1550, skill_genre:10602, begin:18, end:28, time:54, base_damage:7, persistence_num:1, tes_val:"持続", }
, {tesf:"パックマン", tess:"空N", fighter_id:1550, skill_genre:10904, begin:3, end:5, time:51, base_damage:10, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:44, tes_val:"", }
,{tesf:"パックマン", tess:"空N", fighter_id:1550, skill_genre:10904, begin:6, end:9, time:51, base_damage:8.5, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:44, persistence_num:1, tes_val:"持続1", }
,{tesf:"パックマン", tess:"空N", fighter_id:1550, skill_genre:10904, begin:10, end:19, time:51, base_damage:6, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:44, persistence_num:2, tes_val:"持続2", }
,{tesf:"パックマン", tess:"空前", fighter_id:1550, skill_genre:10901, begin:5, end:8, time:25, base_damage:7.65, landing_lag:17, landing_occurrence_begin:2, landing_occurrence_end:25, tes_val:"", }
,{tesf:"パックマン", tess:"空後", fighter_id:1550, skill_genre:10903, begin:9, end:11, time:40, base_damage:11.8, landing_lag:6, landing_occurrence_begin:9, landing_occurrence_end:35, tes_val:"", }
,{tesf:"パックマン", tess:"空後", fighter_id:1550, skill_genre:10903, begin:12, end:16, time:40, base_damage:7, landing_lag:6, landing_occurrence_begin:9, landing_occurrence_end:35, persistence_num:1, tes_val:"持続", }
,{tesf:"パックマン", tess:"空上", fighter_id:1550, skill_genre:10900, begin:9, end:16, time:36, base_damage:10, landing_lag:6, landing_occurrence_begin:2, landing_occurrence_end:31, tes_val:"", }
,{tesf:"パックマン", tess:"空下", fighter_id:1550, skill_genre:10902, begin:6, end:7, time:49, base_damage:2, landing_lag:15, landing_occurrence_begin:2, landing_occurrence_end:49, serial_num_str:"1-3", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"6-7, 13-14, 20-21", tes_val:"Hit 1-3", }
,{tesf:"パックマン", tess:"空下", fighter_id:1550, skill_genre:10902, begin:27, end:28, time:49, base_damage:7, landing_lag:15, landing_occurrence_begin:2, landing_occurrence_end:49, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }
,{tess:"その場投げ", fighter_id:1550 , skill_genre:10200, base_damage:0,begin:7, end:8, time:39,}
,{tess:"ダッシュ投げ", fighter_id:1550 , skill_genre:10201, base_damage:0,begin:10, end:11, time:47,}
,{tess:"ふりむき投げ", fighter_id:1550 , skill_genre:10202, base_damage:0,begin:11, end:12, time:42,}
, {tesf:"ルフレ", tess:"弱攻撃", fighter_id:1560, skill_genre:10300, begin:4, end:5, time:31, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ルフレ", tess:"弱攻撃", fighter_id:1560, skill_genre:10300, begin:5, end:6, time:34, base_damage:1.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"ルフレ", tess:"弱攻撃", fighter_id:1560, skill_genre:10300, begin:6, end:7, time:35, base_damage:5, alias:"弱3", tes_val:"弱3", }
,{tesf:"ルフレ", tess:"弱攻撃", fighter_id:1560, skill_genre:10300, begin:6, end:7, time:1, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"ルフレ", tess:"弱攻撃", fighter_id:1560, skill_genre:10300, begin:3, end:3, time:30, base_damage:0.7, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 6, 9, 12, 15, 18, 21, 24, 27, 30", tes_val:"百裂, 連", correction:3}
,{tesf:"ルフレ", tess:"弱攻撃", fighter_id:1560, skill_genre:10300, begin:5, end:6, time:47, base_damage:2, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"ルフレ", tess:"ダッシュ攻撃", fighter_id:1560, skill_genre:10400, begin:8, end:10, time:41, base_damage:10, tes_val:"", }
,{tesf:"ルフレ", tess:"ダッシュ攻撃", fighter_id:1560, skill_genre:10400, begin:11, end:18, time:41, base_damage:6, persistence_num:1, tes_val:"持続", }
,{tesf:"ルフレ", tess:"横強", fighter_id:1560, skill_genre:10501, begin:9, end:10, time:32, base_damage:7.5, tes_val:"", }
,{tesf:"ルフレ", tess:"上強", fighter_id:1560, skill_genre:10500, begin:6, end:14, time:32, base_damage:6, tes_val:"", }
,{tesf:"ルフレ", tess:"下強", fighter_id:1560, skill_genre:10502, begin:7, end:8, time:21, base_damage:6, tes_val:"", }
,{tesf:"ルフレ", tess:"横スマッシュ", fighter_id:1560, skill_genre:10601, begin:16, end:18, time:57, base_damage:16, detail_name:"サンダー", tes_val:"サンダー", }
,{tesf:"ルフレ", tess:"横スマッシュ", fighter_id:1560, skill_genre:10601, begin:19, end:27, time:57, base_damage:10, detail_name:"サンダー", persistence_num:1, tes_val:"サンダー, 持続", }
,{tesf:"ルフレ", tess:"横スマッシュ", fighter_id:1560, skill_genre:10601, begin:16, end:18, time:57, base_damage:9.6, detail_name:"青銅", tes_val:"青銅", }
,{tesf:"ルフレ", tess:"上スマッシュ", fighter_id:1560, skill_genre:10600, begin:12, end:12, time:52, base_damage:15, damage_no:1, detail_name:"サンダー", persistence_num:0, tes_val:"サンダー, 始", }
,{tesf:"ルフレ", tess:"上スマッシュ", fighter_id:1560, skill_genre:10600, begin:12, end:12, time:52, base_damage:10, damage_no:2, detail_name:"サンダー", persistence_num:0, tes_val:"サンダー, 始", }
,{tesf:"ルフレ", tess:"上スマッシュ", fighter_id:1560, skill_genre:10600, begin:13, end:16, time:52, base_damage:15, detail_name:"サンダー", tes_val:"サンダー", }
,{tesf:"ルフレ", tess:"上スマッシュ", fighter_id:1560, skill_genre:10600, begin:17, end:32, time:52, base_damage:10, detail_name:"サンダー", persistence_num:1, tes_val:"サンダー, 持続", }
,{tesf:"ルフレ", tess:"上スマッシュ", fighter_id:1560, skill_genre:10600, begin:12, end:16, time:52, base_damage:9, detail_name:"青銅", tes_val:"青銅", }
,{tesf:"ルフレ", tess:"下スマッシュ", fighter_id:1560, skill_genre:10602, begin:16, end:17, time:56, base_damage:15, detail_name:"サンダー", tes_val:"サンダー", }
,{tesf:"ルフレ", tess:"下スマッシュ", fighter_id:1560, skill_genre:10602, begin:19, end:22, time:56, base_damage:12, detail_name:"サンダー", persistence_num:1, tes_val:"サンダー, 持続", }
,{tesf:"ルフレ", tess:"下スマッシュ", fighter_id:1560, skill_genre:10602, begin:23, end:28, time:56, base_damage:10, detail_name:"サンダー", tes_val:"サンダー, 電気", }
,{tesf:"ルフレ", tess:"下スマッシュ", fighter_id:1560, skill_genre:10602, begin:16, end:17, time:56, base_damage:8, detail_name:"青銅", tes_val:"青銅", }
, {tesf:"ルフレ", tess:"空N", fighter_id:1560, skill_genre:10904, begin:7, end:10, time:47, base_damage:11.5, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:39, detail_name:"サンダー", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"サンダー, Hit 1", }
,{tesf:"ルフレ", tess:"空N", fighter_id:1560, skill_genre:10904, begin:20, end:23, time:47, base_damage:11.5, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:39, detail_name:"サンダー", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"サンダー, Hit 2", }
,{tesf:"ルフレ", tess:"空N", fighter_id:1560, skill_genre:10904, begin:24, end:28, time:47, base_damage:5, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:39, detail_name:"サンダー", persistence_num:1, tes_val:"サンダー, 持続", }
,{tesf:"ルフレ", tess:"空N", fighter_id:1560, skill_genre:10904, begin:7, end:10, time:47, base_damage:6.9, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:31, detail_name:"青銅", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"青銅, Hit 1", }
,{tesf:"ルフレ", tess:"空N", fighter_id:1560, skill_genre:10904, begin:20, end:23, time:47, base_damage:6.9, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:31, detail_name:"青銅", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"青銅, Hit 2", }
,{tesf:"ルフレ", tess:"空前", fighter_id:1560, skill_genre:10901, begin:12, end:15, time:33, base_damage:12.5, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:27, detail_name:"サンダー", tes_val:"サンダー", }
,{tesf:"ルフレ", tess:"空前", fighter_id:1560, skill_genre:10901, begin:16, end:19, time:33, base_damage:5, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:27, detail_name:"サンダー", persistence_num:1, tes_val:"サンダー, 持続", }
,{tesf:"ルフレ", tess:"空前", fighter_id:1560, skill_genre:10901, begin:12, end:15, time:33, base_damage:7.5, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:26, detail_name:"青銅", tes_val:"青銅", }
,{tesf:"ルフレ", tess:"空後", fighter_id:1560, skill_genre:10903, begin:9, end:10, time:39, base_damage:15, landing_lag:11, landing_occurrence_begin:1, landing_occurrence_end:31, detail_name:"サンダー", tes_val:"サンダー", }
,{tesf:"ルフレ", tess:"空後", fighter_id:1560, skill_genre:10903, begin:11, end:16, time:39, base_damage:5, landing_lag:11, landing_occurrence_begin:1, landing_occurrence_end:31, detail_name:"サンダー", persistence_num:1, tes_val:"サンダー, 持続", }
,{tesf:"ルフレ", tess:"空後", fighter_id:1560, skill_genre:10903, begin:9, end:10, time:39, base_damage:9, landing_lag:11, landing_occurrence_begin:1, landing_occurrence_end:31, detail_name:"青銅", tes_val:"青銅", }
,{tesf:"ルフレ", tess:"空上", fighter_id:1560, skill_genre:10900, begin:10, end:13, time:45, base_damage:13, landing_lag:11, landing_occurrence_begin:5, landing_occurrence_end:27, detail_name:"サンダー", tes_val:"サンダー", }
,{tesf:"ルフレ", tess:"空上", fighter_id:1560, skill_genre:10900, begin:14, end:23, time:45, base_damage:5, landing_lag:11, landing_occurrence_begin:5, landing_occurrence_end:27, detail_name:"サンダー", persistence_num:1, tes_val:"サンダー, 持続", }
,{tesf:"ルフレ", tess:"空上", fighter_id:1560, skill_genre:10900, begin:10, end:13, time:45, base_damage:7.8, landing_lag:11, landing_occurrence_begin:5, landing_occurrence_end:26, detail_name:"青銅", tes_val:"青銅", }
,{tesf:"ルフレ", tess:"空下", fighter_id:1560, skill_genre:10902, begin:13, end:15, time:59, base_damage:11, landing_lag:16, landing_occurrence_begin:2, landing_occurrence_end:47, detail_name:"サンダー", persistence_num:0, tes_val:"サンダー, 始", }
,{tesf:"ルフレ", tess:"空下", fighter_id:1560, skill_genre:10902, begin:16, end:17, time:59, base_damage:12, landing_lag:16, landing_occurrence_begin:2, landing_occurrence_end:47, detail_name:"サンダー", tes_val:"サンダー", }
,{tesf:"ルフレ", tess:"空下", fighter_id:1560, skill_genre:10902, begin:18, end:24, time:59, base_damage:8, landing_lag:16, landing_occurrence_begin:2, landing_occurrence_end:47, detail_name:"サンダー", persistence_num:1, tes_val:"サンダー, 持続", }
,{tesf:"ルフレ", tess:"空下", fighter_id:1560, skill_genre:10902, begin:13, end:15, time:59, base_damage:7.2, landing_lag:16, landing_occurrence_begin:2, landing_occurrence_end:47, detail_name:"青銅", tes_val:"青銅", }
,{tesf:"ルフレ", tess:"空下", fighter_id:1560, skill_genre:10902, begin:16, end:24, time:59, base_damage:6, landing_lag:16, landing_occurrence_begin:2, landing_occurrence_end:47, detail_name:"青銅", persistence_num:1, tes_val:"青銅, 持続", }
,{tess:"その場投げ", fighter_id:1560 , skill_genre:10200, base_damage:0,begin:7, end:8, time:39,}
,{tess:"ダッシュ投げ", fighter_id:1560 , skill_genre:10201, base_damage:0,begin:10, end:11, time:47,}
,{tess:"ふりむき投げ", fighter_id:1560 , skill_genre:10202, base_damage:0,begin:11, end:12, time:42,}

, {tesf:"クッパ Jr.", tess:"弱攻撃", fighter_id:1580, skill_genre:10300, begin:4, end:5, time:19, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"クッパ Jr.", tess:"弱攻撃", fighter_id:1580, skill_genre:10300, begin:4, end:5, time:11, base_damage:2, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"クッパ Jr.", tess:"弱攻撃", fighter_id:1580, skill_genre:10300, begin:4, end:5, time:29, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"クッパ Jr.", tess:"弱攻撃", fighter_id:1580, skill_genre:10300, begin:4, end:5, time:2, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"クッパ Jr.", tess:"弱攻撃", fighter_id:1580, skill_genre:10300, begin:3, end:3, time:31, base_damage:0.5, alias:"百裂", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 9, 15, 21, 27", tes_val:"百裂, 連1", correction:8}
,{tesf:"クッパ Jr.", tess:"弱攻撃", fighter_id:1580, skill_genre:10300, begin:6, end:6, time:31, base_damage:0.5, alias:"百裂", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"6, 12, 18, 24, 30", tes_val:"百裂, 連2", correction:8}
,{tesf:"クッパ Jr.", tess:"弱攻撃", fighter_id:1580, skill_genre:10300, begin:6, end:7, time:42, base_damage:3, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"クッパ Jr.", tess:"ダッシュ攻撃", fighter_id:1580, skill_genre:10400, begin:8, end:12, time:47, base_damage:1.8, rehit:3, tes_val:"連1", }
,{tesf:"クッパ Jr.", tess:"ダッシュ攻撃", fighter_id:1580, skill_genre:10400, begin:13, end:20, time:47, base_damage:1.8, rehit:3, tes_val:"連2", }
,{tesf:"クッパ Jr.", tess:"ダッシュ攻撃", fighter_id:1580, skill_genre:10400, begin:25, end:26, time:47, base_damage:4, persistence_num:9, tes_val:"〆", }
,{tesf:"クッパ Jr.", tess:"横強", fighter_id:1580, skill_genre:10501, begin:7, end:9, time:31, base_damage:8, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"クッパ Jr.", tess:"横強", fighter_id:1580, skill_genre:10501, begin:7, end:9, time:31, base_damage:6, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"クッパ Jr.", tess:"上強", fighter_id:1580, skill_genre:10500, begin:7, end:14, time:30, base_damage:6, tes_val:"", }
,{tesf:"クッパ Jr.", tess:"下強", fighter_id:1580, skill_genre:10502, begin:4, end:6, time:40, base_damage:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", correction:1.2}
,{tesf:"クッパ Jr.", tess:"下強", fighter_id:1580, skill_genre:10502, begin:12, end:14, time:40, base_damage:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", correction:1.2}
,{tesf:"クッパ Jr.", tess:"下強", fighter_id:1580, skill_genre:10502, begin:23, end:25, time:40, base_damage:6, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"クッパ Jr.", tess:"横スマッシュ", fighter_id:1580, skill_genre:10601, begin:18, end:32, time:55, base_damage:1, detail_name:"連", rehit:3, shift:"all", tes_val:"全シフト, 連", }
,{tesf:"クッパ Jr.", tess:"横スマッシュ", fighter_id:1580, skill_genre:10601, begin:35, end:37, time:55, base_damage:11, persistence_num:9, shift:"all", tes_val:"全シフト, 〆", }
,{tesf:"クッパ Jr.", tess:"上スマッシュ", fighter_id:1580, skill_genre:10600, begin:7, end:8, time:54, base_damage:1, persistence_num:0, defend_position:"ground_only", tes_val:"始, 対地のみ", }
,{tesf:"クッパ Jr.", tess:"上スマッシュ", fighter_id:1580, skill_genre:10600, begin:9, end:18, time:54, base_damage:1.3, detail_name:"連", rehit:3, tes_val:"連", }
,{tesf:"クッパ Jr.", tess:"上スマッシュ", fighter_id:1580, skill_genre:10600, begin:18, end:18, time:54, base_damage:1, detail_name:"最終", tes_val:"連, 最終", }
,{tesf:"クッパ Jr.", tess:"上スマッシュ", fighter_id:1580, skill_genre:10600, begin:22, end:23, time:54, base_damage:6, persistence_num:9, tes_val:"〆", }
,{tesf:"クッパ Jr.", tess:"下スマッシュ", fighter_id:1580, skill_genre:10602, begin:15, end:17, time:59, base_damage:18, tes_val:"", }
, {tesf:"クッパ Jr.", tess:"空N", fighter_id:1580, skill_genre:10904, begin:7, end:8, time:43, base_damage:8.5, landing_lag:9, landing_occurrence_begin:7, landing_occurrence_end:41, damage_no:1, tes_val:"", }
,{tesf:"クッパ Jr.", tess:"空N", fighter_id:1580, skill_genre:10904, begin:7, end:8, time:43, base_damage:6.5, landing_lag:9, landing_occurrence_begin:7, landing_occurrence_end:41, damage_no:2, tes_val:"", }
,{tesf:"クッパ Jr.", tess:"空N", fighter_id:1580, skill_genre:10904, begin:9, end:13, time:43, base_damage:7, landing_lag:9, landing_occurrence_begin:7, landing_occurrence_end:41, damage_no:1, persistence_num:1, tes_val:"持続1", }
,{tesf:"クッパ Jr.", tess:"空N", fighter_id:1580, skill_genre:10904, begin:9, end:13, time:43, base_damage:5.5, landing_lag:9, landing_occurrence_begin:7, landing_occurrence_end:41, damage_no:2, persistence_num:1, tes_val:"持続1", }
,{tesf:"クッパ Jr.", tess:"空N", fighter_id:1580, skill_genre:10904, begin:14, end:19, time:43, base_damage:5, landing_lag:9, landing_occurrence_begin:7, landing_occurrence_end:41, damage_no:1, persistence_num:2, tes_val:"持続2", }
,{tesf:"クッパ Jr.", tess:"空N", fighter_id:1580, skill_genre:10904, begin:14, end:19, time:43, base_damage:3.5, landing_lag:9, landing_occurrence_begin:7, landing_occurrence_end:41, damage_no:2, persistence_num:2, tes_val:"持続2", }
,{tesf:"クッパ Jr.", tess:"空前", fighter_id:1580, skill_genre:10901, begin:10, end:13, time:43, base_damage:11, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:33, damage_no:1, tes_val:"", }
,{tesf:"クッパ Jr.", tess:"空前", fighter_id:1580, skill_genre:10901, begin:10, end:13, time:43, base_damage:9, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:33, damage_no:2, tes_val:"", }
,{tesf:"クッパ Jr.", tess:"空前", fighter_id:1580, skill_genre:10901, begin:14, end:17, time:43, base_damage:9, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:33, damage_no:1, persistence_num:1, tes_val:"持続1", }
,{tesf:"クッパ Jr.", tess:"空前", fighter_id:1580, skill_genre:10901, begin:14, end:17, time:43, base_damage:7, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:33, damage_no:2, persistence_num:1, tes_val:"持続1", }
,{tesf:"クッパ Jr.", tess:"空前", fighter_id:1580, skill_genre:10901, begin:18, end:23, time:43, base_damage:7, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:33, damage_no:1, persistence_num:2, tes_val:"持続2", }
,{tesf:"クッパ Jr.", tess:"空前", fighter_id:1580, skill_genre:10901, begin:18, end:23, time:43, base_damage:5, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:33, damage_no:2, persistence_num:2, tes_val:"持続2", }
,{tesf:"クッパ Jr.", tess:"空前", fighter_id:1580, skill_genre:10901, begin:2, end:2, time:43, base_damage:2, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:33, is_landing_attack:true, tes_val:"着地", }
,{tesf:"クッパ Jr.", tess:"空後", fighter_id:1580, skill_genre:10903, begin:12, end:13, time:45, base_damage:14, landing_lag:14, landing_occurrence_begin:12, landing_occurrence_end:29, damage_no:1, tes_val:"", }
,{tesf:"クッパ Jr.", tess:"空後", fighter_id:1580, skill_genre:10903, begin:12, end:13, time:45, base_damage:8, landing_lag:14, landing_occurrence_begin:12, landing_occurrence_end:29, damage_no:2, tes_val:"", }
,{tesf:"クッパ Jr.", tess:"空後", fighter_id:1580, skill_genre:10903, begin:14, end:18, time:45, base_damage:10, landing_lag:14, landing_occurrence_begin:12, landing_occurrence_end:29, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"クッパ Jr.", tess:"空後", fighter_id:1580, skill_genre:10903, begin:14, end:18, time:45, base_damage:8, landing_lag:14, landing_occurrence_begin:12, landing_occurrence_end:29, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"クッパ Jr.", tess:"空上", fighter_id:1580, skill_genre:10900, begin:6, end:9, time:25, base_damage:10, landing_lag:9, landing_occurrence_begin:2, landing_occurrence_end:15, tes_val:"", }
,{tesf:"クッパ Jr.", tess:"空上", fighter_id:1580, skill_genre:10900, begin:10, end:13, time:25, base_damage:6.5, landing_lag:9, landing_occurrence_begin:2, landing_occurrence_end:15, persistence_num:1, tes_val:"持続", }
,{tesf:"クッパ Jr.", tess:"空下", fighter_id:1580, skill_genre:10902, begin:15, end:38, time:56, base_damage:1.5, landing_lag:15, landing_occurrence_begin:2, landing_occurrence_end:54, detail_name:"連", rehit:3, tes_val:"連", }
,{tesf:"クッパ Jr.", tess:"空下", fighter_id:1580, skill_genre:10902, begin:39, end:39, time:56, base_damage:2.5, landing_lag:15, landing_occurrence_begin:2, landing_occurrence_end:54, persistence_num:9, tes_val:"〆", }
,{tesf:"クッパ Jr.", tess:"空下", fighter_id:1580, skill_genre:10902, begin:1, end:2, time:56, base_damage:2, landing_lag:15, landing_occurrence_begin:2, landing_occurrence_end:54, is_landing_attack:true, tes_val:"着地", }
,{tesf:"クッパ Jr.", tess:"空下", fighter_id:1580, skill_genre:10902, begin:1, end:2, time:56, base_damage:0, landing_lag:15, landing_occurrence_begin:2, landing_occurrence_end:54, tes_val:"", }
,{tesf:"クッパ Jr.", tess:"空下", fighter_id:1580, skill_genre:10902, begin:1, end:2, time:56, base_damage:0, landing_lag:15, landing_occurrence_begin:2, landing_occurrence_end:54, tes_val:"", }
,{tesf:"クッパ Jr.", tess:"空下", fighter_id:1580, skill_genre:10902, begin:1, end:2, time:56, base_damage:0, landing_lag:15, landing_occurrence_begin:2, landing_occurrence_end:54, tes_val:"", }
,{tesf:"クッパ Jr.", tess:"空下", fighter_id:1580, skill_genre:10902, begin:1, end:2, time:56, base_damage:0, landing_lag:15, landing_occurrence_begin:2, landing_occurrence_end:54, tes_val:"", }
,{tesf:"クッパ Jr.", tess:"空下", fighter_id:1580, skill_genre:10902, begin:1, end:2, time:56, base_damage:0, landing_lag:15, landing_occurrence_begin:2, landing_occurrence_end:54, tes_val:"", }
,{tess:"その場投げ", fighter_id:1580 , skill_genre:10200, base_damage:0,begin:11, end:13, time:40,}
,{tess:"ダッシュ投げ", fighter_id:1580 , skill_genre:10201, base_damage:0,begin:14, end:16, time:48,}
,{tess:"ふりむき投げ", fighter_id:1580 , skill_genre:10202, base_damage:0,begin:15, end:17, time:43,}
, {tesf:"ダックハント", tess:"弱攻撃", fighter_id:1590, skill_genre:10300, begin:4, end:4, time:25, base_damage:1.5, alias:"弱1", tes_val:"弱1", }
,{tesf:"ダックハント", tess:"弱攻撃", fighter_id:1590, skill_genre:10300, begin:5, end:6, time:27, base_damage:1.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"ダックハント", tess:"弱攻撃", fighter_id:1590, skill_genre:10300, begin:6, end:7, time:33, base_damage:5, alias:"弱3", tes_val:"弱3", }
,{tesf:"ダックハント", tess:"弱攻撃", fighter_id:1590, skill_genre:10300, begin:6, end:7, time:2, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"ダックハント", tess:"弱攻撃", fighter_id:1590, skill_genre:10300, begin:3, end:3, time:17, base_damage:0.4, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 5, 7, 9, 11, 13, 15, 17", tes_val:"百裂, 連", correction:5}
,{tesf:"ダックハント", tess:"弱攻撃", fighter_id:1590, skill_genre:10300, begin:5, end:5, time:45, base_damage:3, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"ダックハント", tess:"ダッシュ攻撃", fighter_id:1590, skill_genre:10400, begin:10, end:13, time:43, base_damage:10, tes_val:"", }
,{tesf:"ダックハント", tess:"ダッシュ攻撃", fighter_id:1590, skill_genre:10400, begin:14, end:19, time:43, base_damage:7, persistence_num:1, tes_val:"持続", }
,{tesf:"ダックハント", tess:"横強", fighter_id:1590, skill_genre:10501, begin:8, end:11, time:31, base_damage:8, shift:"all", tes_val:"全シフト", }
,{tesf:"ダックハント", tess:"上強", fighter_id:1590, skill_genre:10500, begin:7, end:11, time:27, base_damage:7, tes_val:"", }
,{tesf:"ダックハント", tess:"下強", fighter_id:1590, skill_genre:10502, begin:6, end:7, time:27, base_damage:8, tes_val:"", }
,{tesf:"ダックハント", tess:"横スマッシュ", fighter_id:1590, skill_genre:10601, begin:17, end:18, time:66, base_damage:4, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ダックハント", tess:"横スマッシュ", fighter_id:1590, skill_genre:10601, begin:23, end:24, time:66, base_damage:4, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ダックハント", tess:"横スマッシュ", fighter_id:1590, skill_genre:10601, begin:29, end:30, time:66, base_damage:9, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"ダックハント", tess:"上スマッシュ", fighter_id:1590, skill_genre:10600, begin:12, end:13, time:57, base_damage:2.5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ダックハント", tess:"上スマッシュ", fighter_id:1590, skill_genre:10600, begin:20, end:21, time:57, base_damage:2.5, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ダックハント", tess:"上スマッシュ", fighter_id:1590, skill_genre:10600, begin:28, end:29, time:57, base_damage:10, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"ダックハント", tess:"下スマッシュ", fighter_id:1590, skill_genre:10602, begin:12, end:13, time:57, base_damage:5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ダックハント", tess:"下スマッシュ", fighter_id:1590, skill_genre:10602, begin:20, end:21, time:57, base_damage:5, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ダックハント", tess:"下スマッシュ", fighter_id:1590, skill_genre:10602, begin:28, end:29, time:57, base_damage:6, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
, {tesf:"ダックハント", tess:"空N", fighter_id:1590, skill_genre:10904, begin:6, end:8, time:55, base_damage:11, landing_lag:10, landing_occurrence_begin:4, landing_occurrence_end:43, tes_val:"", }
,{tesf:"ダックハント", tess:"空N", fighter_id:1590, skill_genre:10904, begin:9, end:37, time:55, base_damage:5, landing_lag:10, landing_occurrence_begin:4, landing_occurrence_end:43, persistence_num:1, tes_val:"持続", }
,{tesf:"ダックハント", tess:"空前", fighter_id:1590, skill_genre:10901, begin:7, end:7, time:44, base_damage:6.5, landing_lag:9, landing_occurrence_begin:6, landing_occurrence_end:45, persistence_num:0, tes_val:"始", }
,{tesf:"ダックハント", tess:"空前", fighter_id:1590, skill_genre:10901, begin:8, end:9, time:44, base_damage:10, landing_lag:9, landing_occurrence_begin:6, landing_occurrence_end:45, damage_no:1, tes_val:"", }
,{tesf:"ダックハント", tess:"空前", fighter_id:1590, skill_genre:10901, begin:8, end:9, time:44, base_damage:6.5, landing_lag:9, landing_occurrence_begin:6, landing_occurrence_end:45, damage_no:2, tes_val:"", }
,{tesf:"ダックハント", tess:"空前", fighter_id:1590, skill_genre:10901, begin:10, end:11, time:44, base_damage:7.5, landing_lag:9, landing_occurrence_begin:6, landing_occurrence_end:45, persistence_num:1, tes_val:"持続", }
,{tesf:"ダックハント", tess:"空後", fighter_id:1590, skill_genre:10903, begin:7, end:8, time:41, base_damage:12.5, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:34, damage_no:1, persistence_num:0, tes_val:"始", }
,{tesf:"ダックハント", tess:"空後", fighter_id:1590, skill_genre:10903, begin:7, end:8, time:41, base_damage:10, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:34, damage_no:2, persistence_num:0, tes_val:"始", }
,{tesf:"ダックハント", tess:"空後", fighter_id:1590, skill_genre:10903, begin:9, end:10, time:41, base_damage:12.5, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:34, tes_val:"", }
,{tesf:"ダックハント", tess:"空上", fighter_id:1590, skill_genre:10900, begin:6, end:7, time:39, base_damage:3, landing_lag:11, landing_occurrence_begin:2, landing_occurrence_end:31, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ダックハント", tess:"空上", fighter_id:1590, skill_genre:10900, begin:12, end:13, time:39, base_damage:3, landing_lag:11, landing_occurrence_begin:2, landing_occurrence_end:31, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ダックハント", tess:"空上", fighter_id:1590, skill_genre:10900, begin:20, end:21, time:39, base_damage:6, landing_lag:11, landing_occurrence_begin:2, landing_occurrence_end:31, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"ダックハント", tess:"空下", fighter_id:1590, skill_genre:10902, begin:14, end:15, time:49, base_damage:5, landing_lag:15, landing_occurrence_begin:4, landing_occurrence_end:44, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ダックハント", tess:"空下", fighter_id:1590, skill_genre:10902, begin:20, end:21, time:49, base_damage:10, landing_lag:15, landing_occurrence_begin:4, landing_occurrence_end:44, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tess:"その場投げ", fighter_id:1590 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34,}
,{tess:"ダッシュ投げ", fighter_id:1590 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42,}
,{tess:"ふりむき投げ", fighter_id:1590 , skill_genre:10202, base_damage:0,begin:10, end:11, time:37,}
, {tesf:"リュウ", tess:"弱攻撃", fighter_id:1600, skill_genre:10300, begin:9, end:10, time:32, base_damage:10, alias:"弱1 (強)", tes_val:"弱1 (強)", }
,{tesf:"リュウ", tess:"弱攻撃", fighter_id:1600, skill_genre:10300, begin:7, end:7, time:37, base_damage:12, damage_no:1, alias:"弱1 (強)", detail_name:"密着", tes_val:"弱1 (強), 密着", }
,{tesf:"リュウ", tess:"弱攻撃", fighter_id:1600, skill_genre:10300, begin:7, end:7, time:37, base_damage:8, damage_no:2, alias:"弱1 (強)", detail_name:"密着", tes_val:"弱1 (強), 密着", }
,{tesf:"リュウ", tess:"弱攻撃", fighter_id:1600, skill_genre:10300, begin:8, end:11, time:37, base_damage:12, tes_val:"", }
,{tesf:"リュウ", tess:"弱攻撃", fighter_id:1600, skill_genre:10300, begin:2, end:3, time:15, base_damage:1.5, alias:"弱1 (弱)", tes_val:"弱1 (弱)", }
,{tesf:"リュウ", tess:"弱攻撃", fighter_id:1600, skill_genre:10300, begin:2, end:3, time:6, base_damage:1.5, alias:"弱1 (弱)", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1 (弱)", }
,{tesf:"リュウ", tess:"弱攻撃", fighter_id:1600, skill_genre:10300, begin:3, end:4, time:27, base_damage:1.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"リュウ", tess:"弱攻撃", fighter_id:1600, skill_genre:10300, begin:8, end:10, time:35, base_damage:5, alias:"弱3", tes_val:"弱3", }
,{tesf:"リュウ", tess:"ダッシュ攻撃", fighter_id:1600, skill_genre:10400, begin:7, end:9, time:40, base_damage:12, tes_val:"", }
,{tesf:"リュウ", tess:"ダッシュ攻撃", fighter_id:1600, skill_genre:10400, begin:10, end:15, time:40, base_damage:8, persistence_num:1, tes_val:"持続", }
,{tesf:"リュウ", tess:"横強", fighter_id:1600, skill_genre:10501, begin:16, end:16, time:37, base_damage:3, detail_name:"強", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"強, Hit 1", }
,{tesf:"リュウ", tess:"横強", fighter_id:1600, skill_genre:10501, begin:18, end:19, time:37, base_damage:6, detail_name:"強", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"強, Hit 2", }
,{tesf:"リュウ", tess:"横強", fighter_id:1600, skill_genre:10501, begin:8, end:11, time:23, base_damage:6.8, detail_name:"弱", tes_val:"弱", }
,{tesf:"リュウ", tess:"横強", fighter_id:1600, skill_genre:10501, begin:3, end:4, time:29, base_damage:6, detail_name:"弱", tes_val:"弱, 密着", }
,{tesf:"リュウ", tess:"横強", fighter_id:1600, skill_genre:10501, begin:4, end:5, time:30, base_damage:6, detail_name:"弱", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱, 密着", }
,{tesf:"リュウ", tess:"上強", fighter_id:1600, skill_genre:10500, begin:7, end:7, time:37, base_damage:12, damage_no:1, detail_name:"強", tes_val:"強", }
,{tesf:"リュウ", tess:"上強", fighter_id:1600, skill_genre:10500, begin:7, end:7, time:37, base_damage:8, damage_no:2, detail_name:"強", tes_val:"強", }
,{tesf:"リュウ", tess:"上強", fighter_id:1600, skill_genre:10500, begin:8, end:11, time:37, base_damage:12, detail_name:"強", persistence_num:1, tes_val:"強, 持続", }
,{tesf:"リュウ", tess:"上強", fighter_id:1600, skill_genre:10500, begin:3, end:6, time:14, base_damage:2, detail_name:"弱", tes_val:"弱", }
,{tesf:"リュウ", tess:"上強", fighter_id:1600, skill_genre:10500, begin:3, end:6, time:7, base_damage:2, detail_name:"弱", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱", }
,{tesf:"リュウ", tess:"下強", fighter_id:1600, skill_genre:10502, begin:6, end:7, time:27, base_damage:7, damage_no:1, detail_name:"強", tes_val:"強", }
,{tesf:"リュウ", tess:"下強", fighter_id:1600, skill_genre:10502, begin:6, end:7, time:27, base_damage:5.5, damage_no:2, detail_name:"強", tes_val:"強", }
,{tesf:"リュウ", tess:"下強", fighter_id:1600, skill_genre:10502, begin:2, end:3, time:14, base_damage:1.6, detail_name:"弱", tes_val:"弱", }
,{tesf:"リュウ", tess:"下強", fighter_id:1600, skill_genre:10502, begin:2, end:3, time:7, base_damage:1.6, detail_name:"弱", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱", }
,{tesf:"リュウ", tess:"横スマッシュ", fighter_id:1600, skill_genre:10601, begin:15, end:17, time:45, base_damage:17.5, damage_no:1, tes_val:"", }
,{tesf:"リュウ", tess:"横スマッシュ", fighter_id:1600, skill_genre:10601, begin:15, end:17, time:45, base_damage:16, damage_no:2, tes_val:"", }
,{tesf:"リュウ", tess:"上スマッシュ", fighter_id:1600, skill_genre:10600, begin:9, end:9, time:44, base_damage:17, tes_val:"", }
,{tesf:"リュウ", tess:"上スマッシュ", fighter_id:1600, skill_genre:10600, begin:10, end:12, time:44, base_damage:13.5, persistence_num:1, tes_val:"持続", }
,{tesf:"リュウ", tess:"下スマッシュ", fighter_id:1600, skill_genre:10602, begin:5, end:6, time:41, base_damage:16, damage_no:1, tes_val:"", }
,{tesf:"リュウ", tess:"下スマッシュ", fighter_id:1600, skill_genre:10602, begin:5, end:6, time:41, base_damage:12, damage_no:2, tes_val:"", }
, {tesf:"リュウ", tess:"空N", fighter_id:1600, skill_genre:10904, begin:4, end:6, time:35, base_damage:8, landing_lag:5, landing_occurrence_begin:2, landing_occurrence_end:33, tes_val:"", }
,{tesf:"リュウ", tess:"空N", fighter_id:1600, skill_genre:10904, begin:7, end:31, time:35, base_damage:4.5, landing_lag:5, landing_occurrence_begin:2, landing_occurrence_end:33, persistence_num:1, tes_val:"持続", }
,{tesf:"リュウ", tess:"空前", fighter_id:1600, skill_genre:10901, begin:8, end:9, time:36, base_damage:14, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:37, damage_no:1, tes_val:"", }
,{tesf:"リュウ", tess:"空前", fighter_id:1600, skill_genre:10901, begin:8, end:9, time:36, base_damage:9, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:37, damage_no:2, tes_val:"", }
,{tesf:"リュウ", tess:"空前", fighter_id:1600, skill_genre:10901, begin:10, end:14, time:36, base_damage:12, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:37, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"リュウ", tess:"空前", fighter_id:1600, skill_genre:10901, begin:10, end:14, time:36, base_damage:8, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:37, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"リュウ", tess:"空後", fighter_id:1600, skill_genre:10903, begin:8, end:9, time:41, base_damage:16, landing_lag:10, landing_occurrence_begin:2, landing_occurrence_end:24, damage_no:1, tes_val:"", }
,{tesf:"リュウ", tess:"空後", fighter_id:1600, skill_genre:10903, begin:8, end:9, time:41, base_damage:13, landing_lag:10, landing_occurrence_begin:2, landing_occurrence_end:24, damage_no:2, tes_val:"", }
,{tesf:"リュウ", tess:"空上", fighter_id:1600, skill_genre:10900, begin:6, end:7, time:35, base_damage:5, landing_lag:11, landing_occurrence_begin:2, landing_occurrence_end:17, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リュウ", tess:"空上", fighter_id:1600, skill_genre:10900, begin:9, end:11, time:35, base_damage:6, landing_lag:11, landing_occurrence_begin:2, landing_occurrence_end:17, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"リュウ", tess:"空下", fighter_id:1600, skill_genre:10902, begin:8, end:12, time:45, base_damage:12, landing_lag:15, landing_occurrence_begin:3, landing_occurrence_end:32, defend_position:"ground", tes_val:"対地", }
,{tesf:"リュウ", tess:"空下", fighter_id:1600, skill_genre:10902, begin:8, end:12, time:45, base_damage:15, landing_lag:15, landing_occurrence_begin:3, landing_occurrence_end:32, damage_no:1, defend_position:"air", tes_val:"対空", }
,{tesf:"リュウ", tess:"空下", fighter_id:1600, skill_genre:10902, begin:8, end:12, time:45, base_damage:11, landing_lag:15, landing_occurrence_begin:3, landing_occurrence_end:32, damage_no:2, defend_position:"air", tes_val:"対空", }
,{tess:"その場投げ", fighter_id:1600 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34,}
,{tess:"ダッシュ投げ", fighter_id:1600 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42,}
,{tess:"ふりむき投げ", fighter_id:1600 , skill_genre:10202, base_damage:0,begin:10, end:11, time:37,}
, {tesf:"クラウド", tess:"弱攻撃", fighter_id:1610, skill_genre:10300, begin:4, end:5, time:29, base_damage:2.5, alias:"弱1", tes_val:"弱1", }
,{tesf:"クラウド", tess:"弱攻撃", fighter_id:1610, skill_genre:10300, begin:4, end:5, time:15, base_damage:2.5, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"クラウド", tess:"弱攻撃", fighter_id:1610, skill_genre:10300, begin:5, end:6, time:32, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"クラウド", tess:"弱攻撃", fighter_id:1610, skill_genre:10300, begin:6, end:7, time:37, base_damage:3.5, alias:"弱3", tes_val:"弱3", }
,{tesf:"クラウド", tess:"ダッシュ攻撃", fighter_id:1610, skill_genre:10400, begin:9, end:13, time:45, base_damage:11, tes_val:"", }
,{tesf:"クラウド", tess:"ダッシュ攻撃", fighter_id:1610, skill_genre:10400, begin:14, end:18, time:45, base_damage:8, persistence_num:1, tes_val:"持続", }
,{tesf:"クラウド", tess:"横強", fighter_id:1610, skill_genre:10501, begin:9, end:10, time:35, base_damage:11, tes_val:"", }
,{tesf:"クラウド", tess:"上強", fighter_id:1610, skill_genre:10500, begin:6, end:9, time:32, base_damage:8, tes_val:"", }
,{tesf:"クラウド", tess:"下強", fighter_id:1610, skill_genre:10502, begin:7, end:8, time:40, base_damage:7, damage_no:1, tes_val:"", }
,{tesf:"クラウド", tess:"下強", fighter_id:1610, skill_genre:10502, begin:7, end:8, time:40, base_damage:6, damage_no:2, tes_val:"", }
,{tesf:"クラウド", tess:"下強", fighter_id:1610, skill_genre:10502, begin:9, end:17, time:40, base_damage:7, persistence_num:1, tes_val:"持続", }
,{tesf:"クラウド", tess:"横スマッシュ", fighter_id:1610, skill_genre:10601, begin:19, end:19, time:66, base_damage:3, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"クラウド", tess:"横スマッシュ", fighter_id:1610, skill_genre:10601, begin:24, end:24, time:66, base_damage:4, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"クラウド", tess:"横スマッシュ", fighter_id:1610, skill_genre:10601, begin:24, end:24, time:66, base_damage:3, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"クラウド", tess:"横スマッシュ", fighter_id:1610, skill_genre:10601, begin:24, end:24, time:66, base_damage:2, damage_no:3, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"クラウド", tess:"横スマッシュ", fighter_id:1610, skill_genre:10601, begin:28, end:28, time:66, base_damage:13, damage_no:1, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"クラウド", tess:"横スマッシュ", fighter_id:1610, skill_genre:10601, begin:28, end:28, time:66, base_damage:12, damage_no:2, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"クラウド", tess:"上スマッシュ", fighter_id:1610, skill_genre:10600, begin:12, end:12, time:45, base_damage:13, tes_val:"", }
,{tesf:"クラウド", tess:"上スマッシュ", fighter_id:1610, skill_genre:10600, begin:13, end:14, time:45, base_damage:13, damage_no:1, persistence_num:1, tes_val:"持続1", }
,{tesf:"クラウド", tess:"上スマッシュ", fighter_id:1610, skill_genre:10600, begin:13, end:14, time:45, base_damage:12, damage_no:2, persistence_num:1, tes_val:"持続1", }
,{tesf:"クラウド", tess:"上スマッシュ", fighter_id:1610, skill_genre:10600, begin:13, end:14, time:45, base_damage:11, damage_no:3, persistence_num:1, tes_val:"持続1", }
,{tesf:"クラウド", tess:"上スマッシュ", fighter_id:1610, skill_genre:10600, begin:15, end:16, time:45, base_damage:8, persistence_num:2, tes_val:"持続2", }
,{tesf:"クラウド", tess:"下スマッシュ", fighter_id:1610, skill_genre:10602, begin:8, end:9, time:49, base_damage:3, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"クラウド", tess:"下スマッシュ", fighter_id:1610, skill_genre:10602, begin:21, end:23, time:49, base_damage:11, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"クラウド", tess:"空N", fighter_id:1610, skill_genre:10904, begin:5, end:15, time:38, base_damage:8, landing_lag:9, landing_occurrence_begin:1, landing_occurrence_end:30, tes_val:"", }
,{tesf:"クラウド", tess:"空前", fighter_id:1610, skill_genre:10901, begin:18, end:19, time:53, base_damage:14, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:42, damage_no:1, defend_position:"ground", tes_val:"対地", }
,{tesf:"クラウド", tess:"空前", fighter_id:1610, skill_genre:10901, begin:18, end:19, time:53, base_damage:13, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:42, damage_no:2, defend_position:"ground", tes_val:"対地", }
,{tesf:"クラウド", tess:"空前", fighter_id:1610, skill_genre:10901, begin:18, end:19, time:53, base_damage:14, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:42, damage_no:1, defend_position:"air", tes_val:"対空", }
,{tesf:"クラウド", tess:"空前", fighter_id:1610, skill_genre:10901, begin:18, end:19, time:53, base_damage:13, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:42, damage_no:2, defend_position:"air", tes_val:"対空", }
,{tesf:"クラウド", tess:"空前", fighter_id:1610, skill_genre:10901, begin:20, end:25, time:53, base_damage:11, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:42, persistence_num:1, tes_val:"持続", }
,{tesf:"クラウド", tess:"空後", fighter_id:1610, skill_genre:10903, begin:11, end:12, time:41, base_damage:13, landing_lag:8, landing_occurrence_begin:5, landing_occurrence_end:36, tes_val:"", }
,{tesf:"クラウド", tess:"空上", fighter_id:1610, skill_genre:10900, begin:8, end:9, time:44, base_damage:11, landing_lag:9, landing_occurrence_begin:2, landing_occurrence_end:31, tes_val:"", }
,{tesf:"クラウド", tess:"空上", fighter_id:1610, skill_genre:10900, begin:10, end:23, time:44, base_damage:8, landing_lag:9, landing_occurrence_begin:2, landing_occurrence_end:31, persistence_num:1, tes_val:"持続", }
,{tesf:"クラウド", tess:"空下", fighter_id:1610, skill_genre:10902, begin:11, end:13, time:64, base_damage:13, landing_lag:16, landing_occurrence_begin:5, landing_occurrence_end:45, defend_position:"ground", tes_val:"対地", }
,{tesf:"クラウド", tess:"空下", fighter_id:1610, skill_genre:10902, begin:11, end:13, time:64, base_damage:15, landing_lag:16, landing_occurrence_begin:5, landing_occurrence_end:45, damage_no:1, defend_position:"air", tes_val:"対空", }
,{tesf:"クラウド", tess:"空下", fighter_id:1610, skill_genre:10902, begin:11, end:13, time:64, base_damage:13, landing_lag:16, landing_occurrence_begin:5, landing_occurrence_end:45, damage_no:2, defend_position:"air", tes_val:"対空", }
,{tesf:"クラウド", tess:"空下", fighter_id:1610, skill_genre:10902, begin:14, end:39, time:64, base_damage:8, landing_lag:16, landing_occurrence_begin:5, landing_occurrence_end:45, persistence_num:1, tes_val:"持続", }
,{tess:"その場投げ", fighter_id:1610 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34,}
,{tess:"ダッシュ投げ", fighter_id:1610 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42,}
,{tess:"ふりむき投げ", fighter_id:1610 , skill_genre:10202, base_damage:0,begin:10, end:11, time:37,}
, {tesf:"カムイ", tess:"弱攻撃", fighter_id:1620, skill_genre:10300, begin:5, end:6, time:27, base_damage:2.5, damage_no:1, alias:"弱1", tes_val:"弱1", }
,{tesf:"カムイ", tess:"弱攻撃", fighter_id:1620, skill_genre:10300, begin:5, end:6, time:27, base_damage:2, damage_no:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"カムイ", tess:"弱攻撃", fighter_id:1620, skill_genre:10300, begin:4, end:5, time:29, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"カムイ", tess:"弱攻撃", fighter_id:1620, skill_genre:10300, begin:6, end:7, time:30, base_damage:4, damage_no:1, alias:"弱3", tes_val:"弱3", }
,{tesf:"カムイ", tess:"弱攻撃", fighter_id:1620, skill_genre:10300, begin:6, end:7, time:30, base_damage:3, damage_no:2, alias:"弱3", tes_val:"弱3", }
,{tesf:"カムイ", tess:"弱攻撃", fighter_id:1620, skill_genre:10300, begin:6, end:7, time:9, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"カムイ", tess:"弱攻撃", fighter_id:1620, skill_genre:10300, begin:3, end:3, time:17, base_damage:0.5, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 7, 11, 15", tes_val:"百裂, 連", correction:8}
,{tesf:"カムイ", tess:"弱攻撃", fighter_id:1620, skill_genre:10300, begin:3, end:4, time:39, base_damage:3, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"カムイ", tess:"ダッシュ攻撃", fighter_id:1620, skill_genre:10400, begin:12, end:12, time:49, base_damage:2, serial_num_str:"1-5", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"12, 14,16, 18, 20", tes_val:"Hit 1-5", }
,{tesf:"カムイ", tess:"ダッシュ攻撃", fighter_id:1620, skill_genre:10400, begin:23, end:23, time:49, base_damage:3, serial_num_str:"6", tes_message:"(連続ヒットする技)", tes_val:"Hit 6", }
,{tesf:"カムイ", tess:"横強", fighter_id:1620, skill_genre:10501, begin:8, end:9, time:34, base_damage:10.5, tes_val:"", }
,{tesf:"カムイ", tess:"上強", fighter_id:1620, skill_genre:10500, begin:7, end:8, time:35, base_damage:9, tes_val:"", }
,{tesf:"カムイ", tess:"上強", fighter_id:1620, skill_genre:10500, begin:9, end:16, time:35, base_damage:9, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"カムイ", tess:"上強", fighter_id:1620, skill_genre:10500, begin:9, end:16, time:35, base_damage:6, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"カムイ", tess:"下強", fighter_id:1620, skill_genre:10502, begin:5, end:7, time:30, base_damage:7.5, tes_val:"", }
,{tesf:"カムイ", tess:"横スマッシュ", fighter_id:1620, skill_genre:10601, begin:12, end:999, time:30, base_damage:0.5, rehit:5, tes_val:"溜め", }
,{tesf:"カムイ", tess:"横スマッシュ", fighter_id:1620, skill_genre:10601, begin:17, end:18, time:56, base_damage:15.2, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"カムイ", tess:"横スマッシュ", fighter_id:1620, skill_genre:10601, begin:17, end:18, time:56, base_damage:12, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"カムイ", tess:"横スマッシュ", fighter_id:1620, skill_genre:10601, begin:17, end:18, time:56, base_damage:11, damage_no:3, shift:"all", tes_val:"全シフト", }
,{tesf:"カムイ", tess:"上スマッシュ", fighter_id:1620, skill_genre:10600, begin:13, end:17, time:51, base_damage:15, damage_no:1, tes_val:"", }
,{tesf:"カムイ", tess:"上スマッシュ", fighter_id:1620, skill_genre:10600, begin:13, end:17, time:51, base_damage:13, damage_no:2, tes_val:"", }
,{tesf:"カムイ", tess:"上スマッシュ", fighter_id:1620, skill_genre:10600, begin:13, end:17, time:51, base_damage:10, damage_no:3, tes_val:"", }
,{tesf:"カムイ", tess:"下スマッシュ", fighter_id:1620, skill_genre:10602, begin:13, end:15, time:48, base_damage:14, damage_no:1, tes_val:"", }
,{tesf:"カムイ", tess:"下スマッシュ", fighter_id:1620, skill_genre:10602, begin:13, end:15, time:48, base_damage:11, damage_no:2, tes_val:"", }
,{tesf:"カムイ", tess:"下スマッシュ", fighter_id:1620, skill_genre:10602, begin:13, end:15, time:48, base_damage:9, damage_no:3, tes_val:"", }
, {tesf:"カムイ", tess:"空N", fighter_id:1620, skill_genre:10904, begin:6, end:7, time:46, base_damage:7, landing_lag:10, landing_occurrence_begin:6, landing_occurrence_end:46, tes_val:"", }
,{tesf:"カムイ", tess:"空N", fighter_id:1620, skill_genre:10904, begin:8, end:19, time:46, base_damage:5.5, landing_lag:10, landing_occurrence_begin:6, landing_occurrence_end:46, persistence_num:1, tes_val:"持続", }
,{tesf:"カムイ", tess:"空前", fighter_id:1620, skill_genre:10901, begin:9, end:12, time:35, base_damage:7.5, landing_lag:8, landing_occurrence_begin:9, landing_occurrence_end:29, tes_val:"", }
,{tesf:"カムイ", tess:"空後", fighter_id:1620, skill_genre:10903, begin:13, end:13, time:41, base_damage:11, landing_lag:13, landing_occurrence_begin:6, landing_occurrence_end:41, tes_val:"", }
,{tesf:"カムイ", tess:"空後", fighter_id:1620, skill_genre:10903, begin:14, end:16, time:41, base_damage:9, landing_lag:13, landing_occurrence_begin:6, landing_occurrence_end:41, persistence_num:1, tes_val:"持続", }
,{tesf:"カムイ", tess:"空上", fighter_id:1620, skill_genre:10900, begin:7, end:12, time:37, base_damage:9, landing_lag:9, landing_occurrence_begin:4, landing_occurrence_end:37, tes_val:"", }
,{tesf:"カムイ", tess:"空下", fighter_id:1620, skill_genre:10902, begin:12, end:28, time:51, base_damage:2, landing_lag:26, landing_occurrence_begin:12, landing_occurrence_end:40, detail_name:"連", rehit:2, tes_val:"連", }
,{tesf:"カムイ", tess:"空下", fighter_id:1620, skill_genre:10902, begin:1, end:5, time:51, base_damage:3, landing_lag:26, landing_occurrence_begin:12, landing_occurrence_end:40, is_landing_attack:true, tes_val:"着地", }
,{tess:"その場投げ", fighter_id:1620 , skill_genre:10200, base_damage:0,begin:7, end:8, time:36,}
,{tess:"ダッシュ投げ", fighter_id:1620 , skill_genre:10201, base_damage:0,begin:10, end:11, time:44,}
,{tess:"ふりむき投げ", fighter_id:1620 , skill_genre:10202, base_damage:0,begin:11, end:12, time:39,}
, {tesf:"ベヨネッタ", tess:"弱攻撃", fighter_id:1630, skill_genre:10300, begin:9, end:12, time:31, base_damage:1.4, alias:"弱1", tes_val:"弱1", }
,{tesf:"ベヨネッタ", tess:"弱攻撃", fighter_id:1630, skill_genre:10300, begin:7, end:8, time:31, base_damage:1.4, alias:"弱2", tes_val:"弱2", }
,{tesf:"ベヨネッタ", tess:"弱攻撃", fighter_id:1630, skill_genre:10300, begin:7, end:8, time:39, base_damage:2.2, alias:"弱3", tes_val:"弱3", }
,{tesf:"ベヨネッタ", tess:"弱攻撃", fighter_id:1630, skill_genre:10300, begin:7, end:8, time:3, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"ベヨネッタ", tess:"弱攻撃", fighter_id:1630, skill_genre:10300, begin:3, end:3, time:16, base_damage:0.2, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 7, 11, 15", tes_val:"百裂, 連", correction:15}
,{tesf:"ベヨネッタ", tess:"弱攻撃", fighter_id:1630, skill_genre:10300, begin:4, end:5, time:62, base_damage:0.5, alias:"百裂〆", persistence_num:9, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"百裂, 〆, Hit 1", }
,{tesf:"ベヨネッタ", tess:"弱攻撃", fighter_id:1630, skill_genre:10300, begin:11, end:12, time:62, base_damage:6, alias:"百裂〆", persistence_num:9, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"百裂, 〆, Hit 2", }
,{tesf:"ベヨネッタ", tess:"ダッシュ攻撃", fighter_id:1630, skill_genre:10400, begin:15, end:20, time:42, base_damage:10, tes_val:"", }
,{tesf:"ベヨネッタ", tess:"ダッシュ攻撃", fighter_id:1630, skill_genre:10400, begin:21, end:26, time:42, base_damage:8, persistence_num:1, tes_val:"持続", }
,{tesf:"ベヨネッタ", tess:"横強", fighter_id:1630, skill_genre:10501, begin:12, end:12, time:31, base_damage:3, alias:"横強1", defend_position:"ground", tes_val:"横強1, 対地", }
,{tesf:"ベヨネッタ", tess:"横強", fighter_id:1630, skill_genre:10501, begin:12, end:12, time:31, base_damage:3, alias:"横強1", defend_position:"air", tes_val:"横強1, 対空", }
,{tesf:"ベヨネッタ", tess:"横強", fighter_id:1630, skill_genre:10501, begin:12, end:12, time:39, base_damage:3, alias:"横強2", tes_val:"横強2", }
,{tesf:"ベヨネッタ", tess:"横強", fighter_id:1630, skill_genre:10501, begin:14, end:15, time:42, base_damage:7, tes_val:"横強3", }
,{tesf:"ベヨネッタ", tess:"上強", fighter_id:1630, skill_genre:10500, begin:9, end:11, time:31, base_damage:1.5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ベヨネッタ", tess:"上強", fighter_id:1630, skill_genre:10500, begin:12, end:13, time:31, base_damage:2, serial_num_str:"1", defend_position:"air", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 対空", }
,{tesf:"ベヨネッタ", tess:"上強", fighter_id:1630, skill_genre:10500, begin:15, end:15, time:31, base_damage:6, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ベヨネッタ", tess:"下強", fighter_id:1630, skill_genre:10502, begin:7, end:8, time:28, base_damage:6, damage_no:1, tes_val:"", }
,{tesf:"ベヨネッタ", tess:"下強", fighter_id:1630, skill_genre:10502, begin:7, end:8, time:28, base_damage:5, damage_no:2, tes_val:"", }
,{tesf:"ベヨネッタ", tess:"横スマッシュ", fighter_id:1630, skill_genre:10601, begin:17, end:19, time:66, base_damage:16, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"ベヨネッタ", tess:"横スマッシュ", fighter_id:1630, skill_genre:10601, begin:17, end:19, time:66, base_damage:14, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"ベヨネッタ", tess:"上スマッシュ", fighter_id:1630, skill_genre:10600, begin:18, end:19, time:64, base_damage:17, tes_val:"", }
,{tesf:"ベヨネッタ", tess:"上スマッシュ", fighter_id:1630, skill_genre:10600, begin:20, end:21, time:64, base_damage:16, persistence_num:1, tes_val:"持続1", }
,{tesf:"ベヨネッタ", tess:"上スマッシュ", fighter_id:1630, skill_genre:10600, begin:22, end:23, time:64, base_damage:15, persistence_num:2, tes_val:"持続2", }
,{tesf:"ベヨネッタ", tess:"下スマッシュ", fighter_id:1630, skill_genre:10602, begin:20, end:21, time:68, base_damage:5, serial_num_str:"1", defend_position:"ground_only", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 対地のみ", }
,{tesf:"ベヨネッタ", tess:"下スマッシュ", fighter_id:1630, skill_genre:10602, begin:25, end:25, time:68, base_damage:16, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ベヨネッタ", tess:"下スマッシュ", fighter_id:1630, skill_genre:10602, begin:26, end:28, time:68, base_damage:15, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続", }
, {tesf:"ベヨネッタ", tess:"空N", fighter_id:1630, skill_genre:10904, begin:9, end:17, time:32, base_damage:8, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:33, tes_val:"", }
,{tesf:"ベヨネッタ", tess:"空N", fighter_id:1630, skill_genre:10904, begin:18, end:25, time:32, base_damage:6, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:33, persistence_num:1, tes_val:"持続", }
,{tesf:"ベヨネッタ", tess:"空N", fighter_id:1630, skill_genre:10904, begin:26, end:36, time:42, base_damage:3, landing_lag:18, landing_occurrence_begin:1, landing_occurrence_end:44, detail_name:"派生1", tes_val:"派生1", }
,{tesf:"ベヨネッタ", tess:"空N", fighter_id:1630, skill_genre:10904, begin:26, end:46, time:52, base_damage:0, landing_lag:18, landing_occurrence_begin:1, landing_occurrence_end:54, detail_name:"派生2", tes_val:"派生2", }
,{tesf:"ベヨネッタ", tess:"空N", fighter_id:1630, skill_genre:10904, begin:26, end:56, time:62, base_damage:0, landing_lag:18, landing_occurrence_begin:1, landing_occurrence_end:64, detail_name:"派生3", tes_val:"派生3", }
,{tesf:"ベヨネッタ", tess:"空N", fighter_id:1630, skill_genre:10904, begin:26, end:66, time:72, base_damage:0, landing_lag:18, landing_occurrence_begin:1, landing_occurrence_end:74, detail_name:"派生4", tes_val:"派生4", }
,{tesf:"ベヨネッタ", tess:"空前", fighter_id:1630, skill_genre:10901, begin:7, end:9, time:37, base_damage:4, landing_lag:12, landing_occurrence_begin:3, landing_occurrence_end:29, alias:"空前1", tes_val:"空前1", }
,{tesf:"ベヨネッタ", tess:"空前", fighter_id:1630, skill_genre:10901, begin:7, end:9, time:39, base_damage:3.3, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:31, alias:"空前2", tes_val:"空前2", }
,{tesf:"ベヨネッタ", tess:"空前", fighter_id:1630, skill_genre:10901, begin:12, end:15, time:46, base_damage:7, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:34, alias:"空前3", tes_val:"空前3", }
,{tesf:"ベヨネッタ", tess:"空後", fighter_id:1630, skill_genre:10903, begin:11, end:14, time:34, base_damage:13, landing_lag:10, landing_occurrence_begin:2, landing_occurrence_end:28, damage_no:1, tes_val:"", }
,{tesf:"ベヨネッタ", tess:"空後", fighter_id:1630, skill_genre:10903, begin:11, end:14, time:34, base_damage:10, landing_lag:10, landing_occurrence_begin:2, landing_occurrence_end:28, damage_no:2, tes_val:"", }
,{tesf:"ベヨネッタ", tess:"空上", fighter_id:1630, skill_genre:10900, begin:9, end:18, time:29, base_damage:7.5, landing_lag:8, landing_occurrence_begin:3, landing_occurrence_end:25, tes_val:"", }
,{tesf:"ベヨネッタ", tess:"空上", fighter_id:1630, skill_genre:10900, begin:21, end:32, time:40, base_damage:3, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:37, detail_name:"派生1", tes_val:"派生1", }
,{tesf:"ベヨネッタ", tess:"空上", fighter_id:1630, skill_genre:10900, begin:21, end:43, time:51, base_damage:0, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:48, detail_name:"派生2", tes_val:"派生2", }
,{tesf:"ベヨネッタ", tess:"空上", fighter_id:1630, skill_genre:10900, begin:21, end:54, time:62, base_damage:0, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:59, detail_name:"派生3", tes_val:"派生3", }
,{tesf:"ベヨネッタ", tess:"空上", fighter_id:1630, skill_genre:10900, begin:21, end:65, time:73, base_damage:0, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:70, detail_name:"派生4", tes_val:"派生4", }
,{tesf:"ベヨネッタ", tess:"空下", fighter_id:1630, skill_genre:10902, begin:18, end:24, time:52, base_damage:9, landing_lag:30, landing_occurrence_begin:17, landing_occurrence_end:49, damage_no:1, tes_val:"", }
,{tesf:"ベヨネッタ", tess:"空下", fighter_id:1630, skill_genre:10902, begin:18, end:24, time:52, base_damage:8, landing_lag:30, landing_occurrence_begin:17, landing_occurrence_end:49, damage_no:2, tes_val:"", }
,{tesf:"ベヨネッタ", tess:"空下", fighter_id:1630, skill_genre:10902, begin:18, end:24, time:52, base_damage:7, landing_lag:30, landing_occurrence_begin:17, landing_occurrence_end:49, damage_no:3, tes_val:"", }
,{tesf:"ベヨネッタ", tess:"空下", fighter_id:1630, skill_genre:10902, begin:25, end:35, time:52, base_damage:9, landing_lag:30, landing_occurrence_begin:17, landing_occurrence_end:49, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"ベヨネッタ", tess:"空下", fighter_id:1630, skill_genre:10902, begin:25, end:35, time:52, base_damage:8, landing_lag:30, landing_occurrence_begin:17, landing_occurrence_end:49, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"ベヨネッタ", tess:"空下", fighter_id:1630, skill_genre:10902, begin:25, end:35, time:52, base_damage:7, landing_lag:30, landing_occurrence_begin:17, landing_occurrence_end:49, damage_no:3, persistence_num:1, tes_val:"持続", }
,{tesf:"ベヨネッタ", tess:"空下", fighter_id:1630, skill_genre:10902, begin:1, end:2, time:52, base_damage:5, landing_lag:30, landing_occurrence_begin:17, landing_occurrence_end:49, is_landing_attack:true, tes_val:"着地", }
,{tess:"その場投げ", fighter_id:1630 , skill_genre:10200, base_damage:0,begin:7, end:8, time:37,}
,{tess:"ダッシュ投げ", fighter_id:1630 , skill_genre:10201, base_damage:0,begin:10, end:11, time:45,}
,{tess:"ふりむき投げ", fighter_id:1630 , skill_genre:10202, base_damage:0,begin:11, end:12, time:40,}
, {tesf:"リドリー", tess:"弱攻撃", fighter_id:1650, skill_genre:10300, begin:4, end:5, time:23, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"リドリー", tess:"弱攻撃", fighter_id:1650, skill_genre:10300, begin:5, end:6, time:26, base_damage:1.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"リドリー", tess:"弱攻撃", fighter_id:1650, skill_genre:10300, begin:4, end:5, time:35, base_damage:5, alias:"弱3", tes_val:"弱3", }
,{tesf:"リドリー", tess:"弱攻撃", fighter_id:1650, skill_genre:10300, begin:4, end:5, time:1, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"リドリー", tess:"弱攻撃", fighter_id:1650, skill_genre:10300, begin:3, end:3, time:19, base_damage:0.7, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 6, 9,12, 15, 18", tes_val:"百裂, 連",correction:5 }
,{tesf:"リドリー", tess:"弱攻撃", fighter_id:1650, skill_genre:10300, begin:4, end:5, time:45, base_damage:2, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"リドリー", tess:"ダッシュ攻撃", fighter_id:1650, skill_genre:10400, begin:12, end:13, time:39, base_damage:12, tes_val:"", }
,{tesf:"リドリー", tess:"横強", fighter_id:1650, skill_genre:10501, begin:10, end:11, time:32, base_damage:13, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"リドリー", tess:"横強", fighter_id:1650, skill_genre:10501, begin:10, end:11, time:32, base_damage:10, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"リドリー", tess:"上強", fighter_id:1650, skill_genre:10500, begin:8, end:12, time:29, base_damage:9, damage_no:1, tes_val:"", }
,{tesf:"リドリー", tess:"上強", fighter_id:1650, skill_genre:10500, begin:8, end:12, time:29, base_damage:7, damage_no:2, tes_val:"", }
,{tesf:"リドリー", tess:"下強", fighter_id:1650, skill_genre:10502, begin:9, end:11, time:30, base_damage:9, damage_no:1, tes_val:"", }
,{tesf:"リドリー", tess:"下強", fighter_id:1650, skill_genre:10502, begin:9, end:11, time:30, base_damage:6, damage_no:2, tes_val:"", }
,{tesf:"リドリー", tess:"横スマッシュ", fighter_id:1650, skill_genre:10601, begin:18, end:21, time:53, base_damage:20, tes_val:"", }
,{tesf:"リドリー", tess:"上スマッシュ", fighter_id:1650, skill_genre:10600, begin:12, end:17, time:47, base_damage:17, tes_val:"", }
,{tesf:"リドリー", tess:"下スマッシュ", fighter_id:1650, skill_genre:10602, begin:24, end:27, time:57, base_damage:16, tes_val:"", }
, {tesf:"リドリー", tess:"空N", fighter_id:1650, skill_genre:10904, begin:8, end:14, time:39, base_damage:12, landing_lag:12, landing_occurrence_begin:3, landing_occurrence_end:27, damage_no:1, tes_val:"", }
,{tesf:"リドリー", tess:"空N", fighter_id:1650, skill_genre:10904, begin:8, end:14, time:39, base_damage:9, landing_lag:12, landing_occurrence_begin:3, landing_occurrence_end:27, damage_no:2, tes_val:"", }
,{tesf:"リドリー", tess:"空N", fighter_id:1650, skill_genre:10904, begin:15, end:20, time:39, base_damage:8, landing_lag:12, landing_occurrence_begin:3, landing_occurrence_end:27, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"リドリー", tess:"空N", fighter_id:1650, skill_genre:10904, begin:15, end:20, time:39, base_damage:5, landing_lag:12, landing_occurrence_begin:3, landing_occurrence_end:27, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"リドリー", tess:"空前", fighter_id:1650, skill_genre:10901, begin:10, end:11, time:41, base_damage:5, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:42, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リドリー", tess:"空前", fighter_id:1650, skill_genre:10901, begin:10, end:11, time:41, base_damage:3, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:42, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リドリー", tess:"空前", fighter_id:1650, skill_genre:10901, begin:13, end:14, time:41, base_damage:5, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:42, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"リドリー", tess:"空前", fighter_id:1650, skill_genre:10901, begin:13, end:14, time:41, base_damage:3, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:42, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"リドリー", tess:"空前", fighter_id:1650, skill_genre:10901, begin:16, end:17, time:41, base_damage:7, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:42, damage_no:1, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"リドリー", tess:"空前", fighter_id:1650, skill_genre:10901, begin:16, end:17, time:41, base_damage:5, landing_lag:16, landing_occurrence_begin:3, landing_occurrence_end:42, damage_no:2, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"リドリー", tess:"空後", fighter_id:1650, skill_genre:10903, begin:10, end:12, time:43, base_damage:16, landing_lag:17, landing_occurrence_begin:1, landing_occurrence_end:37, tes_val:"", }
,{tesf:"リドリー", tess:"空上", fighter_id:1650, skill_genre:10900, begin:11, end:12, time:39, base_damage:14, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:34, damage_no:1, tes_val:"", }
,{tesf:"リドリー", tess:"空上", fighter_id:1650, skill_genre:10900, begin:11, end:12, time:39, base_damage:12, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:34, damage_no:2, tes_val:"", }
,{tesf:"リドリー", tess:"空上", fighter_id:1650, skill_genre:10900, begin:13, end:13, time:39, base_damage:12, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:34, persistence_num:1, tes_val:"持続", }
,{tesf:"リドリー", tess:"空下", fighter_id:1650, skill_genre:10902, begin:11, end:18, time:55, base_damage:14, landing_lag:32, landing_occurrence_begin:4, landing_occurrence_end:49, tes_val:"メテオ", }
,{tesf:"リドリー", tess:"空下", fighter_id:1650, skill_genre:10902, begin:11, end:40, time:55, base_damage:12, landing_lag:32, landing_occurrence_begin:4, landing_occurrence_end:49, persistence_num:1, tes_val:"持続", }
,{tess:"その場投げ", fighter_id:1650 , skill_genre:10200, base_damage:0,begin:8, end:10, time:34,}
,{tess:"ダッシュ投げ", fighter_id:1650 , skill_genre:10201, base_damage:0,begin:11, end:13, time:42,}
,{tess:"ふりむき投げ", fighter_id:1650 , skill_genre:10202, base_damage:0,begin:12, end:14, time:39,}
, {tesf:"キングクルール", tess:"弱攻撃", fighter_id:1670, skill_genre:10300, begin:4, end:5, time:24, base_damage:2.5, alias:"弱1", tes_val:"弱1", }
,{tesf:"キングクルール", tess:"弱攻撃", fighter_id:1670, skill_genre:10300, begin:4, end:5, time:15, base_damage:2.5, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"キングクルール", tess:"弱攻撃", fighter_id:1670, skill_genre:10300, begin:3, end:4, time:27, base_damage:2.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"キングクルール", tess:"弱攻撃", fighter_id:1670, skill_genre:10300, begin:5, end:8, time:33, base_damage:7, alias:"弱3", tes_val:"弱3", }
,{tesf:"キングクルール", tess:"ダッシュ攻撃", fighter_id:1670, skill_genre:10400, begin:7, end:11, time:60, base_damage:15, tes_val:"", }
,{tesf:"キングクルール", tess:"ダッシュ攻撃", fighter_id:1670, skill_genre:10400, begin:12, end:25, time:60, base_damage:11, persistence_num:1, tes_val:"持続", }
,{tesf:"キングクルール", tess:"横強", fighter_id:1670, skill_genre:10501, begin:12, end:13, time:42, base_damage:13, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"キングクルール", tess:"横強", fighter_id:1670, skill_genre:10501, begin:12, end:13, time:42, base_damage:11, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"キングクルール", tess:"上強", fighter_id:1670, skill_genre:10500, begin:5, end:6, time:37, base_damage:11.5, tes_val:"", }
,{tesf:"キングクルール", tess:"上強", fighter_id:1670, skill_genre:10500, begin:7, end:13, time:37, base_damage:8.2, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"キングクルール", tess:"上強", fighter_id:1670, skill_genre:10500, begin:7, end:13, time:37, base_damage:6.8, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"キングクルール", tess:"下強", fighter_id:1670, skill_genre:10502, begin:13, end:13, time:42, base_damage:13, serial_num_str:"1", defend_position:"air_only", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 対空のみ", }
,{tesf:"キングクルール", tess:"下強", fighter_id:1670, skill_genre:10502, begin:14, end:15, time:42, base_damage:8, damage_no:1, serial_num_str:"2", defend_position:"ground_only", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 対地のみ", }
,{tesf:"キングクルール", tess:"下強", fighter_id:1670, skill_genre:10502, begin:14, end:15, time:42, base_damage:7, damage_no:2, serial_num_str:"2", defend_position:"ground_only", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 対地のみ", }
,{tesf:"キングクルール", tess:"下強", fighter_id:1670, skill_genre:10502, begin:14, end:15, time:42, base_damage:10, serial_num_str:"2", defend_position:"air_only", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 対空のみ", }
,{tesf:"キングクルール", tess:"横スマッシュ", fighter_id:1670, skill_genre:10601, begin:19, end:20, time:61, base_damage:19.95, damage_no:1, shift:"up", tes_val:"上シフト", }
,{tesf:"キングクルール", tess:"横スマッシュ", fighter_id:1670, skill_genre:10601, begin:19, end:20, time:61, base_damage:17.325, damage_no:2, shift:"up", tes_val:"上シフト", }
,{tesf:"キングクルール", tess:"横スマッシュ", fighter_id:1670, skill_genre:10601, begin:19, end:20, time:61, base_damage:19, damage_no:1, tes_val:"無シフト", }
,{tesf:"キングクルール", tess:"横スマッシュ", fighter_id:1670, skill_genre:10601, begin:19, end:20, time:61, base_damage:16.5, damage_no:2, tes_val:"無シフト", }
,{tesf:"キングクルール", tess:"横スマッシュ", fighter_id:1670, skill_genre:10601, begin:19, end:20, time:61, base_damage:19.57, damage_no:1, shift:"under", tes_val:"下シフト", }
,{tesf:"キングクルール", tess:"横スマッシュ", fighter_id:1670, skill_genre:10601, begin:19, end:20, time:61, base_damage:16.995, damage_no:2, shift:"under", tes_val:"下シフト", }
,{tesf:"キングクルール", tess:"上スマッシュ", fighter_id:1670, skill_genre:10600, begin:6, end:9, time:71, base_damage:15, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"キングクルール", tess:"上スマッシュ", fighter_id:1670, skill_genre:10600, begin:10, end:11, time:71, base_damage:8, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"キングクルール", tess:"上スマッシュ", fighter_id:1670, skill_genre:10600, begin:19, end:19, time:71, base_damage:8, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"キングクルール", tess:"上スマッシュ", fighter_id:1670, skill_genre:10600, begin:20, end:20, time:71, base_damage:3, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続", }
,{tesf:"キングクルール", tess:"上スマッシュ", fighter_id:1670, skill_genre:10600, begin:21, end:21, time:71, base_damage:3, persistence_num:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続2", }
,{tesf:"キングクルール", tess:"上スマッシュ", fighter_id:1670, skill_genre:10600, begin:22, end:23, time:71, base_damage:10, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"キングクルール", tess:"下スマッシュ", fighter_id:1670, skill_genre:10602, begin:22, end:24, time:63, base_damage:18, tes_val:"", }
,{tesf:"キングクルール", tess:"下スマッシュ", fighter_id:1670, skill_genre:10602, begin:25, end:25, time:63, base_damage:4, alias:"衝撃", defend_position:"ground_only", tes_val:"衝撃, 対地のみ", }
,{tesf:"キングクルール", tess:"横アピール", fighter_id:1670, skill_genre:11101, begin:25, end:25, time:49, base_damage:0, tes_val:"", }
, {tesf:"キングクルール", tess:"空N", fighter_id:1670, skill_genre:10904, begin:7, end:8, time:45, base_damage:12, landing_lag:9, landing_occurrence_begin:4, landing_occurrence_end:39, tes_val:"", }
,{tesf:"キングクルール", tess:"空N", fighter_id:1670, skill_genre:10904, begin:9, end:30, time:45, base_damage:8, landing_lag:9, landing_occurrence_begin:4, landing_occurrence_end:39, persistence_num:1, tes_val:"持続", }
,{tesf:"キングクルール", tess:"空前", fighter_id:1670, skill_genre:10901, begin:11, end:11, time:57, base_damage:15.5, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:39, damage_no:1, detail_name:"本当て1", tes_val:"本当て1", }
,{tesf:"キングクルール", tess:"空前", fighter_id:1670, skill_genre:10901, begin:11, end:11, time:57, base_damage:13.5, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:39, damage_no:2, detail_name:"本当て1", tes_val:"本当て1", }
,{tesf:"キングクルール", tess:"空前", fighter_id:1670, skill_genre:10901, begin:12, end:14, time:57, base_damage:15.5, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:39, damage_no:1, detail_name:"本当て2", tes_val:"本当て2", }
,{tesf:"キングクルール", tess:"空前", fighter_id:1670, skill_genre:10901, begin:12, end:14, time:57, base_damage:13.5, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:39, damage_no:2, detail_name:"本当て2", tes_val:"本当て2", }
,{tesf:"キングクルール", tess:"空前", fighter_id:1670, skill_genre:10901, begin:14, end:17, time:57, base_damage:10, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:39, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"キングクルール", tess:"空前", fighter_id:1670, skill_genre:10901, begin:14, end:17, time:57, base_damage:8, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:39, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"キングクルール", tess:"空後", fighter_id:1670, skill_genre:10903, begin:18, end:20, time:59, base_damage:19, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:49, damage_no:1, tes_val:"", }
,{tesf:"キングクルール", tess:"空後", fighter_id:1670, skill_genre:10903, begin:18, end:20, time:59, base_damage:14.5, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:49, damage_no:2, tes_val:"", }
,{tesf:"キングクルール", tess:"空上", fighter_id:1670, skill_genre:10900, begin:7, end:13, time:71, base_damage:14, landing_lag:13, landing_occurrence_begin:3, landing_occurrence_end:69, tes_val:"", }
,{tesf:"キングクルール", tess:"空上", fighter_id:1670, skill_genre:10900, begin:14, end:19, time:71, base_damage:10, landing_lag:13, landing_occurrence_begin:3, landing_occurrence_end:69, persistence_num:1, tes_val:"持続", }
,{tesf:"キングクルール", tess:"空下", fighter_id:1670, skill_genre:10902, begin:14, end:15, time:61, base_damage:12, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:39, tes_val:"", }
,{tesf:"キングクルール", tess:"空下", fighter_id:1670, skill_genre:10902, begin:16, end:21, time:61, base_damage:9, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:39, persistence_num:1, tes_val:"持続", }
,{tess:"その場投げ", fighter_id:1670 , skill_genre:10200, base_damage:0,begin:8, end:10, time:40,}
,{tess:"ダッシュ投げ", fighter_id:1670 , skill_genre:10201, base_damage:0,begin:11, end:13, time:48,}
,{tess:"ふりむき投げ", fighter_id:1670 , skill_genre:10202, base_damage:0,begin:12, end:14, time:43,}
, {tesf:"しずえ", tess:"弱攻撃", fighter_id:1680, skill_genre:10300, begin:3, end:4, time:19, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"しずえ", tess:"弱攻撃", fighter_id:1680, skill_genre:10300, begin:3, end:4, time:12, base_damage:2, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"しずえ", tess:"ダッシュ攻撃",is_item_throw:true, fighter_id:1680, skill_genre:10400, begin:9, end:14, time:41, base_damage:10, tes_val:"", }
,{tesf:"しずえ", tess:"ダッシュ攻撃",is_item_throw:true, fighter_id:1680, skill_genre:10400, begin:15, end:21, time:41, base_damage:6, persistence_num:1, tes_val:"持続", }
,{tesf:"しずえ", tess:"横強", fighter_id:1680, skill_genre:10501, begin:8, end:11, time:36, base_damage:9, tes_val:"", }
,{tesf:"しずえ", tess:"上強", fighter_id:1680, skill_genre:10500, begin:6, end:13, time:32, base_damage:8, tes_val:"", }
,{tesf:"しずえ", tess:"下強", fighter_id:1680, skill_genre:10502, begin:9, end:10, time:34, base_damage:13, damage_no:1, tes_val:"", }
,{tesf:"しずえ", tess:"下強", fighter_id:1680, skill_genre:10502, begin:9, end:10, time:34, base_damage:8, damage_no:2, tes_val:"", }
,{tesf:"しずえ", tess:"横スマッシュ", fighter_id:1680, skill_genre:10601, begin:14, end:15, time:45, base_damage:17, tes_val:"", }
,{tesf:"しずえ", tess:"横スマッシュ", fighter_id:1680, skill_genre:10601, begin:16, end:19, time:45, base_damage:8, persistence_num:1, tes_val:"持続", }
,{tesf:"しずえ", tess:"上スマッシュ", fighter_id:1680, skill_genre:10600, begin:11, end:12, time:47, base_damage:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"しずえ", tess:"上スマッシュ", fighter_id:1680, skill_genre:10600, begin:16, end:18, time:47, base_damage:12, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"しずえ", tess:"上スマッシュ", fighter_id:1680, skill_genre:10600, begin:19, end:20, time:47, base_damage:10, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続", }
,{tesf:"しずえ", tess:"下スマッシュ", fighter_id:1680, skill_genre:10602, begin:8, end:9, time:43, base_damage:10, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"しずえ", tess:"下スマッシュ", fighter_id:1680, skill_genre:10602, begin:12, end:13, time:43, base_damage:8, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"しずえ", tess:"空N", fighter_id:1680, skill_genre:10904, begin:5, end:7, time:33, base_damage:10, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:33, tes_val:"", }
,{tesf:"しずえ", tess:"空N", fighter_id:1680, skill_genre:10904, begin:8, end:25, time:33, base_damage:6, landing_lag:6, landing_occurrence_begin:3, landing_occurrence_end:33, persistence_num:1, tes_val:"持続", }
,{tesf:"しずえ", tess:"空前",is_item_throw:true, fighter_id:1680, skill_genre:10901, begin:10, end:12, time:39, base_damage:7, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:29, tes_val:"", }
,{tesf:"しずえ", tess:"空前",not_attack_view:"help", help_text:"弾の持続当てなので実際の硬直差は5F以下になり、遠距離のため反確は取れない。",is_item_throw:true, fighter_id:1680, skill_genre:10901, begin:13, end:18, time:39, base_damage:4, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:29, persistence_num:1, tes_val:"持続1", }
,{tesf:"しずえ", tess:"空前", not_attack_view:"help", help_text:"弾の持続当てなので実際の硬直差は5F以下になり、遠距離のため反確は取れない。",is_item_throw:true, fighter_id:1680, skill_genre:10901, begin:19, end:23, time:39, base_damage:2.5, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:29, persistence_num:2, tes_val:"持続2", }
,{tesf:"しずえ", tess:"空後", fighter_id:1680, skill_genre:10903, begin:13, end:15, time:35, base_damage:9, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:29, tes_val:"", }
,{tesf:"しずえ", tess:"空後", fighter_id:1680, skill_genre:10903, begin:16, end:21, time:35, base_damage:5, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:29, persistence_num:1, tes_val:"持続1", }
,{tesf:"しずえ", tess:"空後", fighter_id:1680, skill_genre:10903, begin:22, end:26, time:35, base_damage:3, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:29, persistence_num:2, tes_val:"持続2", }
,{tesf:"しずえ", tess:"空上", fighter_id:1680, skill_genre:10900, begin:6, end:7, time:42, base_damage:10, landing_lag:9, landing_occurrence_begin:6, landing_occurrence_end:38, tes_val:"", }
,{tesf:"しずえ", tess:"空上", fighter_id:1680, skill_genre:10900, begin:8, end:31, time:42, base_damage:5, landing_lag:9, landing_occurrence_begin:6, landing_occurrence_end:38, persistence_num:1, tes_val:"持続", }
,{tesf:"しずえ", tess:"空下", fighter_id:1680, skill_genre:10902, begin:14, end:15, time:45, base_damage:10, landing_lag:9, landing_occurrence_begin:14, landing_occurrence_end:38, tes_val:"", }
,{tesf:"しずえ", tess:"空下", fighter_id:1680, skill_genre:10902, begin:16, end:31, time:45, base_damage:5, landing_lag:9, landing_occurrence_begin:14, landing_occurrence_end:38, persistence_num:1, tes_val:"持続", }
,{tess:"その場投げ", fighter_id:1680 , skill_genre:10200, base_damage:0,begin:14, end:16, time:43,}
,{tess:"ダッシュ投げ", fighter_id:1680 , skill_genre:10201, base_damage:0,begin:15 ,end:17, time:46}
,{tess:"ふりむき投げ", fighter_id:1680 , skill_genre:10202, base_damage:0,begin:17, end:19, time:44,}
, {tesf:"ガオガエン", tess:"弱攻撃", fighter_id:1690, skill_genre:10300, begin:5, end:6, time:23, base_damage:2.5, alias:"弱1", tes_val:"弱1", }
,{tesf:"ガオガエン", tess:"弱攻撃", fighter_id:1690, skill_genre:10300, begin:4, end:5, time:31, base_damage:2.8, alias:"弱2", tes_val:"弱2", }
,{tesf:"ガオガエン", tess:"弱攻撃", fighter_id:1690, skill_genre:10300, begin:4, end:5, time:37, base_damage:6.7, alias:"弱3", tes_val:"弱3", }
,{tesf:"ガオガエン", tess:"ダッシュ攻撃", fighter_id:1690, skill_genre:10400, begin:8, end:11, time:41, base_damage:13, tes_val:"", }
,{tesf:"ガオガエン", tess:"ダッシュ攻撃", fighter_id:1690, skill_genre:10400, begin:12, end:15, time:41, base_damage:9, persistence_num:1, tes_val:"持続", }
,{tesf:"ガオガエン", tess:"横強", fighter_id:1690, skill_genre:10501, begin:12, end:14, time:36, base_damage:13, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"ガオガエン", tess:"横強", fighter_id:1690, skill_genre:10501, begin:12, end:14, time:36, base_damage:12, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"ガオガエン", tess:"上強", fighter_id:1690, skill_genre:10500, begin:6, end:11, time:34, base_damage:9, tes_val:"", }
,{tesf:"ガオガエン", tess:"下強", fighter_id:1690, skill_genre:10502, begin:9, end:11, time:29, base_damage:9, tes_val:"", }
,{tesf:"ガオガエン", tess:"横スマッシュ", fighter_id:1690, skill_genre:10601, begin:16, end:18, time:53, base_damage:20, damage_no:1, detail_name:"空振り時", tes_val:"空振り時", }
,{tesf:"ガオガエン", tess:"横スマッシュ", fighter_id:1690, skill_genre:10601, begin:16, end:18, time:53, base_damage:16, damage_no:2, detail_name:"空振り時", tes_val:"空振り時", }
,{tesf:"ガオガエン", tess:"横スマッシュ", fighter_id:1690, skill_genre:10601, begin:16, end:18, time:51, base_damage:0, detail_name:"敵ヒット時", tes_val:"敵ヒット時", }
,{tesf:"ガオガエン", tess:"上スマッシュ", fighter_id:1690, skill_genre:10600, begin:13, end:18, time:47, base_damage:17, tes_val:"", }
,{tesf:"ガオガエン", tess:"下スマッシュ", fighter_id:1690, skill_genre:10602, begin:18, end:20, time:57, base_damage:16, tes_val:"", }
, {tesf:"ガオガエン", tess:"空N", fighter_id:1690, skill_genre:10904, begin:5, end:6, time:41, base_damage:13, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:35, tes_val:"", }
,{tesf:"ガオガエン", tess:"空N", fighter_id:1690, skill_genre:10904, begin:7, end:25, time:41, base_damage:7, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:35, persistence_num:1, tes_val:"持続", }
,{tesf:"ガオガエン", tess:"空前", fighter_id:1690, skill_genre:10901, begin:8, end:10, time:44, base_damage:13, landing_lag:14, landing_occurrence_begin:7, landing_occurrence_end:45, damage_no:1, tes_val:"", }
,{tesf:"ガオガエン", tess:"空前", fighter_id:1690, skill_genre:10901, begin:8, end:10, time:44, base_damage:12, landing_lag:14, landing_occurrence_begin:7, landing_occurrence_end:45, damage_no:2, tes_val:"", }
,{tesf:"ガオガエン", tess:"空前", fighter_id:1690, skill_genre:10901, begin:11, end:14, time:44, base_damage:9.6, landing_lag:14, landing_occurrence_begin:7, landing_occurrence_end:45, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"ガオガエン", tess:"空前", fighter_id:1690, skill_genre:10901, begin:11, end:14, time:44, base_damage:9, landing_lag:14, landing_occurrence_begin:7, landing_occurrence_end:45, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"ガオガエン", tess:"空後", fighter_id:1690, skill_genre:10903, begin:7, end:10, time:41, base_damage:13, landing_lag:11, landing_occurrence_begin:6, landing_occurrence_end:35, damage_no:1, tes_val:"", }
,{tesf:"ガオガエン", tess:"空後", fighter_id:1690, skill_genre:10903, begin:7, end:10, time:41, base_damage:11, landing_lag:11, landing_occurrence_begin:6, landing_occurrence_end:35, damage_no:2, tes_val:"", }
,{tesf:"ガオガエン", tess:"空上", fighter_id:1690, skill_genre:10900, begin:7, end:11, time:31, base_damage:8, landing_lag:8, landing_occurrence_begin:6, landing_occurrence_end:25, tes_val:"", }
,{tesf:"ガオガエン", tess:"空下", fighter_id:1690, skill_genre:10902, begin:16, end:19, time:44, base_damage:15, landing_lag:16, landing_occurrence_begin:4, landing_occurrence_end:44, damage_no:1, tes_val:"", }
,{tesf:"ガオガエン", tess:"空下", fighter_id:1690, skill_genre:10902, begin:16, end:19, time:44, base_damage:14, landing_lag:16, landing_occurrence_begin:4, landing_occurrence_end:44, damage_no:2, tes_val:"", }
,{tesf:"ガオガエン", tess:"空下", fighter_id:1690, skill_genre:10902, begin:20, end:21, time:44, base_damage:9, landing_lag:16, landing_occurrence_begin:4, landing_occurrence_end:44, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"ガオガエン", tess:"空下", fighter_id:1690, skill_genre:10902, begin:20, end:21, time:44, base_damage:8, landing_lag:16, landing_occurrence_begin:4, landing_occurrence_end:44, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tess:"その場投げ", fighter_id:1690 , skill_genre:10200, base_damage:0,begin:8, end:10, time:38,}
,{tess:"ダッシュ投げ", fighter_id:1690 , skill_genre:10201, base_damage:0,begin:12, end:14, time:46,}
,{tess:"ふりむき投げ", fighter_id:1690 , skill_genre:10202, base_damage:0,begin:13, end:15, time:44,}
, {tesf:"パックンフラワー", tess:"弱攻撃", fighter_id:1700, skill_genre:10300, begin:2, end:3, time:19, base_damage:2.4, alias:"弱1", tes_val:"弱1", }
,{tesf:"パックンフラワー", tess:"弱攻撃", fighter_id:1700, skill_genre:10300, begin:2, end:3, time:6, base_damage:2.4, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"パックンフラワー", tess:"弱攻撃", fighter_id:1700, skill_genre:10300, begin:2, end:3, time:20, base_damage:2.2, alias:"弱2", tes_val:"弱2", }
,{tesf:"パックンフラワー", tess:"弱攻撃", fighter_id:1700, skill_genre:10300, begin:7, end:8, time:25, base_damage:4.4, alias:"弱3", tes_val:"弱3", }
,{tesf:"パックンフラワー", tess:"弱攻撃", fighter_id:1700, skill_genre:10300, begin:7, end:8, time:3, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"パックンフラワー", tess:"弱攻撃", fighter_id:1700, skill_genre:10300, begin:3, end:3, time:17, base_damage:0.6, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 7, 11, 15", tes_val:"百裂, 連", correction:9}
,{tesf:"パックンフラワー", tess:"弱攻撃", fighter_id:1700, skill_genre:10300, begin:6, end:7, time:39, base_damage:3.4, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"パックンフラワー", tess:"ダッシュ攻撃", fighter_id:1700, skill_genre:10400, begin:7, end:9, time:47, base_damage:10, tes_val:"", correction:1.3}
,{tesf:"パックンフラワー", tess:"ダッシュ攻撃", fighter_id:1700, skill_genre:10400, begin:10, end:14, time:47, base_damage:7, persistence_num:1, tes_val:"持続", correction:1.3}
,{tesf:"パックンフラワー", tess:"横強", fighter_id:1700, skill_genre:10501, begin:7, end:8, time:27, base_damage:5.5, alias:"横強1", tes_val:"横強1", }
,{tesf:"パックンフラワー", tess:"横強", fighter_id:1700, skill_genre:10501, begin:5, end:6, time:31, base_damage:6, alias:"横強2", tes_val:"横強2", }
,{tesf:"パックンフラワー", tess:"上強", fighter_id:1700, skill_genre:10500, begin:8, end:15, time:31, base_damage:9, damage_no:1, tes_val:"", }
,{tesf:"パックンフラワー", tess:"上強", fighter_id:1700, skill_genre:10500, begin:8, end:15, time:31, base_damage:7, damage_no:2, tes_val:"", }
,{tesf:"パックンフラワー", tess:"下強", fighter_id:1700, skill_genre:10502, begin:9, end:10, time:28, base_damage:7, damage_no:1, tes_val:"", }
,{tesf:"パックンフラワー", tess:"下強", fighter_id:1700, skill_genre:10502, begin:9, end:10, time:28, base_damage:6, damage_no:2, tes_val:"", }
,{tesf:"パックンフラワー", tess:"横スマッシュ", fighter_id:1700, skill_genre:10601, begin:16, end:17, time:51, base_damage:19, damage_no:1, tes_val:"", }
,{tesf:"パックンフラワー", tess:"横スマッシュ", fighter_id:1700, skill_genre:10601, begin:16, end:17, time:51, base_damage:15, damage_no:2, tes_val:"", }
,{tesf:"パックンフラワー", tess:"上スマッシュ", fighter_id:1700, skill_genre:10600, begin:12, end:15, time:51, base_damage:3, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"パックンフラワー", tess:"上スマッシュ", fighter_id:1700, skill_genre:10600, begin:16, end:18, time:51, base_damage:12, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"パックンフラワー", tess:"下スマッシュ", fighter_id:1700, skill_genre:10602, begin:12, end:13, time:45, base_damage:12, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"パックンフラワー", tess:"下スマッシュ", fighter_id:1700, skill_genre:10602, begin:16, end:17, time:45, base_damage:14, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"パックンフラワー", tess:"空N", fighter_id:1700, skill_genre:10904, begin:8, end:17, time:47, base_damage:2, landing_lag:15, landing_occurrence_begin:5, landing_occurrence_end:39, detail_name:"連", rehit:3, tes_val:"連", }
,{tesf:"パックンフラワー", tess:"空N", fighter_id:1700, skill_genre:10904, begin:18, end:19, time:47, base_damage:3, landing_lag:15, landing_occurrence_begin:5, landing_occurrence_end:39, persistence_num:9, tes_val:"〆", }
,{tesf:"パックンフラワー", tess:"空前", fighter_id:1700, skill_genre:10901, begin:10, end:12, time:47, base_damage:11, landing_lag:13, landing_occurrence_begin:3, landing_occurrence_end:41, damage_no:1, tes_val:"", }
,{tesf:"パックンフラワー", tess:"空前", fighter_id:1700, skill_genre:10901, begin:10, end:12, time:47, base_damage:9, landing_lag:13, landing_occurrence_begin:3, landing_occurrence_end:41, damage_no:2, tes_val:"", }
,{tesf:"パックンフラワー", tess:"空後", fighter_id:1700, skill_genre:10903, begin:14, end:15, time:61, base_damage:14.5, landing_lag:16, landing_occurrence_begin:5, landing_occurrence_end:42, tes_val:"", }
,{tesf:"パックンフラワー", tess:"空上", fighter_id:1700, skill_genre:10900, begin:7, end:9, time:38, base_damage:8, landing_lag:10, landing_occurrence_begin:2, landing_occurrence_end:21, tes_val:"", }
,{tesf:"パックンフラワー", tess:"空下", fighter_id:1700, skill_genre:10902, begin:9, end:10, time:44, base_damage:11, landing_lag:18, landing_occurrence_begin:3, landing_occurrence_end:32, tes_val:"", }
,{tesf:"パックンフラワー", tess:"空下", fighter_id:1700, skill_genre:10902, begin:11, end:14, time:44, base_damage:9, landing_lag:18, landing_occurrence_begin:3, landing_occurrence_end:32, persistence_num:1, tes_val:"持続", }
,{tess:"その場投げ", fighter_id:1700 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34,}
,{tess:"ダッシュ投げ", fighter_id:1700 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42,}
,{tess:"ふりむき投げ", fighter_id:1700 , skill_genre:10202, base_damage:0,begin:9, end:10, time:36,}
, {tesf:"ジョーカー", tess:"弱攻撃", fighter_id:1710, skill_genre:10300, begin:4, end:5, time:23, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ジョーカー", tess:"弱攻撃", fighter_id:1710, skill_genre:10300, begin:4, end:5, time:23, base_damage:0.7, alias:"弱1", detail_name:"アルセーヌ", tes_val:"弱1, アルセーヌ", }
,{tesf:"ジョーカー", tess:"弱攻撃", fighter_id:1710, skill_genre:10300, begin:3, end:4, time:23, base_damage:1.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"ジョーカー", tess:"弱攻撃", fighter_id:1710, skill_genre:10300, begin:3, end:4, time:23, base_damage:0.7, alias:"弱2", detail_name:"アルセーヌ", tes_val:"弱2, アルセーヌ", }
,{tesf:"ジョーカー", tess:"弱攻撃", fighter_id:1710, skill_genre:10300, begin:3, end:4, time:34, base_damage:4, alias:"弱3", tes_val:"弱3", }
,{tesf:"ジョーカー", tess:"弱攻撃", fighter_id:1710, skill_genre:10300, begin:3, end:4, time:34, base_damage:3.1, alias:"弱3", detail_name:"アルセーヌ", tes_val:"弱3, アルセーヌ", }
,{tesf:"ジョーカー", tess:"ダッシュ攻撃", fighter_id:1710, skill_genre:10400, begin:6, end:7, time:45, base_damage:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ジョーカー", tess:"ダッシュ攻撃", fighter_id:1710, skill_genre:10400, begin:15, end:21, time:45, base_damage:6, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ジョーカー", tess:"ダッシュ攻撃", fighter_id:1710, skill_genre:10400, begin:15, end:21, time:45, base_damage:6, detail_name:"アルセーヌ", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, アルセーヌ",correction:1.1 }
,{tesf:"ジョーカー", tess:"横強", fighter_id:1710, skill_genre:10501, begin:8, end:9, time:34, base_damage:3, serial_num_str:"1", shift:"all", tes_message:"(連続ヒットする技)", tes_val:"全シフト, Hit 1", }
,{tesf:"ジョーカー", tess:"横強", fighter_id:1710, skill_genre:10501, begin:13, end:15, time:34, base_damage:5, serial_num_str:"2", shift:"all", tes_message:"(連続ヒットする技)", tes_val:"全シフト, Hit 2", }
,{tesf:"ジョーカー", tess:"横強", fighter_id:1710, skill_genre:10501, begin:13, end:19, time:34, base_damage:5, detail_name:"アルセーヌ", serial_num_str:"2", shift:"all", tes_message:"(連続ヒットする技)", tes_val:"全シフト, Hit 2, アルセーヌ", correction:2}
,{tesf:"ジョーカー", tess:"上強", fighter_id:1710, skill_genre:10500, begin:8, end:9, time:40, base_damage:4, rehit:3, persistence_num:0, tes_val:"始", }
,{tesf:"ジョーカー", tess:"上強", fighter_id:1710, skill_genre:10500, begin:10, end:19, time:40, base_damage:1, detail_name:"連", rehit:3, tes_val:"連", }
,{tesf:"ジョーカー", tess:"上強", fighter_id:1710, skill_genre:10500, begin:20, end:23, time:40, base_damage:1, persistence_num:9, tes_val:"〆", }
,{tesf:"ジョーカー", tess:"上強", fighter_id:1710, skill_genre:10500, begin:11, end:19, time:40, base_damage:0.7, detail_name:"アルセーヌ", rehit:3, tes_val:"連, アルセーヌ", }
,{tesf:"ジョーカー", tess:"上強", fighter_id:1710, skill_genre:10500, begin:20, end:23, time:40, base_damage:3.9, detail_name:"アルセーヌ", persistence_num:9, tes_val:"〆, アルセーヌ", }
,{tesf:"ジョーカー", tess:"下強", fighter_id:1710, skill_genre:10502, begin:8, end:9, time:37, base_damage:6, tes_val:"", }
,{tesf:"ジョーカー", tess:"下強", fighter_id:1710, skill_genre:10502, begin:10, end:11, time:37, base_damage:6, persistence_num:1, tes_val:"持続1", }
,{tesf:"ジョーカー", tess:"下強", fighter_id:1710, skill_genre:10502, begin:12, end:14, time:37, base_damage:6, persistence_num:2, tes_val:"持続2", }
,{tesf:"ジョーカー", tess:"下強", fighter_id:1710, skill_genre:10502, begin:8, end:9, time:37, base_damage:7, detail_name:"アルセーヌ", tes_val:"アルセーヌ", correction:1.5}
,{tesf:"ジョーカー", tess:"下強", fighter_id:1710, skill_genre:10502, begin:10, end:11, time:37, base_damage:7, persistence_num:1, tes_val:"持続1", correction:1.5}
,{tesf:"ジョーカー", tess:"下強", fighter_id:1710, skill_genre:10502, begin:12, end:14, time:37, base_damage:7, persistence_num:2, tes_val:"持続2", correction:1.5}
,{tesf:"ジョーカー", tess:"横スマッシュ", fighter_id:1710, skill_genre:10601, begin:16, end:18, time:47, base_damage:14, tes_val:"", }
,{tesf:"ジョーカー", tess:"横スマッシュ", fighter_id:1710, skill_genre:10601, begin:16, end:19, time:47, base_damage:8, detail_name:"アルセーヌ", tes_val:"アルセーヌ",correction:1.25}
,{tesf:"ジョーカー", tess:"上スマッシュ", fighter_id:1710, skill_genre:10600, begin:10, end:14, time:51, base_damage:12, tes_val:"", }
,{tesf:"ジョーカー", tess:"上スマッシュ", fighter_id:1710, skill_genre:10600, begin:10, end:14, time:51, base_damage:5, detail_name:"アルセーヌ", tes_val:"アルセーヌ", correction:1.25}
,{tesf:"ジョーカー", tess:"下スマッシュ", fighter_id:1710, skill_genre:10602, begin:12, end:13, time:45, base_damage:12, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ジョーカー", tess:"下スマッシュ", fighter_id:1710, skill_genre:10602, begin:16, end:17, time:45, base_damage:12, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ジョーカー", tess:"下スマッシュ", fighter_id:1710, skill_genre:10602, begin:12, end:13, time:45, base_damage:6, detail_name:"アルセーヌ", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, アルセーヌ", correction:1.33}
,{tesf:"ジョーカー", tess:"下スマッシュ", fighter_id:1710, skill_genre:10602, begin:16, end:17, time:45, base_damage:6, detail_name:"アルセーヌ", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, アルセーヌ", correction:1.33}
, {tesf:"ジョーカー", tess:"空N", fighter_id:1710, skill_genre:10904, begin:12, end:27, time:54, base_damage:7, landing_lag:8, landing_occurrence_begin:5, landing_occurrence_end:47, tes_val:"", }
,{tesf:"ジョーカー", tess:"空N", fighter_id:1710, skill_genre:10904, begin:12, end:27, time:54, base_damage:4, landing_lag:8, landing_occurrence_begin:5, landing_occurrence_end:47, detail_name:"アルセーヌ", tes_val:"アルセーヌ", }
,{tesf:"ジョーカー", tess:"空前", fighter_id:1710, skill_genre:10901, begin:7, end:8, time:47, base_damage:2, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:41, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ジョーカー", tess:"空前", fighter_id:1710, skill_genre:10901, begin:12, end:14, time:47, base_damage:5, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:41, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ジョーカー", tess:"空前", fighter_id:1710, skill_genre:10901, begin:12, end:14, time:47, base_damage:8, landing_lag:12, landing_occurrence_begin:4, landing_occurrence_end:41, detail_name:"アルセーヌ", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, アルセーヌ", }
,{tesf:"ジョーカー", tess:"空後", fighter_id:1710, skill_genre:10903, begin:7, end:8, time:31, base_damage:9, landing_lag:9, landing_occurrence_begin:4, landing_occurrence_end:29, tes_val:"", }
,{tesf:"ジョーカー", tess:"空後", fighter_id:1710, skill_genre:10903, begin:7, end:8, time:31, base_damage:7, landing_lag:9, landing_occurrence_begin:4, landing_occurrence_end:29, detail_name:"アルセーヌ", tes_val:"アルセーヌ", }
,{tesf:"ジョーカー", tess:"空上", fighter_id:1710, skill_genre:10900, begin:5, end:18, time:39, base_damage:0.75, landing_lag:14, landing_occurrence_begin:5, landing_occurrence_end:39, detail_name:"連", rehit:4, tes_val:"連", }
,{tesf:"ジョーカー", tess:"空上", fighter_id:1710, skill_genre:10900, begin:20, end:21, time:39, base_damage:3, landing_lag:14, landing_occurrence_begin:5, landing_occurrence_end:39, persistence_num:9, tes_val:"〆", }
,{tesf:"ジョーカー", tess:"空上", fighter_id:1710, skill_genre:10900, begin:20, end:21, time:39, base_damage:7, landing_lag:14, landing_occurrence_begin:5, landing_occurrence_end:39, detail_name:"アルセーヌ", persistence_num:9, tes_val:"〆, アルセーヌ", }
,{tesf:"ジョーカー", tess:"空下", fighter_id:1710, skill_genre:10902, begin:13, end:16, time:46, base_damage:8, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:39, tes_val:"", }
,{tesf:"ジョーカー", tess:"空下", fighter_id:1710, skill_genre:10902, begin:15, end:16, time:46, base_damage:8, landing_lag:11, landing_occurrence_begin:4, landing_occurrence_end:39, detail_name:"アルセーヌ", tes_val:"アルセーヌ", }
,{tess:"その場投げ", fighter_id:1710 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34,}
,{tess:"ダッシュ投げ", fighter_id:1710 , skill_genre:10201, base_damage:0,begin:8, end:9, time:42,}
,{tess:"ふりむき投げ", fighter_id:1710 , skill_genre:10202, base_damage:0,begin:9, end:10, time:37,}
, {tesf:"勇者", tess:"弱攻撃", fighter_id:1720, skill_genre:10300, begin:6, end:7, time:25, base_damage:3, alias:"弱1", tes_val:"弱1", }
,{tesf:"勇者", tess:"弱攻撃", fighter_id:1720, skill_genre:10300, begin:6, end:7, time:25, base_damage:3, alias:"弱2", tes_val:"弱2", }
,{tesf:"勇者", tess:"弱攻撃", fighter_id:1720, skill_genre:10300, begin:7, end:9, time:37, base_damage:4, alias:"弱3", tes_val:"弱3", }
,{tesf:"勇者", tess:"ダッシュ攻撃", fighter_id:1720, skill_genre:10400, begin:21, end:23, time:51, base_damage:15, damage_no:1, tes_val:"", }
,{tesf:"勇者", tess:"ダッシュ攻撃", fighter_id:1720, skill_genre:10400, begin:21, end:23, time:51, base_damage:13, damage_no:2, tes_val:"", }
,{tesf:"勇者", tess:"横強", fighter_id:1720, skill_genre:10501, begin:9, end:11, time:36, base_damage:5, alias:"横強1", tes_val:"横強1", }
,{tesf:"勇者", tess:"横強", fighter_id:1720, skill_genre:10501, begin:8, end:9, time:47, base_damage:8, alias:"横強2", tes_val:"横強2", }
,{tesf:"勇者", tess:"上強", fighter_id:1720, skill_genre:10500, begin:8, end:11, time:41, base_damage:11, damage_no:1, tes_val:"", }
,{tesf:"勇者", tess:"上強", fighter_id:1720, skill_genre:10500, begin:8, end:11, time:41, base_damage:9, damage_no:2, tes_val:"", }
,{tesf:"勇者", tess:"下強", fighter_id:1720, skill_genre:10502, begin:6, end:10, time:32, base_damage:7, tes_val:"", }
,{tesf:"勇者", tess:"横スマッシュ", fighter_id:1720, skill_genre:10601, begin:17, end:19, time:65, base_damage:18, damage_no:1, tes_val:"", }
,{tesf:"勇者", tess:"横スマッシュ", fighter_id:1720, skill_genre:10601, begin:17, end:19, time:65, base_damage:16, damage_no:2, tes_val:"", }
,{tesf:"勇者", tess:"横スマッシュ", fighter_id:1720, skill_genre:10601, begin:17, end:19, time:65, base_damage:36, damage_no:1, detail_name:"会心の一撃", tes_val:"会心の一撃", }
,{tesf:"勇者", tess:"横スマッシュ", fighter_id:1720, skill_genre:10601, begin:17, end:19, time:65, base_damage:32, damage_no:2, detail_name:"会心の一撃", tes_val:"会心の一撃", }
,{tesf:"勇者", tess:"上スマッシュ", fighter_id:1720, skill_genre:10600, begin:13, end:17, time:53, base_damage:16, damage_no:1, tes_val:"", }
,{tesf:"勇者", tess:"上スマッシュ", fighter_id:1720, skill_genre:10600, begin:13, end:17, time:53, base_damage:14, damage_no:2, tes_val:"", }
,{tesf:"勇者", tess:"上スマッシュ", fighter_id:1720, skill_genre:10600, begin:13, end:17, time:53, base_damage:32, damage_no:1, detail_name:"会心の一撃", tes_val:"会心の一撃", }
,{tesf:"勇者", tess:"上スマッシュ", fighter_id:1720, skill_genre:10600, begin:13, end:17, time:53, base_damage:28, damage_no:2, detail_name:"会心の一撃", tes_val:"会心の一撃", }
,{tesf:"勇者", tess:"下スマッシュ", fighter_id:1720, skill_genre:10602, begin:9, end:10, time:55, base_damage:13, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"勇者", tess:"下スマッシュ", fighter_id:1720, skill_genre:10602, begin:9, end:10, time:55, base_damage:11, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"勇者", tess:"下スマッシュ", fighter_id:1720, skill_genre:10602, begin:9, end:10, time:55, base_damage:26, damage_no:1, detail_name:"会心の一撃", tes_val:"会心の一撃", }
,{tesf:"勇者", tess:"下スマッシュ", fighter_id:1720, skill_genre:10602, begin:9, end:10, time:55, base_damage:22, damage_no:2, detail_name:"会心の一撃", tes_val:"会心の一撃", }
,{tesf:"勇者", tess:"下スマッシュ", fighter_id:1720, skill_genre:10602, begin:20, end:21, time:55, base_damage:13, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"勇者", tess:"下スマッシュ", fighter_id:1720, skill_genre:10602, begin:20, end:21, time:55, base_damage:11, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"勇者", tess:"下スマッシュ", fighter_id:1720, skill_genre:10602, begin:20, end:21, time:55, base_damage:26, damage_no:1, detail_name:"会心の一撃", tes_val:"会心の一撃", }
,{tesf:"勇者", tess:"下スマッシュ", fighter_id:1720, skill_genre:10602, begin:20, end:21, time:55, base_damage:22, damage_no:2, detail_name:"会心の一撃", tes_val:"会心の一撃", }
, {tesf:"勇者", tess:"空N", fighter_id:1720, skill_genre:10904, begin:8, end:16, time:45, base_damage:9, landing_lag:10, landing_occurrence_begin:3, landing_occurrence_end:39, tes_val:"", }
,{tesf:"勇者", tess:"空前", fighter_id:1720, skill_genre:10901, begin:14, end:17, time:42, base_damage:12, landing_lag:12, landing_occurrence_begin:3, landing_occurrence_end:41, damage_no:1, tes_val:"", }
,{tesf:"勇者", tess:"空前", fighter_id:1720, skill_genre:10901, begin:14, end:17, time:42, base_damage:10, landing_lag:12, landing_occurrence_begin:3, landing_occurrence_end:41, damage_no:2, tes_val:"", }
,{tesf:"勇者", tess:"空後", fighter_id:1720, skill_genre:10903, begin:18, end:20, time:47, base_damage:14, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:46, damage_no:1, tes_val:"", }
,{tesf:"勇者", tess:"空後", fighter_id:1720, skill_genre:10903, begin:18, end:20, time:47, base_damage:12, landing_lag:14, landing_occurrence_begin:3, landing_occurrence_end:46, damage_no:2, tes_val:"", }
,{tesf:"勇者", tess:"空上", fighter_id:1720, skill_genre:10900, begin:6, end:10, time:32, base_damage:7, landing_lag:8, landing_occurrence_begin:2, landing_occurrence_end:29, tes_val:"", }
,{tesf:"勇者", tess:"空下", fighter_id:1720, skill_genre:10902, begin:16, end:18, time:62, base_damage:16, landing_lag:18, landing_occurrence_begin:3, landing_occurrence_end:44, tes_val:"メテオ", }
,{tesf:"勇者", tess:"空下", fighter_id:1720, skill_genre:10902, begin:19, end:24, time:62, base_damage:10, landing_lag:18, landing_occurrence_begin:3, landing_occurrence_end:44, persistence_num:1, tes_val:"持続", }
,{tess:"その場投げ", fighter_id:1720 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34,}
,{tess:"ダッシュ投げ", fighter_id:1720 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42,}
,{tess:"ふりむき投げ", fighter_id:1720 , skill_genre:10202, base_damage:0,begin:10, end:11, time:37,}
, {tesf:"バンジョー&カズーイ", tess:"弱攻撃", fighter_id:1730, skill_genre:10300, begin:4, end:6, time:27, base_damage:2.2, alias:"弱1", tes_val:"弱1", }
,{tesf:"バンジョー&カズーイ", tess:"弱攻撃", fighter_id:1730, skill_genre:10300, begin:4, end:6, time:24, base_damage:2.2, alias:"弱2", tes_val:"弱2", }
,{tesf:"バンジョー&カズーイ", tess:"弱攻撃", fighter_id:1730, skill_genre:10300, begin:5, end:7, time:31, base_damage:3.8, alias:"弱3", tes_val:"弱3", }
,{tesf:"バンジョー&カズーイ", tess:"弱攻撃", fighter_id:1730, skill_genre:10300, begin:5, end:7, time:3, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"バンジョー&カズーイ", tess:"弱攻撃", fighter_id:1730, skill_genre:10300, begin:2, end:2, time:16, base_damage:0.4, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"2, 4, 6, 8, 10, 12, 14, 16", tes_val:"百裂, 連", correction:6}
,{tesf:"バンジョー&カズーイ", tess:"弱攻撃", fighter_id:1730, skill_genre:10300, begin:7, end:8, time:41, base_damage:1.6, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"バンジョー&カズーイ", tess:"ダッシュ攻撃", fighter_id:1730, skill_genre:10400, begin:9, end:12, time:36, base_damage:12, tes_val:"", }
,{tesf:"バンジョー&カズーイ", tess:"ダッシュ攻撃", fighter_id:1730, skill_genre:10400, begin:13, end:20, time:36, base_damage:8, persistence_num:1, tes_val:"持続", }
,{tesf:"バンジョー&カズーイ", tess:"横強", fighter_id:1730, skill_genre:10501, begin:7, end:9, time:28, base_damage:9, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"バンジョー&カズーイ", tess:"横強", fighter_id:1730, skill_genre:10501, begin:7, end:9, time:28, base_damage:7, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"バンジョー&カズーイ", tess:"上強", fighter_id:1730, skill_genre:10500, begin:11, end:14, time:31, base_damage:10, tes_val:"", }
,{tesf:"バンジョー&カズーイ", tess:"下強", fighter_id:1730, skill_genre:10502, begin:12, end:17, time:37, base_damage:6, damage_no:1, tes_val:"", }
,{tesf:"バンジョー&カズーイ", tess:"下強", fighter_id:1730, skill_genre:10502, begin:12, end:17, time:37, base_damage:5, damage_no:2, tes_val:"", }
,{tesf:"バンジョー&カズーイ", tess:"下強", fighter_id:1730, skill_genre:10502, begin:18, end:21, time:37, base_damage:4, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"バンジョー&カズーイ", tess:"下強", fighter_id:1730, skill_genre:10502, begin:18, end:21, time:37, base_damage:3, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"バンジョー&カズーイ", tess:"横スマッシュ", fighter_id:1730, skill_genre:10601, begin:19, end:21, time:52, base_damage:16, tes_val:"", }
,{tesf:"バンジョー&カズーイ", tess:"上スマッシュ", fighter_id:1730, skill_genre:10600, begin:9, end:10, time:65, base_damage:1, persistence_num:0, defend_position:"ground_only", tes_val:"始, 対地のみ", }
,{tesf:"バンジョー&カズーイ", tess:"上スマッシュ", fighter_id:1730, skill_genre:10600, begin:13, end:25, time:65, base_damage:1.5, detail_name:"連", rehit:2, tes_val:"連", }
,{tesf:"バンジョー&カズーイ", tess:"上スマッシュ", fighter_id:1730, skill_genre:10600, begin:26, end:27, time:65, base_damage:3.6, persistence_num:9, tes_val:"〆", }
,{tesf:"バンジョー&カズーイ", tess:"下スマッシュ", fighter_id:1730, skill_genre:10602, begin:13, end:17, time:46, base_damage:15, tes_val:"", }
, {tesf:"バンジョー&カズーイ", tess:"空N", fighter_id:1730, skill_genre:10904, begin:10, end:11, time:47, base_damage:0.8, landing_lag:16, landing_occurrence_begin:10, landing_occurrence_end:38, serial_num_str:"1-7", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"10-11, 13-14,16-17, 19-20, 22-23, 25-26,28-29", tes_val:"Hit 1-7", }
,{tesf:"バンジョー&カズーイ", tess:"空N", fighter_id:1730, skill_genre:10904, begin:31, end:32, time:47, base_damage:4.2, landing_lag:16, landing_occurrence_begin:10, landing_occurrence_end:38, serial_num_str:"8", tes_message:"(連続ヒットする技)", tes_val:"Hit 8", }
,{tesf:"バンジョー&カズーイ", tess:"空前", fighter_id:1730, skill_genre:10901, begin:15, end:17, time:51, base_damage:15, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:36, tes_val:"", }
,{tesf:"バンジョー&カズーイ", tess:"空前", fighter_id:1730, skill_genre:10901, begin:18, end:18, time:51, base_damage:12, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:36, persistence_num:1, tes_val:"持続", }
,{tesf:"バンジョー&カズーイ", tess:"空後", fighter_id:1730, skill_genre:10903, begin:8, end:9, time:43, base_damage:1.6, landing_lag:18, landing_occurrence_begin:8, landing_occurrence_end:36, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"バンジョー&カズーイ", tess:"空後", fighter_id:1730, skill_genre:10903, begin:12, end:13, time:43, base_damage:1.6, landing_lag:18, landing_occurrence_begin:8, landing_occurrence_end:36, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"バンジョー&カズーイ", tess:"空後", fighter_id:1730, skill_genre:10903, begin:16, end:17, time:43, base_damage:4.8, landing_lag:18, landing_occurrence_begin:8, landing_occurrence_end:36, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"バンジョー&カズーイ", tess:"空上", fighter_id:1730, skill_genre:10900, begin:7, end:8, time:33, base_damage:1.6, landing_lag:12, landing_occurrence_begin:2, landing_occurrence_end:29, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"バンジョー&カズーイ", tess:"空上", fighter_id:1730, skill_genre:10900, begin:9, end:11, time:33, base_damage:5.8, landing_lag:12, landing_occurrence_begin:2, landing_occurrence_end:29, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"バンジョー&カズーイ", tess:"空下", fighter_id:1730, skill_genre:10902, begin:15, end:17, time:56, base_damage:10, landing_lag:27, landing_occurrence_begin:3, landing_occurrence_end:54, tes_val:"メテオ", }
,{tesf:"バンジョー&カズーイ", tess:"空下", fighter_id:1730, skill_genre:10902, begin:18, end:45, time:56, base_damage:10, landing_lag:27, landing_occurrence_begin:3, landing_occurrence_end:54, persistence_num:1, tes_val:"持続", }
,{tesf:"バンジョー&カズーイ", tess:"空下", fighter_id:1730, skill_genre:10902, begin:1, end:3, time:56, base_damage:2, landing_lag:27, landing_occurrence_begin:3, landing_occurrence_end:54, is_landing_attack:true, tes_val:"着地", }
,{tess:"その場投げ", fighter_id:1730 , skill_genre:10200, base_damage:0,begin:7, end:8, time:36,}
,{tess:"ダッシュ投げ", fighter_id:1730 , skill_genre:10201, base_damage:0,begin:10, end:11, time:44,}
,{tess:"ふりむき投げ", fighter_id:1730 , skill_genre:10202, base_damage:0,begin:11, end:12, time:39,}
, {tesf:"テリー", tess:"弱攻撃", fighter_id:1740, skill_genre:10300, begin:3, end:4, time:13, base_damage:3, alias:"弱1", tes_val:"弱1", }
,{tesf:"テリー", tess:"弱攻撃", fighter_id:1740, skill_genre:10300, begin:3, end:4, time:9, base_damage:3, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"テリー", tess:"弱攻撃", fighter_id:1740, skill_genre:10300, begin:3, end:3, time:24, base_damage:1, alias:"弱2", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"弱2, Hit 1", }
,{tesf:"テリー", tess:"弱攻撃", fighter_id:1740, skill_genre:10300, begin:4, end:7, time:24, base_damage:2, alias:"弱2", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"弱2, Hit 2", }
,{tesf:"テリー", tess:"弱攻撃", fighter_id:1740, skill_genre:10300, begin:7, end:10, time:33, base_damage:7, alias:"弱3", tes_val:"弱3", }
,{tesf:"テリー", tess:"ダッシュ攻撃", fighter_id:1740, skill_genre:10400, begin:10, end:14, time:40, base_damage:13, tes_val:"", }
,{tesf:"テリー", tess:"ダッシュ攻撃", fighter_id:1740, skill_genre:10400, begin:15, end:22, time:40, base_damage:10, persistence_num:1, tes_val:"持続", }
,{tesf:"テリー", tess:"横強", fighter_id:1740, skill_genre:10501, begin:8, end:13, time:27, base_damage:13, damage_no:1, tes_val:"", }
,{tesf:"テリー", tess:"横強", fighter_id:1740, skill_genre:10501, begin:8, end:13, time:27, base_damage:12, damage_no:2, tes_val:"", }
,{tesf:"テリー", tess:"上強", fighter_id:1740, skill_genre:10500, begin:7, end:11, time:30, base_damage:11, tes_val:"", }
,{tesf:"テリー", tess:"下強", fighter_id:1740, skill_genre:10502, begin:6, end:8, time:16, base_damage:3, tes_val:"", }
,{tesf:"テリー", tess:"横スマッシュ", fighter_id:1740, skill_genre:10601, begin:18, end:21, time:50, base_damage:18, tes_val:"", }
,{tesf:"テリー", tess:"上スマッシュ", fighter_id:1740, skill_genre:10600, begin:10, end:10, time:41, base_damage:16, persistence_num:0, tes_val:"始", }
,{tesf:"テリー", tess:"上スマッシュ", fighter_id:1740, skill_genre:10600, begin:11, end:14, time:41, base_damage:18, tes_val:"", }
,{tesf:"テリー", tess:"下スマッシュ", fighter_id:1740, skill_genre:10602, begin:8, end:11, time:40, base_damage:12, tes_val:"", }
,{tesf:"テリー", tess:"避け攻撃", fighter_id:1740, skill_genre:11200, begin:5, end:9, time:28, base_damage:11, tes_val:"", correction:0.5}
, {tesf:"テリー", tess:"空N", fighter_id:1740, skill_genre:10904, begin:4, end:8, time:33, base_damage:7, landing_lag:6, landing_occurrence_begin:4, landing_occurrence_end:23, tes_val:"", }
,{tesf:"テリー", tess:"空N", fighter_id:1740, skill_genre:10904, begin:9, end:19, time:33, base_damage:5, landing_lag:6, landing_occurrence_begin:4, landing_occurrence_end:23, persistence_num:1, tes_val:"持続", }
,{tesf:"テリー", tess:"空前", fighter_id:1740, skill_genre:10901, begin:7, end:10, time:39, base_damage:11, landing_lag:11, landing_occurrence_begin:5, landing_occurrence_end:25, tes_val:"", }
,{tesf:"テリー", tess:"空前", fighter_id:1740, skill_genre:10901, begin:11, end:17, time:39, base_damage:8, landing_lag:11, landing_occurrence_begin:5, landing_occurrence_end:25, persistence_num:1, tes_val:"持続", }
,{tesf:"テリー", tess:"空後", fighter_id:1740, skill_genre:10903, begin:11, end:13, time:39, base_damage:15, landing_lag:10, landing_occurrence_begin:11, landing_occurrence_end:29, tes_val:"", }
,{tesf:"テリー", tess:"空後", fighter_id:1740, skill_genre:10903, begin:14, end:15, time:39, base_damage:12, landing_lag:10, landing_occurrence_begin:11, landing_occurrence_end:29, persistence_num:1, tes_val:"持続", }
,{tesf:"テリー", tess:"空上", fighter_id:1740, skill_genre:10900, begin:7, end:9, time:35, base_damage:9, landing_lag:6, landing_occurrence_begin:2, landing_occurrence_end:17, tes_val:"", }
,{tesf:"テリー", tess:"空下", fighter_id:1740, skill_genre:10902, begin:12, end:15, time:32, base_damage:17, landing_lag:15, landing_occurrence_begin:12, landing_occurrence_end:23, damage_no:1, tes_val:"", }
,{tesf:"テリー", tess:"空下", fighter_id:1740, skill_genre:10902, begin:12, end:15, time:32, base_damage:15, landing_lag:15, landing_occurrence_begin:12, landing_occurrence_end:23, damage_no:2, tes_val:"", }
,{tess:"その場投げ", fighter_id:1740 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34,}
,{tess:"ダッシュ投げ", fighter_id:1740 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42,}
,{tess:"ふりむき投げ", fighter_id:1740 , skill_genre:10202, base_damage:0,begin:10, end:11, time:37,}
, {tesf:"ベレト／ベレス", tess:"弱攻撃", fighter_id:1750, skill_genre:10300, begin:4, end:5, time:22, base_damage:1.5, alias:"弱1", tes_val:"弱1", }
,{tesf:"ベレト／ベレス", tess:"弱攻撃", fighter_id:1750, skill_genre:10300, begin:4, end:5, time:15, base_damage:1.5, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ベレト／ベレス", tess:"弱攻撃", fighter_id:1750, skill_genre:10300, begin:4, end:5, time:24, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"ベレト／ベレス", tess:"弱攻撃", fighter_id:1750, skill_genre:10300, begin:5, end:7, time:32, base_damage:4.5, alias:"弱3", tes_val:"弱3", }
,{tesf:"ベレト／ベレス", tess:"弱攻撃", fighter_id:1750, skill_genre:10300, begin:5, end:7, time:8, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"ベレト／ベレス", tess:"弱攻撃", fighter_id:1750, skill_genre:10300, begin:3, end:3, time:18, base_damage:0.4, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 6, 9, 12, 15, 18", tes_val:"百裂, 連", correction:9}
,{tesf:"ベレト／ベレス", tess:"弱攻撃", fighter_id:1750, skill_genre:10300, begin:6, end:7, time:50, base_damage:3.5, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"ベレト／ベレス", tess:"ダッシュ攻撃", fighter_id:1750, skill_genre:10400, begin:9, end:11, time:44, base_damage:13, damage_no:1, tes_val:"", }
,{tesf:"ベレト／ベレス", tess:"ダッシュ攻撃", fighter_id:1750, skill_genre:10400, begin:9, end:11, time:44, base_damage:9, damage_no:2, tes_val:"", }
,{tesf:"ベレト／ベレス", tess:"横強", fighter_id:1750, skill_genre:10501, begin:8, end:10, time:33, base_damage:11, tes_val:"", }
,{tesf:"ベレト／ベレス", tess:"上強", fighter_id:1750, skill_genre:10500, begin:9, end:15, time:34, base_damage:10, tes_val:"", }
,{tesf:"ベレト／ベレス", tess:"下強", fighter_id:1750, skill_genre:10502, begin:13, end:15, time:35, base_damage:8, tes_val:"", }
,{tesf:"ベレト／ベレス", tess:"横スマッシュ", fighter_id:1750, skill_genre:10601, begin:23, end:25, time:63, base_damage:18, damage_no:1, tes_val:"", }
,{tesf:"ベレト／ベレス", tess:"横スマッシュ", fighter_id:1750, skill_genre:10601, begin:23, end:25, time:63, base_damage:12, damage_no:2, tes_val:"", }
,{tesf:"ベレト／ベレス", tess:"横スマッシュ", fighter_id:1750, skill_genre:10601, begin:23, end:25, time:63, base_damage:19.5, damage_no:1, shift:"up", tes_val:"上シフト", }
,{tesf:"ベレト／ベレス", tess:"横スマッシュ", fighter_id:1750, skill_genre:10601, begin:23, end:25, time:63, base_damage:13, damage_no:2, shift:"up", tes_val:"上シフト", }
,{tesf:"ベレト／ベレス", tess:"横スマッシュ", fighter_id:1750, skill_genre:10601, begin:23, end:25, time:63, base_damage:17.25, damage_no:1, shift:"under", tes_val:"下シフト", }
,{tesf:"ベレト／ベレス", tess:"横スマッシュ", fighter_id:1750, skill_genre:10601, begin:23, end:25, time:63, base_damage:11.5, damage_no:2, shift:"under", tes_val:"下シフト", }
,{tesf:"ベレト／ベレス", tess:"上スマッシュ", fighter_id:1750, skill_genre:10600, begin:13, end:14, time:57, base_damage:2, rehit:7, persistence_num:0, tes_val:"始", }
,{tesf:"ベレト／ベレス", tess:"上スマッシュ", fighter_id:1750, skill_genre:10600, begin:17, end:27, time:57, base_damage:2, detail_name:"連", rehit:4, tes_val:"連", }
,{tesf:"ベレト／ベレス", tess:"上スマッシュ", fighter_id:1750, skill_genre:10600, begin:28, end:29, time:57, base_damage:10, persistence_num:9, tes_val:"〆", }
,{tesf:"ベレト／ベレス", tess:"下スマッシュ", fighter_id:1750, skill_genre:10602, begin:19, end:21, time:74, base_damage:23, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ベレト／ベレス", tess:"下スマッシュ", fighter_id:1750, skill_genre:10602, begin:29, end:31, time:74, base_damage:23, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"ベレト／ベレス", tess:"空N", fighter_id:1750, skill_genre:10904, begin:6, end:26, time:51, base_damage:2.5, landing_lag:13, landing_occurrence_begin:6, landing_occurrence_end:39, detail_name:"連", rehit:7, tes_val:"連", }
,{tesf:"ベレト／ベレス", tess:"空N", fighter_id:1750, skill_genre:10904, begin:28, end:28, time:51, base_damage:3, landing_lag:13, landing_occurrence_begin:6, landing_occurrence_end:39, persistence_num:9, tes_val:"〆", }
,{tesf:"ベレト／ベレス", tess:"空N", fighter_id:1750, skill_genre:10904, begin:2, end:2, time:51, base_damage:1, landing_lag:13, landing_occurrence_begin:6, landing_occurrence_end:39, is_landing_attack:true, tes_val:"着地", }
,{tesf:"ベレト／ベレス", tess:"空前", fighter_id:1750, skill_genre:10901, begin:12, end:13, time:39, base_damage:12.75, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:36, damage_no:1, tes_val:"", }
,{tesf:"ベレト／ベレス", tess:"空前", fighter_id:1750, skill_genre:10901, begin:12, end:13, time:39, base_damage:8.5, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:36, damage_no:2, tes_val:"", }
,{tesf:"ベレト／ベレス", tess:"空後", fighter_id:1750, skill_genre:10903, begin:13, end:14, time:46, base_damage:15, landing_lag:13, landing_occurrence_begin:6, landing_occurrence_end:39, damage_no:1, tes_val:"", }
,{tesf:"ベレト／ベレス", tess:"空後", fighter_id:1750, skill_genre:10903, begin:13, end:14, time:46, base_damage:10, landing_lag:13, landing_occurrence_begin:6, landing_occurrence_end:39, damage_no:2, tes_val:"", }
,{tesf:"ベレト／ベレス", tess:"空後", fighter_id:1750, skill_genre:10903, begin:15, end:17, time:46, base_damage:7.5, landing_lag:13, landing_occurrence_begin:6, landing_occurrence_end:39, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"ベレト／ベレス", tess:"空後", fighter_id:1750, skill_genre:10903, begin:15, end:17, time:46, base_damage:5, landing_lag:13, landing_occurrence_begin:6, landing_occurrence_end:39, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"ベレト／ベレス", tess:"空上", fighter_id:1750, skill_genre:10900, begin:10, end:19, time:48, base_damage:3, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:48, detail_name:"連", rehit:5, tes_val:"連", }
,{tesf:"ベレト／ベレス", tess:"空上", fighter_id:1750, skill_genre:10900, begin:20, end:23, time:48, base_damage:5.5, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:48, persistence_num:9, tes_val:"〆", }
,{tesf:"ベレト／ベレス", tess:"空下", fighter_id:1750, skill_genre:10902, begin:22, end:24, time:59, base_damage:19, landing_lag:28, landing_occurrence_begin:2, landing_occurrence_end:52, tes_val:"", }

, {tesf:"リヒター", tess:"弱攻撃", fighter_id:1661, skill_genre:10300, begin:5, end:5, time:29, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"リヒター", tess:"弱攻撃", fighter_id:1661, skill_genre:10300, begin:3, end:4, time:29, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"リヒター", tess:"弱攻撃", fighter_id:1661, skill_genre:10300, begin:3, end:4, time:6, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"リヒター", tess:"弱攻撃", fighter_id:1661, skill_genre:10300, begin:3, end:3, time:19, base_damage:0.5, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 6, 9, 12, 15, 18", tes_val:"百裂, 連", correction:5}
,{tesf:"リヒター", tess:"弱攻撃", fighter_id:1661, skill_genre:10300, begin:3, end:4, time:44, base_damage:2.5, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"リヒター", tess:"ダッシュ攻撃", fighter_id:1661, skill_genre:10400, begin:10, end:11, time:54, base_damage:1.7, serial_num_str:"1-5", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"10-11, 13-14, 16-17, 19-2022-23", tes_val:"Hit 1-5", }
,{tesf:"リヒター", tess:"ダッシュ攻撃", fighter_id:1661, skill_genre:10400, begin:25, end:26, time:54, base_damage:3.5, serial_num_str:"6", tes_message:"(連続ヒットする技)", tes_val:"Hit 6", }
,{tesf:"リヒター", tess:"横強", fighter_id:1661, skill_genre:10501, begin:12, end:13, time:30, base_damage:12, damage_no:1, tes_val:"", }
,{tesf:"リヒター", tess:"横強", fighter_id:1661, skill_genre:10501, begin:12, end:13, time:30, base_damage:10, damage_no:2, tes_val:"", }
,{tesf:"リヒター", tess:"横強", fighter_id:1661, skill_genre:10501, begin:12, end:13, time:30, base_damage:2, damage_no:3, tes_val:"", }
,{tesf:"リヒター", tess:"上強", fighter_id:1661, skill_genre:10500, begin:10, end:22, time:37, base_damage:10, damage_no:1, tes_val:"", }
,{tesf:"リヒター", tess:"上強", fighter_id:1661, skill_genre:10500, begin:10, end:22, time:37, base_damage:2, damage_no:2, tes_val:"", }
,{tesf:"リヒター", tess:"下強", fighter_id:1661, skill_genre:10502, begin:7, end:23, time:44, base_damage:5, tes_val:"下強1", }
,{tesf:"リヒター", tess:"下強", fighter_id:1661, skill_genre:10502, begin:8, end:19, time:43, base_damage:7, tes_val:"下強2", }
,{tesf:"リヒター", tess:"下強", fighter_id:1661, skill_genre:10502, begin:8, end:19, time:57, base_damage:7, cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"下強2", }
,{tesf:"リヒター", tess:"下強", fighter_id:1661, skill_genre:10502, begin:20, end:28, time:43, base_damage:3.5, persistence_num:1, tes_val:"下強2, 持続", }
,{tesf:"リヒター", tess:"下強", fighter_id:1661, skill_genre:10502, begin:20, end:28, time:57, base_damage:3.5, persistence_num:1, cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"下強2, 持続", }
,{tesf:"リヒター", tess:"横スマッシュ", fighter_id:1661, skill_genre:10601, begin:24, end:25, time:62, base_damage:18, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"リヒター", tess:"横スマッシュ", fighter_id:1661, skill_genre:10601, begin:24, end:25, time:62, base_damage:16, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"リヒター", tess:"横スマッシュ", fighter_id:1661, skill_genre:10601, begin:24, end:25, time:62, base_damage:14, damage_no:3, shift:"all", tes_val:"全シフト", }
,{tesf:"リヒター", tess:"上スマッシュ", fighter_id:1661, skill_genre:10600, begin:18, end:20, time:55, base_damage:16, damage_no:1, tes_val:"", }
,{tesf:"リヒター", tess:"上スマッシュ", fighter_id:1661, skill_genre:10600, begin:18, end:20, time:55, base_damage:14, damage_no:2, tes_val:"", }
,{tesf:"リヒター", tess:"下スマッシュ", fighter_id:1661, skill_genre:10602, begin:14, end:15, time:55, base_damage:16, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リヒター", tess:"下スマッシュ", fighter_id:1661, skill_genre:10602, begin:14, end:15, time:55, base_damage:14, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リヒター", tess:"下スマッシュ", fighter_id:1661, skill_genre:10602, begin:14, end:15, time:55, base_damage:12, damage_no:3, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リヒター", tess:"下スマッシュ", fighter_id:1661, skill_genre:10602, begin:20, end:21, time:55, base_damage:16, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"リヒター", tess:"下スマッシュ", fighter_id:1661, skill_genre:10602, begin:20, end:21, time:55, base_damage:14, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"リヒター", tess:"下スマッシュ", fighter_id:1661, skill_genre:10602, begin:20, end:21, time:55, base_damage:12, damage_no:3, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"リヒター", tess:"空N", fighter_id:1661, skill_genre:10904, begin:8, end:9, time:42, base_damage:1, landing_lag:14, landing_occurrence_begin:7, landing_occurrence_end:35, serial_num_str:"1-6", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"8-9, 11-12, 14-15, 17-18, 20-21, 23-24", tes_val:"Hit 1-6", }
,{tesf:"リヒター", tess:"空N", fighter_id:1661, skill_genre:10904, begin:26, end:27, time:42, base_damage:4, landing_lag:14, landing_occurrence_begin:7, landing_occurrence_end:35, serial_num_str:"7", tes_message:"(連続ヒットする技)", tes_val:"Hit 7", }
,{tesf:"リヒター", tess:"空前", fighter_id:1661, skill_genre:10901, begin:14, end:14, time:39, base_damage:12, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:28, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"リヒター", tess:"空前", fighter_id:1661, skill_genre:10901, begin:14, end:14, time:39, base_damage:10, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:28, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"リヒター", tess:"空前", fighter_id:1661, skill_genre:10901, begin:14, end:14, time:39, base_damage:2, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:28, damage_no:3, shift:"all", tes_val:"全シフト", }
,{tesf:"リヒター", tess:"空後", fighter_id:1661, skill_genre:10903, begin:14, end:15, time:39, base_damage:12, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:26, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"リヒター", tess:"空後", fighter_id:1661, skill_genre:10903, begin:14, end:15, time:39, base_damage:10, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:26, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"リヒター", tess:"空後", fighter_id:1661, skill_genre:10903, begin:14, end:15, time:39, base_damage:2, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:26, damage_no:3, shift:"all", tes_val:"全シフト", }
,{tesf:"リヒター", tess:"空上", fighter_id:1661, skill_genre:10900, begin:14, end:16, time:39, base_damage:12, landing_lag:10, landing_occurrence_begin:12, landing_occurrence_end:27, damage_no:1, tes_val:"", }
,{tesf:"リヒター", tess:"空上", fighter_id:1661, skill_genre:10900, begin:14, end:16, time:39, base_damage:10, landing_lag:10, landing_occurrence_begin:12, landing_occurrence_end:27, damage_no:2, tes_val:"", }
,{tesf:"リヒター", tess:"空上", fighter_id:1661, skill_genre:10900, begin:14, end:16, time:39, base_damage:2, landing_lag:10, landing_occurrence_begin:12, landing_occurrence_end:27, damage_no:3, tes_val:"", }
,{tesf:"リヒター", tess:"空下", fighter_id:1661, skill_genre:10902, begin:13, end:14, time:48, base_damage:12, landing_lag:26, landing_occurrence_begin:4, landing_occurrence_end:46, tes_val:"", }
,{tesf:"リヒター", tess:"空下", fighter_id:1661, skill_genre:10902, begin:15, end:36, time:48, base_damage:7, landing_lag:26, landing_occurrence_begin:4, landing_occurrence_end:46, persistence_num:1, tes_val:"持続", }
,{tesf:"リヒター", tess:"空下", fighter_id:1661, skill_genre:10902, begin:15, end:36, time:26, base_damage:0, landing_lag:26, landing_occurrence_begin:4, landing_occurrence_end:46, detail_name:"バウンド", tes_val:"バウンド", }
,{tess:"その場投げ", fighter_id:1661 , skill_genre:10200, base_damage:0,begin:10, end:11, time:37,}
,{tess:"ダッシュ投げ", fighter_id:1661 , skill_genre:10201, base_damage:0,begin:13, end:14, time:45,}
,{tess:"ふりむき投げ", fighter_id:1661 , skill_genre:10202, base_damage:0,begin:14, end:15, time:42,}


, {tesf:"シモン", tess:"弱攻撃", fighter_id:1660, skill_genre:10300, begin:5, end:5, time:29, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"シモン", tess:"弱攻撃", fighter_id:1660, skill_genre:10300, begin:3, end:4, time:29, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"シモン", tess:"弱攻撃", fighter_id:1660, skill_genre:10300, begin:3, end:4, time:6, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"シモン", tess:"弱攻撃", fighter_id:1660, skill_genre:10300, begin:3, end:3, time:19, base_damage:0.5, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 6, 9, 12, 15, 18", tes_val:"百裂, 連", correction:5}
,{tesf:"シモン", tess:"弱攻撃", fighter_id:1660, skill_genre:10300, begin:3, end:4, time:44, base_damage:2.5, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"シモン", tess:"ダッシュ攻撃", fighter_id:1660, skill_genre:10400, begin:10, end:11, time:54, base_damage:1.7, serial_num_str:"1-5", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"10-11, 13-14, 16-17, 19-2022-23", tes_val:"Hit 1-5", }
,{tesf:"シモン", tess:"ダッシュ攻撃", fighter_id:1660, skill_genre:10400, begin:25, end:26, time:54, base_damage:3.5, serial_num_str:"6", tes_message:"(連続ヒットする技)", tes_val:"Hit 6", }
,{tesf:"シモン", tess:"横強", fighter_id:1660, skill_genre:10501, begin:12, end:13, time:30, base_damage:12, damage_no:1, tes_val:"", }
,{tesf:"シモン", tess:"横強", fighter_id:1660, skill_genre:10501, begin:12, end:13, time:30, base_damage:10, damage_no:2, tes_val:"", }
,{tesf:"シモン", tess:"横強", fighter_id:1660, skill_genre:10501, begin:12, end:13, time:30, base_damage:2, damage_no:3, tes_val:"", }
,{tesf:"シモン", tess:"上強", fighter_id:1660, skill_genre:10500, begin:10, end:22, time:37, base_damage:10, damage_no:1, tes_val:"", }
,{tesf:"シモン", tess:"上強", fighter_id:1660, skill_genre:10500, begin:10, end:22, time:37, base_damage:2, damage_no:2, tes_val:"", }
,{tesf:"シモン", tess:"下強", fighter_id:1660, skill_genre:10502, begin:7, end:23, time:44, base_damage:5, tes_val:"下強1", }
,{tesf:"シモン", tess:"下強", fighter_id:1660, skill_genre:10502, begin:8, end:19, time:43, base_damage:7, tes_val:"下強2", }
,{tesf:"シモン", tess:"下強", fighter_id:1660, skill_genre:10502, begin:8, end:19, time:57, base_damage:7, cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"下強2", }
,{tesf:"シモン", tess:"下強", fighter_id:1660, skill_genre:10502, begin:20, end:28, time:43, base_damage:3.5, persistence_num:1, tes_val:"下強2, 持続", }
,{tesf:"シモン", tess:"下強", fighter_id:1660, skill_genre:10502, begin:20, end:28, time:57, base_damage:3.5, persistence_num:1, cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"下強2, 持続", }
,{tesf:"シモン", tess:"横スマッシュ", fighter_id:1660, skill_genre:10601, begin:24, end:25, time:62, base_damage:18, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"シモン", tess:"横スマッシュ", fighter_id:1660, skill_genre:10601, begin:24, end:25, time:62, base_damage:16, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"シモン", tess:"横スマッシュ", fighter_id:1660, skill_genre:10601, begin:24, end:25, time:62, base_damage:14, damage_no:3, shift:"all", tes_val:"全シフト", }
,{tesf:"シモン", tess:"上スマッシュ", fighter_id:1660, skill_genre:10600, begin:18, end:20, time:55, base_damage:16, damage_no:1, tes_val:"", }
,{tesf:"シモン", tess:"上スマッシュ", fighter_id:1660, skill_genre:10600, begin:18, end:20, time:55, base_damage:14, damage_no:2, tes_val:"", }
,{tesf:"シモン", tess:"下スマッシュ", fighter_id:1660, skill_genre:10602, begin:14, end:15, time:55, base_damage:16, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"シモン", tess:"下スマッシュ", fighter_id:1660, skill_genre:10602, begin:14, end:15, time:55, base_damage:14, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"シモン", tess:"下スマッシュ", fighter_id:1660, skill_genre:10602, begin:14, end:15, time:55, base_damage:12, damage_no:3, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"シモン", tess:"下スマッシュ", fighter_id:1660, skill_genre:10602, begin:20, end:21, time:55, base_damage:16, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"シモン", tess:"下スマッシュ", fighter_id:1660, skill_genre:10602, begin:20, end:21, time:55, base_damage:14, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"シモン", tess:"下スマッシュ", fighter_id:1660, skill_genre:10602, begin:20, end:21, time:55, base_damage:12, damage_no:3, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"シモン", tess:"空N", fighter_id:1660, skill_genre:10904, begin:8, end:9, time:42, base_damage:1, landing_lag:14, landing_occurrence_begin:7, landing_occurrence_end:35, serial_num_str:"1-6", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"8-9, 11-12, 14-15, 17-18, 20-21, 23-24", tes_val:"Hit 1-6", }
,{tesf:"シモン", tess:"空N", fighter_id:1660, skill_genre:10904, begin:26, end:27, time:42, base_damage:4, landing_lag:14, landing_occurrence_begin:7, landing_occurrence_end:35, serial_num_str:"7", tes_message:"(連続ヒットする技)", tes_val:"Hit 7", }
,{tesf:"シモン", tess:"空前", fighter_id:1660, skill_genre:10901, begin:14, end:14, time:39, base_damage:12, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:28, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"シモン", tess:"空前", fighter_id:1660, skill_genre:10901, begin:14, end:14, time:39, base_damage:10, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:28, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"シモン", tess:"空前", fighter_id:1660, skill_genre:10901, begin:14, end:14, time:39, base_damage:2, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:28, damage_no:3, shift:"all", tes_val:"全シフト", }
,{tesf:"シモン", tess:"空後", fighter_id:1660, skill_genre:10903, begin:14, end:15, time:39, base_damage:12, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:26, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"シモン", tess:"空後", fighter_id:1660, skill_genre:10903, begin:14, end:15, time:39, base_damage:10, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:26, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"シモン", tess:"空後", fighter_id:1660, skill_genre:10903, begin:14, end:15, time:39, base_damage:2, landing_lag:10, landing_occurrence_begin:1, landing_occurrence_end:26, damage_no:3, shift:"all", tes_val:"全シフト", }
,{tesf:"シモン", tess:"空上", fighter_id:1660, skill_genre:10900, begin:14, end:16, time:39, base_damage:12, landing_lag:10, landing_occurrence_begin:12, landing_occurrence_end:27, damage_no:1, tes_val:"", }
,{tesf:"シモン", tess:"空上", fighter_id:1660, skill_genre:10900, begin:14, end:16, time:39, base_damage:10, landing_lag:10, landing_occurrence_begin:12, landing_occurrence_end:27, damage_no:2, tes_val:"", }
,{tesf:"シモン", tess:"空上", fighter_id:1660, skill_genre:10900, begin:14, end:16, time:39, base_damage:2, landing_lag:10, landing_occurrence_begin:12, landing_occurrence_end:27, damage_no:3, tes_val:"", }
,{tesf:"シモン", tess:"空下", fighter_id:1660, skill_genre:10902, begin:13, end:14, time:48, base_damage:12, landing_lag:26, landing_occurrence_begin:4, landing_occurrence_end:46, tes_val:"", }
,{tesf:"シモン", tess:"空下", fighter_id:1660, skill_genre:10902, begin:15, end:36, time:48, base_damage:7, landing_lag:26, landing_occurrence_begin:4, landing_occurrence_end:46, persistence_num:1, tes_val:"持続", }
,{tesf:"シモン", tess:"空下", fighter_id:1660, skill_genre:10902, begin:15, end:36, time:26, base_damage:0, landing_lag:26, landing_occurrence_begin:4, landing_occurrence_end:46, detail_name:"バウンド", tes_val:"バウンド", }
,{tess:"その場投げ", fighter_id:1660 , skill_genre:10200, base_damage:0,begin:10, end:11, time:37,}
,{tess:"ダッシュ投げ", fighter_id:1660 , skill_genre:10201, base_damage:0,begin:13, end:14, time:45,}
,{tess:"ふりむき投げ", fighter_id:1660 , skill_genre:10202, base_damage:0,begin:14, end:15, time:42,}
, {tesf:"インクリング", tess:"弱攻撃", fighter_id:1640, skill_genre:10300, begin:3, end:4, time:19, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"インクリング", tess:"弱攻撃", fighter_id:1640, skill_genre:10300, begin:3, end:4, time:6, base_damage:2, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"インクリング", tess:"弱攻撃", fighter_id:1640, skill_genre:10300, begin:2, end:3, time:21, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"インクリング", tess:"弱攻撃", fighter_id:1640, skill_genre:10300, begin:4, end:5, time:29, base_damage:3.5, alias:"弱3", tes_val:"弱3", }
,{tesf:"インクリング", tess:"弱攻撃", fighter_id:1640, skill_genre:10300, begin:4, end:5, time:1, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"インクリング", tess:"弱攻撃", fighter_id:1640, skill_genre:10300, begin:3, end:3, time:17, base_damage:0.4, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 5, 7, 9, 11, 13, 15, 17", tes_val:"百裂, 連", }
,{tesf:"インクリング", tess:"弱攻撃", fighter_id:1640, skill_genre:10300, begin:6, end:7, time:48, base_damage:2.5, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"インクリング", tess:"ダッシュ攻撃", fighter_id:1640, skill_genre:10400, begin:8, end:9, time:35, base_damage:8, tes_val:"", correction:1.5}
,{tesf:"インクリング", tess:"ダッシュ攻撃", fighter_id:1640, skill_genre:10400, begin:10, end:13, time:35, base_damage:6, persistence_num:1, tes_val:"持続", correction:1.5}
,{tesf:"インクリング", tess:"横強", fighter_id:1640, skill_genre:10501, begin:8, end:10, time:34, base_damage:9, tes_val:"", }
,{tesf:"インクリング", tess:"上強", fighter_id:1640, skill_genre:10500, begin:7, end:12, time:29, base_damage:6, tes_val:"", }
,{tesf:"インクリング", tess:"下強", fighter_id:1640, skill_genre:10502, begin:5, end:8, time:31, base_damage:3, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"インクリング", tess:"下強", fighter_id:1640, skill_genre:10502, begin:12, end:15, time:31, base_damage:6, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"インクリング", tess:"横スマッシュ", fighter_id:1640, skill_genre:10601, begin:16, end:17, time:51, base_damage:16, damage_no:1, tes_val:"", }
,{tesf:"インクリング", tess:"横スマッシュ", fighter_id:1640, skill_genre:10601, begin:16, end:17, time:51, base_damage:14, damage_no:2, tes_val:"", }
,{tesf:"インクリング", tess:"横スマッシュ", fighter_id:1640, skill_genre:10601, begin:16, end:17, time:51, base_damage:12, detail_name:"インク切れ", tes_val:"インク切れ", }
,{tesf:"インクリング", tess:"上スマッシュ", fighter_id:1640, skill_genre:10600, begin:9, end:10, time:57, base_damage:4, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"インクリング", tess:"上スマッシュ", fighter_id:1640, skill_genre:10600, begin:18, end:20, time:57, base_damage:15, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"インクリング", tess:"上スマッシュ", fighter_id:1640, skill_genre:10600, begin:18, end:20, time:57, base_damage:10, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"インクリング", tess:"上スマッシュ", fighter_id:1640, skill_genre:10600, begin:18, end:20, time:57, base_damage:10, damage_no:1, detail_name:"インク切れ", tes_val:"インク切れ", }
,{tesf:"インクリング", tess:"上スマッシュ", fighter_id:1640, skill_genre:10600, begin:18, end:20, time:57, base_damage:6, damage_no:2, detail_name:"インク切れ", tes_val:"インク切れ", }
,{tesf:"インクリング", tess:"下スマッシュ", fighter_id:1640, skill_genre:10602, begin:11, end:12, time:49, base_damage:12.5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"インクリング", tess:"下スマッシュ", fighter_id:1640, skill_genre:10602, begin:11, end:12, time:49, base_damage:10, detail_name:"インク切れ", tes_val:"インク切れ", }
,{tesf:"インクリング", tess:"下スマッシュ", fighter_id:1640, skill_genre:10602, begin:13, end:15, time:49, base_damage:7, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"インクリング", tess:"下スマッシュ", fighter_id:1640, skill_genre:10602, begin:13, end:15, time:49, base_damage:5, detail_name:"インク切れ", tes_val:"インク切れ", }
,{tesf:"インクリング", tess:"下スマッシュ", fighter_id:1640, skill_genre:10602, begin:20, end:21, time:49, base_damage:11, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"インクリング", tess:"下スマッシュ", fighter_id:1640, skill_genre:10602, begin:20, end:21, time:49, base_damage:9, detail_name:"インク切れ", tes_val:"インク切れ", }
,{tesf:"インクリング", tess:"下スマッシュ", fighter_id:1640, skill_genre:10602, begin:22, end:24, time:49, base_damage:6, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続", }
,{tesf:"インクリング", tess:"下スマッシュ", fighter_id:1640, skill_genre:10602, begin:22, end:24, time:49, base_damage:4, detail_name:"インク切れ", tes_val:"インク切れ", }
,{tesf:"インクリング", tess:"インク補給", fighter_id:1640, skill_genre:11300, begin:3, end:14, time:43, base_damage:0, detail_name:"最短", tes_val:"最短", }
,{tesf:"インクリング", tess:"インク補給", fighter_id:1640, skill_genre:11300, begin:3, end:14, time:29, base_damage:0, detail_name:"解除", tes_val:"解除", }
, {tesf:"インクリング", tess:"空N", fighter_id:1640, skill_genre:10904, begin:6, end:9, time:31, base_damage:7, landing_lag:5, landing_occurrence_begin:2, landing_occurrence_end:26, tes_val:"", }
,{tesf:"インクリング", tess:"空前", fighter_id:1640, skill_genre:10901, begin:10, end:11, time:41, base_damage:12, landing_lag:12, landing_occurrence_begin:5, landing_occurrence_end:39, damage_no:1, tes_val:"", }
,{tesf:"インクリング", tess:"空前", fighter_id:1640, skill_genre:10901, begin:10, end:11, time:41, base_damage:10, landing_lag:12, landing_occurrence_begin:5, landing_occurrence_end:39, damage_no:2, tes_val:"", }
,{tesf:"インクリング", tess:"空前", fighter_id:1640, skill_genre:10901, begin:12, end:21, time:41, base_damage:7, landing_lag:12, landing_occurrence_begin:5, landing_occurrence_end:39, persistence_num:1, tes_val:"持続", }
,{tesf:"インクリング", tess:"空後", fighter_id:1640, skill_genre:10903, begin:7, end:11, time:36, base_damage:10, landing_lag:6, landing_occurrence_begin:7, landing_occurrence_end:29, damage_no:1, tes_val:"", }
,{tesf:"インクリング", tess:"空後", fighter_id:1640, skill_genre:10903, begin:7, end:11, time:36, base_damage:7.5, landing_lag:6, landing_occurrence_begin:7, landing_occurrence_end:29, damage_no:2, tes_val:"", }
,{tesf:"インクリング", tess:"空上", fighter_id:1640, skill_genre:10900, begin:12, end:15, time:43, base_damage:4.5, landing_lag:6, landing_occurrence_begin:2, landing_occurrence_end:39, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"インクリング", tess:"空上", fighter_id:1640, skill_genre:10900, begin:17, end:20, time:43, base_damage:6.5, landing_lag:6, landing_occurrence_begin:2, landing_occurrence_end:39, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"インクリング", tess:"空下", fighter_id:1640, skill_genre:10902, begin:16, end:17, time:61, base_damage:12, landing_lag:10, landing_occurrence_begin:5, landing_occurrence_end:32, damage_no:1, tes_val:"", }
,{tesf:"インクリング", tess:"空下", fighter_id:1640, skill_genre:10902, begin:16, end:17, time:61, base_damage:10, landing_lag:10, landing_occurrence_begin:5, landing_occurrence_end:32, damage_no:2, tes_val:"", }
,{tess:"その場投げ", fighter_id:1640 , skill_genre:10200, base_damage:0,begin:8, end:9, time:34,}
,{tess:"ダッシュ投げ", fighter_id:1640 , skill_genre:10201, base_damage:0,begin:9, end:10, time:41,}
,{tess:"ふりむき投げ", fighter_id:1640 , skill_genre:10202, base_damage:0,begin:10, end:11, time:37,}
, {tesf:"デデデ", tess:"弱攻撃", fighter_id:1390, skill_genre:10300, begin:10, end:10, time:32, base_damage:2.5, alias:"弱1", tes_val:"弱1" }
,{tesf:"デデデ", tess:"弱攻撃", fighter_id:1390, skill_genre:10300, begin:11, end:12, time:27, base_damage:2.2, alias:"弱2", tes_val:"弱2"}
,{tesf:"デデデ", tess:"弱攻撃", fighter_id:1390, skill_genre:10300, begin:11, end:12, time:2, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始"}
,{tesf:"デデデ", tess:"弱攻撃", fighter_id:1390, skill_genre:10300, begin:3, end:3, time:22, base_damage:0.5, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"3, 6, 9, 12,15, 18, 21", tes_val:"百裂, 連",correction:5}
,{tesf:"デデデ", tess:"弱攻撃", fighter_id:1390, skill_genre:10300, begin:4, end:4, time:49, base_damage:3, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆"}
,{tesf:"デデデ", tess:"ダッシュ攻撃", fighter_id:1390, skill_genre:10400, begin:26, end:27, time:66, base_damage:16, tes_val:"" }
,{tesf:"デデデ", tess:"ダッシュ攻撃", fighter_id:1390, skill_genre:10400, begin:28, end:41, time:66, base_damage:13, persistence_num:1, tes_val:"持続" }
,{tesf:"デデデ", tess:"横強", fighter_id:1390, skill_genre:10501, begin:12, end:21, time:48, base_damage:2, detail_name:"連", rehit:4, tes_val:"連"}
,{tesf:"デデデ", tess:"横強", fighter_id:1390, skill_genre:10501, begin:12, end:21, time:48, base_damage:2, detail_name:"連", rehit:3, tes_val:"連", is_hidden:true, }
,{tesf:"デデデ", tess:"横強", fighter_id:1390, skill_genre:10501, begin:23, end:23, time:48, base_damage:3, persistence_num:9, tes_val:"〆"}
,{tesf:"デデデ", tess:"上強", fighter_id:1390, skill_genre:10500, begin:7, end:13, time:38, base_damage:10, damage_no:1, tes_val:"" }
,{tesf:"デデデ", tess:"上強", fighter_id:1390, skill_genre:10500, begin:7, end:13, time:38, base_damage:8, damage_no:2, tes_val:""}
,{tesf:"デデデ", tess:"下強", fighter_id:1390, skill_genre:10502, begin:6, end:7, time:37, base_damage:10, tes_val:""}
,{tesf:"デデデ", tess:"下強", fighter_id:1390, skill_genre:10502, begin:8, end:11, time:37, base_damage:6, persistence_num:1, tes_val:"持続"}
,{tesf:"デデデ", tess:"横スマッシュ", fighter_id:1390, skill_genre:10601, begin:8, end:11, time:37, base_damage:16, defend_position:"ground", tes_val:"対地" }
,{tesf:"デデデ", tess:"横スマッシュ", fighter_id:1390, skill_genre:10601, begin:42, end:43, time:37, base_damage:25, damage_no:1, tes_val:"" }
,{tesf:"デデデ", tess:"横スマッシュ", fighter_id:1390, skill_genre:10601, begin:42, end:43, time:37, base_damage:18.5, damage_no:2, tes_val:""}
,{tesf:"デデデ", tess:"横スマッシュ", fighter_id:1390, skill_genre:10601, begin:44, end:44, time:37, base_damage:11, alias:"衝撃", defend_position:"ground_only", tes_val:"衝撃波, 対地のみ"}
,{tesf:"デデデ", tess:"上スマッシュ", fighter_id:1390, skill_genre:10600, begin:17, end:24, time:67, base_damage:16, damage_no:1, tes_val:"" }
,{tesf:"デデデ", tess:"上スマッシュ", fighter_id:1390, skill_genre:10600, begin:17, end:24, time:67, base_damage:10, damage_no:2, tes_val:""}
,{tesf:"デデデ", tess:"下スマッシュ", fighter_id:1390, skill_genre:10602, begin:14, end:22, time:52, base_damage:13, tes_val:"" }
, {tesf:"デデデ", tess:"空N", fighter_id:1390, skill_genre:10904, begin:7, end:8, time:39, base_damage:12, landing_lag:9, landing_occurrence_begin:3, landing_occurrence_end:34, tes_val:"", }
,{tesf:"デデデ", tess:"空N", fighter_id:1390, skill_genre:10904, begin:9, end:29, time:39, base_damage:7, landing_lag:9, landing_occurrence_begin:3, landing_occurrence_end:34, persistence_num:1, tes_val:"持続", }
,{tesf:"デデデ", tess:"空前", fighter_id:1390, skill_genre:10901, begin:13, end:15, time:41, base_damage:12, landing_lag:18, landing_occurrence_begin:5, landing_occurrence_end:39, tes_val:"", }
,{tesf:"デデデ", tess:"空後", fighter_id:1390, skill_genre:10903, begin:17, end:19, time:37, base_damage:16, landing_lag:13, landing_occurrence_begin:5, landing_occurrence_end:32, tes_val:"", }
,{tesf:"デデデ", tess:"空上", fighter_id:1390, skill_genre:10900, begin:10, end:10, time:44, base_damage:1, landing_lag:13, landing_occurrence_begin:5, landing_occurrence_end:41, serial_num_str:"1-7", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"10, 12, 14, 16, 18, 20, 22", tes_val:"Hit 1-7", }
,{tesf:"デデデ", tess:"空上", fighter_id:1390, skill_genre:10900, begin:24, end:25, time:44, base_damage:5, landing_lag:13, landing_occurrence_begin:5, landing_occurrence_end:41, serial_num_str:"8", tes_message:"(連続ヒットする技)", tes_val:"Hit 8", }
,{tesf:"デデデ", tess:"空下", fighter_id:1390, skill_genre:10902, begin:22, end:24, time:47, base_damage:15, landing_lag:18, landing_occurrence_begin:7, landing_occurrence_end:43, damage_no:1, tes_val:"", }
,{tesf:"デデデ", tess:"空下", fighter_id:1390, skill_genre:10902, begin:22, end:24, time:47, base_damage:8, landing_lag:18, landing_occurrence_begin:7, landing_occurrence_end:43, damage_no:2, tes_val:"", }
,{tess:"その場投げ", fighter_id:1390 , skill_genre:10200, base_damage:0,begin:8, end:10, time:39,}
,{tess:"ダッシュ投げ", fighter_id:1390 , skill_genre:10201, base_damage:0,begin:11, end:13, time:47,}
,{tess:"ふりむき投げ", fighter_id:1390 , skill_genre:10202, base_damage:0,begin:12, end:14, time:42,}
, {tesf:"ケン", tess:"弱攻撃", fighter_id:1601, skill_genre:10300, begin:9, end:12, time:32, base_damage:6, alias:"弱1 (強)", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"弱1 (強), Hit 1", }
,{tesf:"ケン", tess:"弱攻撃", fighter_id:1601, skill_genre:10300, begin:16, end:17, time:32, base_damage:10, alias:"弱1 (強)", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"弱1 (強), Hit 2", }
,{tesf:"ケン", tess:"弱攻撃", fighter_id:1601, skill_genre:10300, begin:7, end:7, time:37, base_damage:12, damage_no:1, alias:"弱1 (強)", detail_name:"密着", tes_val:"弱1 (強), 密着", }
,{tesf:"ケン", tess:"弱攻撃", fighter_id:1601, skill_genre:10300, begin:7, end:7, time:37, base_damage:8, damage_no:2, alias:"弱1 (強)", detail_name:"密着", tes_val:"弱1 (強), 密着", }
,{tesf:"ケン", tess:"弱攻撃", fighter_id:1601, skill_genre:10300, begin:8, end:11, time:37, base_damage:12, tes_val:"", }
,{tesf:"ケン", tess:"弱攻撃", fighter_id:1601, skill_genre:10300, begin:2, end:3, time:15, base_damage:1.5, alias:"弱1 (弱)", tes_val:"弱1 (弱)", }
,{tesf:"ケン", tess:"弱攻撃", fighter_id:1601, skill_genre:10300, begin:2, end:3, time:6, base_damage:1.5, alias:"弱1 (弱)", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1 (弱)", }
,{tesf:"ケン", tess:"弱攻撃", fighter_id:1601, skill_genre:10300, begin:3, end:4, time:27, base_damage:1.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"ケン", tess:"弱攻撃", fighter_id:1601, skill_genre:10300, begin:8, end:10, time:35, base_damage:5, alias:"弱3", tes_val:"弱3", }
,{tesf:"ケン", tess:"ダッシュ攻撃", fighter_id:1601, skill_genre:10400, begin:7, end:9, time:40, base_damage:12, tes_val:"", }
,{tesf:"ケン", tess:"ダッシュ攻撃", fighter_id:1601, skill_genre:10400, begin:10, end:15, time:40, base_damage:8, persistence_num:1, tes_val:"持続", }
,{tesf:"ケン", tess:"横強", fighter_id:1601, skill_genre:10501, begin:10, end:13, time:34, base_damage:10, damage_no:1, detail_name:"強", tes_val:"強", }
,{tesf:"ケン", tess:"横強", fighter_id:1601, skill_genre:10501, begin:10, end:13, time:34, base_damage:5, damage_no:2, detail_name:"強", tes_val:"強", }
,{tesf:"ケン", tess:"横強", fighter_id:1601, skill_genre:10501, begin:8, end:11, time:23, base_damage:6.8, detail_name:"弱", tes_val:"弱", }
,{tesf:"ケン", tess:"横強", fighter_id:1601, skill_genre:10501, begin:3, end:4, time:29, base_damage:6, detail_name:"弱", tes_val:"弱, 密着", }
,{tesf:"ケン", tess:"横強", fighter_id:1601, skill_genre:10501, begin:4, end:5, time:30, base_damage:6, detail_name:"弱", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱, 密着", }
,{tesf:"ケン", tess:"上強", fighter_id:1601, skill_genre:10500, begin:7, end:7, time:37, base_damage:12, damage_no:1, detail_name:"強", tes_val:"強", }
,{tesf:"ケン", tess:"上強", fighter_id:1601, skill_genre:10500, begin:7, end:7, time:37, base_damage:8, damage_no:2, detail_name:"強", tes_val:"強", }
,{tesf:"ケン", tess:"上強", fighter_id:1601, skill_genre:10500, begin:8, end:11, time:37, base_damage:12, detail_name:"強", persistence_num:1, tes_val:"強, 持続", }
,{tesf:"ケン", tess:"上強", fighter_id:1601, skill_genre:10500, begin:3, end:6, time:14, base_damage:2, detail_name:"弱", tes_val:"弱", }
,{tesf:"ケン", tess:"上強", fighter_id:1601, skill_genre:10500, begin:3, end:6, time:7, base_damage:2, detail_name:"弱", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱", }
,{tesf:"ケン", tess:"下強", fighter_id:1601, skill_genre:10502, begin:6, end:7, time:27, base_damage:7, damage_no:1, detail_name:"強", tes_val:"強", }
,{tesf:"ケン", tess:"下強", fighter_id:1601, skill_genre:10502, begin:6, end:7, time:27, base_damage:5.5, damage_no:2, detail_name:"強", tes_val:"強", }
,{tesf:"ケン", tess:"下強", fighter_id:1601, skill_genre:10502, begin:2, end:3, time:14, base_damage:1.6, detail_name:"弱", tes_val:"弱", }
,{tesf:"ケン", tess:"下強", fighter_id:1601, skill_genre:10502, begin:2, end:3, time:7, base_damage:1.6, detail_name:"弱", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱", }
,{tesf:"ケン", tess:"横スマッシュ", fighter_id:1601, skill_genre:10601, begin:13, end:15, time:45, base_damage:16, damage_no:1, tes_val:"", }
,{tesf:"ケン", tess:"横スマッシュ", fighter_id:1601, skill_genre:10601, begin:13, end:15, time:45, base_damage:12, damage_no:2, tes_val:"", }
,{tesf:"ケン", tess:"上スマッシュ", fighter_id:1601, skill_genre:10600, begin:9, end:9, time:44, base_damage:17, tes_val:"", }
,{tesf:"ケン", tess:"上スマッシュ", fighter_id:1601, skill_genre:10600, begin:10, end:12, time:44, base_damage:13.5, persistence_num:1, tes_val:"持続", }
,{tesf:"ケン", tess:"下スマッシュ", fighter_id:1601, skill_genre:10602, begin:5, end:6, time:41, base_damage:16, damage_no:1, tes_val:"", }
,{tesf:"ケン", tess:"下スマッシュ", fighter_id:1601, skill_genre:10602, begin:5, end:6, time:41, base_damage:12, damage_no:2, tes_val:"", }
,{tesf:"ケン", tess:"コマンド", fighter_id:1601, skill_genre:11400, begin:12, end:12, time:28, base_damage:5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", alias:"鉈落とし蹴り" }
,{tesf:"ケン", tess:"コマンド", fighter_id:1601, skill_genre:11400, begin:15, end:16, time:28, base_damage:5, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", alias:"鉈落とし蹴り" }
,{tesf:"ケン", tess:"コマンド", fighter_id:1601, skill_genre:11400, begin:9, end:10, time:32, base_damage:12, detail_name:"派生なし", tes_val:"派生なし", alias:"大外回し蹴り" }
, {tesf:"ケン", tess:"空N", fighter_id:1601, skill_genre:10904, begin:6, end:8, time:27, base_damage:8, landing_lag:5, landing_occurrence_begin:2, landing_occurrence_end:27, damage_no:1, tes_val:"", }
,{tesf:"ケン", tess:"空N", fighter_id:1601, skill_genre:10904, begin:6, end:8, time:27, base_damage:6.5, landing_lag:5, landing_occurrence_begin:2, landing_occurrence_end:27, damage_no:2, tes_val:"", }
,{tesf:"ケン", tess:"空N", fighter_id:1601, skill_genre:10904, begin:9, end:17, time:27, base_damage:6.5, landing_lag:5, landing_occurrence_begin:2, landing_occurrence_end:27, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"ケン", tess:"空N", fighter_id:1601, skill_genre:10904, begin:9, end:17, time:27, base_damage:4, landing_lag:5, landing_occurrence_begin:2, landing_occurrence_end:27, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"ケン", tess:"空前", fighter_id:1601, skill_genre:10901, begin:8, end:9, time:36, base_damage:14, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:37, damage_no:1, tes_val:"", }
,{tesf:"ケン", tess:"空前", fighter_id:1601, skill_genre:10901, begin:8, end:9, time:36, base_damage:9, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:37, damage_no:2, tes_val:"", }
,{tesf:"ケン", tess:"空前", fighter_id:1601, skill_genre:10901, begin:10, end:14, time:36, base_damage:12, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:37, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"ケン", tess:"空前", fighter_id:1601, skill_genre:10901, begin:10, end:14, time:36, base_damage:8, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:37, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"ケン", tess:"空後", fighter_id:1601, skill_genre:10903, begin:8, end:9, time:41, base_damage:16, landing_lag:10, landing_occurrence_begin:2, landing_occurrence_end:24, damage_no:1, tes_val:"", }
,{tesf:"ケン", tess:"空後", fighter_id:1601, skill_genre:10903, begin:8, end:9, time:41, base_damage:13, landing_lag:10, landing_occurrence_begin:2, landing_occurrence_end:24, damage_no:2, tes_val:"", }
,{tesf:"ケン", tess:"空上", fighter_id:1601, skill_genre:10900, begin:5, end:9, time:35, base_damage:6.5, landing_lag:11, landing_occurrence_begin:2, landing_occurrence_end:18, tes_val:"", }
,{tesf:"ケン", tess:"空下", fighter_id:1601, skill_genre:10902, begin:8, end:12, time:45, base_damage:12, landing_lag:15, landing_occurrence_begin:3, landing_occurrence_end:32, defend_position:"ground", tes_val:"対地", }
,{tesf:"ケン", tess:"空下", fighter_id:1601, skill_genre:10902, begin:8, end:12, time:45, base_damage:15, landing_lag:15, landing_occurrence_begin:3, landing_occurrence_end:32, damage_no:1, defend_position:"air", tes_val:"対空", }
,{tesf:"ケン", tess:"空下", fighter_id:1601, skill_genre:10902, begin:8, end:12, time:45, base_damage:11, landing_lag:15, landing_occurrence_begin:3, landing_occurrence_end:32, damage_no:2, defend_position:"air", tes_val:"対空", }
,{tess:"その場投げ", fighter_id:1601 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34,}
,{tess:"ダッシュ投げ", fighter_id:1601 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42,}
,{tess:"ふりむき投げ", fighter_id:1601 , skill_genre:10202, base_damage:0,begin:10, end:11, time:37,}
, {tesf:"リュカ", tess:"弱攻撃", fighter_id:1370, skill_genre:10300, begin:2, end:2, time:19, base_damage:2.5, alias:"弱1", tes_val:"弱1", }
,{tesf:"リュカ", tess:"弱攻撃", fighter_id:1370, skill_genre:10300, begin:2, end:2, time:14, base_damage:2.5, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"リュカ", tess:"弱攻撃", fighter_id:1370, skill_genre:10300, begin:3, end:3, time:19, base_damage:1.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"リュカ", tess:"弱攻撃", fighter_id:1370, skill_genre:10300, begin:6, end:7, time:29, base_damage:3.5, alias:"弱3", tes_val:"弱3", }
,{tesf:"リュカ", tess:"ダッシュ攻撃", fighter_id:1370, skill_genre:10400, begin:13, end:17, time:37, base_damage:13, damage_no:1, tes_val:"", }
,{tesf:"リュカ", tess:"ダッシュ攻撃", fighter_id:1370, skill_genre:10400, begin:13, end:17, time:37, base_damage:9, damage_no:2, tes_val:"", }
,{tesf:"リュカ", tess:"横強", fighter_id:1370, skill_genre:10501, begin:7, end:9, time:25, base_damage:11, damage_no:1, shift:"all", tes_val:"全シフト", }
,{tesf:"リュカ", tess:"横強", fighter_id:1370, skill_genre:10501, begin:7, end:9, time:25, base_damage:7.5, damage_no:2, shift:"all", tes_val:"全シフト", }
,{tesf:"リュカ", tess:"上強", fighter_id:1370, skill_genre:10500, begin:4, end:4, time:33, base_damage:1.5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リュカ", tess:"上強", fighter_id:1370, skill_genre:10500, begin:7, end:10, time:33, base_damage:8, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"リュカ", tess:"上強", fighter_id:1370, skill_genre:10500, begin:11, end:14, time:33, base_damage:5, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続1", }
,{tesf:"リュカ", tess:"上強", fighter_id:1370, skill_genre:10500, begin:15, end:16, time:33, base_damage:5, persistence_num:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続2", }
,{tesf:"リュカ", tess:"下強", fighter_id:1370, skill_genre:10502, begin:3, end:4, time:15, base_damage:5, tes_val:"", }
,{tesf:"リュカ", tess:"横スマッシュ", fighter_id:1370, skill_genre:10601, begin:14, end:15, time:45, base_damage:15, damage_no:1, tes_val:"", }
,{tesf:"リュカ", tess:"横スマッシュ", fighter_id:1370, skill_genre:10601, begin:14, end:15, time:45, base_damage:14, damage_no:2, tes_val:"", }
,{tesf:"リュカ", tess:"上スマッシュ", fighter_id:1370, skill_genre:10600, begin:28, end:28, time:98, base_damage:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リュカ", tess:"上スマッシュ", fighter_id:1370, skill_genre:10600, begin:30, end:32, time:98, base_damage:21, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"リュカ", tess:"上スマッシュ", fighter_id:1370, skill_genre:10600, begin:33, end:37, time:98, base_damage:20, persistence_num:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続1", }
,{tesf:"リュカ", tess:"上スマッシュ", fighter_id:1370, skill_genre:10600, begin:38, end:42, time:98, base_damage:18, persistence_num:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続2", }
,{tesf:"リュカ", tess:"上スマッシュ", fighter_id:1370, skill_genre:10600, begin:43, end:47, time:98, base_damage:16, persistence_num:3, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続3", }
,{tesf:"リュカ", tess:"上スマッシュ", fighter_id:1370, skill_genre:10600, begin:48, end:52, time:98, base_damage:14, persistence_num:4, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続4", }
,{tesf:"リュカ", tess:"上スマッシュ", fighter_id:1370, skill_genre:10600, begin:53, end:54, time:98, base_damage:14, persistence_num:5, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2, 持続5", }
,{tesf:"リュカ", tess:"下スマッシュ", fighter_id:1370, skill_genre:10602, begin:20, end:22, time:59, base_damage:17, rehit:8, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"リュカ", tess:"下スマッシュ", fighter_id:1370, skill_genre:10602, begin:29, end:31, time:59, base_damage:14, rehit:9, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"リュカ", tess:"下スマッシュ", fighter_id:1370, skill_genre:10602, begin:39, end:41, time:59, base_damage:11, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
, {tesf:"リュカ", tess:"空N", fighter_id:1370, skill_genre:10904, begin:7, end:21, time:44, base_damage:2, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:36, detail_name:"連", rehit:5, tes_val:"連", }
,{tesf:"リュカ", tess:"空N", fighter_id:1370, skill_genre:10904, begin:26, end:26, time:44, base_damage:4, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:36, persistence_num:9, tes_val:"〆", }
,{tesf:"リュカ", tess:"空前", fighter_id:1370, skill_genre:10901, begin:9, end:10, time:41, base_damage:12.5, landing_lag:7, landing_occurrence_begin:2, landing_occurrence_end:33, damage_no:1, persistence_num:0, tes_val:"始", }
,{tesf:"リュカ", tess:"空前", fighter_id:1370, skill_genre:10901, begin:9, end:10, time:41, base_damage:9, landing_lag:7, landing_occurrence_begin:2, landing_occurrence_end:33, damage_no:2, persistence_num:0, tes_val:"始", }
,{tesf:"リュカ", tess:"空前", fighter_id:1370, skill_genre:10901, begin:11, end:12, time:41, base_damage:12.5, landing_lag:7, landing_occurrence_begin:2, landing_occurrence_end:33, tes_val:"", }
,{tesf:"リュカ", tess:"空後", fighter_id:1370, skill_genre:10903, begin:15, end:22, time:39, base_damage:12, landing_lag:9, landing_occurrence_begin:3, landing_occurrence_end:33, damage_no:1, defend_position:"ground", tes_val:"対地", }
,{tesf:"リュカ", tess:"空後", fighter_id:1370, skill_genre:10903, begin:15, end:22, time:39, base_damage:9, landing_lag:9, landing_occurrence_begin:3, landing_occurrence_end:33, damage_no:2, defend_position:"ground", tes_val:"対地", }
,{tesf:"リュカ", tess:"空後", fighter_id:1370, skill_genre:10903, begin:15, end:22, time:39, base_damage:7, landing_lag:9, landing_occurrence_begin:3, landing_occurrence_end:33, damage_no:3, defend_position:"ground", tes_val:"対地", }
,{tesf:"リュカ", tess:"空後", fighter_id:1370, skill_genre:10903, begin:15, end:19, time:39, base_damage:12, landing_lag:9, landing_occurrence_begin:3, landing_occurrence_end:33, damage_no:1, defend_position:"air", tes_val:"対空", }
,{tesf:"リュカ", tess:"空後", fighter_id:1370, skill_genre:10903, begin:15, end:19, time:39, base_damage:9, landing_lag:9, landing_occurrence_begin:3, landing_occurrence_end:33, damage_no:2, defend_position:"air", tes_val:"対空", }
,{tesf:"リュカ", tess:"空後", fighter_id:1370, skill_genre:10903, begin:15, end:19, time:39, base_damage:7, landing_lag:9, landing_occurrence_begin:3, landing_occurrence_end:33, damage_no:3, defend_position:"air", tes_val:"対空", }
,{tesf:"リュカ", tess:"空後", fighter_id:1370, skill_genre:10903, begin:20, end:22, time:39, base_damage:9, landing_lag:9, landing_occurrence_begin:3, landing_occurrence_end:33, damage_no:1, persistence_num:1, defend_position:"air", tes_val:"対空, 持続", }
,{tesf:"リュカ", tess:"空後", fighter_id:1370, skill_genre:10903, begin:20, end:22, time:39, base_damage:7, landing_lag:9, landing_occurrence_begin:3, landing_occurrence_end:33, damage_no:2, persistence_num:1, defend_position:"air", tes_val:"対空, 持続", }
,{tesf:"リュカ", tess:"空上", fighter_id:1370, skill_genre:10900, begin:7, end:10, time:31, base_damage:11, landing_lag:7, landing_occurrence_begin:2, landing_occurrence_end:33, tes_val:"", }
,{tesf:"リュカ", tess:"空下", fighter_id:1370, skill_genre:10902, begin:10, end:12, time:56, base_damage:3.5, landing_lag:16, landing_occurrence_begin:1, landing_occurrence_end:46, serial_num_str:"1-3", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"10-12, 18-20, 26-28", tes_val:"Hit 1-3", }
,{tesf:"リュカ", tess:"空下", fighter_id:1370, skill_genre:10902, begin:34, end:35, time:56, base_damage:5, landing_lag:16, landing_occurrence_begin:1, landing_occurrence_end:46, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }
,{tess:"その場投げ", fighter_id:1370 , skill_genre:10200, base_damage:0,begin:12, end:17, time:46,}
,{tess:"ダッシュ投げ", fighter_id:1370 , skill_genre:10201, base_damage:0,begin:14, end:19, time:54,}
,{tess:"ふりむき投げ", fighter_id:1370 , skill_genre:10202, base_damage:0,begin:15, end:20, time:49,}
, {tesf:"ネス", tess:"弱攻撃", fighter_id:1010, skill_genre:10300, begin:3, end:3, time:19, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ネス", tess:"弱攻撃", fighter_id:1010, skill_genre:10300, begin:3, end:3, time:7, base_damage:2, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ネス", tess:"弱攻撃", fighter_id:1010, skill_genre:10300, begin:3, end:3, time:19, base_damage:1.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"ネス", tess:"弱攻撃", fighter_id:1010, skill_genre:10300, begin:6, end:7, time:29, base_damage:4, alias:"弱3", tes_val:"弱3", }
,{tesf:"ネス", tess:"ダッシュ攻撃", fighter_id:1010, skill_genre:10400, begin:8, end:8, time:39, base_damage:4, damage_no:1, serial_num_str:"1", defend_position:"ground", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 対地", }
,{tesf:"ネス", tess:"ダッシュ攻撃", fighter_id:1010, skill_genre:10400, begin:8, end:8, time:39, base_damage:3, damage_no:2, serial_num_str:"1", defend_position:"ground", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 対地", }
,{tesf:"ネス", tess:"ダッシュ攻撃", fighter_id:1010, skill_genre:10400, begin:8, end:8, time:39, base_damage:7, damage_no:1, serial_num_str:"1", defend_position:"air", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 対空", }
,{tesf:"ネス", tess:"ダッシュ攻撃", fighter_id:1010, skill_genre:10400, begin:8, end:8, time:39, base_damage:3, damage_no:2, serial_num_str:"1", defend_position:"air", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 対空", }
,{tesf:"ネス", tess:"ダッシュ攻撃", fighter_id:1010, skill_genre:10400, begin:15, end:16, time:39, base_damage:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ネス", tess:"ダッシュ攻撃", fighter_id:1010, skill_genre:10400, begin:23, end:24, time:39, base_damage:4, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"ネス", tess:"横強", fighter_id:1010, skill_genre:10501, begin:7, end:10, time:34, base_damage:10, shift:"all", tes_val:"全シフト", }
,{tesf:"ネス", tess:"上強", fighter_id:1010, skill_genre:10500, begin:5, end:6, time:28, base_damage:7, damage_no:1, persistence_num:0, tes_val:"始", }
,{tesf:"ネス", tess:"上強", fighter_id:1010, skill_genre:10500, begin:5, end:6, time:28, base_damage:5, damage_no:2, persistence_num:0, tes_val:"始", }
,{tesf:"ネス", tess:"上強", fighter_id:1010, skill_genre:10500, begin:7, end:8, time:28, base_damage:7, tes_val:"", }
,{tesf:"ネス", tess:"下強", fighter_id:1010, skill_genre:10502, begin:3, end:4, time:11, base_damage:4.5, damage_no:1, tes_val:"", }
,{tesf:"ネス", tess:"下強", fighter_id:1010, skill_genre:10502, begin:3, end:4, time:5, base_damage:4.5, damage_no:1, cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"", }
,{tesf:"ネス", tess:"下強", fighter_id:1010, skill_genre:10502, begin:3, end:4, time:11, base_damage:3, damage_no:2, tes_val:"", }
,{tesf:"ネス", tess:"下強", fighter_id:1010, skill_genre:10502, begin:3, end:4, time:5, base_damage:3, damage_no:2, cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"", }
,{tesf:"ネス", tess:"横スマッシュ", fighter_id:1010, skill_genre:10601, begin:21, end:22, time:54, base_damage:22, damage_no:1, tes_val:"", }
,{tesf:"ネス", tess:"横スマッシュ", fighter_id:1010, skill_genre:10601, begin:21, end:22, time:54, base_damage:20, damage_no:2, tes_val:"", }
,{tesf:"ネス", tess:"横スマッシュ", fighter_id:1010, skill_genre:10601, begin:21, end:22, time:54, base_damage:18, damage_no:3, tes_val:"", }
,{tesf:"ネス", tess:"上スマッシュ", fighter_id:1010, skill_genre:10600, begin:10, end:999, time:54, base_damage:1, detail_name:"溜め", rehit:4, tes_val:"溜め", }
,{tesf:"ネス", tess:"上スマッシュ", fighter_id:1010, skill_genre:10600, begin:10, end:32, time:52, base_damage:13, tes_val:"", }
,{tesf:"ネス", tess:"下スマッシュ", fighter_id:1010, skill_genre:10602, begin:12, end:999, time:52, base_damage:1, detail_name:"溜め", rehit:4, tes_val:"溜め", }
,{tesf:"ネス", tess:"下スマッシュ", fighter_id:1010, skill_genre:10602, begin:12, end:15, time:45, base_damage:1, detail_name:"後方1", rehit:4, tes_val:"後方1", }
,{tesf:"ネス", tess:"下スマッシュ", fighter_id:1010, skill_genre:10602, begin:17, end:18, time:45, base_damage:10, detail_name:"後方2", tes_val:"後方2", }
,{tesf:"ネス", tess:"下スマッシュ", fighter_id:1010, skill_genre:10602, begin:23, end:25, time:45, base_damage:1, tes_val:"前方1", }
,{tesf:"ネス", tess:"下スマッシュ", fighter_id:1010, skill_genre:10602, begin:31, end:32, time:45, base_damage:10, tes_val:"前方2", }
, {tesf:"ネス", tess:"空N", fighter_id:1010, skill_genre:10904, begin:5, end:12, time:35, base_damage:11, landing_lag:8, landing_occurrence_begin:5, landing_occurrence_end:25, tes_val:"", }
,{tesf:"ネス", tess:"空N", fighter_id:1010, skill_genre:10904, begin:13, end:15, time:35, base_damage:7, landing_lag:8, landing_occurrence_begin:5, landing_occurrence_end:25, persistence_num:1, tes_val:"持続", }
,{tesf:"ネス", tess:"空前", fighter_id:1010, skill_genre:10901, begin:8, end:18, time:39, base_damage:1.5, landing_lag:12, landing_occurrence_begin:8, landing_occurrence_end:32, detail_name:"連", rehit:5, tes_val:"連", }
,{tesf:"ネス", tess:"空前", fighter_id:1010, skill_genre:10901, begin:20, end:21, time:39, base_damage:5.5, landing_lag:12, landing_occurrence_begin:8, landing_occurrence_end:32, persistence_num:9, tes_val:"〆", }
,{tesf:"ネス", tess:"空後", fighter_id:1010, skill_genre:10903, begin:10, end:11, time:35, base_damage:15, landing_lag:10, landing_occurrence_begin:10, landing_occurrence_end:24, tes_val:"", }
,{tesf:"ネス", tess:"空後", fighter_id:1010, skill_genre:10903, begin:12, end:18, time:35, base_damage:8, landing_lag:10, landing_occurrence_begin:10, landing_occurrence_end:24, persistence_num:1, tes_val:"持続", }
,{tesf:"ネス", tess:"空上", fighter_id:1010, skill_genre:10900, begin:8, end:14, time:33, base_damage:2.5, landing_lag:8, landing_occurrence_begin:8, landing_occurrence_end:33, detail_name:"連", rehit:2, tes_val:"連", }
,{tesf:"ネス", tess:"空上", fighter_id:1010, skill_genre:10900, begin:15, end:16, time:33, base_damage:5, landing_lag:8, landing_occurrence_begin:8, landing_occurrence_end:33, persistence_num:9, tes_val:"〆", }
,{tesf:"ネス", tess:"空下", fighter_id:1010, skill_genre:10902, begin:20, end:22, time:54, base_damage:14, landing_lag:12, landing_occurrence_begin:20, landing_occurrence_end:40, tes_val:"", }
,{tesf:"ネス", tess:"空下", fighter_id:1010, skill_genre:10902, begin:23, end:26, time:54, base_damage:12, landing_lag:12, landing_occurrence_begin:20, landing_occurrence_end:40, persistence_num:1, tes_val:"持続", }
,{tess:"その場投げ", fighter_id:1010 , skill_genre:10200, base_damage:0,begin:6, end:7, time:37,}
,{tess:"ダッシュ投げ", fighter_id:1010 , skill_genre:10201, base_damage:0,begin:9, end:10, time:45,}
,{tess:"ふりむき投げ", fighter_id:1010 , skill_genre:10202, base_damage:0,begin:10, end:11, time:40,}
, {tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:5, end:5, time:25, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:5, end:5, time:13, base_damage:2, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:5, end:5, time:33, base_damage:1.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:6, end:7, time:44, base_damage:5, alias:"弱3", tes_val:"弱3", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:8, end:8, time:44, base_damage:4.2, alias:"弱3", persistence_num:1, tes_val:"弱3, 持続", }
,{tesf:"シュルク", tess:"ダッシュ攻撃", fighter_id:1570, skill_genre:10400, begin:12, end:13, time:40, base_damage:12.5, damage_no:1, tes_val:"", }
,{tesf:"シュルク", tess:"ダッシュ攻撃", fighter_id:1570, skill_genre:10400, begin:12, end:13, time:40, base_damage:11, damage_no:2, tes_val:"", }
,{tesf:"シュルク", tess:"横強", fighter_id:1570, skill_genre:10501, begin:12, end:13, time:43, base_damage:13.5, damage_no:1, tes_val:"", }
,{tesf:"シュルク", tess:"横強", fighter_id:1570, skill_genre:10501, begin:12, end:13, time:43, base_damage:12, damage_no:2, tes_val:"", }
,{tesf:"シュルク", tess:"上強", fighter_id:1570, skill_genre:10500, begin:11, end:12, time:39, base_damage:10, tes_val:"", }
,{tesf:"シュルク", tess:"上強", fighter_id:1570, skill_genre:10500, begin:13, end:23, time:39, base_damage:10, damage_no:1, persistence_num:1, tes_val:"持続", }
,{tesf:"シュルク", tess:"上強", fighter_id:1570, skill_genre:10500, begin:13, end:23, time:39, base_damage:9, damage_no:2, persistence_num:1, tes_val:"持続", }
,{tesf:"シュルク", tess:"下強", fighter_id:1570, skill_genre:10502, begin:10, end:11, time:31, base_damage:9.5, damage_no:1, tes_val:"", }
,{tesf:"シュルク", tess:"下強", fighter_id:1570, skill_genre:10502, begin:10, end:11, time:31, base_damage:7.5, damage_no:2, tes_val:"", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:14, end:16, time:67, base_damage:5.5, detail_name:"上下", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"上下, Hit 1", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:14, end:15, time:67, base_damage:5.5, detail_name:"無", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"無, Hit 1", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:23, end:23, time:67, base_damage:13, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:23, end:23, time:67, base_damage:11.5, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"シュルク", tess:"上スマッシュ", fighter_id:1570, skill_genre:10600, begin:18, end:21, time:67, base_damage:4.5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"シュルク", tess:"上スマッシュ", fighter_id:1570, skill_genre:10600, begin:22, end:29, time:67, base_damage:4.5, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"シュルク", tess:"上スマッシュ", fighter_id:1570, skill_genre:10600, begin:30, end:33, time:67, base_damage:13.5, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"シュルク", tess:"下スマッシュ", fighter_id:1570, skill_genre:10602, begin:18, end:19, time:82, base_damage:14, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"シュルク", tess:"下スマッシュ", fighter_id:1570, skill_genre:10602, begin:18, end:19, time:82, base_damage:11, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
, {tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:5, end:5, time:25, base_damage:0.6, alias:"弱1", detail_name:"撃", tes_val:"弱1,撃", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:5, end:5, time:13, base_damage:0.6, alias:"弱1", detail_name:"撃", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1,撃", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:5, end:5, time:33, base_damage:0.45, alias:"弱2", detail_name:"撃", tes_val:"弱2,撃", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:6, end:7, time:44, base_damage:1.5, alias:"弱3", detail_name:"撃", tes_val:"弱3,撃", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:8, end:8, time:44, base_damage:1.26, alias:"弱3", detail_name:"撃", persistence_num:1, tes_val:"弱3, 持続,撃", }
,{tesf:"シュルク", tess:"ダッシュ攻撃", fighter_id:1570, skill_genre:10400, begin:12, end:13, time:40, base_damage:3.75, damage_no:1, detail_name:"撃", tes_val:"撃", }
,{tesf:"シュルク", tess:"ダッシュ攻撃", fighter_id:1570, skill_genre:10400, begin:12, end:13, time:40, base_damage:3.3, damage_no:2, detail_name:"撃", tes_val:"撃", }
,{tesf:"シュルク", tess:"横強", fighter_id:1570, skill_genre:10501, begin:12, end:13, time:43, base_damage:4.05, damage_no:1, detail_name:"撃", tes_val:"撃", }
,{tesf:"シュルク", tess:"横強", fighter_id:1570, skill_genre:10501, begin:12, end:13, time:43, base_damage:3.6, damage_no:2, detail_name:"撃", tes_val:"撃", }
,{tesf:"シュルク", tess:"上強", fighter_id:1570, skill_genre:10500, begin:11, end:12, time:39, base_damage:3, detail_name:"撃", tes_val:"撃", }
,{tesf:"シュルク", tess:"上強", fighter_id:1570, skill_genre:10500, begin:13, end:23, time:39, base_damage:3, damage_no:1, detail_name:"撃", persistence_num:1, tes_val:"持続,撃", }
,{tesf:"シュルク", tess:"上強", fighter_id:1570, skill_genre:10500, begin:13, end:23, time:39, base_damage:2.7, damage_no:2, detail_name:"撃", persistence_num:1, tes_val:"持続,撃", }
,{tesf:"シュルク", tess:"下強", fighter_id:1570, skill_genre:10502, begin:10, end:11, time:31, base_damage:2.85, damage_no:1, detail_name:"撃", tes_val:"撃", }
,{tesf:"シュルク", tess:"下強", fighter_id:1570, skill_genre:10502, begin:10, end:11, time:31, base_damage:2.25, damage_no:2, detail_name:"撃", tes_val:"撃", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:14, end:16, time:67, base_damage:1.65, detail_name:"撃", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"上下, Hit 1,撃", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:14, end:15, time:67, base_damage:1.65, detail_name:"撃", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"無, Hit 1,撃", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:23, end:23, time:67, base_damage:3.9, damage_no:1, detail_name:"撃", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2,撃", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:23, end:23, time:67, base_damage:3.45, damage_no:2, detail_name:"撃", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2,撃", }
,{tesf:"シュルク", tess:"上スマッシュ", fighter_id:1570, skill_genre:10600, begin:18, end:21, time:67, base_damage:1.35, detail_name:"撃", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1,撃", }
,{tesf:"シュルク", tess:"上スマッシュ", fighter_id:1570, skill_genre:10600, begin:22, end:29, time:67, base_damage:1.35, detail_name:"撃", persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続,撃", }
,{tesf:"シュルク", tess:"上スマッシュ", fighter_id:1570, skill_genre:10600, begin:30, end:33, time:67, base_damage:4.05, detail_name:"撃", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2,撃", }
,{tesf:"シュルク", tess:"下スマッシュ", fighter_id:1570, skill_genre:10602, begin:18, end:19, time:82, base_damage:4.2, damage_no:1, detail_name:"撃", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1,撃", }
,{tesf:"シュルク", tess:"下スマッシュ", fighter_id:1570, skill_genre:10602, begin:18, end:19, time:82, base_damage:3.3, damage_no:2, detail_name:"撃", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1,撃", }
, {tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:5, end:5, time:25, base_damage:2.8, alias:"弱1", detail_name:"斬", tes_val:"弱1,斬", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:5, end:5, time:13, base_damage:2.8, alias:"弱1", detail_name:"斬", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1,斬", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:5, end:5, time:33, base_damage:2.1, alias:"弱2", detail_name:"斬", tes_val:"弱2,斬", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:6, end:7, time:44, base_damage:7, alias:"弱3", detail_name:"斬", tes_val:"弱3,斬", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:8, end:8, time:44, base_damage:5.88, alias:"弱3", detail_name:"斬", persistence_num:1, tes_val:"弱3, 持続,斬", }
,{tesf:"シュルク", tess:"ダッシュ攻撃", fighter_id:1570, skill_genre:10400, begin:12, end:13, time:40, base_damage:17.5, damage_no:1, detail_name:"斬", tes_val:"斬", }
,{tesf:"シュルク", tess:"ダッシュ攻撃", fighter_id:1570, skill_genre:10400, begin:12, end:13, time:40, base_damage:15.4, damage_no:2, detail_name:"斬", tes_val:"斬", }
,{tesf:"シュルク", tess:"横強", fighter_id:1570, skill_genre:10501, begin:12, end:13, time:43, base_damage:18.9, damage_no:1, detail_name:"斬", tes_val:"斬", }
,{tesf:"シュルク", tess:"横強", fighter_id:1570, skill_genre:10501, begin:12, end:13, time:43, base_damage:16.8, damage_no:2, detail_name:"斬", tes_val:"斬", }
,{tesf:"シュルク", tess:"上強", fighter_id:1570, skill_genre:10500, begin:11, end:12, time:39, base_damage:14, detail_name:"斬", tes_val:"斬", }
,{tesf:"シュルク", tess:"上強", fighter_id:1570, skill_genre:10500, begin:13, end:23, time:39, base_damage:14, damage_no:1, detail_name:"斬", persistence_num:1, tes_val:"持続,斬", }
,{tesf:"シュルク", tess:"上強", fighter_id:1570, skill_genre:10500, begin:13, end:23, time:39, base_damage:12.6, damage_no:2, detail_name:"斬", persistence_num:1, tes_val:"持続,斬", }
,{tesf:"シュルク", tess:"下強", fighter_id:1570, skill_genre:10502, begin:10, end:11, time:31, base_damage:13.3, damage_no:1, detail_name:"斬", tes_val:"斬", }
,{tesf:"シュルク", tess:"下強", fighter_id:1570, skill_genre:10502, begin:10, end:11, time:31, base_damage:10.5, damage_no:2, detail_name:"斬", tes_val:"斬", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:14, end:16, time:67, base_damage:7.7, detail_name:"斬", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"上下, Hit 1,斬", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:14, end:15, time:67, base_damage:7.7, detail_name:"斬", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"無, Hit 1,斬", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:23, end:23, time:67, base_damage:18.2, damage_no:1, detail_name:"斬", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2,斬", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:23, end:23, time:67, base_damage:16.1, damage_no:2, detail_name:"斬", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2,斬", }
,{tesf:"シュルク", tess:"上スマッシュ", fighter_id:1570, skill_genre:10600, begin:18, end:21, time:67, base_damage:6.3, detail_name:"斬", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1,斬", }
,{tesf:"シュルク", tess:"上スマッシュ", fighter_id:1570, skill_genre:10600, begin:22, end:29, time:67, base_damage:6.3, detail_name:"斬", persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続,斬", }
,{tesf:"シュルク", tess:"上スマッシュ", fighter_id:1570, skill_genre:10600, begin:30, end:33, time:67, base_damage:18.9, detail_name:"斬", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2,斬", }
,{tesf:"シュルク", tess:"下スマッシュ", fighter_id:1570, skill_genre:10602, begin:18, end:19, time:82, base_damage:19.6, damage_no:1, detail_name:"斬", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1,斬", }
,{tesf:"シュルク", tess:"下スマッシュ", fighter_id:1570, skill_genre:10602, begin:18, end:19, time:82, base_damage:15.4, damage_no:2, detail_name:"斬", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1,斬", }
, {tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:5, end:5, time:25, base_damage:1, alias:"弱1", detail_name:"盾", tes_val:"弱1,盾", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:5, end:5, time:13, base_damage:1, alias:"弱1", detail_name:"盾", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1,盾", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:5, end:5, time:33, base_damage:0.75, alias:"弱2", detail_name:"盾", tes_val:"弱2,盾", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:6, end:7, time:44, base_damage:2.5, alias:"弱3", detail_name:"盾", tes_val:"弱3,盾", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:8, end:8, time:44, base_damage:2.1, alias:"弱3", detail_name:"盾", persistence_num:1, tes_val:"弱3, 持続,盾", }
,{tesf:"シュルク", tess:"ダッシュ攻撃", fighter_id:1570, skill_genre:10400, begin:12, end:13, time:40, base_damage:6.25, damage_no:1, detail_name:"盾", tes_val:"盾", }
,{tesf:"シュルク", tess:"ダッシュ攻撃", fighter_id:1570, skill_genre:10400, begin:12, end:13, time:40, base_damage:5.5, damage_no:2, detail_name:"盾", tes_val:"盾", }
,{tesf:"シュルク", tess:"横強", fighter_id:1570, skill_genre:10501, begin:12, end:13, time:43, base_damage:6.75, damage_no:1, detail_name:"盾", tes_val:"盾", }
,{tesf:"シュルク", tess:"横強", fighter_id:1570, skill_genre:10501, begin:12, end:13, time:43, base_damage:6, damage_no:2, detail_name:"盾", tes_val:"盾", }
,{tesf:"シュルク", tess:"上強", fighter_id:1570, skill_genre:10500, begin:11, end:12, time:39, base_damage:5, detail_name:"盾", tes_val:"盾", }
,{tesf:"シュルク", tess:"上強", fighter_id:1570, skill_genre:10500, begin:13, end:23, time:39, base_damage:5, damage_no:1, detail_name:"盾", persistence_num:1, tes_val:"持続,盾", }
,{tesf:"シュルク", tess:"上強", fighter_id:1570, skill_genre:10500, begin:13, end:23, time:39, base_damage:4.5, damage_no:2, detail_name:"盾", persistence_num:1, tes_val:"持続,盾", }
,{tesf:"シュルク", tess:"下強", fighter_id:1570, skill_genre:10502, begin:10, end:11, time:31, base_damage:4.75, damage_no:1, detail_name:"盾", tes_val:"盾", }
,{tesf:"シュルク", tess:"下強", fighter_id:1570, skill_genre:10502, begin:10, end:11, time:31, base_damage:3.75, damage_no:2, detail_name:"盾", tes_val:"盾", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:14, end:16, time:67, base_damage:2.75, detail_name:"盾", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"上下, Hit 1,盾", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:14, end:15, time:67, base_damage:2.75, detail_name:"盾", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"無, Hit 1,盾", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:23, end:23, time:67, base_damage:6.5, damage_no:1, detail_name:"盾", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2,盾", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:23, end:23, time:67, base_damage:5.75, damage_no:2, detail_name:"盾", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2,盾", }
,{tesf:"シュルク", tess:"上スマッシュ", fighter_id:1570, skill_genre:10600, begin:18, end:21, time:67, base_damage:2.25, detail_name:"盾", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1,盾", }
,{tesf:"シュルク", tess:"上スマッシュ", fighter_id:1570, skill_genre:10600, begin:22, end:29, time:67, base_damage:2.25, detail_name:"盾", persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続,盾", }
,{tesf:"シュルク", tess:"上スマッシュ", fighter_id:1570, skill_genre:10600, begin:30, end:33, time:67, base_damage:6.75, detail_name:"盾", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2,盾", }
,{tesf:"シュルク", tess:"下スマッシュ", fighter_id:1570, skill_genre:10602, begin:18, end:19, time:82, base_damage:7, damage_no:1, detail_name:"盾", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1,盾", }
,{tesf:"シュルク", tess:"下スマッシュ", fighter_id:1570, skill_genre:10602, begin:18, end:19, time:82, base_damage:5.5, damage_no:2, detail_name:"盾", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1,盾", }
, {tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:5, end:5, time:25, base_damage:1.4, alias:"弱1", detail_name:"疾", tes_val:"弱1,疾", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:5, end:5, time:13, base_damage:1.4, alias:"弱1", detail_name:"疾", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1,疾", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:5, end:5, time:33, base_damage:1.05, alias:"弱2", detail_name:"疾", tes_val:"弱2,疾", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:6, end:7, time:44, base_damage:3.5, alias:"弱3", detail_name:"疾", tes_val:"弱3,疾", }
,{tesf:"シュルク", tess:"弱攻撃", fighter_id:1570, skill_genre:10300, begin:8, end:8, time:44, base_damage:2.94, alias:"弱3", detail_name:"疾", persistence_num:1, tes_val:"弱3, 持続,疾", }
,{tesf:"シュルク", tess:"ダッシュ攻撃", fighter_id:1570, skill_genre:10400, begin:12, end:13, time:40, base_damage:8.75, damage_no:1, detail_name:"疾", tes_val:"疾", }
,{tesf:"シュルク", tess:"ダッシュ攻撃", fighter_id:1570, skill_genre:10400, begin:12, end:13, time:40, base_damage:7.7, damage_no:2, detail_name:"疾", tes_val:"疾", }
,{tesf:"シュルク", tess:"横強", fighter_id:1570, skill_genre:10501, begin:12, end:13, time:43, base_damage:9.45, damage_no:1, detail_name:"疾", tes_val:"疾", }
,{tesf:"シュルク", tess:"横強", fighter_id:1570, skill_genre:10501, begin:12, end:13, time:43, base_damage:8.4, damage_no:2, detail_name:"疾", tes_val:"疾", }
,{tesf:"シュルク", tess:"上強", fighter_id:1570, skill_genre:10500, begin:11, end:12, time:39, base_damage:7, detail_name:"疾", tes_val:"疾", }
,{tesf:"シュルク", tess:"上強", fighter_id:1570, skill_genre:10500, begin:13, end:23, time:39, base_damage:7, damage_no:1, detail_name:"疾", persistence_num:1, tes_val:"持続,疾", }
,{tesf:"シュルク", tess:"上強", fighter_id:1570, skill_genre:10500, begin:13, end:23, time:39, base_damage:6.3, damage_no:2, detail_name:"疾", persistence_num:1, tes_val:"持続,疾", }
,{tesf:"シュルク", tess:"下強", fighter_id:1570, skill_genre:10502, begin:10, end:11, time:31, base_damage:6.65, damage_no:1, detail_name:"疾", tes_val:"疾", }
,{tesf:"シュルク", tess:"下強", fighter_id:1570, skill_genre:10502, begin:10, end:11, time:31, base_damage:5.25, damage_no:2, detail_name:"疾", tes_val:"疾", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:14, end:16, time:67, base_damage:3.85, detail_name:"疾", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"上下, Hit 1,疾", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:14, end:15, time:67, base_damage:3.85, detail_name:"疾", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"無, Hit 1,疾", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:23, end:23, time:67, base_damage:9.1, damage_no:1, detail_name:"疾", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2,疾", }
,{tesf:"シュルク", tess:"横スマッシュ", fighter_id:1570, skill_genre:10601, begin:23, end:23, time:67, base_damage:8.05, damage_no:2, detail_name:"疾", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2,疾", }
,{tesf:"シュルク", tess:"上スマッシュ", fighter_id:1570, skill_genre:10600, begin:18, end:21, time:67, base_damage:3.15, detail_name:"疾", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1,疾", }
,{tesf:"シュルク", tess:"上スマッシュ", fighter_id:1570, skill_genre:10600, begin:22, end:29, time:67, base_damage:3.15, detail_name:"疾", persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続,疾", }
,{tesf:"シュルク", tess:"上スマッシュ", fighter_id:1570, skill_genre:10600, begin:30, end:33, time:67, base_damage:9.45, detail_name:"疾", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2,疾", }
,{tesf:"シュルク", tess:"下スマッシュ", fighter_id:1570, skill_genre:10602, begin:18, end:19, time:82, base_damage:9.8, damage_no:1, detail_name:"疾", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1,疾", }
,{tesf:"シュルク", tess:"下スマッシュ", fighter_id:1570, skill_genre:10602, begin:18, end:19, time:82, base_damage:7.7, damage_no:2, detail_name:"疾", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1,疾", }
,{tess:"その場投げ", fighter_id:1570 , skill_genre:10200, base_damage:0,begin:7, end:8, time:36,}
,{tess:"ダッシュ投げ", fighter_id:1570 , skill_genre:10201, base_damage:0,begin:10, end:11, time:44,}
,{tess:"ふりむき投げ", fighter_id:1570 , skill_genre:10202, base_damage:0,begin:11, end:12, time:39,}
, {tesf:"ロックマン", tess:"弱攻撃", fighter_id:1460, skill_genre:10300, begin:7, end:10, time:35, base_damage:2, detail_name:"弾1", tes_val:"弾1", }
,{tesf:"ロックマン", tess:"弱攻撃", fighter_id:1460, skill_genre:10300, begin:11, end:14, time:35, base_damage:2, detail_name:"弾1", persistence_num:1, tes_val:"弾1, 持続1", }
,{tesf:"ロックマン", tess:"弱攻撃", fighter_id:1460, skill_genre:10300, begin:15, end:30, time:35, base_damage:2, detail_name:"弾1", persistence_num:2, tes_val:"弾1, 持続2", }
,{tesf:"ロックマン", tess:"弱攻撃", fighter_id:1460, skill_genre:10300, begin:19, end:22, time:47, base_damage:2, detail_name:"弾2", tes_val:"弾2", }
,{tesf:"ロックマン", tess:"弱攻撃", fighter_id:1460, skill_genre:10300, begin:23, end:26, time:47, base_damage:2, detail_name:"弾2", persistence_num:1, tes_val:"弾2, 持続1", }
,{tesf:"ロックマン", tess:"弱攻撃", fighter_id:1460, skill_genre:10300, begin:27, end:42, time:47, base_damage:2, detail_name:"弾2", persistence_num:2, tes_val:"弾2, 持続2", }
,{tesf:"ロックマン", tess:"弱攻撃", fighter_id:1460, skill_genre:10300, begin:31, end:34, time:59, base_damage:2, detail_name:"弾3", tes_val:"弾3", }
,{tesf:"ロックマン", tess:"弱攻撃", fighter_id:1460, skill_genre:10300, begin:35, end:38, time:59, base_damage:2, detail_name:"弾3", persistence_num:1, tes_val:"弾3, 持続1", }
,{tesf:"ロックマン", tess:"弱攻撃", fighter_id:1460, skill_genre:10300, begin:39, end:54, time:59, base_damage:2, detail_name:"弾3", persistence_num:2, tes_val:"弾3, 持続2", }
,{tesf:"ロックマン", tess:"ダッシュ攻撃", fighter_id:1460, skill_genre:10400, begin:8, end:8, time:60, base_damage:1.2, serial_num_str:"1-7", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"8, 11, 14, 17, 20, 23, 26", tes_val:"Hit 1-7", }
,{tesf:"ロックマン", tess:"ダッシュ攻撃", fighter_id:1460, skill_genre:10400, begin:36, end:36, time:60, base_damage:4, serial_num_str:"8", tes_message:"(連続ヒットする技)", tes_val:"Hit 8", }
,{tesf:"ロックマン", tess:"上強", fighter_id:1460, skill_genre:10500, begin:6, end:6, time:70, base_damage:17, tes_val:"", }
,{tesf:"ロックマン", tess:"上強", fighter_id:1460, skill_genre:10500, begin:7, end:9, time:70, base_damage:12, persistence_num:1, tes_val:"持続1", }
,{tesf:"ロックマン", tess:"上強", fighter_id:1460, skill_genre:10500, begin:10, end:16, time:70, base_damage:8, persistence_num:2, tes_val:"持続2", }
,{tesf:"ロックマン", tess:"下強", fighter_id:1460, skill_genre:10502, begin:5, end:8, time:46, base_damage:8, tes_val:"", }
,{tesf:"ロックマン", tess:"下強", fighter_id:1460, skill_genre:10502, begin:9, end:21, time:46, base_damage:5, persistence_num:1, tes_val:"持続", }
,{tesf:"ロックマン", tess:"横スマッシュ", fighter_id:1460, skill_genre:10601, begin:19, end:19, is_unknown_end:true,is_electrical:true,time:54, base_damage:11.5, detail_name:"溜め無し", tes_val:"溜め無し", correction:0.232,is_item_throw:true}
,{tesf:"ロックマン", tess:"上スマッシュ", fighter_id:1460, skill_genre:10600, begin:8, end:8, time:68, base_damage:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ロックマン", tess:"上スマッシュ", fighter_id:1460, skill_genre:10600, begin:11, end:12, time:68, base_damage:1.5, serial_num_str:"2-6", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"11-12, 15-16, 19-20, 23-24, 27-28", tes_val:"Hit 2-6", }
,{tesf:"ロックマン", tess:"上スマッシュ", fighter_id:1460, skill_genre:10600, begin:31, end:31, time:68, base_damage:6, serial_num_str:"7", tes_message:"(連続ヒットする技)", tes_val:"Hit 7", }
,{tesf:"ロックマン", tess:"下スマッシュ", fighter_id:1460, skill_genre:10602, begin:17, end:17, time:78, base_damage:17, tes_val:"", }
,{tesf:"ロックマン", tess:"下スマッシュ", fighter_id:1460, skill_genre:10602, begin:18, end:19, time:78, base_damage:14, persistence_num:1, tes_val:"持続1", }
,{tesf:"ロックマン", tess:"下スマッシュ", fighter_id:1460, skill_genre:10602, begin:20, end:33, time:78, base_damage:9, persistence_num:2, tes_val:"持続2", }
, {tesf:"ロックマン", tess:"空N", fighter_id:1460, skill_genre:10904, begin:7, end:9, time:33, base_damage:2, landing_lag:0, landing_occurrence_begin:0, detail_name:"本体", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"本体,Hit 1", }
,{tesf:"ロックマン", tess:"空N",is_item_throw:true, fighter_id:1460, skill_genre:10904, begin:7, end:10, time:33, base_damage:2, landing_lag:0, landing_occurrence_begin:0, detail_name:"弾1", tes_val:"弾1", }
,{tesf:"ロックマン", tess:"空N",is_item_throw:true, fighter_id:1460, skill_genre:10904, begin:11, end:14, time:33, base_damage:2, landing_lag:0, landing_occurrence_begin:0, detail_name:"弾1", persistence_num:1, tes_val:"弾1, 持続1", }
,{tesf:"ロックマン", tess:"空N",is_item_throw:true, fighter_id:1460, skill_genre:10904, begin:15, end:30, time:33, base_damage:2, landing_lag:0, landing_occurrence_begin:0, detail_name:"弾1", persistence_num:2, tes_val:"弾1, 持続2", }
,{tesf:"ロックマン", tess:"空N",is_item_throw:true, fighter_id:1460, skill_genre:10904, begin:19, end:21, time:45, base_damage:2, landing_lag:0, landing_occurrence_begin:0, detail_name:"本体", serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"本体, Hit 2", }
,{tesf:"ロックマン", tess:"空N",is_item_throw:true, fighter_id:1460, skill_genre:10904, begin:19, end:22, time:45, base_damage:2, landing_lag:0, landing_occurrence_begin:0, detail_name:"弾2", tes_val:"弾2", }
,{tesf:"ロックマン", tess:"空N",is_item_throw:true, fighter_id:1460, skill_genre:10904, begin:23, end:26, time:45, base_damage:2, landing_lag:0, landing_occurrence_begin:0, detail_name:"弾2", persistence_num:1, tes_val:"弾2, 持続1", }
,{tesf:"ロックマン", tess:"空N",is_item_throw:true, fighter_id:1460, skill_genre:10904, begin:27, end:42, time:45, base_damage:2, landing_lag:0, landing_occurrence_begin:0, detail_name:"弾2", persistence_num:2, tes_val:"弾2, 持続2", }
,{tesf:"ロックマン", tess:"空N",is_item_throw:true, fighter_id:1460, skill_genre:10904, begin:31, end:33, time:57, base_damage:2, landing_lag:0, landing_occurrence_begin:0, detail_name:"本体", serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"本体, Hit 3", }
,{tesf:"ロックマン", tess:"空N",is_item_throw:true, fighter_id:1460, skill_genre:10904, begin:31, end:34, time:57, base_damage:2, landing_lag:0, landing_occurrence_begin:0, detail_name:"弾3", tes_val:"弾3", }
,{tesf:"ロックマン", tess:"空N",is_item_throw:true, fighter_id:1460, skill_genre:10904, begin:35, end:38, time:57, base_damage:2, landing_lag:0, landing_occurrence_begin:0, detail_name:"弾3", persistence_num:1, tes_val:"弾3, 持続1", }
,{tesf:"ロックマン", tess:"空N",is_item_throw:true, fighter_id:1460, skill_genre:10904, begin:39, end:54, time:57, base_damage:2, landing_lag:0, landing_occurrence_begin:0, detail_name:"弾3", persistence_num:2, tes_val:"弾3, 持続2", }
,{tesf:"ロックマン", tess:"空前", fighter_id:1460, skill_genre:10901, begin:9, end:11, time:40, base_damage:8.5, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:38, damage_no:1, tes_val:"", }
,{tesf:"ロックマン", tess:"空前", fighter_id:1460, skill_genre:10901, begin:9, end:11, time:40, base_damage:8, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:38, damage_no:2, tes_val:"", }
,{tesf:"ロックマン", tess:"空前", fighter_id:1460, skill_genre:10901, begin:12, end:17, time:40, base_damage:5, landing_lag:11, landing_occurrence_begin:3, landing_occurrence_end:38, persistence_num:1, tes_val:"持続", }
,{tesf:"ロックマン", tess:"空後", fighter_id:1460, skill_genre:10903, begin:4, end:5, time:44, base_damage:3, landing_lag:20, landing_occurrence_begin:4, landing_occurrence_end:39, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ロックマン", tess:"空後", fighter_id:1460, skill_genre:10903, begin:7, end:8, time:44, base_damage:4, landing_lag:20, landing_occurrence_begin:4, landing_occurrence_end:39, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ロックマン", tess:"空後", fighter_id:1460, skill_genre:10903, begin:10, end:11, time:44, base_damage:5, landing_lag:20, landing_occurrence_begin:4, landing_occurrence_end:39, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"ロックマン", tess:"空上",is_item_throw:true, fighter_id:1460, skill_genre:10900, begin:11, end:18, time:53, base_damage:3, landing_lag:20, landing_occurrence_begin:2, landing_occurrence_end:50, rehit:3, tes_val:"連1", }
,{tesf:"ロックマン", tess:"空上",is_item_throw:true, fighter_id:1460, skill_genre:10900, begin:19, end:32, time:53, base_damage:2, landing_lag:20, landing_occurrence_begin:2, landing_occurrence_end:50, rehit:5, tes_val:"連2", }
,{tesf:"ロックマン", tess:"空上",is_item_throw:true, fighter_id:1460, skill_genre:10900, begin:33, end:55, time:53, base_damage:1, landing_lag:20, landing_occurrence_begin:2, landing_occurrence_end:50, rehit:5, tes_val:"連3", }
,{tesf:"ロックマン", tess:"空上",is_item_throw:true, fighter_id:1460, skill_genre:10900, begin:56, end:61, time:53, base_damage:2, landing_lag:20, landing_occurrence_begin:2, landing_occurrence_end:50, persistence_num:9, tes_val:"〆", }
,{tess:"その場投げ", fighter_id:1460 , skill_genre:10200, base_damage:0,begin:6, end:7, time:37,}
,{tess:"ダッシュ投げ", fighter_id:1460 , skill_genre:10201, base_damage:0,begin:9, end:10, time:45,}
,{tess:"ふりむき投げ", fighter_id:1460 , skill_genre:10202, base_damage:0,begin:10, end:11, time:40,}
, {tesf:"Mr.ゲーム&ウォッチ", tess:"弱攻撃", fighter_id:1260, skill_genre:10300, begin:4, end:5, time:15, base_damage:3, alias:"弱1", tes_val:"弱1", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"弱攻撃", fighter_id:1260, skill_genre:10300, begin:4, end:4, time:19, base_damage:0.8, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"4, 12, 19", tes_val:"百裂, 連", correction:10}
,{tesf:"Mr.ゲーム&ウォッチ", tess:"弱攻撃", fighter_id:1260, skill_genre:10300, begin:2, end:2, time:34, base_damage:3, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"ダッシュ攻撃", fighter_id:1260, skill_genre:10400, begin:6, end:9, time:37, base_damage:10, tes_val:"", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"ダッシュ攻撃", fighter_id:1260, skill_genre:10400, begin:10, end:19, time:37, base_damage:6.5, persistence_num:1, tes_val:"持続", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"横強", fighter_id:1260, skill_genre:10501, begin:8, end:9, time:37, base_damage:12, damage_no:1, tes_val:"", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"横強", fighter_id:1260, skill_genre:10501, begin:8, end:9, time:37, base_damage:10, damage_no:2, tes_val:"", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"横強", fighter_id:1260, skill_genre:10501, begin:10, end:20, time:37, base_damage:6, persistence_num:1, tes_val:"持続", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"上強", fighter_id:1260, skill_genre:10500, begin:10, end:12, time:33, base_damage:7, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"上強", fighter_id:1260, skill_genre:10500, begin:20, end:22, time:33, base_damage:7, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"下強", fighter_id:1260, skill_genre:10502, begin:6, end:8, time:42, base_damage:9, defend_position:"ground_only", tes_val:"対地のみ", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"横スマッシュ", fighter_id:1260, skill_genre:10601, begin:17, end:18, time:42, base_damage:18, damage_no:1, tes_val:"", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"横スマッシュ", fighter_id:1260, skill_genre:10601, begin:17, end:18, time:42, base_damage:14, damage_no:2, tes_val:"", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"上スマッシュ", fighter_id:1260, skill_genre:10600, begin:21, end:25, time:38, base_damage:16, tes_val:"", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"下スマッシュ", fighter_id:1260, skill_genre:10602, begin:12, end:16, time:37, base_damage:15, damage_no:1, tes_val:"", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"下スマッシュ", fighter_id:1260, skill_genre:10602, begin:12, end:16, time:37, base_damage:13, damage_no:2, tes_val:"", }
, {tesf:"Mr.ゲーム&ウォッチ", tess:"空N", fighter_id:1260, skill_genre:10904, begin:7, end:10, time:42, base_damage:3, landing_lag:7, landing_occurrence_begin:3, landing_occurrence_end:42, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"空N", fighter_id:1260, skill_genre:10904, begin:12, end:15, time:42, base_damage:3, landing_lag:7, landing_occurrence_begin:3, landing_occurrence_end:42, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"空N", fighter_id:1260, skill_genre:10904, begin:17, end:20, time:42, base_damage:3, landing_lag:7, landing_occurrence_begin:3, landing_occurrence_end:42, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"空N", fighter_id:1260, skill_genre:10904, begin:22, end:23, time:42, base_damage:4, landing_lag:7, landing_occurrence_begin:3, landing_occurrence_end:42, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"空前", fighter_id:1260, skill_genre:10901, begin:10, end:13, time:47, base_damage:3, landing_lag:17, landing_occurrence_begin:1, landing_occurrence_end:41, tes_val:"", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"空前", fighter_id:1260, skill_genre:10901, begin:14, end:15, time:47, base_damage:12, landing_lag:17, landing_occurrence_begin:1, landing_occurrence_end:41, detail_name:"爆発", tes_val:"爆発", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"空後", fighter_id:1260, skill_genre:10903, begin:10, end:13, time:39, base_damage:2, landing_lag:18, landing_occurrence_begin:10, landing_occurrence_end:37, serial_num_str:"1-3", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"10-13,14-17, 18-21", tes_val:"Hit 1-3", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"空後", fighter_id:1260, skill_genre:10903, begin:22, end:22, time:39, base_damage:3, landing_lag:18, landing_occurrence_begin:10, landing_occurrence_end:37, serial_num_str:"4", tes_message:"(連続ヒットする技)", tes_val:"Hit 4", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"空後", fighter_id:1260, skill_genre:10903, begin:1, end:1, time:39, base_damage:3, landing_lag:18, landing_occurrence_begin:10, landing_occurrence_end:37, is_landing_attack:true, tes_val:"着地", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"空上", fighter_id:1260, skill_genre:10900, begin:9, end:14, time:42, base_damage:1.8, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:43, rehit:6, tes_val:"連1", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"空上", fighter_id:1260, skill_genre:10900, begin:15, end:28, time:42, base_damage:1.8, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:43, rehit:6, tes_val:"連2", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"空上", fighter_id:1260, skill_genre:10900, begin:29, end:35, time:42, base_damage:1.8, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:43, rehit:6, tes_val:"連3", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"空上", fighter_id:1260, skill_genre:10900, begin:37, end:41, time:42, base_damage:3, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:43, persistence_num:9, tes_val:"〆", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"空下", fighter_id:1260, skill_genre:10902, begin:12, end:13, time:49, base_damage:11, landing_lag:22, landing_occurrence_begin:6, landing_occurrence_end:49, tes_val:"メテオ", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"空下", fighter_id:1260, skill_genre:10902, begin:14, end:38, time:49, base_damage:11, landing_lag:22, landing_occurrence_begin:6, landing_occurrence_end:49, persistence_num:1, tes_val:"持続", }
,{tesf:"Mr.ゲーム&ウォッチ", tess:"空下", fighter_id:1260, skill_genre:10902, begin:1, end:2, time:49, base_damage:3.5, landing_lag:22, landing_occurrence_begin:6, landing_occurrence_end:49, is_landing_attack:true, tes_val:"着地", }
,{tess:"その場投げ", fighter_id:1260 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34,}
,{tess:"ダッシュ投げ", fighter_id:1260 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42,}
,{tess:"ふりむき投げ", fighter_id:1260 , skill_genre:10202, base_damage:0,begin:10, end:11, time:36,}
, {tesf:"ピット", tess:"弱攻撃", fighter_id:1280, skill_genre:10300, begin:4, end:5, time:25, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ピット", tess:"弱攻撃", fighter_id:1280, skill_genre:10300, begin:5, end:6, time:29, base_damage:2, alias:"弱2", tes_val:"弱2", }
,{tesf:"ピット", tess:"弱攻撃", fighter_id:1280, skill_genre:10300, begin:3, end:3, time:31, base_damage:4, alias:"弱3", tes_val:"弱3", }
,{tesf:"ピット", tess:"弱攻撃", fighter_id:1280, skill_genre:10300, begin:3, end:3, time:4, base_damage:0, alias:"百裂始", persistence_num:0, tes_val:"百裂, 始", }
,{tesf:"ピット", tess:"弱攻撃", fighter_id:1280, skill_genre:10300, begin:2, end:2, time:16, base_damage:0.5, alias:"百裂", detail_name:"連", tes_message:"(連続ヒットまとめ技)", test_serial_num_strs:"2, 4, 6, 8, 10, 12, 14, 16", tes_val:"百裂, 連",correction:3 }
,{tesf:"ピット", tess:"弱攻撃", fighter_id:1280, skill_genre:10300, begin:4, end:5, time:47, base_damage:2, alias:"百裂〆", persistence_num:9, tes_val:"百裂, 〆", }
,{tesf:"ピット", tess:"ダッシュ攻撃", fighter_id:1280, skill_genre:10400, begin:7, end:9, time:38, base_damage:11, tes_val:"", correction:1.37}
,{tesf:"ピット", tess:"横強", fighter_id:1280, skill_genre:10501, begin:10, end:14, time:39, base_damage:10, damage_no:1, tes_val:"", }
,{tesf:"ピット", tess:"横強", fighter_id:1280, skill_genre:10501, begin:10, end:14, time:39, base_damage:7, damage_no:2, tes_val:"", }
,{tesf:"ピット", tess:"上強", fighter_id:1280, skill_genre:10500, begin:6, end:8, time:32, base_damage:4, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ピット", tess:"上強", fighter_id:1280, skill_genre:10500, begin:15, end:16, time:32, base_damage:5, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ピット", tess:"下強", fighter_id:1280, skill_genre:10502, begin:6, end:7, time:25, base_damage:6, tes_val:"", }
,{tesf:"ピット", tess:"横スマッシュ", fighter_id:1280, skill_genre:10601, begin:10, end:10, time:54, base_damage:5, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ピット", tess:"横スマッシュ", fighter_id:1280, skill_genre:10601, begin:21, end:22, time:54, base_damage:10, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ピット", tess:"上スマッシュ", fighter_id:1280, skill_genre:10600, begin:6, end:6, time:51, base_damage:3, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ピット", tess:"上スマッシュ", fighter_id:1280, skill_genre:10600, begin:7, end:7, time:51, base_damage:3, persistence_num:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1, 持続", }
,{tesf:"ピット", tess:"上スマッシュ", fighter_id:1280, skill_genre:10600, begin:10, end:10, time:51, base_damage:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ピット", tess:"上スマッシュ", fighter_id:1280, skill_genre:10600, begin:18, end:18, time:51, base_damage:8, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"ピット", tess:"下スマッシュ", fighter_id:1280, skill_genre:10602, begin:5, end:6, time:40, base_damage:12, damage_no:1, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ピット", tess:"下スマッシュ", fighter_id:1280, skill_genre:10602, begin:5, end:6, time:40, base_damage:10, damage_no:2, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ピット", tess:"下スマッシュ", fighter_id:1280, skill_genre:10602, begin:18, end:20, time:40, base_damage:12, damage_no:1, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ピット", tess:"下スマッシュ", fighter_id:1280, skill_genre:10602, begin:18, end:20, time:40, base_damage:10, damage_no:2, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
, {tesf:"ピット", tess:"空N", fighter_id:1280, skill_genre:10904, begin:4, end:5, time:54, base_damage:0.7, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:29, serial_num_str:"1-7", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"4-5, 7-8, 10-11, 13-14, 16-17, 19-20,22-23", tes_val:"Hit 1-7", }
,{tesf:"ピット", tess:"空N", fighter_id:1280, skill_genre:10904, begin:25, end:25, time:54, base_damage:4.5, landing_lag:14, landing_occurrence_begin:4, landing_occurrence_end:29, serial_num_str:"8", tes_message:"(連続ヒットする技)", tes_val:"Hit 8", }
,{tesf:"ピット", tess:"空前", fighter_id:1280, skill_genre:10901, begin:11, end:12, time:46, base_damage:2.5, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:27, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1", }
,{tesf:"ピット", tess:"空前", fighter_id:1280, skill_genre:10901, begin:14, end:15, time:46, base_damage:2.5, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:27, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"Hit 2", }
,{tesf:"ピット", tess:"空前", fighter_id:1280, skill_genre:10901, begin:18, end:19, time:46, base_damage:6, landing_lag:12, landing_occurrence_begin:1, landing_occurrence_end:27, serial_num_str:"3", tes_message:"(連続ヒットする技)", tes_val:"Hit 3", }
,{tesf:"ピット", tess:"空後", fighter_id:1280, skill_genre:10903, begin:10, end:10, time:40, base_damage:12, landing_lag:8, landing_occurrence_begin:1, landing_occurrence_end:27, damage_no:1, persistence_num:0, tes_val:"始", }
,{tesf:"ピット", tess:"空後", fighter_id:1280, skill_genre:10903, begin:10, end:10, time:40, base_damage:8, landing_lag:8, landing_occurrence_begin:1, landing_occurrence_end:27, damage_no:2, persistence_num:0, tes_val:"始", }
,{tesf:"ピット", tess:"空後", fighter_id:1280, skill_genre:10903, begin:11, end:12, time:40, base_damage:12, landing_lag:8, landing_occurrence_begin:1, landing_occurrence_end:27, tes_val:"", }
,{tesf:"ピット", tess:"空上", fighter_id:1280, skill_genre:10900, begin:12, end:13, time:49, base_damage:1.5, landing_lag:14, landing_occurrence_begin:5, landing_occurrence_end:36, serial_num_str:"1-4", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"12-13, 15-16, 18-19, 21-22", tes_val:"Hit 1-4", }
,{tesf:"ピット", tess:"空上", fighter_id:1280, skill_genre:10900, begin:24, end:25, time:49, base_damage:5, landing_lag:14, landing_occurrence_begin:5, landing_occurrence_end:36, serial_num_str:"5", tes_message:"(連続ヒットする技)", tes_val:"Hit 5", }
,{tesf:"ピット", tess:"空下", fighter_id:1280, skill_genre:10902, begin:10, end:10, time:36, base_damage:10, landing_lag:12, landing_occurrence_begin:7, landing_occurrence_end:35, tes_val:"メテオ", }
,{tesf:"ピット", tess:"空下", fighter_id:1280, skill_genre:10902, begin:11, end:12, time:36, base_damage:10, landing_lag:12, landing_occurrence_begin:7, landing_occurrence_end:35, persistence_num:1, tes_val:"持続", }
,{tess:"その場投げ", fighter_id:1280 , skill_genre:10200, base_damage:0,begin:6, end:7, time:34,}
,{tess:"ダッシュ投げ", fighter_id:1280 , skill_genre:10201, base_damage:0,begin:9, end:10, time:42,}
,{tess:"ふりむき投げ", fighter_id:1280 , skill_genre:10202, base_damage:0,begin:10, end:11, time:37,}
, {tesf:"アイスクライマー", tess:"弱攻撃", fighter_id:1150, skill_genre:10300, begin:4, end:5, time:27, base_damage:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"アイスクライマー", tess:"弱攻撃", fighter_id:1150, skill_genre:10300, begin:4, end:5, time:29, base_damage:3.5, alias:"弱2", tes_val:"弱2", }
,{tesf:"アイスクライマー", tess:"ダッシュ攻撃", fighter_id:1150, skill_genre:10400, begin:11, end:14, time:41, base_damage:6, tes_val:"", }
,{tesf:"アイスクライマー", tess:"横強", fighter_id:1150, skill_genre:10501, begin:9, end:10, time:32, base_damage:9, shift:"all", tes_val:"全シフト", }
,{tesf:"アイスクライマー", tess:"上強", fighter_id:1150, skill_genre:10500, begin:8, end:9, time:48, base_damage:0.8, serial_num_str:"1-6", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"8-9, 11-12,14-15, 17-18, 20-21, 23-24", tes_val:"Hit 1-6", }
,{tesf:"アイスクライマー", tess:"上強", fighter_id:1150, skill_genre:10500, begin:27, end:27, time:48, base_damage:4, serial_num_str:"7", tes_message:"(連続ヒットする技)", tes_val:"Hit 7", correction:2, detail_name:"本体"}
,{tesf:"アイスクライマー", tess:"上強", fighter_id:1150, skill_genre:10500, begin:27, end:27, time:48, base_damage:4, serial_num_str:"7", tes_message:"(連続ヒットする技)", tes_val:"Hit 7", correction:2.8,detail_name:"パートナー"}

,{tesf:"アイスクライマー", tess:"下強", fighter_id:1150, skill_genre:10502, begin:8, end:11, time:30, base_damage:6, tes_val:"", }
,{tesf:"アイスクライマー", tess:"横スマッシュ", fighter_id:1150, skill_genre:10601, begin:11, end:13, time:46, base_damage:12, tes_val:"", }
,{tesf:"アイスクライマー", tess:"上スマッシュ", fighter_id:1150, skill_genre:10600, begin:12, end:17, time:49, base_damage:11, damage_no:1, tes_val:"", }
,{tesf:"アイスクライマー", tess:"上スマッシュ", fighter_id:1150, skill_genre:10600, begin:12, end:17, time:49, base_damage:9, damage_no:2, tes_val:"", }
,{tesf:"アイスクライマー", tess:"下スマッシュ", fighter_id:1150, skill_genre:10602, begin:9, end:11, time:40, base_damage:13, tes_val:"", }
, {tesf:"アイスクライマー", tess:"空N", fighter_id:1150, skill_genre:10904, begin:6, end:23, time:45, base_damage:7, landing_lag:7, landing_occurrence_begin:6, landing_occurrence_end:29, tes_val:"", }
,{tesf:"アイスクライマー", tess:"空前", fighter_id:1150, skill_genre:10901, begin:19, end:20, time:56, base_damage:12, landing_lag:10, landing_occurrence_begin:3, landing_occurrence_end:48, tes_val:"", }
,{tesf:"アイスクライマー", tess:"空後", fighter_id:1150, skill_genre:10903, begin:8, end:11, time:35, base_damage:10, landing_lag:7, landing_occurrence_begin:8, landing_occurrence_end:18, tes_val:"", }
,{tesf:"アイスクライマー", tess:"空上", fighter_id:1150, skill_genre:10900, begin:7, end:11, time:35, base_damage:9, landing_lag:14, landing_occurrence_begin:7, landing_occurrence_end:26, tes_val:"", }
,{tesf:"アイスクライマー", tess:"空下", fighter_id:1150, skill_genre:10902, begin:12, end:51, time:63, base_damage:8, landing_lag:20, landing_occurrence_begin:1, landing_occurrence_end:53, tes_val:"", }
,{tess:"その場投げ", fighter_id:1150 , skill_genre:10200, base_damage:0,begin:8, end:9, time:39,}
,{tess:"ダッシュ投げ", fighter_id:1150 , skill_genre:10201, base_damage:0,begin:10, end:11, time:47,}
,{tess:"ふりむき投げ", fighter_id:1150 , skill_genre:10202, base_damage:0,begin:11, end:11, time:40,}
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1010, tes_name:"マリオ",}
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1020, tes_name:"ドンキーコング",} 
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1030, tes_name:"リンク",}
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1040, tes_name:"サムス",} 
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1041, tes_name:"ダークサムス",} 
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1050, tes_name:"ヨッシー",}
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1060, tes_name:"カービィ",}
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:14, time:23, cancel_time:18,    base_damage:0,fighter_id:1070, tes_name:"フォックス",} 
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:16, time:24, cancel_time:19,    base_damage:0,fighter_id:1080, tes_name:"ピカチュウ",} 
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1090, tes_name:"ルイージ",}
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1010, tes_name:"ネス", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1110, tes_name:"キャプテン・ファルコン",}
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1120, tes_name:"プリン", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1130, tes_name:"ピーチ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1131, tes_name:"デイジー", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:18, time:28, cancel_time:23,    base_damage:0,fighter_id:1140, tes_name:"クッパ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1150, tes_name:"アイスクライマー", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:14, time:23, cancel_time:18,    base_damage:0,fighter_id:1160, tes_name:"シーク", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1170, tes_name:"ゼルダ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1180, tes_name:"ドクターマリオ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:24, cancel_time:19,    base_damage:0,fighter_id:1190, tes_name:"ピチュー", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1200, tes_name:"ファルコ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1210, tes_name:"マルス", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1211, tes_name:"ルキナ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:16, time:24, cancel_time:19,    base_damage:0,fighter_id:1220, tes_name:"こどもリンク", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:18, time:28, cancel_time:23,    base_damage:0,fighter_id:1230, tes_name:"ガノンドロフ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1240, tes_name:"ミュウツー", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1250, tes_name:"ロイ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1251, tes_name:"クロム", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1260, tes_name:"Mr.ゲーム&ウォッチ",}
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:16, time:24, cancel_time:19,    base_damage:0,fighter_id:1270, tes_name:"メタナイト", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1280, tes_name:"ピット", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1281, tes_name:"ブラックピット", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1290, tes_name:"ゼロスーツサムス", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1300, tes_name:"ワリオ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1310, tes_name:"スネーク", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1320, tes_name:"アイク", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:16, time:24, cancel_time:19,    base_damage:0,fighter_id:1330, tes_name:"ゼニガメ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1340, tes_name:"フシギソウ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:18, time:28, cancel_time:23,    base_damage:0,fighter_id:1350, tes_name:"リザードン", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:16, time:24, cancel_time:19,    base_damage:0,fighter_id:1360, tes_name:"ディディーコング", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1370, tes_name:"リュカ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:16, time:24, cancel_time:19,    base_damage:0,fighter_id:1380, tes_name:"ソニック", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:18, time:28, cancel_time:23,    base_damage:0,fighter_id:1390, tes_name:"デデデ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1400, tes_name:"ピクミン&オリマー", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1410, tes_name:"ルカリオ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1420, tes_name:"ロボット", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:16, time:24, cancel_time:19,    base_damage:0,fighter_id:1430, tes_name:"トゥーンリンク", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1440, tes_name:"ウルフ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1450, tes_name:"むらびと", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1460, tes_name:"ロックマン", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1470, tes_name:"Wii Fit トレーナー"}
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1480, tes_name:"ロゼッタ&チコ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:14, time:23, cancel_time:18,    base_damage:0,fighter_id:1490, tes_name:"リトル・マック", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:16, time:24, cancel_time:19,    base_damage:0,fighter_id:1500, tes_name:"ゲッコウガ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1510, tes_name:"格闘Mii", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1520, tes_name:"剣術Mii", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1530, tes_name:"射撃Mii", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1540, tes_name:"パルテナ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1550, tes_name:"パックマン", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1560, tes_name:"ルフレ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1570, tes_name:"シュルク", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1580, tes_name:"クッパ Jr.", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1590, tes_name:"ダックハント", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1600, tes_name:"リュウ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1601, tes_name:"ケン", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1610, tes_name:"クラウド", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1620, tes_name:"カムイ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:6, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1630, tes_name:"ベヨネッタ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1640, tes_name:"インクリング", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:18, time:28, cancel_time:23,    base_damage:0,fighter_id:1650, tes_name:"リドリー", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1660, tes_name:"シモン", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1661, tes_name:"リヒター", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:18, time:28, cancel_time:23,    base_damage:0,fighter_id:1670, tes_name:"キングクルール", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1680, tes_name:"しずえ", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:26, cancel_time:21,    base_damage:0,fighter_id:1690, tes_name:"ガオガエン", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1700, tes_name:"パックンフラワー", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1710, tes_name:"ジョーカー", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1720, tes_name:"勇者", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1730, tes_name:"バンジョー&カズーイ"}
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1740, tes_name:"テリー", }
,{tess:"その場回避", skill_genre:11500, is_not_defend:true, begin:3, end:17, time:25, cancel_time:20,    base_damage:0,fighter_id:1750, tes_name:"ベレト／ベレス", }


, {tesf:"マリオ", tess:"NB", fighter_id:1010, skill_genre:10703, begin:17, end:20, time:49, base_damage:5, is_item_throw:true, }
,{tesf:"マリオ", tess:"NB", fighter_id:1010, skill_genre:10703, begin:21, end:46, time:49, base_damage:5, is_item_throw:true, persistence_num:1, tes_val:"持続1", }
,{tesf:"マリオ", tess:"NB", fighter_id:1010, skill_genre:10703, begin:47, end:86, time:49, base_damage:4, is_item_throw:true, persistence_num:2, tes_val:"持続2", }
,{tesf:"マリオ", tess:"上B", fighter_id:1010, skill_genre:10700, begin:5, end:3, time:48, base_damage:5, tes_val:"始", }
,{tesf:"マリオ", tess:"上B", fighter_id:1010, skill_genre:10700, begin:7, end:16, time:48, base_damage:0.6, detail_name:"連", rehit:2, tes_val:"連", }
,{tesf:"マリオ", tess:"上B", fighter_id:1010, skill_genre:10700, begin:17, end:18, time:48, base_damage:3, persistence_num:9, tes_val:"〆", }
, {tesf:"ドンキーコング", tess:"NB", fighter_id:1020, skill_genre:10703, begin:19, end:20, time:62, base_damage:10, is_b_ground:true, tes_val:"溜めなし,地上", }
,{tesf:"ドンキーコング", tess:"NB", fighter_id:1020, skill_genre:10703, begin:19, end:20, time:47, base_damage:28, damage_no:1, detail_name:"最大溜め", tes_val:"最大溜め", }
,{tesf:"ドンキーコング", tess:"NB", fighter_id:1020, skill_genre:10703, begin:19, end:20, time:47, base_damage:18, damage_no:2, detail_name:"最大溜め", tes_val:"最大溜め", }
,{tesf:"ドンキーコング", tess:"NB", fighter_id:1020, skill_genre:10703, begin:19, end:20, time:62, base_damage:6, is_b_air:true, tes_val:"溜めなし,空中", }
,{tesf:"ドンキーコング", tess:"NB", fighter_id:1020, skill_genre:10703, begin:19, end:20, time:47, base_damage:25, detail_name:"最大溜め", tes_val:"最大溜め", }
,{tesf:"ドンキーコング", tess:"横B", fighter_id:1020, skill_genre:10701, begin:20, end:21, time:62, base_damage:10, damage_no:1, defend_position:"ground", tes_val:"対地", }
,{tesf:"ドンキーコング", tess:"横B", fighter_id:1020, skill_genre:10701, begin:20, end:21, time:62, base_damage:8, damage_no:2, defend_position:"ground", tes_val:"対地", }
,{tesf:"ドンキーコング", tess:"横B", fighter_id:1020, skill_genre:10701, begin:20, end:21, time:62,  base_damage:10, damage_no:1,defend_position:"air", tes_val:"対空", }
,{tesf:"ドンキーコング", tess:"横B", fighter_id:1020, skill_genre:10701, begin:20, end:21, time:62, base_damage:8, damage_no:2,defend_position:"air", tes_val:"対空", }

,{tesf:"ドンキーコング", tess:"上B", fighter_id:1020, skill_genre:10700, begin:19, end:19, time:104, base_damage:5, is_b_ground:true, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1,地上", }
,{tesf:"ドンキーコング", tess:"上B", fighter_id:1020, skill_genre:10700, begin:25, end:27, time:104, base_damage:1.4, is_b_ground:true, serial_num_str:"2-6", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"25-27, 32-33, 40-42, 49-50, 55-58", tes_val:"Hit 2-6,地上", }
,{tesf:"ドンキーコング", tess:"上B", fighter_id:1020, skill_genre:10700, begin:62, end:62, time:104, base_damage:4, is_b_ground:true, serial_num_str:"7", tes_message:"(連続ヒットする技)", tes_val:"Hit 7,地上", }
,{tesf:"ドンキーコング", tess:"上B", fighter_id:1020, skill_genre:10700, begin:4, end:6, time:104, base_damage:5, is_b_air:true, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1,空中", }
,{tesf:"ドンキーコング", tess:"上B", fighter_id:1020, skill_genre:10700, begin:10, end:12, time:104, base_damage:1, is_b_air:true, serial_num_str:"2-13", tes_message:"(連続ヒットする技)(連続ヒットまとめ技)", test_serial_num_strs:"10-12, 13-14,15-17, 18-19,20-21, 22-24,25-26, 27-29,30-31, 32-33,34-36, 37-38", tes_val:"Hit 2-13,空中", }
,{tesf:"ドンキーコング", tess:"上B", fighter_id:1020, skill_genre:10700, begin:39, end:43, time:104, base_damage:2, is_b_air:true, serial_num_str:"14", tes_message:"(連続ヒットする技)", tes_val:"Hit 14,空中", }
,{tesf:"ドンキーコング", tess:"下B", fighter_id:1020, skill_genre:10702, begin:12, end:13, time:46,base_damage:14, detail_name:"最短", serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"最短, Hit 1,", }
,{tesf:"ドンキーコング", tess:"下B", fighter_id:1020, skill_genre:10702, begin:23, end:24, time:46,base_damage:14, detail_name:"最短", is_b_ground:true, serial_num_str:"2", tes_message:"(連続ヒットする技)", tes_val:"最短, Hit 2,地上", }
,{tesf:"ドンキーコング", tess:"下B", fighter_id:1020, skill_genre:10702, begin:19, end:21, time:49,base_damage:5, is_b_air:true, serial_num_str:"1", tes_message:"(連続ヒットする技)", tes_val:"Hit 1,空中", not_attack_view:"help", help_text:"着地で技がキャンセルされるため全体Fをどうすればいかわからない"}
, {tesf:"サムス", tess:"NB", fighter_id:1040, skill_genre:10703, begin:16, end:16, time:44, base_damage:5, is_item_throw:true, detail_name:"溜め無し", is_unknown_end:true, tes_val:"溜め無し,地上",is_electrical:true}
,{tesf:"サムス", tess:"NB", fighter_id:1040, skill_genre:10703, begin:16, end:16, time:60, base_damage:28, is_item_throw:true, detail_name:"最大溜め後", is_unknown_end:true, tes_val:"最大溜め,地上", is_electrical:true, }
,{tesf:"サムス", tess:"横B", fighter_id:1040, skill_genre:10701, begin:18, end:18, time:54, base_damage:8, is_item_throw:true, detail_name:"ホーミング", is_unknown_end:true,is_b_ground:true, tes_val:"ホーミングミサイル,地上", }
,{tesf:"サムス", tess:"横B", fighter_id:1040, skill_genre:10701, begin:21, end:21, time:57, base_damage:12, is_item_throw:true, detail_name:"直進", is_unknown_end:true,is_b_ground:true, tes_val:"スーパーミサイル,地上", }
,{tesf:"サムス", tess:"横B", fighter_id:1040, skill_genre:10701, begin:18, end:18, time:59, base_damage:8, is_item_throw:true, detail_name:"ホーミング",is_unknown_end:true, is_b_air:true, tes_val:"ホーミングミサイル,空中", }
,{tesf:"サムス", tess:"横B", fighter_id:1040, skill_genre:10701, begin:21, end:21, time:61, base_damage:12, detail_name:"直進", is_b_air:true, is_unknown_end:true,tes_val:"スーパーミサイル,空中", }
,{tesf:"サムス", tess:"上B", fighter_id:1040, skill_genre:10700, begin:4, end:6, time:24, base_damage:3, is_b_ground:true, persistence_num:0, tes_val:"始,地上", }
,{tesf:"サムス", tess:"上B", fighter_id:1040, skill_genre:10700, begin:7, end:11, time:24, base_damage:1, rehit:3, is_b_ground:true, tes_val:"連1,地上", }
,{tesf:"サムス", tess:"上B", fighter_id:1040, skill_genre:10700, begin:12, end:14, time:24, base_damage:1, rehit:3, is_b_ground:true, tes_val:"連2,地上", }
,{tesf:"サムス", tess:"上B", fighter_id:1040, skill_genre:10700, begin:15, end:24, time:24, base_damage:1, rehit:3, is_b_ground:true, tes_val:"連3,地上", }
,{tesf:"サムス", tess:"上B", fighter_id:1040, skill_genre:10700, begin:25, end:26, time:24, base_damage:2, is_b_ground:true, persistence_num:9, tes_val:"〆,地上", }
,{tesf:"サムス", tess:"下B", fighter_id:1040, skill_genre:10702, begin:33, end:33, is_unknown_end:true,time:47, base_damage:4, is_item_throw:true, detail_name:"ボム", is_b_ground:true, tes_val:"ボム, 地上", hit_stop_correction:0.6, }
,{tesf:"サムス", tess:"下B", fighter_id:1040, skill_genre:10702, begin:1, end:1, is_unknown_end:true,time:1, base_damage:5, is_item_throw:true, detail_name:"爆風", tes_val:"爆風", hit_stop_correction:0.3, }


, {tesf:"リンク", tess:"NB", fighter_id:1030, skill_genre:10703, begin:16, end:61, time:44, base_damage:4, is_item_throw:true, detail_name:"溜め無し",is_item_throw:true,	 tes_val:"溜め無し",hit_stop_correction:0.8 }
,{tesf:"リンク", tess:"NB", fighter_id:1030, skill_genre:10703, begin:1, end:1, time:29, base_damage:12,  is_not_defend:true,detail_name:"最大溜め後", is_unknown_end:true,tes_val:"最大溜め後",hit_stop_correction:0.8 }
, {tesf:"リンク", tess:"横B", fighter_id:1030, skill_genre:10701, begin:27, end:36, time:45, base_damage:9.6, is_item_throw:true, detail_name:"行き弾き", tes_val:"行き", }
, {tesf:"リンク", tess:"横B", fighter_id:1030, skill_genre:10701, begin:27, end:36, time:45, base_damage:8, is_item_throw:true, detail_name:"行き", tes_val:"行き", }
, {tesf:"リンク", tess:"横B", fighter_id:1030, skill_genre:10701, begin:37, end:37, time:45, base_damage:7.2, is_item_throw:true, detail_name:"行き弾き", persistence_num:1, tes_val:"行き, 持続", }

, {tesf:"リンク", tess:"横B", fighter_id:1030, skill_genre:10701, begin:37, end:37, time:45, base_damage:6, is_item_throw:true,  is_unknown_end:true, detail_name:"行き", persistence_num:1, tes_val:"行き, 持続", }
, {tesf:"リンク", tess:"横B", fighter_id:1030, skill_genre:10701, begin:37, end:37, time:45, base_damage:3, is_item_throw:true,  is_unknown_end:true, detail_name:"行き", persistence_num:1, tes_val:"行き, 持続", }
, {tesf:"リンク", tess:"下B", fighter_id:1030, skill_genre:10702, begin:12, end:13, time:39, base_damage:7, is_item_throw:true, detail_name:"起爆", tes_val:"起爆", }
, {tesf:"リンク", tess:"ボム前投げ", fighter_id:1030, skill_genre:10101, begin:7, end:7, time:24, base_damage:1, is_item_throw:true,alias:"ボム投げ"}
, {tesf:"リンク", tess:"ボム落とし", fighter_id:1030, skill_genre:11000, begin:1, end:1, time:1, base_damage:1, is_item_throw:true,alias:"ボム落とし"}

, {tesf:"リンク", tess:"上B", fighter_id:1030, skill_genre:10700, begin:7, end:8, time:76, base_damage:14, damage_no:1, is_b_ground:true, tes_val:"地上", }
,{tesf:"リンク", tess:"上B", fighter_id:1030, skill_genre:10700, begin:7, end:8, time:76, base_damage:11.2, damage_no:2, is_b_ground:true, tes_val:"地上", }
,{tesf:"リンク", tess:"上B", fighter_id:1030, skill_genre:10700, begin:7, end:8, time:76, base_damage:11.2, damage_no:2, is_b_ground:true, tes_val:"地上", }


]