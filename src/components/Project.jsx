import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  github,
  image,
  tags = [],
  setPreview,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>

          <p className="mt-2 text-sand max-w-xl">{description}</p>

          <div className="flex flex-wrap gap-4 mt-3 text-sm text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="/assets/arrow-right.svg" className="w-5" alt="Open project" />
        </button>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {isOpen && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          github={github}
          closeModal={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Project;