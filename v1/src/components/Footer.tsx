"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="w-full bg-white z-50 p-4 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100 absolute bottom-0">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; Built by Dilip Patel
    </div>
  );
};
