import Image from "next/image";
import { Logo, Nav } from "../../components/ui";
import { ServiceList } from "../../features/services/index";
import { Footer } from "../../components/ui/Footer";
import Header from "../../components/layouts/Header";

export default function Projects() {
  return (
    <div className=" w-full bg-gradient-to-b from-black via-blue-800/10 to-black ">
      <div className="max-w-screen-xl w-full mx-auto">
        <Header />
        <div className="max-w-screen-xl my-16  animate-fade-in  mx-8">
          <ServiceList />
          <Footer />
        </div>
      </div>
    </div>
  );
}
