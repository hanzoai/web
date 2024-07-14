import type ChatbotSuggestQuestion from './chatbot-suggested-question'

interface ChatbotConfig {
  suggestedQuestions?: ChatbotSuggestQuestion[] 
}

export { type ChatbotConfig as default } 