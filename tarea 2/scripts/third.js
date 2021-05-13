var data = date.results[0].members


let republicanos = data.filter( miembro => miembro.party == "R")

let democratas = data.filter( miembro => miembro.party == "D")

let independientes = data.filter( miembro => miembro.party == "ID")

let tbodySenateAttendance = document.getElementById("tbodySenateAttendance")

let tbodyLeastLoyal = document.getElementById("tbodyLeastLoyal")

let tbodyMostLoyal = document.getElementById("tbodyMostLoyal")






/*-------------------------------------NAV-MENU FUNCTIONS-------------------------*/
function Congress(){


 let house = document.getElementById("house")
 let senate =document.getElementById("senate")

 let houseAttendance = document.getElementById("House_Attendance")
 let senateAttndance =document.getElementById("Senate_Attendance")

 let houseLoyalty = document.getElementById("House_Loyalty")
 let senateLoyalty =document.getElementById("Senate_Loyalty")




  if(house.selected ){location.href="house-starter-page.html";}
  if(senate.selected ){location.href="senate-starter-page.html";}

  if(houseAttendance.selected ){location.href="house-attendance.html";}
  if(senateAttndance.selected ){location.href="senate-attendance.html";}

  if(houseLoyalty.selected){location.href="house-loyalty.html";}
  if(senateLoyalty.selected ){location.href="senate-loyalty.html";}
}




/*-------------------------Num Representants---------------------------------*/

var cantRep = data.filter(item => item.party == "R").length

var cantDem = data.filter(item => item.party == "D").length

var cantInd = data.filter(item => item.party == "ID").length


/*----------------------------SENATE AT GLANCE-------------------------------*/


function VotesWithParty(){

	
	let sumR = 0;
	let sumD = 0;
	let sumI = 0;


	for (var i = 0; i < republicanos.length; i++) {
    sumR = sumR + republicanos[i].votes_with_party_pct

	}

	for (var i = 0; i < democratas.length; i++) {
		sumD = sumD + democratas[i].votes_with_party_pct
	}

	for (var i = 0; i < independientes.length; i++) {
		sumI = (sumI + independientes[i].votes_with_party_pct)
    if (independientes == NaN ){sumI = 0}

	}



	function topretty(a,b){

		var total = a/b
		var pretty = total.toFixed(2)

    return pretty
				

	}

  
 	  
     tbodySenateAttendance.innerHTML = `   


     		        <tr>
                        <td>Republicanos</td>
                        <td>${cantRep}</td>
                        <td>${topretty(sumR,cantRep)}</td>
                    </tr>

                    <tr>
                      <td>Democratas</td>
                        <td>${cantDem}</td>
                        <td>${topretty(sumD,cantDem)}</td>
                    </tr>


     		        <tr>
                       <td>Independientes</td>
                        <td>${cantInd}</td>
                        <td>${topretty(sumI,cantInd)}</td>
                    </tr>


     `




}VotesWithParty()/* FUNCTION RUNNING*/




function LeastLoyal(){

let contador=[]

for (var i = 0; i < data.length; i++) {
	contador.push(data[i].votes_against_party_pct)
}

let orderList = contador.sort( (a,b)=> b-a)/*ordered list from  greatest to Least*/ 

let indexOrderList = (10/100)*orderList.length /*10.5*/

let indexOrderListRound = Math.round(indexOrderList) /*11*/

let finalIndex = orderList[indexOrderListRound] /*13.17*/


/*-----------------------------------------------------------------------------*/
let aux =[]


for (var i = 0; i < orderList.length; i++) {
	if(orderList[i] >= finalIndex ){aux.push(orderList[i])} 
}

let final=[]

for (var i = 0; i < aux.length; i++) {
	for (var j = 0; j < data.length; j++) {
		if(aux[i]== data[j].votes_against_party_pct  && !final.includes(data[j]))   {final.push(data[j])}
	}
}


for (var i = 0; i < final.length; i++) {
	

/*total_votes:    votes_with_party_pct: */
function votos(a,b ){
  let x = (a*b)/100
  let y = Math.floor(x)
  return y
}


	tbodyLeastLoyal.innerHTML +=` 


									<tr>
    
									<td>${final[i].first_name +" "+ final[i].last_name }</td>
									
									<td>${votos(final[i].total_votes,final[i].votes_with_party_pct)}</td>
									<td>${final[i].votes_with_party_pct} </td>

									</tr>


	 `
}




}LeastLoyal()
/*.sort( (a,b)=> b-a)   grateast to least ---  i = (p/100).n  - findig from which position of the list we gonna look at*/


function MostLoyal(){

	let contador =[]

	for (var i = 0; i < data.length; i++) {
		contador.push(data[i].votes_with_party_pct)
	}

/*--------------------------------------------------------*/
let orderList = contador.sort((a,b)=> b-a)
	
let indexOrderListRounded = Math.round( (10/100)*orderList.length) /*11*/

let finalIndex = orderList[indexOrderListRounded] /*98.72*/


let aux = []

for (var i = 0; i < orderList.length; i++) {
	if(orderList[i] >= finalIndex){aux.push(orderList[i] )}
}

let final =[]

for (var i = 0; i < data.length; i++) {
	for (var j = 0; j < aux.length; j++) {
		if(aux[j] == data[i].votes_with_party_pct && !final.includes(data[i]) ) {final.push(data[i])}
	}


}


for (var i = 0; i < final.length; i++) {
	
/*total_votes             votes_with_party_pct */
function num (a,b){


		let x = (a*b)/100
		let z = Math.floor(x)
		return z


}



	tbodyMostLoyal.innerHTML +=` 


				<tr>

					<td>${final[i].first_name} </td>
					<td>${num(final[i].total_votes,final[i].votes_with_party_pct)} </td>
					<td>${final[i].votes_with_party_pct} </td>
					

				</tr>

	`


}







}MostLoyal()




