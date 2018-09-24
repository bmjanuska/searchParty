import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getPlace: function(place) {
    return axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + place + "&key=AIzaSyApIn7dZQPu26fDdHQtu1UMfTOWB7P06B0");
  }
};

