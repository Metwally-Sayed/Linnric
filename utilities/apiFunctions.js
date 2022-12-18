import axios from 'axios';
import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';

const cookies = new Cookies();

const allCockies = cookies.getAll();
console.log(allCockies);
// userSignUp function
export const userSignup = async (endpoint, userData, router) => {
  try {
    const newUser = await axios.post(endpoint, userData, {
      headers: { 'content-type': 'text/json' },
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
        headers: { 'content-type': 'text/json' },
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
