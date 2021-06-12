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
              onClick={() => {
                window.open("https://mail.google.com/mail/u/0/#inbox");
              }}
              style={{ cursor: `url(${linkCur}),auto` }}
              src={emailIcon}
            />

            <img
              onClick={() => {
                window.open("https://old.reddit.com/");
              }}
              style={{ cursor: `url(${linkCur}),auto` }}
              src={newsIcon}
            />

            <img
              onClick={() => {
                window.open("https://passwords.google.com/");
              }}
              style={{ cursor: `url(${linkCur}),auto` }}
              src={keyIcon}
            />

            {/* <img
              onClick={() => {
                window.open("");
              }}
              style={{ cursor: `url(${linkCur}),auto` }}
              src={calendarIcon}
            /> */}

            {/* <img
              onClick={() => {
                window.open("chrome://bookmarks/");
              }}
              style={{ cursor: `url(${linkCur}),auto` }}
              src={bookmarkIcon}
            /> */}

            {/* <img
              onClick={() => {
                window.open("");
              }}
              style={{ cursor: `url(${linkCur}),auto` }}
              src={calcIcon}
            /> */}

            <img
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

            <a
              onClick={() => {
                window.open("https://kpresfolio.herokuapp.com/");
              }}
              style={{ cursor: `url(${linkCur}),auto` }}
              src="https://kpresfolio.herokuapp.com/"
            >
              Folio
            </a>

            <a
              onClick={() => {
                window.open("https://virtual-asst.herokuapp.com/");
              }}
              style={{ cursor: `url(${linkCur}),auto` }}
              src="https://virtual-asst.herokuapp.com/"
            >
              IRIS
            </a>

            <a
              onClick={() => {
                window.open("https://www.linkedin.com/in/kristen-prescott/");
              }}
              style={{ cursor: `url(${linkCur}),auto` }}
              src="https://www.linkedin.com/in/kristen-prescott/"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <Weather />
      </div>
    </div>
  );
}
