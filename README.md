jsonstorage
===========
localstorageと同様の保存方法をDBでも行えるようにできる。

jsonstorageはlocalstorageの切り替えが可能。

切り替え時は使用するHTMLに

FormStorage.init(Localasystorage);

FormStorage.init(Jsonstorage);

のどちらかをユーザー側が指定することで切り替え可能。

以下仕様用途(nv_form同様)

localstorage同様に入力された内容を随時保存することで予期せぬエラーで入力内容が消えてしまうのを防ぐことのできるjs機能です。

入力されたデータをphpに非同期として送信を行い、sqlite3でDBに保存することができます。

DBに入っているデータは基本的に削除されませんが、submitボタンを押下することで、fomr内のデータが全て削除されるようにしてあります。

また上記で説明したとおりlocalstorageでの保存も可能でFormStorage.init();()内をLocalstorage、又はJsonstorageを指定することで切り替えが行うこともできます。
