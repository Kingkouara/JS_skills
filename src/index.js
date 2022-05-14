// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";

// console.log(val1);

// let val2 = "let変数"
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "letを再宣言";

// const val3 = "const変数";
// console.log(val3);

//constは上書き、再宣言不可能

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {

//   name:"さく",
//   age:20,
// }
// val4.name = "saku";
// val4.addres = "大分";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

//テンプレート文字列
// const name = "saku";
// const age = 20;

// console.log(`私の名前は${name}です。年齢は${age}です`);

//アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1,num2) => {
//    return num1+num2;
// }
// console.log(func3(10,20));

//分割代入
// const myProfile = {
//    name: "saku",
//    age: 21,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1);

// const { name, age } = myProfile;//これ
// console.log(`名前は${name}です。年齢は${age}です。`);

//デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello();     //↑デフォルト値

//スプレッド構文

//配列の展開
//const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sum = (num1,num2) => {
//    return num1+num2;
// }
// console.log(sum(arr1[0],arr1[1]));
//console.log(sum(...arr1));
//配列の中身を順番に処理している

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);

//配列の結合
// const arr7 = [...arr4,...arr5];
// console.log(arr7);

//mapを使った配列の処理
const nameArr = ["田中", "糸園", "saku"];
//  for(let i=0;i<nameArr.length;i++){
//     console.log(nameArr[i]);
//  }

//  const nameArr2 = nameArr.map((name)=>{
//    return name;
//  })
//  console.log(nameArr2);

//nameArr.map((name,a) => console.log(`${a}番目は${name}です`));
//二つ目の引数にはインデックスの数字が入る

//filterを使った配列の処理
//  const numArr = [1, 2, 3, 4, 5];
//  const newNumArr = numArr.filter((num) => {
//    return num % 2 === 1;
//  });
//  console.log(newNumArr);

//mapの使い方
// const newNameArr = nameArr.map((name) => {
//    if(name === "saku"){
//       return name
//    }
//    else{
//       return `${name}さん`
//    }
// })
// console.log(newNameArr);

//三項演算子
//ある条件 ?条件　条件がtrueのとき : 条件がflaseのとき
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "1300";
// const formatted = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formatted);

// const checkSum = (num1,num2) => {
//   return num1+num2 >100 ? "100を超えています" : "許容範囲内です";
// }
// console.log(checkSum(50,60));

//論理演算子
// ||は左側がfalseなら、右側をかえす
// const num = null;
// const fee = num || "金額が設定されました";
// console.log(fee);

// //&&は左側がtrueなら、右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
