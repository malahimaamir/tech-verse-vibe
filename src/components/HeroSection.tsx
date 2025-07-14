import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Center, Float } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// 3D Laptop Component
function Laptop() {
  const laptopRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      laptopRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group ref={laptopRef}>
      {/* Laptop Base */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#e0e7ff" metalness={0.3} roughness={0.4} />
      </mesh>
      
      {/* Laptop Screen */}
      <mesh position={[0, 0.5, -0.9]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[2.8, 1.8, 0.1]} />
        <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Screen Glow */}
      <mesh position={[0, 0.5, -0.85]} rotation={[-0.2, 0, 0]}>
        <planeGeometry args={[2.6, 1.6]} />
        <meshBasicMaterial color="#6366f1" opacity={0.8} transparent />
      </mesh>
      
      {/* Floating Tech Elements */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[1.5, 1.2, 0]}>
          <boxGeometry args={[0.3, 0.3, 0.1]} />
          <meshStandardMaterial color="#61dafb" />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.7}>
        <mesh position={[-1.5, 1.5, 0.5]}>
          <sphereGeometry args={[0.15]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[0, 2, 1]}>
          <octahedronGeometry args={[0.2]} />
          <meshStandardMaterial color="#3178c6" />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.4}>
        <mesh position={[2, 0.8, -0.5]}>
          <tetrahedronGeometry args={[0.15]} />
          <meshStandardMaterial color="#06b6d4" />
        </mesh>
      </Float>
      
      <Float speed={2.2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[-2, 0.5, 0.8]}>
          <dodecahedronGeometry args={[0.12]} />
          <meshStandardMaterial color="#10b981" />
        </mesh>
      </Float>
    </group>
  );
}

// Animated Stars Background
function Stars() {
  const starsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  const starPositions = new Float32Array(300);
  for (let i = 0; i < 300; i++) {
    starPositions[i] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={starPositions}
          count={starPositions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#6366f1" />
    </points>
  );
}

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden hero-gradient">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#6366f1" />
            
            <Stars />
            
            <Center>
              <Laptop />
            </Center>
            
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2.5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Hi, I'm{' '}
              <span className="text-gradient">Malahima Amir</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 mb-8 h-16">
              <TypeAnimation
                sequence={[
                  'Front-End Developer',
                  2000,
                  'Turning Designs Into Code...',
                  2000,
                  'Crafting User Experiences...',
                  2000,
                  'Building Responsive Websites...',
                  2000,
                  'React.js & Next.js Expert',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Highly skilled Front-End Developer with 3+ years of experience crafting dynamic, 
              responsive, and user-centric web applications. Specialized in React.js, Next.js, 
              and modern web technologies.
            </p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 glow-effect transition-all duration-300 group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white glass-card transition-all duration-300"
              >
                View Projects
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center space-x-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="https://github.com/malahimaamir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:glow-effect transition-all duration-300 text-white hover:text-primary"
              >
                <Github className="h-6 w-6" />
              </a>
              
              <a 
                href="https://linkedin.com/in/malahima-amir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:glow-effect transition-all duration-300 text-white hover:text-primary"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              
              <a 
                href="mailto:malahimaamir@gmail.com"
                className="p-3 rounded-full glass-card hover:glow-effect transition-all duration-300 text-white hover:text-primary"
              >
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}