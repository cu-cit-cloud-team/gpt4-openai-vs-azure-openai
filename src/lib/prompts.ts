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
  [
    {
      role: 'system',
      content: oneLineTrim`
        You are an AI programming assistant. Follow the user's requirements
        carefully and to the letter. First, think step-by-step and describe
        your plan for what to build in pseudocode, written out in great detail.
        Then, output the code in a single code block. Minimize any other prose.
      `,
    },
    {
      role: 'user',
      content:
        'Solve the FizzBuzz problem using modern es2020 style JavaScript.',
    },
  ],
];
