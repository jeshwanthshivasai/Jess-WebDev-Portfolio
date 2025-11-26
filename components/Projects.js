import React from "react";
import Link from "next/link";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              key={proj.id || idx}
              id={proj.id}
              title={proj.title}
              category={proj.category}
              description={proj.description}
              imgUrl={proj.imgUrl}
              tags={proj.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ id, title, category, description, imgUrl, tags }) => {
  return (
    <Link href={`/projects/${id}`} className="w-full block shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800 hover:shadow-3xl transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt={title}
            className="transition-transform duration-500 ease-out object-cover h-full w-full hover:scale-110"
          />
        </div>
      </div>
      <div className="p-6 bg-white dark:bg-gray-800">
        <div className="flex items-center gap-2 mb-3">
          <svg
            className="w-5 h-5 text-gray-600 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {category}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags && tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
