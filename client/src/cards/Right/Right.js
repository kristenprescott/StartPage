import "./Right.css";
import { useState } from "react";
import DateTime from "../../components/DateTime/DateTime";
import Weather from "../../components/Weather/Weather";
import linkCur from "../../assets/cursors/Cyan_Link.cur";
import emailIcon from "../../assets/icons/email.png";
import codeIcon from "../../assets/icons/coding.png";
import newsIcon from "../../assets/icons/newspaper.png";
import keyIcon from "../../assets/icons/key.png";
// import calendarIcon from "../../assets/icons/calendar.png";
// import bookmarkIcon from "../../assets/icons/bookmark.png";
// import calcIcon from "../../assets/icons/calculator.png";

export default function Right() {
  const [state, setState] = useState(null);

  return (
    <div className="Right">
      <DateTime />
      <div className="RightRight">
        <div className="LeftRight">
          <div className="icons">
            <img
              alt="icon"
              onClick={() => {
                window.open("https://mail.google.com/mail/u/0/#inbox");
              }}
              style={{ cursor: `url(${linkCur}),auto` }}
              src={emailIcon}
            />

            <img
              alt="icon"
              onClick={() => {
                window.open("https://old.reddit.com/");
              }}
              style={{ cursor: `url(${linkCur}),auto` }}
              src={newsIcon}
            />

            <img
              alt="icon"
              onClick={() => {
                window.open("https://lastpass.com/?ac=1&lpnorefresh=1");
                // window.open("https://passwords.google.com/");
              }}
              style={{ cursor: `url(${linkCur}),auto` }}
              src={keyIcon}
            />

            {/* <img
            alt="icon"
              onClick={() => {
                window.open("");
              }}
              style={{ cursor: `url(${linkCur}),auto` }}
              src={calendarIcon}
            /> */}

            {/* <img
            alt="icon"
              onClick={() => {
                window.open("chrome://bookmarks/");
              }}
              style={{ cursor: `url(${linkCur}),auto` }}
              src={bookmarkIcon}
            /> */}

            {/* <img
            alt="icon"
              onClick={() => {
                window.open("");
              }}
              style={{ cursor: `url(${linkCur}),auto` }}
              src={calcIcon}
            /> */}

            <img
              alt="icon"
              onClick={() => {
                window.open(
                  "https://github.com/kristenprescott?tab=repositories"
                );
              }}
              style={{ cursor: `url(${linkCur}),auto` }}
              src={codeIcon}
            />

            <br></br>
            <hr></hr>
            <br></br>

            {/* <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://kpresfolio.herokuapp.com/"
              style={{ cursor: `url(${linkCur}),auto` }}
            >
              Folio
            </a> */}

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://virtual-asst.herokuapp.com/"
              style={{ cursor: `url(${linkCur}),auto` }}
            >
              <span style={{ fontSize: "12px" }}>IRIS</span>
            </a>

            {/* <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/kristen-prescott/"
              style={{ cursor: `url(${linkCur}),auto` }}
            >
              LinkedIn
            </a> */}

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/kristenprescott"
              style={{ cursor: `url(${linkCur}),auto` }}
            >
              <span style={{ fontSize: "12px" }}>Github</span>
            </a>
          </div>
        </div>
        <Weather />
      </div>
    </div>
  );
}
