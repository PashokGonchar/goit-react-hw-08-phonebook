import { NavLink } from "react-router-dom";
import NavButton from "../NavButton/NavButton";
import { StyledAuthNav } from "./AuthNav.styled";

export default function AuthNav() {
    return (
      <StyledAuthNav>
        <NavButton component={NavLink} to="register">
          Register
        </NavButton>
        <NavButton component={NavLink} to="login">
          LogIn
        </NavButton>
      </StyledAuthNav>
    );
}