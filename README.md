# ct-gpt4-openai-vs-azure-openai

Comparing GPT-4 API results between OpenAI and Azure OpenAI Services

NOTE: Work and documentation in progress

## About

We've been seeing inconsistent and less than desireable results from the
Azure OpenAI Services when working with our own data.

We wanted to be able to identify if the poor results were exclusive to working
with our own data or if something was fundamentally different when working with
GPT-4 models via Azure OpenAI vs OpenAI directly.

This repo is a place to test and compare the results of the two services using
different system prompts and some general questions.

## Running Locally

### Prerequisites

- Node.js >= 18.x (with npm >= v8.x)
- Azure Subscription
  - Azure OpenAI access enabled
  - GPT-4 access enabled
  - Azure OpenAI Services deployed along with a GPT-4 model
    - API key for deployed service
- OpenAI API key

### Getting Started

1. Clone repo
    - `git clone https://github.com/CU-CommunityApps/ct-gpt4-openai-vs-azure-openai.git`
1. Enter directory
    - `cd ct-gpt4-openai-vs-azure-openai`
1. Install dependencies
    - `npm install`
1. Copy `.env.example` to `.env` and then replace necessary values `cp .env.example .env`
    - see comments in `.env.example` for more info
1. Run the demos:
    - `npm run demo`
1. Example results:

    ```shell
      Run ID: d564433c-35d2-48c4-9581-4bd6186e7c48
      Prompt
      [
        {
          role: "system",
          content: "You are a helpful AI assistant."
        }, {
          role: "user",
          content: "Why is the sky blue?"
        }
      ]
      Results
      OpenAI
      {
        role: "assistant",
        content: "The sky appears blue because of a process called Rayleigh scattering. As sunlight reaches Earth's atmosphere, its short wavelength light (blue and violet) is scattered in all directions by the gas molecules in the air. However, our eyes are much more sensitive to blue light and less sensitive to violet light. Additionally, sunlight reaches us more from the blue part of the spectrum, rather than the violet end. Therefore, when we look up at the sky, we perceive it as blue instead of violet.\n"
      }
      10.585 seconds
      Azure OpenAI
      {
        role: "assistant",
        content: "The sky appears blue due to a process called Rayleigh scattering. As sunlight travels through the Earth's atmosphere, it collides with gas molecules and tiny particles which causes the light to scatter in all directions. Blue light is scattered more than other colors because it travels in shorter, smaller waves. So when you look up at the sky, what you're seeing is this blue light that has been scattered from all over the sky."
      }
      3.376 seconds


      Prompt
      [
        {
          role: "system",
          content: "You are a helpful AI assistant."
        }, {
          role: "user",
          content: "Why are the dinosaurs extinct?"
        }
      ]
      Results
      OpenAI
      {
        role: "assistant",
        content: "Dinosaurs went extinct approximately 65.5 million years ago, at the end of the Cretaceous Period, in an event known as the Cretaceous-Paleogene (K–Pg) extinction event. The most widely accepted theory for this extinction event is that a comet or asteroid about 10 kilometers in diameter hit Earth in the Yucatan Peninsula (in what's now Mexico), resulting in a series of environmental changes that were unsuitable for dinosaurs and many other life forms.\n\nThis impact would have caused massive tsunamis, fires, and released an enormous amount of dust into the atmosphere which blocked sunlight for several months or even years. This would have resulted in a dramatic drop in temperature (a phenomena often referred to as \"nuclear winter\"), disrupting photosynthesis and causing food chains to collapse, leading to the extinction of most dinosaur species.\n\nHowever, it's important to note that not all dinosaurs went extinct—birds are modern descendants of a group of two-legged dinosaurs known as theropods.\n"
      }
      19.867 seconds
      Azure OpenAI
      {
        role: "assistant",
        content: "Dinosaurs became extinct around 65.5 million years ago, at the end of the Cretaceous Period, likely due to a catastrophic event often attributed to a large asteroid or comet strike near what is now the Yucatán Peninsula in Mexico. The impact would have caused massive tsunamis and sent up a dust cloud that blocked sunlight for possibly up to a year, resulting in a dramatic change in climate termed an \"impact winter.\"\n\nThis sudden change would have severely impacted plant life and drastically reduced available food resources, causing a domino effect through the food chains. This theory is supported by the existence of a layer of rock called the K-T Boundary (Cretaceous-Tertiary Boundary) filled with unusually high amounts of iridium typically found in asteroids, found all over Earth.\n\nBesides the asteroid theory, other hypotheses pointing to intense volcanic activity or climatic shifts have also been proposed. However, it's widely accepted that it could be a combination of these factors that led to their mass extinction.\n\nIt should be noted that not all dinosaur descendants went extinct 65.5 million years ago. Birds are modern descendants of a group of two-legged dinosaurs known as theropods."
      }
      17.507 seconds


      Prompt
      [
        {
          role: "system",
          content: "You are an AI programming assistant. Follow the user's requirements carefully and to the letter. First, think step-by-step and describe your plan for what to build in pseudocode, written out in great detail. Then, output the code in a single code block. Minimize any other prose."
        },
        {
          role: "user",
          content: "Solve the FizzBuzz problem using modern style JavaScript."
        }
      ]
      Results
      OpenAI
      {
        role: "assistant",
        content: "- Initialize a loop from 1 up to 100. (I include 100 as usually in such problems, the maximum value is inclusive).\n- For each iteration:\n   - If the current number i is divisible by both 3 and 5, print \"FizzBuzz\"\n   - Else if it is only divisible by 3, print \"Fizz\"\n   - Else if it's only divisible by 5, print \"Buzz\"\n   - If none of these conditions are satisfied i.e., it's neither divisible by 3 nor 5, simply print the number itself.\n\nHere is the JavaScript code implementing this logic:\n\n```javascript\nfor(let i=1; i<=100; i++){\n    if(i % (3*5) === 0)\n        console.log(\"FizzBuzz\");\n    else if(i % 3 === 0)\n        console.log(\"Fizz\");\n    else if(i % 5 === 0)\n        console.log(\"Buzz\");\n    else\n        console.log(i);\n}\n```"
      }
      21.811 seconds
      Azure OpenAI
      {
        role: "assistant",
        content: "Pseudocode:\n1. Initialize a loop to iterate from 1 to 100.\n2. In each iteration, check if the current number is divisible by both 3 and 5.\n3. If it is, print \"FizzBuzz\".\n4. If it is not, check if the current number is divisible by 3.\n5. If it is, print \"Fizz\".\n6. If it's not divisible by 3, check whether the current number is divisible by 5.\n7. If it is, print \"Buzz\".\n8. If the number is neither divisible by 5 nor 3 then just print the number.\n\nJavaScript Code:\n\n```javascript\nfor (let i=1; i <=100; i++){\n    if (i % 15 == 0)\n        console.log(\"FizzBuzz\");\n    else if (i % 3 == 0)\n        console.log(\"Fizz\");\n    else if (i % 5 == 0)\n        console.log(\"Buzz\");\n    else \n        console.log(i);\n}\n```\n"
      }
      7.747 seconds


      Results as JSON: ./results/d564433c-35d2-48c4-9581-4bd6186e7c48.json
      Total Execution Time: 80.931 seconds
    ```
