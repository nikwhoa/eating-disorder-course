import React from "react";

function IconLoader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
        background: "none",
        WebkitAnimationPlayState: "running",
        animationPlayState: "running",
        WebkitAnimationDelay: "0s",
        animationDelay: "0s",
      }}
      width="100"
      height="100"
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <path
        fill="#586d78"
        d="M10 50a40 40 0 0080 0 40 42 0 01-80 0"
        style={{
          WebkitAnimationPlayState: "running",
          animationPlayState: "running",
          WebkitAnimationDelay: "0s",
          animationDelay: "0s",
        }}
      >
        <animateTransform
          attributeName="transform"
          dur="1.408450704225352s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 51;360 50 51"
        ></animateTransform>
      </path>
    </svg>
  );
}

export default IconLoader;