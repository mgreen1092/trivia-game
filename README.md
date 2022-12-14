# Golf Trivia

Test you knowledge of men's and women's golf history!

## Technologies

Project is created with:

- HTML5
- CSS
- JavaScript
- Google Fonts

## Setup

Website Screenshot:
<img width="1024" alt="Screen Shot 2022-10-27 at 1 45 05 PM" src="https://user-images.githubusercontent.com/111073609/198361944-39c378a5-fa1c-48b9-9c02-0440b4611e58.png">

Installation Instructions:

- No installation required

Wireframes:

- https://media.git.generalassemb.ly/user/45684/files/730bab78-7bf4-4231-be59-673b791411d3

User Story:

- As a user, I want to be able to read the directions if I don't know how to play
- As a user, I want to clearly know the trivia topic
- As a user, I want to be able to clearly see the trivia question and answer options
- As a user, I want to know that I have successfully clicked on an answer button
- As a user, I want to know if that answer is correct or not
- As a user, I want to know how many questions I got right

MVP Goals:

- Be able to click into a trivia game
- Instructions appear when clicking on the instructions button
- Have a trivia question appear with three multiple choice options
- After the response is selected an alert with correct or incorrect will appear
- After the alert, the next question will appear

Challenges and Unsolved Problems:

Creating the timer was the most challenging part of the project given how I had all the functions set up. When I first created the timer, it was in an infinite loop. To resolve this, I created an if, else statement to only allow the timer to decrement if the timer number was greater than or equal to one. I also needed to create a separate function to reset the timer when resetting the game.

One unsolved problem I currently have is adding a background image in the background of the trivia page to make it more eye catching. Ideally, I would like to have the background image rotate through with the questions. However, when I try to add a background image, there is white space at the bottom of the screen, almost as if a div is holding the space.

Another unsolved problem is the clapping sound for correct answers doesn't play if you answer a question too quickly after the previous question. I think this is due to the length of the audio clip.
