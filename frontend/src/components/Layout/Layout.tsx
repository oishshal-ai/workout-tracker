import Navbar from "./Navbar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }:LayoutProps) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <footer>
        <p>Workout Tracker © 2025</p>
      </footer>
    </div>
  );
}