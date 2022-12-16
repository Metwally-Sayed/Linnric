import axios from 'axios';

// Auth function
export const userAuth = async (endpoint, userData) => {
  try {
    const newUser = await axios.post(endpoint, userData, {
      headers: { 'content-type': 'text/json' },
    });

    console.log({ newUser });
    console.log('done');
  } catch (error) {
    console.log(error);
  }
};

//getting data from the endpoint function
export const getData = async (endpoint) => {
  try {
    const data = await axios.get(endpoint);
  } catch (error) {
    console.log(error);
  }
};
