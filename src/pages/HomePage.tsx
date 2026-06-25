import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesComparison from '@/components/sections/features/FeaturesComparison';
import HeroTiltedCards from '@/components/sections/hero/HeroTiltedCards';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import PricingCenteredCards from '@/components/sections/pricing/PricingCenteredCards';
import TestimonialTrustCard from '@/components/sections/testimonial/TestimonialTrustCard';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroTiltedCards
      tag="DFW's Premier Web Agency"
      title="Build Your Digital Future in DFW"
      description="We create high-performance websites tailored to Dallas-Fort Worth businesses, blending local understanding with cutting-edge tech."
      primaryButton={{
        text: "Start Your Project",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Learn More",
        href: "#about",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/professional-editor-uses-ai-powered-software-pc-reels-creative-office_482257-126981.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/teamworking-engineers-coding-advanced-ai-algorithm-startup_482257-125568.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-aesthetic-background-with-3d-effect_23-2150644144.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/server-hub-manager-talking-with-programmer-using-node-tree-software_482257-126097.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/programming-code-pc-display-used-developing-software_482257-122979.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="Our Commitment"
      quote="DFW Sites transformed our online presence with a design that perfectly captures our local identity while functioning at enterprise scale."
      author="Mark Henderson"
      role="Director at DFW Logistics"
      imageSrc="http://img.b2bpic.net/free-photo/young-creative-people-with-laptop-notepad-working-modern-office-cool-guys-discussing-new-project-together-while-spending-time-work_574295-5787.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesComparison
      tag="Why Choose Us"
      title="Better Web Experiences"
      description="See why our approach outperforms traditional agencies."
      negativeItems={[
        "One-size-fits-all templates",
        "Generic hosting solutions",
        "Slow page load speeds",
        "Poor local business visibility",
      ]}
      positiveItems={[
        "Custom local SEO strategy",
        "High-performance architecture",
        "Dedicated DFW-based support",
        "Mobile-first design principles",
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingCenteredCards
      tag="Transparent Pricing"
      title="Plans for Every Scale"
      description="Affordable solutions built for growing businesses in Texas."
      plans={[
        {
          tag: "Launch",
          price: "$1,200",
          description: "Perfect for new local startups.",
          features: [
            "Landing Page",
            "Local SEO Setup",
            "Contact Form",
          ],
          primaryButton: {
            text: "Choose Launch",
            href: "#contact",
          },
        },
        {
          tag: "Growth",
          price: "$2,500",
          description: "For scaling businesses needing more features.",
          features: [
            "$2,500 CMS",
            "Blog Integration",
            "Analytics Dashboard",
            "Priority Support",
          ],
          primaryButton: {
            text: "Choose Growth",
            href: "#contact",
          },
        },
        {
          tag: "Enterprise",
          price: "$2,500",
          description: "For established brands requiring custom solutions.",
          features: [
            "API Integrations",
            "$2,500 Backend",
            "Advanced Analytics",
            "Dedicated Project Manager",
          ],
          primaryButton: {
            text: "Contact Sales",
            href: "#contact",
          },
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Proven Success"
      title="By the Numbers"
      description="We measure success in performance and growth."
      metrics={[
        {
          value: "150+",
          title: "Sites Delivered",
          features: [
            "Fast turnaround",
            "Quality assurance",
            "Testing",
          ],
        },
        {
          value: "45%",
          title: "Avg Traffic Gain",
          features: [
            "SEO optimization",
            "Content strategy",
            "Backlinks",
          ],
        },
        {
          value: "24/7",
          title: "Support Availability",
          features: [
            "Local team access",
            "Help desk",
            "Proactive maintenance",
          ],
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonial" data-section="testimonial">
    <SectionErrorBoundary name="testimonial">
          <TestimonialTrustCard
      quote="The team at DFW Sites understands the local market better than anyone. Highly recommended for any Dallas business."
      rating={5}
      author="Jessica Miller, Founder of Metro Greens"
      avatars={[
        {
          name: "Jessica M.",
          imageSrc: "http://img.b2bpic.net/free-photo/cloud-computing-storage-loading_53876-21207.jpg",
        },
        {
          name: "Mark H.",
          imageSrc: "http://img.b2bpic.net/free-photo/it-engineer-working-with-his-pc_1098-21511.jpg",
        },
        {
          name: "Sarah L.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendered-abstract-design-elements-assortment_23-2148996794.jpg",
        },
        {
          name: "David K.",
          imageSrc: "http://img.b2bpic.net/free-photo/long-hallway-with-row-servers-center_188544-26047.jpg",
        },
        {
          name: "Alex R.",
          imageSrc: "http://img.b2bpic.net/free-photo/remote-worker-personal-apartment-office-using-mockup-tablet_482257-124323.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Help Center"
      title="Common Questions"
      description="Everything you need to know about working with us."
      items={[
        {
          question: "Where are you based?",
          answer: "We are proudly based in the heart of the DFW metroplex.",
        },
        {
          question: "Do you offer ongoing support?",
          answer: "Yes, we provide several maintenance plans to keep your site fast and secure.",
        },
        {
          question: "How long does it take?",
          answer: "Standard projects typically take 1-3 hours from kickoff to launch.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/serious-businessman-headset-using-laptop_74855-3069.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get In Touch"
      text="Ready to elevate your digital presence?"
      primaryButton={{
        text: "281-300-2903",
        href: "tel:281-300-2903",
      }}
      secondaryButton={{
        text: "View Portfolio",
        href: "#",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
