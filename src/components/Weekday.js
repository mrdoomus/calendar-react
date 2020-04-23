import React from "react";

//import "./styles/calendar.css";

function Weekday({ label, title }) {
  return <th aria-label={label}>{title}</th>;
}

export default Weekday;
