import axios from 'axios';

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
