"use client";
import { projectData } from "../../utils/contents/projects";
import { motion } from "framer-motion";
import { fadeIn } from "../../styles/animations";
import { ProjectCard } from "../../components/ui/ProjectCard";
export const ProjectList = () => {
  return (
    <motion.section variants={fadeIn(1.5)} initial="hidden" animate="show">
      <div className="sm:grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4">
        {projectData.map((item, i) => {
          return (
            <ProjectCard
              title={item.title}
              desc={item.desc}
              img={item.img}
              tags={item.tags}
              repo={item.repo}
              live={item.live}
              key={i}
            />
          );
        })}
      </div>
    </motion.section>
  );
};
