import { oneLineTrim } from 'common-tags';

export interface PromptEntry {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export type Prompt = PromptEntry[];

export const allPromptsToTest: Prompt[] = [
  [
    {
      role: 'system',
      content: 'You are a helpful AI assistant.',
    },
    {
      role: 'user',
      content: 'Why is the sky blue?',
    },
  ],
  [
    {
      role: 'system',
      content: 'You are a helpful AI assistant.',
    },
    {
      role: 'user',
      content: 'Why are the dinosaurs extinct?',
    },
  ],
];
