// Practice Array methods

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Array.filter()
// 1. Filter the list of inventors for those who were born in the 1500's.

// const gitConnectInventors = inventors.filter ((item)=>item.year>=1500 && item.year < 1600) 
// console.log(gitConnectInventors)

// Array.map()
// 2. Give us an array of the inventors first and last names.

// const gitConnectInventors = inventors.map(
//     (i) =>`first-${i.first} last-${i.last}`
// );
// console.log(gitConnectInventors);



// Array.sort()
// 3. Sort the inventors by birthdate, oldest to youngest.

// const gitConnectInventors = inventors.sort((a, b) =>a.year-b.year);
//   console.log(gitConnectInventors);

// Array.reduce()
// 4. How many years did all the inventors live all together ?

// const gitConnectInventors = inventors.reduce((acc, curr) => {
//     return acc + (curr.passed - curr.year);
//   }, 0);

//   console.log(gitConnectInventors);

// Array.every()
// 5. Did all inventors live at least 45 years ?

// const gitConnectInventors = inventors.every ((item)=>item.year==45)

//  console.log(gitConnectInventors);

// Array.some()
// 6. At least one inventor lived for 45 years?
// const gitConnectInventors = inventors.some ((item)=>item.year>=45)

//  console.log(gitConnectInventors);