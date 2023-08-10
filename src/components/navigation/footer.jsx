import { Avatar } from "@chakra-ui/react";
import { Add, Home, Search, Shop, Video } from "../../assets/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Footer = () => {
  const userSelector = useSelector((state) => state.auth);
  const nav = useNavigate();
  return (
    <div
      className="navigation-container footer "
      style={{ borderTop: "1px solid #c9c9c9" }}
    >
      <div className="navigation ">
        <div
          className="flex justify-between w-full gap-[15px] items-center icons"
          style={{ padding: "8px 16px" }}
        >
          <Home onClick={() => nav("/home")} />
          <Search onClick={() => nav("/search")} />
          <Add />
          <Video onClick={() => nav("/explore")} />
          <Avatar
            className="cursor-pointer"
            src={userSelector.image_url}
            maxW={"24px"}
            maxH={"24px"}
            onClick={() => nav("/profile")}
          />
        </div>
      </div>
    </div>
  );
};
