import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function AuthNav() {
    return (
        <div>
            <Button component={NavLink} to='register'>
                Register
            </Button>
            <Button component={NavLink} to='login'>
                LogIn
            </Button>
        </div>
    )
}