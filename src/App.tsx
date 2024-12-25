import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaQuran } from "react-icons/fa";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Navbar from "./components/Navbar";

function AnimatedStars() {
  const starsRef = useRef<any>(null);

  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.x += delta / 10;
      starsRef.current.rotation.y += delta / 15;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
    />
  );
}

function App() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white overflow-hidden">
      <Navbar />
      <div className="fixed inset-0 opacity-50">
        <Canvas>
          <AnimatedStars />
        </Canvas>
      </div>

      <div className="min-h-screen relative bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A0A0A] to-transparent" />
        <div className="relative z-10 text-white">
          <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-gray-500/5 to-white/5 animate-gradient-x" />

            <div className="absolute inset-0 overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full mix-blend-overlay"
                  animate={{
                    scale: [1, 2, 2, 1, 1],
                    opacity: [0.3, 0.5, 0.5, 0.3, 0.3],
                    x: [0, 100, 0, -100, 0],
                    y: [0, -100, 100, -100, 0],
                  }}
                  transition={{
                    duration: 20,
                    delay: i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background: `radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(0,0,0,0) 70%)`,
                    width: "60vw",
                    height: "60vw",
                    left: "20vw",
                    top: "20vh",
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                }}
              >
                <motion.div
                  className="mx-auto w-24 h-24 mb-2 relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="absolute inset-0 bg-white/50 rounded-full blur-xl opacity-50" />
                  <div className="relative rounded-full p-4">
                    <FaQuran className="w-full h-full text-white" />
                  </div>
                </motion.div>

                <div className="overflow-hidden mb-12">
                  <div className="relative">
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="relative z-10"
                    >
                      <h1 className="text-6xl md:text-8xl font-bold">
                        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                          Dua.sh
                        </span>
                      </h1>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-4 text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300 w-[70%] mx-auto"
                      >
                        Dua.sh is not only a Dua generator, but a community of
                        muslims who are looking to expand their spiritual
                        journey.
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.08 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0 -z-10"
                    >
                      <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl" />
                      <div className="absolute top-0 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl" />
                    </motion.div>
                  </div>

                  {/* Feature List */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="mt-12 max-w-3xl mx-auto"
                  >
                    <p className="text-xl md:text-2xl text-amber-100/80 mb-8 text-center"></p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                      {[
                        {
                          title: "AI-Powered Guidance",
                          description:
                            "Find the right Dua for any situation instantly",
                        },
                        {
                          title: "Community Wisdom",
                          description:
                            "Explore user-generated Duas that were successful",
                        },
                        {
                          title: "Share & Connect",
                          description:
                            "Share your own Duas with the global community",
                        },
                        {
                          title: "Grow Together",
                          description:
                            "Learn and develop spiritually as a united community",
                        },
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -20 : 20,
                          }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.8 + index * 0.1,
                          }}
                          className="relative group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-teal-500/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="p-4 rounded-lg border border-amber-500/10 hover:border-amber-500/20 transition-colors">
                            <h3 className="text-lg font-medium text-amber-300 mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-amber-100/60">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="mt-12 flex justify-center space-x-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full font-medium text-black shadow-lg shadow-amber-500/25"
                    >
                      Start Generating
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-amber-500/10 rounded-full font-medium text-amber-300 hover:bg-amber-500/20 transition-colors border border-amber-500/20"
                    >
                      Explore Duas
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-1 rounded-full bg-white"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
