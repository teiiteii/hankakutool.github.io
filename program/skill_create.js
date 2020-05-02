$(document).ready( function()
{
	  console.log("スキル読込")
	  

    
    //Form要素を取得する
    var form = document.forms.myform;
    
    //ファイルが読み込まれた時の処理
    form.myfile.addEventListener('change', function(e) {
      
  var result = e.target.files[0];
 
    //FileReaderのインスタンスを作成する
    var reader = new FileReader();
  
    //読み込んだファイルの中身を取得する
    reader.readAsText( result );
  
    //ファイルの中身を取得後に処理を行う
    reader.addEventListener( 'load', function() {
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

const frame_str_datas = run_data5.map(f=>(getFrameData(f)))

frame_str_datas.reduce((strs,str)=>(strs+str))
form.output.textContent = ", " + frame_str_datas; 
  console.log(run_data5)   
    })
    })
// jsonデータの足りないデータ行（技種類と判定持続フレームと全体フレーム）にデータ追加
 function run(json_data){
	 
	 let prev_skill_genre_full_name =  json_data[0].name1
	 let prev_time1 = json_data[0].time1
	 let prev_time2 = json_data[0].time2
	 
	 // 技種類名と全体フレームがない行に、それらのデータ付与
	  const frame_data = json_data.map((f)=>{
	  let name1
	  if(f.name1 == "")
	  {
		 name1 = prev_skill_genre_full_name
	  }
	  else
	  {
		  name1 = f.name1
		  prev_skill_genre_full_name = f.name1
	  }
	  
	    let time2
       if(f.time2 == "")
	  {	
        time2 = prev_time2
	  }
       else{
		time2 = f.time2 
		prev_time2 = f.time2 
        		
	}

		    let time1
       if(f.time1 == "")
	  {	
        time1 = prev_time1
	  }
       else{
		time1 = f.time1
		prev_time1 = f.time1 
        		
	}
	 return {
	...f
	,name1
	,time1
	 ,time2

	  }})
		 return frame_data 		  
 }
 
 
 
 
 
   // 判定持続からRehitを取り出す
 function run2(frame_data){
	 const result_frame_data = frame_data.map((f)=>{
		 
	if(f.time1.toString().includes("Rehit") == false)
	{
		return {...f}
	}
	
	
	 
	 const occurrences = f.time1.toString().split(/\((.+)\)/)
	 const name1 = occurrences[0].trim()
	 const rehit = occurrences[1].replace("Rehit:","").trim()
	 	return {
		...f
		,name1
		,rehit
		}
 })
 return result_frame_data
 }
 
 
 // ダメージ別データ分けとダメージ重複行排除
 function run3(frame_data){
	 const result_frame_data = []

	  frame_data.forEach((f)=>{
	 
	  const damages = f.damage.toString().split("/")
	  const distinct_damages = damages.filter((d,i,array)=>(array.indexOf(d) === i))
	  const sorted_damages = distinct_damages.map(Number).sort().reverse()
	  
	 sorted_damages.forEach((d, index, array)=>{
		 
		const data=  {
			...f
			 ,damage:d
		 }
		 if(array.length>=2)
		 {
			 data["attribute1"] = "multiple_damage"
			 data["damage_no"] = index + 1
		 }
		 result_frame_data.push(data)
	  })})
	return result_frame_data	  
 } 

  // 全体フレームのカッコの中のデータ分け
 function run4(frame_data){
	 const result_frame_data = []

	  frame_data.forEach((f)=>{
	 
	  const time2s = f.time2.toString().split(/\((.+)\)/)
	
	  
	  	result_frame_data.push( {
			...f
			,time2:time2s[0]
		 })
		   if(time2s.length <= 1) {
			   return
		   }
		   	  result_frame_data.push({
			...f
			,time2:time2s[1]
			,test_message:"(全体フレームのカッコ外した行)"
		 })
		 	
		  
 })
 return result_frame_data
 }
  // 技情報追加と連続ヒット設定。開始フレーム、終了フレーム設定
 function run5(frame_data){
	 const result_frame_data = frame_data.map((f)=>{
	 
	  const name2s = f.name2.toString().split(",")
	  let alias = undefined
	    ,persistence_num = undefined	
		,serial_num_str = undefined
		,test_serial_num_strs = undefined		
	    ,shift = undefined
		,is_landing_attack =  undefined
		,test_message = isUndefined(f.test_message)? "":f.test_message
		,test_persistences = undefined
		,test_skill_genre_name = f.name1
		

	if(name2s.some(t=>(t.trim() == "弱1"))){alias = "弱1"}
	if(name2s.some(t=>(t.trim() == "弱2"))){alias = "弱2"}
	if(name2s.some(t=>(t.trim() == "弱3"))){alias = "弱3"}	
	if(name2s.some(t=>(t.trim() == "百裂"))){alias = "百裂"}
    if(name2s.some(t=>(t.trim() == "百裂"))&&name2s.some(t=>(t.trim() == "始"))){alias = "百裂始"}
	if(name2s.some(t=>(t.trim() == "百裂"))&&name2s.some(t=>(t.trim() == "連"))){alias = "百裂"}
	if(name2s.some(t=>(t.trim() == "百裂"))&&name2s.some(t=>(t.trim() == "〆"))){alias = "百裂〆"}
	if(name2s.some(t=>(t.trim() == "横スマ1"))){alias = "横スマ1"}
	if(name2s.some(t=>(t.trim() == "横スマ2"))){alias = "横スマ2"}
	if(name2s.some(t=>(t.trim() == "剣ビーム"))){alias = "剣ビーム"}
	if(name2s.some(t=>(t.trim() == "剣ビーム"))&&name2s.some(t=>(t.trim() == "最大"))){alias = "剣ビーム最大"}	
	if(name2s.some(t=>(t.trim() == "着地"))){is_landing_attack=true}
	if(name2s.some(t=>(t.trim() == "持続"))){  persistence_num = 1}
	if(name2s.some(t=>(t.trim() == "持続1"))){ persistence_num = 1}
	if(name2s.some(t=>(t.trim() == "持続2"))){ persistence_num = 2}
	if(name2s.some(t=>(t.trim() == "持続3"))){ persistence_num = 3}
	if(name2s.some(t=>(t.trim() == "持続4"))){ persistence_num = 4}
	if(name2s.some(t=>(t.trim() == "持続5"))){ persistence_num = 5}
	if(name2s.some(t=>(t.trim() == "持続6"))){ persistence_num = 6}
	if(name2s.some(t=>(t.trim() == "全シフト"))){shift = "all"}
	if(name2s.some(t=>(t.trim() == "上シフト"))){shift = "up"}
	if(name2s.some(t=>(t.trim() == "下シフト"))){shift = "under"}
	if(name2s.some(t=>(t.trim() == "対地"))){shift = "vs_ground"}
	if(name2s.some(t=>(t.trim() == "対空"))){shift = "vs_air"}
	name2s.forEach(t=>{
		if(t.includes("Hit"))
		{
			serial_num_str = t.replace("Hit","").trim();
			test_message+="(連続ヒットする技)"
	}})
	
	let time1 = f.time1.toString().trim()
	   ,start
	   ,end
	   
// 連続ヒット技でひとまとめにされているデータの1つ目を発生とする
	if(isUndefined(serial_num_str) == false && serial_num_str.includes("-"))
	{
		test_message+="(連続ヒットまとめ技)"	
		time1 = f.time1.split(",")[0]
		//テスト用にひとまとめ全データぶちこむ
		test_serial_num_strs = f.time1
		
	}
	 // 発生が数字。持続1F
	if(isNaN(time1) == false)
	{
		start = time1
		end = time1
    }
	//	発生が持続する。2-5みたいな
	else
	{
		const occurrences = time1.split("-")
		start = occurrences[0]
	    end = occurrences[1]
	}
	
	const skill_genre = skill_genres.filter(s=>(s.full_name == f.name1))[0].skill_genre

	const fighter_id = fighters.filter(s=>(s.name == f.fighter_name))[0].fighter_id

    if(test_message == "") 
	{
		test_message = undefined
	}
  	return {...f
	    ,alias
	    ,persistence_num 
	    ,shift
		,serial_num_str
		,is_landing_attack
		,test_message 
		,test_persistences 
		,test_skill_genre_name
		,start
		,end
		,skill_genre
		,fighter_id
		,test_serial_num_strs
	}	
 })
 return result_frame_data
 }
 
 
 function getFrameData({ alias
	    ,persistence_num 
	    ,shift
		,is_landing_attack
		,test_message 
		,test_persistences 
		,test_skill_genre_name
		,start
		,end
		,time
		,skill_genre
		,fighter_id
		,damage
		,damage_no
		,serial_num_str
		,test_serial_num_strs
		,name2
		,time2
 ,fighter_name}){
		
		const getStr = ((name,val)=>{
			if(isUndefined(val)) 
			{
				return ""
			}
			return `${name}:"${val.toString().trim()}", ` 
		})
			const getNum = ((name,val)=>{
			if(isUndefined(val)) 
			{
				return ""
			}
			return `${name}:${Number(val.toString().trim())}, ` 
		})
		const getBol = ((name,val)=>{
			if(isUndefined(val)) 
			{
				return ""
			}
			return `${name}:${val.toString().trim()}, ` 
		})
		let d = "{"
		d += getStr("tesf", fighter_name)                     //テスト用ファイター名
		d += getStr("tess", test_skill_genre_name)            //テスト用スキル名
		d += getNum("fighter_id", fighter_id)                  //ファイターID
		d += getNum("skill_genre", skill_genre)                //スキルID
		d += getNum("begin", start)		                       //発生フレ
		d += getNum("end", end)		                           //発生終了フレ
		d += getNum("time", time2)		                       //全体フレ
		d += getNum("base_damage", damage)		               //基礎ダメージ
		d += getNum("damage_no", damage_no)		               //同技のヒット位置で変わるダメージ順番		
		d += getStr("alias", alias)		                        //別名

		d += getNum("persistence_num", persistence_num)		    //持続技		
		d += getStr("serial_num_str", serial_num_str)		    //Hit文字を除いた連続ヒット技
		d += getStr("shift", shift)                              // シフト攻撃	
		d += getBol("is_landing_attack", is_landing_attack)	     //着地攻撃	
		d += getStr("tes_message", test_message)		         //テストメッセージ
	    d += getStr("test_serial_num_strs", test_serial_num_strs)//テスト用Hit文字を除いた連続ヒットまとめ技
        d += getStr("tes_val", name2)		                 //技種類属性		
		d = d.replace(/\r?\n/g,"")//改行コード削除
		return d + "}\n"
 }

//ready最後
})







