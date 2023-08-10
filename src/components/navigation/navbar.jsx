import { Logo_instagram_nav, Love, Messenger } from "../../assets/icons";

export const Navbar = () => {
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
          <Logo_instagram_nav style={{ maxWidth: "122px" }} />

          <div className="flex gap-[15px] items-center icons">
            <Love />
            <Messenger />
          </div>
        </div>
      </div>
    </div>
  );
};
