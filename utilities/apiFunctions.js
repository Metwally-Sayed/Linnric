import axios from 'axios';
import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';
import { data } from 'autoprefixer';

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
  try {
    const newUser = await axios
      .post(endpoint, userData, {
        headers: {
          withCredentials: true,
          'Content-Type': 'application/json',
          Cookie: 'Cookie_1=value;',
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.Accesstoken && res.data.Refreshtoken) {
          const accessToken = res.data.Accesstoken;
          const refreshToken = res.data.Refreshtoken;
          if (!allCockies.hasOwnProperty('accessToken')) {
            cookies.set('accessToken', accessToken);
          }
          if (!allCockies.hasOwnProperty('refreshToken')) {
            cookies.set('refreshToken', refreshToken);
          }
          router.push('/customer/active');
        } else {
          alert(res.data);
        }
      });
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
