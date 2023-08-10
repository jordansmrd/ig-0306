import { LoginPage } from "../pages/auth/login";
import { RegisterPage } from "../pages/auth/register";
import { RequiredPage } from "../pages/auth/required";
import { ExplorePage } from "../pages/explore/explore";
import { HomePage } from "../pages/home/home";
import { ProfilePage } from "../pages/profile/profile";
import { Redirect } from "../pages/redirect/redirect";
import { SearchPage } from "../pages/search/search";
import { ProtectedPage } from "./protected-page";

class RouteClass {
  constructor(
    path,
    element,
    needLogin = false,
    guestOnly = false,
    required = false
  ) {
    this.path = path;
    this.element = (
      <ProtectedPage
        needLogin={needLogin}
        guestOnly={guestOnly}
        required={required}
      >
        {element}
      </ProtectedPage>
    );
  }
}

export const routes = [
  new RouteClass("login", <LoginPage />, false, true),
  new RouteClass("register", <RegisterPage />, false, true),
  new RouteClass("home", <HomePage />, true, false, true),
  new RouteClass("required", <RequiredPage />, true),
  new RouteClass("search", <SearchPage />, true, false, true),
  new RouteClass("profile", <ProfilePage />, true, false, true),

  new RouteClass("*", <Redirect />, false, true),
];
