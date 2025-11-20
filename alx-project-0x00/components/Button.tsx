import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ styles }) => {
  return (
    <button className={`px-4 py-2 bg-blue-500 text-white ${styles}`}>
      Click Me
    </button>
  );
};

export default Button;