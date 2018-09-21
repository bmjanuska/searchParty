import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};


//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
