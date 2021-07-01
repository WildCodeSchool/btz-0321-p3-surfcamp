import React from "react";
import { useEffect } from "react";
import Head from "next/head";
import Navbar from "../navBar/NavBar";
import { useSelector } from "react-redux";
import router from "next/router";
interface IProps {
  children: React.ReactNode;
  page?: string;
}

export default function layout({ page, children }: IProps): JSX.Element {
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.id === "") {
      router.push("/login");
    }
  }, []);

  return (
    <div className="layout w-full">
      <Head>
        <title>{page}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
}
