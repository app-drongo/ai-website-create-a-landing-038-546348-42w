// Features Component
// Generated: 2025-08-28T16:45:46.229Z
// Template: features-c001
// Context: Landing Page
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  TestTube, 
  Shield, 
  BarChart3, 
  Zap, 
  Users, 
  CheckCircle,
  Bug,
  Clock,
  Target
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: TestTube,
      title: "Automated Testing",
      description: "Run comprehensive test suites automatically with AI-powered test generation and execution.",
      badge: "Automation"
    },
    {
      icon: Shield,
      title: "Security Validation",
      description: "Identify vulnerabilities and security flaws before they become critical issues.",
      badge: "Security"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Monitor load times, response rates, and system performance under various conditions.",
      badge: "Performance"
    },
    {
      icon: Zap,
      title: "Real-time Results",
      description: "Get instant feedback on test results with live monitoring and alerts.",
      badge: "Speed"
    },
    {
      icon: Users,
      title: "User Experience Testing",
      description: "Validate user journeys and interface usability across different devices and browsers.",
      badge: "UX Testing"
    },
    {
      icon: CheckCircle,
      title: "Compliance Checking",
      description: "Ensure your products meet industry standards and regulatory requirements.",
      badge: "Compliance"
    },
    {
      icon: Bug,
      title: "Bug Detection",
      description: "Advanced algorithms detect and categorize bugs with detailed reproduction steps.",
      badge: "Quality"
    },
    {
      icon: Clock,
      title: "Continuous Integration",
      description: "Seamlessly integrate with your CI/CD pipeline for automated validation workflows.",
      badge: "DevOps"
    },
    {
      icon: Target,
      title: "Test Coverage",
      description: "Comprehensive coverage analysis to ensure no critical functionality is missed.",
      badge: "Coverage"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Validation Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Complete Testing Suite for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Product Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive validation tools designed to catch issues early, ensure quality, 
            and deliver products that exceed user expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to validate your next product release?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start Free Testing
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}