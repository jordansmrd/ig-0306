import { useState } from "react";
import { Closed_Eye, Eye, Logo_instagram } from "../../assets/icons";
import { Template } from "../../components/template/template";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { api } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { constant } from "../../constant";
import { showToast } from "../../lib/toast";
import { useToast } from "@chakra-ui/react";

export const RegisterPage = () => {
  YupPassword(Yup);
  const [see, setSee] = useState(false);
  const [see2, setSee2] = useState(false);
  const toast = useToast();
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      gender: "",
      password: "",
      confirm_password: "",
      bio: "",
      image_url: "",
      fullname: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required(),
      fullname: Yup.string().min(3).required(),
      username: Yup.string().min(3).required(),
      gender: Yup.string().required(),
      password: Yup.string().minLowercase(1).minUppercase(1).min(4).required(),
      confirm_password: Yup.string()
        .required("confirm password is a required field")
        .oneOf([Yup.ref("password")], "password does not match"),
    }),
    onSubmit: async (values) => {
      const res = await api
        .post("/users", values)
        .then(() => constant.success)
        .catch((err) => err.message);

      console.log(res);
      if (res === constant.success) nav("/login");
      showToast(
        toast,
        res,
        "Auth Register Success",
        "new user has been added",
        "Auth Register Failed",
        res
      );
    },
  });

  return (
    <>
      <Template>
        <Logo_instagram style={{ marginBottom: "24px", maxWidth: "174px" }} />
        <div className="flex flex-col gap-[14px] w-full items-center">
          <div className="flex max-w-[320px] w-full justify-center  flex-col">
            <div className="input-container">
              <input
                type="text"
                className="mobile-input"
                placeholder="Fullname"
                style={{ paddingRight: "25px" }}
                onChange={(e) =>
                  formik.setFieldValue("fullname", e.target.value)
                }
              />
            </div>
            <span className="text-red-500"> {formik.errors.fullname}</span>
          </div>
          <div className="flex max-w-[320px] w-full justify-center  flex-col">
            <div className="input-container">
              <input
                type="text"
                className="mobile-input"
                placeholder="Username"
                style={{ paddingRight: "25px" }}
                onChange={(e) =>
                  formik.setFieldValue("username", e.target.value)
                }
              />
            </div>
            <span className="text-red-500"> {formik.errors.username}</span>
          </div>

          <div className="flex max-w-[320px] w-full justify-center  flex-col">
            <div className="input-container">
              <input
                type="email"
                className="mobile-input"
                placeholder="Email"
                style={{ paddingRight: "25px" }}
                onChange={(e) => formik.setFieldValue("email", e.target.value)}
              />
            </div>
            <span className="text-red-500"> {formik.errors.email}</span>
          </div>

          <div className="flex max-w-[320px] w-full justify-center  flex-col">
            <select
              required
              className="input-container"
              style={{ padding: "0px 15px" }}
              onChange={(e) => formik.setFieldValue("gender", e.target.value)}
            >
              <option value="" disabled selected hidden>
                Choose Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <span className="text-red-500"> {formik.errors.gender}</span>
          </div>
          <div className="flex max-w-[320px] w-full justify-center  flex-col">
            <div className="input-container">
              <input
                type={see ? "text" : "password"}
                onChange={(e) =>
                  formik.setFieldValue("password", e.target.value)
                }
                className="mobile-input"
                placeholder="Password"
                style={{ paddingRight: "5px" }}
              />

              <button
                style={{ paddingRight: "10px" }}
                onClick={() => setSee(!see)}
              >
                {see ? (
                  <Eye name="see" width={"13px"} />
                ) : (
                  <Closed_Eye name="closed" width={"13px"} />
                )}
              </button>
            </div>
            <span className="text-red-500"> {formik.errors.password}</span>
          </div>
          <div className="flex max-w-[320px] w-full justify-center  flex-col">
            <div className="input-container">
              <input
                type={see2 ? "text" : "password"}
                onChange={(e) =>
                  formik.setFieldValue("confirm_password", e.target.value)
                }
                className="mobile-input"
                placeholder="Re-password"
                style={{ paddingRight: "5px" }}
              />

              <button
                style={{ paddingRight: "10px" }}
                onClick={() => setSee2(!see2)}
              >
                {see2 ? (
                  <Eye name="see" width={"13px"} />
                ) : (
                  <Closed_Eye name="closed" width={"13px"} />
                )}
              </button>
            </div>
            <span className="text-red-500">
              {formik.errors.confirm_password}
            </span>
          </div>
          <button className="auth-button" onClick={formik.handleSubmit}>
            Register
          </button>
          <div className=" text-[13px]">
            Already have an account?{" "}
            <span>
              <a href="/login" className="font-semibold">
                Sign in.
              </a>
            </span>
          </div>
        </div>
      </Template>
    </>
  );
};
