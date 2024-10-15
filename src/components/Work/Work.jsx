import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

function Work() {
  const [activeCardId, setActiveCardId] = useState(null);

  const projects = [
    {
      id: 0,
      name: 'Ecommerce Website',
      description: 'An ecommerce platform for online shopping with integrated payment gateway.',
      url: 'https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/ecommerce3-1.jpg',
      link: 'https://e-shop-ocmy-git-main-mohit914908s-projects.vercel.app/',
    },
    {
      id: 1,
      name: 'Chatbot',
      description: 'it was a clone of chatbot from google called gimini where i have simply used the api for getting results',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJX_jl_Y5gVgbXWb6jo-kIMzmRAGOB53g75A&s',
      link: 'https://chatbot-mohit914908s-projects.vercel.app/',
    },
    {
      id: 2,
      name: 'Brain Tumour Detection',
      description: 'Machine learning model to detect brain tumours using MRI scan images.',
      url: 'https://media.post.rvohealth.io/wp-content/uploads/2020/07/nervous2-30.jpg',
      link: 'https://github.com/MOHIT914908/Comparitive-Analysis-Brain-Tumor-Detection',
    },
  ];

  return (
    <div className="w-full min-h-[100vh] p-8 py-12 bg-gradient-to-br from-gray-900 to-black flex flex-col items-center" id="projects">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-100 tracking-wide hover:underline hover:decoration-blue-500 transition-all duration-300">
          My Projects
        </h1>
      </div>

      {/* Subheading */}
      <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl">
        I've built various web development projects ranging from ecommerce platforms to machine learning applications, demonstrating my skills in frontend and backend technologies.
      </p>

      {/* Project Cards */}
      <div className="flex flex-wrap gap-6 justify-center" data-aos="fade-right">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            Id={project.id}
            name={project.name}
            description={project.description}
            activeCardId={activeCardId}
            setActiveCardId={setActiveCardId}
            url={project.url}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
