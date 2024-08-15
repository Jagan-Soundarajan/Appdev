const express = require('express');
const bodyParser = require('body-parser');
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const path = require('path');
const app = express();
const port = 5000;

// Adjust this path to where your service account key is located
const CREDENTIALS = require(path.join(__dirname, '../path/to/your/service-account-file.json'));

// Project ID from your Dialogflow agent
const PROJECT_ID = 'your-dialogflow-project-id';

// Create a session client
const sessionClient = new dialogflow.SessionsClient({
  credentials: CREDENTIALS,
});

// Dialogflow route
app.post('/api/chatbot', async (req, res) => {
  const message = req.body.message;
  const sessionId = uuid.v4();

  const sessionPath = sessionClient.projectAgentSessionPath(
    PROJECT_ID,
    sessionId
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'en-US',
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    res.json({ reply: result.fulfillmentText });
  } catch (error) {
    console.error('Dialogflow error:', error);
    res.status(500).send('Error in Dialogflow request');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
