let button = document.getElementById('btn_id');
let name = document.getElementById('name');
let height = document.getElementById('height');

function getInfo(){

	let randNumb =  Math.floor((Math.random() * 88) +1);
	let apiUrl = 'https://swapi.co/api/people/' + randNumb;

	axios.get(apiUrl).then
	(function(response){
		updateInfo(response.data);
	})
}

function updateInfo(data){
	name.innerText = data.name;
	height.innerText = data.height + 'cm';
}

btn_id.addEventListener('click', getInfo);