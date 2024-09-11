// Passwords defined as constants
const passwordLength1 = "c";
const passwordLength2 = "g2";
const passwordLength3 = "fh";
const passwordLength4 = "jb3";
const passwordLength5 = "A4";
const passwordLength6 = "Bc5";
const passwordLength7 = "Az1Bb2Cc3Dd4";

let numberOfguesses = 0;
const wait = 100000000;
let factor = 0;
const guessingGame = (password, passwordType) => {
  switch (passwordType) {
    case 1:
      return password === passwordLength1;
    case 2:
      return password === passwordLength2;
    case 3:
      return password === passwordLength3;
    case 4:
      return password === passwordLength4;
    case 5:
      return password === passwordLength5;
    case 6:
      return password === passwordLength6;
    case 7:
      return password === passwordLength7;
    default:
      return false;
  }
};

// Function to handle the guess submission
const submitGuess = () => {
  console.time("1");
  // for(let i = 0; i <wait * factor ; i++){}
  // if(factor > 10) {throw Error}
  // factor++;
  const passwordType = parseInt(document.getElementById("passwordType").value);
  const passwordInput = document.getElementById("passwordInput").value;
  const result = guessingGame(passwordInput, passwordType);
  numberOfguesses++;
  document.getElementById("result").innerHTML = result
    ? `<b>${passwordInput}</b> is Correct!👏🏻 You have guessed <b> ${numberOfguesses} </b>  times.`
    : `<b>${passwordInput}</b> is Incorrect!❌ You have guessed <b> ${numberOfguesses} </b>  times.`;
  console.timeEnd("1");
};
document.getElementById("guess").addEventListener("click", submitGuess);
