import React from "react";
import { Link } from "react-router-dom";

export function Logo({ className = "h-10 w-auto" }) {
  return (
    <Link
      to="/"
      data-testid="brand-logo"
      className="flex items-center group"
      aria-label="Shobha Healthcare"
    >
      <img
        src="/brand/shologo.svg"
        alt="Shobha Healthcare"
        className={`${className} transition-transform group-hover:scale-105`}
      />
    </Link>
  );
}
