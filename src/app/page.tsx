"use client";

// state
import { useState } from "react";

// base
import { X } from "lucide-react";

// components
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const Home = () => {
  // state
  const [showBanner, setShowBanner] = useState<boolean>(true);

  return (
    <div>
      {/* banner */}
      {showBanner && (
        <div className="bg-primary-500 flex items-center justify-center gap-2 py-1">
          <p className="text-tertiary-50 text-sm">
            We raised another $225M to build the future of AI Agents
          </p>
          <button
            onClick={() => setShowBanner(false)}
            className="flex items-center justify-center text-tertiary-50 h-4 w-4 rounded-full border border-tertiary-50 text-xs"
          >
            <X size={10} />
          </button>
        </div>
      )}

      {/* navbar */}
      <nav className="shadow-sm">
        <Section className="flex-row justify-between items-center">
          <p className="font-medium">Sellmore</p>
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

          {/* buttons */}
          <div className="flex items-center gap-1">
            <Button variant="ghost">Login</Button>
            <Button>Get started</Button>
          </div>
        </Section>
      </nav>

      {/* hero - use hypercolor.dev/mesh for the bg as a style */}
      <div
        style={{
          backgroundColor: "rgba(15, 118, 110, 0.1)",
          backgroundImage:
            "radial-gradient(at 6% 20%, rgba(240, 171, 252, 0.2) 0, transparent 91%), radial-gradient(at 82% 73%, rgba(14, 165, 233, 0.2) 0, transparent 46%), radial-gradient(at 44% 5%, rgba(162, 28, 175, 0.2) 0, transparent 85%), radial-gradient(at 11% 43%, rgba(3, 105, 161, 0.2) 0, transparent 59%), radial-gradient(at 17% 40%, rgba(250, 232, 255, 0.2) 0, transparent 78%)",
        }}
        className="relative"
      >
        {/* hero banner */}
        <Section className="py-16 grid grid-cols-2 h-full">
          {/* details */}
          <div className="col-span-1 flex flex-col justify-center max-w-prose">
            <h1 className="text-5xl font-semibold mb-1">
              Optimise Your Website with the Best SEO Tools
            </h1>
            <p className="mb-4">
              Optimise the performance of your website and business by using SEO
              tools that are easy to apply
            </p>
            <div className="flex items-center gap-2 mb-8">
              <Button>Get Started Free</Button>
              <Button variant="outline">Watch Video</Button>
            </div>
            <div className="flex items-center gap-1">
              <p>Want instant access?</p>
              <Button variant="link" className="p-0">
                Request Demo
              </Button>
            </div>
          </div>
        </Section>
        {/* tab component */}
        <Section className="py-32">
          <p>Tab component</p>
        </Section>
        {/* fade */}
        <div className="h-20 w-full absolute bottom-0 bg-gradient-to-t to-transparent from-white" />
      </div>
    </div>
  );
};

export default Home;
