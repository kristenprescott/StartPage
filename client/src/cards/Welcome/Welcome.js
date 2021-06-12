import "./Welcome.css";
import DateTime from "../../components/DateTime/DateTime";
import Weather from "../../components/Weather/Weather";

export default function Welcome() {
  //
  return (
    <div className="Welcome">
      <DateTime />
      <Weather />
    </div>
  );
}
