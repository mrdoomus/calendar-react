import React, { Component } from "react";

function Day({ fullDate }) {
  if (fullDate == null) {
    return <th />;
  }
  const date = fullDate.getDate();
  return (
    <th>
      <button>{date}</button>
    </th>
  );
}

export default Day;
