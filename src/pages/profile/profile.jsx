import { useState } from "react";
import { Post, Reels, Suggestion, Tagged } from "../../assets/icons";
import { PostGrid } from "../../components/post/post-grid";
import { EditProfile } from "../../components/profile/modal-profile";
import { ProfileStories, StoryCard } from "../../components/story/story";
import { ProfileTemplate } from "../../components/template/template";
import { useSelector } from "react-redux";
export const ProfilePage = () => {
  const posts = [
    {
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg",
    },
    {
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg",
    },
    {
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg",
    },
    {
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg",
    },
    {
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg",
    },
    {
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const userSelector = useSelector((state) => state.auth);
  return (
    <>
      <EditProfile isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className={`transition-all ${isOpen ? "hidden" : null}`}>
        <ProfileTemplate>
          {/* //following followers */}
          <div className="flex items-center justify-between w-full">
            <div className="mx-4">
              <StoryCard image_url={userSelector.image_url} add={true} />
            </div>
            <div className="flex p-2 gap-6 text-center mx-5">
              <div>
                <b>0</b>
                <div className=" text-sm">Posts</div>
              </div>
              <div>
                <b>591</b>
                <div className=" text-sm">Followers</div>
              </div>
              <div>
                <b>572</b>
                <div className=" text-sm">Following</div>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="mx-4">
              {/* username */}
              <span className="font-semibold">{userSelector.fullname}</span>
              {/* bio */}
              <div className="">{userSelector.bio}</div>
              {/* buttons */}
              <div className="profile-button py-2 text-sm">
                <button className=" grow" onClick={() => setIsOpen(true)}>
                  Edit profile
                </button>
                <button className=" grow">Share profile</button>
                <button>
                  <Suggestion fill="black" color="black" />
                </button>
              </div>
            </div>
            {/* story */}
            <ProfileStories />

            <div className="grid grid-cols-3 justify-items-center icons pb-[1px]">
              <div className="w-full flex justify-center py-2 cursor-pointer border-bottom">
                <Post />
              </div>
              <div className="w-full flex justify-center py-2 cursor-pointer">
                <Reels />
              </div>
              <div className="w-full flex justify-center py-2 cursor-pointer">
                <Tagged />
              </div>
            </div>
            <PostGrid posts={posts} />
          </div>
        </ProfileTemplate>
      </div>
    </>
  );
};
