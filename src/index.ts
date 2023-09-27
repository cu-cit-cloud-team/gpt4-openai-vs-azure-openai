import fs from 'node:fs';
import { oneLineTrim } from 'common-tags';
import OpenAI from 'openai';
import { v4 as uuidv4 } from 'uuid';

import { allPromptsToTest } from './lib/prompts.js';

// destructure environment variables we need
const {
  AZURE_OPENAI_BASE_PATH,
  AZURE_OPENAI_API_KEY,
  AZURE_OPENAI_MODEL_DEPLOYMENT,
  AZURE_OPENAI_API_VERSION,
  OPENAI_API_KEY,
  NODE_ENV,
} = process.env;

if (
  !AZURE_OPENAI_BASE_PATH ||
  !AZURE_OPENAI_API_KEY ||
  !AZURE_OPENAI_MODEL_DEPLOYMENT ||
  !AZURE_OPENAI_API_VERSION ||
  !OPENAI_API_KEY
) {
  // check that all required environment variables are set
  throw new Error(
    oneLineTrim`
      Missing one or more required environment variables:

      AZURE_OPENAI_BASE_PATH, AZURE_OPENAI_API_KEY, AZURE_OPENAI_MODEL_DEPLOYMENT, AZURE_OPENAI_API_VERSION, OPENAI_API_KEY
    `
  );
}

const { hrtime } = process;

// console.log(allPromptsToTest);

// create a unique run id
const runId = uuidv4();

// clear the console
console.clear();

// log run id to console
console.group(`Run ID: ${runId}`);

// instantiate the OpenAI client for Azure OpenAI
const azureOpenAI = new OpenAI({
  apiKey: AZURE_OPENAI_API_KEY,
  baseURL: `${AZURE_OPENAI_BASE_PATH}openai/deployments/${AZURE_OPENAI_MODEL_DEPLOYMENT}`,
  defaultQuery: { 'api-version': '2023-06-01-preview' },
  defaultHeaders: { 'api-key': AZURE_OPENAI_API_KEY },
});

// instantiate the OpenAI client for OpenAI
const openAI = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

// array to hold all results
const testResults = [];

for (const prompt of allPromptsToTest) {
  // start prompt test execution timer
  const promptTestStartTime = hrtime();

  // set chatConfig at the top of the loop
  const chatConfig: OpenAI.Chat.ChatCompletionCreateParams = {
    temperature: 1,
    top_p: 1,
    presence_penalty: 0.5,
    frequency_penalty: 0.5,
    max_tokens: 256,
    model: 'gpt-4-0613',
    messages: [],
    stream: false,
  };

  // set messages to the current prompt
  chatConfig.messages = prompt;

  // start openai timer
  const openaiStartTime = hrtime();

  // make chat completion request to openai
  const openAiResults = await openAI.chat.completions.create({
    ...chatConfig,
  });

  // stop openai timer
  const openaiEndTime = hrtime(openaiStartTime);

  // start azure openai timer
  const azureOpenaiStartTime = hrtime();

  // set model to azure openai model
  chatConfig.model = AZURE_OPENAI_MODEL_DEPLOYMENT;

  // make chat completion request to azure openai
  const azureOpenAiResults = await azureOpenAI.chat.completions.create({
    ...chatConfig,
  });

  // stop azure openai timer
  const azureOpenaiEndTime = hrtime(azureOpenaiStartTime);

  // stop execution timer
  const promptTestEndTime = hrtime(promptTestStartTime);

  // helper method to format execution times
  const formatExecutionTime = (endTime: number[]) =>
    `${(endTime[0] + endTime[1] / 1000000000).toFixed(3)} seconds`;

  // create result object
  const result = {
    prompt,
    openAI: openAiResults.choices[0].message,
    openAIexecutionTime: formatExecutionTime(openaiEndTime),
    azureOpenAI: azureOpenAiResults.choices[0].message,
    azureOpenAIexecutionTime: formatExecutionTime(azureOpenaiEndTime),
    totalExecutionTime: formatExecutionTime(promptTestEndTime),
  };
  testResults.push(result);

  // log results to console
  console.group('Prompt');
  console.dir(prompt);
  console.group('Results');
  console.group('OpenAI');
  console.log(openAiResults.choices[0].message);
  console.log(formatExecutionTime(openaiEndTime));
  console.groupEnd();
  console.group('Azure OpenAI');
  console.log(azureOpenAiResults.choices[0].message);
  console.log(formatExecutionTime(azureOpenaiEndTime));
  console.groupEnd();
  console.groupEnd();
  console.groupEnd();
  console.log('\n');
}
console.groupEnd();

// write results to file
const resultsFilePath = `./results/${runId}.json`;
fs.writeFileSync(resultsFilePath, JSON.stringify(testResults, null, 2));

// log results file to console
console.log(`Results as JSON: ${resultsFilePath}`);

// log total execution time to console
console.log(
  `Total Execution Time: ${(Bun.nanoseconds() / 1000000000).toFixed(3)} seconds`
);
