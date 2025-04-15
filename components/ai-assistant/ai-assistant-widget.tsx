"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, X, Maximize2, Minimize2, Send, Book, HelpCircle, Lightbulb, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { TypingAnimation } from "./typing-animation"

interface Message {
  role: "assistant" | "user"
  content: string
  timestamp: Date
  status?: "typing" | "complete"
}

export default function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your AI Learning Assistant. How can I help you learn today?",
      timestamp: new Date(),
      status: "complete",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: inputValue,
      timestamp: new Date(),
      status: "complete",
    }
    setMessages((prev) => [...prev, userMessage])

    // Add AI typing indicator
    const typingMessage: Message = {
      role: "assistant",
      content: "",
      timestamp: new Date(),
      status: "typing",
    }
    setMessages((prev) => [...prev, typingMessage])

    setInputValue("")
    setIsLoading(true)

    // Simulate AI response with typing effect
    setTimeout(() => {
      const response = generateHelpfulResponse(inputValue)

      // Remove typing indicator and add actual response
      setMessages((prev) => [
        ...prev.filter((msg) => msg.status !== "typing"),
        {
          role: "assistant",
          content: response,
          timestamp: new Date(),
          status: "complete",
        },
      ])
      setIsLoading(false)
    }, 2000) // Simulate network delay
  }

  const generateHelpfulResponse = (query: string): string => {
    // This is a simplified example. In production, you would use the AI SDK
    if (query.toLowerCase().includes("what is") || query.toLowerCase().includes("define")) {
      return "Instead of giving you the direct definition, let's break this down together. What do you already know about this topic? This will help us build on your existing knowledge."
    }
    if (query.toLowerCase().includes("solve") || query.toLowerCase().includes("answer")) {
      return "Rather than solving this for you, let's work through it step by step. What's the first step you think we should take?"
    }
    return "That's an interesting question! Let's explore this topic together. What aspects would you like to understand better?"
  }

  const guidelines = [
    "I help you learn, but won't provide direct answers",
    "I encourage critical thinking and understanding",
    "I provide hints and examples to guide you",
    "I help break down complex problems into manageable steps",
    "I ensure age-appropriate content and explanations",
  ]

  const tools = [
    {
      icon: Book,
      title: "Vocabulary Helper",
      description: "Explore word meanings and usage",
    },
    {
      icon: Lightbulb,
      title: "Concept Explorer",
      description: "Break down complex ideas",
    },
    {
      icon: Shield,
      title: "Writing Assistant",
      description: "Improve your writing skills",
    },
  ]

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-4 right-4 z-50 rounded-full bg-primary p-3 text-white shadow-lg hover:bg-primary/90"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <Bot className="h-6 w-6" />
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className={`fixed bottom-20 right-4 z-50 w-[380px] overflow-hidden rounded-lg bg-background shadow-xl ${
              isExpanded ? "h-[80vh] w-[80vw] max-w-4xl" : "h-[600px]"
            }`}
          >
            <Card className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b p-4">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">AI Learning Assistant</h3>
                    <p className="text-xs text-muted-foreground">Here to help you learn</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => setIsExpanded(!isExpanded)}
                        >
                          {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>{isExpanded ? "Minimize" : "Maximize"}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <Tabs defaultValue="chat" className="flex-1">
                <TabsList className="mx-4 mt-2">
                  <TabsTrigger value="chat">Chat</TabsTrigger>
                  <TabsTrigger value="tools">Learning Tools</TabsTrigger>
                  <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
                </TabsList>

                <TabsContent value="chat" className="flex-1 px-4">
                  <ScrollArea className="h-[calc(100%-120px)] pr-4">
                    <div className="space-y-4 py-4">
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
                        >
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`rounded-lg px-4 py-2 ${
                              message.role === "assistant"
                                ? "bg-muted text-foreground"
                                : "bg-primary text-primary-foreground"
                            } max-w-[80%]`}
                          >
                            {message.status === "typing" ? (
                              <TypingAnimation />
                            ) : (
                              <>
                                <p className="text-sm">{message.content}</p>
                                <p className="mt-1 text-xs opacity-70">{message.timestamp.toLocaleTimeString()}</p>
                              </>
                            )}
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  {/* Input */}
                  <div className="flex items-center gap-2 border-t p-4">
                    <input
                      type="text"
                      placeholder="Ask a question..."
                      className="flex-1 rounded-md border px-3 py-2"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    />
                    <Button onClick={handleSend} disabled={!inputValue.trim() || isLoading}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="tools" className="px-4">
                  <ScrollArea className="h-[calc(100%-80px)] pr-4">
                    <div className="grid gap-4 py-4">
                      {tools.map((tool) => (
                        <Card key={tool.title} className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="rounded-lg bg-primary/10 p-2">
                              <tool.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{tool.title}</h4>
                              <p className="text-sm text-muted-foreground">{tool.description}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>

                <TabsContent value="guidelines" className="px-4">
                  <ScrollArea className="h-[calc(100%-80px)] pr-4">
                    <div className="space-y-4 py-4">
                      <div className="rounded-lg border bg-card p-4">
                        <h4 className="mb-2 font-semibold">How I Help You Learn</h4>
                        <ul className="space-y-2">
                          {guidelines.map((guideline, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <HelpCircle className="mt-1 h-4 w-4 shrink-0 text-primary" />
                              <span className="text-sm">{guideline}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-lg border bg-card p-4">
                        <h4 className="mb-2 font-semibold">Safety Features</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Grade-Appropriate Content</Badge>
                          <Badge variant="secondary">Teacher Monitoring</Badge>
                          <Badge variant="secondary">Content Filters</Badge>
                          <Badge variant="secondary">Usage Tracking</Badge>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
