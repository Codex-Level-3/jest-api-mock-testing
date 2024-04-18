"use strict";

const axios = require("axios");

async function getUser() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = getUser;
