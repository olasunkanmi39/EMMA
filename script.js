//create the person object
// Basic praticed ,  is commented out
//let person = {
  //  name: "Oluwatoyin Sunkanmi Emmanuel",
   // age: 25,
   // city: "Ado_Ekiti",
    // Add the introduce method
    //introduce: function( ){
      //  return `Hello, my name is ${this.name} and I'm ${this.age} years old from ${this.city}.`;
   // }
//};
// console person and introduce
//console.log(person.introduce());


// Mini project
let person = {
    name: "Oluwatoyin Sunkanmi Emmanuel",
    age: 25,
    city: "Ado_Ekiti",
    email: "soluwatoyin10@email.com",
    phone: "07034294139",
    interests: "Reading, Hiking, Coding",
    
    // Add the introduce method
    introduce: function() {
      return` my name is ${this.name} and I'm ${this.age} years old from ${this.city}.` ;
    },
    
    // Add the displayDetails method
    displayDetails: function() {
      return` Email: ${this.email}<br>Phone: ${this.phone}<br>Interests: ${this.interests} `;
    },
    
    // Add the updateProfile method
    updateProfile: function(name, age, city, email, phone, interests) {
      this.name = name;
      this.age = age;
      this.city = city;
      this.email = email;
      this.phone = phone;
      this.interests = interests;
    }
  };
  
  // Get the introduction and details elements
  let introductionElement = document.getElementById("introduction");
  let detailsElement = document.getElementById("details");
  
  // Display the person object's introduction and details
  introductionElement.innerHTML = person.introduce();
  detailsElement.innerHTML = person.displayDetails();
  
  // Get the update form element
  let updateForm = document.getElementById("update-form");
  
  // Handle form submission
  updateForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get the form input values
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let interests = document.getElementById("interests").value;
    
    // Update the person object's profile
    person.updateProfile(name, age, city, email, phone, interests);
    
    // Display the updated introduction and details
    introductionElement.innerHTML = person.introduce();
    detailsElement.innerHTML = person.displayDetails();
  });
