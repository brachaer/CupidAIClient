# CupidAI - Matchmaking App - Client
## Created using React-Native, Expo, TypeScript, Axios

CupidAI is an innovative matchmaking app that leverages user self-depiction and the powerful OpenAI API to find the ideal partner.
This project comprises two distinct components: the server and the client. The server seamlessly manages user data using MongoDB and
orchestrates matchmaking through the OpenAI API. On the other hand, the client offers an intuitive and engaging user interface,
crafted with React Native, for users to interact with the app.

![Screenshot 2024-02-08 104454](https://github.com/brachaer/CupidAIClient/assets/145331020/40c22fe2-e3c8-475b-be2b-53846fe198fd)

CupidAI invites users to share their email and a personal description. Utilizing the OpenAI API, the app paints a vivid picture of the
user's perfect romantic match, complete with imaginative suggestions for potential meeting places such as bars, universities, coffee shops, and more.
Going beyond conventional matchmaking, CupidAI also explores the intriguing concept of connecting users based on past depictions, 
aiming for an impressive 70% compatibility match with another individual's email. Welcome to CupidAI, where technology meets the art of meaningful connections.

## Getting Started
#### Before running the application, ensure that you've set up the server and client environments.
#### This repository contains the client code.
#### If you haven't completed the server setup, please follow the instructions in the [Server Repository](https://github.com/brachaer/CupidAI)
 first.
#### Once the server setup is complete, proceed here for the next steps in the process.

### 1. Clone the repository:
      git clone <repository-url>
### 2.	Open terminal from client folder.
### 3.	Install client dependencies:
      npm install
### 5.	Run app:
      npm start

### Configuration Note
**Make sure your client is running on the same port as specified in the server's CORS configuration.**

## Running the Application
With both the server and client running, you can access the CupidAI app on your mobile device or emulator.

## Usage
Open the CupidAI app on your device.
Create a user profile by providing your email, self-depiction, and ideal partner preferences.
Find your match by clicking the "Find Your Match" button.
View your ideal match's information and suggested locations to meet.
