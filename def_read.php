<?php
	try{
		$pdo = new PDO('sqlite:Json.db','','');  
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);  
		// テーブル作成  if not exists listで既存の場合作成しない。
		$pdo->query('CREATE TABLE if not exists list (key text,value text)');
   		$url = $_POST['url'];
		$que = $pdo->prepare("SELECT * FROM list WHERE key=?");
		$que->execute(array($url));
		//fetch()はwhile文
		$cnt=0;
		while($a = $que ->fetch()){
			$ar[$cnt] =$a;
			$cnt++;
		};
		$js_data = $ar[0]['value'];
		print($js_data);
	}
	catch(PDOException $e){  
    		print $e->getMessage();  
    		die();  
	}
	$pdo = null;  

?>
