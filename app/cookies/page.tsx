import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CookiesPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <Badge className="mb-4">Legal</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Cookie Policy</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">What Are Cookies?</h2>
                <p className="text-muted-foreground">
                  Cookies are small text files that are placed on your device when you visit our website. They help us
                  provide you with a better experience by remembering your preferences, analyzing how you use our
                  platform, and enhancing site functionality.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Essential Cookies</CardTitle>
                    <CardDescription>Required for basic platform functionality</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Authentication status</li>
                      <li>Security features</li>
                      <li>Session management</li>
                      <li>Load balancing</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Functional Cookies</CardTitle>
                    <CardDescription>Enhance your experience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Language preferences</li>
                      <li>Theme settings</li>
                      <li>Personalization options</li>
                      <li>Remember user choices</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Analytics Cookies</CardTitle>
                    <CardDescription>Help us improve our services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Usage patterns</li>
                      <li>Feature popularity</li>
                      <li>Performance metrics</li>
                      <li>Error tracking</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Marketing Cookies</CardTitle>
                    <CardDescription>Support our outreach efforts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Campaign effectiveness</li>
                      <li>Referral tracking</li>
                      <li>Partner integrations</li>
                      <li>Advertisement optimization</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Managing Cookies</h2>
                <p className="text-muted-foreground">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your
                  computer and you can set most browsers to prevent them from being placed. If you do this, however, you
                  may have to manually adjust some preferences every time you visit a site and some services and
                  functionalities may not work.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Cookie Settings</h2>
                <p className="text-muted-foreground">
                  You can adjust your cookie preferences at any time by clicking the "Cookie Settings" button in the
                  footer of our website. This will allow you to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>View all cookies currently stored</li>
                  <li>Choose which types of cookies to accept</li>
                  <li>Clear all existing cookies</li>
                  <li>Set preferences for future visits</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Updates to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
                  updated revision date. Please check back periodically to stay informed about our use of cookies.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Questions?</h2>
                <p className="text-muted-foreground">
                  If you have any questions about our use of cookies, please contact us at privacy@pulseeducation.com.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
