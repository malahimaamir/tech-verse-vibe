import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Rocket, Users, Award, Globe } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const stats = [
  { number: '3+', label: 'Years Experience', icon: Award },
  { number: '50+', label: 'Projects Completed', icon: Rocket },
  { number: '100%', label: 'Client Satisfaction', icon: Users },
  { number: '24/7', label: 'Support Available', icon: Globe },
];

const highlights = [
  {
    icon: Code,
    title: 'Clean Code Advocate',
    description: 'Writing maintainable, scalable, and well-documented code following modern development standards and best practices.',
  },
  {
    icon: Palette,
    title: 'Pixel-Perfect Design',
    description: 'Transforming Figma designs into responsive, accessible interfaces with attention to every detail and user experience.',
  },
  {
    icon: Rocket,
    title: 'Performance Focused',
    description: 'Optimizing applications for speed, SEO, and scalability using modern techniques like SSR, CSR, and code splitting.',
  },
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-primary/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate front-end developer from Taxila, Pakistan, dedicated to creating 
            exceptional digital experiences through innovative web solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 hover:glow-effect transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gradient">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 3 years of hands-on experience in front-end development, I've evolved 
                  from a curious beginner to a skilled developer passionate about creating 
                  pixel-perfect, user-centric web applications.
                </p>
                <p>
                  Currently pursuing my Bachelor's in Software Engineering at Virtual University 
                  while working as a freelance developer, I've successfully delivered 50+ projects 
                  across various platforms including Fiverr, Upwork, and LinkedIn connections.
                </p>
                <p>
                  My expertise lies in React.js, Next.js, and TypeScript, with a strong focus on 
                  modern UI frameworks, state management, and performance optimization. I believe 
                  in writing clean, maintainable code that not only works but scales beautifully.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="glass-card p-6 hover:glow-effect transition-all duration-300">
              <h4 className="text-xl font-bold mb-3 text-gradient">Education</h4>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold">Bachelor of Software Engineering</h5>
                  <p className="text-muted-foreground">Virtual University, Islamabad, Pakistan</p>
                  <p className="text-sm text-muted-foreground">2022 - Present</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <Tilt
                key={highlight.title}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={2000}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass-card p-6 hover:glow-effect transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <Tilt
              key={stat.label}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={2000}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="glass-card p-6 text-center hover:glow-effect transition-all duration-300 group"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto hover:glow-effect transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Fun Facts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="space-y-2">
                <div className="text-2xl">🌍</div>
                <p>Based in the historic city of Taxila, Pakistan - birthplace of ancient learning!</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">⚡</div>
                <p>Can debug CSS issues faster than making a cup of tea ☕</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🎯</div>
                <p>Perfectionist who believes every pixel matters in creating great UX</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}