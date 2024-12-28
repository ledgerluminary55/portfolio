import { Description, WhyChoose, Team } from "../../features/about";
import { Footer } from "../../components/ui/Footer";
import Header from "../../components/layouts/Header";
import { Hero } from "../../features/about/Hero";
import { Whoweare } from "../../features/about/Whoweare";

export default function About() {
  return (
    <div className=" w-full bg-gradient-to-b from-black via-blue-800/10 to-black ">
      <div className="max-w-screen-xl w-full mx-auto">
        <Header />
        <div className="max-w-screen-xl my-16  animate-fade-in mx-8 ">
          <div className="md:grid md:grid-cols-2">
            <div>
              <Hero />
            </div>
            <Description />
          </div>
        </div>
        <div className="max-w-screen-xl mt-40  animate-fade-in mx-8 ">
          <Whoweare />
          <WhyChoose />
          <Team />
          <Footer />
        </div>
      </div>
    </div>
  );
}
