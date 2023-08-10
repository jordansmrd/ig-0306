import {
  Add,
  Burger,
  Logo_instagram_nav,
  Love,
  Messenger,
} from "../../assets/icons";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../redux/middlewares/auth-middleware";
import { useNavigate } from "react-router-dom";
export const ProfileBar = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const userSelector = useSelector((state) => state.auth);
  return (
    <div
      className="navigation-container navbar"
      style={{ borderBottom: "1px solid #c9c9c9" }}
    >
      <div className="navigation ">
        <div
          className="flex justify-between w-full"
          style={{ padding: "8px 16px" }}
        >
          <b className="text-lg">{userSelector.username} </b>

          <div className="flex gap-[15px] items-center icons">
            <Add />
            <Burger
              onClick={async () => {
                await dispatch(userLogout());
                nav("/login");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
