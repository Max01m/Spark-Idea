import axios from "axios";
import dispatch from "react-redux";

export const registration = async (userName, email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/registration",
      {
        userName,
        email,
        password,
      }
    );
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};


export const login = (email, password) => {
    return async dispatch => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email,
            password,
          }
        );
        console.log(response.data); // Вывод данных ответа в консоль

      } catch (e) {
        alert(e.response.data.message);
      }
    };
  };