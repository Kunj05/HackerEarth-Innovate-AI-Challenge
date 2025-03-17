'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';
import { useState } from 'react';

interface ToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  tool: {
    title: string;
    type: 'audio' | 'image' | 'text' | 'translate';
    description: string;
  };
}

export function ToolModal({ isOpen, onClose, tool }: ToolModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState('');

  const renderContent = () => {
    switch (tool.type) {
      case 'audio':
                return (
          <div className="space-y-4">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Upload {tool.type} file
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept={`${tool.type}/*`}
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
              </label>
            </div>
          </div>
        );
      case 'image':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Upload {tool.type} file
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept={`${tool.type}/*`}
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
              </label>
            </div>
          </div>
        );
      case 'text':
        return (
          <Textarea
            placeholder={`Enter text to ${tool.type === 'text' ? 'simplify' : 'translate'}...`}
            className="min-h-[200px]"
          />
        );

      case 'translate':
        return (
          <Textarea
            placeholder={`Enter text to ${tool.type === 'text' ? 'simplify' : 'translate'}...`}
            className="min-h-[200px]"
          />
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{tool.title}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-muted-foreground mb-4">{tool.description}</p>
          {renderContent()}
            <Button className="w-full mt-4 relative  cursor-not-allowed">
              Process
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}