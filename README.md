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

    ```json
      [
        {
          "input": [
            {
              "role": "system",
              "content": "You are a helpful AI assistant."
            },
            {
              "role": "user",
              "content": "Why is the sky blue?"
            }
          ],
          "openAI": {
            "role": "assistant",
            "content": "The sky appears blue because of a process called Rayleigh Scattering. As light moves through the atmosphere, most of the longer wavelengths pass straight through, hence little of the red, orange and yellow light is affected. However, much of the shorter wavelength light is absorbed by gas molecules which then scatter it in all directions. This scattered light is mostly blue or violet in colour. \n\nOur eyes are more sensitive to blue light and less sensitive to violet light. Also, some of the violet light gets absorbed in the atmosphere which further decreases our ability to see it. Therefore, we perceive the sky as being blue instead of violet.\n"
          },
          "openAIexecutionTime": "10.768 seconds",
          "azureOpenAI": {
            "role": "assistant",
            "content": "The sky appears blue because of a process called Rayleigh scattering. As sunlight reaches the Earth's atmosphere, it collides with molecules and tiny particles, and gets scattered in all directions. This scattering affects short-wavelength light, such blue and violet light, to a far greater degree than longer wavelength light, like red and yellow. However, we see the sky as blue instead of violet because our eyes are more sensitive to blue light and because sunlight reaches us more abundantly in the blue part of the spectrum."
          },
          "azureOpenAIexecutionTime": "4.004 seconds",
          "totalExecutionTime": "14.773 seconds"
        },
        {
          "input": [
            {
              "role": "system",
              "content": "You are a helpful AI assistant."
            },
            {
              "role": "user",
              "content": "Why are the dinosaurs extinct?"
            }
          ],
          "openAI": {
            "role": "assistant",
            "content": "The most widely accepted theory about the extinction of dinosaurs is the asteroid impact around 65 million years ago. A massive asteroid or comet around 6 miles in width hit what is now the Yucatan Peninsula in Mexico, creating a crater about 120 miles across. This event is known as the Chicxulub impact.\n\nThis would have caused massive destruction globally, including tsunamis, fires and releasing huge quantities of dust and gas into the atmosphere. This could have blocked out sunlight causing a long-lasting winter-like condition, which would ultimately affect plant growth and reduce food supply.\n\nWhile this catastrophic event likely played a significant role in dinosaur extinction, it's worth noting that not all scientists fully agree on this theory and other factors like intense volcanic activity, climate change and diseases might have also contributed to their extinction progressively over time.\n"
          },
          "openAIexecutionTime": "12.989 seconds",
          "azureOpenAI": {
            "role": "assistant",
            "content": "Dinosaurs are believed to have gone extinct approximately 65.5 million years ago, at the end of the Cretaceous Period, due to a catastrophic event known as the K-T Event (Cretaceous-Tertiary Event). The most widely accepted theory about this event is the asteroid impact hypothesis. \n\nAccording to this theory, a comet or asteroid around 10 kilometers (6 miles) in diameter hit the earth near what is now the Yucatán Peninsula in Mexico, causing a global catastrophe. The impact would have caused massive fires, tsunamis, severe weather changes including a \"nuclear winter\" effect with decreased sunlight which would harm photosynthesizing plants and disrupt the food chain.\n\nIt's worth noting that some dinosaurs evolved into modern-day birds, so not all dinosaur lineages became extinct. It's also worth mentioning that there were likely multiple factors contributing to dinosaurs' extinction over time such as volcanism and climate change.\n\nHowever, the exact reasons for dinosaur extinction are still being researched and debated among scientists."
          },
          "azureOpenAIexecutionTime": "10.710 seconds",
          "totalExecutionTime": "23.698 seconds"
        },
        {
          "input": [
            {
              "role": "system",
              "content": "You are an AI programming assistant. Follow the user's requirementscarefully and to the letter. First, think step-by-step and describeyour plan for what to build in pseudocode, written out in great detail.Then, output the code in a single code block. Minimize any other prose."
            },
            {
              "role": "user",
              "content": "Solve the FizzBuzz problem using modern es2020 style JavaScript."
            }
          ],
          "openAI": {
            "role": "assistant",
            "content": "Pseudocode:\n1. Start a loop from the number 1 to 100.\n2. In each iteration, check if the current number is divisible by both 3 and 5.\n3. If it is, print \"FizzBuzz\". \n4. Check if it's only divisible by 3.\n5. If it is, print \"Fizz\".\n6. If the number is only divisible by 5, print \"Buzz\". \n7. If none of those conditions are met, print the current number.\n\nJavaScript (ES2020) code:\n\n```javascript\nfor(let num = 1; num <= 100; num++){\n    let str = '';\n    if(num % 3 === 0){str += 'Fizz'}\n    if(num % 5 === 0){str += 'Buzz'}\n    console.log(str || num);\n}\n```\nUsing this code will log either 'Fizz', 'Buzz', 'FizzBuzz' or the real number to the console depending on which numbers are multiples of three and/or five when iterating from one through to a hundred."
          },
          "openAIexecutionTime": "16.285 seconds",
          "azureOpenAI": {
            "role": "assistant",
            "content": "Pseudocode:\n\n- Iterate over the numbers 1 to 100.\n- For each number:\n    - If the number is divisible by both 3 and 5, log \"FizzBuzz\" to the console.\n    - If the number is only divisible by 3, log \"Fizz\" to the console.\n    - If the number is only divisible by 5, log \"Buzz\" to the console.\n    - If it's not divisible by either, just log the number itself.\n\nCode: \n\n```javascript\nfor(let i=1; i<=100; i++){\n  \tif(i % 15 === 0)\n\t\tconsole.log(\"FizzBuzz\");\n\telse if(i % 3 === 0)\n\t\tconsole.log(\"Fizz\");\n\telse if(i % 5 === 0)\n\t\tconsole.log(\"Buzz\");\n\telse\n\t\tconsole.log(i);\n}\n```"
          },
          "azureOpenAIexecutionTime": "7.105 seconds",
          "totalExecutionTime": "23.390 seconds"
        }
      ]
    ```
