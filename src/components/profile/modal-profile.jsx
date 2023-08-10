import { Avatar, useToast } from "@chakra-ui/react";
import { Template } from "../template/template";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { Check, Close } from "../../assets/icons";
import { useRef } from "react";
import { renderImage } from "../../lib/render-image";
import { useDispatch } from "react-redux";
import { userUpdate } from "../../redux/middlewares/auth-middleware";
import { showToast } from "../../lib/toast";
import { constant } from "../../constant";
export const EditProfile = ({ isOpen, onClose }) => {
  const userSelector = useSelector((state) => state.auth);
  const ref = useRef();
  const toast = useToast();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: userSelector.username,
      bio: userSelector.bio,
      image_url: userSelector.image_url,
      fullname: userSelector.fullname,
    },
    validationSchema: Yup.object().shape({
      fullname: Yup.string().min(3).required(),
      username: Yup.string().min(3).required(),
    }),
    onSubmit: async (values) => {
      const res = await dispatch(userUpdate(userSelector, values));
      if (res === constant.success) onClose();
      showToast(
        toast,
        res,
        "Profile Updated Successfully",
        "you have successfully updated your profile",
        "Profile Update Failed",
        res
      );
    },
  });

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div
      className={` z-10 	  ${
        isOpen ? "modal-edit-profile absolute w-screen " : "hidden"
      }`}
    >
      <Template>
        <div className="w-full h-full">
          <div className="w-full ">
            <div className=" flex justify-between m-3 ">
              <Close width={"16px"} onClick={onClose} />
              <span className="font-semibold">Edit Profile</span>
              <Check onClick={formik.handleSubmit} />
            </div>
          </div>

          <div className="flex flex-col gap-[14px] w-full items-center">
            <div className="flex max-w-[320px] w-full justify-center items-center flex-col">
              <div className="py-4 flex items-center flex-col gap-2">
                <Avatar
                  src={formik.values.image_url}
                  w={"80px"}
                  height={"80px"}
                />
                <div
                  onClick={() => ref.current.click()}
                  className="font-semibold cursor-pointer"
                >
                  Change profile photo
                </div>
                <input
                  ref={ref}
                  className="hidden"
                  type="file"
                  accept="image/*"
                  onChange={async (e) => {
                    const image_url = await renderImage(e);
                    formik.setFieldValue("image_url", image_url);
                  }}
                ></input>
              </div>

              <div className="input-container">
                <input
                  type="text"
                  className="mobile-input"
                  placeholder="Fullname"
                  style={{ paddingRight: "25px" }}
                  defaultValue={formik.values.fullname}
                  onChange={(e) =>
                    formik.setFieldValue("fullname", e.target.value)
                  }
                />
              </div>
              <span className="text-red-500 w-full">
                {" "}
                {formik.errors.fullname}
              </span>
            </div>
            <div className="flex max-w-[320px] w-full justify-center  flex-col">
              <div className="input-container">
                <input
                  type="text"
                  className="mobile-input"
                  placeholder="Username"
                  defaultValue={formik.values.username}
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
                <textarea
                  type="text"
                  className="mobile-input resize-none"
                  placeholder="Bio"
                  defaultValue={formik.values.bio}
                  style={{
                    paddingRight: "25px",
                    height: "70px",
                    paddingTop: "4px",
                  }}
                  onChange={(e) => formik.setFieldValue("bio", e.target.value)}
                />
              </div>
              <span className="text-red-500"> {formik.errors.bio}</span>
            </div>
          </div>
        </div>
      </Template>
    </div>
  );
};
