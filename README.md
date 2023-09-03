# ChatGPT-Assisted-Notebook
MERN-fullstack web app built with React.js, MongoDB &amp; Mongoose, Node.js, Express.js. Implements OpenAI API, to utilize ChatGPT.

The ChatGPT Assisted Notebook App is a web-based application that allows users to create, manage, and summarize their notes with the assistance of OpenAI's GPT-3 language model. It provides a user-friendly interface for note-taking and can generate summaries of your notes for you.

Adding a Note:
![image](https://github.com/kavin-zhu/ChatGPT-Assisted-Notebook/assets/59909734/ea8e7e90-13de-4a10-9fdf-1734c7868d55)

ChatGPT Generated Summary:
![image](https://github.com/kavin-zhu/ChatGPT-Assisted-Notebook/assets/59909734/97a9c5f2-0486-4f0c-813b-f4dfb25c2953)

Editing a Note:
![image](https://github.com/kavin-zhu/ChatGPT-Assisted-Notebook/assets/59909734/baa30767-d9a1-4826-a9e1-60bded1775cb)


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
