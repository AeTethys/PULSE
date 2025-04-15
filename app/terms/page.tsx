import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function TermsPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <Badge className="mb-4">Legal</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Terms of Service
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-12">
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using PULSE Education's services, you agree to be bound by these Terms of Service and
                  all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
                  from using or accessing our services.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. Description of Service</h2>
                <p className="text-muted-foreground">
                  PULSE Education provides an AI-powered educational platform designed to enhance learning experiences
                  through personalized content delivery, progress tracking, and analytics. Our services include, but are
                  not limited to, adaptive learning paths, assessment tools, and communication features.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. User Responsibilities</h2>
                <p className="text-muted-foreground">
                  Users are responsible for maintaining the confidentiality of their account information and for all
                  activities that occur under their account. Users must provide accurate and complete information when
                  creating an account.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. Privacy Policy</h2>
                <p className="text-muted-foreground">
                  Your use of PULSE Education's services is also governed by our Privacy Policy. Please review our
                  Privacy Policy to understand our practices regarding data collection and usage.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, features, and functionality of PULSE Education's services, including but not limited to
                  text, graphics, logos, and software, are the exclusive property of PULSE Education and are protected
                  by international copyright, trademark, and other intellectual property laws.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to terminate or suspend access to our services immediately, without prior notice
                  or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                  provide at least 30 days' notice prior to any new terms taking effect.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">8. Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms, please contact us at legal@pulseeducation.com.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
