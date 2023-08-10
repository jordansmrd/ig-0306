import { useState } from "react";
import { Closed_Eye, Eye, Logo_instagram } from "../../assets/icons";
import { Template } from "../../components/template/template";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { userUpdate } from "../../redux/middlewares/auth-middleware";
import { constant } from "../../constant";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../lib/toast";
import { useToast } from "@chakra-ui/react";
export const RequiredPage = () => {
  const userSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const nav = useNavigate("/home");
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().min(3).required(),
    }),
    onSubmit: async (values) => {
      const res = await dispatch(userUpdate(userSelector.id, values));
      console.log(res);
      if (res === constant.success) window.location.reload();
      showToast(
        toast,
        res,
        "Auth Updated Successfully",
        "Updated User Name",
        "Auth Update Failed",
        res
      );
    },
  });

  return (
    <Template>
      <Logo_instagram style={{ marginBottom: "24px", maxWidth: "174px" }} />
      <div className="flex flex-col gap-[14px] w-full items-center">
        <div className="flex max-w-[320px] w-full justify-center  flex-col">
          <div className="input-container">
            <input
              type="text"
              className="mobile-input"
              placeholder="Username"
              style={{ paddingRight: "25px" }}
              required
              onChange={(e) => formik.setFieldValue("username", e.target.value)}
            />
          </div>
          <span className="text-red-500"> {formik.errors.username}</span>
          <span className="text-red-500"> {formik.errors.username}</span>
        </div>

        <button
          className="auth-button"
          onClick={formik.handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </div>
    </Template>
  );
};
