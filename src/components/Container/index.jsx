import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import ThemeButton from "../ThemeButton";
import Header from "../Header";
import Insert from "../Insert";
import Todos from "../Todos";
import Footer from "../Footer";

function Container() {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "#fff" ? "light" : "pastel"}`}>
      <div className="Container">
        <ThemeButton />
        <Header />
        <Insert />
        <Todos />
        <Footer />
      </div>
    </div>
  );
}

export default Container;
