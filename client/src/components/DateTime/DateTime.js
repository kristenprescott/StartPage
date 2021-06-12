import "./DateTime.css";
import { useState, useEffect } from "react";

export default function DateTime() {
  // const [greeting, setGreeting] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [hrs, setHrs] = useState("");
  const [mins, setMins] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      let date = new Date();

      const timeElapsed = Date.now();
      const day = new Date(timeElapsed);
      const today = day.toDateString();
      // const today = day.toDateString().split(" ").join(", ");
      // console.log("today: ", today);

      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      let time = hours + ":" + minutes + " " + ampm;

      // let greetSuffix;
      // if (ampm === "am") {
      //   const greetSuffix = "morning";
      //   // console.log("morning: ", ampm);
      // }
      // if (ampm == "pm") {
      //   const greetSuffix = "evening";
      //   // console.log("evening: ", ampm);
      // }

      // setGreeting(greetSuffix);
      setDate(today);
      setTime(time);

      setHrs(hours);
      setMins(minutes);
      setTimeout(updateDateTime, 1000);
    };
    // console.log(greeting);
    updateDateTime();
  }, []);

  return (
    <div className="Component DateTime">
      {/* <div>Good {greeting}, Kristen.</div> */}
      <div>Welcome, Kristen.</div>
      <div>Today is {date}</div>
      {/* <div>{time}</div> */}
      <div>
        {hrs}
        <span>:</span>
        {mins}
      </div>
    </div>
  );
}
