(function(root,factory) {
	root.Jsonstorage = factory(root, {});

//this(window)が無名関数第1引数にあたり、functionが第2関数にあたる
}(this,function(root,Jsonstorage){
	root.Jsonstorage = Jsonstorage;

	Jsonstorage.getItem = function(root,cb){
		return $.post("def_read.php", {url:root},cb);
	};

	Jsonstorage.setItem = function(root,obj){
		$.post("set_json.php", {key:root,value:obj}, function(data){
		});
	};

	Jsonstorage.removeItem = function(root){
		$.post("del_json.php", {key:root}, function(data){
		});
	};
  return Jsonstorage;

}));
