import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';

const techStacks = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React.js', level: 95, color: '#61dafb', icon: '⚛️' },
      { name: 'Next.js', level: 90, color: '#ffffff', icon: '🔺' },
      { name: 'TypeScript', level: 85, color: '#3178c6', icon: '📘' },
      { name: 'HTML5', level: 98, color: '#e34f26', icon: '🌐' },
      { name: 'CSS3', level: 95, color: '#1572b6', icon: '🎨' },
      { name: 'TailwindCSS', level: 92, color: '#06b6d4', icon: '💨' },
    ]
  },
  {
    category: 'Styling & UI',
    technologies: [
      { name: 'Bootstrap', level: 88, color: '#7952b3', icon: '🅱️' },
      { name: 'Material-UI', level: 85, color: '#0081cb', icon: '📦' },
      { name: 'Ant Design', level: 82, color: '#1890ff', icon: '🐜' },
      { name: 'Figma', level: 80, color: '#f24e1e', icon: '🎯' },
      { name: 'Responsive Design', level: 95, color: '#ff6b6b', icon: '📱' },
    ]
  },
  {
    category: 'State Management & Tools',
    technologies: [
      { name: 'Redux Toolkit', level: 88, color: '#764abc', icon: '🔄' },
      { name: 'Context API', level: 90, color: '#61dafb', icon: '🎪' },
      { name: 'Git & GitHub', level: 92, color: '#f05032', icon: '🐙' },
      { name: 'NPM/Yarn', level: 85, color: '#cb3837', icon: '📦' },
      { name: 'Webpack', level: 75, color: '#8dd6f9', icon: '📦' },
    ]
  }
];

const projects = [
  {
    title: 'Shofy Beauty & Cosmetics',
    tech: ['React.js', 'Ant Design', 'Redux Toolkit'],
    description: 'E-commerce platform with seamless user flow',
    period: 'Apr 2023 – May 2023',
    image: '🛍️'
  },
  {
    title: 'Travel Booking Website',
    tech: ['Next.js', 'TailwindCSS'],
    description: 'High-performance travel platform with mobile-first design',
    period: 'Aug 2023 – Oct 2023',
    image: '✈️'
  },
  {
    title: 'Real Estate Portal',
    tech: ['React', 'Bootstrap', 'Next.js SSR'],
    description: 'SEO-optimized property listing platform',
    period: 'Mar 2024 – Jun 2024',
    image: '🏠'
  },
  {
    title: 'Nails Decoration Salon',
    tech: ['TailwindCSS', 'React'],
    description: 'Visually captivating salon website with pixel-perfect design',
    period: 'Sep 2024 – Nov 2024',
    image: '💅'
  },
];

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Tech Stack</span> & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern web technologies with a focus on creating scalable, 
            performant, and user-friendly applications.
          </p>
        </motion.div>

        {/* Tech Stacks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {techStacks.map((stack, stackIndex) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: stackIndex * 0.2 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={2000}
                gyroscope={true}
              >
                <div className="glass-card p-6 h-full hover:glow-effect transition-all duration-300">
                  <h3 className="text-xl font-bold mb-6 text-center text-gradient">
                    {stack.category}
                  </h3>
                  
                  <div className="space-y-4">
                    {stack.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: stackIndex * 0.2 + techIndex * 0.1 
                        }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{tech.icon}</span>
                            <span className="font-medium">{tech.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {tech.level}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: tech.color }}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                            transition={{ 
                              duration: 1, 
                              delay: stackIndex * 0.2 + techIndex * 0.1 + 0.5 
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Featured Projects Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-4">Featured Projects</h3>
          <p className="text-muted-foreground">
            Showcase of recent work demonstrating technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                transitionSpeed={2000}
              >
                <div className="glass-card p-6 h-full hover:glow-effect transition-all duration-300 group">
                  <div className="text-4xl mb-4 text-center group-hover:animate-bounce">
                    {project.image}
                  </div>
                  
                  <h4 className="font-bold mb-2 text-center group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-3 text-center">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3 justify-center">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    {project.period}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}