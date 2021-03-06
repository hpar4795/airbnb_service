const {Booking} = require('./bookingSchema.js');
const {Listing} = require('./bookingSchema.js')
const {Price} = require('./bookingSchema.js')
const moment = require('moment');
const db = require('./db.js')

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var Data = [];

for(var i = 1; i < 101; i++) {
  var obj = {};
  obj.id = i;
  obj.views = getRandomInt(100, 500);
  obj.rating = getRandomArbitrary(1, 5);
  obj.maxGuests = getRandomInt(1, 10);
  obj.price = getRandomInt(30, 300);
  obj.numbOfRatings = getRandomInt(20, 200);
  obj.cleaningFee = getRandomInt(10, 40);
  obj.serviceFee = getRandomInt(10, 30);
  Data.push(obj)
}


Listing.insertMany(Data)
.then((docs) => {
  console.log("successfully inserted listing")
 
})
.catch((err) => {
  console.error(err)
})

