"use client"

import { useState } from "react"
import { PulseLogo } from "@/components/pulse-logo"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LogoShowcase() {
  const [regenerating, setRegenerating] = useState(false)
  const [key, setKey] = useState(0)

  const handleRegenerate = () => {
    setRegenerating(true)
    // Force re-render of the logo component
    setKey((prev) => prev + 1)
    setTimeout(() => setRegenerating(false), 100)
  }

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Brand Identity</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The PULSE logo represents our commitment to innovation in educational analytics, with a modern design that
            embodies our core values.
          </p>
        </div>

        <Card className="overflow-hidden border-none shadow-lg">
          <CardContent className="p-8">
            <Tabs defaultValue="logo" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="logo">Logo</TabsTrigger>
                <TabsTrigger value="variations">Variations</TabsTrigger>
                <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
              </TabsList>

              <TabsContent value="logo" className="space-y-8">
                <div className="flex flex-col items-center justify-center p-12 bg-muted/30 rounded-lg">
                  <div className="mb-8" key={key}>
                    <PulseLogo size="xl" animated={true} />
                  </div>
                  <Button onClick={handleRegenerate} disabled={regenerating} variant="outline">
                    {regenerating ? "Generating..." : "Regenerate Logo"}
                  </Button>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">
                    Our AI-generated logo is unique and represents the innovative spirit of PULSE.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="variations" className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                    <PulseLogo size="md" color="primary" />
                    <span className="mt-2 text-sm">Primary</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-primary rounded-lg">
                    <PulseLogo size="md" color="white" />
                    <span className="mt-2 text-sm text-white">On Primary</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black rounded-lg">
                    <PulseLogo size="md" color="white" />
                    <span className="mt-2 text-sm text-white">On Black</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg border">
                    <PulseLogo size="md" color="black" />
                    <span className="mt-2 text-sm">On White</span>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="usage" className="space-y-4">
                <h3 className="text-xl font-semibold">Logo Usage Guidelines</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Maintain clear space around the logo equal to the height of the "P"</li>
                  <li>Do not stretch, distort, or change the proportions of the logo</li>
                  <li>Do not change the colors unless using approved variations</li>
                  <li>Minimum size: 24px height for digital, 0.25" for print</li>
                  <li>For dark backgrounds, use the white variation</li>
                </ul>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    For additional guidance or to request the logo files, please contact our brand team.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
