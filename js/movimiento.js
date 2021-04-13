
/*Sin Jquery*/
function showContact(){
    document.getElementById('contact').style.display='block';
  }

function showHome(seccion){
  $(seccion).fadeIn(500);
  $("#projects").slideUp();
  $("#skills").slideUp();
}

function showProjects(seccion,project1,project2,project3){
       $(seccion).fadeIn(500);
       $(project1).slideDown(1000);
       $(project2).slideDown(1000);
       $(project3).slideDown(1000);
       $("#skills").hide();
    
 }
 function showSkills(seccion,skill1,skill2){
   $(seccion).slideDown(500);
   $("#projects").hide();
 }

