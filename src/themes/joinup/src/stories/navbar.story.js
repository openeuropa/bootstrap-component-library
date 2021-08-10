import navbarAnon from "../templates/bcl-navbar/navbar--anonymous.html.twig";
import navbarLI from "../templates/bcl-navbar/navbar--logged-in.html.twig";

export default {
  title: "Components/Navbar",
};

export const Anonymous = () => navbarAnon();
export const LoggedIn = () => navbarLI();
