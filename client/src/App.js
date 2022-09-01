import "./App.css";
import textCursor from "./assets/cursors/Cyan_Text.cur";
import helpCursor from "./assets/cursors/Cyan_Help.cur";
import linkCursor from "./assets/cursors/Cyan_Link.cur";
import precisionCursor from "./assets/cursors/Cyan_Precision.cur";
import unavailableCursor from "./assets/cursors/Cyan_Unavailable.cur";
import vertResizeCursor from "./assets/cursors/Cyan_Vertical_Resize.cur";
import horResizeCursor from "./assets/cursors/Cyan_Horizontal_Resize.cur";
import diagResizeCursor1 from "./assets/cursors/Cyan_Diagonal_Resize_1.cur";
import diagResizeCursor2 from "./assets/cursors/Cyan_Diagonal_Resize_2.cur";
import Welcome from "./cards/Welcome/Welcome";
import cursor from "./assets/cursors/Cyan_Normal.cur";
import Searchbar from "./components/Searchbar/Searchbar";
import Left from "./cards/Left/Left";
import Right from "./cards/Right/Right";

function App() {
  return (
    <div className="App" style={{ cursor: `url(${cursor}),auto` }}>
      <div className="container">
        <Searchbar />
        <div id="LeftRight">
          <Left />
          <Right />
        </div>

        {/* <Welcome /> */}
        {/* <Searchbar /> */}
      </div>
      {/* <div className="CursorButtons">
        <button style={{ cursor: `url(${cursor}),auto` }}>Normal</button>
        <button style={{ cursor: `url(${textCursor}),auto` }}>Text</button>

        <button style={{ cursor: `url(${helpCursor}),auto` }}>Help</button>
        <button style={{ cursor: `url(${linkCursor}),auto` }}>Link</button>

        <button style={{ cursor: `url(${precisionCursor}),auto` }}>
          Precision
        </button>
        <button style={{ cursor: `url(${unavailableCursor}),auto` }}>
          Unavailable
        </button>
        <button style={{ cursor: `url(${vertResizeCursor}),auto` }}>
          Vert Resize
        </button>
        <button style={{ cursor: `url(${horResizeCursor}),auto` }}>
          Hor Resize
        </button>
        <button style={{ cursor: `url(${diagResizeCursor1}),auto` }}>
          Diag Resize1
        </button>
        <button style={{ cursor: `url(${diagResizeCursor2}),auto` }}>
          Diag Resize2
        </button>
        <hr></hr>
      </div> */}
    </div>
  );
}

export default App;
