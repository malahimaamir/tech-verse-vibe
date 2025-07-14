import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    period: 'Jan 2025 – Feb 2025',
    title: 'Family Hair Care Salon Website',
    company: 'Freelance Project',
    location: 'Remote',
    type: 'Frontend Development',
    description: 'Implemented a fully responsive salon platform using React and TypeScript with clean structure and UX precision.',
    technologies: ['React.js', 'TypeScript', 'TailwindCSS', 'Responsive Design'],
    achievements: [
      'Built pixel-perfect UI matching design specifications',
      'Implemented advanced TypeScript patterns for type safety',
      'Optimized for mobile-first responsive experience',
      'Delivered clean, maintainable codebase'
    ],
    status: 'current'
  },
  {
    period: 'Sep 2024 – Nov 2024',
    title: 'Nails Decoration Salon',
    company: 'Freelance Project',
    location: 'Remote',
    type: 'Frontend Development',
    description: 'Delivered a visually captivating salon website using TailwindCSS with pixel-perfect design fidelity.',
    technologies: ['React.js', 'TailwindCSS', 'Framer Motion', 'Figma Integration'],
    achievements: [
      'Achieved 100% design-to-code accuracy',
      'Implemented smooth animations and transitions',
      'Optimized loading performance by 40%',
      'Enhanced user engagement through interactive elements'
    ],
    status: 'completed'
  },
  {
    period: 'Mar 2024 – Jun 2024',
    title: 'Real Estate Listing Website',
    company: 'Freelance Project',
    location: 'Remote',
    type: 'Full Stack Frontend',
    description: 'Built a dynamic, SEO-optimized property portal with React, Bootstrap, and Next.js SSR for maximum discoverability.',
    technologies: ['Next.js', 'React.js', 'Bootstrap', 'SSR', 'SEO Optimization'],
    achievements: [
      'Improved SEO ranking by 60% with Next.js SSR',
      'Implemented advanced search and filtering',
      'Built responsive design for all screen sizes',
      'Integrated Google Maps for property locations'
    ],
    status: 'completed'
  },
  {
    period: 'Dec 2023 – Jan 2024',
    title: 'Furniture Store Platform',
    company: 'Freelance Project',
    location: 'Remote',
    type: 'E-commerce Frontend',
    description: 'Developed an elegant, accessible UI with Material-UI and Next.js, enhancing product visibility and engagement.',
    technologies: ['Next.js', 'Material-UI', 'React.js', 'E-commerce', 'Accessibility'],
    achievements: [
      'Increased user engagement by 45%',
      'Implemented WCAG 2.1 accessibility standards',
      'Built advanced product filtering system',
      'Optimized checkout flow conversion'
    ],
    status: 'completed'
  },
  {
    period: 'Aug 2023 – Oct 2023',
    title: 'Travel Booking Website',
    company: 'Freelance Project',
    location: 'Remote',
    type: 'Web Application',
    description: 'Engineered a high-performance travel platform using Next.js and TailwindCSS with mobile-first design strategy.',
    technologies: ['Next.js', 'TailwindCSS', 'React.js', 'API Integration', 'Mobile-First'],
    achievements: [
      'Achieved 95+ Lighthouse performance score',
      'Built complex booking flow with form validation',
      'Implemented real-time price updates',
      'Delivered exceptional mobile experience'
    ],
    status: 'completed'
  },
  {
    period: 'Apr 2023 – May 2023',
    title: 'Shofy Beauty & Cosmetics E-Commerce',
    company: 'Freelance Project',
    location: 'Remote',
    type: 'E-commerce Platform',
    description: 'Crafted a sleek, responsive storefront using React.js, Ant Design, and Redux Toolkit with seamless user flow.',
    technologies: ['React.js', 'Ant Design', 'Redux Toolkit', 'E-commerce', 'State Management'],
    achievements: [
      'Built comprehensive e-commerce functionality',
      'Implemented advanced state management',
      'Created smooth user shopping experience',
      'Integrated payment gateway solutions'
    ],
    status: 'completed'
  }
];

export default function ExperienceTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-secondary/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            3+ years of delivering exceptional web solutions as a freelance front-end developer, 
            working with clients worldwide to bring their visions to life.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                  <div className={`w-4 h-4 rounded-full border-4 border-background ${
                    exp.status === 'current' 
                      ? 'bg-primary animate-pulse' 
                      : 'bg-secondary'
                  }`}></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <div className="glass-card p-6 hover:glow-effect transition-all duration-300 group">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          exp.status === 'current' 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-secondary/20 text-secondary-foreground'
                        }`}>
                          {exp.status === 'current' ? '🔥 Current' : '✅ Completed'}
                        </span>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center text-muted-foreground text-sm mt-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.company} • {exp.location}
                      </div>
                      
                      <span className="inline-block px-2 py-1 text-xs rounded bg-accent/20 text-accent-foreground mt-2">
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 text-sm">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start text-sm text-muted-foreground">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {achievement}
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="group-hover:border-primary transition-colors">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Project
                      </Button>
                      <Button size="sm" variant="ghost" className="group-hover:text-primary transition-colors">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto hover:glow-effect transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Experience Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-muted-foreground">Major Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Project Success Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}