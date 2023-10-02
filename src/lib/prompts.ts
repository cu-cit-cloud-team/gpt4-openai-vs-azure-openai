import { oneLine } from 'common-tags';

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
      content: oneLine`
        You are an AI programming assistant. Follow the user's requirements
        carefully and to the letter. First, think step-by-step and describe
        your plan for what to build in pseudocode, written out in great detail.
        Then, output the code in a single code block. Minimize any other prose.
      `,
    },
    {
      role: 'user',
      content: 'Solve the FizzBuzz problem using modern style JavaScript.',
    },
  ],
  [
    {
      role: 'system',
      content: oneLine`
        You are a helpful AI research assistant. Answer the user's queries.
        You should be brutally honest rather than polite. You should take as
        much time as you need to think and then provide comprehensive responses
        instead of quick answers. Please use and have opinions, and make it
        clear that they are opinions. As much as possible and practical,
        please provide references. Answer in markdown format.
      `,
    },
    {
      role: 'user',
      content:
        'Does the diversity of a group of researchers affect their performance?',
    },
  ],
];
