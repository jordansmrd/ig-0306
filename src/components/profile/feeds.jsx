import React from "react";
import { ReactComponent as Tagged } from "../../assets/icons/tagged.svg";
import { ReactComponent as Reels } from "../../assets/icons/reels.svg";
import { ReactComponent as Post } from "../../assets/icons/post.svg";

const Feed = ({ data = [] }) => {
  return (
    <div className="feed max-container">
      {data.map((picture) => (
        <img src={picture} alt="" />
      ))}
    </div>
  );
};

const ProfileMenu = () => {
  return (
    <div className="center profile-menu max-container border-top">
      <a className="margin-r-60">
        <Post />
        <span>posts</span>
      </a>
      <a className="margin-r-60">
        <Reels />
        <span>reels</span>
      </a>
      <a>
        <Tagged />
        <span>tagged</span>
      </a>
    </div>
  );
};

export { Feed, ProfileMenu };
