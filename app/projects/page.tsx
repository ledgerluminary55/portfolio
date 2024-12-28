import { ProjectList } from "../../features/projects/index";
import { Footer } from "../../components/ui/Footer";
import Header from "../../components/layouts/Header";

export default function Projects() {
  return (
    <div className=" w-full bg-gradient-to-b from-black via-blue-800/10 to-black ">
      <div className="max-w-screen-xl w-full  mx-auto">
        <Header />
        <div className="max-w-screen-xl my-16  animate-fade-in ">
          <div className="my-8 mx-8">
            <ProjectList />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
