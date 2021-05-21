import { useState } from "react";

export default function Navigator({ index, title, onClick}) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div id="navigator"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
      style={{
        display: "flex",
        marginTop: 40,
        alignItems: "center",
        cursor: "pointer",
      }}>
      <span style={{ color: isHovering ? "#fff" : "#ccc", fontSize: "0.8em" }}>
        {index}
      </span>
      <div
        style={{
          height: "2px",
          width: isHovering ? 70 : 30,
          backgroundColor: isHovering ? "#fff" : "#ccc",
          display: "inline-block",
          marginLeft: 20,
        }}
      ></div>
      <span style={{ color: isHovering ? "#fff" : "#ccc", marginLeft: 20 }}>
        {title}
      </span>
    </div>
  );
}