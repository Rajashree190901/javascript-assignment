const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const movies = document.querySelectorAll(".movie");
const seatsList = document.querySelectorAll(".row .seat");

movieSelect.addEventListener('change', (e) => {
  const movieSelect1 = document.getElementById('movie').value;
 
  if(movieSelect1==="320")
  {
    var element = document.getElementById("5"); 
    element.className = "seat sold"; 
    var element = document.getElementById("8"); 
    element.className = "seat sold";
    var element = document.getElementById("10"); 
    element.className = "seat sold";
    var element = document.getElementById("17"); 
    element.className = "seat sold";
    var element = document.getElementById("25"); 
    element.className = "seat sold";
    var element = document.getElementById("26"); 
    element.className = "seat sold";
    var element = document.getElementById("27"); 
    element.className = "seat sold";
    var element = document.getElementById("31"); 
    element.className = "seat sold";
    var element = document.getElementById("32"); 
    element.className = "seat sold";
    var element = document.getElementById("33"); 
    element.className = "seat sold";
    var element = document.getElementById("34"); 
    element.className = "seat sold";
    var element = document.getElementById("35"); 
    element.className = "seat sold";
    var element = document.getElementById("36"); 
    element.className = "seat sold";
    
  }

  else if (movieSelect1==="220")
    {
      var element = document.getElementById("5"); 
      element.className = "seat"; 
      var element = document.getElementById("48"); 
      element.className = "seat";
      var element = document.getElementById("10"); 
      element.className = "seat";
      var element = document.getElementById("17"); 
      element.className = "seat";
      var element = document.getElementById("20"); 
      element.className = "seat";
      var element = document.getElementById("26"); 
      element.className = "seat";
      var element = document.getElementById("27"); 
      element.className = "seat";
      var element = document.getElementById("1"); 
      element.className = "seat";
      var element = document.getElementById("32"); 
      element.className = "seat";
      var element = document.getElementById("39"); 
      element.className = "seat";
      var element = document.getElementById("34"); 
      element.className = "seat";
 
     
    }

    else if(movieSelect1==='250')
    {
      var element = document.getElementById("5"); 
      element.className = "seat sold"; 
      var element = document.getElementById("8"); 
      element.className = "seat sold";
      var element = document.getElementById("10"); 
      element.className = "seat sold";
      var element = document.getElementById("17"); 
      element.className = "seat sold";
      var element = document.getElementById("25"); 
      element.className = "seat sold";
      var element = document.getElementById("40"); 
      element.className = "seat sold";
      var element = document.getElementById("41"); 
      element.className = "seat sold";
      var element = document.getElementById("42"); 
      element.className = "seat sold";
      var element = document.getElementById("32"); 
      element.className = "seat sold";
      var element = document.getElementById("1"); 
      element.className = "seat sold";
      var element = document.getElementById("2"); 
      element.className = "seat sold";
      var element = document.getElementById("3"); 
      element.className = "seat sold";
      
    }
    else if(movieSelect1==='260')
    {
      element.className = "seat";
      var element = document.getElementById("17"); 
      element.className = "seat";
      var element = document.getElementById("25"); 
      element.className = "seat";
      var element = document.getElementById("26"); 
      element.className = "seat";
      var element = document.getElementById("27"); 
      element.className = "seat";
      var element = document.getElementById("12"); 
      element.className = "seat";
      var element = document.getElementById("13"); 
      element.className = "seat";
      var element = document.getElementById("7"); 
      element.className = "seat";
      var element = document.getElementById("48"); 
      element.className = "seat";
      var element = document.getElementById("22"); 
      element.className = "seat";
      var element = document.getElementById("24"); 
      element.className = "seat";
    }


  });






populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  setMovieData(movieSelect.selectedIndex, movieSelect.value);
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seatsList.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();

 
// Set the show times
const showTimes = ["10:30:00", "14:30:00", "18:30:00","23:30:00"];

// Get the current time
const now = new Date();

// Find the index of the next show
const nextShowIndex = showTimes.findIndex((time) => {
  const showTime = new Date(now.toDateString() + " " + time);
  return showTime > now;
});

// If there are no more shows today, display a message
if (nextShowIndex === -1) {
  document.getElementById("countdown").textContent = "There are no more shows today!";
} else {
  // Get the time of the next show
  const nextShowTime = new Date(now.toDateString() + " " + showTimes[nextShowIndex]);

  // Update the timer every second
  setInterval(() => {
    // Get the current time
    const now = new Date();

    // Calculate the time remaining until the next show
    const diff = nextShowTime - now;

    // If the next show has already started, display a message
    if (diff < 0) {
      document.getElementById("countdown").textContent = "The show has already started!";
      return;
    }

    // Calculate the remaining hours, minutes, and seconds
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Display the remaining time
    document.getElementById("countdown").textContent = `Next show starts in: ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

const bookNowBtn = document.getElementById("book-now-btn");

bookNowBtn.addEventListener("click", () => {
  const selectedSeatsCount = document.querySelectorAll(".row .seat.selected").length;

  if (selectedSeatsCount === 0) {
    alert("Please select at least one seat to proceed with the booking.");
    window.onbeforeunload = () => true;
  } else {
    location.href = "otput.html";
    // ...
  }
});
