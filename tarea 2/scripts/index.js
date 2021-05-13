




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