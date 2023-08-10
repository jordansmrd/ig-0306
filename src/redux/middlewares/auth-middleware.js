import { api } from "../../api/axios";
import { constant } from "../../constant";

export const userLogin = (values) => {
  return async (dispatch) => {
    try {
      const res = await api.get("/users", {
        params: {
          ...values,
        },
      });
      console.log(res.data.length);
      if (!res.data.length) throw new Error("wrong username/password");

      const user = res.data[0];
      localStorage.setItem("auth", user.id);
      dispatch({
        type: constant.USER_LOGIN,
        payload: user,
      });

      return constant.success;
    } catch (err) {
      localStorage.removeItem("auth");

      return err.message;
    }
  };
};

export const userLoginWithGoogle = (values) => {
  return async (dispatch) => {
    try {
      let user = await checkIfUserExist(values, "google_uid");
      console.log(user);
      localStorage.setItem("auth", user.id);
      dispatch({
        type: constant.USER_LOGIN,
        payload: user,
      });

      return constant.success;
    } catch (err) {
      localStorage.removeItem("auth");
      return err.message;
    }
  };
};

export const userLoginWithFacebook = (values) => {
  return async (dispatch) => {
    try {
      let user = await checkIfUserExist(values, "facebook_uid");
      localStorage.setItem("auth", user.id);
      console.log(user);

      dispatch({
        type: constant.USER_LOGIN,
        payload: user,
      });

      return constant.success;
    } catch (err) {
      localStorage.removeItem("auth");
      return err.message;
    }
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    localStorage.removeItem("auth");
    dispatch({
      type: constant.USER_LOGOUT,
    });
  };
};

export const userUpdate = (selector, values) => {
  return async (dispatch) => {
    try {
      if (selector.username !== values.username && !values.username) {
        const check = await api.get("/users", {
          params: { username: values.username },
        });
        if (check.data[0]?.id) throw new Error("username already exist");
      }

      const user = await api.patch(`/users/${selector.id}`, values);
      console.log(user);
      dispatch({
        type: constant.USER_LOGIN,
        payload: user.data,
      });
      return constant.success;
    } catch (err) {
      return err.message;
    }
  };
};
const checkIfUserExist = async (values, provider = "") => {
  try {
    let user = {};
    const isUserExist = await api
      .get("/users/", {
        params: {
          email: values.email,
        },
      })
      .then((res) => res.data[0])
      .catch((err) => console.log(err));

    console.log(isUserExist);
    //user email sudah terdaftar tapi tidak memiliki uid
    if (isUserExist?.id && !isUserExist[provider]) {
      isUserExist[provider] = values.uid;
      user = await api
        .patch(`/users/${isUserExist.id}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
    } else if (!isUserExist?.id) {
      user = await api
        .post(
          "/users",
          new User(
            values.displayName,
            values.email,
            values.photoURL,
            values.uid
          )
        )
        .then((res) => res.data)
        .catch((err) => console.log(err));
    } else {
      user = { ...isUserExist };
    }
    return user;
  } catch (err) {
    console.log(err);
  }
};

class User {
  constructor(
    fullname = "",
    email = "",
    image_url = "",
    google_uid = "",
    username = "",
    password = "",
    gender = "",
    bio = ""
  ) {
    this.username = username;
    this.email = email;
    this.gender = gender;
    this.password = password;
    this.bio = bio;
    this.image_url = image_url;
    this.fullname = fullname;
    this.google_uid = google_uid;
  }
}
