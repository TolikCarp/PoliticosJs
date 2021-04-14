function camara(){

 var congreso= document.getElementById("Congress")
 const house = document.getElementById("house")
 const senate =document.getElementById("senate")




  if(house.selected ){location.href="house-starter-page.html";}
  if(senate.selected ){location.href="senate-starter-page.html";}
}





var data = date.results[0].members.sort()

var tabla = document.getElementById("tabla")

var select = document.getElementById("select")


/*----------------------------------------------------------------------------------------------------------------------------*/




let republicanos = data.filter( miembro => miembro.party == "R"  )

let democratas = data.filter( miembro => miembro.party == "D"  )

let independientes = data.filter( miembro => miembro.party == "ID"  )

/*----------------------------------------------------------------------*/




var botones = document.getElementsByClassName("boton")

var arraybotones = Array.from(botones)





var R = document.getElementById("R")
var D = document.getElementById("D")
var ID = document.getElementById("ID")
/*-----------------------------------------------------------*/




/*----------------------------------------------------------*/

/*----------------------------------------------------------*/
function meterDatos(a , b){  /* funcion para cargar datos  tabla*/
    		/*asignar*/			 /*compara*/   /* iteracion*/
    /*for (var i = data.length-1 ;   i >= 0 ;        i--) {}  --------------> decrecion	 */ 
    	
    


  /* tabla.innerHTML += `

    		 <tr>
                     <td>${data.first_name + " " + data.last_name}</td>
                     <td>${data.party}</td>
                     <td>${data.state}</td>
                     <td>${data.seniority}</td>
                     <td>${data.votes_with_party_pct}</td>
             </tr>  




    `*/
 b.innerHTML=""
 a.forEach( function pirulo(politico){
  var middle = politico.middle_name
  if(middle == null){middle = ""}

 		 
   b.innerHTML += `

    		 <tr>
                     <td>${politico.first_name + " " + politico.last_name+ " " + middle}</td>
                     <td>${politico.party}</td>
                     <td>${politico.state}</td>
                     <td>${politico.seniority}</td>
                     <td>${politico.votes_with_party_pct}</td>
             </tr>  




    `



 }  ) 





}





/*-----------------------------------------------------------------*/
meterDatos(data , tabla)
    


function estados(){    /*carga estados en select*/

/*let select = document.getElementById("select")*/



let contador =[]


    for (var i = 0; i < data.length; i++) {
      
      if (!contador.includes(data[i].state) ) { contador.push(data[i].state)}

        
   }

let orden = contador.sort()

    for (var i = 0; i < orden.length; i++) {
       select.innerHTML +=`    

                <option value="${orden[i]}"> ${orden[i]} </option>



       `

    }
    

  

  
} estados() /* funcion andando*/

/*---------------------------------------------------------------------------------------------------------------------------*/
    
function  nuevafuncion(){

  var bolsa = []
  
  if(!R.checked && !D.checked && !ID.checked){bolsa.push(data)}

  if(R.checked){bolsa.push(republicanos)}
    
  if(D.checked){bolsa.push(democratas)}
  
  if(ID.checked){bolsa.push(independientes)}

  if(R.checked && D.checked){bolsa.push(republicanos.concat(democratas))}
  
  if(R.checked && ID.checked){bolsa.push(republicanos.concat(independientes))}  

  if(D.checked && ID.checked){bolsa.push(democratas.concat(independientes))}  

 
  if(R.checked && D.checked && ID.checked){bolsa.push(data)}

    var contador=[]
          
         for (var i = 0; i < bolsa.length; i++) {
           
        contador = bolsa[i].filter(function(item){

            if(select.value == "estados"){return data}
            else return item.state == select.value
            


        })

                  
            } 
          meterDatos(contador.sort(),tabla)
       
} 