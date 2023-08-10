import { Avatar, Icon } from "@chakra-ui/react";
import {
  Comment,
  FilledLove,
  Love,
  Opt_Group,
  Saved,
  Share,
} from "../../assets/icons";
import { useState } from "react";

export const PostCard = () => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <div
        className="flex justify-between w-full"
        style={{ padding: "8px 16px" }}
      >
        <div className="flex items-center gap-[5px]">
          <div style={{ padding: "3px", borderRadius: "50%", border: "none" }}>
            <Avatar
              maxW="34px"
              maxH="34px"
              objectFit={"cover"}
              className="cursor-pointer"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtULOC4udgo4v_wp7qH2byAZvz54GHGJ8Qxw&usqp=CAU"
            />
          </div>
          <b>marvel</b>
        </div>

        <div className="flex justify-center items-center">
          <Opt_Group />
        </div>
      </div>
      <img src="https://d2eehagpk5cl65.cloudfront.net/img/c800x450-w800-q80/uploads/2021/09/minisloki-800x450.jpg" />
      <div
        className="flex justify-between w-full items-center icons"
        style={{ padding: "8px 15px" }}
      >
        <div className="flex gap-[15px]">
          <Icon
            as={liked ? FilledLove : Love}
            onClick={() => setLiked(!liked)}
          ></Icon>

          <Comment />
          <Share />
        </div>
        <div className="flex justify-center items-center">
          <Saved />
        </div>
      </div>
      <div className="w-full " style={{ padding: "0px 15px 5px 15px" }}>
        Liked by <b>thekamraan</b> and <b>905,235</b> others
      </div>
      <div className="w-full" style={{ padding: "0px 15px 5px 15px" }}>
        <b>marvel</b> Start your countdown to the glorious arrival of Marvel
        Studios' #Loki{" "}
        <span className=" text-gray-400">
          ...<span className="cursor-pointer">more</span>
        </span>
      </div>
      <div
        className="w-full text-gray-400 cursor-pointer"
        style={{ padding: "0px 15px 5px 15px" }}
      >
        View all 103 comments
      </div>
      <div
        className="w-full text-gray-400"
        style={{
          padding: "0px 15px 5px 15px",
        }}
      >
        <input
          style={{
            borderBottom: "1px solid #E4E4E4",
            paddingBottom: "15px",
          }}
          placeholder="Add a comment..."
          className="w-full text-black"
        />
      </div>
    </>
  );
};
