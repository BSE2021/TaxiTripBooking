console.log('js'); //viewed in console of the browser

//demo of modal
//   $('#more').hide();
// $('#demo-modal').click(function(){
//   $('#more').show();
// });
console.log(key);//mapKey.js has the key.

// incorporating the map key into the script tag
var script  = '<script src="https://maps.googleapis.com/maps/api/js?key='+ key +'&callback=initMap&libraries=places&v=weekly" async></script>';
console.log(script);
 // javascript functionality to be triggered after the webpage is loaded.
$(document).ready(function(){
  $('body').append(script);//appending script var to body of index.html for a safe use of the key

  $("#register").hide();
  $("#book").hide();
  $("#contact").hide();

  $("#home-link").click(function(){
    $("#home").show();
    $("#register", "#book", "#contact").hide();
  });

  $("#register-link").click(function(){
    $("#register").show();
    $("#home", "#book", "#contact").hide();
  });
  $("#book-link").click(function(){
    $("#book").show();
    $("#register", "#home", "#contact").hide();
  });
  $("#contact-link").click(function(){
    $("#contact").show();
    $("#register", "#book", "#home").hide();
  });
});

// js objects written in key:value pair
//similar to c++ array of structure
var login =[
  {
    username:'beulasamuel',
    password:'beula'
  },
  {
    username:'priscillaphilips',
    password:'priscilla'
  },
  {
    username:'lazarusgamaliel',
    password:'lazarus'
  }
];


// ===========================
// login form, submit button
// ============================
var loginForm = document.getElementById('login-form');
loginForm.style.display='none';


var loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function(){
  document.getElementById('login-form').style.display='block';
});

var submitBtn = document.getElementById('submit-login');

submitBtn.addEventListener('click',function(){
  document.getElementById('login-form').style.display='none';
  var userName = document.getElementById('username').value;
  var passWord = document.getElementById('password').value;

  if ((userName !== '') && (passWord !== '')) {
    var i, flag=0;
    for(i=0; i<login.length; i++){
      if ((userName == login[i].username) && (passWord == login[i].password)) {
        flag=1;
        break;
      }
    }

    if (flag==1){
      alert('Login successful');
    } else {
      alert('Login not successful. Please try again');
    }
  } else{
    alert('username and password must be provided');
  }
});

// input form submission
var submitInputBtn = document.getElementById('submit-input');

submitInputBtn.addEventListener('click',function(){
  var origin = document.getElementById('origin').value;
  var destination = document.getElementById('destination').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  console.log(origin, destination);
  console.log(date, time);

});

//=====================
// navigation
//=====================
var taxiNavContainer = document.getElementById('taxi-nav-container');
var homeIcon = document.getElementById('home-icon');
var nav =   document.getElementById('nav');

// Nav toggle
homeIcon.addEventListener('click', function(){
  nav.style.display='inline';

});



var closeBtn =document.getElementById('close-btn');
closeBtn.addEventListener('click', function(){
  document.getElementById('nav').style.display='none';
});

var homeLink =document.getElementById('home-link');
var registerLink =document.getElementById('register-link');
var bookLink =document.getElementById('book-link');
var contactLink =document.getElementById('contact-link');

homeLink.addEventListener('click', function(){
  nav.style.display='none';
});
registerLink.addEventListener('click', function(){
  nav.style.display='none';
});
bookLink.addEventListener('click', function(){
  nav.style.display='none';
});
contactLink.addEventListener('click', function(){
  nav.style.display='none';
});

// //======================
// //Google maps
// //======================
// console.log(key);

// Initialize and add the map
// function initMap() {
  //=====================
  // Map and Marker only
  //=========================
  // // The location of wellington
  // const wellington = { lat: -41.2924, lng: 174.7787 };
  // // The map, centered at Uluru
  // const map = new google.maps.Map(document.getElementById("map"), {
  //   zoom: 6,
  //   center: wellington,
  // });
  // // The marker, positioned at Uluru
  // const marker1 = new google.maps.Marker({
  //   position: wellington,
  //   map: map,
  // });
  //
  // // The location of Auckland
  // const auckland = { lat: -36.8509, lng: 174.7645 };
  //
  // // The marker, positioned at Uluru
  // const marker2 = new google.maps.Marker({
  //   position: auckland,
  //   map: map,
  // });

//==================
//Route / Direction and distance
//==================
  //DirectionService() and DirectionRenderer() are Google maps API library functions
//   const directionsService = new google.maps.DirectionsService();
//   const directionsRenderer = new google.maps.DirectionsRenderer();
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 6,
//     center: { lat: 41.85, lng: -87.65 },
//   });
//
//   directionsRenderer.setMap(map);
//   document.getElementById("submit").addEventListener("click", () => {
//     calculateAndDisplayRoute(directionsService, directionsRenderer);
//   });
// }
//
// function calculateAndDisplayRoute(directionsService, directionsRenderer) {
//   const waypts = [];
//   const checkboxArray = document.getElementById("waypoints");
//
//   for (let i = 0; i < checkboxArray.length; i++) {
//     if (checkboxArray.options[i].selected) {
//       waypts.push({
//         location: checkboxArray[i].value,
//         stopover: true,
//       });
//     }
//   }
//
//   directionsService
//     .route({
//       origin: document.getElementById("start").value,
//       destination: document.getElementById("end").value,
//       waypoints: waypts,
//       optimizeWaypoints: true,
//       travelMode: google.maps.TravelMode.DRIVING,
//     })
//     .then((response) => {
//       directionsRenderer.setDirections(response);
//
//       const route = response.routes[0];
//       const summaryPanel = document.getElementById("directions-panel");
//
//       summaryPanel.innerHTML = "";
//
//       // For each route, display summary information.
//       for (let i = 0; i < route.legs.length; i++) {
//         const routeSegment = i + 1;
//
//         summaryPanel.innerHTML +=
//           "<b>Route Segment: " + routeSegment + "</b><br>";
//         summaryPanel.innerHTML += route.legs[i].start_address + " to ";
//         summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
//         summaryPanel.innerHTML += route.legs[i].distance.text + "<br><br>";
//       }
//     })
//     .catch((e) => window.alert("Directions request failed due to " + status));
//
// }//initMap

// Autocomplet and Routes
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var apiResponse;
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    mapTypeControl: false,
    center: { lat: -41.2924, lng: 174.7787},
    zoom: 13,
  });

  new AutocompleteDirectionsHandler(map);
}//initMap

class AutocompleteDirectionsHandler {
  map;
  originPlaceId;
  destinationPlaceId;
  travelMode;
  directionsService;
  directionsRenderer;
  constructor(map) {
    this.map = map;
    this.originPlaceId = "";
    this.destinationPlaceId = "";
    this.travelMode = google.maps.TravelMode.DRIVING;
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(map);

    const originInput = document.getElementById("origin-input");
    const destinationInput = document.getElementById("destination-input");
    const modeSelector = document.getElementById("mode-selector");
    const originAutocomplete = new google.maps.places.Autocomplete(originInput);

    // Specify just the place data fields that you need.
    originAutocomplete.setFields(["place_id"]);

    const destinationAutocomplete = new google.maps.places.Autocomplete(
      destinationInput
    );

    // Specify just the place data fields that you need.
    destinationAutocomplete.setFields(["place_id"]);

    this.setupClickListener(
      "changemode-driving",
      google.maps.TravelMode.DRIVING
    );
    this.setupPlaceChangedListener(originAutocomplete, "ORIG");
    this.setupPlaceChangedListener(destinationAutocomplete, "DEST");
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
      destinationInput
    );
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
  }
  // Sets a listener on a radio button to change the filter type on Places
  // Autocomplete.
  setupClickListener(id, mode) {
    const radioButton = document.getElementById(id);

    radioButton.addEventListener("click", () => {
      this.travelMode = mode;
      this.route();
    });
  }
  setupPlaceChangedListener(autocomplete, mode) {
    autocomplete.bindTo("bounds", this.map);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (!place.place_id) {
        window.alert("Please select an option from the dropdown list.");
        return;
      }

      if (mode === "ORIG") {
        this.originPlaceId = place.place_id;
      } else {
        this.destinationPlaceId = place.place_id;
      }

      this.route();
    });
  }
  route() {
    if (!this.originPlaceId || !this.destinationPlaceId) {
      return;
    }

    const me = this;

    this.directionsService.route(
      {
        origin: { placeId: this.originPlaceId },
        destination: { placeId: this.destinationPlaceId },
        travelMode: this.travelMode,
      },
      (response, status) => {
        if (status === "OK") {
          me.directionsRenderer.setDirections(response);
            apiResponse = response;
            console.log(apiResponse);
            console.log(response.routes[0]);
            console.log(response.routes[0].legs[0].start_address, response.routes[0].legs[0].end_address);
            console.log(response.routes[0].legs[0].distance.text,response.routes[0].legs[0].duration.text);
            var result = document.getElementById('result');
            result.innerHTML =  '<label class="form-control mt-4" for="date">Select a date </label>' +
                                '<input class="form-control" type="date" id="date" name="start-time">' +

                                '<label class="form-control mt-4" for="time">Select a time:</label>' +
                                '<input class="form-control" type="time" id="time" name="time">' +
                                '<p class="bg-success text-info fw-bold h3">Start at: '+ response.routes[0].legs[0].start_address +'<br>'+'<br>'+
                                'Reach destination: ' +response.routes[0].legs[0].end_address+'<br>'+'<br>'+
                                'Distance:  '+response.routes[0].legs[0].distance.text+'<br>'+ '<br>'+
                                'Duration: '+response.routes[0].legs[0].duration.text+'<br>'+ '<br>'+'<br></p>'+
                                '<p class="bg-green text-light"> Amount to be paid: $ ' + parseFloat(response.routes[0].legs[0].distance.text) * 2.50 +'</p>'+'<br>'+'<br>';



        } else {
          window.alert("Directions request failed due to " + status);
        }
        return (apiResponse);
      }
    );
  }//route

}//AutocompleteDirectionsHandler

  result.innerHTML +=
  '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">'+
  '  Pay now   </button>'+
//  Modal
'<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">' +
'  <div class="modal-dialog"> + <div class="modal-content"> + <div class="modal-header">'+
'  <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>'+
'<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>+'
'  </div> <div class="modal-body">'+
'  card details are taken using a form' +
'</div> <div class="modal-footer">' +
'  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>'+
'    <button type="button" class="btn btn-primary">Understood</button>' +
'  </div> </div> </div> </div>';
// };//myModal
