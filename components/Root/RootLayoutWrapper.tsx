import React from "react";

export default function RootLayoutWrapper({children} : {
  children: React.ReactNode
}) {
  return (
      <div className="flex flex-col items-center w-full max-w-3xl sm:max-w-4xl">
        {children}
      </div>
  );
}