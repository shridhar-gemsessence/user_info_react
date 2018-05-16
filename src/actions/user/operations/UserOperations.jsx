import axiosInstance from '../../../axios';

export const loginUser = data => (
  (dispatch) => {
    axiosInstance().post('/auth/sign_in.json', data)
    .then((response) => {
      debugger
    })
    .catch((error) => {
      debugger
    })
  }
);
