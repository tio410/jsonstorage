<?php
	try{
		$pdo = new PDO('sqlite:Json.db','','');  
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);  
		$key = $_POST['key'];
		$value = $_POST['value'];
		print_r($_POST);
				$que = $pdo->query("SELECT * FROM list WHERE key=?");
				$que->execute(array($key));
				$r = $que ->fetch(PDO::FETCH_ASSOC);
				print $r;
				print_r($r);
				//存在していない
				if($r){
					print("up");
					$up = $pdo->prepare("UPDATE list SET value=? WHERE key=?");
					$up->execute(array($value,$key));
				}
	
				else{
					print("ins");
					$ins = $pdo->prepare("INSERT INTO list VALUES (?,?)");
					$ins->execute(array($key,$value));
				}
	
				print_r($_POST);
	}
	
	catch(PDOException $e){  
    		print $e->getMessage();  
    		die();  
	}
	$pdo = null;  
?>
