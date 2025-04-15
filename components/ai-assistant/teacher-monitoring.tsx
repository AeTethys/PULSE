"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "@/components/ui/chart"

interface UsageData {
  date: string
  interactions: number
  uniqueStudents: number
}

const usageData: UsageData[] = [
  { date: "Mon", interactions: 145, uniqueStudents: 45 },
  { date: "Tue", interactions: 232, uniqueStudents: 52 },
  { date: "Wed", interactions: 187, uniqueStudents: 48 },
  { date: "Thu", interactions: 256, uniqueStudents: 63 },
  { date: "Fri", interactions: 198, uniqueStudents: 51 },
]

interface Interaction {
  student: string
  timestamp: string
  query: string
  response: string
  flagged: boolean
}

const recentInteractions: Interaction[] = [
  {
    student: "Alex Thompson",
    timestamp: "2024-02-27 14:23",
    query: "Can you help me understand photosynthesis?",
    response: "Let's break down photosynthesis step by step. What do you already know about how plants make food?",
    flagged: false,
  },
  {
    student: "Sarah Chen",
    timestamp: "2024-02-27 14:20",
    query: "What's the answer to this math problem?",
    response:
      "Instead of giving you the answer, let's work through this together. What's the first step you think we should take?",
    flagged: true,
  },
]

export default function TeacherMonitoring() {
  const [selectedTab, setSelectedTab] = useState("overview")

  return (
    <div className="space-y-4 p-4">
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="interactions">Recent Interactions</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Usage Analytics</CardTitle>
                <CardDescription>Weekly interaction trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={usageData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="interactions" stroke="hsl(var(--primary))" strokeWidth={2} />
                      <Line type="monotone" dataKey="uniqueStudents" stroke="hsl(var(--secondary))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
                <CardDescription>Current usage metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="rounded-lg border p-4">
                    <div className="text-sm font-medium text-muted-foreground">Total Interactions Today</div>
                    <div className="text-2xl font-bold">198</div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="text-sm font-medium text-muted-foreground">Active Students</div>
                    <div className="text-2xl font-bold">51</div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="text-sm font-medium text-muted-foreground">Flagged Interactions</div>
                    <div className="text-2xl font-bold text-destructive">3</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="interactions">
          <Card>
            <CardHeader>
              <CardTitle>Recent Student Interactions</CardTitle>
              <CardDescription>Monitor and review AI assistant conversations</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-4">
                  {recentInteractions.map((interaction, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{interaction.student}</span>
                          <span className="text-sm text-muted-foreground">{interaction.timestamp}</span>
                        </div>
                        {interaction.flagged && <Badge variant="destructive">Requires Review</Badge>}
                      </div>
                      <div className="mt-2 space-y-2">
                        <p className="text-sm">
                          <span className="font-medium">Query:</span> {interaction.query}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Response:</span> {interaction.response}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>AI Assistant Settings</CardTitle>
              <CardDescription>Configure behavior and monitoring preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="font-medium">Content Filtering</div>
                      <div className="text-sm text-muted-foreground">Set appropriate content restrictions</div>
                    </div>
                    <select className="rounded-md border px-2 py-1">
                      <option>Strict</option>
                      <option>Moderate</option>
                      <option>Light</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="font-medium">Grade Level</div>
                      <div className="text-sm text-muted-foreground">Adjust responses for grade level</div>
                    </div>
                    <select className="rounded-md border px-2 py-1">
                      <option>Elementary</option>
                      <option>Middle School</option>
                      <option>High School</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="font-medium">Monitoring Level</div>
                      <div className="text-sm text-muted-foreground">Set interaction monitoring preferences</div>
                    </div>
                    <select className="rounded-md border px-2 py-1">
                      <option>All Interactions</option>
                      <option>Flagged Only</option>
                      <option>Summary Reports</option>
                    </select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
