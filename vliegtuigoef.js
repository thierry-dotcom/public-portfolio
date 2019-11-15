const dayInMilliSeconds = 24 * 60 * 60 * 1000;
let startingPrice = 1000;
const firstDiscount = 0.01;
const secondDiscount = 0.1;
let openSeats = 10;
let soldTickets = 0;
let reducedStartingPrice = 0;
let outputSeatsBox = document.getElementById('output-seats');
outputSeatsBox.value = openSeats;

function calculateDaysBetweenPurchaseAndFlight() {
  var today = new Date();
  var inputDate = new Date(document.getElementById("input-vertrek").value);
  var differenceInDays = Math.ceil((inputDate - today) / dayInMilliSeconds);
  return differenceInDays;
}

function calculatePrice() {
  let diffDays = calculateDaysBetweenPurchaseAndFlight();
  let ticketPrice = 0;
  let priceAfterFirstDiscount = startingPrice - (startingPrice * firstDiscount * diffDays);

  if (openSeats > 2) {
    ticketPrice = priceAfterFirstDiscount - (priceAfterFirstDiscount * secondDiscount * soldTickets);
  } else if (openSeats >= 1) {
    console.log('correct if')
    ticketPrice = priceAfterFirstDiscount - (priceAfterFirstDiscount * secondDiscount * soldTickets);
    ticketPrice = ticketPrice * 2;
  } else {
    alert('Sorry all tickets are sold out!')
  }

  if (ticketPrice < 100) {
    ticketPrice = 100;
  }
  console.log(ticketPrice);
  var finalPrice = document.getElementById('final-price');
  console.log(finalPrice);
  finalPrice.value = ticketPrice;

  // document.getElementById('final-price').value = ticketPrice;
}

function bookTicket() {
  if (openSeats >= 1) {
    alert('Thank you for your purchase!')
    openSeats = openSeats - 1;
    soldTickets = soldTickets + 1;
    outputSeatsBox.value = openSeats;
    document.getElementById('final-price').value = "";
    console.log(document.getElementById('final-price'));
  } else {
    alert('Sorry, all tickets are sold out');
    outputSeatsBox.value = 0;
  }
}