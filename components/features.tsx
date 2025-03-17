'use client';

import { Card } from '@/components/ui/card';
import { Waves, Brain, Image as ImageIcon, HandMetal ,Mic ,Captions  } from 'lucide-react';

export const features = [
  {
    icon: <Waves className="h-8 w-8 text-primary" />,
    title: 'Audio/Video Processing',
    description: 'Real-time transcription and translation of audio and video content.',
    longDescription: 'Convert any audio or video content into accurate text transcriptions. Our AI-powered system supports multiple languages and can handle various file formats, making it perfect for creating subtitles, transcripts, or making media content accessible.',
  },
  {
    icon: <ImageIcon className="h-8 w-8 text-primary" />,
    title: 'AI Image Descriptions',
    description: 'Automatic generation of detailed alt-text for images using advanced AI.',
    longDescription: 'Generate detailed, context-aware descriptions for any image. Our AI system analyzes visual content and creates comprehensive alt-text that helps visually impaired users understand the content better.',
  },
  {
    icon: <HandMetal className="h-8 w-8 text-primary" />,
    title: 'Sign Language Recognition',
    description: 'Future feature: Real-time sign language interpretation.',
    longDescription: 'Coming soon: Advanced sign language recognition technology that will enable real-time interpretation between sign language and text, making communication more accessible for the deaf and for hearing community.',
  },
    {
    icon: <Waves  className="h-8 w-8 text-primary" />,
    title: 'Text-to-Speech for All Content',
    description: 'Real-time audio reading of text content for users with visual or reading impairments.',
    longDescription: 'Enable users to listen to any text-based content on the website, whether its articles, product descriptions, or instructions. Ideal for those with visual impairments, dyslexia, or anyone who prefers auditory learning',
  },
      {
    icon: <Captions   className="h-8 w-8 text-primary" />,
    title: 'Automatic Captioning for Live Content',
    description: 'Real-time captions for live-streamed videos or virtual meetings.',
    longDescription: 'Provide real-time captions for live content (e.g., webinars, video calls, virtual meetings). This feature is beneficial for people with hearing impairments and ensures that they dont miss out on key discussions or information.',
  },
        {
    icon: <Mic   className="h-8 w-8 text-primary" />,
    title: 'Voice-Controlled Navigation',
    description: 'Hands-free website navigation for users with motor impairments.',
    longDescription: 'Enable users to control the website through voice commands. This feature is ideal for people who are unable to use a mouse or keyboard and need to navigate the website using voice commands (e.g., "Click home," "Open menu," etc.).',
  },
];

export function Features() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </Card>
      ))}
    </div>
  );
}