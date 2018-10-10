Jeopardy
DTR link:
https://gist.github.com/lorynmason/2579b3ab535eeb7e1a1513922487e383
Project Background:
This project will help us learn object-oriented programming (OOP) principles by building the game Jeopardy. This project is an opportunity for us to use classes and to build a program in a larger scale than what we have previously done in other projects. This project is also an opportunity for us to build out a program based on user stories. In this project, we will also approach our challenges with an analytical approach.

Project Goals:
Write a program from scratch
Design and implement OOP patterns
Understand and implement ES6 classes
Implement array iterator and mutator methods to work with game data
Write modular, reusable code that follows SRP (Single Responibility Principle)
Create a robust test suite that thoroughly tests all functionality of a client-side application
About the game:
Game play:

Must have 3 players
Must have 3 rounds - 3 rounds make up 1 game
The winner is determined by the player with the highest total score at the end all rounds
Each player starts with a score of 0
Each player's score should be displayed by their name
Each player gets an individual turn (rather than every player racing to answer the question)
Rounds:

1st Round must have 4 categories, with 5 clues each, and point values ranging from 100 - 500
One clue in the first round must be a 'Daily Double'
2nd Round must have 4 categories, with 5 clues each, and point values ranging from 200 - 1,000
Two clues in the second round must be a 'Daily Double'
3rd Round must have a single category and a single clue that behaves like a 'Daily Double'
3rd Round must only display the category, allow each player to input a wager, then display the clue
Clues:

Each clue should only appear once per game
'Daily Double' clues must accept a wager from the player who selects it
The wager can range from a minimum of 5 points to a maximum of either:
the player's current total score
the highest point value remaining on the board
(whichever is greater)
As a player:

I should be able to quit/start a new game at any time
I should be able to enter my name
When it is my turn:
I should be able to select a category and point value off the board, as long as it hasn't already been previously selected
I should be able to input a wager if I have selected a 'Daily Double' clue
I should be able to input an answer after the clue I selected has been revealed
My score should increment or decrement by the point value of the clue if I answered right or wrong, respectively
Design
Our Inspiration:

screen shot 2018-10-09 at 2 46 32 pm

We choose this as our inspiration because we liked the rounded edges, the drop shadow, and the overall clean look of the button.

Our Wireframes:

screen shot 2018-10-09 at 2 49 25 pm

screen shot 2018-10-09 at 2 50 44 pm

screen shot 2018-10-09 at 2 51 07 pm
