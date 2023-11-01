const menu = [
  {
    id: 1,
    title: "To do list",
    img: "./toDoList.png",
    desc: "The To-Do List is a user-friendly web application that allows users to create and manage their tasks while saving the data in the local storage of the user's browser. This feature ensures that task lists are retained even after the browser is closed and reopened.",
    site: "https://mihaellatocu.github.io/ToDoList/",
    apps: "JavaScript | HTML | CSS"
  },
  {
    id: 2,
    title: "Memory Game",
    img: "./memoryGame.png",
    desc: "The game starts with all the cards face down and players take turns to turn over two cards. If the two cards have the same picture, then they keep the cards, otherwise they turn the cards face down again. The winner is the person with the most cards when all the cards have been taken.",
    site: "https://mihaellatocu.github.io/MemoryGame/",
    apps: "JavaScript | HTML | CSS"
  }, 
  {
    id: 3,
    title: "Weather app",
    img: "./weatherApp.png",
    desc: "The WeatherApp is a user-friendly web application created using the API, that provides real-time weather information to users based on a location they specify. Currently it only loads the weather on London, but I am working to load the weather on the user location. ",
    site: "https://mihaellatocu.github.io/Weather_app/",
    apps: "JavaScript | HTML | CSS"
  },
  {
    id: 4,
    title: "DataBase using Flask",
    img: "./databaseFlask.png",
    desc: "This is a web application built with Flask, Python and SQL that allows users to create and manage a database of movies. This application provides a user-friendly interface for performing CRUD (Create, Read, Update, Delete) operations on movie records. Users can easily add new movies, view the existing catalog, update movie details, and remove movies from the database.",
    site: "https://flask-database1.onrender.com/",
    apps: "Python | MySQL/SQLite | Flask | CSS | HTML"
  },
  {
    id: 5,
    title: "DataBase on Replit",
    img: "./databasePyton.png",
    desc: "Database on Replit, using Pyton, https://replit.com/@mihaellatocu/SongTable, https://replit.com/@mihaellatocu/FilmTable", 
    site: "https://mihaellatocu.github.io/Database_with_Pyton/",
    apps: "Python | MySQL/SQLite | CSS | HTML "
  }

]

// --NavBar toggle --
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
  // console.log(links.classList.contains('links'));
  // if(links.classList.contains('show-links')) {
  //   links.classList.remove('show-links')
  // } else {
  //   links.classList.add('show-links');
  // }

  links.classList.toggle('show-links')
})


const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function(){
  displayMenuItems(menu);
 
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function(item) {
    return `<article class="menu-item">
            <div class="photo-container">
              <a href="${item.site}" class="link-project" target="_blank">
                <img src="${item.img}" class="photo" alt="${item.title}">
                <div class="overlay"></div>
              </a>
            </div>
            <div class="item-info">
              <header>
                <a href="${item.site}" target="_blank""><h4>${item.title}</h4></a>
              </header>
              <p class="item-text">${item.desc}</p>
              <p>Technologies used: ${item.apps}</p>
            </div>
          </article>`;
    });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// const btn = document.getElementById("button");

// btn.addEventListener('click', function() {
//   alert("Your message has been sent!")
  
// })

const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = form.querySelector("input[name='your_name']").value;
    const email = form.querySelector("input[name='your_email']").value;
    const message = form.querySelector("textarea[name='message']").value;
    
    const subject = "Contact Form Submission from " + name;
    const mailtoUrl = `mailto:mihaellatocu@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    // Create an anchor element and trigger a click event to open the user's email client.
    const mailtoLink = document.createElement("a");
    mailtoLink.href = mailtoUrl;
    mailtoLink.style.display = "none";
    document.body.appendChild(mailtoLink);
    mailtoLink.click();
    document.body.removeChild(mailtoLink);
  });