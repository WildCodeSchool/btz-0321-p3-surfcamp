import React from "react";
import Head from "next/head";
import NavBar from "../navBar/NavBar";
interface IProps {
  children: React.ReactNode;
  page?: string;
}

export default function layout({ page, children }: IProps) {
  return (
    <div className="layout">
      <Head>
        <title>{page}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <div className="flex flex-col w-full min-h-screen bg-blue-300 ">
        {children}
      </div>
    </div>
  );
}
