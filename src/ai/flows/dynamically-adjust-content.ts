'use server';

/**
 * @fileOverview A flow for dynamically adjusting the amount of content displayed in a section based on user interaction and screen space.
 *
 * - dynamicallyAdjustContent - A function that determines whether to truncate or expand content.
 * - DynamicContentInput - The input type for the dynamicallyAdjustContent function.
 * - DynamicContentOutput - The return type for the dynamicallyAdjustContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DynamicContentInputSchema = z.object({
  sectionName: z.string().describe('The name of the section to adjust.'),
  content: z.string().describe('The full content of the section.'),
  userEngagement: z
    .number()
    .describe(
      'A numerical value representing user engagement with the section (e.g., clicks, hovers).'
    ),
  availableSpace: z
    .number()
    .describe(
      'A numerical value representing the available screen space for the section.'
    ),
});
export type DynamicContentInput = z.infer<typeof DynamicContentInputSchema>;

const DynamicContentOutputSchema = z.object({
  adjustedContent: z
    .string()
    .describe('The content adjusted to fit the available space and user engagement.'),
  shouldTruncate: z
    .boolean()
    .describe(
      'Whether the content should be truncated based on user engagement and available space.'
    ),
});
export type DynamicContentOutput = z.infer<typeof DynamicContentOutputSchema>;

export async function dynamicallyAdjustContent(
  input: DynamicContentInput
): Promise<DynamicContentOutput> {
  return dynamicallyAdjustContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dynamicContentPrompt',
  input: {schema: DynamicContentInputSchema},
  output: {schema: DynamicContentOutputSchema},
  prompt: `You are an AI assistant that helps to dynamically adjust content displayed in different sections of a portfolio application.

You will receive the section name, the full content, a numerical value representing user engagement, and a numerical value representing the available screen space.

Based on these inputs, you will determine whether the content should be truncated or fully expanded.

Consider these factors:
- High user engagement suggests the content should be expanded.
- Low user engagement suggests the content should be truncated.
- Limited available space suggests the content should be truncated.
- Ample available space suggests the content should be expanded.

Section Name: {{{sectionName}}}
Content: {{{content}}}
User Engagement: {{{userEngagement}}}
Available Space: {{{availableSpace}}}

Return the adjusted content and a boolean value indicating whether the content should be truncated.

Make sure to include an executive summary at the beginning. The executive summary includes a short summary of the key points covered in the content.

Output the adjusted content and a boolean value indicating whether the content should be truncated, as specified in the output schema. Do not output anything besides a JSON object conforming to the output schema.
`,
});

const dynamicallyAdjustContentFlow = ai.defineFlow(
  {
    name: 'dynamicallyAdjustContentFlow',
    inputSchema: DynamicContentInputSchema,
    outputSchema: DynamicContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
