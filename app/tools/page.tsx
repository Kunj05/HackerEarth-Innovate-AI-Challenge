'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { features } from '@/components/features';
import { ToolModal } from '@/components/tool-modal';

export default function ToolsPage() {
  const [selectedTool, setSelectedTool] = useState<{
    title: string;
    type: 'audio' | 'image' | 'text' | 'translate';
    description: string;
  } | null>(null);

  const toolTypes = {
    'Audio/Video Processing': 'audio',
    'AI Image Descriptions': 'image',
    'Text-to-Speech for All Content': 'text',
    'Sign Language Recognition': 'translate',
  } as const;

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Accessibility Tools</h1>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore our suite of AI-powered tools designed to make digital content more
          accessible for everyone.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">{feature.icon}</div>
                <h2 className="text-2xl font-semibold">{feature.title}</h2>
              </div>
              <p className="text-muted-foreground mb-6">{feature.longDescription}</p>
              <Button
                className="w-full"
                onClick={() =>
                  setSelectedTool({
                    title: feature.title,
                    type: toolTypes[feature.title as keyof typeof toolTypes],
                    description: feature.longDescription,
                  })
                }
              >
                Try Now
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {selectedTool && (
        <ToolModal
          isOpen={!!selectedTool}
          onClose={() => setSelectedTool(null)}
          tool={selectedTool}
        />
      )}
    </div>
  );
}