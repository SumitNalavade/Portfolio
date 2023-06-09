import React from "react";

import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="p-4 flex justify-between flex-wrap mx-auto max-w-[1400px] h-[75vh]">
        {children}
      </div>
    </>
  );
};

export default Layout;
