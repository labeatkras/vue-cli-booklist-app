<template>
  <div class="chatbot">
    <div v-for="message in messages" :key="message.id">
      <div v-if="message.type === 'user'" class="user-message">
        {{ message.text }}
      </div>
      <div v-if="message.type === 'bot'" class="bot-message">
        {{ message.text }}
      </div>
    </div>
    <form @submit.prevent="sendMessage">
      <input v-model="inputText" type="text" class="input-field" />
      <button type="submit" class="send-button">Send</button>
    </form>
  </div>
</template>

<script>
const openai = require("openai");
const client = new openai(api_key);

export default {
  data() {
    return {
      inputText: "",
      messages: [],
    };
  },
  methods: {
    async sendMessage() {
      const userMessage = this.inputText;
      this.inputText = "";
      this.messages.push({ id: Date.now(), type: "user", text: userMessage });
      const botMessage = await this.getBotMessage(userMessage);
      this.messages.push({ id: Date.now(), type: "bot", text: botMessage });
    },
    async getBotMessage(userMessage) {
      const prompt = userMessage;
      const model = "davinci";
      const params = {
        prompt: prompt,
        model: model,
        max_tokens: 150,
        temperature: 0.5,
        n: 1,
        stop: "\n",
      };
      const response = await client.completions.create(params);
      return response.choices[0].text;
    },
  },
};
</script>
<style scoped>
.chatbot {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  max-width: 400px;
  margin: 0 auto;
}

.user-message {
  background-color: #fff;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  max-width: 80%;
  align-self: flex-end;
}

.bot-message {
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  max-width: 80%;
  align-self: flex-start;
}

.input-field {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
  width: 80%;
}

.send-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
