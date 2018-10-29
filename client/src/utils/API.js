import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getPlace: function(place) {
  var APIKey = process.env.REACT_APP_MAPS_API_KEY;
    return axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + place + "&key=" + APIKey);
  }
};

