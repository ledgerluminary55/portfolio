"use client";
import { Logo } from "./Logo";
import { Nav } from "../../components/ui/Nav";
import { Description } from "./Description";
import { LogoImage } from "./LogoImage";
import { Bottom } from "./Bottom";

export const Home = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full mt-5 lg:h-screen bg-gradient-to-b from-black via-blue-800/10 to-black ">
      <Logo />
      <div className="my-8">
        <Nav nav="Home" />
      </div>
      <div className=" mx-auto ">
        <LogoImage />
      </div>
      <div className="max-w-screen-xl my-16 text-center animate-fade-in">
        <Description />
        <Bottom />
      </div>
    </div>
  );
};
