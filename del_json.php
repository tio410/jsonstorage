<?php
	try{
		$pdo = new PDO('sqlite:Json.db','','');  
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);  
		$url = $_POST['url'];
		$que = $pdo->query("SELECT * FROM list WHERE key=?");
		$que->execute(array($url));
		$r = $que ->fetch(PDO::FETCH_ASSOC);
		//存在していない
		if($r){
			print("up");
			$del = $pdo->prepare("DELETE FROM list WHERE key=?");
			$del->execute(array($url));
		}
		print_r($_POST);
	}
	
	catch(PDOException $e){  
    		print $e->getMessage();  
    		die();  
	}
	$pdo = null;  
?>
