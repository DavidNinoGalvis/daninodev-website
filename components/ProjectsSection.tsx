import type { FC } from 'react';
import ProjectsClient from './ProjectsClient';

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

const webProjects: Project[] = [
  {
    title: 'Watcha',
    description:
      'Web app integrada con la API de TMDb para explorar películas y series. Permite ver títulos en tendencia, detalles completos, recomendaciones y más.',
    image: '/projects/watcha.png',
    tech: ['TS', 'Next', 'Tailwind', 'MongoDB'],
    github: 'https://github.com/tuusuario/watcha',
    demo: 'https://watcha-app.vercel.app/',
    status: 'Completed',
  },
  {
    title: 'Piucture',
    description:
      'Galería de imágenes moderna usando la API de Pexels. Permite buscar, guardar en favoritos y descargar fotos con interfaz responsiva.',
    image: '/projects/piucture.png',
    tech: ['TS', 'React', 'Tailwind'],
    github: 'https://github.com/tuusuario/piucture',
    demo: 'https://piucture.vercel.app/',
    status: 'Completed',
  },
  {
    title: 'Flare Chat',
    description:
      'Aplicación de chat en tiempo real usando WebSockets y rooms personalizados. Frontend interactivo con backend escalable y autenticación.',
    image: '/projects/flare.png',
    tech: ['TS', 'Next', 'Express', 'Socket.io', 'Node.js'],
    github: 'https://github.com/tuusuario/flare',
    demo: '',
    status: 'In progress',
  },
];

const designProjects: Project[] = [
  {
    title: 'Brand Identity - TechStart',
    description:
      'Identidad visual completa para startup tecnológica. Incluye logotipo, paleta de colores, tipografía y aplicaciones en diferentes medios.',
    image: '/projects/design-1.jpg',
    tech: ['Illustrator', 'Photoshop', 'Figma'],
    behance: 'https://behance.net/tuusuario/project-1',
    dribbble: 'https://dribbble.com/tuusuario/project-1',
    status: 'Completed',
  },
  {
    title: 'Marketing Campaign - EcoLife',
    description:
      'Campaña publicitaria integral para marca ecológica. Diseño de posts para redes sociales, stories, banners web y material impreso.',
    image: '/projects/design-2.jpg',
    tech: ['Photoshop', 'InDesign', 'After Effects'],
    behance: 'https://behance.net/tuusuario/project-2',
    dribbble: '',
    status: 'Completed',
  },
  {
    title: 'UI/UX Design - FoodApp',
    description:
      'Diseño completo de interfaz y experiencia de usuario para aplicación de delivery de comida. Incluye prototipado interactivo y testing.',
    image: '/projects/design-3.jpg',
    tech: ['Figma', 'Principle', 'Photoshop'],
    behance: 'https://behance.net/tuusuario/project-3',
    dribbble: 'https://dribbble.com/tuusuario/project-3',
    status: 'Completed',
  },
];

const ProjectsSection: FC = () => {
  return (
    <ProjectsClient webProjects={webProjects} designProjects={designProjects} />
  );
};

export default ProjectsSection;
