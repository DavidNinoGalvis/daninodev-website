'use client';

import React, { useEffect, useState } from 'react';
import {
  Code2,
  Palette,
  ExternalLink,
  Github as GithubIcon,
} from 'lucide-react';
import Container from './Container';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  behance?: string;
  dribbble?: string;
  status?: string;
}

interface ProjectsClientProps {
  webProjects: Project[];
  designProjects: Project[];
}

interface ProjectCardProps {
  project: Project;
  isDesign?: boolean;
}

interface SectionHeaderProps {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  delay?: number;
}

const ProjectCard = ({ project, isDesign = false }: ProjectCardProps) => {
  // Link preferente: demo > repo > behance > dribbble
  const href =
    project.demo || project.github || project.behance || project.dribbble || '';
  const isClickable = Boolean(href);

  const CardInner = (
    <>
      {/* Imagen */}
      <div className="w-full h-48 relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Texto */}
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-foreground">
            {project.title}
          </h3>
          {project.status === 'In progress' && (
            <span className="text-xs bg-yellow-600/80 text-white px-2 py-1 rounded-full">
              In progress
            </span>
          )}
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="flex gap-2 flex-wrap mt-2">
          {project.tech.map((tech: string, i: number) => (
            <span
              key={i}
              className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-full font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="flex items-center justify-start gap-4 mt-4 text-foreground">
          {isDesign ? (
            <>
              {project.behance && (
                <a
                  href={project.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  title="Ver en Behance"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Behance icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3.729-.229-3.729h-3.355v3.729zm0 1.5v3.237h3.755c2.906 0 3.618-3.289.671-3.237h-4.426z" />
                  </svg>
                </a>
              )}
              {project.dribbble && (
                <a
                  href={project.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  title="Ver en Dribbble"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Dribbble icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.628 0-12 5.373-12 12 0 6.628 5.372 12 12 12s12-5.372 12-12c0-6.627-5.372-12-12-12zm9.427 5.373c1.161 1.479 1.858 3.349 1.858 5.378 0 .339-.024.674-.069 1.002-.24-.053-2.64-.571-5.055-.252-.107-.261-.214-.523-.332-.774-.053-.107-.107-.214-.172-.321 2.641-1.080 3.770-2.619 3.770-2.033zm-9.427-3.373c2.222 0 4.254.857 5.765 2.255-.146 .128-1.348 1.348-3.770 2.033-.857-1.586-1.824-2.898-1.824-2.898-.386 .171-.771 .343-1.171 .61zm-5.765 2.255c1.511-1.398 3.543-2.255 5.765-2.255 0 0-.171 .171-1.171 .61-.857 1.586-1.824 2.898-1.824 2.898-2.422-.685-3.624-1.905-3.770-2.033-.386 .857-.771 1.824-.771 2.898 0 2.029 .697 3.899 1.858 5.378 .24 .053 2.64 .571 5.055 .252 .107 .261 .214 .523 .332 .774 .053 .107 .107 .214 .172 .321-2.641 1.080-3.770 2.619-3.770 2.033 .146-.128 1.348-1.348 3.770-2.033 .857 1.586 1.824 2.898 1.824 2.898 .386-.171 .771-.343 1.171-.61 .857-1.586 1.824-2.898 1.824-2.898 2.422 .685 3.624 1.905 3.770 2.033 .386-.857 .771-1.824 .771-2.898 0-2.029-.697-3.899-1.858-5.378z" />
                  </svg>
                </a>
              )}
            </>
          ) : (
            <>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  title="Ver código"
                  onClick={(e) => e.stopPropagation()}
                >
                  <GithubIcon size={20} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  title="Ver demo"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`group bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-purple-500/30 dark:hover:border-purple-400/30 transition-all duration-300 ${isClickable ? 'cursor-pointer' : ''}`}
      onClick={() => {
        if (href) window.open(href, '_blank', 'noopener,noreferrer');
      }}
    >
      {CardInner}
    </motion.div>
  );
};

const SectionHeader = ({
  icon: Icon,
  title,
  delay = 0,
}: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="flex items-center gap-3 mb-8"
  >
    <div className="p-2.5 rounded-lg bg-purple-900 text-white">
      <Icon size={24} />
    </div>
    <h3 className="text-2xl font-bold text-foreground">{title}</h3>
  </motion.div>
);

export default function ProjectsClient({
  webProjects,
  designProjects,
}: ProjectsClientProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  // Skeleton rápido en SSR/render inicial
  if (!isMounted) {
    return (
      <section
        id="projects"
        className="w-full py-20 bg-background text-foreground relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-600/10 dark:from-purple-400/10 dark:via-transparent dark:to-purple-500/20 pointer-events-none" />
        <Container>
          <div className="mb-16 text-center">
            <p className="text-sm text-muted-foreground font-medium tracking-wider uppercase mb-2">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 dark:from-gray-100 to-purple-600 dark:to-purple-400 bg-clip-text text-transparent">
              What have I built?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-72 rounded-xl border border-border bg-card/60 animate-pulse"
              />
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="w-full py-20 bg-background text-foreground relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-600/10 dark:from-purple-400/10 dark:via-transparent dark:to-purple-500/20 pointer-events-none" />

      {/* Floating particles */}
      <motion.div
        animate={{
          y: [0, -15, 5, 0],
          x: [0, 8, -3, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-20 w-2 h-2 bg-purple-500/40 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, 20, -8, 0],
          x: [0, -12, 6, 0],
          rotate: [0, -120, -240, -360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-40 left-16 w-3 h-3 bg-purple-600/30 rounded-full"
      />

      <Container>
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-sm text-muted-foreground font-medium tracking-wider uppercase mb-2">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 dark:from-gray-100 to-purple-600 dark:to-purple-400 bg-clip-text text-transparent">
            What have I built?
          </h2>
        </motion.div>

        {/* Web Development Section */}
        {webProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <SectionHeader icon={Code2} title="Web Development" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webProjects.map((project, index) => (
                <ProjectCard
                  key={`${project.title}-${index}`}
                  project={project}
                  isDesign={false}
                />
              ))}
            </div>
          </motion.div>
        )}

        {designProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <SectionHeader icon={Palette} title="Graphic Design" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designProjects.map((project, index) => (
                <ProjectCard
                  key={`${project.title}-${index}`}
                  project={project}
                  isDesign
                />
              ))}
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
