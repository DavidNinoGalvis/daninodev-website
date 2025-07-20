'use client';

import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Watcha',
    description:
      'Web app integrada con la API de TMDb para explorar películas y series. Permite ver títulos en tendencia, detalles y más.',
    image: '/projects/watcha.png',
    tech: ['TS', 'Next', 'Tailwind', 'MongoDB'],
    github: 'https://github.com/tuusuario/watcha',
    demo: 'https://watcha-app.vercel.app/',
  },
  {
    title: 'Piucture',
    description:
      'Galería de imágenes usando la API de Pexels. Permite buscar, guardar en favoritos y descargar fotos con estilo moderno.',
    image: '/projects/piucture.png',
    tech: ['TS', 'React', 'Tailwind'],
    github: 'https://github.com/tuusuario/piucture',
    demo: 'https://piucture.vercel.app/',
  },
  {
    title: 'Flare (In progress)',
    description:
      'App de chat en tiempo real usando WebSockets y rooms personalizados. Frontend interactivo, backend escalable.',
    image: '/projects/flare.png',
    tech: ['TS', 'Next', 'Express', 'Socket.io'],
    github: 'https://github.com/tuusuario/flare',
    demo: '',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full px-6 md:px-20 py-20 bg-[#121212] text-white">
      <div className="mb-12">
        <p className="text-sm text-gray-400">Projects</p>
        <h2 className="text-4xl font-bold">What have I built?</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1c1c1c] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Imagen */}
            <div className="w-full h-48 relative">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>

            {/* Texto */}
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {project.title.includes('progress') && (
                  <span className="text-xs bg-yellow-600/80 text-white px-2 py-1 rounded-full">In progress</span>
                )}
              </div>

              <p className="text-gray-300 text-sm">{project.description}</p>

              {/* Tecnologías */}
              <div className="flex gap-2 flex-wrap mt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#581BB7]/20 text-[#581BB7] px-2 py-1 rounded-full font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex items-center justify-start gap-4 mt-4 text-white">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="hover:text-[#581BB7] transition" />
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} className="hover:text-[#581BB7] transition" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
