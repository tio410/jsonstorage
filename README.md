jsonstorage
===========
localstorageと同様の保存方法をDBでも行えるようにできる。
jsonstorageはlocalstorageの切り替えが可能。
切り替え時は使用するHTMLに
FormStorage.init(Localasystorage);
FormStorage.init(Jsonstorage);
のどちらかをユーザー側が指定することで切り替え可能。
