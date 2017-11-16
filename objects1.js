   var cars = { 
	 name: ["Economy", "Midsize"],
	 economyCars: 125,
	 economyCarsBooked: 0,
	 midsizeCars: 100,
	 midsizeCarsBooked: 0,
	 
	  ecarFunction: function() {
	   return this.economyCars - this.economyCarsBooked;
	  },
	  
	  midcarFunction: function() {
	   return this.midsizeCars - this.midsizeCarsBooked;
	  },
	  
	  bookEcon: function() {
	      return this.economyCarsBooked++;
	  },
	  
	  bookMid: function() {
	      return this.midsizeCarsBooked++;
	  }
	  };
	    
	function availFunction() {
	document.getElementById("ecars").innerHTML = cars.name[0];
	document.getElementById("midcars").innerHTML = cars.name[1];
	document.getElementById("ecarsAvail").innerHTML = cars.ecarFunction();
	document.getElementById("midcarsAvail").innerHTML = cars.midcarFunction();
	}
	
	function rentCar() {
	cars.bookEcon();
	document.getElementById("ecarsAvail").innerHTML = cars.ecarFunction();
	}

    function rentMidcar(){
    cars.bookMid();
	document.getElementById("midcarsAvail").innerHTML = cars.midcarFunction();    
    }
	
// var carRental = {
//     rental: [
//         {
//             name:
//             type:
//         }
//         ]
// },
//         {
//             name:
//             type:
//         }
        
// };

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}