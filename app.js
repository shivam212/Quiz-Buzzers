const app = () => {
	const teama = document.querySelector('.team1-score');
	const inca = document.querySelector('.ainc');
	var scorea=0;
	inca.addEventListener('click',()=>{
		scorea=scorea+10;
		teama.textContent=`${scorea}`;
		console.log(scorea);
	}
		)
};

app();