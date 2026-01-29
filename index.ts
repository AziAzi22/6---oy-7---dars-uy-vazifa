/////////////////   1
// interface MyFunction {
//     (arr: number[]): number;
// }

// function add(arr: number[]): number {
//   const sum = arr.reduce((a, b) => a + b, 0);

//   return sum;
// }

// console.log(add([1, 2, 3]));

///////////////////////2

// interface MyFunction {
//   (arr: string[]): number[];
// }

// const get_length: MyFunction = (arr) => {
//   let res = arr.map((str) => str.length);
//   return res;
// };
// console.log(get_length(["a", "ab", "abc", "abcd"]));

///////////////  3
// let tuple: [string, number, string] = ["ali", 33, "footballplayer"];
// console.log(tuple);

//////////////        -2- type and alias 1

// type Car = [make: string, model: string, year: number];

// const BMW: Car = ["BMW", "X5", 2022];
// const Toyota: Car = ["Toyota", "Camry", 2023];
// const Tesla: Car = ["Tesla", "Model 3", 2023];

// const Cars={
//     BMW,
//     Toyota,
//     Tesla
// }
// console.log(Cars);

// type Car = {
//     make: string,
//     model: string,
//     year?: number
// }

// const BYD : Car = {
//     make: "BYD",
//     model: "BYD",
//     // year: 2023
// }

// console.log(BYD);

/////////////// -2- 2

// type Book = {
//   title: string;
//   author: string;
//   pages: number;
// };

// type AddBookFunction = {
//   (book: [title: string, author: string, pages: number]): Book[];
// };

// let bookList: Book[] = [];

// const addBookAndGetBooks: AddBookFunction = (book) => {
//   const [title, author, pages] = book;

//   const newBook: Book = {
//     title,
//     author,
//     pages,
//   };

//   bookList.push(newBook);
//   return bookList;
// };

// addBookAndGetBooks(["book1", "author1", 100])
// addBookAndGetBooks(["book2", "author2", 200])
// addBookAndGetBooks(["book3", "author3", 300])
// addBookAndGetBooks(["book4", "author4", 400])
// console.log(addBookAndGetBooks(["book5", "author5", 500]))

/////////// union types

// 1 \\

// function myFunc(x:(number | string)):({message: (number | string)}) {
//     if (typeof x === "string") {
//         return {
//             message: x.length
//         }
//     }{
//         return {
//             message: x*2
//         }
//     }
// }

// console.log(myFunc("ali"));
// console.log(myFunc(12));

// 2 \\


function indentificatro(password:(string | number)): ({message: string}) {
    if (typeof password === "string") {
        return {
            message: "password is string"
        }
    } else {
        return {
            message: "password is number"
        }
        
    }
}

console.log(indentificatro("ali11"));
console.log(indentificatro(12222));



//////////////////////////  4 primitive types

// 1 \\

// type myFunc = {
//   (answer: boolean): {
//     message: string;
//   };
// };

// const getAnswer: myFunc = (answer) => {
//   if (answer) {
//     return {
//       message: "yes",
//     };
//   } else {
//     return {
//       message: "no",
//     };
//   }
// };

// console.log(getAnswer(true));
// console.log(getAnswer(false));

// 2 \\

// type myFunc = {
//   (xn_8: any): {
//     message: string;
//   };
// };

// const checkVariable: myFunc = (xn_8) => {
//   if (typeof xn_8 === "undefined" || xn_8 === null) {
//     xn_8 = 1;
//     return {
//       message:
//         "o'zgaruvchi qiymeti null yoki undefined bo'lishi bo'lgani uchun default xolatda 1 ga o'zgartirildi: " + xn_8,
//     };
//   }
//   return {
//     message: "o'zgaruvchi qiymati null yoki undefined emas: " + xn_8,
//   };
// };

// let a = 12;
// let b = undefined;
// let c = null;
// console.log(checkVariable(b));
// console.log(checkVariable(c));
// console.log(checkVariable(a));

/////////////////// 5  void and never

// function myFunc(answer: boolean): void {
//     if (answer) {
//         console.log("yes");
//     } else {
//         console.log("no");
//     }
// }
// const x: boolean = true;
// const y: boolean = false;
// myFunc(x)
// myFunc(y)

// function infiniteLoop(): never {
//     let a: number = 0
//   while (true) {
//     console.log(a)
//     a++
//   }
// }
// console.log(infiniteLoop());

/////////// home work

// 1 - masala

// function upperCaseKeys(obj: object): object {
//   let res: { [key: string]: any } = {};
//   for (const key in obj) {
//     res[key.toUpperCase()] = (obj as any)[key];
//   }

//   return res;
// }

// const data = {
//   name: "ali",
//   age: 25,
//   country: "Uzbekistan",
// };

// console.log(upperCaseKeys(data));

// 2 - masala

// function fizzBuzz(n: number): string[] {
//   const res: string[] = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       res.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       res.push("Fizz");
//     } else if (i % 5 === 0) {
//       res.push("Buzz");
//     } else {
//       res.push(i.toString());
//     }
//   }
//   return res;
// }
// console.log(fizzBuzz(15));

// 3 - masala

// function getPermutations(str: string): string[] {
//   const permutations = [];

//   if (str.length === 1) {
//     return [str];
//   }

//   for (let i = 0; i < str.length; i++) {
//     const el = str[i];
//     const x = str.slice(0, i) + str.slice(i + 1);
//     const subPermutation = getPermutations(x);
//     for (const p of subPermutation) {
//       permutations.push(el + p);
//     }
//   }

//   return permutations;
// }

// console.log(getPermutations("abc"));
// console.log(getPermutations("ab"));

// 4 - masala

// function jsonDiff(
//   obj1: { [key: string]: number | string },
//   obj2: { [key: string]: number | string },
// ): object {
//   const res: { [key: string]: any } = {};

//   const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

//   for (const key of keys) {
//     if (obj1[key] !== obj2[key]) {
//       if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
//         res[key] = jsonDiff(obj1[key], obj2[key]);
//       } else {
//         res[key] = [obj1[key], obj2[key]];
//       }
//     }
//   }

//   return res;
// }

// const oldData = { name: "Ali", age: 25, country: "Toshkent" };
// const newData = { name: "Ali", age: 26, country: "Uzbekistan" };

// const oldData1 = { name: "Willi", age: 25, country: "England" };
// const newData1 = { name: "Wonka", age: 30, country: "england" };

// console.log(jsonDiff(oldData, newData));
// console.log(jsonDiff(oldData1, newData1));

// 5 - masala

// function sortIpPs(ips: string[]): string[] {
//   return ips.sort();
// }

///////
// ---------------------- xaxaxaxax shuncha narsa yozib tashlagandim, keyin shu sortni ishlatib --------------------------ko'raychi deb yozsam ishlayabdi xaxa
//////

// console.log(sortIpPs(["192.168.1.1", "10.0.0.1", "172.16.0.1", "192.168.0.1"]));

/// 6 - masala

/// ! -- shu belgisiz ishlamdi lekin

// function compressString(str: string): string {
//   if (str.length === 0) {
//     return "";
//   }

//   let res = "";
//   let count = 1;

//   for (let i = 1; i < str.length; i++) {
//     if (str[i]! === str[i - 1]!) {
//       count++;
//     } else {
//       res += str[i - 1]! + count;
//       count = 1;
//     }
//   }

//   res += str[str.length - 1]! + count;

//   return res;
// }

// console.log(compressString("aaabbcdd"));
// console.log(compressString("hhhello"));
// console.log("abcd");

// function compressString(str:string):string {   ishlamadi XXXXXXX
//    let obj:{[key:string]:number}={};

//    for (let i = 0; i < str.length; i++) {
//     let temp = str[i];
//     obj[temp] ? obj[temp]++ : obj[temp] = 1;
//    }

//    let res = ""

//    for (const key in obj) {
//     res += key + obj[key]
//    }

//    return res
// }

// console.log(compressString("aaabbcdd"));
// console.log(compressString("hhhello"));
// console.log("abcd");

//  7 - masala

//  chpt ishladi buni 100% ni ham 8 ta for bilan menga qyiyin bo'ldi

// function isValidSudoku(board: number[][]): boolean {

//   for (let i = 0; i < 9; i++) {
//     const row = board[i];
//     if (!row) return false;

//     const seen = new Set<number>();
//     for (let j = 0; j < 9; j++) {
//       const val = row[j];
//       if (val === undefined || val === 0) continue;
//       if (seen.has(val)) return false;
//       seen.add(val);
//     }
//   }

//   for (let j = 0; j < 9; j++) {
//     const seen = new Set<number>();
//     for (let i = 0; i < 9; i++) {
//       const row = board[i];
//       if (!row) return false;

//       const val = row[j];
//       if (val === undefined || val === 0) continue;
//       if (seen.has(val)) return false;
//       seen.add(val);
//     }
//   }

//   for (let row = 0; row < 9; row += 3) {
//     for (let col = 0; col < 9; col += 3) {
//       const seen = new Set<number>();

//       for (let i = row; i < row + 3; i++) {
//         const r = board[i];
//         if (!r) return false;

//         for (let j = col; j < col + 3; j++) {
//           const val = r[j];
//           if (val === undefined || val === 0) continue;
//           if (seen.has(val)) return false;
//           seen.add(val);
//         }
//       }
//     }
//   }

//   return true;
// }

// const board =[
//     [5, 3, 0, 0, 7, 0, 0, 0, 0],
//     [6, 0, 0, 1, 9, 5, 0, 0, 0],
//     [0, 9, 8, 0, 0, 0, 0, 6, 0],
//     [8, 0, 0, 0, 6, 0, 0, 0, 3],
//     [4, 0, 0, 8, 0, 3, 0, 0, 1],
//     [7, 0, 0, 0, 2, 0, 0, 0, 6],
//     [0, 6, 0, 0, 0, 0, 2, 8, 0],
//     [0, 0, 0, 4, 1, 9, 0, 0, 5],
//     [0, 0, 0, 0, 8, 0, 0, 7, 9]
// ]

// const board1 =[
//     [5, 3, 0, 0, 7, 0, 0, 0, 0],
//     [6, 0, 0, 1, 9, 5, 0, 0, 0],
//     [0, 9, 8, 0, 0, 0, 0, 6, 0],
//     [8, 0, 0, 9, 6, 0, 0, 0, 3],
//     [4, 0, 9, 8, 9, 3, 0, 0, 1],
//     [7, 0, 0, 0, 2, 9, 0, 0, 6],
//     [0, 6, 9, 0, 0, 0, 9, 8, 0],
//     [9, 9, 0, 4, 1, 9, 0, 9, 5],
//     [0, 9, 0, 0, 8, 0, 0, 9, 9]
// ]

// console.log(isValidSudoku(board));
// console.log(isValidSudoku(board1));

// 8  - masala

// function groupAnagrams(words: string[]): string[][] {
//   const res: string[][] = [];

//   const map: { [key: string]: string[] } = {};

//   for (const element of words) {
//     let temp = element.split("").sort().join("");

//     if (!map[temp]) {
//       map[temp] = [];
//     }

//     map[temp].push(element);
//   }

//   for (const key in map) {
//     const group = map[key];
//     if (group && group.length >= 1) {
//       res.push(group);
//     }
//   }
//   return res;
// }

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));











////

/////////

//////
//////// dars

// let a: number = 12;

// a="hello"
// a=11

// console.log(String(a));

// let str: string = "hello";
// str;

// let notFound: undefined = undefined;

// notFound = 12;

// let empty: null = null;

// empty = 33;

// let bigNum: bigint = BigInt(122223)
// let a:number =12

// let b =a.toString()

// console.log(typeof a);

// let a:any = [123]    // xxxx

//  let a: string | number = "12";

//  a = 12;

// type hello = "hello" | "world"

// let str: hello = "hello"

// str = "world"
// str= "hi" /////// xxxx

// array

// let tuple: [string, string, number] = ["hello", "world", 123];

// let arr:string[] = ["hello", "world", "123", "123", "123"]

// let arr: (string|number)[] = ["hello", "world", "123", "123", "123"]

// type ObjTypes = {
//     verify: boolean,
//     name: string,
//     age: number,
//     mode: "dark" | "light"
// }

// interface IObjTypes {
//     verify: boolean,
//     name: string,
//     age?: number,
//     mode: "dark" | "light"
// }

// let obj: IObjTypes ={
// verify:    true,
// name: "ali",
// // age: 33,
// mode: "dark"
// }
