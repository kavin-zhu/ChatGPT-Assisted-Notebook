# ChatGPT-Assisted-Notebook
MERN-fullstack web app built with React.js, MongoDB &amp; Mongoose, Node.js, Express.js. Implements OpenAI API, to utilize ChatGPT.

The ChatGPT Assisted Notebook App is a web-based application that allows users to create, manage, and summarize their notes with the assistance of OpenAI's GPT-3 language model. It provides a user-friendly interface for note-taking and can generate summaries of your notes for you.

Adding a Note:
![image](https://github.com/kavin-zhu/ChatGPT-Assisted-Notebook/assets/59909734/97816025-f961-45ba-b14c-2c2e97e27519)

ChatGPT Generated Summary:
![image](https://github.com/kavin-zhu/ChatGPT-Assisted-Notebook/assets/59909734/b7c0ce17-32cd-45d2-bd72-5aa823e6f52e)

Editing a Note:
![image](https://github.com/kavin-zhu/ChatGPT-Assisted-Notebook/assets/59909734/cf2da08d-262a-4fe8-9d0d-4fc2ef2d73bb)

## Features

- **Note Creation:** Create new notes with titles and content.
- **Note Editing:** Edit existing notes.
- **Note Deletion:** Delete unwanted notes.
- **Note Summarization:** Generate summaries for your notes using OpenAI's GPT-3.
- **Responsive Design:** The app is responsive and works well on various devices.

## Technologies Used

### Frontend

The frontend of the application is built using React, a popular JavaScript library for building user interfaces.

### Backend

The backend is implemented with Node.js and Express.js. It handles API requests, connects to the MongoDB database, and serves the frontend.

### Database

MongoDB is used as the database to store notes. Mongoose, a MongoDB object modeling library, is utilized to interact with the database.

### OpenAI GPT-3

OpenAI's GPT-3 is employed to generate summaries of the user's notes.

## Getting Started

Follow these instructions to set up and run the ChatGPT Assisted Notebook App on your local machine.

### Prerequisites

- Node.js and npm should be installed on your computer.
- MongoDB should be installed and running.

### Installation

1. Clone the repository to your local machine's terminal:
   ```shell
   git clone https://github.com/your-username/ChatGPT-Assisted-Notebook.git


2. Open your terminal and navigate to the project directory:

   ```shell
   cd ChatGPT-Assisted-Notebook

3. Install Dependencies:

   ```shell
   npm install
   
4. Get an OpenAI API Key:

  Obtain an API key from OpenAI by following their instructions.

  Once you have the API key, open the GenerateText.jsx file in your project.

  Locate the following line in the GenerateText.jsx file:

  ```javascript
  const apiKey = "OPENAI_API_KEY";
  ```
5. Running the Application:

  Before running the application, make sure the MongoDB server is up and running. Start the MongoDB server by running:

  ```shell```
  mongod
  
  Start the ChatGPT Assisted Notebook App by running:
  
  ```shell```
  npm start

### Usage
Once the application is running, you can use it as follows:
  
- **Create Notes:** Enter a title and content for your note, then click the "Add" button.
- **Edit Notes:** Click the "Edit" button on a note to make changes.
- **Delete Notes:** To remove a note, click the "Delete" button.
- **Generate Summaries:** Click the "Generate Summary" button to create summaries of all your notes using GPT-3.
   
   
