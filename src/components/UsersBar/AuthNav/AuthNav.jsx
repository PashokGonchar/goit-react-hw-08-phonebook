import { NavLink } from "react-router-dom";
import NavButton from "../NavButton/NavButton";

export default function AuthNav() {
    return (
      <nav>
        <NavButton component={NavLink} to="register">
          Register
        </NavButton>
        <NavButton component={NavLink} to="login">
          LogIn
        </NavButton>
      </nav>
    );
}