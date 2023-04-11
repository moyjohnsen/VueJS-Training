var voo = new Vue({
	el: "#maincontainer",
	data: {
		firstdata: "Koala",
		seconddata: true,
		thirddata: true,
		alist: []
	},
	methods: {
		clickme: clickme
	},
	mounted: loadEvent
});

function loadEvent(){
	let selfish = this;
	startingdata(selfish);
}

function startingdata(selfish){
	selfish.alist = [
		{
			"uid": 1,
			"firstname": "Billy",
			"lastname": "Bob",
			"age": 22
		},
		{
			"uid": 2,
			"firstname": "Richard",
			"lastname": "Pryor",
			"age": 34
		}
		
	]
	//ASSIGNMENT - MAKE THE BACKGROUND OF THE PAGE PINK//
	
	//ASSIGNMENT - CREATE A SECOND TABLE JUST LIKE I DID WITH THE ALIST ARRAY//
	//THIS TABLE SHOULD HAVE NAME, AGE, MONEY SAVED IN APRIL, MONEY SAVED IN MAY//
	//A TOTAL MONEY SAVED COLUMN THAT CALCULATES HOW MUCH MONEY HAS BEEN SAVED//
	
	//ASSIGNMENT - CREATE A BUTTON. WHEN CLICKED, THAT BUTTON SHOULD INCREMENT THE MONEY 
	//SAVED IN APRIL AND THE MONEY SAVED IN MAY, AND UPDATE THE TOTAL MONEY SAVED//
	
	//ASSIGNMENT - SHOW OFF. ADD A BUNCH OF FUNCTIONS SO I KNOW HOW FAMILIAR//
	//YOU ARE WITH JAVASCRIPT AND VUEJS//
	
	//DUE APRIL 12//
}

function clickme(zis){
	for (let d = 0; d < voo.alist.length; d++){
		voo.alist[d].age += 4;
	}
}
