// const months = ["January", "February", "March", "Aprial"];

// const transformedArray = months.map((months) => {
//   return months.toUpperCase();
// });

// console.log(months, transformedArray);

// let showArray = () => {
//   const transformedArray = months.map((month) => {
//     return month.toUpperCase();
//   });

//   console.log(months, transformedArray);
// };

// const users = [
//   {
//     first_name: "Mike",
//     last_name: "Sheridan",
//     age: 30,
//     location: "London",
//   },
//   {
//     first_name: "Tim",
//     last_name: "Lee",
//     age: 22,
//     location: "US",
//   },
//   {
//     first_name: "John",
//     last_name: "Carte",
//     age: 45,
//     location: "Australia",
//   },
// ];

// let showUsers = () => {
//   const transformObject = users.map((user) => {
//     return `${user.first_name} lives in ${user.location}`;
//   });
//   console.log(users, transformObject);
// };

//перевернуть символы каждой строки в обратном порядке.
// const strings = ["regardless", "hello"];

// let newStrings = strings.map((string) => {
//   return string.split("").reverse().join("");
// });

// console.log(newStrings);

// const arr = ["123", "456", "789"];

// let arr1 = [];

// let newArr = arr.map((e) =>
//   e.split("").map((singleNumber) => Number(singleNumber))
// );

// console.log(newArr);

let numbers = [1, 2, 3, 4, 5];

let arrayCopy = numbers.map((numbers) => {
  return numbers;
});

console.log(arrayCopy);
