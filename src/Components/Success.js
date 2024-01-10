import React from "react";

const Success = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-[#eee]">
      {" "}
      <svg
        class="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        {" "}
        <circle
          class="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />{" "}
        <path
          class="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
      <h2 className="mt-4 text-2xl text-[#282c3f] font-bold tracking-tight">Order Placed</h2>
    </div>
  );
};

export default Success;
