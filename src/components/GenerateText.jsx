import React from "react";
import { Configuration, OpenAIApi } from "openai"; // Import OpenAI SDK
import axios from "axios";

function GenerateText(props) {
  async function handleSummarize() {
    try {
      console.log("Generating summary...");

      const apiKey = "OPENAI_API_KEY"; // Access the environment variable
      console.log("API Key:", apiKey);

      if (!apiKey) {
        console.error("OpenAI API key not found.");
        return;
      }

      // Create a new OpenAI API instance
      const configuration = new Configuration({
        apiKey: apiKey,
      });

      const openai = new OpenAIApi(configuration);

      const notesText = props.notesText;
      console.log("Notes Text:", notesText);
      const model = "text-davinci-003";
      const prompt = `Generate a summary for the following notes:\n\n${notesText}`;
      const temperature = 0.6;
      const max_tokens = 150; // Adjust as needed

      // Use the OpenAI SDK to create a completion
      const response = await openai.createCompletion({
        model: model,
        prompt: prompt,
        temperature: temperature,
        max_tokens: max_tokens,
      });

      console.log("Summary:", response.data.choices[0].text);
      const generatedSummary = response.data.choices[0].text;

      // Send the generated summary to server to create a new note
      await axios.post("http://localhost:5000/api/notes", {
        title: "Generated Summary",
        content: generatedSummary,
      });

      props.onSummarize(); // Call the parent component's onSummarize function to refresh notes
    } catch (error) {
      console.error("Error generating summary:", error);
    }
  }

  return (
    <div className="generate-text">
      <button className="generate-button" onClick={handleSummarize}>
        Generate Summary
        <div className="tooltip">Powered by ChatGPT</div>
      </button>
    </div>
  );
}

export default GenerateText;
