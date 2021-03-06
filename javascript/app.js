// console.log('running');
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
	Increases with interval. Add one every 30 seconds. At age 2, your pet morphs. Age 4, morphs again. 

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
	constructor(hunger, sleepiness, boredom, bloodLust, age) {
		this.hunger = hunger; 
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.bloodLust = bloodLust;
		this.age = age;
	}
	levelUp() {
		if(this.age >= 2 && this.age < 4) {
			return true;
		}
	}
	evolve() {
		if(this.age >= 4) {
			return true;
		}
	}
	becomeAdult() {
		if(this.age >= 6) {
			return true
		}
	}
	isDead() {
		if(this.hunger > 10 || this.sleepiness > 10 || this.boredom > 10) {
				return true;
		}
	}
	killsUser() {
		if(this.bloodLust >=15) {
			return true;
		}
	}
	nameMonster() {
		$name.text($('input').val());
		game.start();	
	} 
}
// create the different phases
// change name to allow for user input
const $name = $('#name');
const monster = new Pet(0, 0, 0, 0, 0);
const $gameOver = $('.gameOver');
const $monsterMan = $('#dedede');
const $age = $('#age');
const $hunger = $('#hunger');
const $sleepiness = $('#sleepiness');
const $boredom = $('#boredom');
const $bloodLust = $('#bloodLust');
/*******************************************
Need to append attributes (Hunger, Boredom, etc) to screen. They already change dynamically with time and game methods
********************************************/
const game = {
	counter: 0,
	intervalId: null, // initial value
	start() {
		/******
		Need to have game start once user enters input for pet name
		******/
		this.timer();


	},
	updateValues() {
		// $('#name').text($('input').val());
		$age.text('Age: ' + monster.age);
		$hunger.text('Hunger: ' + monster.hunger);
		$sleepiness.text('Sleepiness: ' + monster.sleepiness);
		$boredom.text('Boredom: ' + monster.boredom);
		$bloodLust.text('Blood Lust: ' + monster.bloodLust);
	},
	timer() {
		// setInterval
		this.intervalId = setInterval(() => {
			this.counter ++;
			this.updateValues();

			if(monster.levelUp()) {
				this.firstMorph();
			}

			if(monster.evolve()) {
				this.secondMorph();
			}

			if(monster.becomeAdult()) {
				this.thirdMorph();
			}

			if(monster.isDead()) {
				this.gameOver();
			}

			if(monster.killsUser()) {
				this.userDies();
			}

			if(this.counter > 0 && this.counter % 10 === 0) {
				monster.age += 1;

			} else if (this.counter > 0 && this.counter % 2 === 0) {
				monster.hunger += 1;

				monster.sleepiness += 1;

				monster.boredom += 1;

				monster.bloodLust += 1;

			};
		}, 1000);
	
			// increase age 
			// increase hunger, boredom, sleepiness
			// if he's dead 
				// game over 

	},
	feedPet() {
 		if(monster.hunger >= 3) {
		monster.hunger -= 3;
		$monsterMan.velocity('callout.pulse', 2000);
		// console.log('food works');
		}
	},
	playWithPet() {
		if(monster.boredom >= 3) {
		monster.boredom -= 3;
		$monsterMan.velocity('callout.tada');
		}
		// console.log('play works');
	},
	turnLightsOff() {
		if(monster.sleepiness >= 3) {
		monster.sleepiness -= 3;
		$monsterMan.velocity('callout.shake', 2000);
		// console.log('lights work');
		}
	},
	quenchThirst() {
		if(monster.bloodLust >= 2) {
		monster.bloodLust -= 2;
		$monsterMan.velocity('callout.flash');
		}
	},
	firstMorph() {
		// $('#dedede').velocity('callout.shake');
		$monsterMan.attr('src', 'http://rs271.pbsrc.com/albums/jj127/Ariand54321/King%20Dedede/Taunt.gif~c200');
	},
	secondMorph() {
		// $('#dedede').velocity('callout.shake');
		$monsterMan.attr('src', 'http://rs271.pbsrc.com/albums/jj127/Ariand54321/King%20Dedede/Tumble_zps558cf398.gif~c200');
	},
	thirdMorph() {
		// $('#dedede').velocity('callout.shake');
		$monsterMan.attr('src', 'http://rs477.pbsrc.com/albums/rr134/Kaabiichan/Kirby%20Series/dededeawesomeface.gif~c200');
	},
	gameOver() {
		clearInterval(this.intervalId);
		$monsterMan.attr('src', 'http://rs271.pbsrc.com/albums/jj127/Ariand54321/King%20Dedede/Dizzy.gif~c200');
		if(monster.hunger > 10) {
			$gameOver.text("GAME OVER, " + $('input').val() + " starved to death!");
		} else if(monster.sleepiness > 10) {
			$gameOver.text("GAME OVER, " + $('input').val() + " fell into a coma!")
		} else {
			$gameOver.text("GAME OVER, you need to play wit " + $('input').val() + "!")
		}
		$monsterMan.velocity('transition.fadeOut', 10000);
	},
	userDies() {
		clearInterval(this.intervalId);
		$monsterMan.attr('src', 'https://media.giphy.com/media/jlaVt4m9UdyVO/200.gif');
		$gameOver.text($('input').val() + " had to satisfy its blood lust. USER DEAD.")
	}
}

/***********************************
Event listeners

Click on food, feedPet()
Click on play, play with pet
Click on lights, turn em off

***********************************/
$('#submit').on('click', monster.nameMonster);
$('#food').on('click', game.feedPet);
$('#lights').on('click', game.turnLightsOff);
$('#play').on('click', game.playWithPet);
$('#bloodThirst').on('click', game.quenchThirst);











































