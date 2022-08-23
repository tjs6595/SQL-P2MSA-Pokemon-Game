# SQL-P2MSA-Pokemon-Game
=======
## Inspiration
This mock game is inspired by Pokemon. The name Mockmon comes from the fact that we are mocking up a game that uses Pokemon characters, also, from the thinking that Mock, or MAC means that it is fast. It is a demo version of what could be a longer game. 

## Game Design
Our initial goal for the game was to be able to create a database of characters, NPC's(non-playable characters), stats on each character, and players of the game. Gameplay would include logging in as a player, then move your character around until you were pulled into a battle. From there a random character would appear to battle the player. If the player won, the player would then aquire the character, and it would be added to the players list of Pokemon(or Mockmon as in our case). All of the game characters stats would be saved in a database and pulled when needed. In developing the game, it became clear that the extent and complexity would be too much to accomplish in the short amount of time we had to complete the project. After much effort to get our initial design working, it was decided to scale back and move to a design that was more focused on the creation of the database. So, while we have the game running, it is not currently tied into our database, but our database is accessible, so adding characters is possible. 

## How to Use the Application
Database Controls
When you go to the website in the browser you are brought to the Home screen. From there the user can access the different functionality for the database using the top bar menu. They have access to a creation screen where they can create new Mockmon, they also have access to an index screen where they can access a list of the players in the database. From there they can access a character's individual details and either edit them or delete the character all-together.

Game Controls
Player movement keys:
A = move left
W = move up
S = move down
D = move right

Battles
If you enter the tall grass, wild Mockmon may attack you! Be careful to keep your player in good health before entering the grass.

Tall Grass
Move around in the tall grass until you find a Mockmon.

## Technologies Used to Build the Application
* MongoDB - used for datbase
* HTML - used for the game and React view pages
* CSS - used for styling React view pages
* JavaScript - used for the game mainly
* React - used for the website pages


## Outstanding Bugs
- There's an issue with the worm sprite showing correctly in the home page, and index page, but it is broken on the Wormber show page.
- Keep getting this warning: "Warning: Each child in a list should have a unique "key" prop."

## Unfinished Functionality
Here is a list of items that are unfinished:
- Tying the game into the database.
- Further styling changes.
- More fields in the database (more character stats)
- Adding more user experience items like pictures, more colors, etc.
- Creating more Mockmon sprites (only made Womrber and Puffig)
- The form needs more form validation, and we were hoping to make custom error messages too.