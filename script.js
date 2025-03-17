const makeChange = (c) => {
  // your name here
	let change = { q: 0, d: 0, n: 0, p: 0 };

    change.q = Math.floor(c / 25); // Get number of quarters
    c %= 25; // Remaining amount

    change.d = Math.floor(c / 10); // Get number of dimes
    c %= 10; // Remaining amount

    change.n = Math.floor(c / 5); // Get number of nickels
    c %= 5; // Remaining amount

    change.p = c; // Remaining amount is all pennies

    return change;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
