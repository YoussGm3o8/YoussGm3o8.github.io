"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FaCode, 
  FaLaptopCode, 
  FaMicrochip, 
  FaTools, 
  FaGraduationCap, 
  FaHandsHelping, 
  FaUser, 
  FaLightbulb,
  FaGithub,
  FaExternalLinkAlt,
  FaGamepad
} from 'react-icons/fa';
import Link from 'next/link';
import { projects } from '@/data/projects';

const skills = [
  { name: 'Programming Languages', items: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'C/C++', 'VHDL', 'Python', 'Bash'] },
  { name: 'Web Development', items: ['React', 'Next.js', 'HTML/CSS', 'TailwindCSS', 'Node.js', 'RESTful APIs'] },
  { name: 'Tools & Software', items: ['Git', 'GitHub', 'VS Code', 'Linux', 'Microsoft Office Suite', 'Google Suite'] },
  { name: 'Technical', items: ['Embedded Systems', 'Lab Safety', 'Data Analysis', 'Hardware Troubleshooting', 'Soldering'] },
  { name: 'Soft Skills', items: ['Problem Solving', 'Team Collaboration', 'Time Management', 'Communication'] },
  { name: 'Languages', items: ['English (Fluent)', 'French (Fluent)'] },
];

const experiences = [
  {
    title: 'Avionics Member',
    company: 'McGill Drone Team',
    period: 'Oct 2024 - Present',
    location: 'Montreal, Canada',
    description: [
      'Wrote and tested embedded C code for drone avionics and sensor integration',
      'Troubleshot hardware and wiring issues on autonomous drone systems',
      'Soldered and verified electrical connections on Teensy 4.1 flight controller',
      'Collaborated with interdisciplinary team to improve navigation and control systems',
      'Implemented sensor fusion algorithms for accurate positioning and flight data',
    ],
    icon: <FaMicrochip className="w-6 h-6 text-accent" />,
  },
  {
    title: 'Customer Service Representative',
    company: 'Couche-Tard',
    period: 'Aug 2021 - Oct 2023',
    location: 'Montreal, Canada',
    description: [
      'Delivered efficient customer support to over 200 customers daily',
      'Maintained store presentation and inventory organization',
      'Handled financial transactions and balanced cash registers with 100% accuracy',
      'Resolved customer inquiries and complaints efficiently',
      'Developed strong interpersonal skills through daily customer interactions',
    ],
    icon: <FaTools className="w-6 h-6 text-accent" />,
  },
];

const education = [
  {
    school: 'McGill University',
    degree: 'Bachelor of Computer Engineering',
    period: 'Sept 2023 - May 2027 (Expected)',
    location: 'Montreal, Canada',
    description: [
      'Relevant Coursework: Data Structures & Algorithms, Computer Organization, Digital Logic',
      'Member of the McGill Drone Team',
    ],
    icon: <FaGraduationCap className="w-6 h-6 text-accent" />,
  }
];

const volunteerWork = [
  {
    organization: 'McGill Students for The Open Door Montreal',
    role: 'Volunteer',
    period: 'Sept 2023 – Dec 2023',
    description: 'Support initiatives to help homeless individuals in Montreal through fundraising and community outreach.',
    icon: <FaHandsHelping className="w-6 h-6 text-accent" />,
  },
  {
    organization: 'McGill TechFair',
    role: 'Event Volunteer',
    period: 'Oct 2023 and Feb 2024',
    description: 'Assisted with setup and coordination for McGill\'s largest technology career fair, connecting students with industry professionals.',
    icon: <FaHandsHelping className="w-6 h-6 text-accent" />,
  },
  {
    organization: 'CIBC Run for the Cure',
    role: 'Fundraiser and Event Volunteer',
    period: 'Oct 2024',
    description: 'Participated in fundraising for breast cancer research.',
    icon: <FaHandsHelping className="w-6 h-6 text-accent" />,
  }
];

const projectIcons = {
  'Royal Kingdoms': <FaGamepad className="w-6 h-6 text-accent" />,
  'School Supplies Management System': <FaCode className="w-6 h-6 text-accent" />,
  'Drone GPS Navigation System': <FaCode className="w-6 h-6 text-accent" />
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </motion.div>

        {/* Bio Section with Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-20">
          {/* Profile Image */}
          <motion.div
            className="md:col-span-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-accent">
              <Image
                src="/pfp.png"
                alt="Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          
          {/* Bio Text */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Computer Engineering Student & Tech Enthusiast</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate Computer Engineering student at McGill University with hands-on experience in software development, 
              embedded systems, and hardware troubleshooting. Born and raised in Montreal, I've always been fascinated by how hardware 
              and software come together to create powerful technologies that shape our world.
            </p>
            <p className="text-gray-300 mb-6">
              Currently, I'm contributing to drone navigation and avionics as part of the McGill Drone Team, where I get to apply my 
              knowledge of embedded systems and C programming to real-world aerospace challenges. I'm particularly interested in IoT devices, 
              autonomous systems, and the intersection of hardware and software engineering.
            </p>
            <p className="text-gray-300 mb-6">
              When I'm not coding or soldering, you can find me creating educational technology content on YouTube, participating in 
              hackathons, or volunteering with local tech-focused community initiatives. I'm always looking for new challenges and 
              opportunities to expand my skills and make a positive impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-lg">
                <FaCode className="text-accent" />
                <span>Software Development</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-lg">
                <FaMicrochip className="text-accent" />
                <span>Embedded Systems</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-lg">
                <FaLaptopCode className="text-accent" />
                <span>Hardware Design</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-lg">
                <FaGithub className="text-accent" />
                <span>Open Source</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative pl-8 border-l-2 border-accent/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="absolute -left-3 top-0 bg-background p-1 rounded-full">
                  {edu.icon}
                </div>
                <div className="mb-1">
                  <span className="text-sm text-accent">{edu.period}</span>
                </div>
                <h4 className="text-xl font-bold">{edu.degree}</h4>
                <p className="text-gray-400 mb-2">
                  {edu.school} | {edu.location}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {edu.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                className="bg-secondary/30 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h4 className="text-lg font-semibold mb-3">{skillGroup.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-background rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 border-l-2 border-accent/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="absolute -left-3 top-0 bg-background p-1 rounded-full">
                  {exp.icon}
                </div>
                <div className="mb-1">
                  <span className="text-sm text-accent">{exp.period}</span>
                </div>
                <h4 className="text-xl font-bold">{exp.title}</h4>
                <p className="text-gray-400 mb-2">
                  {exp.company} | {exp.location}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Projects Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-center">Recent Projects</h3>
            <Link 
              href="/projects" 
              className="text-accent hover:underline flex items-center gap-2"
            >
              View All Projects <FaExternalLinkAlt className="text-sm" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={index}
                className="bg-secondary/30 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-background p-2 rounded-full">
                    {projectIcons[project.title as keyof typeof projectIcons]}
                  </div>
                  <h4 className="text-xl font-bold">{project.title}</h4>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-accent mb-2">Technologies used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-background rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent hover:underline"
                    >
                      <FaGithub className="mr-2" />
                      GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <Link
                      href={project.links.demo}
                      className="inline-flex items-center text-accent hover:underline"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Details
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Volunteer Work Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Volunteer Work</h3>
          <div className="space-y-6">
            {volunteerWork.map((work, index) => (
              <motion.div
                key={index}
                className="relative pl-8 border-l-2 border-accent/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="absolute -left-3 top-0 bg-background p-1 rounded-full">
                  {work.icon}
                </div>
                <div className="mb-1">
                  <span className="text-sm text-accent">{work.period}</span>
                </div>
                <h4 className="text-xl font-bold">{work.role}</h4>
                <p className="text-gray-400 mb-2">{work.organization}</p>
                <p className="text-gray-300">{work.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}