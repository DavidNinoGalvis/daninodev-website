'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Heart } from 'lucide-react';
import Container from './Container';

export default function AboutMe() {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, Next.js, TypeScript, Tailwind',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Modern interfaces, user experience',
    },
    {
      icon: Rocket,
      title: 'Backend Learning',
      description: 'Node.js, APIs, Databases',
    },
    {
      icon: Heart,
      title: 'Passion for Code',
      description: 'Self-taught, always improving',
    },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen py-20 bg-background text-foreground relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-600/10 dark:from-purple-400/10 dark:via-transparent dark:to-purple-500/20 pointer-events-none" />

      {/* Floating particles with different animations */}
      <motion.div
        animate={{
          y: [0, -20, 10, 0],
          x: [0, 10, -5, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-3 h-3 bg-purple-500/30 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, 25, -10, 0],
          x: [0, -15, 8, 0],
          rotate: [0, -120, -240, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-32 right-16 w-4 h-4 bg-purple-600/40 rounded-full"
      />

      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-2xl space-y-6 lg:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-muted-foreground font-medium tracking-wider uppercase">
                About me
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-gray-900 dark:from-gray-100 to-purple-600 dark:to-purple-400 bg-clip-text text-transparent">
                Who am I?
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                I&apos;m a{' '}
                <span className="text-purple-600 dark:text-purple-400 font-semibold bg-purple-100/50 dark:bg-purple-900/30 px-2 py-1 rounded-md">
                  Full-Stack Web Developer
                </span>{' '}
                with a strong focus on{' '}
                <span className="font-semibold text-foreground">
                  Frontend development
                </span>
                , and currently learning{' '}
                <span className="font-semibold text-foreground">
                  Backend technologies
                </span>
                . I love creating beautiful, functional and easy to use
                interfaces.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I have +1 year of experience building and designing my own web
                projects. I haven&apos;t worked formally in a company yet, but{' '}
                <span className="font-semibold text-foreground bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40 px-2 py-1 rounded-md">
                  I&apos;ve learned Frontend and Backend skills through self
                  study
                </span>
                . This has allowed me to build amazing and fully functional
                websites on my own.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-purple-500/30 dark:hover:border-purple-400/30 transition-all duration-200 backdrop-blur-sm"
                >
                  <div className="p-2 rounded-lg bg-purple-900 dark:bg-purple-900 text-white shrink-0">
                    <skill.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {skill.title}
                    </h4>
                    <p className="text-muted-foreground text-xs mt-1">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section - Moved to the right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
            className="shrink-0 relative order-first lg:order-last"
          >
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl blur-lg" />

            {/* Image container with hover effects */}
            <motion.div
              whileHover={{
                rotate: 0,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              animate={{
                rotate: [-3, -1, -3],
              }}
              transition={{
                rotate: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="relative"
            >
              <Image
                src="/images/davidphoto.jpg"
                alt="Foto de David Niño"
                width={320}
                height={320}
                className="rounded-xl border-2 border-purple-200 dark:border-purple-800 -rotate-3 shadow-2xl hover:shadow-purple-500/25 dark:hover:shadow-purple-500/40 transition-all duration-300 object-cover pointer-events-none select-none"
                draggable={false}
              />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: 1,
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  rotate: {
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                className="absolute -bottom-4 -left-4 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl dark:shadow-purple-500/25 transition-all duration-200 cursor-default"
              >
                🎵 Jazz Lover
              </motion.div>
            </motion.div>

            {/* Decorative dots with new animations */}
            <motion.div
              animate={{
                scale: [1, 1.4, 0.8, 1],
                opacity: [0.5, 0.9, 0.3, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-8 -right-8 w-16 h-16 bg-purple-500/10 dark:bg-purple-400/20 rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
                x: [0, 5, -5, 0],
                y: [0, -3, 3, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
              className="absolute -bottom-6 -right-12 w-12 h-12 bg-purple-600/15 dark:bg-purple-300/25 rounded-full"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
