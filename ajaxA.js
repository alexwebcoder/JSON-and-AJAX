
//this is json
// let thePets = [

// {
//  'name':'Meowsalot',
//  'species':'cat',
//  'favFood':'tuna'
// }, 

// {
//  'name':'Barkey',
//  'species':'dog',
//  'favFood':'carrots'
// }

// ];

// console.log(thePets[0].name);
let pageCounter = 1;
let btn = document.querySelector('button');
let animalContainer = document.querySelector('#animalInfo');//if you use getElementById, you don't need hash tag
btn.addEventListener('click', function(){

let ourRequest = new XMLHttpRequest();//declare a new instance of this object. this establishes a connection with a url that we specify and then we can send and receive data without refreshing the page
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter +'.json');//open method takes 2 arguements. The first arguement is to specify if we are sending data (Post) or receiving data (Get). The second arguement is the url that you are loading data from/sending data to.

ourRequest.onload = function(){
	if(ourRequest.status >= 200 && ourRequest.status < 400){
		//pull in data on the fly and assign it to a variable
    //let ourData = ourRequest.responseText;
    let ourData = JSON.parse(ourRequest.responseText);
    //console.log(ourData[0]);
    renderHTML(ourData);
}else{
	console.log('We connected to the server, but it returned an error');
}

};

ourRequest.onerror = function(){
	console.log('Connection error');
};

ourRequest.send();
pageCounter ++;

if(pageCounter > 3){
	//btn.style.display = 'none';
	btn.setAttribute('style','display:none;');
	//btn.classList.add('hideBtn');
}


});

function renderHTML(data){
	let htmlString = '';

	for(let i = 0; i < data.length; i ++){

		htmlString += '<p>' + data[i].name + ' is a ' + data[i].species + ' that likes to eat ';

		for(let ii = 0; ii <data[i].foods.likes.length; ii ++){

			if(ii == 0){
				htmlString += data[i].foods.likes[ii];
			}else{
				htmlString += ' and ' + data[i].foods.likes[ii];
			}
		}

		htmlString += ' and dislikes ';
		for(let ii = 0; ii <data[i].foods.dislikes.length; ii ++){

			if(ii == 0){
				htmlString += data[i].foods.dislikes[ii];
			}else{
				htmlString += ' and ' + data[i].foods.dislikes[ii];
			}
		}
		htmlString += '.</p>';
	}


	animalContainer.insertAdjacentHTML('beforeend', htmlString);

}


let ourHeadline = document.querySelector('#ourHeadline');
//let ourHeadline = document.getElementById('ourHeadline');
// ourHeadline.textContent= 'This is a test';
// let listItems = document.querySelectorAll('li');
let newItemCounter = 1;
let listItems = document.getElementById('ourList').getElementsByTagName('li'); 
let ourButton = document.querySelector('.ourButton');
let ourList = document.getElementById('ourList');

ourList.addEventListener('click', activateItem);

 // for(let iii = 0; iii < listItems.length; iii ++){

 //      listItems[iii].addEventListener('click', activateItem);
 //     //listItems[iii].textContent = 'This is glue, Strong Stuff';
 // }

 function activateItem(e){

 	if(e.target.nodeName == 'LI'){

 		ourHeadline.textContent = e.target.textContent;
 		for(let iii = 0; iii < e.target.parentNode.children.length; iii ++){

 			e.target.parentNode.children[iii].style.background = 'transparent';

 		}

 		e.target.style.background = 'yellow';
 	}

 }

 ourButton.addEventListener('click', createNewItem); 

 function createNewItem(){

 	ourList.innerHTML += '<li>Something New ' + newItemCounter + '</li>';
 	newItemCounter ++;
 }


 




