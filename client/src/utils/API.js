import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getlocation: function() {
    return axios.get("https://maps.googleapis.com/maps/api/geocode/outputFormat?parameters");
  }
};
