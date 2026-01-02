"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const staggerParent = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function PrivacyPage() {
  return (
    <main className="airpulse-shell">
      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-12">
        {/* Return Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-50 transition-colors duration-200 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to home</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial="hidden"
          animate="show"
          variants={staggerParent}
          className="mb-12"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
                Privacy Policy
              </h1>
              <div className="absolute -bottom-1 left-0 h-0.5 w-12 bg-gradient-to-r from-airpulse-500 to-violet-500 rounded-full" />
            </div>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-sm text-zinc-400"
          >
            Last updated: January 2025
          </motion.p>
        </motion.header>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerParent}
          className="space-y-10"
        >
          {/* Overview */}
          <motion.section variants={itemVariants} className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-50">Overview</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-zinc-300 leading-relaxed">
                AirPulse is a local network application that enables remote control of your Windows PC from your phone. 
                This policy explains how AirPulse handles your data. In short: we don't collect, store, or transmit any personal information.
              </p>
            </div>
          </motion.section>

          {/* Data Collection */}
          <motion.section variants={itemVariants} className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-50">Data Collection</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                AirPulse does not collect, store, or transmit any personal data. The application operates entirely on your local network.
              </p>
              <ul className="text-sm text-zinc-300 space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-airpulse-400 mt-1">•</span>
                  <span>No personal information is collected or stored</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-airpulse-400 mt-1">•</span>
                  <span>No usage analytics or tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-airpulse-400 mt-1">•</span>
                  <span>No file access or document scanning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-airpulse-400 mt-1">•</span>
                  <span>No location data collection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-airpulse-400 mt-1">•</span>
                  <span>No data sharing with third parties</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* How It Works */}
          <motion.section variants={itemVariants} className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-50">How It Works</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                AirPulse creates a local web server on your PC (port 5000) that communicates with your phone over your Wi-Fi network. 
                All communication stays within your local network—no internet connection is required, and no data leaves your network.
              </p>
              <div className="rounded-lg border border-white/10 bg-zinc-900/30 p-4 mt-4">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-300">Technical details:</strong> The server uses HTTP and WebSocket protocols for real-time communication. 
                  Connection requires a session PIN and optional password. All traffic is limited to devices on the same local network.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Security */}
          <motion.section variants={itemVariants} className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-50">Security</h2>
            <div className="prose prose-invert max-w-none">
              <ul className="text-sm text-zinc-300 space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-airpulse-400 mt-1">•</span>
                  <span><strong className="text-zinc-50">Session PIN:</strong> Each session generates a unique 6-digit PIN</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-airpulse-400 mt-1">•</span>
                  <span><strong className="text-zinc-50">Optional Password:</strong> Set a custom password for additional protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-airpulse-400 mt-1">•</span>
                  <span><strong className="text-zinc-50">Local Network Only:</strong> Connections are restricted to your Wi-Fi network</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-airpulse-400 mt-1">•</span>
                  <span><strong className="text-zinc-50">No External Access:</strong> The application does not create outbound internet connections</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Windows Permissions */}
          <motion.section variants={itemVariants} className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-50">Windows Permissions</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                AirPulse requires the following Windows capabilities to function:
              </p>
              <ul className="text-sm text-zinc-300 space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-airpulse-400 mt-1">•</span>
                  <span><strong className="text-zinc-50">Internet (Client & Server):</strong> Local network communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-airpulse-400 mt-1">•</span>
                  <span><strong className="text-zinc-50">Private Network:</strong> Accept connections from local devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-airpulse-400 mt-1">•</span>
                  <span><strong className="text-zinc-50">Full Trust:</strong> Control media playback, system volume, and input devices</span>
                </li>
              </ul>
              <p className="text-sm text-zinc-300 leading-relaxed mt-4">
                These permissions are used exclusively for local functionality. They do not enable external data transmission or internet access.
              </p>
            </div>
          </motion.section>

          {/* Third-Party Services */}
          <motion.section variants={itemVariants} className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-50">Third-Party Services</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-zinc-300 leading-relaxed">
                AirPulse does not integrate with any third-party analytics, advertising, or tracking services. 
                The application is self-contained and operates independently. If you download AirPulse from the Microsoft Store, 
                Microsoft's privacy policies apply to the Store platform, not to AirPulse's functionality.
              </p>
            </div>
          </motion.section>

          {/* Policy Updates */}
          <motion.section variants={itemVariants} className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-50">Policy Updates</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-zinc-300 leading-relaxed">
                We may update this privacy policy periodically. Changes will be reflected on this page with an updated date. 
                We recommend reviewing this policy occasionally to stay informed.
              </p>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section variants={itemVariants} className="space-y-3 pt-4 border-t border-white/5">
            <h2 className="text-xl font-semibold text-zinc-50">Contact</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                Questions about this policy? Reach out:
              </p>
              <div className="text-sm">
                <p className="text-zinc-300">
                  <Link
                    href="https://www.amrkhaled.dev"
                    className="text-airpulse-400 hover:text-airpulse-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    amrkhaled.dev
                  </Link>
                </p>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.div variants={itemVariants} className="pt-6 border-t border-white/5">
            <p className="text-xs text-zinc-500 text-center">
              AirPulse by{" "}
              <Link
                href="https://www.amrkhaled.dev"
                className="text-airpulse-400 hover:text-airpulse-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                amrkhaled.dev
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
