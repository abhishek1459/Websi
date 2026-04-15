/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GlowBackground } from "./components/GlowBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Capabilities } from "./components/Capabilities";
import { Demo } from "./components/Demo";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FinalCTA, Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <GlowBackground />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Capabilities />
        <Demo />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
