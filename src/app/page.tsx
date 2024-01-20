"use client";

// state
import { useState } from "react";

// base
import { X, Play } from "lucide-react";

// components
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";

// utils
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  // state
  const [showBanner, setShowBanner] = useState(true);

  return (
    <motion.div layout layoutRoot className=" flex flex-col h-screen">
      <AnimatePresence initial={false} mode="popLayout">
        {/* banner */}
        {showBanner && (
          <motion.div
            layout
            key="banner-section"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="flex items-center justify-center gap-2 py-1.5 bg-primary-500"
          >
            <p className="text-tertiary-50">
              We raised another $225M to build the future of AI Agents
            </p>
            <button
              onClick={() => setShowBanner(false)}
              className="text-tertiary-50 border-tertiary-50 border-2 h-5 w-5 rounded-full flex items-center justify-center"
            >
              <X size={10} />
            </button>
          </motion.div>
        )}

        {/* page wrapper */}
        <motion.div
          layout="position"
          key="page-section"
          className="overflow-hidden flex flex-col"
        >
          {/* navbar */}
          <nav className="shadow bg-white">
            <Section className="flex-row justify-between items-center">
              {/* logo */}
              <p className="font-medium">Sellmore</p>

              {/* links */}
              <ul className="flex">
                <li>
                  <Button variant="ghost">Product</Button>
                </li>
                <li>
                  <Button variant="ghost">Features</Button>
                </li>
                <li>
                  <Button variant="ghost">About</Button>
                </li>
                <li>
                  <Button variant="ghost">Pricing</Button>
                </li>
              </ul>

              {/* auth */}
              <div className="flex gap-2">
                <Button variant="ghost">Login</Button>
                <Button className="">Get started</Button>
              </div>
            </Section>
          </nav>

          {/* page */}
          <main className="overflow-y-scroll scrollbar-none">
            {/* hero */}
            <div className="relative">
              <div
                className="absolute top-0 left-0 w-full h-full -z-20 opacity-50"
                style={{
                  backgroundColor: "rgb(191, 219, 254)",
                  backgroundImage:
                    "radial-gradient(at 8% 49%, rgb(240, 171, 252) 0, transparent 100%), radial-gradient(at 100% 100%, rgb(14, 165, 233) 0, transparent 60%), radial-gradient(at 27% 68%, rgb(168, 162, 158) 0, transparent 43%), radial-gradient(at 34% 80%, rgb(253, 230, 138) 0, transparent 54%), radial-gradient(at 46% 80%, rgb(253, 164, 175) 0, transparent 84%), radial-gradient(at 55% 27%, rgb(125, 211, 252) 0, transparent 29%)",
                }}
              />
              <div className="-z-10 h-64 w-full absolute bottom-0 left-0 bg-gradient-to-b from-transparent  to-white" />
              <Section>
                <div className="max-w-prose py-20">
                  <h1 className="text-6xl font-semibold mb-2">
                    Optimise Your Website with the Best SEO Tools
                  </h1>
                  <p className="text-lg mb-6">
                    Optimise the performance of your favourite website and
                    business by using SEO tools that are easy to apply
                  </p>
                  <div className="flex items-center gap-2 mb-10">
                    <Button className="bg-primary-500 hover:bg-primary-400">
                      Get Started Free
                    </Button>
                    <Button variant="outline">
                      <Play size={20} className="mr-1" />
                      <span>Watch Video</span>
                    </Button>
                  </div>
                  <div className="flex items-center gap-1">
                    <p>Want instant access?</p>
                    <Button className="p-0" variant="link">
                      Request Demo
                    </Button>
                  </div>
                </div>
              </Section>
              <Section className="py-32">
                <p>tabs</p>
              </Section>
              {/* fade */}
              <div className="h-10 w-full absolute bottom-0" />
            </div>
          </main>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
