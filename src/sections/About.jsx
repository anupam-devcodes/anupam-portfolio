import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="/assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt="Coding workspace"
          />

          <div className="z-10">
            <p className="headtext">Hi, I'm Anupam Choubey</p>
            <p className="subtext">
              Final-year ECE undergraduate focused on building full-stack web
              applications, backend APIs, and data-driven products.
            </p>
          </div>

          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
<div className="grid-default-color grid-2">
  <div
    ref={grid2Container}
    className="flex items-center justify-center w-full h-full"
  >
    <p className="flex items-end text-4xl md:text-5xl text-gray-500">
      FOCUSED ON
    </p>

    <Card
      style={{ rotate: "-18deg", top: "18%", left: "12%" }}
      text="Full-Stack Development"
      containerRef={grid2Container}
    />

    <Card
      style={{ rotate: "12deg", top: "25%", left: "52%" }}
      text="Backend APIs"
      containerRef={grid2Container}
    />

    <Card
      style={{ rotate: "-10deg", top: "58%", left: "18%" }}
      text="Data Analytics"
      containerRef={grid2Container}
    />

    <Card
      style={{ rotate: "16deg", top: "58%", left: "58%" }}
      text="AI Tools"
      containerRef={grid2Container}
    />
  </div>
</div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Location</p>
            <p className="subtext">
              Based in India and open to software development opportunities.
            </p>
          </div>

          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Have a project, role, or collaboration in mind?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I work with JavaScript, React, Node.js, Express, MongoDB, SQL,
              Python, Tailwind CSS, and analytics tools like Pandas and Power BI.
            </p>
          </div>

          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;