import React from "react";
import Head from "next/head";
import NavBar from "../navBar/NavBar";

interface IProps {
  children: React.ReactNode;
}

export default function layout({ children }: IProps) {
  return (
    <div className="layout">
      <Head>
        <title>Surf camp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="flex flex-col w-full min-h-screen bg-blue-300 ">
        {children}
      </div>
    </div>
  );
}
