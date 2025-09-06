"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';
import { dynamicallyAdjustContent } from '@/ai/flows/dynamically-adjust-content';
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';

const fullContent = "With over five years of immersive experience in the tech industry, I have cultivated a deep expertise in full-stack development, specializing in creating robust, scalable, and user-centric web applications. My journey began with a strong foundation in computer science, which I have continuously built upon by mastering modern technologies such as React, Next.js, and Node.js. My passion for clean, efficient code and elegant architectural patterns drives me to deliver high-quality software solutions. \n\nBeyond front-end and back-end development, I have a profound interest in the burgeoning field of Artificial Intelligence. I have dedicated significant time to understanding and implementing machine learning models, particularly in the domain of Natural Language Processing (NLP). This has allowed me to build intelligent features into applications, such as AI-driven chatbots, content summarization tools, and personalized recommendation engines. I am constantly exploring the intersection of AI and user experience, striving to create more intuitive and impactful digital products. I thrive in collaborative environments and am always eager to tackle new challenges and learn from my peers.";

export function AboutMe() {
  const [content, setContent] = useState('');
  const [isTruncated, setIsTruncated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [engagement, setEngagement] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const updateContent = useCallback(async (forceExpand = false) => {
    setIsLoading(true);
    try {
      const availableSpace = containerRef.current?.offsetWidth || 500;
      const response = await dynamicallyAdjustContent({
        sectionName: 'About Me',
        content: fullContent,
        userEngagement: forceExpand ? 100 : engagement,
        availableSpace: availableSpace,
      });

      setContent(response.adjustedContent);
      setIsTruncated(forceExpand ? false : response.shouldTruncate);
    } catch (error) {
      console.error('Failed to adjust content:', error);
      toast({
        title: 'Error',
        description: 'Could not load dynamic content. Displaying full text.',
        variant: 'destructive',
      });
      setContent(fullContent);
      setIsTruncated(false);
    } finally {
      setIsLoading(false);
    }
  }, [engagement, toast]);

  useEffect(() => {
    const timer = setTimeout(() => {
        updateContent();
    }, 100);
    return () => clearTimeout(timer);
  }, [updateContent]);

  const handleInteraction = () => {
    setEngagement(prev => prev + 1);
  };

  const toggleContent = () => {
    if (isTruncated) {
      updateContent(true);
    } else {
      setEngagement(0);
      updateContent(false);
    }
  };
  
  return (
    <Section id="about" title="About Me">
      <div ref={containerRef} onMouseEnter={handleInteraction}>
        {isLoading && !content ? (
          <div className="space-y-3">
            <div className="h-4 bg-card rounded w-full animate-pulse" />
            <div className="h-4 bg-card rounded w-5/6 animate-pulse" />
            <div className="h-4 bg-card rounded w-full animate-pulse" />
            <div className="h-4 bg-card rounded w-3/4 animate-pulse" />
          </div>
        ) : (
          <p className="text-muted-foreground leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{content}</p>
        )}
      </div>
      {(isTruncated !== null && (isTruncated || !isTruncated && content !== fullContent)) && (
        <div className="mt-4">
          <Button
            onClick={toggleContent}
            variant="link"
            className="p-0 text-primary/80 hover:text-primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              isTruncated ? 'Show More' : 'Show Less'
            )}
          </Button>
        </div>
      )}
    </Section>
  );
}
