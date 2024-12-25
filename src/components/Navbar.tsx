import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { FaQuran, FaDiscord } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";

const MenuItem = ({ text, href = "#" }: { text: string; href?: string }) => {
  return (
    <motion.a
      href={href}
      className="relative px-4 py-2 group"
      whileHover="hover"
    >
      <span className="relative z-10 text-sm text-gray-300 group-hover:text-white transition-colors">
        {text}
      </span>
      <motion.div
        className="absolute inset-0 bg-white/[0.05] rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        variants={{
          hover: {
            opacity: 1,
            scale: 1,
          },
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.a>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={isScrolled ? "scrolled" : "top"}
      style={{
        backgroundColor: backgroundOpacity,
        backdropFilter: backdropBlur,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-8 h-8">
              <motion.div
                className="absolute inset-0 bg-emerald-500/30 rounded-full blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <FaQuran className="relative w-full h-full text-emerald-500" />
            </div>
            <span className="text-white font-medium">Dua.sh</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            <MenuItem text="Forum" />
            <MenuItem text="Features" />

            {/* <motion.a
              href="#"
              className="ml-4 px-4 py-2 flex items-center space-x-2 bg-white/[0.05] rounded-full hover:bg-white/[0.1] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDiscord className="w-4 h-4" />
              <span className="text-sm">Join Discord</span>
            </motion.a> */}
            <motion.button
              className="ml-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
              whileHover={{
                scale: 1.05,
                backgroundImage: "linear-gradient(to right, #059669, #10b981)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">Get Started</span>
            </motion.button>
          </div>
          <motion.button
            className="md:hidden p-2 rounded-full hover:bg-white/[0.05]"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <BiMenu className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        className="md:hidden overflow-hidden bg-black/50 backdrop-blur-lg"
      >
        <div className="px-4 py-2 space-y-1">
          <MenuItem text="Features" />
          <MenuItem text="Community" />
          <MenuItem text="Resources" />
          <MenuItem text="Pricing" />
          <motion.div className="pt-2 pb-3 border-t border-white/[0.1] mt-2 space-y-2">
            <motion.a
              href="#"
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/[0.05]"
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <FaDiscord className="w-4 h-4" />
              <span className="text-sm">Join Discord</span>
            </motion.a>
            <motion.button
              className="w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-sm font-medium">Get Started</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
