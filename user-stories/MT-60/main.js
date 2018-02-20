/*Generates a silly story when the "Generate random story" button is pressed.
Replaces the default name "Bob" in the story with a custom name, only if a custom name is entered into the "Enter custom name" text field before the generate button is pressed.
Converts the default US weight and temperature quantities and units in the story into UK equivalents if the UK radio button is checked before the generate button is pressed.
Will generate another random silly story if you press the button again (and again...)*/

/*Did not use any of the JS code from Mozilla (except how they wanted the 3 raw text strings stored in variables) for this coing problem*/

var randomize = document.querySelector('.randomize'); //store references to the form submit button 
var enteredName = document.querySelector('#customname');   //stores a reference to the text input form field in our HTML  

var story = document.querySelector('.story');

var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var insertY = ['the soup kitchen','Disneyland','the White House'];
var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

var us = document.querySelector('#us');
var uk = document.querySelector('#uk');

function sillyStoryGenerator () {

	var customName = enteredName.value;
	if(customName !== '')
	{ 
		storyText = storyText.replace('Bob',customName);
	};	

	  randomNumberX = Math.floor(Math.random() * 3) ;
	  randomNumberY = Math.floor(Math.random() * 3) ;
	  randomNumberZ = Math.floor(Math.random() * 3) ;
	  
	  sillyStory = storyText.replace(':insertx:',insertX[randomNumberX]);
 	  sillyStory = sillyStory.replace(':inserty:',insertY[randomNumberY]);
 	  sillyStory = sillyStory.replace(':insertz:',insertZ[randomNumberZ]);
      sillyStory = sillyStory.replace(':insertx:',insertX[randomNumberX]);

      
	  
	if(us.checked == true){
		sillyStory = sillyStory.replace('34 celsius','94 farenheit');
		sillyStory = sillyStory.replace('300 pounds','136 kilograms');
	};
	if(uk.checked == true){
		sillyStory = sillyStory.replace('94 farenheit','34 celsius');
		sillyStory = sillyStory.replace('136 kilograms','300 pounds');
	};

	story.style.visibility = 'visible';
	story.textContent = sillyStory;


}//end of SillyStoryGenerator

//sillyStoryGenerator();
randomize.addEventListener('click', sillyStoryGenerator); 
