import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Linkedin, Twitter } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "Pricing",
    "href": "#pricing"
  },
  {
    "name": "FAQ",
    "href": "#faq"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Testimonial",
    "href": "#testimonial"
  }
];

  return (
    <StyleProvider buttonVariant="bubble" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="DFW Sites"
      ctaButton={{
        text: "Get Started",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
      brand="Dallas-Fort Worth Sites"
      copyright="© 2024 DFW Sites. All rights reserved."
      socialLinks={[
        {
          icon: Twitter,
          href: "https://twitter.com",
        },
        {
          icon: Linkedin,
          href: "https://linkedin.com",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
