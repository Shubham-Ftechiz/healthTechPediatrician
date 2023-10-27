import React, { useState, useEffect } from "react";
import "./dashboard.scss";
import standard from "../../images/standard.svg";
import sicon from "../../images/s_icon.png";
import calender from "../../images/calender.svg";
import message from "../../images/message.svg";
import clock from "../../images/clock.svg";
import settings from "../../images/setting.svg";
import logout from "../../images/logout.svg";
import windowicon from "../../images/windowicon.png";
import { Button, Drawer, Radio, Space } from 'antd';


const LeftPanel = () => {
  const [colourIcon, setColourSicon] = useState(true);

  const [colourCalender, setColourCalender] = useState(false);

  const [colourMessage, setColourMessage] = useState(false);
  const [colourClock, setColourClock] = useState(false);

  const [colourSettings, setColourSettings] = useState(false);
  const [colourLogout, setColourLogout] = useState(false);
  const [showMenu, setShowMenu] = useState(window.innerWidth > 996);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  const handleColourSIcon = () => {
    setColourSicon(!colourIcon);
    if (colourIcon === false) {
      setColourCalender(false);
      setColourMessage(false);
      setColourClock(false);
      setColourSettings(false);
      setColourLogout(false);
    }
  };

  const handleColourCalender = () => {
    setColourCalender(!colourCalender);
    if (colourCalender === false) {
      setColourSicon(false);
      setColourMessage(false);
      setColourClock(false);
      setColourSettings(false);
      setColourLogout(false);
    }
  };

  const handleColourMessage = () => {
    setColourMessage(!colourMessage);
    if (colourMessage === false) {
      setColourCalender(false);
      setColourSicon(false);
      setColourClock(false);
      setColourSettings(false);
      setColourLogout(false);
    }
  };

  const handleColourClock = () => {
    setColourClock(!colourClock);
    if (colourClock === false) {
      setColourSicon(false);
      setColourCalender(false);
      setColourMessage(false);
      setColourSettings(false);
      setColourLogout(false);
    }
  };

  const handleColourSettings = () => {
    setColourSettings(!colourSettings);
    if (colourSettings === false) {
      setColourSicon(false);
      setColourCalender(false);
      setColourMessage(false);
      setColourClock(false);
      setColourLogout(false);
    }
  };

  const handleColourLogout = () => {
    setColourLogout(!colourLogout);
    if (colourLogout === false) {
      setColourSicon(false);
      setColourCalender(false);
      setColourMessage(false);
      setColourClock(false);
      setColourSettings(false);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth > 996);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={showMenu ? "options" : "optionsDrawer"}>
      <div id="hamburgerIcon" onClick={showDrawer} style={{margin:"1rem"}}>
        <div className="hamburger-bar" />
        <div className="hamburger-bar" />
        <div className="hamburger-bar" />
      </div>

      {showMenu && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: ".5rem" }}>
          <div id={showMenu ? "iconStandard" : "hideIconStandard"}>
            <img src={standard} alt="image" />
          </div>
      </div>
      )}

      <div className="alignicons">
      <div className="subIcon">
        <Drawer
          title=""
          placement={"left"}
          closable={false}
          onClose={onClose}
          open={open}
          key={"left"}
          width={"auto"}
          className="alignDrawer"
            >
              {/* Standard Icon */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: ".5rem" }}>
              <div id="iconStandard">
                <img src={standard} alt="image" />
              </div>
            </div>
              
            {/* SIcon */}
          <div id="iconSicon" onClick={() => handleColourSIcon("sicon")}>
                <span
                  className={
                    colourIcon === true
                      ? "selecticonSIcon"
                      : "selecticonSIconNoBorder"
                  }
                >
                  <img src={windowicon} height={20} width={20} alt="image" />
                </span>
          </div>
            
            {/* Calender Icon */}
          <div
              id="iconCalender"
              onClick={() => handleColourCalender("calender")}
            >
              <span
                className={
                  colourCalender === true
                    ? "selecticonCalender"
                    : "selecticonCalenderNoBorder"
                }
              >
                <img src={calender} height={20} width={20} alt="image" />
              </span>
            </div>
            
            {/* Message Icon */}
            <div
                id="iconMessage"
                onClick={() => handleColourMessage("message")}
              >
                <span
                  className={
                    colourMessage === true
                      ? "selecticonIconMessage"
                      : "selecticonIconMessageNoBorder"
                  }
                >
                  <img src={message} height={20} width={20} alt="image" />
                </span>
            </div>
            
            {/* Clock Icon */}

            <div id="iconClock" onClick={() => handleColourClock("clock")}>
                <span
                  className={
                    colourClock === true
                      ? "selecticonIconClock"
                      : "selecticonIconClockNoBorder"
                  }
                >
                  <img src={clock} height={20} width={20} alt="image" />
                </span>
            </div>
            
            {/* Icon Setting */}
            <div
                id="iconSettings"
                onClick={() => handleColourSettings("settings")}
              >
                <span
                  className={
                    colourSettings === true
                      ? "selecticonIconSettings"
                      : "selecticonIconSettingsNoBorder"
                  }
                >
                  <img src={settings} height={20} width={20} alt="image" />
                </span>
            </div>
            
            {/* Logout Icon */}
            <div id="iconLogout" onClick={() => handleColourLogout("logout")}>
                <span
                  className={
                    colourLogout === true
                      ? "selecticonIconLogout"
                      : "selecticonIconLogoutNoBorder"
                  }
                >
                  <img src={logout} height={20} width={20} alt="image" />
                </span>
            </div>

        </Drawer>
      </div>
        
        {showMenu && (
          <div className="subIcon">
            <div id="iconSicon" onClick={() => handleColourSIcon("sicon")}>
              <span
                className={
                  colourIcon === true
                    ? "selecticonSIcon"
                    : "selecticonSIconNoBorder"
                }
              >
                <img src={windowicon} height={20} width={20} alt="image" />
              </span>
            </div>

            <div
              id="iconCalender"
              onClick={() => handleColourCalender("calender")}
            >
              <span
                className={
                  colourCalender === true
                    ? "selecticonCalender"
                    : "selecticonCalenderNoBorder"
                }
              >
                <img src={calender} height={20} width={20} alt="image" />
              </span>
            </div>

            <div
              id="iconMessage"
              onClick={() => handleColourMessage("message")}
            >
              <span
                className={
                  colourMessage === true
                    ? "selecticonIconMessage"
                    : "selecticonIconMessageNoBorder"
                }
              >
                <img src={message} height={20} width={20} alt="image" />
              </span>
            </div>

            <div id="iconClock" onClick={() => handleColourClock("clock")}>
              <span
                className={
                  colourClock === true
                    ? "selecticonIconClock"
                    : "selecticonIconClockNoBorder"
                }
              >
                <img src={clock} height={20} width={20} alt="image" />
              </span>
            </div>

            <div
              id="iconSettings"
              onClick={() => handleColourSettings("settings")}
            >
              <span
                className={
                  colourSettings === true
                    ? "selecticonIconSettings"
                    : "selecticonIconSettingsNoBorder"
                }
              >
                <img src={settings} height={20} width={20} alt="image" />
              </span>
            </div>

            <div id="iconLogout" onClick={() => handleColourLogout("logout")}>
              <span
                className={
                  colourLogout === true
                    ? "selecticonIconLogout"
                    : "selecticonIconLogoutNoBorder"
                }
              >
                <img src={logout} height={20} width={20} alt="image" />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftPanel;
