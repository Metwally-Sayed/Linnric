import axios from 'axios';
import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';
import { getOrderPriceReducer } from '../utilities/apiFunctions';

const cookies = new Cookies();

const allCockies = cookies.getAll();

// userSignUp function
export const userSignup = async (endpoint, userData, router) => {
  try {
    const newUser = await axios.post(endpoint, userData, {
      headers: { 'Content-Type': 'application/json' },
    });

    router.push('/customer/active');
  } catch (error) {
    console.log(error);
  }
};

//fuction userLogIn
export const userLogIn = async (endpoint, userData, router) => {
  console.log(userData);
  try {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      email: userData.email,
      password: userData.password,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.user.IsWriter === false) {
          cookies.remove('writeraccessToken', { path: '/' });
          cookies.remove('writerrefreshToken', { path: '/' });
          const username = result.user.Username;
          window.localStorage.setItem('username', username);
          if (result.Accesstoken && result.Refreshtoken) {
            const accessToken = result.Accesstoken;
            const refreshToken = result.Refreshtoken;
            if (!allCockies.hasOwnProperty('useraccessToken')) {
              cookies.set('useraccessToken', accessToken);
              window.localStorage.setItem('username', username);
            }
            if (!allCockies.hasOwnProperty('userrefreshToken')) {
              cookies.set('userrefreshToken', refreshToken);
              window.localStorage.setItem('username', username);
            }
            router.push('/customer/active');
            window.localStorage.setItem('username', username);
          } else {
            alert(result);
          }
        } else if (result.user.IsWriter === true) {
          cookies.remove('useraccessToken', { path: '/' });
          cookies.remove('userrefreshToken', { path: '/' });
          router.push('/writerlogin');
        }

        console.log(result);
      })

      .catch((error) => console.log('error', error));
  } catch (error) {
    console.log(error);
  }
};

export const writerLogIn = async (endpoint, userData, router) => {
  console.log(userData);
  try {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      email: userData.email,
      password: userData.password,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.user.IsWriter === false) {
          if (result.Accesstoken && result.Refreshtoken) {
            cookies.remove('writeraccessToken', { path: '/' });
            cookies.remove('writerrefreshToken', { path: '/' });
            router.push('/login');
          }
        } else if (result.user.IsWriter === true) {
          cookies.remove('useraccessToken', { path: '/' });
          cookies.remove('userrefreshToken', { path: '/' });
          const writerrname = result.user.Username;
          window.localStorage.setItem('writerrname', writerrname);
          if (result.Accesstoken && result.Refreshtoken) {
            const accessToken = result.Accesstoken;
            const refreshToken = result.Refreshtoken;
            if (!allCockies.hasOwnProperty('writeraccessToken')) {
              cookies.set('writeraccessToken', accessToken);
              window.localStorage.setItem('writerrname', writerrname);
            } else if (!allCockies.hasOwnProperty('writerrefreshToken')) {
              cookies.set('writerrefreshToken', refreshToken);
              window.localStorage.setItem('writerrname', writerrname);
            } else if (
              allCockies.hasOwnProperty('writerrefreshToken') &&
              allCockies.hasOwnProperty('writeraccessToken')
            ) {
              return;
            }
            router.push('/writer/availableorders');
            window.localStorage.setItem('writerrname', writerrname);
          } else {
            alert(result);
          }
        }

        console.log(result);
      })

      .catch((error) => console.log('error', error));
  } catch (error) {
    console.log(error);
  }
};

//fuction userLogOut
export const userLogOut = () => {
  cookies.remove('userrefreshToken', { path: '/' });
  cookies.remove('useraccessToken', { path: '/' });
  cookies.remove('writerrefreshToken', { path: '/' });
  cookies.remove('writeraccessToken', { path: '/' });
};

// input fields data

// export const AssignmentTypeDataHandler = async () => {
//   try {
//     const data = await axios.get(
//       'https://backend420.linnric.com/api/v1/topic_list',
//     );
//     return data.data.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const AssignmentServicesDataHandler = async () => {
//   try {
//     const data = await axios.get(
//       'https://backend420.linnric.com/api/v1/service_list',
//     );
//     return data.data.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const AssignmentEducationLevelDataHandler = async () => {
//   try {
//     const data = await axios.get(
//       'https://backend420.linnric.com/api/v1/education_list',
//     );
//     return data.data.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const postingOrderHandler = async (Formdata, tokenStr, endpoint) => {
  try {
    const sendData = await axios
      .post(endpoint, Formdata, {
        headers: { Authorization: `Bearer ${tokenStr}` },
      })
      .then((res) => console.log(res));
  } catch (error) {
    console.log(error);
  }
};

export const editingOrderHandler = async (Formdata, tokenStr, endpoint) => {
  try {
    const sendData = await axios
      .put(endpoint, Formdata, {
        headers: { Authorization: `Bearer ${tokenStr}` },
      })
      .then((res) => console.log(res));
  } catch (error) {
    console.log(error);
  }
};

export const getOrderPrice = async (Formdata, tokenStr, endpoint) => {
  try {
    const sendData = await axios
      .post(endpoint, Formdata, {
        headers: { Authorization: `Bearer ${tokenStr}` },
      })
      .then((res) => {
        const orderPrice = res.data.data;
        window.localStorage.setItem('orderPrice', orderPrice);
      });
  } catch (error) {
    console.log(error);
  }
};

export const getUserOrders = async (endpoint) => {
  const token = cookies.get('refreshToken');
  console.log(token);
  try {
    const getData = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(getData.data.data);
    return getData.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWriterrOrders = async (endpoint, token) => {
  try {
    const getData = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(getData.data.data);
    return getData.data.data;
  } catch (error) {
    console.log(error);
  }
};
