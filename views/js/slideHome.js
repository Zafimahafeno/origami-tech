    const container= document.querySelector('.containerServiceContain');
	const sliderItems = document.querySelectorAll('.serviceContent');
    //recuperation allRadio
    const allRadio=document.querySelectorAll(".radioSlide");

	//function checkRadio
	function checkRadio(element,trueOrFalse){
		if (trueOrFalse==true){
			element.style.setProperty("background-color", "rgb(0, 119, 255)");

		}else{
			element.style.setProperty("background-color", "rgba(255, 255, 255, 0.883)");
		}

	}

	// Définir l'index de la diapositive actuelle
	let currentSlideIndex = 0;

	// Définir la direction du défilement (1 pour aller vers l'avant, -1 pour revenir en arrière)
	let scrollDirection = 1;

	// Fonction pour faire défiler vers la diapositive suivante
	function scrollToNextSlide() {
	currentSlideIndex += scrollDirection;
	// Vérifier si la diapositive actuelle est la première ou la dernière
	if (currentSlideIndex < 0) {
		currentSlideIndex = 1; // Aller à la deuxième diapositive
		scrollDirection = 1; // Changer la direction du défilement pour aller vers l'avant
	} else if (currentSlideIndex >= sliderItems.length) {
		currentSlideIndex = sliderItems.length - 2; // Aller à l'avant-dernière diapositive
		scrollDirection = -1; // Changer la direction du défilement pour revenir en arrière
	}

	const scrollLeftValue = currentSlideIndex * sliderItems[0].offsetWidth;
	container.scrollTo({
		left: scrollLeftValue,
		behavior: 'smooth',
		scrollOptions: {
			// Options de personnalisation du comportement du défilement
			duration: 1000, // Durée du défilement en millisecondes
			easing: 'ease-in-out', // Type d'interpolation pour le défilement
			// D'autres options disponibles selon le navigateur
		},
	});

    //check radio to currenSlide
	allRadio.forEach(function(radio) {
		checkRadio(radio,false);
	});
	checkRadio(allRadio[currentSlideIndex],true);
	}
	
	function startSlide() {
		slideInterval = setInterval(scrollToNextSlide, 3000);
	}
	
	function stopSlide() {
		clearInterval(slideInterval);

	// Récupérer la position actuelle de la diapositive en cours de défilement
	const currentPosition = currentSlideIndex * sliderItems[0].offsetWidth ;

	container.scrollTo({
		left: currentPosition,
		behavior: 'smooth'
	});
	}
	
	
	

	function next() {
		stopSlide();
		currentSlideIndex++;
		if (currentSlideIndex >= sliderItems.length) {
		  currentSlideIndex = 0; // Revenir au premier slide
		}
		const scrollLeftValue = currentSlideIndex * sliderItems[0].offsetWidth;
		container.scrollTo({
			left: scrollLeftValue,
			behavior: 'smooth'
		});

		
	
	}	
	function previous() {
		stopSlide();
		currentSlideIndex--;
		if (currentSlideIndex < 0) {
		  currentSlideIndex = sliderItems.length - 1; // Revenir au dernier slide
		}
		const scrollLeftValue = currentSlideIndex * sliderItems[0].offsetWidth;
		container.scrollTo({
			left: scrollLeftValue,
			behavior: 'smooth'
		});

	
		

	}
	

	startSlide();

	//when radio clicked
	allRadio.forEach(function(radio, index) {
		radio.addEventListener("click", function() {
			//check radio to currenSlide
	allRadio.forEach(function(radio) {
		checkRadio(radio,false);
	});
	stopSlide();
	let csTemp=currentSlideIndex;
	if (csTemp>index){
		let goalPosition=csTemp-index;
		for (let i=0; i<goalPosition;i++){
			previous();

		}

	}else if(csTemp<index){
		let goalPosition=index-csTemp;
		for (let i=0; i<goalPosition;i++){
			next();

		}
	}
	checkRadio(allRadio[currentSlideIndex],true);
		});
	});
		