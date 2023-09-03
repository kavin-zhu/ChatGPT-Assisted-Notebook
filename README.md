# ChatGPT-Assisted-Notebook
MERN-fullstack web app built with React.js, MongoDB &amp; Mongoose, Node.js, Express.js. Implements OpenAI API, to utilize ChatGPT.

The ChatGPT Assisted Notebook App is a web-based application that allows users to create, manage, and summarize their notes with the assistance of OpenAI's GPT-3 language model. It provides a user-friendly interface for note-taking and can generate summaries of your notes for you.

Adding a Note:
![image](https://github.com/kavin-zhu/ChatGPT-Assisted-Notebook/assets/59909734/97816025-f961-45ba-b14c-2c2e97e27519)

ChatGPT Generated Summary:
![image](https://github.com/kavin-zhu/ChatGPT-Assisted-Notebook/assets/59909734/b7c0ce17-32cd-45d2-bd72-5aa823e6f52e)

Editing a Note:
![image](https://github.com/kavin-zhu/ChatGPT-Assisted-Notebook/assets/59909734/cf2da08d-262a-4fe8-9d0d-4fc2ef2d73bb)


Features

Note Creation: Create new notes with titles and content.

Note Editing: Edit existing notes.

Note Deletion: Delete unwanted notes.

Note Summarization: Generate summaries for your notes using OpenAI's GPT-3.

Responsive Design: The app is responsive and works well on various devices.
Technologies Used

Frontend: The frontend of the application is built using React, a popular JavaScript library for building user interfaces. 

Backend: The backend is implemented with Node.js and Express.js. It handles API requests, connects to the MongoDB database, and serves the frontend.

Database: MongoDB is used as the database to store notes. Mongoose, a MongoDB object modeling library, is utilized to interact with the database.

OpenAI GPT-3: OpenAI's GPT-3 is employed to generate summaries of the user's notes.


Getting Started

Follow these instructions to set up and run the ChatGPT Assisted Notebook App on your local machine.


Prerequisites

Node.js and npm should be installed on your computer.

MongoDB should be installed and running.


Installation

Clone the repository to your local machine's terminal:

'git clone https://github.com/your-username/ChatGPT-Assisted-Notebook.git'

Navigate to the project directory:

'cd ChatGPT-Assisted-Notebook'

Install the dependencies:

'npm install'

Get an API key from OpenAI by following their instructions. Replace 'OPENAI_API_KEY' in the GenerateText.jsx file with your key.


Running the Application

Start the MongoDB server. You can do this by running the 'mongod' command in a terminal window.

run 'npm start'


Usage
Create notes by entering a title and content and clicking the "Add" button.
Click the "Edit" button on a note to edit it.
Click the "Delete" button to remove a note.
Click the "Generate Summary" button to generate a summary of all your notes using GPT-3.
