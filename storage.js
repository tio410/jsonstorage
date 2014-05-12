
var FormStorage={
init:function(storage) {
	//初期変数
	class_array=[];
	root_path = window.location.pathname;
	
	storage.getItem(root_path,function(d){
		Obj = new Object();
		if(d!=""){
			get_storage = JSON.parse(d);
			if(get_storage && Object.keys(get_storage).length!=0){
				$("form").each(function(i){
					var form_name = $(this).attr("name");
					var count = $(this)[0].length
					var form_data = $(this)[0];
					//キーの有無
					if(form_name in get_storage){
						for(var j =0; j<count;j++){
							var type = form_data[j].type;
							var get_key = form_data[j].name;
							if(!Obj[form_name])  Obj[form_name]={};
							if(get_key in get_storage[form_name]) var val_data = get_storage[form_name][get_key];
							else var val_data ="";
							if(type == 'text' || type == 'select-one') form_data[j].value= val_data;
							else if(type == 'checkbox'){
								get_key = get_key+"_"+form_data[j].value;
								val_data = get_storage[form_name][get_key];
								if(val_data ==1) var ch = true;
								else var ch =false;
								form_data[j]['checked'] = ch;
							}
							else if(type == 'radio'){
								var check = form_data[j].value;
								if(val_data == check) form_data[j]['checked'] = true;
								else form_data[j]['checked'] = false;
							}
							//キーの有無
							if(get_key in get_storage[form_name]) Obj[form_name][get_key] = get_storage[form_name][get_key];
						}
					}
				});
			}
		}
	});

	//送信ボタンクリック時、storageデータを削除など
       	$("[type='submit']").click(function(e){
		if(1<$("form").length){
			var form_check = $(this).parents("form");
			var form_name = form_check.attr("name");
			delete Obj[form_name];
			storage.setItem(root_path,JSON.stringify(Obj));
		}
		else storage.removeItem(root_path);
       	});

	//入力されるたびに呼び出し、storageに保存
	$("[type='text']").keyup(function(e){
		storage_save($(this));
	});
	$("[type='checkbox']").click(function(e){
		storage_save($(this));
	});
	$("[type='radio']").click(function(e){
		storage_save($(this));
	});
	$("select").change(function(e){
		storage_save($(this));
	});


	function storage_save(data){
		var count = data[0].length;
		var form_name = data.parents("form").attr("name");
		var form_data = data[0];
		var type = form_data.type;
		var key_name = form_data.name;
		var get_key = form_data.name;
		var val_data = form_data.value;
		if(!Obj[form_name])  Obj[form_name]={};
		if(type =='checkbox'){
			var check_name = key_name +"_"+val_data;
			if(form_data['checked'] == true) var ch =1;
			else var ch =0;
			Obj[form_name][check_name] = ch;
		}
		else Obj[form_name][key_name] = val_data;
		storage.setItem(root_path,JSON.stringify(Obj));
	}
}
};
