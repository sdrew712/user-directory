import React from "react";

const BottomNav = () => {
  return (
    <nav>
      <span> &lt; Previous </span>
      <span>
        <button>Edit</button>
        <button>Delete</button>
        <button>New</button>
      </span>
      <span>Next &gt;</span>
    </nav>
  );
};

export default BottomNav;
