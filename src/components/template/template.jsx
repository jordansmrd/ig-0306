import { Footer } from "../navigation/footer";
import { Navbar } from "../navigation/navbar";
import { ProfileBar } from "../navigation/profile";
import { SearchBar } from "../navigation/search";

export const NavTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center pb-10">
        <div className="mobile">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export const Template = ({ children }) => {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="mobile">{children}</div>
      </div>
    </>
  );
};

export const SearchTemplate = ({ children }) => {
  return (
    <>
      <SearchBar />
      <div className="flex justify-center pb-10">
        <div className="mobile">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export const ProfileTemplate = ({ children }) => {
  return (
    <>
      <ProfileBar />
      <div className="flex justify-center pb-10">
        <div className="mobile">{children}</div>
      </div>
      <Footer />
    </>
  );
};
