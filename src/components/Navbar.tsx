import { getAuthSession } from "@/lib/nextauth";
import Link from "next/link";
import React from "react";
import { json } from "stream/consumers";
import SignInButton from "./SignInButton";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();
  return (
    <div className=" fixed inset-x-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2">
      <div className=" flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        <Link href={"/"} className=" flex items-center gap-2">
          <p
            className=" rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all 
          hover:-translate-y-[2px] md:block dark:border-white"
          >
            Quizme-KH
          </p>
        </Link>
        <div className=" flex items-center">
          {session?.user ? (
            <h1>welcome {session.user.name}</h1>
          ) : (
            <SignInButton text="Sign in" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
