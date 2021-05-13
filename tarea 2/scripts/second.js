
var data = date.results[0].members

var tabla = document.getElementById("tabla")

var select = document.getElementById("select")



let republicanos = data.filter( miembro => miembro.party == "R")

let democratas = data.filter( miembro => miembro.party == "D")

let independientes = data.filter( miembro => miembro.party == "ID")

let tbodySenateAttendance = document.getElementById("tbodySenateAttendance")

let tbodyLeastEngages = document.getElementById("tbodyLeastEngages")

let tbodyMostEngages = document.getElementById("tbodyMostEngages")


var R = document.getElementById("R")

var D = document.getElementById("D")

var ID = document.getElementById("ID")




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
                        <td>${topretty(sumI,cantInd)  }</td>
                    </tr>


     `




}VotesWithParty()/* FUNCTION RUNNING*/




 
/*.sort( (a,b)=> b-a)    grateast to least */ 


/*-------------------Least Engaged (Bottom 10% Attendance)------------------------------------*/

/*"missed_votes_pct"*/

function LeastEgaged(){

let contador=[]/*list of all (105) missed votes % relatead to the senate */

for (var i = 0; i < data.length; i++) {
	contador.push(data[i].missed_votes_pct)
}

/*-------------------- THE 10% LEATS ENGAGE------------------------*/
/*i = (p/100).n  - findig from which position of the list we gonna look at*/
var orderList = contador.sort( (a,b)=> b-a) /*list ordered from greatest to least*/
var orderListIndex = (10/100)*orderList.length  /*10.5*/
var roundOrderListIndex = Math.round(orderListIndex) /* 11 */
var promedio = orderList[roundOrderListIndex]


/*----------------------------------------------------*/

let aux=[]

for (var i = 0; i < orderList.length; i++) {
	if(orderList[i] >= promedio){ aux.push(orderList[i]) }

}



let final=[]

for(var i = 0; i < data.length; i++){

	for (var j = 0; j < aux.length; j++){



	if(aux[j] == data[i].missed_votes_pct && !final.includes(data[i]) ){final.push(data[i])}}

 
}
	
 

for (var i = 0; i < final.length; i++) {
	

		
tbodyLeastEngages.innerHTML +=`  

					<tr>
                        <td>${final[i].first_name +" " + final[i].last_name}</td>
                        <td>${final[i].missed_votes}</td>
                        <td>${final[i].missed_votes_pct}</td>
                    </tr>


`

}



 
 
    

}LeastEgaged()





/*---------------------------------------------------------*/
/*.sort( (a,b)=> a-b)    least to greatest */ 

function MostEngaged(){


	let contador = []

	for (var i = 0; i < data.length; i++) {
		contador.push(data[i].missed_votes_pct)
	}

/*------------------10% of Most Engaged------------------------------*/

	let orderList = contador.sort((a,b)=> a-b) /* list ordered from leat to greatest*/
	let index = (10/100)*orderList.length/*10,5*/
	let roundIndex = Math.round(index)  /*11*/

	let orderListIndex = orderList[roundIndex] /*0.46*/


/*------------------------------------------------------------------*/
	
	let aux = []
	
	for (var i = 0; i < orderList.length; i++) {
		if(orderList[i] <= orderListIndex ){aux.push(orderList[i])}
	}

	let final=[]

	for (var i = 0; i < data.length; i++) {
		
		for (var j = 0; j < aux.length; j++) {

			if(aux[j] == data[i].missed_votes_pct && !final.includes(data[i])){final.push(data[i] )}
		}

	}
	 

	
		for (var i = 0; i < final.length; i++) {
			
			tbodyMostEngages.innerHTML +=`  

					 <tr>
                        <td>${final[i].first_name + " " + final[i].last_name}</td>
                        <td>${final[i].missed_votes}</td>
                        <td>${final[i].missed_votes_pct}</td>
                    </tr>

			`


		}


}MostEngaged()



