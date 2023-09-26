# ct-gpt4-openai-vs-azure-openai

Comparing GPT-4 API results between OpenAI and Azure OpenAI Services

NOTE: Work and documentation in progress

## About

We've been seeing inconsistent and sometimes less desireable results from the
Azure OpenAI Services vs the OpenAI directly. This repo is a place to test and
compare the results of the two services. These tests are using GPT-4 models.

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
            "content": "The sky appears blue to us because of a process called Rayleigh scattering. As the sun's light enters our atmosphere, it collides with small molecules in the air. The shorter wavelength light (like blue and violet colors) get scattered in multiple directions by this collision. \n\nEven though violet is scattered more than blue due to its shortest wavelength, we see the sky as blue rather than violet for two reasons: first, our eyes are more sensitive to blue color and second, sunlight reaches us more at the blue part of the spectrum rather than its violet end due to the sun itself emitting light stronger in the blue part of spectrum.\n\nThis scattered blue light reaches our eyes from all parts of the sky, not just directly from the sun, giving an overall perception that whole sky is colored blue."
          },
          "openAIexecutionTime": "6.878 seconds",
          "azureOpenAI": {
            "role": "assistant",
            "content": "The sky appears blue because of a process called Rayleigh scattering. As sunlight reaches Earth's atmosphere, it is scattered, or redirected, in all directions by the gas and particles in the air. However, blue and violet light are scattered more than other colors because they travel in smaller, shorter waves. Although violet light is scattered more than blue light, our eyes are not as sensitive to violet light and some of it gets absorbed by the ozone layer, so the sky we see appears blue."
          },
          "azureOpenAIexecutionTime": "5.588 seconds",
          "totalExecutionTime": "12.466 seconds"
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
            "content": "Dinosaurs went extinct about 65 million years ago, at the end of the Cretaceous Period, likely due to a combination of environmental changes and an asteroid impact.\n\nThe most accepted theory is that an asteroid around 10 kilometers in diameter hit Earth near what is now the Yucatan Peninsula in Mexico, causing catastrophic environmental changes which dinosaurs could not survive. This is known as the \"K-T Extinction Event\" or \"Cretaceous–Paleogene (K-Pg) extinction event.”\n\nThis event caused fast-moving, high-temperature debris to spread out across the globe igniting wildfires and causing a “nuclear winter” effect – with so much dust and particles thrown up into the atmosphere it would have blocked out sunlight, drastically reducing temperatures and disrupting plant life at the base of food chains.\n\nOther theories include intense volcanic activity, changes in climate, and diseases. However, these are less widely supported within the scientific community. It's possible that a combination of some or all these factors may have played a role in their extinction.\n"
          },
          "openAIexecutionTime": "16.819 seconds",
          "azureOpenAI": {
            "role": "assistant",
            "content": "Dinosaurs became extinct around 65.5 million years ago, at the end of the Cretaceous period, a time when there was lots of volcanic activity and changes in the climate. The most widely accepted theory about their extinction is the \"Asteroid Theory\" which suggests that a massive asteroid or comet hit the earth, leading to catastrophic conditions such as intense heat and shock waves. \n\nThis event would have triggered widespread fires, caused drastic temperature changes and resulted in months or even years of darkness due to dust clouds blocking sunlight. This could then have led to a chain reaction causing plant life to die off which forms the base of the food chain, causing herbivores to starve, followed by their predators.\n\nThere are also other theories suggesting that long term environmental changes like volcanic activities or climatic changes may also have contributed towards their extinction. However, it's generally agreed upon that it was likely a combination of many factors over both short and longer periods of time."
          },
          "azureOpenAIexecutionTime": "7.778 seconds",
          "totalExecutionTime": "24.597 seconds"
        }
      ]
    ```
