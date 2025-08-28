// Footer Component
// Generated: 2025-08-28T16:45:46.228Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Shield,
  Zap
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Test Automation", href: "#features" },
        { name: "Validation Tools", href: "#validation" },
        { name: "API Testing", href: "/api-testing" },
        { name: "Performance Testing", href: "/performance" },
        { name: "Security Testing", href: "/security" },
        { name: "Documentation", href: "/docs" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Enterprise", href: "/enterprise" },
        { name: "Startups", href: "/startups" },
        { name: "Developers", href: "/developers" },
        { name: "QA Teams", href: "/qa-teams" },
        { name: "DevOps", href: "/devops" },
        { name: "Integrations", href: "/integrations" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Community", href: "/community" },
        { name: "Best Practices", href: "/best-practices" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "System Status", href: "/status" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Security", href: "/security" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "GitHub", icon: Github, href: "https://github.com" }
  ]

  return (
    <footer className="bg-background border-t border-muted">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-background font-bold">TV</span>
                </div>
                <span className="font-bold text-xl text-foreground">TestValidate</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Streamline your testing workflow with powerful validation tools. 
                Trusted by development teams worldwide to deliver reliable, high-quality software faster.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">support@testvalidate.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Enterprise-grade security</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Zap className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">99.9% uptime guarantee</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-foreground">Developer Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-muted rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get testing insights, feature updates, and best practices. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-muted bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 TestValidate. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Built for developers <Heart className="size-3 text-accent fill-current" /> worldwide
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-muted/30">
            <Link href="/api-docs" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              API Documentation
            </Link>
            <Link href="/compliance" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              SOC 2 Compliance
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Settings
            </Link>
            <Link href="/support" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Technical Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}