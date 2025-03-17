'use client';

import { Button } from '@/components/ui/button';
import { Features } from '@/components/features';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Globe, Lightbulb, MessageSquareMore } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Making Digital Content Accessible to Everyone
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Break down digital barriers with AI-powered accessibility tools for transcription,
            translation, and content adaptation.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/tools">
                <Globe className="mr-2 h-5 w-5" /> Try Now
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Lightbulb className="mr-2 h-5 w-5" /> Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
          <Features />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does the audio transcription work?</AccordionTrigger>
              <AccordionContent>
                Our AI-powered system processes audio in real-time, converting speech to text
                with high accuracy. It supports multiple languages and can handle various
                audio formats.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What image formats are supported for AI descriptions?
              </AccordionTrigger>
              <AccordionContent>
                We support all common image formats including JPG, PNG, GIF, and WebP. Our AI
                can analyze images and provide detailed, context-aware descriptions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How accurate is the text simplification feature?
              </AccordionTrigger>
              <AccordionContent>
                Our text simplification algorithm maintains the core meaning while making
                content more accessible. It works best with educational and informational
                content.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                When will sign language recognition be available?
              </AccordionTrigger>
              <AccordionContent>
                Sign language recognition is currently in development. We're working with
                experts to ensure accuracy and cultural sensitivity in our implementation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-muted-foreground mb-8">
            Our team is here to assist you with any questions or concerns.
          </p>
          <Button size="lg">
            <MessageSquareMore className="mr-2 h-5 w-5" /> Contact Support
          </Button>
        </div>
      </section>
    </div>
  );
}