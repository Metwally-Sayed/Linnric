import axios from 'axios';
import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';

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
    // const newUser = await axios
    //   .post(endpoint, userData, {
    //     headers: {
    //       withCredentials: true,
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     if (res.data.Accesstoken && res.data.Refreshtoken) {
    //       const accessToken = res.data.Accesstoken;
    //       const refreshToken = res.data.Refreshtoken;
    //       if (!allCockies.hasOwnProperty('accessToken')) {
    //         cookies.set('accessToken', accessToken);
    //       }
    //       if (!allCockies.hasOwnProperty('refreshToken')) {
    //         cookies.set('refreshToken', refreshToken);
    //       }
    //       router.push('/customer/active');
    //     } else {
    //       alert(res.data);
    //     }
    //   });

    // await fetch(endpoint, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: userData,
    // });
    // response.json().then((data) => {
    //   console.log(data);
    // });

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
        const username = result.user.Username;
        window.localStorage.setItem('username', username);

        if (result.Accesstoken && result.Refreshtoken) {
          const accessToken = result.Accesstoken;
          const refreshToken = result.Refreshtoken;
          if (!allCockies.hasOwnProperty('accessToken')) {
            cookies.set('accessToken', accessToken);
            window.localStorage.setItem('username', username);
          }
          if (!allCockies.hasOwnProperty('refreshToken')) {
            cookies.set('refreshToken', refreshToken);
            window.localStorage.setItem('username', username);
          }
          router.push('/customer/active');
          window.localStorage.setItem('username', username);
        } else {
          alert(result);
        }

        console.log(result);
      })

      .catch((error) => console.log('error', error));
  } catch (error) {
    console.log(error);
  }
};

// fuction userLogIn with token
// export const userLogInWithToken = async (endpoint, token, router) => {
//   const decoded = jwt_decode(token);
//   console.log(decoded);

//   if (decoded.exp < Date.now() / 1000) {
//     cookies.remove('accessToken');
//   }

//   try {
//     const res = await axios.post(endpoint, {
//       headers: { token },
//     });
//     router.push('/');
//   } catch (error) {
//     console.log(error);
//   }
// };

//fuction userLogOut
export const userLogOut = () => {
  cookies.remove('accessToken', { path: '/' });
  cookies.remove('refreshToken', { path: '/' });
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
