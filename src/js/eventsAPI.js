import axios from 'axios';

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events';
const apikey = 'GfgVh4R7D4nbAHFUVOA6O71Si5aOA40O';
const size = 20;

export async function getEvents({ keyword, countryCode = 'pl', page } = {}) {
  try {
    const resp = await axios.get(`${BASE_URL}.json`, {
      params: {
        apikey,
        size,
        keyword,
        countryCode,
        page,
      },
    });
    return resp.data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getEvent(id) {
  try {
    const event = await axios.get(`${BASE_URL}/${id}.json`, {
      params: {
        apikey,
      },
    });

    return event;
  } catch (e) {
    // console.error(error.message);
  }
}
