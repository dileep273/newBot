// scripts.js

// Example dynamic data for flight details
const itineraryData = {
    traveler: {
      name: "John Doe",
      contact: "john.doe@email.com"
    },
    flights: [
      {
        type: "Outbound Journey",
        departureTime: "March 10, 2025 - 9:00 AM",
        departureAirport: "JFK Airport (JFK)",
        arrivalAirport: "LAX Airport (LAX)",
        flightNumber: "AA123",
        gate: "G8",
        seat: "22B"
      },
      {
        type: "Return Journey",
        departureTime: "March 17, 2025 - 2:00 PM",
        departureAirport: "LAX Airport (LAX)",
        arrivalAirport: "JFK Airport (JFK)",
        flightNumber: "AA124",
        gate: "D12",
        seat: "22C"
      }
    ]
  };
  
  // Populate the itinerary dynamically
  document.getElementById('traveler-name').textContent = itineraryData.traveler.name;
  document.getElementById('traveler-contact').textContent = itineraryData.traveler.contact;
  
  // Flight 1
  document.getElementById('flight1-departure-time').textContent = itineraryData.flights[0].departureTime;
  document.getElementById('flight1-departure-airport').textContent = itineraryData.flights[0].departureAirport;
  document.getElementById('flight1-arrival-airport').textContent = itineraryData.flights[0].arrivalAirport;
  document.getElementById('flight1-number').textContent = itineraryData.flights[0].flightNumber;
  document.getElementById('flight1-gate').textContent = itineraryData.flights[0].gate;
  document.getElementById('flight1-seat').textContent = itineraryData.flights[0].seat;
  
  // Flight 2
  document.getElementById('flight2-departure-time').textContent = itineraryData.flights[1].departureTime;
  document.getElementById('flight2-departure-airport').textContent = itineraryData.flights[1].departureAirport;
  document.getElementById('flight2-arrival-airport').textContent = itineraryData.flights[1].arrivalAirport;
  document.getElementById('flight2-number').textContent = itineraryData.flights[1].flightNumber;
  document.getElementById('flight2-gate').textContent = itineraryData.flights[1].gate;
  document.getElementById('flight2-seat').textContent = itineraryData.flights[1].seat;
  