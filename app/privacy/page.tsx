import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <Badge className="mb-4">Legal</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Privacy Policy
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
                <h2 className="text-2xl font-bold">1. Information We Collect</h2>
                <p className="text-muted-foreground">
                  We collect information that you provide directly to us, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Name and contact information</li>
                  <li>Educational institution details</li>
                  <li>Learning progress and performance data</li>
                  <li>Communication preferences</li>
                  <li>Device and usage information</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
                <p className="text-muted-foreground">We use the collected information to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide and improve our educational services</li>
                  <li>Personalize learning experiences</li>
                  <li>Analyze and enhance platform performance</li>
                  <li>Communicate with users about service updates</li>
                  <li>Ensure platform security and prevent fraud</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. Data Protection</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. These measures
                  include encryption, secure socket layer technology, and regular security assessments.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. Data Sharing and Third Parties</h2>
                <p className="text-muted-foreground">We may share your information with:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Educational institutions you are affiliated with</li>
                  <li>Service providers who assist in platform operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Third-party analytics services (in anonymized form)</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. Your Rights</h2>
                <p className="text-muted-foreground">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of certain data processing activities</li>
                  <li>Receive a copy of your data</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  We comply with the Children's Online Privacy Protection Act (COPPA) and similar regulations worldwide.
                  We obtain parental consent before collecting personal information from children under 13 years of age.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. Changes to Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy periodically. We will notify you of any material changes by posting
                  the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">8. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact our Data Protection Officer at
                  privacy@pulseeducation.com.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
