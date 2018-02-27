var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {
  var choice = select.value;

	if(choice === 'January' || choice === 'March' || choice === 'May' || choice === 'July' || choice === 'October' || choice === 'December')
	{days = 31;}
	else if (select.value === 'February')
	{days = 28;}
	else
	{days = 30;}

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');