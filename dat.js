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
  {fighter_id:1010, name:"マリオ", height_rank:21100, hiragana:"まりお", adana:"マリオ"}
 ,{fighter_id:1020, name:"ドンキーコング", height_rank:22900, hiragana:"どんきーこんぐ", adana:"ドンキー"}
 ,{fighter_id:1030, name:"リンク", height_rank:21500, hiragana:"りんく", adana:"リンク"}
 ,{fighter_id:1040, name:"サムス", height_rank:22100, hiragana:"さむす", adana:"サムス"}
 ,{fighter_id:1041, name:"ダークサムス", height_rank:22500, hiragana:"だーくさむす", adana:"ﾀﾞｰｸｻﾑｽ"}
 ,{fighter_id:1050, name:"ヨッシー", height_rank:22000, hiragana:"よっしー", adana:"ヨッシー"}
 ,{fighter_id:1060, name:"カービィ", height_rank:20100, hiragana:"かーびぃ", adana:"カービィ"}
 ,{fighter_id:1070, name:"フォックス", height_rank:21300, hiragana:"ふぉっくす", adana:"ﾌｫｯｸｽ"}
 ,{fighter_id:1080, name:"ピカチュウ", height_rank:20200, hiragana:"ぴかちゅう", adana:"ﾋﾟｶﾁｭｳ"}
 ,{fighter_id:1090, name:"ルイージ", height_rank:21600, hiragana:"るいーじ", adana:"ルイージ"}
 ,{fighter_id:1010, name:"ネス", height_rank:20800, hiragana:"ねす", adana:"ネス"}
 ,{fighter_id:1110, name:"キャプテン・ファルコン", height_rank:22200, hiragana:"きゃぷてん・ふぁるこん", adana:"ﾌｧﾙｺﾝ"}
 ,{fighter_id:1120, name:"プリン", height_rank:20400, hiragana:"ぷりん", adana:"プリン"}
 ,{fighter_id:1130, name:"ピーチ", height_rank:22000, hiragana:"ぴーち", adana:"ピーチ"}
 ,{fighter_id:1131, name:"デイジー", height_rank:21800, hiragana:"でいじー", adana:"デイジー"}
 ,{fighter_id:1140, name:"クッパ", height_rank:22900, hiragana:"くっぱ", adana:"クッパ"}
 ,{fighter_id:1150, name:"アイスクライマー", height_rank:20700, hiragana:"あいすくらいまー", adana:"アイクラ"}
 ,{fighter_id:1160, name:"シーク", height_rank:21700, hiragana:"しーく", adana:"シーク"}
 ,{fighter_id:1170, name:"ゼルダ", height_rank:22300, hiragana:"ぜるだ", adana:"ゼルダ"}
 ,{fighter_id:1180, name:"ドクターマリオ", height_rank:21000, hiragana:"どくたーまりお", adana:"ドクマリ"}
 ,{fighter_id:1190, name:"ピチュー", height_rank:20300, hiragana:"ぴちゅー", adana:"ピチュー"}
 ,{fighter_id:1200, name:"ファルコ", height_rank:21800, hiragana:"ふぁるこ", adana:"ファルコ"}
 ,{fighter_id:1210, name:"マルス", height_rank:22400, hiragana:"まるす", adana:"マルス"}
 ,{fighter_id:1211, name:"ルキナ", height_rank:22400, hiragana:"るきな", adana:"ルキナ"}
 ,{fighter_id:1220, name:"こどもリンク", height_rank:21100, hiragana:"こどもりんく", adana:"子供ﾘﾝｸ"}
 ,{fighter_id:1230, name:"ガノンドロフ", height_rank:23100, hiragana:"がのんどろふ", adana:"ガノン"}
 ,{fighter_id:1240, name:"ミュウツー", height_rank:22600, hiragana:"みゅうつー", adana:"ﾐｭｳﾂｰ"}
 ,{fighter_id:1250, name:"ロイ", height_rank:22500, hiragana:"ろい", adana:"ロイ"}
 ,{fighter_id:1251, name:"クロム", height_rank:22200, hiragana:"くろむ", adana:"クロム"}
 ,{fighter_id:1260, name:"Mr.ゲーム&ウォッチ", height_rank:20700, hiragana:"みすたーげーむあんどうぉっち", adana:"ゲムヲ"}
 ,{fighter_id:1270, name:"メタナイト", height_rank:20200, hiragana:"めたないと", adana:"ﾒﾀﾅｲﾄ"}
 ,{fighter_id:1280, name:"ピット", height_rank:21900, hiragana:"ぴっと", adana:"ピット"}
 ,{fighter_id:1281, name:"ブラックピット", height_rank:21900, hiragana:"ぶらっくぴっと", adana:"ブラピ"}
 ,{fighter_id:1290, name:"ゼロスーツサムス", height_rank:22200, hiragana:"ぜろすーつさむす", adana:"ゼロサム"}
 ,{fighter_id:1300, name:"ワリオ", height_rank:20900, hiragana:"わりお", adana:"ワリオ"}
 ,{fighter_id:1310, name:"スネーク", height_rank:22200, hiragana:"すねーく", adana:"スネーク"}
 ,{fighter_id:1320, name:"アイク", height_rank:22700, hiragana:"あいく", adana:"アイク"}
 ,{fighter_id:1330, name:"ゼニガメ", height_rank:20200, hiragana:"ぜにがめ", adana:"ゼニガメ"}
 ,{fighter_id:1340, name:"フシギソウ", height_rank:21000, hiragana:"ふしぎそう", adana:"ﾌｼｷﾞｿｳ"}
 ,{fighter_id:1350, name:"リザードン", height_rank:22000, hiragana:"りざーどん", adana:"ﾘｻﾞｰﾄﾞﾝ"}
 ,{fighter_id:1360, name:"ディディーコング", height_rank:20700, hiragana:"でぃでぃーこんぐ", adana:"バナナ猿"}
 ,{fighter_id:1370, name:"リュカ", height_rank:21000, hiragana:"りゅか", adana:"リュカ"}
 ,{fighter_id:1380, name:"ソニック", height_rank:21400, hiragana:"そにっく", adana:"ソニック"}
 ,{fighter_id:1390, name:"デデデ", height_rank:22800, hiragana:"ででで", adana:"デデデ"}
 ,{fighter_id:1400, name:"ピクミン&オリマー", height_rank:20500, hiragana:"ぴくみんあんどおりまー", adana:"ピクオリ"}
 ,{fighter_id:1410, name:"ルカリオ", height_rank:21100, hiragana:"るかりお", adana:"ルカリオ"}
 ,{fighter_id:1420, name:"ロボット", height_rank:22000, hiragana:"ろぼっと", adana:"ロボット"}
 ,{fighter_id:1430, name:"トゥーンリンク", height_rank:20900, hiragana:"とぅーんりんく", adana:"ﾄｩｰﾝﾘﾝｸ"}
 ,{fighter_id:1440, name:"ウルフ", height_rank:21600, hiragana:"うるふ", adana:"ウルフ"}
 ,{fighter_id:1450, name:"むらびと", height_rank:21000, hiragana:"むらびと", adana:"むらびと"}
 ,{fighter_id:1460, name:"ロックマン", height_rank:21200, hiragana:"ろっくまん", adana:"ロックマン"}
 ,{fighter_id:1470, name:"Wii Fitトレーナー", height_rank:22300, hiragana:"うぃーふぃっととれーなー", adana:"フィットレ"}
 ,{fighter_id:1480, name:"ロゼッタ&チコ", height_rank:22900, hiragana:"ろぜったあんどちこ", adana:"ロゼチコ"}
 ,{fighter_id:1490, name:"リトル・マック", height_rank:21300, hiragana:"りとる・まっく", adana:"ﾘﾄﾙﾏｯｸ"}
 ,{fighter_id:1500, name:"ゲッコウガ", height_rank:20500, hiragana:"げっこうが", adana:"ゲッコウガ"}
 ,{fighter_id:1510, name:"Mii 格闘タイプ", height_rank:21600, hiragana:"みーかくとうたいぷ", adana:"格闘ミー"}
 ,{fighter_id:1520, name:"Mii 剣術タイプ", height_rank:21400, hiragana:"みーけんじゅつたいぷ", adana:"剣術ミー"}
 ,{fighter_id:1530, name:"Mii 射撃タイプ", height_rank:21400, hiragana:"みーしゃげきたいぷ", adana:"射撃ミー"}
 ,{fighter_id:1540, name:"パルテナ", height_rank:22200, hiragana:"ぱるてな", adana:"パルテナ"}
 ,{fighter_id:1550, name:"パックマン", height_rank:21000, hiragana:"ぱっくまん", adana:"ﾊﾟｯｸﾏﾝ"}
 ,{fighter_id:1560, name:"ルフレ", height_rank:22000, hiragana:"るふれ", adana:"ルフレ"}
 ,{fighter_id:1570, name:"シュルク", height_rank:22200, hiragana:"しゅるく", adana:"シュルク"}
 ,{fighter_id:1580, name:"クッパJr", height_rank:21600, hiragana:"くっぱじゅにあ", adana:"クッパjr"}
 ,{fighter_id:1590, name:"ダックハント", height_rank:20600, hiragana:"だっくはんと", adana:"ﾀﾞｯｸﾊﾝﾄ"}
 ,{fighter_id:1600, name:"リュウ", height_rank:22000, hiragana:"りゅう", adana:"リュウ"}
 ,{fighter_id:1601, name:"ケン", height_rank:22000, hiragana:"けん", adana:"ケン"}
 ,{fighter_id:1610, name:"クラウド", height_rank:21800, hiragana:"くらうど", adana:"クラウド"}
 ,{fighter_id:1620, name:"カムイ", height_rank:22200, hiragana:"かむい", adana:"カムイ"}
 ,{fighter_id:1630, name:"ベヨネッタ", height_rank:22600, hiragana:"べよねった", adana:"ﾍﾞﾖﾈｯﾀ"}
 ,{fighter_id:1640, name:"インクリング", height_rank:21100, hiragana:"いんくりんぐ", adana:"ｲﾝｸﾘﾝｸﾞ"}
 ,{fighter_id:1650, name:"リドリー", height_rank:23000, hiragana:"りどりー", adana:"リドリー"}
 ,{fighter_id:1660, name:"シモン", height_rank:22000, hiragana:"しもん", adana:"シモン"}
 ,{fighter_id:1661, name:"リヒター", height_rank:22000, hiragana:"りひたー", adana:"リヒター"}
 ,{fighter_id:1670, name:"キングクルール", height_rank:23000, hiragana:"きんぐくるーる", adana:"キンクル"}
 ,{fighter_id:1680, name:"しずえ", height_rank:20900, hiragana:"しずえ", adana:"しずえ"}
 ,{fighter_id:1690, name:"ガオガエン", height_rank:22000, hiragana:"がおがえん", adana:"ｶﾞｵｶﾞｴﾝ"}
 ,{fighter_id:1700, name:"パックンフラワー", height_rank:22000, hiragana:"ぱっくんふらわー",adana:"パックン"}
 ,{fighter_id:1710, name:"ジョーカー", height_rank:22200, hiragana:"じょーかー", adana:"ｼﾞｮｰｶｰ"}
 ,{fighter_id:1720, name:"勇者", height_rank:22000, hiragana:"ゆうしゃ", adana:"勇者"}
 ,{fighter_id:1730, name:"バンジョー&カズーイ", height_rank:21400, hiragana:"ばんじょーあんどかずーい", adana:"バンカズ"}
 ,{fighter_id:1740, name:"テリー", height_rank:22000, hiragana:"てりー", adana:"テリー"}
 ,{fighter_id:1750, name:"ベレト/ベレス", height_rank:22200, hiragana:"べれと／べれす", adana:"ベレト"}
]