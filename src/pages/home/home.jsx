import { useSelector } from "react-redux";
import { PostCard } from "../../components/post/post-card";
import { NavTemplate } from "../../components/template/template";
import { Stories } from "../../components/story/story";
export const HomePage = () => {
  const userSelector = useSelector((state) => state.auth);
  return (
    <>
      <NavTemplate>
        <Stories />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </NavTemplate>
    </>
  );
};
