console.log('running');
/*****************************************************************************************
Create a repo for your tomagotchi pet
make a commit after you finish each one of the following






Create a Class (JS Class, look at your notes if your forget) for your tomagotchi

Create class tamagotchi - can later instantiate egg object and other objects for phases in its life
Need to give class tamagotchi properties that it will always have
	
	name
	type
	age ----> this will change over time and cause the pet to change into its other forms
	hunger
	sleepiness
	boredom
	thirst for blood



Instatiate your Tomagotchi
Initial phase will be egg. Other phases will occur as time passes and age reaches certain threshold
	Will need to use setInterval to keep track of time. every 5 minutes, age increases by 1?
	
	Every time age increases by 2 (so at 2, 4, 6), tamagotchi phase changes (if it is alive)
	
	



Display a character of your choice on the screen to represent your pet
	Allow user to choose between 3 animal types and display that specific type 
		USE EVENT LISTENER
		This might be too complicated and probably not necessary for MVP
	Use CSS sprite, append to page to show your guy. The img src will change based on age/state



Display the following metrics for your pet:


Hunger (1-10 scale)
	Hunger starts at 1 and increases by 1 every 2 seconds. At 10, your pet dies
	User can click a feed button that decreases hunger by 5. Hunger cannot go below 1
	As hunger increases, so does thirst for blood. this is bad, because user dies


Sleepiness (1-10 scale)
	Starts at 1 and increases by 1 every 2 seconds. at 10, your pet dies
	User can click the press the turn off the lights button and sleepiness decreases by 5. Cannot go below 1



Boredom (1-10 scale)
	Starts at 1 and increases by 1 every 5 seconds. at 10, your pet dies
	User can click play with pet button and boredom decreases by 5
	As boredom increases, thirst for blood also increases. this is bad, because user dies

Age
	Increases with interval. Add one every 30 seconds. At age 2, your pet morphs.

Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.

	Feed button
	Lights (display On or Off) - change color to make clear? yellow if on
	Play button - maybe two options? One satisfies boredom more than other

	Stats should be displayed as they change over time -----> 

		Hunger:
		Sleepiness:
		Boredom:
		Blood Lust:



Add the ability to name your pet.

	create name input box and grab this value.
	put value into name property of pet class


Style the page.










Increase your pet's age every x minutes
	Increases by 1 every 30 seconds



Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.





You pet should die if Hunger, Boredom, or Sleepiness hits 10.





Morph your pet at certain ages.



Animate your pet across the screen while it's alive.





*********************************************************************************************/
// create Pet class
// what are the parameters for our constructor?????
class Pet {
	constructor(hunger, sleepiness, boredom, bloodLust, maxBloodLust, age) {
		// this.name = $('input').val();
		this.hunger = hunger; 
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.bloodLust = bloodLust;
		this.maxBloodLust = maxBloodLust;	
		this.age = age;
	}
	isDead() {
		if(this.hunger > 10 || this.sleepiness > 10 || this.boredom > 10 || this.bloodLust > 20) {
				return true;
		}
	} 
}
// create the different phases
// change name to allow for user input
const monster = new Pet(5, 5, 5, 10, 20, 0);

const game = {
	counter: 0,

	start() {

	},
	timer() {
		// setInterval
		window.setInterval(() => {
			this.counter ++;

			if(monster.isDead()) {
			this.gameOver();
			};

			if(this.counter > 0 && this.counter % 30 === 0) {
				monster.age += 1;
				console.log(monster.age);
			} else if (this.counter > 0 && this.counter % 5 === 0) {
				monster.hunger += 1;

				monster.sleepiness += 1;

				monster.boredom += 1;

				monster.bloodLust += 1;

				console.log(monster.bloodLust);
			} 
		}, 1000);
	
			// increase age 
			// increase hunger, boredom, sleepiness
			// if he's dead 
				// game over 

	},
	feedPet() {
		monster.hunger = monster.hunger - 5;
		monster.bloodLust -= 5;
	},
	playWithPet() {
		monster.boredom = monster.boredom - 5;
		monster.bloodLust -= 5;
	},
	turnLightsOff() {
		monster.sleepiness = monster.sleepiness - 5;
	},
	morph() {

	},
	gameOver() {
		window.clearInterval();
		$('body').append('<h1>GAME OVER U SUCK</h1>')
	}
}



game.timer();





















































