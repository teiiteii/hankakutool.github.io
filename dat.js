const skill_genres =
[
  {skill_genre:10100, name:"ダッシュ投げ", guard_cancel:11, is_item_throw:true}
 ,{skill_genre:10101, name:"アイテム上投げ", guard_cancel:11, is_item_throw:true}
 ,{skill_genre:10102, name:"アイテム前投げ", guard_cancel:11, is_item_throw:true}
 ,{skill_genre:10103, name:"アイテム後投げ", guard_cancel:11, is_item_throw:true}
 ,{skill_genre:10104, name:"アイテム下投げ", guard_cancel:11, is_item_throw:true}
 ,{skill_genre:10105, name:"攻撃上がり", is_get_up:true}
 ,{skill_genre:10106, name:"起き上がり攻撃", is_get_up:true}
 ,{skill_genre:10200, name:"その場投げ", guard_cancel:0, shield_add_frame:4, throw_minus_frame:-2, is_throw:true}
 ,{skill_genre:10201, name:"アイテム弾き上投げ", guard_cancel:0, is_item_throw:true}
 ,{skill_genre:10202, name:"アイテム弾き前投げ", guard_cancel:0, is_item_throw:true}
 ,{skill_genre:10203, name:"アイテム弾き後投げ", guard_cancel:0, is_item_throw:true}
 ,{skill_genre:10204, name:"アイテム弾き下投げ", guard_cancel:0, is_item_throw:true}
 ,{skill_genre:10300, name:"弱", guard_cancel:11, is_jab:true}
 ,{skill_genre:10400, name:"DA", guard_cancel:11, is_da:true}
 ,{skill_genre:10500, name:"上強", guard_cancel:11, is_tilt:true}
 ,{skill_genre:10501, name:"横強", guard_cancel:11, is_tilt:true}
 ,{skill_genre:10502, name:"下強", guard_cancel:11, is_tilt:true}
 ,{skill_genre:10600, name:"上スマ", guard_cancel:0, is_smach:true}
 ,{skill_genre:10601, name:"横スマ", guard_cancel:11, is_smach:true}
 ,{skill_genre:10602, name:"下スマ", guard_cancel:11, is_smach:true}
 ,{skill_genre:10700, name:"上B", guard_cancel:0, jump_frame:3, is_b:true}
 ,{skill_genre:10701, name:"横B", guard_cancel:11, jump_frame:3, is_b:true}
 ,{skill_genre:10702, name:"下B", guard_cancel:11, jump_frame:3, is_b:true}
 ,{skill_genre:10703, name:"NB", guard_cancel:11, jump_frame:3, is_b:true}
 ,{skill_genre:10800, name:"空中限定上B", guard_cancel:0, jump_frame:3, is_b:true}
 ,{skill_genre:10801, name:"空中限定横B", guard_cancel:0, jump_frame:3, is_b:true}
 ,{skill_genre:10802, name:"空中限定下B", guard_cancel:0, jump_frame:3, is_b:true}
 ,{skill_genre:10803, name:"空中限定NB", guard_cancel:0, jump_frame:3, is_b:true}
 ,{skill_genre:10900, name:"空上", guard_cancel:0, jump_frame:3, is_air:true}
 ,{skill_genre:10901, name:"空前", guard_cancel:0, jump_frame:3, is_air:true}
 ,{skill_genre:10902, name:"空下", guard_cancel:0, jump_frame:3, is_air:true}
 ,{skill_genre:10903, name:"空後", guard_cancel:0, jump_frame:3, is_air:true}
 ,{skill_genre:10904, name:"空N", guard_cancel:0, jump_frame:3, is_air:true}
 ,{skill_genre:11000, name:"アイテム落とし", guard_cancel:0, jump_frame:3, is_item_throw:true}
]
const fighters = 
[
  {fighter_id:1010, name:"マリオ", height_rank:21100, hiragana:"まりお"}
 ,{fighter_id:1020, name:"ドンキーコング", height_rank:22900, hiragana:"どんきーこんぐ"}
 ,{fighter_id:1030, name:"リンク", height_rank:21500, hiragana:"りんく"}
 ,{fighter_id:1040, name:"サムス", height_rank:22100, hiragana:"さむす"}
 ,{fighter_id:1041, name:"ダークサムス", height_rank:22500, hiragana:"だーくさむす"}
 ,{fighter_id:1050, name:"ヨッシー", height_rank:22000, hiragana:"よっしー"}
 ,{fighter_id:1060, name:"カービィ", height_rank:20100, hiragana:"かーびぃ"}
 ,{fighter_id:1070, name:"フォックス", height_rank:21300, hiragana:"ふぉっくす"}
 ,{fighter_id:1080, name:"ピカチュウ", height_rank:20200, hiragana:"ぴかちゅう"}
 ,{fighter_id:1090, name:"ルイージ", height_rank:21600, hiragana:"るいーじ"}
 ,{fighter_id:1010, name:"ネス", height_rank:20800, hiragana:"ねす"}
 ,{fighter_id:1110, name:"キャプテン・ファルコン", height_rank:22200, hiragana:"きゃぷてん・ふぁるこん"}
 ,{fighter_id:1120, name:"プリン", height_rank:20400, hiragana:"ぷりん"}
 ,{fighter_id:1130, name:"ピーチ", height_rank:22000, hiragana:"ぴーち"}
 ,{fighter_id:1131, name:"デイジー", height_rank:21800, hiragana:"でいじー"}
 ,{fighter_id:1140, name:"クッパ", height_rank:22900, hiragana:"くっぱ"}
 ,{fighter_id:1150, name:"アイスクライマー", height_rank:20700, hiragana:"あいすくらいまー"}
 ,{fighter_id:1160, name:"シーク", height_rank:21700, hiragana:"しーく"}
 ,{fighter_id:1170, name:"ゼルダ", height_rank:22300, hiragana:"ぜるだ"}
 ,{fighter_id:1180, name:"ドクターマリオ", height_rank:21000, hiragana:"どくたーまりお"}
 ,{fighter_id:1190, name:"ピチュー", height_rank:20300, hiragana:"ぴちゅー"}
 ,{fighter_id:1200, name:"ファルコ", height_rank:21800, hiragana:"ふぁるこ"}
 ,{fighter_id:1210, name:"マルス", height_rank:22400, hiragana:"まるす"}
 ,{fighter_id:1211, name:"ルキナ", height_rank:22400, hiragana:"るきな"}
 ,{fighter_id:1220, name:"こどもリンク", height_rank:21100, hiragana:"こどもりんく"}
 ,{fighter_id:1230, name:"ガノンドロフ", height_rank:23100, hiragana:"がのんどろふ"}
 ,{fighter_id:1240, name:"ミュウツー", height_rank:22600, hiragana:"みゅうつー"}
 ,{fighter_id:1250, name:"ロイ", height_rank:22500, hiragana:"ろい"}
 ,{fighter_id:1251, name:"クロム", height_rank:22200, hiragana:"くろむ"}
 ,{fighter_id:1260, name:"Mr.ゲーム&ウォッチ", height_rank:20700, hiragana:"みすたーげーむあんどうぉっち"}
 ,{fighter_id:1270, name:"メタナイト", height_rank:20200, hiragana:"めたないと"}
 ,{fighter_id:1280, name:"ピット", height_rank:21900, hiragana:"ぴっと"}
 ,{fighter_id:1281, name:"ブラックピット", height_rank:21900, hiragana:"ぶらっくぴっと"}
 ,{fighter_id:1290, name:"ゼロスーツサムス", height_rank:22200, hiragana:"ぜろすーつさむす"}
 ,{fighter_id:1300, name:"ワリオ", height_rank:20900, hiragana:"わりお"}
 ,{fighter_id:1310, name:"スネーク", height_rank:22200, hiragana:"すねーく"}
 ,{fighter_id:1320, name:"アイク", height_rank:22700, hiragana:"あいく"}
 ,{fighter_id:1330, name:"ゼニガメ", height_rank:20200, hiragana:"ぜにがめ"}
 ,{fighter_id:1340, name:"フシギソウ", height_rank:21000, hiragana:"ふしぎそう"}
 ,{fighter_id:1350, name:"リザードン", height_rank:22000, hiragana:"りざーどん"}
 ,{fighter_id:1360, name:"ディディーコング", height_rank:20700, hiragana:"でぃでぃーこんぐ"}
 ,{fighter_id:1370, name:"リュカ", height_rank:21000, hiragana:"りゅか"}
 ,{fighter_id:1380, name:"ソニック", height_rank:21400, hiragana:"そにっく"}
 ,{fighter_id:1390, name:"デデデ", height_rank:22800, hiragana:"ででで"}
 ,{fighter_id:1400, name:"ピクミン&オリマー", height_rank:20500, hiragana:"ぴくみんあんどおりまー"}
 ,{fighter_id:1410, name:"ルカリオ", height_rank:21100, hiragana:"るかりお"}
 ,{fighter_id:1420, name:"ロボット", height_rank:22000, hiragana:"ろぼっと"}
 ,{fighter_id:1430, name:"トゥーンリンク", height_rank:20900, hiragana:"とぅーんりんく"}
 ,{fighter_id:1440, name:"ウルフ", height_rank:21600, hiragana:"うるふ"}
 ,{fighter_id:1450, name:"むらびと", height_rank:21000, hiragana:"むらびと"}
 ,{fighter_id:1460, name:"ロックマン", height_rank:21200, hiragana:"ろっくまん"}
 ,{fighter_id:1470, name:"Wii Fitトレーナー", height_rank:22300, hiragana:"うぃーふぃっととれーなー"}
 ,{fighter_id:1480, name:"ロゼッタ&チコ", height_rank:22900, hiragana:"ろぜったあんどちこ"}
 ,{fighter_id:1490, name:"リトル・マック", height_rank:21300, hiragana:"りとる・まっく"}
 ,{fighter_id:1500, name:"ゲッコウガ", height_rank:20500, hiragana:"げっこうが"}
 ,{fighter_id:1510, name:"Mii 格闘タイプ", height_rank:21600, hiragana:"みーかくとうたいぷ"}
 ,{fighter_id:1520, name:"Mii 剣術タイプ", height_rank:21400, hiragana:"みーけんじゅつたいぷ"}
 ,{fighter_id:1530, name:"Mii 射撃タイプ", height_rank:21400, hiragana:"みーしゃげきたいぷ"}
 ,{fighter_id:1540, name:"パルテナ", height_rank:22200, hiragana:"ぱるてな"}
 ,{fighter_id:1550, name:"パックマン", height_rank:21000, hiragana:"ぱっくまん"}
 ,{fighter_id:1560, name:"ルフレ", height_rank:22000, hiragana:"るふれ"}
 ,{fighter_id:1570, name:"シュルク", height_rank:22200, hiragana:"しゅるく"}
 ,{fighter_id:1580, name:"クッパJr", height_rank:21600, hiragana:"くっぱじゅにあ"}
 ,{fighter_id:1590, name:"ダックハント", height_rank:20600, hiragana:"だっくはんと"}
 ,{fighter_id:1600, name:"リュウ", height_rank:22000, hiragana:"りゅう"}
 ,{fighter_id:1601, name:"ケン", height_rank:22000, hiragana:"けん"}
 ,{fighter_id:1610, name:"クラウド", height_rank:21800, hiragana:"くらうど"}
 ,{fighter_id:1620, name:"カムイ", height_rank:22200, hiragana:"かむい"}
 ,{fighter_id:1630, name:"ベヨネッタ", height_rank:22600, hiragana:"べよねった"}
 ,{fighter_id:1640, name:"インクリング", height_rank:21100, hiragana:"いんくりんぐ"}
 ,{fighter_id:1650, name:"リドリー", height_rank:23000, hiragana:"りどりー"}
 ,{fighter_id:1660, name:"シモン", height_rank:22000, hiragana:"しもん"}
 ,{fighter_id:1661, name:"リヒター", height_rank:22000, hiragana:"りひたー"}
 ,{fighter_id:1670, name:"キングクルール", height_rank:23000, hiragana:"きんぐくるーる"}
 ,{fighter_id:1680, name:"しずえ", height_rank:20900, hiragana:"しずえ"}
 ,{fighter_id:1690, name:"ガオガエン", height_rank:22000, hiragana:"がおがえん"}
 ,{fighter_id:1700, name:"パックンフラワー", height_rank:22000, hiragana:"ぱっくんふらわー"}
 ,{fighter_id:1710, name:"ジョーカー", height_rank:22200, hiragana:"じょーかー"}
 ,{fighter_id:1720, name:"勇者", height_rank:22000, hiragana:"ゆうしゃ"}
 ,{fighter_id:1730, name:"バンジョー&カズーイ", height_rank:21400, hiragana:"ばんじょーあんどかずーい"}
 ,{fighter_id:1740, name:"テリー", height_rank:22000, hiragana:"てりー"}
 ,{fighter_id:1750, name:"ベレト/ベレス", height_rank:22200, hiragana:"べれと／べれす"}
]