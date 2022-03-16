'use strict';

// const pickIt  = document.querySelector('p');
// pickIt.addEventListener('click', changeState);

// function changeState(){
//     const newname = prompt(`Enter New Name Now!!`);
//     pickIt.textContent = `Player 1: ${newname}`
// }

// document.addEventListener('DOMContentLoaded', () =>{
//     function createParagreaph(){
//         const para = document.createElement('p');
//         para.textContent = 'You Clicked the button!';
//         document.body.appendChild(para);
//     }

//     const buttons = document.querySelectorAll('button')
//     for(const button of buttons){
//         button.addEventListener('click', createParagreaph)
//     }
// })

/*Genrating Random number in between 1 and 100 */
// const randomNumebr = Math.floor(Math.random() * 100 + 1);

// const guesses = document.querySelector(".guesses");
// const lastResult = document.querySelector(".lastResult");
// const lowOrHi = document.querySelector(".lowOrHi");

// const guessSubmit = document.querySelector(".guessSubmit");
// const guessField = document.querySelector(".guessField");

// let guessCount = 1;
// let resetButton;

// function checkGuess() {
//   const userGuess = Number(guessField.value);
//   if (guessCount === 1) {
//     guesses.textContent = "Previous Guesses:";
//   }

//   guesses.textContent += userGuess + " ";

//   if (userGuess === randomNumebr) {
//     lastResult.textContent = `Congratulations 🎉, you got it right!!`;
//     lastResult.style.backgroundColor = "green";
//     lowOrHi.textContent = "";
//     setGameOver();
//   } else if (guessCount === 10) {
//     lastResult.textContent = `!!! GAME OVER !!!`;
//     lowOrHi.textContent = " ";
//     setGameOver();
//   } else {
//     lastResult.textContent = `Wrong!`;
//     lastResult.style.backgroundColor = `red`;
//     if (userGuess < randomNumebr) {
//       lowOrHi.textContent = `Last guess was too low !`;
//     } else if (userGuess > randomNumebr) {
//       lowOrHi.textContent = `Last guess was too high!`;
//     }
//   }
//   guessCount++;
//   guessField.value = " ";
//   guessField.focus();
// }

// function setGameover() {
//   guessField.disabled = true;
//   guessSubmit.disabled = true;
//   resetButton = document.createElement(`button`);
//   resetButton.textContent = `Start New Game!!`;
//   document.body.append(resetButton);
//   resetButton.addEventListener(`clicl`, resetGame);
//   guessField.focus();
// }

// function resetGame() {
//   guessCount = 1;
//   const resetParas = document.querySelectorAll(".resetParas p");
//   for (const resetPara of resetParas) {
//     resetPara.textContent = " ";
//   }

//   resetButton.parentNode.removeChild(resetButton);
//   guessField.disabled = false;
//   guessSubmit.disabled = false;
//   guessField.value = "";
//   guessField.focus();

//   lastResult.style.backgroundColor = `white`;
//   randomNumebr = Math.floor(Math.random() * 100) + 1;
// }
// guessSubmit.addEventListener(`click`, checkGuess);

// const mybutt = document.querySelector(".button-A");
// const heading = document.querySelector(".heading-A");

// mybutt.addEventListener("click", () => {
//   const name = prompt("Enter you Name!");
//   if (!name) {
//     alert("Can not submit an empty name");
//   } else heading.textContent = `Welcome: ${name}`;
// });

// const button = document.querySelector('.btn-machine');
// const para = document.querySelector('.p-machine');

// button.addEventListener('click', changeValue);

// function changeValue() {
//   if (button.textContent === 'Start Machine') {
//     button.textContent = `Stop Machine`;
//     para.textContent = 'Machine is Running';
//   } else if (button.textContent === 'Stop Machine') {
//     button.textContent = `Start Machine`;
//     para.textContent = 'Machine has Stopped!';
//   }
// }

// const name = 'Charles';

// const but = document.querySelector('.btn-press');

// but.addEventListener('click', () => {
//   const greet = prompt(`Hello whats you name?`);
//   but.textContent = `You have just Clicked me so very badly`;
//   but.textContent = alert(`${greet} thanks for visting our site toady!!`);
// });

// const diving = document.querySelector(div);
// const greetings = [
//   'Happy Birthday',
//   'Merry Christmas my love',
//   'A happy Christmas to all the family',
//   'You are all i want for Christmas',
//   'Get well soon',
// ];

// if (greetings.includes('Christmas')) {
//   const items = document.createElement('li');
//   diving.textContent = 'Christmas';
//   diving.appendChild(items);
// }

// const cities = ['LonDOn', ' ManchesTer', ' BirmiGnHAM', ' LivePOOl'];
// for (const city of cities) {
//   const toLo = city.toLowerCase();

//   const firstLetter = toLo.slice(0, 1);
//   const capital = toLo.replace(firstLetter.toLocaleLowerCase());

//   console.log(firstLetter);
//   console.log(toLo);
// }

//we have a store and receives unknown number of items from
// the shopper and we have to store those items in an array
// before we can print the final total value together in the
//final receipt for the supermarket.

//lets first receive items from the shopper.
// let p = 0;
// const list = [];
// const constol = prompt(`Enter 0 to continue 1 to stop`);
// while (constol != 1) {
//   const userItems = prompt(`Enter the Item`);
//   list.push(userItems);
//   p++;
// }

// console.log(list);

// const numbers = [12, 3, 49, 40, 4, 6, 7, 8, 9, 12, 1, 10];

// function double(num) {
//   return num * 2;
// }

// const now = numbers.map(double);

// console.log(now);

// ===========================================================

'use strict';

// const now = 2022;
// const ageCharles = now - 1992;
// console.log(ageCharles);

// const ageVicky = now - 1998;

// let x = 10 + 5;
// x+=10; //x = x+10
// x*=4; //x = x*4
// x++; // x= x+1;
// x--;  //x = x-1

// // comparision oeprators
// console.log(ageCharles > ageVicky);
// console.log(ageVicky >=18)

// codding challenge number onemptied

// const BMI = mass / height  ** 2
// const marksMass = 78;
// const marksHeight = 1.69

// const johnMass = 92
// const johnHeight = 1.95

// const markBMI = marksMass/marksHeight**2;
// const johnBMI = johnMass/johnHeight**2;

// console.log(markBMI, johnBMI);

// const markHigherBMI = markBMI > johnBMI
// console.log(markHigherBMI)

// const mkg= prompt('enter marks mass in Kgs');
// const mht = prompt('enter marks height in Ms');
// const jkg = prompt('enter john mass in Kgs');
// const jht = prompt('enter john height in ms')

// const mBMI = alert(`Makes BMI is ${mkg/mht**2} Kg/m`);
// const jBMI = alert(`Johns BMI is ${jkg/jht**2} Kg/m`)

// const boolMark = mBMI > jBMI;
// alert(`Marks BMI is ${mkg/mht**2} Kg/m and
// Johns BMI is ${jkg/jht**2} kg/m and the
// boolean Marks and Johns BMI is ${mBMI>jBMI}`)

// const firstName = 'Charles'
// const lastName = 'Ecuru'
// const job = 'programmer'
// const birthYear = 1992

// const Charles = `I'm ${firstName} ${lastName}, i am a ${2022-birthYear} ${job}`
// console.log(Charles)

// console.log(`this is the Backticks application sample!`);

// console.log(`this is a muliline sting
// application approach and it needs
// anot of simple work compared
//  to the old approach!`)

//  Decisions making
// const age = 11;

// if(age >=18){
//     console.log(`She can take her driving lessons now!`)
// }
// else {
//     console.log(`She is still very young to start
//     her driving lesson!, wait another ${18-age} years`)
// }
// let centuary;
// const birthYear = 1991;
// if(birthYear<2000){
//      centuary = `20th centuary`;
// }else {
//     centuary =`21st Centuary`;
// }

// Codding Challenge two

// const markMass = prompt(`Enter Marks mass in Kgs!`);
// const markHeight = prompt(`Enter Marks Height in meters`);
// const johnMass = prompt(`Enter Johns mass in Kgs `);
// const johnHeight = prompt('Enter Johns Height in meters')

// const makBMI = markMass/markHeight**2
// const jonBMI = johnMass/johnHeight**2

// if(makBMI > jonBMI){
//     console.log(`Marks BMI ${makBMI} is greater that Johns BMI ${jonBMI}`)
// }else if(jonBMI > makBMI){
//     console.log(`Johns BMI ${jonBMI} is Greater than Marks BMI ${makBMI}`)
// }else if(makBMI === jonBMI){
//     console.log(`Both John and mark have the samek BMI`)
// }else {
//     console.log(`Your value is not clear!! pleae try again with other values
//     and we start a fresh the valuation`)
// }

// type converstion is when we convert from one type to another and yet type coaersion is the we have them converted explicityel

// const inputyear = prompt('Enter yer of birth!')
// console.log(Number(inputyear) + 10);

// falsy and truthy values
// five falsy value inclue
// 0, '' , null, undefined, NaN

// everything else will be converted to true when we try to convert them into a boolean

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Charles'))
// console.log(Boolean(''))
// console.log(Boolean({}))

// const money = {};
// if(money){
//     console.log(`DOnt spent it all!`)
// }else {
//     console.log(`Yous should get a job`)
// }

// let height  = 0
// if(height){
//     console.log(`YAY!!, height is defined`)
// }else{
//     console.log(`Height is Undefined!!`)
// }

// const age = 12
// if(age === 18){
//     console.log(`this person is an adult!`)
// }else console.log(`You are still very young to do adults things!!`)

// boolean logic is a part of BS which is used to solve computer problems

// true is when stricky all the values are true
// OR operator if true if only one of them is true and false if all are false

// const hasDriversLiecense = !true;
// const hasGoodVision  = false;

// console.log(hasDriversLiecense && hasGoodVision)
// console.log(hasDriversLiecense || hasGoodVision)

// codding challenge number 3

// const dol1 = Number(prompt(`Enter Dolphine score1`));
// const dol2 = Number(prompt(`Enter Dolphine score 2`));
// const dol3  = Number(prompt('Enter Dolphine score 3'))

// const koa1 = Number (prompt(`Enter Kolas score 1`));
// const koa2 = Number(prompt(`Enter Koalas score 2`));
// const koa3 = Number(prompt('Enter Koalas score 3'));

// const dolphineAverage = ((dol1 + dol2 + dol3) /3);
// const koalasAverage = ((koa1 + koa2 + koa3)/3);

// alert(`Dolphine average score is ${dolphineAverage}
// Koalas Average Score is ${koalasAverage}`)

// console.log(`Dolphine average is ${dolphineAverage} and Koalas avergae is ${koalasAverage}`)

// const minimumScore = 100;
// if(dolphineAverage > koalasAverage && dolphineAverage >= minimumScore){
//     console.log(`Dolphine ${dolphineAverage} wins the troppt!`)
// }else if (dolphineAverage < koalasAverage && koalasAverage >= minimumScore){
//     console.log(`Kolasa ${koalasAverage} wins the troppy!`)
// }else if(dolphineAverage === koalasAverage && dolphineAverage>=minimumScore && koalasAverage >=minimumScore){
//     console.log(`Its a draw for Dolphine and Koalas ${dolphineAverage} ${koalasAverage}`)
// }else console.log('No one wins the troppy!!!')

// using the switch statement
// const day =prompt('Enter day of the week!!!')
// switch(day){
//     case 'Monday':
//         console.log(`Playing around my code for the start of the week!`);
//         console.log(`Go to the codding meet up`)
//     break;

// case 'Tuesday':
//     console.log(`Prepare throries reading `)
//     break;

//     case 'Wednesday':
//         case 'Thursday':
//         console.log(`Write some project  code`)
//         break;

//         case 'Friday':
//             console.log(`Record and evalut your code options!!`);
//             break;

//             case 'Saturday':
//                 case 'Sunday':
//                     console.log(`Enjoy the weekend and continue writing code still!!`)

//                     break;
//                      default:
//                          console.log('Not a valid weekday')
// }

// statements and an expression

// conditional operator  ternary operator

// const age = 13
// age >=18 ? console.log(`I like to drink wine!!`): console.log(`I am still very young`)

// const age = Number(prompt(`Enter you Year pf Birth!`))
// const voteAge = (2022-age)>=18 ? `Go vote tomorrow` : `You can not vote but just cheer!!`

// console.log(voteAge);

// codding challenge last for the very first part

// const pay = Number(prompt(`Enter your total Pay for food!!`));

// const tip = Number(pay >50 && pay <300 ? `${pay*0.15}` : ` ${pay*0.20}`);
// console.log(`tip was ${tip}`);

// console.log(` Pay was ${pay},
// your tip was ${tip},
//  and your total Bill is ${pay +tip}`)

//  console.log(typeof(pay))
//  console.log(typeof(tip))

// const para = document.querySelector('p');
// para.addEventListener('click', updateName);

// function updateName(){
//     const name =  prompt('Please Enter a new name!');

//     para.textContent = `Player 1: ${name}`
// }

// ......--------------------------------------------------------------------------------------------------
// Section 3 with functions, Arrays, objects basisc

// let hadDriversLiscence = false;
// const passTest = true;

// if(passTest)
//     hasDriversLiscence = true;

// if(hadDriversLiscence) console.log('I can drive: D');

// // const interface = 'Autio'
// const private = 3923;

// ......FUnctions fundamental Building blocks
// function logger() {
//     console.log(`My name is Charles Ecuru`);
// }

// logger();  ///invoking the function, running the function, calling the function interchangably
// logger();
// logger();

// function foodProcessor(apple, orange, guava) {
//     console.log( apple, orange, guava);
//     const juice = `Juice with ${apple} apples, ${orange} oranges and ${guava} guavas`;
//     return juice;
// }

// const final = foodProcessor(23, 43,4)
// console.log(final)
// function Enter() {
//     const enter = prompt('Enter Your birthYeagr here!')
// }

// function calAge(birthYear) {
//     return 2022 -birthYear;
// }
// console.log(calAge(1992))
// console.log(calAge());

// all the above was a function declaration

// now lets look into function expression

// const calAge = function(birthYear){
// return 2022 - birthYear;
// }
// console.log(calAge(1993))

// Arrow function
// const ageCa = function (birthYear){
//     return 2022 - birthYear
// }

// const myArrow = (birthYear) => 2022 -birthYear;

// console.log(ageCa(1992), myArrow(1993))

// const yearstill =(birthYear, firstName)=>{
//     const age = 2022 -birthYear;
//     return `${firstName} retires in ${65 - age}`;
// }

// console.log(yearstill(1992, 'Charles Ecuru'))

//Calling a function from inside another function  fruit processor

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor (apple, mango, guava){
//     const applePieces = cutFruitPieces(apple);
//     const manogPieces = cutFruitPieces(mango);
//     const guavaPieces = cutFruitPieces(guava);
//     const juice = `juice with ${applePieces} pieces of apples,
//     ${manogPieces} pieces of manoges and
//      ${guavaPieces} pieces of guava`;
//     return juice;
// }

// console.log(fruitProcessor(5, 6, 10))

// const calAge = (birthYear) => 2022 - birthYear;

// const yearToRetire = ()=>65 - calAge(1940);
// if(yearToRetire <0){
//     console.log(`Already Retired ${yearToRetire * -1} years ago`)
// }else {
// console.log(yearToRetire())}

// coding challenge in funaction
// const sco1 = Number(prompt(`Enter score one!`));
// const sco2 = Number(prompt(`Enter Score two`));
// const sco3 = Number(prompt(`Enter score 3`));

// const sco11 = Number(prompt(`Enter score one!`));
// const sco22 = Number(prompt(`Enter Score two`));
// const sco33 = Number(prompt(`Enter score 3`));

// const calAverageDolphine =(score1, score2, score3)=>(score1 + score2 + score3)/3;
// const calAverageKoalas = (score1, score2, score3) =>(score1+score2+score3)/3

// console.log(calAverageDolphine(sco1, sco2, sco3));
// console.log(calAverageKoalas(sco33, sco22,sco11))

// function checkWinner(calAverageDolphine, calAverageKoalas){
//     const win = calAverageDolphine * 2 > calAverageKoalas ? `Dolphine wins ${calAverageDolphine}` :`Koalas wins ${calAverageKoalas} wind`;
//     return win;
// }

// console.log(checkWinner(`${calAverageDolphine} vs ${calAverageKoalas}`));

// const calAvaerage = (a, b, c) => (a+ b + c )/3;

// const scoreDolphine = calAvaerage(44,23, 71);
// const scoreKoalas = calAvaerage(65,54,49);

// console.log(scoreDolphine, scoreKoalas)

// function checWinners (scoreDolphine, scoreKoalas){
//     const win = scoreDolphine > 2*scoreKoalas ?
//     `Dolphines wins  the trophy${scoreDolphine}
//     vs ${scoreKoalas}`: `Koalas wins ${scoreKoalas}`
// }

// checkWinners (scoreKoalas, scoreDolphine)

// -------------Arrays
// const friends = ['James', 'William', 'Isaac', 'Steven'];

// console.log(friends);
// console.log(friends.length)
// console.log(friends[friends.length-1])
// friends[4] = 'Charles'
// console.log(friends)

// const charles = ['Ecuru', 'Charles', 2022-1992, 'Software Engineer', 'Likes reading', friends];
// console.log(charles)

// // excercise
// const calcAge = function(birthYear){
//     return 2029 - birthYear
// }

// const years = [1990, 1969, 2002, 2010, 2018]

// for(const year of years){

//     console.log(calcAge(year))
// }

//Array methods --......
// const friends = ['Isaac', ' James', ' William', ' Peter', ' Paul'];

// friends.push('Evaline Home') // add element on top of the array

// console.log(friends);

// friends.unshift('John'); //add elements on the start of array
// console.log(friends)

// friends.pop() //removes the last element of the array
// console.log(friends);

// friends.indexOf('Charles');
// console.log(friends);

// if(friends.includes('James')){
//     console.log(`You have a freind call james`)
// }

// const calTip= function(bill) {
//     const tip = bill >= 50 && bill <= 300 ? 0.15*bill : 0.2 *bill;
//     return tip
// }

// console.log(calTip(100))

// const bill = [125, 555, 44];
// // cle.log( allBills(calTip));

// for(let cal of bill){
//     let all = calTip(bill);
//     console.log(all[cal])
// }

// const final = bill.reduce(acc, val ()={
//     acc +=val;
// })

// ..--------------Object

// const charles = ['charles', ' ecuru', ' programmer', 'ugandan', 2022 - 1992, friends];

// const charles = {
//     firstName:'ecuru',
//     lastName:'charles',
//      age: 2022-1922,
//      profession:'programmer',
//     friends:
//     ['James', 'Isaac', 'William', 'Peter']
// }

// console.log( charles);
// console.log(charles['firstName']);

// const nameKey = 'Name';
// console.log('first' + nameKey);
// console.log('last' + nameKey)

// const userOption = prompt(`Enter the name of your favourate item!`)

// console.log(`${charles.lastName} has
// ${charles.friends.length} friends,
// and his best friend is called
// ${charles.friends[1]}`);

// object methods ------

// const charles = {
//     firstName :'Charles',
//     lastName:'ecuru',
//     job: 'programmer',
//     dateOfBirth:2022-1992,
//     hasDriverLiscence: false,
//     married: false,
//     freinds:['issac', 'James', 'William', 'Peter', 'Paul'],
//     calAge:(birthYear)=>
//         2022-birthYear

// }

// console.log(charles.calAge(1994))

// console.log(charles['calAge'])\

// codding challege on objects

// const mark={
//     fullName:prompt(`Enter Marks Full Name`),
//     mass: prompt(`Enter marks Mass`),
//     height: prompt(`Enter marks height`),
//     calBMI: function(){
//         this.bmi = this.mass/this.height**2;
//         return this.bmi
//     }

// }

// const john={
//     fullName: prompt(`Enter Johns Full Name`),
//     mass: prompt(`Enter Johns mass`),
//     height: prompt(`Enter John height`),
//     calBMI: function(){
//         this.bmi = this.mass/ this.height**2
//         return this.bmi;
//     }

// }

// console.log(john.calBMI())

// if(mark.calBMI() > john.calBMI()){
//     console.log(`${mark.fullName}'s
//     BMI ${mark.calBMI()} is higher than
//     ${john.fullName}'s ${john.calBMI()}`)
// }else{
// console.log(`${john.fullName}'s BMI ${john.calBMI()}
// is higher than ${mark.fullName}'s BMI ${mark.calBMI()}`)
// }

// loops for loops

// console.log(`wight Lifting repitition 1`);
// console.log(`wight Lifting repitition 2`);
// console.log(`wight Lifting repitition 3`)
// console.log(`wight Lifting repitition 4`);
// console.log(`wight Lifting repitition 5`);
// console.log(`wight Lifting repitition 6`)
// console.log(`wight Lifting repitition 7`);
// console.log(`wight Lifting repitition 7`);
// console.log(`wight Lifting repitition 8`);
// console.log(`wight Lifting repitition 9`);
// console.log(`wight Lifting repitition 10`);
// console.log(`wight Lifting repitition 11`);

// //for loop keeps running as long as the condition is true
// for(let i = 1; i <=12; i++){
//     console.log(`Weights Lifting repitition${i}`)
// }

//looping throught the arrays

// const types =[];
// const freinds = ['charles', 'ecuru', 2022-1992, true, 'programmer',['John', ' william', 'james']];

// for(let i=0; i<=freinds.length-1; i++){
//     if(freinds[i] === String) continue;
//     console.log(freinds[i]);
//     // types.push(typeof(freinds[i]));
//     // console.log(typeof(types[i]))
//     types[i] = typeof freinds[i];
//     console.log(types[i])
// }

// const adults = [];
// const birthYears = [1991, 2007, 2010, 1969, 2020, 1920, 1980];
// function calAges(birthYear){
//     return 2022 - birthYear;
// }

// for(let i=0; i <birthYears.length; i ++){
//     if(birthYears === 'string') break;
//    console.log(calAges(birthYears[i]));
//    adults.push(calAges(birthYears[i]))

// }   console.log(...adults)

// ------------ONLY STRINGS --------

// contnue and break statement
// continue is to stop the execution and jumpt to anther block of code
// break is to completely terminate the  the execution

// -------------------Looping Backwards and looping in array inside another array -------

// creating a loop inside another loop
// for(let i=0; i <=5; i++){
//     console.log(`--------Weight Lifting Exercise Session : ${i}-------`);

//     for(let j =0; j<=10; j++){
//         console.log(`---${j}.Muscle Art Body parts `)

//     }
//     for(let i=0; i <15; i++){
//           console.log(`--${i}: General Body Workouts`)
//       }

// }

// ----------while loop

// for(let i= 0 ; i <10; i ++){
//     console.log(` ${i}.Printing for my day just`)
// }
// let i = 0;
// while(i <= 10){
//     console.log(`${i}: Printing Using the while statement!!`);
//     i++;
// }

// let random = Math.floor(Math.random()*6 + 1)

// let track = 1;
// while(random  === 6){
//     console.log(`This is the number ${random}`);
//     random = Math.floor(Math.random() * 6) + 1;
// }

// --------Coding challenge  ------- last fundamentals part

// creating bills value
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// let tips = [];
// let totals = [];

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// for (let i = 0; i <= bills.length - 1; i++) {
//   tips.push(calcTip(bills[i]));
//   totals[i] = tips[i] + bills[i];
//   // totals.push(totals[i])
// }
// console.log(tips);

// console.log(`Totals ${totals}`);

// const getAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(getAverage([2, 4, 20, 19]));
// console.log(getAverage(totals));
// console.log(getAverage(tips));
// console.log(getAverage(bills));

// console.log('I am now using the liver-sever also as a professional developer!');

// Give an array of temperatures of one day.
// Calculate the temperature Amplitude.
// Keep in mind that sonetimes there might be a snsor erro

// const temperature = [3, -2, -1, 'error', 9, 13, 17, 15, 14, 9, 5, 20, 13];

// Approach
// amplitude is different of hight and low temperatures

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   //   let amplitude = 0;
//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] === 'number') continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];

//     console.log(`Max value = ${max}`);
//     console.log(`Min value = ${min}`);
//     // console.log(`Amplitude is  =  ${max - min}`);
//   }
//   return max - min;
// };

// console.log(calcTempAmplitude([5, 6, 10, 20, 10, 'error', 80]));
// console.log(calcTempAmplitude(temperature));

//--------------function should now receives two arrays of temperature
// do we need to implement two functionalities twic: Ans  no
// breaking up problem into sub problem
// research how to mearch two arrays

// const calcTemNewAmplitude = function (temp1, temp2) {
//   const temp = temp1.concat(temp2);

//   let max = temp[0];
//   let min = temp[0];

//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i] === 'number') continue;
//     if (temp[i] > max) max = temp[i];
//     if (temp[i] < min) min = temp[i];
//   }
//   console.log(max, min);
//   return max - min;
// };

// console.log(
//   calcTemNewAmplitude([2, 3, 49, 30, 21, 152], [32, 32, 12, 12, 10, 100])
// );

// console.log(bteweenTwo);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',
//     value: Number(prompt('Degrees Celicius')),
//   };

//   console.table(measurement);
//   const Kelvin = measurement.value + 273;
//   debugger;
//   return Kelvin;
// };

// console.log(measureKelvin());

// const printForecast = function (arr) {
//   const newArray = [];
//   const sep = arr.Split('...');

//   console.log(sep);
// };

// console.log(printForecast([2, 2, 4, 5, 20]));

// const num = [29, 39, 3, 5, 7, 89];
// console.log('this i can do,', ...num);

// -------------------GUESS THE NUMBER GAME------------------

// Generate Random number betweenn the user chose value
// let chooseRange = Number(prompt('Please Enter the Range '));
// const rangeChoice = document.querySelector('.range-choice');

// const random = Math.floor(Math.random() * 30 + 1);

//select the input value box
// const playerValue =
// select the check button
// const checkButton = document.querySelector('.check');
// //select the again button
// const againButton = document.querySelector('.bat');
// //select the main score area
// const mainScore = document.querySelector('.main-score');
// //select individualscore area
// const singleGuess = document.querySelector('.single-guess');
// //select  score value area
// const score = document.querySelector('.score-value');
// //select highest score for the march
// const highestScore = document.querySelector('.high-score');

// function calAge(birthYear) {
//   const age = 2029 - birthYear;
//   console.log(firstName);
//   return age;
// }

// const firstName = 'Charles';
// calAge(1992);

// /---------------the THIS keyword----------

// console.log(this);
// const calAge = function (birthYear) {
//   console.log(2012 - birthYear);
//   console.log(this);
// };

// calAge(1991);

// const calAge1 = (birthYear) => {
//   console.log(2029 - birthYear);
//   console.log(this);
// };

// calAge1(1992);

// const Charl = {
//   year: 1992,
//   calAge: function () {
//     console.log(2018 - this.year);
//   },
// };

// Charl.calAge();

// const man = {
//     year: 2017,

// }
// //this is the principle of method borrowing
// man.calAge()= Charl.calAge();

// man.calAge();

// const charles = {
//   year: 1992,
//   firstName: ' Charles',
//   calAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// charles.greet();

// let lastName = 'Isaac';
// let oldlasName = lastName;
// lastName = 'Davis';
// console.log(lastName);
// console.log(oldlasName);

// const lastName1 = {
//   firstName: 'Jessica',
//   lastname: 'william',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastname = 'devia';

// console.log(`Before Marriage: ${jessica}`);
// console.log(`After maeeigae: ${marriedJessica}`);

//--------- Section 9 JavaScript Data Structres--------

// breaking complex datascrutures into a very small
// const restaurant = {
//   name: 'classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenae, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', ' Garlic', ' Bread', 'Capress Salad'],
//   mainMenu: ['Pizza', ' Pasta', 'Risotto'],
//   order: function (starter, mainIndex) {
//     return [this.starterMenu[starter], this.mainMenu[mainIndex]];
//   },
// };

// const arr = [2, 4, 6, 8];
// const [a, f, t, u] = arr;

// switching variables  using destructuring
// const [first, , Second] = restaurant.categories;
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// restaurant.order(2, 0);

// const nested = [3, 5, 6, [3, 45, 8]];
// const [x, u, , n] = nested;
// console.log(x, u, n);

// const [a, b, d, [df, f, e]] = nested;
// console.log(a, b, d, f, e, df);

// const restaurant = {
//   name: 'classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenae, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', ' Garlic', ' Bread', 'Capress Salad'],
//   mainMenu: ['Pizza', ' Pasta', 'Risotto'],
//   openingHours: {
//     thur: {
//       open: 12,
//       close: 22,
//     },
//     frid: {
//       open: 12,
//       close: 23,
//     },

//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order: function (starter, mainIndex) {
//     return [this.starterMenu[starter], this.mainMenu[mainIndex]];
//   },

//   orderPasta: function (eng1, eng2, eng3) {
//     console.log(`Here is your decision ${eng1}, ${eng2} and ${eng3}`);
//   },
// };

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);
// const {

//   name: restaurantName,
//   openingHours: Hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, Hours, tags);

// const newMenu = { ...restaurant.categories };
// console.log(newMenu);

// const joint = { restaurant, ...restaurant.location };
// console.log(joint);

// const homeManue = ['cassava', ' beans', ' yams', ' potatoes'];
// const starterManu = ['pilaw', ' cabbages', ' matoke pilaow', 'Gnocci'];

// const Joiing = [...homeManue, ...starterManu];

// console.log(Joiing);

// const joi = [...restaurant.categories, ...restaurant.location];
// console.log(joi);

// const who = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(who);

// // iterbles are arrays, strings, maps and sets and not objects

// const charle = 'charles';
// const lettere = [...charle, '', 's'];

// // console.log(lettere);

// const ingredient = [
//   prompt('Enter Ingredient1'),
//   prompt('Enter INgredient 2'),
//   prompt('Enter Ingredient 3'),
// ];
// // console.log(restaurant.orderPasta());

// console.log(restaurant.orderPasta(...ingredient));

// const add = function (...numbers) {
//   let sum = 0;
//   for (let num = 0; num < numbers.length; num++) sum = sum + numbers[num];

//   return sum;
// };

// add([3, 5, 6]);
// console.log(add(3, 4, 5, 6, 5, 3));
// console.log(add(5, 7, 8, 10, 6));
// console.log(add(90, 4, 6, 8, 4, 3, 2, 1, 3, 5, 33, 45, 66));

// short circuiting retruns a true if the first value is a true

// restaurant.numGuests = undefined;
// const guest = restaurant.numGuests ?? 10;
// console.log(guest);

// console.log(game.players);
// const [player1, player2] = game.players;
// console.log([player1]);
// console.log([player2]);
// console.log(`------Part 2--------`);

// const [gk, ...fieldPlayers] = game.players[0];
// console.log(gk);
// console.log(fieldPlayers);

// console.log(`--------part 3--------`);

// const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);

// console.log(`---------Part 4--------`);

// const players1Final = ['Thiago', ' Countinho', 'Persic', ...game.players[0]];
// console.log(players1Final);

// console.log(`-------Part 5-----------`);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1);
// console.log(draw);
// console.log(team2);

// console.log(`-------Part 6--------`);

// const printGoals = function (...allOfThem) {
//   for (const pl of allOfThem) {
//     console.log(pl);
//   }
// };

// console.log(game.printGoals('Davise', 'Muller', 'Lewandowski', 'Kimmich'));

// -----------FOR ---OF Loop---------

// const restaurant = {
//   name: 'classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenae, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', ' Garlic', ' Bread', 'Capress Salad'],
//   mainMenu: ['Pizza', ' Pasta', 'Risotto'],
//   openingHours: {
//     thur: {
//       open: 12,
//       close: 22,
//     },
//     frid: {
//       open: 12,
//       close: 23,
//     },

//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order: function (starter, mainIndex) {
//     return [this.starterMenu[starter], this.mainMenu[mainIndex]];
//   },

//   orderPasta: function (eng1, eng2, eng3) {
//     console.log(`Here is your decision ${eng1}, ${eng2} and ${eng3}`);
//   },
// };

// const allToday = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(allToday);

// console.log(`--Our Menu Today--`);
// for (const [i, td] of allToday.entries()) {
//   console.log(`${i + 1} : ${td}`);
// }

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neure',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davise',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       ' Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       ' Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: { team1: 1.33, x: 3.25, team2: 6.6 },
// };

// for (const [goal, lep] of game.scored.entries()) {
//   console.log(`${lep} : ${goal + 1} goals`);
// }

// console.log(`-----part 2------`);
// const { team1, x, team2 } = game.odds;
// console.log(`Odd of Victory ${game.team1} : ${team1}
//  Odd of Draw : ${x} ,
//  Odd of Victory ${game.team2}: ${team2}`);
// const aver = (team1 + x + team2) / 3;
// console.log(aver);

// const score = { ...game.scored, ...game.scored };

// console.log(score);

// const select = document.querySelector('select');
// const para = document.querySelector('.point');
// const html = document.querySelector('html');
// select.addEventListener('change', choices);
// function choices() {
//   const mychoice = select.value;
//   if (mychoice === 'once') {
//     para.textContent = `you have choosen one`;
//   } else if (mychoice === 'twice') {
//     para.textContent = 'You have choosen a value of two';
//   } else if (choices === 'thrice') {
//     para.textContent = 'Your chosen value is three';
//   } else if (mychoice === 'fouth') {
//     para.textContent = `Hey you have choosen a four`;
//   } else if (mychoice === 'fifth') {
//     para.textContent = 'You are taking the fifth point';
//   } else if (mychoice === 'color') {
//     backg();
//     // para.textContent = textContent.;
//   }
// }

// function backg() {
//   html.style.backgroundColor = 'black';
//   html.style.fontSize = '34';
// }
// const choicese = select.value;
// switch (choicese) {
//   case 'once':
//     para.textContent = `once selected`;
//     break;
//   case 'twice':
//     para.textContent = `twice is selected`;
//   case 'thrice':
//     para.textContent = `three selected`;

//   case 'fouth':
//     para.textContent = `four selected`;

//   default:
//     break;
// }

// const select = document.querySelector('select');
// const themeP = document.querySelector('theme');

// const theme = select.style.backgroundImage;

// const orderSets = new Set([
//   'pizza',
//   'omusai',
//   'amazi',
//   'obunkenke',
//   'pizza',
//   'Soya beans',
//   'papaya',
//   'pizza',
// ]);
// console.log(orderSets);
// console.log(orderSets.size);
// orderSets.add('mandazi mandazi');

// for (const order of orderSets) {
//   console.log(order);
// }

// ///what the main usecase for a set,
// // its usually to remove a duplicates

// const staff = ['waite', 'cheff', 'waiter', ' manager', 'cheff    ', 'waiter'];
// const staffUnique = new Set(staff);

// console.log(staffUnique);

// --------MAPS Data Struecture in JavSCript -------

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest, set(2, 'Lisbon Portugal');
// console.log(rest);

// const question = new Map([
//   ['Question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['Correct', 3],
//   [true, 'correct  🎉'],
//   [false, 'Try again Later😔'],
// ]);

// console.log(question);
// for (const opti of question) {
//   console.log(opti);
// }

// key===3? question.true : question.false

// const gameEvent = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔄 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔄 Substitution'],
//   [64, '🔸 Yellow Card'],
//   [69, '🔴 Red Card'],
//   [70, '🔄 Substitution'],
//   [72, '🔄 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔸 Yellow Card'],
// ]);

// console.log(gameEvent);
// const events = [...new Set(gameEvent.values())];
// console.log(events);

// gameEvent.delete(64);

// ----------STRINGS-----------
// const airLine = 'Uganda Air Ways';
// const plane = 'A320';

// console.log(plane[0])
// console.log(plane[1])
// console.log(plane[2])

// fixing the capitalization on a apassangers name  using strings /
// this is one of the fields that has really been giving me lots of headach

// const fl = 'cHArLeS EcuRU';
// //change everything to lowecase
// const lowe = fl.toLowerCase();
// // select the first lettr
// const firs = lowe[0].toUpperCase();
// //join  the whole two letters
// const correct = firs + lowe.slice(1);

// console.log(correct);

// const changeFirstToUpper = function (sente) {
//   const now = sente.toLowerCase();
//   const fin = now[0].toUpperCase() + now.slice(1);
//   return fin;
// };

// console.log(changeFirstToUpper('naTural georGrhIcs'));

// //comaring emails
// const email = 'hello#charles.io';

// const reap =
//   'fence was close and charles wants to enter fence the airport throught the fence 30';
// const replac = reap.replaceAll('fence', 'Gate');
// console.log(replac);

// const capitali = function (name) {
//   const arr = name.split(' ');
//   const arrayse = [];

//   for (const nam of arr) {
//     const firstName = nam[0].toUpperCase() + nam.slice(1);
//     arrayse.push(firstName);
//   }
//   return arrayse.join(' ');
// };

// console.log(capitali('achepo lea ecuru charles okello charles epolu patrick'));

//function that replaces the first letter of the word

// const caps = function (word) {
//   const tol = word.toLowerCase();
//   return tol[0].toLowerCase() + tol.slice(1);
// };
// //function that takes any number formate and replace the first letter

// const capit = function (names) {
//   const everyName = names.split(' ');
//   const wholeArr = [];

//   for (const indiv of everyName) {
//     const trans = indiv[0].toUpperCase() + indiv.slice(1);
//   }
//   return wholeArr.push(trans.join(' '));
// };

// const paddingCreditCard = function (number) {
//   const str = number + '';
//   const fin = str.padStart(28, '****');
//   return fin;
// };

// console.log(paddingCreditCard(12378672257536746));

// const challe = function(varName){
//     const separate = varName.split( '_').toLoweCase();

//     for(const tw of separate){
//         tw[1].toUppercase() + tw.add
//     }
// }

// default parameters in functions
// const bookingArr = [];

// const createBooking = function (flightNum, numPassager = -1, ...price) {
//   const booking = {
//     flightNum,
//     numPassager,
//     price,
//   };
//   bookingArr.push(booking);
//   console.log(booking);
// };

// createBooking();
// createBooking('B321H');
// createBooking(
//   'B33h',
//   393,
//   343,
//   42,
//   'charles',
//   'ecuru',
//   'math',
//   'Carry-Ons',
//   'Extra Luagge'
// );

// const flight = 'Lh2333';
// const charle = {
//   fullName: 'Charles Ecuru',
//   passPort: 'B134298',
//   destination: 'Seattle WA',
//   Sponsor: 'Microsft',
// };

// const checkIn = function (flight, fName, pNumber, dest, spon) {
//   fName.fullName = `Mr + ${fName.fullName}`;
//   if (fName.passPort === pNumber) {
//     alert('Checked In');
//   } else {
//     alert('Wrong Passpord');
//   }
// };

// checkIn(flight, charle);

// const oneWord = function (str) {
//   return str.replaceAll('', ' ').toLowerCase();
// };

// console.log(
//   oneWord('This is the time to practice something better and different')
// );

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greets = (greetings) => (name) => console.log(`${greetings} ${name}`);
// greet('Hello')('Charles ecuru say');

// the call and apply methods
// const lyfthansa = {
//   airline: 'lufthansa',
//   iataCode: 'LH',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.booking.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// lyfthansa.plane = 300;
// lyfthansa.buyPlane= function(){
//     this.plane++;
//     console.log(this.plane)
// }
// lyfthansa.book(378, 'ecuru charles');

// const eurowings = {
//   airline: 'EuroWings',
//   iataCode: 'EW',
//   bookings: [],
// };

// eurowings.book(362, 'Charles Ecuru Kawenge');
// const buuks = lyfthansa.book;
// const bookEw = buuks.bind(eurowings);

// console.log(bookEw);

// const useBind = lyfthansa.book;
// const eWEuro = useBind.bind(eurowings);
// eWEuro(2773, 'Achepo Lea');

// const addTax = function (rate, value) {
//   return rate * value + value;
// };

// const addT = function (rate, value) {
//   return function (vat) {
//     console.log(vat + rate * value + value);
//   };
// };

// // console.log(addTax(0.1, 2000));
// addT(0.1, 200)(100);

// const poll = {
//   question: 'What is your favourite Programming Language?',
//   options: ['0 :JavaScript', '1 :Python', '2 :Rust', '3 :C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n('Write option number')`
//       )
//     );
//     //register the answer
//     // this.answers.push(this.answer);
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     console.log(this.answers);
//     return answer;
//   },
// };

// poll.registerNewAnswer();

// const updateArr = poll.answer;

// run once function
// const runOnce = function () {
//   console.log(`this will never run again!`);
// };

// runOnce();

// (function () {
//   console.log(`This is exaclty the once which will never run again!!!`);
// })();

// (() => console.log(`This is an arrow function that will never run again!!!`))();

// const secureBooking = function () {
//   let passangerCount = 0;

//   return function () {
//     passangerCount++;
//     console.log(`${passangerCount} passangers `);
//   };
// };

// const booker = secureBooking();

// // console.log(booker());
// booker();

// function multiplication() {
//   for (let i = 1; i < 15; i++) {
//     let result = `${i} X ${i} = ${i * i} \n`;
//     console.log((result += result));
//   }
//   console.log(`........Finished and completed`);
// }
// multiplication();

// let myFavourite = 'My Favourites cats are ';

// // for (const cat of cats) {
// //   myFavourite = ` ${myFavourite} ${cat},`;
// // }
// // console.log(myFavourite);

// for (let i = 0; i < cats.length; i++) {
//   if (i === cats.length - 1) {
//     myFavourite = `${myFavourite} ${cats[i]}.`;
//   } else myFavourite = `${myFavourite} ${cats[i]},`;
// }

// console.log(myFavourite);
// const cats = ['Leopard', 'Lion', 'Serval', 'Jaguar', 'Tiger', 'Caracal'];

// const input = document.querySelector('input');
// const buttn = document.querySelector('buton');
// const para = document.querySelector('p');

// buttn.addEventListener('click', function () {
//   const val = input.value.toLowerCase();
//   input.value = ' ';
//   input.focus();
//   for (const cat of cats) {
//     if (val === cat) {
//       para.textContent = val;
//     } else {
//       para.textContent = 'We can not find your search term';
//     }
//   }
// });

// const cats = ['Leopard', 'Lion', 'Serval', 'Jaguar', 'Tiger', 'Caracal'];

// let myFavourite = 'My best are';

// let i = 0;

// while (i < cats.length) {
//   if (cats[i] === cats.length - 1) {
//     myFavourite = `${myFavourite} ${cats[i]}.`;
//     // console.log(myFavourite);
//   } else {
//     myFavourite = `${myFavourite} ${cats},`;
//   }
//   i++;
// }
// console.log(myFavourite);

// const TextArr = document.open('name');

// TextArr.addEventListener('keydown', function (e) {
//   console.log(`You pressed the ${e.keys}`);
// });

// const nums = [2, 4, 6, 7, 8, 10];

// const doub = nums.map((item) => item * 2);
// console.log(doub);

// const input = document.querySelector('#my-text');
// const para = document.querySelector('#live');

// input.addEventListener('keydown', (evet) =>
//   para.textContent = `You have pressed ${evet.key}`;
// );

// const html = document.querySelector('html');
// const attrib = document.createAttribute('classs', 'msgBox');
// const myDivEle = document.createElement('div');
// html.appendChild(myDivEle);

// const mypa = document.createElement('p');
// mypa.textContent = 'This is my Messege Box';
// html.appendChild(mypa);

//-------ARAY METHODS---------
// --SLICE
// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(-1));

// splice method works the same way but mutates the orignial array

// --SPLICE
// console.log(arr.splice(2));
// mostly for deleting the last elemet of the Array
// arr.splice(-1);

// console.log(arr);
// arr.splice(-2);
// console.log(arr);
// console.log(arr.splice(-1));

// --REVERSE--

// also does mutates the original array

// arr.reverse();
// console.log(arr);

// --CONCATE-
// concat also does not mutate the original array
// you can also use the spread operator to achieve the same

// const arr2 = ['e', 'r', 's', 't', 'g', 'd'];
// console.log(arr.concat(arr2));

// ---JOIN
// const letter = [...arr, ...arr2].join(' ');
// console.log(letter);

// const account1 = {
//   owner: 'Charles ecuru',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, //%
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// for (let move of movements) {
//   if (move <= 0) {
//     console.log(`User has withdrawn ${Math.abs(move)}`);
//   } else {
//     console.log(`User has Deposited ${move}`);
//   }
// }

// // Using forEach method--

// console.log('-------FOREACH---------');
// movements.forEach(function (move) {
//   if (move < 0) {
//     console.log(`You have Withdrawn ${Math.abs(move)}`);
//   } else {
//     if (move > 0) console.log(`You have deposited ${move}`);
//   }
// });

// movements.forEach((movement) => {
//   if (movement > 0) {
//     console.log(`You have deposited`);
//   } else {
//     console.log(`You have withdrawn`);
//   }
// });

// for (const [i, move] of movements.entries()) {
//   if (move > 0) {
//     console.log(`${i + 1}: Deposit ${move}`);
//   } else {
//     console.log(`${i + 1}: Withdraw ${Math.abs(move)}`);
//   }
// }

// console.log(`------------Short Hand---------`);
// movements.forEach( (move, ind, arr) =>{
//   console.log(
//     move > 0
//       ? `${ind + 1} : Deposited ${move} `
//       : `${ind + 1} : Withdraw ${Math.abs(move)}`
//   );

//   //   console.log(arr);
// });

// const movements = [200, 450, -400, 3000, -650, 130, 70, 1300];

// const currencies = new Map([
//   ['USD', 'United States Dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound Sterling'],
//   ['UGX', 'Uganda Shillings'],
//   ['KSH', 'Kenyan Shillings'],
// ]);

// currencies.forEach((elem, key, curren) => {
//   console.log(`Position ${key}: ${elem}    `);
// });

// function createDogs(dogsJulie, dogsKate) {
//   const juliesNew = dogsJulie.splice(0).splice(-2);
//   const corrected = [...juliesNew, ...dogsKate];

//   corrected.forEach(function (dog, indeex) {
//     const sex = dog >= 3 ? `Adult` : `puppy`;
//     // console.log(`Dog number ${indeex + 1} is ${sex==='Adult'? "An" ${sex}, 'and is' ${dog} + 'years old'   `:'A' ${sex} and is still a ${sex}}` );
//   });
// }

// const disMove = function(mve){
//     mve.Map(function(inde, val,){
//         console.log()
//     })
// }

// createDogs([3,5,2,12,7], [4, 1,15,8,3])

// const eurToUsd = 1.1;

// const converter = function (val) {
//   val.Map((cb, inde) => console.log(cb * 1.1));
// };

// converter(movements);
// for (const mov of movements) {
//   return mov * 1.1;
// }

// movements.forEach((mov, inedex) => mov * 1.1);

// const user = 'Steven Thomas Williams';

// const initials = function (names) {
//   const change = names.tolowcase().split(' ');
//   change.Map((re) => re[0].join(''));
// };

// initials(account1.user);

// ////////practice
// const maxc = movements.reduce(function (accu, val, inde, arr) {
//   if (accu > val) {
//     return accu;
//   } else return val;
// }, movements[0]);

// console.log(maxc);

// ////coding challenge
// function calcAverageHumanAge(dAge) {
//   let human = 0;
//   if (dAge <= 2) human = 2 * dAge;
//   // return human;
//   else if (dAge > 2 && dAge !== 18) human = 16 + dAge * 4;
//   // return human;

//   return dAge > 2 / dAge.length;
// }

// console.log(calcAverageHumanAge([16, 5, 10, 5, 6, 1, 4]));

// [[[[
//     [[
//     [[[[[
//         [
//         [[
//            -------------FOOTER AREA---------------
//         ]]
//         ]
//     ]]]]]
//     ]]
// ]]]]

// const initialCoords = sectionOne.getBoundingClientRect();
// window.addEventListener('scroll', function (e) {
//   //   console.log(e);
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });
// ---------------------SOME COOKIE--------------

// const divCreate = document.createElement('div');
// const head = document.querySelector('header');
// divCreate.classList.add('cookie-message');
// divCreate.innerHTML = `We use cookie to improve the functionality
// and analytics of this page!!, please accept cookies. <button class="btn-close-cookie">Got it!!</button>`;

// head.prepend(divCreate);
// document
//   .querySelector('.btn-close-cookie')
//   .addEventListener('click', function () {
//     divCreate.remove();
//   });
// ]]]]]]]]]]

// creting and inserting ElementInternals
// ]]]]]]]]
// ]]]]]
// ]]]]]

///DOM traversing expmained

// --------------------------------------------------------------------object oriented programming 0------------------------------------
// Abtraction - ignoring details that dont matter to our implementaton eg behind smart phone and smart phone
// Encapsulation - keeping properties and methods private  inside the class so they are not accessible outside
// inheritance - this is making all methods and properties of a class available to the child class forming a hierarchial relationship between the classes which allows resuing he code
//Polymorphism - A child class can override a method it inherited from the parent class

// const Person = function (firsName, birthYear) {
//   this.firsName = firsName;
//   this.birthYear = birthYear;
// };

// const Charles = new Person('Ecuru', 1992);
// with new keyword
// 1. new {} empty object is creaed
// 2. function is called, this={}
// 3. {} is linked to a prototype
// 4. function automatically retunn {}

// const Gloria = new Person('Asiimwe', 1996);

// console.log(Charles);
// console.log(Gloria);

// prototypes and prototypical inheritance
// Person.prototype.calcAge = function () {
//   return 1992 - this.birthYear;
// };

// const arr = [33,3,44,5,6,7,73,2,5]

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.break = function () {
//   const speed = `${this.make} is moving ${(this.speed -= 5)}km/h`;
//   console.log(speed);
// };
// Car.prototype.accelerate = function () {
//   const speed = `${this.make} is going at ${(this.speed += 10)} km/h`;
//   console.log(speed);
// };
// const mercedes = new Car('Mercedes', 120);
// const Bmw = new Car('BMW', 95);
// console.log(Car);
// console.log(mercedes.accelerate);
// console.log(Bmw);

// Bmw.accelerate();
// Bmw.accelerate();
// Bmw.break();
// Bmw.accelerate();

// class PersonCl {
//   constructor(firstName, birthYea) {
//     this.firstName = firstName;
//     this.birthYea = birthYea;
//   }
//   callAge() {
//     console.log(2022 - this.birthYea);
//   }
// }

// const Charles = new PersonCl('ecuru', 1992);
// console.log(Charles);

// const account = {
//   Owner: 'Charles',
//   movements: [300, 600, 243, 900, 690, 800],

//   get latest() {
//     return this.movements.pop(this.movements.length - 1);
//   },
//   set last(move) {
//     return this.movements.push(move);
//   },

//   Static manup() {
//     console.log('this is the morning !');
//     //   console.log(this)
//   },
// };

// console.log(account.latest);
// console.log((account.last = 9000), account.movements);
// account.charil();

// class Cars {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     const current = Number(prompt('Enter speed!'));
//     speed = current * 1.6;
//     console.log(`Speed is US is ${speed} KM/H`);
//   }

//   acelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   break() {
//     this.speed -= 5;
//     console.log(`${this.make} is breaking at ${this.speed}km/h`);
//   }
// }

// const ford = new Cars('Ford', 255);
// ford.acelerate();
// ford.acelerate();
// ford.acelerate();
// ford.acelerate();
// ford.break();
// ford.break();
// ford.break();
// ford.break();
// ford.break();
// ford.break();
// ford.break();
// ford.break();
// ford.break();
// ford.break();
// ford.break();
// ford.break();
// ford.break();
// ford.break();
// ford.break();
// ford.speedUS;

// const Person = function (firsName, birthYea) {
//   this.firsName = firsName;
//   this.birthYea = birthYea;
// };

// const Student = function () {
//   console.log();
// };

// const Sudent = function (firsName, birthYea, course) {
//   Person.call(this, firsName, birthYea);
//   this.course = course;
// };

// const mike = new Student('Mike', '21992', 'Computer Science');

// console.log(mike);

// class Account {
//   #movement = [];
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     // this.moveme = [];
//   }
// }

// const charles = new Account('charles', 'Shs', 1111);
// console.log(charles);
// const acc1 = new Account('charles', 'EUR', 1111);

// console.log(acc1.#movement);
