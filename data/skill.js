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

, {tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:17, base_damage:1.4, damage_no:1, alias:"弱1", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:6, base_damage:1.4, damage_no:1, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:17, base_damage:1.2, damage_no:2, alias:"弱1", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:6, base_damage:1.2, damage_no:2, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:17, base_damage:1, damage_no:3, alias:"弱1", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"弱攻撃", fighter_id:1080, skill_genre:10300, begin:2, end:3, time:6, base_damage:1, damage_no:3, alias:"弱1", cancel:"empty_attack_again", tes_message:"(全体フレームのカッコ外した行)", tes_val:"弱1", }
,{tesf:"ピカチュウ", tess:"ダッシュ攻撃", fighter_id:1080, skill_genre:10400, begin:6, end:8, time:35, base_damage:11, tes_val:"", }
,{tesf:"ピカチュウ", tess:"ダッシュ攻撃", fighter_id:1080, skill_genre:10400, begin:9, end:12, time:35, base_damage:6, persistence_num:1, tes_val:"持続", }
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

]