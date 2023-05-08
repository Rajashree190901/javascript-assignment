let movies = {
    data: [
      {
        movieName: "Vikram",
        category: "Action",
        Director: "Lokesh Kanagaraj",
        Rating : "8.3/10",
        Starring: "Kamal Haasan",
        Timing : "10:30am ,2:30pm , 6:30pm",
        image:"vik.jpg"
      },
      {
        movieName: "Poniyin selvan 2",
        category: "Action",
        Director: "Mani Ratnam",
        Rating:"8.3/10",
        Starring: "Jayam ravu;vikram ,karthick",
        Timing : "10:30am ,2:30pm , 6:30pm",
        image:"ps.jpg"
      },
      {
        movieName: "Agilan",
        category: "Action",
        Director: "N. Kalyanakrishnan",
        Rating:"4/10",
        Starring:"Jayam Ravi, Priya Bhavani Shankar" ,
        Timing : "10:30am ,2:30pm , 6:30pm",
        image:"agilan.jpg"
      },
      {
        movieName: "Pathuthala",
        category: "Action",
        Director: "Krishna",
        Rating : "7.7/10",
        Starring:"Gautham Karthik,Silambarasan ",
        Timing : "10:30am ,2:30pm , 6:30pm",
        image:"pt.jpg"
      },
      {
        movieName: "Varrisu",
        category: "Drama",
        Director:" Vamshi Paidipally",
        Rating:"6/10",
        Starring:" Vijay" ,
        Timing : "10:30am ,2:30pm , 6:30pm",
        image:"var.webp"
      },
      {
        movieName: "Dada",
        category: "Drama",
        Director: "Ganesh K Babu",
        Rating : "8.3/10",
        Starring: "Kavin,Aparna das",
        Timing : "10:30am ,2:30pm , 6:30pm",
        image:"dadaaa.jpg"
      },
      {
        movieName: "Shaakunthalam",
        category: "Drama",
        Director: "Gunasekhar",
        Rating : "4.7/10",
        Starring: "Samantha" ,
        Timing : "10:30am ,2:30pm , 6:30pm",
        image:"sha.avif"
      },
      {
        movieName: "Vaathi",
        category: "Drama",
        Director: "Venky Atluri",
        Rating :"7.3/10",
        Starring: "Dhanush,Samyuktha ",
        Timing : "10:30am ,2:30pm , 6:30pm",
        image:"vathi.jpg"
      },
      {
        movieName: "D-Block",
        category: "Horror",
        Director: "Vijay Kumar Rajendran",
        Rating:"5.3/10",
        Starring:" Arulnithi; Avanthika",
        Timing :" 10:30am ,2:30pm , 6:30pm",
        image:"db.jpg",
      },
      {
        movieName: "Pisasu",
        category: "Horror",
        Director: "Mysskin",
        Rating : "6/10",
        Starring: "Prayaga martin" ,
        Timing : "10:30am ,2:30pm , 6:30pm",
        image:"pisa.jpg",
      },
      {
        movieName: "NUN",
        category: "Horror",
        Director:" Corin Hardy",
        Rating : "5.3/10",
        Starring: "Taissa Farmiga" ,
        Timing :" 10:30am ,2:30pm , 6:30pm",
        image:"conj.jpg",
      },
      {
        movieName: "Evil dead rise",
        category: "Horror",
        Director:" Lee Cronin",
        Rating :"7.1/10",
        Starring:" Alyssa Sutherland ",
        Timing : "10:30am ,2:30pm , 6:30pm",
        image:"evil.jpg",
      },
    ],
  };
  
  for (let i of movies.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category,"hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.movieName.toUpperCase();
    container.appendChild(name);
    //price
    let Rating = document.createElement("h6");
    Rating.innerText = "Rating : " + i.Rating;
    container.appendChild(Rating);
    card.appendChild(container);

    let Starring = document.createElement("h6");
    Starring.innerText = "Starring : " + i.Starring;
    container.appendChild(Starring);
    card.appendChild(container);

    let Timing = document.createElement("h6");
    Timing.innerText = "Timing : " + i.Timing;
    container.appendChild(Timing);
    card.appendChild(container);
   //Create a button and set its text
   let button = document.createElement("button");
   button.innerText = "Book Now";
   button.classList.add("book-button");
   //Add an event listener to the button that redirects to the booking page
   button.addEventListener("click", function() {
       window.location.href = "bookingpage.html";
   });

   //Set the URL of the booking page as the value of the href attribute
   button.setAttribute("href", "bookingpage.html");
   container.appendChild(button);
    card.appendChild(button);

  
    document.getElementById("movies").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterMovie(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterMovie("all");
  };