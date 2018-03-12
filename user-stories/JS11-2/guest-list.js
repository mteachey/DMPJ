var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '


for (var i = 0; i<people.length; i++){
 if(people[i] === 'Phil' || people[i] === 'Lola') {
 refused.textContent += people[i] + ', ';
 } else {
 admitted.textContent += people[i] + ', ';
 }
} 

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';