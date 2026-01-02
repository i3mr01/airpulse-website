import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - AirPulse",
  description: "AirPulse Privacy Policy - Your privacy is important to us.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

