
// 変数名: 型名 = 値;
// number 数値型(浮動小数点数) 
let age: number = 30.5;

// string 文字列型
let username: string = "ひろさわ";

// any
let price: any = "1000"
price = 1000
price = "1,000"
price = "¥1,000"
price = "1,000円(税込)"
// let price: any = ""
// let price: any = ""

// Array 配列
let numbers: number[] = [ 0, 1, 2, 3 ]
let cats: string[] = [ "ぽち", "ごろー", "ごん"]
let cats_c: any[] = [ "ぽち", 1, "ごん"]


console.log(`${username}さんは${age}歳です`);
