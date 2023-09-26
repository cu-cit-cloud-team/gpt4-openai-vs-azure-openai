# ct-gpt4-openai-vs-azure-openai

Comparing GPT-4 API results between OpenAI and Azure OpenAI Services

NOTE: Work and documentation in progress

## About

We've been seeing inconsistent and less desireable results from Azure
OpenAI Services vs the OpenAI API. This repo is a place to test and
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
