/*These are all the active learnings in this lesson. I did not look at their code or their recommendations for how to do each activity
I wanted to see if I could do them on my own*/

/*sort them to list just the Christmas messages. only print it in the list if it is a Christmas message.

Live output
Happy Birthday!
Merry Christmas my love
A happy Christmas to all the family
You're all I want for Christmas
Get well soon*/

var greeting =['Happy Birthday!',
'Merry Christmas my love',
'A happy Christmas to all the family',
'You\'re all I want for Christmas',
'Get well soon'];

var christmasGreetings = [];

for (var i = 0; i < greetings.length; i++) {
   if(greetings[i].indexOf('Christmas') >=0)
     {christmasGreetings.push(greetings[i]);}
}

console.log(christmasGreetings);

/*We want you to change them so that they are all lower case, except for a capital first letter. 
Live output
lonDon
ManCHESTer
BiRmiNGHAM
liVERpoOL*/

var list = ['Live output','lonDon','ManCHESTer', 'BiRmiNGHAM','liVERpoOL'];
var newList = [];


for (var i = 0; i < list.length; i++){
  newList[i]=list[i].toLowerCase();
  var firstLetter = newList[i][0];
  var capFirstLetter = firstLetter.toUpperCase();
  newList[i] = newList[i].replace(firstLetter,capFirstLetter);
}

console.log(newList);

/*the array contains a bunch of strings containing information about train stations in the North of England. The strings are data items that contain the three-letter station code, followed by some machine-readable data, followed by a semicolon, followed by the human-readable station name
We want to extract the station code and name, and put them together in a string with the following structure:

MAN: Manchester Piccadilly

Live output
MAN675847583748sjt567654;Manchester Piccadilly
GNF576746573fhdg4737dh4;Greenfield
LIV5hg65hd737456236dch46dg4;Liverpool Lime Street
SYB4f65hf75f736463;Stalybridge
HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield*/

var stationInfo = ['MAN675847583748sjt567654;Manchester Piccadilly',
'GNF576746573fhdg4737dh4;Greenfield',
'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
'SYB4f65hf75f736463;Stalybridge',
'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

var newStationInfo=[];


for (var i = 0; i < stationInfo.length; i++){
  var stationCode = stationInfo[i].slice(0,3);
  var splitString = stationInfo[i].split(';');
  var stationName = splitString[1];
  newStationInfo[i] = stationCode + ' : ' + stationName;
  
}

console.log(newStationInfo);
