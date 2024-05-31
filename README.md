## Table of Contents

- [Table of Contents](#table-of-contents)
- [Dead Net](#dead-net)
- [Project Description](#project-description)
- [How to Install](#how-to-install)
- [Technologies Used](#technologies-used)
  - [Front end](#front-end)
  - [Back end](#back-end)
  - [Database](#database)
  - [Artificial Intelligence](#artificial-intelligence)
- [Features](#features)
  - [Customizable player profiles](#customizable-player-profiles)
  - [Leaderboards](#leaderboards)
  - [Chatroom](#chatroom)
  - [Prompt game mode](#prompt-game-mode)
- [How to Start Playing](#how-to-start-playing)
  - [Account creation](#account-creation)
  - [Confirm your account](#confirm-your-account)
  - [Log into your account](#log-into-your-account)
  - [Enter the pre-game chat lobby](#enter-the-pre-game-chat-lobby)
- [How to Play the Game](#how-to-play-the-game)
  - [Writing phase](#writing-phase)
  - [Voting phase](#voting-phase)
  - [Results phase](#results-phase)
- [Licensing](#licensing)
- [References](#references)
  - [Sources](#sources)
- [List of file contents](#list-of-file-contents)
- [About Us](#about-us)

## Dead Net

Dead Net is a game where players must use their AI-detecting skills to distinguish between humans and AI chat bots and combat the rise of malicious AI in the future.

## Project Description

In the future, we believe that there will be an increase of bad actors programming malicious AI to scam, defraud, and misinform the general population. We are developing a game where players must distinguish between human and AI chat bots to combat the rise of malicious AI. We believe that a gaming environment is the best way to teach people strategies on how to detect AI-generated content because games will provide consistent positive feedback to users, which helps to reinforce their behaviour regarding AI.

## How to Install

Instructions on how to assemble this project's development environment on your computer.

1. Download and install Visual Studio Code from [here](https://code.visualstudio.com/).
2. Download and install Node.js from [nodejs.org](https://nodejs.org/).
3. Download and install Git from [git-scm.com](https://git-scm.com/).
4. Clone the repository
    ```sh
    git clone https://github.com/Beijzum/2800-202410-DTC04.git
    ```
5. Go to cmd/terminal and locate the directory of the cloned project
6. Open the command terminal and type:
    ```sh
    npm install
    ```
7. Create a MongoDb server and grab the relevant information
8. Create Cloudinary server and grab the relevant information
9. Create a GeminiAPI key
10. Create an .env file in the project directory
    ```js
    PORT=3000 (or any other number)
    MONGO_URI=[MongoDB URi]
    GEMINI_API_KEY=[Your Gemini API]
    MONGODB_PROTOCOL=mongodb+srv
    MONGODB_USER=[MongoDB User]
    MONGODB_PASSWORD=[MongoDB User Password]
    MONGODB_HOST=deadnet.vfbs8jn.mongodb.net
    MONGODB_DATABASE=userdata
    NODE_SESSION_SECRET=Javascript_is_Cool (Recommended to use a UID Generator)
    MONGODB_SESSION_SECRET=MongoDB_is_Cool (Recommended to use a UID Generator)
    CLOUDINARY_CLOUD_NAME=[Cloudinary Cloud Name]
    CLOUDINARY_CLOUD_KEY=[Cloudinary Cloud Key]
    CLOUDINARY_CLOUD_SECRET=Cloudinary_is_Cool (Recommended to use a UID Generator)
    COURIER_TOKEN=Cloudinary_is_always_Cool (Recommended to use a UID Generator)
    ```
11. Open the command terminal while in the project directory and type
    ```sh
    nodemon server.js
    or
    npm run dev
    ```
12. Go to your local browser (Chrome, Edge, Firefox. etc.) and go to
    localhost:3000 (your chosen port number)

## Technologies Used

The technologies that we used for the app.

### Front end

1. ejs: Server-side rendering of HTML templates.
2. flowbite: Tailwind CSS component library.
3. tailwind: CSS framework.
4. tailwindcss: Tailwind CSS framework.
5. postcss: Transforms styles with JavaScript plugins.
6. autoprefixer: PostCSS plugin to parse CSS and add vendor prefixes.
7. vite: A frontend build tool.

### Back end

1. @google/generative-ai: Google’s generative AI.
2. @trycourier/courier: Sending notifications via Courier.
3. bcrypt: Hashing passwords.
4. cloudinary: Managing and optimizing media assets.
5. connect-mongo: MongoDB session store for Express.
6. cors: Enables CORS (Cross-Origin Resource Sharing).
7. dayjs: Formatting dates.
8. dotenv: Loading environment variables from a .env file.
9. events: Node.js module for event-driven programming.
10. express: Web framework for Node.js.
11. express-session: Middleware for managing sessions in Express.
12. fs: Node.js module for filesystem operations.
13. http: Node.js module for HTTP server and client functionality.
14. joi: Data validation library.
15. multer: Handles multipart/form-data, which is used for file uploads.
16. nodemon: Restarts the server when file changes are detected.
17. socket.io: Real-time, bidirectional communication between web clients and servers.

### Database

1. mongodb: MongoDB driver for Node.js.

### Artificial Intelligence

GeminiAI, Google’s generative AI, is one of our main features in this web app. AI chatbots are used as core game mechanic in our game flow. They are used to create AI-generated responses depending on the prompt it is given during the course of the game.

We have also programmed the AI to receive instructions, which essentially creates personalities for the AI. Some instructions we created for the chatbots can replicate human language and speech patterns. Other chatbots will have instructions that make it easier to detect, so that players of all levels can enjoy the game.

We also used AI to generate our 200 in-game prompts. Each team member had to meticuously comb through the prompts for any potential issues such as confusing wording or obscure topics.

AI chatbots have a limit to how many requests you can make within a timeframe. For Gemini AI, we found that there is a hard limit of 40 requests per day. That is why we had to pivot to the prompt game mode during our app development process because our initial plan was to have players and AIs converse with each other to discover their identities. Each AI response is 1 request and a full game would have used up the daily limit.

Gemini AI has safety settings that prevent the bot from responding in any way related to the following four categories: harassment, hate speech, sexually explicit, and dangerous content. It will respond with an error message that describes why it cannot make a specific response to a prompt. We had to try/catch those response errors to prevent the bot from crashing the server and displaying a very AI-generated response.

## Features

Features found in the app.

### Customizable player profiles

Players are able to change their picture profiles, change their password, and check their stats in their profile page.

### Leaderboards

There is a leaderboard ranking for players with the highest amount of wins.

### Chatroom

Players can socialize in a pre-game chatroom if they are waiting for the game to start.

### Prompt game mode

In this game mode, players receive a prompt and they have to make a response to that prompt. All players and AIs have to respond to the prompt. Players must determine the AI responses and vote them out.

## How to Start Playing

Instructions on how to get started on playing the game.

### Account creation

You must register an account using a valid email. Emails must be a valid email (e.g. email@email.com)

Passwords must be at least 5 characters long and include at least one lowercase letter, one uppercase letter, one special character (@#$%^&+!.=), and one number. (e.g Asd!23)

### Confirm your account

You will receive an email confirmation in your inbox. Click confirm and you will be redirected to a confirmation page in the web app.

### Log into your account

You must be logged in to play Dead Net.

### Enter the pre-game chat lobby

Once you click on the "Play" button in the landing page or in the navbar, you will be redirected to a chat lobby where you can socialize with other players while you wait for the game to start. Once a minimum of **three** players is in the lobby and they have pressed the ready button, they will be redirected to a game instance after a countdown.

## How to Play the Game

Instructions for playing the game.

### Writing phase

One random prompt will be shared with all players and AIs in the game session. Everyone will type **one** response to that prompt and submit the response before the time runs out.

### Voting phase

Players will have to decide which response seems like the most AI-generated. You may only vote for **one** player.

### Results phase

The most voted player will be **eliminated** from the game. If players vote all the AIs out, then they win.

If there are still AIs present in the game, then the AIs will randomly choose a player to eliminate from the game. The AIs will win when there are more AIs than humans.

Afterwards, the game will continue into the next round with a new random prompt until the humans or AIs claim victory.

## Licensing

This project is licensed under the MIT License. You can find it [here.](./LICENSE)

## References

List of documentation for the technologies that we used.

1. [NodeJS](https://nodejs.org/docs/latest/api/)
2. [GeminiAI](https://ai.google.dev/gemini-api/docs)
3. [Sockets.io](https://socket.io/docs/v4/)
4. [ExpressEJS](https://expressjs.com/en/api.html)
5. [MonogDB](https://www.mongodb.com/docs/)
6. [MongoDB with NodeJS](https://learn.mongodb.com/learning-paths/using-mongodb-with-nodejs?_ga=2.245863168.561494376.1717162913-1483954595.1714368702)
7. [Cloudinary](https://cloudinary.com/documentation/image_upload_api_reference)

### Sources

Other sources we used for our project.

1. How to create a realtime chat room [https://www.youtube.com/watch?v=jD7FnbI76Hg]
2. ChatGPT used to create 200 random prompts and default AI responses [https://chatgpt.com]
3. Navbar class templates [https://flowbite.com/docs/components/navbar/]
4. Fisher-Yates shuffling algorithm [https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array]

## List of file contents

This is the file structure for our project.

Root Directory:

-   .env
-   .gitignore
-   .jshintrc
-   database.js
-   emailNotification.js
-   gameHandler.js
-   geminiAI.js
-   joiValidation.js
-   middleware.js
-   package-lock.json
-   package.json
-   pageRoutes.js
-   postcss.config.js
-   README.md
-   server.js
-   socketConstants.js
-   tailwind.config.js
-   websocket.js
-   documentation
    -   bugsList.md
    -   gameDoc.md
-   public
    -   chatModal.js
    -   chatroom.js
    -   forgotpass.js
    -   game.js
    -   index.js
    -   lobby.js
    -   login.js
    -   memes.js
    -   navbar.js
    -   postGameModal.js
    -   profile.js
    -   registerSuccess.js
    -   reset.js
    -   signUp.js
    -   style.css
    -   windowHandler.js
    -   images
        -   01bg.gif
        -   404.gif
        -   avatar0.jpg
        -   avatar1.jpg
        -   avatar10.jpg
        -   avatar11.jpg
        -   avatar12.png
        -   avatar13.png
        -   avatar14.jpg
        -   avatar15.jpg
        -   avatar16.jpg
        -   avatar17.jpg
        -   avatar18.jpg
        -   avatar19.jpg
        -   avatar2.jpg
        -   avatar20.jpg
        -   avatar21.png
        -   avatar22.png
        -   avatar23.png
        -   avatar24.png
        -   avatar3.jpg
        -   avatar4.jpg
        -   avatar5.jpg
        -   avatar6.jpg
        -   avatar7.jpg
        -   avatar8.jpg
        -   avatar9.jpg
        -   deadPicture.gif
        -   defaultProfilePicture.webp
        -   defeat.jpg
        -   game1.png
        -   game2.png
        -   game3.png
        -   game4.png
        -   game5.png
        -   heli.gif
        -   heli.png
        -   imHuman.jpg
        -   lobby1.png
        -   lobby2.png
        -   logo.png
        -   meme0.png
        -   meme1.jpg
        -   meme2.gif
        -   muteMusicIcon.png
        -   noGameRunning.gif
        -   playerListIcon.png
        -   playMusicIcon.png
        -   trapCard.jpg
        -   victory.jpg
        -   voteTransitionAnimation.gif
        -   waitTransitionAnimation.gif
    -   sfx
        -   button_sound_effect_1.mp3
        -   button_sound_effect_2.mp3
        -   button_sound_effect_3.mp3
        -   emergency_sound_effect.mp3
        -   gameLose.mp3
        -   gameWin.mp3
        -   heliAudio.mp3
        -   jazz.mp3
        -   lobby_music_1.mp3
        -   lobby_music_2.mp3
        -   nextGen.mp3
        -   no.mp3
        -   robot.mp3
        -   suspicious.mp3
        -   trapCard.mp3
        -   vote_intense_music_1.mp3
        -   vote_music_1.mp3
-   socketTemplates
    -   noGame.ejs
    -   result.ejs
    -   statusBar.ejs
    -   transition.ejs
    -   vote.ejs
    -   wait.ejs
    -   write.ejs
-   views
    -   404.ejs
    -   defeat.ejs
    -   error.ejs
    -   forgotpass.ejs
    -   forgotPassSuccess.ejs
    -   game.ejs
    -   howToPlay.ejs
    -   index.ejs
    -   leaderboard.ejs
    -   lobby.ejs
    -   login.ejs
    -   memes.ejs
    -   privacy.ejs
    -   profile.ejs
    -   registerSuccess.ejs
    -   reset.ejs
    -   signUp.ejs
    -   verify.ejs
    -   victory.ejs
    -   votingScreenSample.ejs
-   templates
    -   chatBar.ejs
    -   credentialField.ejs
    -   footer.ejs
    -   formSubmitButton.ejs
    -   gameNavbar.ejs
    -   header.ejs
    -   inGameNavbarElements.ejs
    -   leaderboardEntry.ejs
    -   lobbyGameNavbarElements.ejs
    -   navbar.ejs
    -   navbarItem.ejs
    -   postGameModalLose.ejs
    -   postGameModalWin.ejs
    -   responseCard.ejs
    -   websocketImport.ejs

## About Us

Team Name: DTC-04
Team Members :

-   Jason Chow - jchow149@my.bcit.ca
-   Jonathan Liu - jliu483@my.bcit.ca
-   Alex Park - spark329@my.bcit.ca
-   Richard Maceda - rmaceda1@my.bcit.ca
-   Jaiden Duncan - jduncan77@my.bcit.ca
