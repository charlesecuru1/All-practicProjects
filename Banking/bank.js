'use strict';

const account1 = {
  owner: 'Charles ecuru',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, //%
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-11-23T07-42:02.383Z',
    '2020:05:27T17-51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-11-23T07-42:02.383Z',
    '2020:05:27T17-51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-11-23T07-42:02.383Z',
    '2020:05:27T17-51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-11-23T07-42:02.383Z',
    '2020:05:27T17-51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, 130, 70, 1300];

const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
  ['UGX', 'Uganda Shillings'],
  ['KSH', 'Kenyan Shillings'],
]);

const containerMovements = document.querySelector('.main-ui');
const labelBalance = document.querySelector('.current-amount');
const labelDisplayInflow = document.querySelector('.inflows');
const labelDisplayOutflows = document.querySelector('.outflows');
const labelDisplayInterest = document.querySelector('.interest');
const loginUserInput = document.querySelector('.login__input--user');
const loginUserPin = document.querySelector('.login__input--pin');
const btnLoginUser = document.querySelector('.login__btn');
const labelGreetings = document.querySelector('.greetings');
const transferToAccount = document.getElementById('transefer-to-input');
const transferAmount = document.getElementById('transfer-amount');
const transferButton = document.getElementById('transfer-arrow');

const closeAccountUser = document.getElementById('close-user-confirm');
const closeAccountPassword = document.getElementById('close-password-confirm');
const buttonCloseAccount = document.querySelector('.close-account');

const requestLoanInput = document.getElementById('request-loan');
const buttonRequestLoan = document.querySelector('.btn-request-loan');
const sorting = document.querySelector('.sirt');
const labelDate = document.querySelector('.date-display');
const labelLogoutTimer = document.querySelector('.logout-timer');

///Displaying movements function
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  //performing the sorting value
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  //continue part for display
  movs.forEach(function (val, ind) {
    const type = val > 0 ? `Deposit` : `Withdrawal`;

    //get the dates as you look throught eac element

    const now = new Date();
    // const day = `${daten.getDate()}`.padStart(2, 0);
    // const month = `${daten.getMonth() + 1}`.padStart(2, 0);
    // const year = daten.getFullYear();
    // const hour = `${daten.getHours()}`.padStart(2, 0);
    // const min = daten.getMinutes();
    // const displayDate = `${day}/${month}/${year}`;

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      //   month: 'long',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
      //   weekday: 'numeric',
    };
    const locale = navigator.language; //gets the date from browser
    //
    //
    //get the date internalization date formate for the date
    //
    const displayDate = new Intl.DateTimeFormat(locale, options).format(now);

    //
    //
    //
    //
    //
    const html = `
    <div class="movement-row">
       <div class="movement-type--${type}">${ind + 1}-${type}</div> 
       <div class="movement__date"> ${displayDate}</div>
       <div class = "movement-value">${Math.abs(val).toFixed(2)} €</div> 
       </div>
       <div><hr /></div>  
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//

//
///function for formating the currencies
const formatCurr = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    stye: 'currency',
    currency: accounts.currency,
  }).format(value);
};
//
//

//calculating the overall  account balance

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((accum, current) => (accum += current), 0);
  //   acc.balance = balance;
  //   labelBalance.textContent = `${acc.balance.toFixed(2)} €`;
  labelBalance.textContent = formatCurr(acc.balance, acc.locale, acc.currency);
};

//calculating the incoming balances

const calcDisplaySummary = function (accc) {
  const incomes = accc.movements
    .filter((mov) => mov > 0)
    .reduce((accu, move) => accu + move, 0);
  labelDisplayInflow.textContent = `${incomes.toFixed(2)} €`;

  ///calculating outgoing balances

  const outflows = accc.movements
    .filter((move) => move < 0)
    .reduce((acc, mo) => acc + mo, 0);
  labelDisplayOutflows.textContent = `${Math.abs(outflows).toFixed(2)} €`;

  //calculating and displaying interest
  const interest = accc.movements
    .filter((move) => move > 0)
    .map((deposit) => (deposit * accc.interestRate) / 100)
    .reduce((acc, intre) => acc + intre, 0);
  labelDisplayInterest.textContent = `${interest.toFixed(2)} €`;
};

// calcDispOutSummary(account1.movements);
//creating username for the user

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((nam) => nam[0])
      .join('');
  });
};
createUserNames(accounts);

//implementing updating the UI function
const updateUi = function (acc) {
  displayMovements(acc);

  //display balance
  calcDisplayBalance(acc);
  //display summary
  calcDisplaySummary(acc);
};

///function to login the application user//
//
///
////
//
//
//
//
//
//start logout timer
const startLogoutTimer = function () {
  //set time to 10 minutes
  let time = 600;
  const tick = function () {
    //getting the time in minutes
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // in each call, printhe remaining time on ui
    labelLogoutTimer.textContent = `${min}: ${sec}`;

    //when timer is 0 sec, logout the user
    if (time === 0) {
      clearInterval(timer);
      document.querySelector('.app').style.opacity = 0;
      labelGreetings.textContent = `Login to access account!!`;
    }
    //decrease by 1second

    time--;
  };

  //call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
//
///
///
//
//
//

let currentAccount, timer;
btnLoginUser.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === loginUserInput.value
  );
  //   console.log(currentAccount);
  if (currentAccount?.pin === +loginUserPin.value) {
    //if logged in, display message
    labelGreetings.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    //display movements
    document.querySelector('.app').style.opacity = '100';
    //clear the input fields
    loginUserPin.value = loginUserInput.value = '';
    //removes the focus from the input fields
    loginUserPin.blur();

    //function that updates the UI for every transaction
    updateUi(currentAccount);
    // console.log(`LOGGED IN`);

    //check if there is already timer, clear then start from 10
    if (timer) clearInterval(timer);
    //
    //
    //if no timer running start fresh timer
    timer = startLogoutTimer();
  } else {
    document.querySelector('.logo').textContent = `Wrong User details`;
    document.querySelector('.logo').style.color = 'red';
    document.querySelector('.logo').style.fontSize = '50px';
  }
});

// making transfers
transferButton.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +transferAmount.value;
  const reveiverAccount = accounts.find(
    (acc) => acc.username === transferToAccount.value
  );

  //   console.log(amount, reveiverAccount);

  if (
    //validating the transer
    amount > 0 &&
    currentAccount &&
    currentAccount.balance >= amount &&
    reveiverAccount?.username !== currentAccount?.username
  ) {
    //this is now doing the actuall transfer
    currentAccount.movements.push(-amount);
    reveiverAccount.movements.push(amount);

    //transfer dates for both thecurrent account and receiver
    currentAccount.movementsDates.push(new Date().toISOString());
    reveiverAccount.movementsDates.push(new Date().toISOString());

    //Update the Ui
    updateUi(currentAccount);

    //restart timer interval to avoid automatic logout
    clearInterval(timer);
    //start a new timer
    timer = startLogoutTimer();

    //
    //
    console.log('Transer valid');
  } else {
    console.log(`this is not a valid transfer!`);
  }
  transferAmount.value = transferToAccount.value = '';
});
///
//

//
//

//function for requesting a loan
buttonRequestLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const lamount = +requestLoanInput.value;
  if (
    lamount > 0 &&
    currentAccount.movements.some((move) => move > lamount * 0.1)
  ) {
    setTimeout(function () {
      //add a positive movement to the current account
      currentAccount.movements.push(lamount);

      //loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      //   update the UI
      updateUi(currentAccount);
      requestLoanInput.value = '';

      //clear the timer to avoid logout
      clearInterval(timer);
      // restart the timer again
      timer = startLogoutTimer();
    }, 5000);
  } else {
    document.querySelector('.logo').textContent =
      'You dont have enough value to loan';
  }
});

//function to delete/close the account
buttonCloseAccount.addEventListener('click', function (e) {
  e.preventDefault();

  //check if the username exists
  if (
    closeAccountUser.value === currentAccount.username &&
    +closeAccountPassword.value === currentAccount.pin
  ) {
    //check if the username exists and its index in the accounts array
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    //Delete the account
    accounts.splice(index, 1);

    //hide the UI (log out the user)
    document.querySelector('.app').style.opacity = 0;
    //
    closeAccountUser.value = closeAccountPassword.value = '';
  }
});

//displaying dates on the current balance
const daten = new Date();
// const day = `${daten.getDate()}`.padStart(2, 0);
// const month = `${daten.getMonth() + 1}`.padStart(2, 0);
// const year = daten.getFullYear();
// const hour = `${daten.getHours()}`.padStart(2, 0);
// const min = daten.getMinutes();
// const displayDate = `As of: ${day}/${month}/${year}, ${hour}:${min}`;

const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  // month: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};

const locale = navigator.language;

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(daten);
//implementing the sort functionality

//monitore state for sorting
let sorted = false;
sorting.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
//using flat, flatMap, and calculating the overall balance for the entire accounts group
// const account = accounts.map((move) => move.movements);
// const overA = account.flat();
// const balan = overA.reduce((acc, valu) => (acc += valu));
// console.log(balan);

// const owvwer = [
//   'charles',
//   'ecuru',
//   'zamili',
//   'vicky',
//   'martha',
//   'grace',
//   'stephen',
// ];
// console.log(owvwer.sort());
// console.log(movements.sort());

//creating an array progammatically

// const dices = Array.from({ length: 100 }, (op, i) => i + 1);
// console.log(dices);

//TEST DATA
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owner: ['Matilda', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Micheal'] },
// ];

// const mod = dogs.forEach(function (ele) {
//   const recommendedFood = ele.weight ** 0.75 * 28;
//   dogs.push(recommendedFood);
//   console.log(Math.floor(recommendedFood));
// });

// const own = dogs.forEach(function (oner) {
//   console.log(oner.owners.flat());
// });

// const isEven = function (num1) {
//   if (num1 % 2 === 0) {
//     return 'even number';
//   } else if (num1 % 2 === 1) {
//     return 'this is odd number';
//   }
// };

// const num = 3894724922.272783;
// console.log('us:', new Intl.NumberFormat('en-US').format(num));

// setInterval(function () {
//   const now = new Date();
//   const hour = now.getHours();
//   const minute = now.getMinutes();
//   const sec = now.getSeconds();
//   console.log(`${hour}: ${minute}: ${sec}`);
// }, 2000);
