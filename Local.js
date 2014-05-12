(function(root,factory) {
	root.Localasystorage = factory(root, {});

//this(window)が無名関数第1引数にあたり、functionが第2関数にあたる
}(this,function(root,Localasystorage){
	root.Localasystorage = Localasystorage;

	Localasystorage.getItem = function(root,cb){
		var d = localStorage.getItem(root);
		cb(d);
		return d;
	};
	Localasystorage.setItem = function(root,obj){
		return localStorage.setItem(root,obj);
	};

	Localasystorage.removeItem = function(root){
		return localStorage.removeItem(root);
	};
  return Localasystorage;

}));
