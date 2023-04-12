// Navbar Sticky On scroll
// Get the navbar element
const navbar = document.querySelector(".navbar");

// Get the offset position of the navbar
const navbarOffsetTop = navbar.offsetTop;

function handleScroll() {
  // Get the current vertical scroll position
  const scrollPosition = window.pageYOffset;

  // Check if the user has scrolled past the navbar
  if (scrollPosition >= navbarOffsetTop) {
    // If the user has scrolled past the navbar, add the "sticky" class to the navbar
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
// Navbar Menu Icon
// function myFunction() {
//   var x = document.getElementById("nav_list");
//   var y = document.getElementById("nav_icon_wrapper");
//   if (x.style.display === "block" && y.style.display === "block") {
//     x.style.display = "none";
//     y.style.display = "none";
//   } else {
//     x.style.display = "block";
//     y.style.display = "block";
//   }
// }
window.addEventListener("scroll", handleScroll);
// Filter Part
let products = {
  data: [
    {
      productName: "Iron Handicraft 1",
      category: "Iron",
      price: "0000",
      image: "Images/elephant2.png",
    },
    {
      productName: "Glass Handicraft 1",
      category: "Glass",
      price: "0000",
      image: "Images/geode.png",
    },
    {
      productName: "Brass Handicraft 1",
      category: "Brass",
      price: "0000",
      image: "Images/ceramic.png",
    },
    {
      productName: "Wood Handicraft 1",
      category: "Wood",
      price: "0000",
      image: "Images/angel.png",
    },
    {
      productName: "Handicraft Decorative 1",
      category: "Decorative",
      price: "0000",
      image: "Images/bag.png",
    },
    {
      productName: "Candle Accessories 1",
      category: "Candle",
      price: "0000",
      image: "Images/candil.png",
    },
    {
      productName: "Iron Handicraft 2",
      category: "Iron",
      price: "0000",
      image: "Images/elephant3.png",
    },
    {
      productName: "Glass Handicraft 2",
      category: "Glass",
      price: "0000",
      image: "Images/guatemela.png",
    },
    {
      productName: "Handicraft Decorative 2",
      category: "Decorative",
      price: "0000",
      image: "Images/cart.png",
    },
    {
      productName: "Iron Handicraft 3",
      category: "Iron",
      price: "0000",
      image: "Images/fantasy.png",
    },
    {
      productName: "Wood Handicraft 3",
      category: "Wood",
      price: "0000",
      image: "Images/chair.png",
    },
    {
      productName: "Brass Handicraft 2",
      category: "Brass",
      price: "0000",
      image: "Images/dragon.png",
    },
    {
      productName: "Wood Handicraft 2",
      category: "Wood",
      price: "0000",
      image: "Images/buddha.png",
    },
    {
      productName: "Handicraft Decorative 3",
      category: "Decorative",
      price: "0000",
      image: "Images/christmas.png",
    },
    {
      productName: "Handicraft Decorative 4",
      category: "Decorative",
      price: "0000",
      image: "Images/decor.png",
    },
    {
      productName: "Handicraft Decorative 5",
      category: "Decorative",
      price: "0000",
      image: "Images/doll.png",
    },
    {
      productName: "Brass Handicraft 3",
      category: "Brass",
      price: "0000",
      image: "Images/iron.png",
    },
    {
      productName: "Handicraft Decorative 6",
      category: "Decorative",
      price: "0000",
      image: "Images/pitcher.png",
    },
    {
      productName: "Brass Handicraft 4",
      category: "Brass",
      price: "0000",
      image: "Images/tree.png",
    },
  ],
};
// Filter Cards
for (let i of products.data) {
  //create card
  let card = document.createElement("div");
  //Card should have category and shold stay hidden initially
  card.classList.add("card", i.category, "hide");
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
  container.classList.add("contain");
  //product Name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //Price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}
//Parameter passed from button (Parameter same as category)
function filterProduct(value) {
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
      //check if element contains category class
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

//search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  console.log(searchInput);
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
  //Initially display all products
});
window.onload = () => {
  filterProduct("all");
};
//loop through all elements

// Popup
// let popup = document.getElementById("popup");

// function openPopup() {
//   popup.classList.add("open-popup");
// }
// function closePopup() {
//   popup.classList.remove("open-popup");
// }

// Gallery
// document.querySelectorAll(".photo-gallery img").forEach((image) => {
//   image.onclick = () => {
//     document.querySelector(".popup-image").style.display = "block";
//     document.querySelector(".popup-image img").src = image.getAttribute("src");
//   };
// });
// document.querySelector(".popup-image span").onclick = () => {
//   document.querySelector(".popup-image").style.display = "none";
// };

// Number Range

let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

// console.log("valueDisplays");
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  // console.log("endValue");
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
