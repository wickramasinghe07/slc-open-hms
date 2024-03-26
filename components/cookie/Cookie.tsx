import { useState, useEffect } from "react";
import "./Cookie.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CookieIcon from '@mui/icons-material/Cookie';
import { ToggleButtonGroup, Box, ToggleButton   } from "@mui/material";

export default function Cookie() {
  const [isConsented, setIsConsented] = useState<boolean>(false);

  const setCookie = (cname: string, cvalue: string, exdays: number) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  const getCookie = (cname: string) => {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  const checkCookie = () => {
    let user = getCookie("username");
    if (user !== "") {
      console.log("Welcome again " + user);
      setIsConsented(true);
      console.log(isConsented);
    } else {
      user = prompt("Please enter your name:", "") || "";
      if (user !== "") {
        setCookie("username", user, 365);
      }
      setIsConsented(true);
      console.log(isConsented);
    }
  };

  const rejectCookie = () => {
    document.cookie = "username=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    setIsConsented(true);
    console.log(isConsented);
  };

  useEffect(() => {
    setIsConsented(false);
  }, []);

  return (
    <>
      {!isConsented && (
        <Box className="display-container">
          <div className="cookie-container">
            <div className="description">
              <CookieIcon sx={{ color: "#C7923E", marginRight: "10px" }} />
              We collect your data in order to improve your experience in the form of cookies.
              <ToggleButtonGroup color="success" sx={{ height: "30px", marginLeft: "10px" }}>
                <ToggleButton value="accept" onClick={checkCookie} color="success" sx={{ background: "#C7923E", borderRadius: "12px", color: "white" }}>
                  Accept
                  <ArrowRightAltIcon sx={{ color: "#FFFFFF", gap: "15px" }} />
                </ToggleButton>
                <ToggleButton value="reject" onClick={rejectCookie} color="error" sx={{ borderRadius: "12px", color: "black", background: "white", }} >
                  Reject
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        </Box>
      )}
    </>
  );
}