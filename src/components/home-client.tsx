"use client";

import Link from "next/link";
import {
  Download,
  MonitorSmartphone,
  Shield,
  Rocket,
  Smartphone,
  Globe,
  MousePointer2,
  Music,
  Volume2,
  QrCode,
  Wifi,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const staggerParent = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function HomeClient() {
  return (
    <main className="airpulse-shell">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-12">
        {/* Top nav */}
        <header className="relative flex items-center justify-between gap-4 py-6">
          <div className="flex items-baseline gap-4">
            <div className="relative">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
                AirPulse
              </h1>
              <div className="absolute -bottom-1 left-0 h-0.5 w-12 bg-gradient-to-r from-airpulse-500 to-violet-500 rounded-full" />
            </div>
            <div className="hidden sm:block h-4 w-px bg-zinc-700/50" />
            <p className="hidden sm:block text-sm text-zinc-400 font-medium">
              The Universal PC Remote
            </p>
          </div>

          <nav className="hidden items-center gap-3 text-xs sm:flex">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
              <span className="text-zinc-300 font-medium">Windows</span>
            </div>
            <Link
              href="https://github.com/i3mr01"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-md text-zinc-400 hover:text-airpulse-300 hover:bg-zinc-900/30 transition-all duration-200 font-medium"
            >
              made by i3mr01
            </Link>
          </nav>
        </header>

        {/* Hero */}
        <section className="mt-12 relative">
          {/* Centered hero with asymmetric design */}
          <div className="relative max-w-5xl mx-auto">
            {/* Main content - centered */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerParent as any}
              className="text-center space-y-8 pb-12"
            >
              <motion.div variants={staggerParent as any} className="space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-transparent via-airpulse-500 to-transparent" />
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                    Universal Control
                  </span>
                  <div className="h-1 w-12 bg-gradient-to-l from-transparent via-airpulse-500 to-transparent" />
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-50 leading-[1.1] px-4">
                  Control your PC
                  <br />
                  <span className="bg-gradient-to-r from-airpulse-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    from anywhere
                  </span>
                </h1>
                
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed px-4">
                  Turn any phone into a powerful remote for your Windows computer. Media control, volume adjustment, and precision navigation-all in your pocket.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={staggerParent as any}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="soft-shadow min-w-[200px] group relative overflow-hidden"
                  >
                  <a
                    href="https://github.com/i3mr01/airpulse-website/releases/download/V1.2/AirPulse-Installer.exe"
                    className="flex items-center justify-center gap-2.5 relative z-10"
                    download
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-airpulse-500/20 via-violet-500/20 to-cyan-500/20 blur-xl" />
                    </motion.div>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.8v-7.15l10 .2z"/>
                    </svg>
                    <span className="font-semibold">Download for Windows</span>
                  </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="min-w-[200px] group relative overflow-hidden"
                  >
                  <a
                    href="https://github.com/i3mr01/airpulse-website/releases/download/V1.2/AirPulse.apk"
                    className="flex items-center justify-center gap-2.5 relative z-10"
                    download
                  >
                    <motion.div
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20 blur-xl" />
                    </motion.div>
                    <Image src="/android-icon.png" alt="Android" width={20} height={20} className="h-5 w-5" />
                    <span className="font-semibold">Get Android App</span>
                  </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Feature badges - positioned below in a row */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerParent as any}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-zinc-800/50"
            >
              <motion.div
                variants={staggerParent as any}
                className="text-center space-y-2 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-airpulse-500/10 border border-airpulse-500/20 mb-2 group-hover:bg-airpulse-500/20 transition-colors">
                  <MonitorSmartphone className="h-6 w-6 text-airpulse-400" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-50">Windows 10 & 11</h3>
                <p className="text-xs text-zinc-500">Full compatibility</p>
              </motion.div>

              <motion.div
                variants={staggerParent as any}
                className="text-center space-y-2 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 mb-2 group-hover:bg-violet-500/20 transition-colors">
                  <Shield className="h-6 w-6 text-violet-400" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-50">Secure & Private</h3>
                <p className="text-xs text-zinc-500">Local network only</p>
              </motion.div>

              <motion.div
                variants={staggerParent as any}
                className="text-center space-y-2 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-2 group-hover:bg-cyan-500/20 transition-colors">
                  <Globe className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-50">Any Device</h3>
                <p className="text-xs text-zinc-500">iPhone, Android, iPad</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Choose Your Way to Control */}
        <section
          id="methods"
          className="mt-20 space-y-8 border-t border-white/5 pt-10 sm:mt-24 sm:pt-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-3"
          >
            <h2 className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
              📱 Choose Your Way to Control
            </h2>
            <p className="max-w-xl text-sm text-zinc-400">
              Two ways to control your PC, each optimized for different needs.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            <MethodCard
              title="The Instant Web App (Universal)"
              subtitle="Best for: iPhone, iPad, and guests"
              icon={<Globe className="h-5 w-5" />}
              features={[
                "No Downloads: Just scan the QR code on your PC screen",
                "Zero Wait: Perfect for when you just want to change the song right now",
                "Works on any device with a browser",
              ]}
              accent="sky"
            />
            <MethodCard
              title="The Android App (Premium)"
              subtitle="Best for: Daily Android users"
              icon={<Smartphone className="h-5 w-5" />}
              features={[
                "Auto-Connect: Remembers your PC and connects automatically",
                "Hardware Control: Use your phone's physical volume buttons",
                "Now Playing: See song titles and artists beautifully displayed",
                "Secure: Save your password securely so you never have to type it twice",
              ]}
              accent="emerald"
            />
          </div>
        </section>

        {/* What You Can Do */}
        <section
          id="features"
          className="mt-20 space-y-8 border-t border-white/5 pt-10 sm:mt-24 sm:pt-12"
        >
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
              What You Can Do
            </h2>
            <p className="max-w-xl text-sm text-zinc-400">
              Powerful features that make controlling your PC effortless.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<MousePointer2 className="h-5 w-5" />}
              title="Touchpad Control"
              body="Scroll, click, and drag with smooth multi-touch gestures. Your phone becomes a precision trackpad."
            />
            <FeatureCard
              icon={<Music className="h-5 w-5" />}
              title="Media Commander"
              body="Play/Pause Spotify, YouTube, Netflix, and more with dedicated buttons. Control your entertainment from anywhere."
            />
            <FeatureCard
              icon={<Volume2 className="h-5 w-5" />}
              title="Volume Master"
              body="Adjust your PC's volume instantly. No need to get up from the couch or bed."
            />
          </div>
        </section>

        {/* How to Connect */}
        <section
          id="connect"
          className="mt-20 space-y-10 border-t border-white/5 pt-12 sm:mt-24 sm:pt-16"
        >
          <div className="space-y-3 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-1.5 border border-cyan-500/20">
              <Rocket className="h-3.5 w-3.5 text-cyan-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
                Quick Start
              </span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
              How to Connect
            </h2>
            <p className="max-w-xl mx-auto text-sm text-zinc-400">
              Get started in 30 seconds. It's that simple.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3 relative">
              <StepCard
                step="1"
                title="Start the PC App"
                body="Download and run AirPulse Server on your computer. Ensure your Phone and PC are on the same Wi-Fi."
                icon={<MonitorSmartphone className="h-5 w-5" />}
                position="left"
              />
              <StepCard
                step="2"
                title="Choose Your Method"
                body="Scan QR (Easiest): Point your camera at the QR code on your PC screen. Or use the Android App for the best experience."
                icon={<QrCode className="h-5 w-5" />}
                position="left"
              />
              <StepCard
                step="3"
                title="Start Controlling"
                body="Type the IP Address shown on your PC, enter your Password, and you're ready to go!"
                icon={<CheckCircle2 className="h-5 w-5" />}
                position="left"
              />
            </div>
          </div>

          <motion.div 
            className="mt-10 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent p-6 sm:p-7 backdrop-blur-sm shadow-lg shadow-amber-500/10 group cursor-pointer"
            whileHover={{ 
              y: -4,
              scale: 1.01,
              borderColor: "rgba(245, 158, 11, 0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start gap-4">
              <motion.div 
                className="rounded-xl bg-amber-500/25 border border-amber-500/30 p-2.5 shadow-md"
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -5, 5, 0],
                }}
                transition={{ duration: 0.4 }}
              >
                <Wifi className="h-5 w-5 text-amber-300" />
              </motion.div>
              <div className="space-y-2 flex-1">
                <h3 className="text-sm font-bold text-zinc-50 group-hover:text-white transition-colors duration-300">
                  ⚠️ Trouble connecting?
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">
                  If the QR code or IP doesn't work, try clicking the IP address on your PC app to switch to a different network adapter.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Downloads */}
        <motion.section
          id="download"
          className="mt-20 rounded-3xl border border-airpulse-500/30 bg-gradient-to-br from-airpulse-500/20 via-violet-500/10 to-cyan-500/10 p-6 sm:mt-24 sm:p-8 backdrop-blur-sm shadow-2xl shadow-airpulse-500/10 group"
          whileHover={{ 
            scale: 1.01,
            borderColor: "rgba(139, 92, 246, 0.5)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
                Get AirPulse
              </h3>
              <p className="max-w-md text-sm text-zinc-300">
                Download the Windows Server to get started, or grab the Android app for the premium experience.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group/btn"
              >
                <Button
                  asChild
                  size="default"
                  className="w-full sm:w-auto relative overflow-hidden"
                >
                  <a
                    href="https://github.com/i3mr01/airpulse-website/releases/download/V1.2/AirPulse-Installer.exe"
                    className="flex items-center gap-2.5 relative z-10"
                    download
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 opacity-0 group-hover/btn:opacity-100"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-airpulse-500/20 via-violet-500/20 to-cyan-500/20 blur-xl" />
                    </motion.div>
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.8v-7.15l10 .2z"/>
                    </svg>
                    <span className="font-semibold">Download Windows Server</span>
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group/btn"
              >
                <Button
                  asChild
                  size="default"
                  variant="secondary"
                  className="w-full sm:w-auto relative overflow-hidden"
                >
                  <a
                    href="https://github.com/i3mr01/airpulse-website/releases/download/V1.2/AirPulse.apk"
                    className="flex items-center gap-2.5 relative z-10"
                    download
                  >
                    <motion.div
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 opacity-0 group-hover/btn:opacity-100"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20 blur-xl" />
                    </motion.div>
                    <Image src="/android-icon.png" alt="Android" width={16} height={16} className="h-4 w-4" />
                    <span className="font-semibold">Get Android App</span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

type MethodCardProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  features: string[];
  accent: "sky" | "emerald";
};

function MethodCard({
  title,
  subtitle,
  icon,
  features,
  accent,
}: MethodCardProps) {
  const accentStyles = {
    sky: {
      bg: "bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-transparent",
      iconBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      checkColor: "text-cyan-400",
      glow: "from-cyan-400/40 via-sky-400/20",
    },
    emerald: {
      bg: "bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent",
      iconBg: "bg-violet-500/20 text-violet-300 border-violet-500/30",
      checkColor: "text-violet-400",
      glow: "from-violet-400/40 via-purple-400/20",
    },
  };

  const style = accentStyles[accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 ${style.bg} p-6 backdrop-blur-sm shadow-lg shadow-black/20 group-hover:shadow-2xl group-hover:shadow-black/40 group-hover:border-white/30 transition-all duration-500 ease-out`}
    >
      {/* Animated glow effect */}
      <motion.div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={`absolute -top-12 right-0 h-32 w-32 rounded-full bg-gradient-to-br ${style.glow} to-transparent blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 10, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="relative space-y-4">
        <motion.div 
          className="flex items-start gap-4"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className={`rounded-xl p-3 border ${style.iconBg} shadow-md`}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
            }}
            transition={{ duration: 0.4 }}
          >
            {icon}
          </motion.div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-zinc-50 group-hover:text-white transition-colors duration-300">{title}</h3>
            <p className="mt-1.5 text-xs text-zinc-300 font-medium group-hover:text-zinc-200 transition-colors duration-300">{subtitle}</p>
          </div>
        </motion.div>
        <ul className="space-y-2.5">
          {features.map((feature, idx) => (
            <motion.li 
              key={idx} 
              className="flex items-start gap-2.5 text-xs text-zinc-300"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2, delay: idx * 0.05 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${style.checkColor}`} />
              </motion.div>
              <span className="leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

function FeatureCard({ icon, title, body }: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -6,
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-zinc-950/80 via-zinc-900/40 to-transparent p-5 backdrop-blur-sm shadow-lg shadow-black/20 group-hover:border-white/30 group-hover:shadow-2xl group-hover:shadow-violet-500/10 transition-all duration-500 ease-out"
    >
      {/* Animated glow */}
      <motion.div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="absolute -top-12 right-0 h-28 w-28 rounded-full bg-gradient-to-br from-violet-400/30 via-cyan-400/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Shimmer sweep */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="relative space-y-3">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ x: 3 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="rounded-lg p-2.5 bg-gradient-to-br from-airpulse-500/20 to-violet-500/20 border border-airpulse-400/20 text-airpulse-300 group-hover:text-cyan-300 transition-colors shadow-md"
            whileHover={{ 
              scale: 1.15,
              rotate: [0, -10, 10, 0],
            }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
        </motion.div>
        <div className="space-y-1.5">
          <h3 className="text-sm font-bold text-zinc-50 leading-tight group-hover:text-white transition-colors duration-300">{title}</h3>
          <p className="text-xs text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">{body}</p>
        </div>
      </div>
    </motion.article>
  );
}

type StepCardProps = {
  step: string;
  title: string;
  body: string;
  icon: React.ReactNode;
  position?: "left" | "center" | "right";
};

function StepCard({ step, title, body, icon, position = "left" }: StepCardProps) {
  const colorSchemes = {
    left: {
      bg: "from-airpulse-500/10 via-zinc-950/90 to-transparent",
      stepBg: "bg-airpulse-500/20 border-airpulse-500/30 text-airpulse-300",
      iconColor: "text-airpulse-400 group-hover:text-airpulse-300",
      hoverGlow: "group-hover:from-airpulse-500/10",
      border: "border-airpulse-500/20 group-hover:border-airpulse-500/30",
    },
    center: {
      bg: "from-violet-500/10 via-zinc-950/90 to-transparent",
      stepBg: "bg-violet-500/20 border-violet-500/30 text-violet-300",
      iconColor: "text-violet-400 group-hover:text-violet-300",
      hoverGlow: "group-hover:from-violet-500/10",
      border: "border-violet-500/20 group-hover:border-violet-500/30",
    },
    right: {
      bg: "from-cyan-500/10 via-zinc-950/90 to-transparent",
      stepBg: "bg-cyan-500/20 border-cyan-500/30 text-cyan-300",
      iconColor: "text-cyan-400 group-hover:text-cyan-300",
      hoverGlow: "group-hover:from-cyan-500/10",
      border: "border-cyan-500/20 group-hover:border-cyan-500/30",
    },
  };

  const colors = colorSchemes[position];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative"
    >
      <div className={`relative overflow-hidden rounded-2xl border ${colors.border} bg-gradient-to-br ${colors.bg} p-6 backdrop-blur-sm shadow-xl shadow-black/20 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/40 h-full flex flex-col`}>
        {/* Animated glow effect */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${colors.hoverGlow} rounded-2xl`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <div className="relative space-y-4 flex-1 flex flex-col">
          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors.stepBg} text-base font-bold shadow-lg border transition-transform duration-300 group-hover:scale-105`}>
              {step}
            </div>
            <div className={`${colors.iconColor} transition-all duration-300 group-hover:scale-110`}>
              {icon}
            </div>
          </div>
          <div className="space-y-2 flex-1">
            <h3 className="text-base font-bold text-zinc-50 group-hover:text-white transition-colors duration-300">{title}</h3>
            <p className="text-sm leading-relaxed text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300">{body}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

