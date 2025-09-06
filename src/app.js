function planeProblem(passengers, range) {
  /**
   * There are 100 passengers.
   * The first passenger sits in a random seat.
   * The second passenger: if their own seat is empty, they sit there;
   * otherwise, they choose a random empty seat.
   * The same rule applies for all the other passengers as well.
   */

  let success = 0;
  for (let i = 0; i < range; i++) {
    let seats = Array(passengers).fill(true);
    seats[Math.floor(Math.random() * passengers)] = false; // The first passenger sat in a random seat
    for (let p = 1; p < passengers - 1; p++) {
      if (seats[p]) {
        // If the seat is empty, sit there
        seats[p] = false;
      } else {
        // If the seat is occupied, choose a random empty seat
        let emptySeats = seats
          .map((seat, index) => (seat ? index : null))
          .filter((k) => k !== null);
        let randomIndex =
          emptySeats[Math.floor(Math.random() * emptySeats.length)];
        seats[randomIndex] = false;
      }
    }
    if (seats[passengers - 1] === true) success++; // Did the last passenger sit in their own seat?
  }
  console.log("success", success); // number of times the last passenger got their own seat
  let rate = (success / range) * 100;
  console.log("success rate", rate); // percentage of trials where the last passenger got their own seat
}
planeProblem(100, 10000);
