var max_range_val = document.getElementById('max_val');
var min_range_val = document.getElementById('min_val');


function max__range_2(){
    // alert('work')
         min_range_val.style.display = 'none';
         max_range_val.style.display = 'block';
         max_range_val.style.marginLeft = '70px'
}
function min__range_2(){
    // alert('work')

    min_range_val.style.display = 'block';
    max_range_val.style.display = 'none';
}

function selectAmount(){
    var min__value = document.getElementById('min_val_input');
    var amount__list = document.querySelectorAll('.min__range li');
    for(let i= 0; i < amount__list.length; i++){
        amount__list[i].onclick= function(){
            min__value.value = amount__list[i].innerHTML;

        }
}
    // amount__list.forEach((item, index) => {
    //     item.addEventListener('click', (event) => {
    //         min__value.value = event.currentTarget.innerHTML;
    //     //    console.log(`Min amount is ${event.currentTarget.innerHTML}`);
    //     });
       
    //   });

}
selectAmount()
function selectAmount2(){
    var max__value = document.getElementById('max_val_input');
    var amount__list = document.querySelectorAll('.max__range li');
    amount__list.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            max__value.value = event.target.innerHTML;
        //    console.log(`Max amount is ${event.currentTarget.innerHTML}`);
        });
        
      });

   
}
selectAmount2()






function removeLocation(){
    document.getElementById('location__city').style.display = 'none';
}
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}







function getResidentType(e){
    var checkboxes = document.getElementsByClassName('__value');
    var location__val = document.getElementById('user__location__val');
    var checkboxesChecked = [];
    for (var i=0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked) {
           checkboxesChecked.push(checkboxes[i].value);
        }
     }

     console.log(`Your Type location is :${location__val.value}`);
     console.log(`Your Resident Type is : ${checkboxesChecked}`);
     
  
   }

   var min__amount = '';
   var max__amount = '';
     var amount__list__min = document.querySelectorAll('.min__range li');
     var amount__list__max = document.querySelectorAll('.max__range li');

     amount__list__min.forEach((item, index) => {
         item.addEventListener('click', (event) => {
            min__amount = event.currentTarget.innerHTML;
            //console.log(`Min amount is ${event.currentTarget.innerHTML}`);
         });
        
       })
       amount__list__max.forEach((item, index) => {
        item.addEventListener('click', (event) => {
           max__amount = event.currentTarget.innerHTML;
           //console.log(`Min amount is ${event.currentTarget.innerHTML}`);
        });
       
      })
       
     function formSubmitted(){
       console.log("Minimum Budget is : ",min__amount);
       console.log("Maximum Budget is : ",max__amount);

       return false;
     }

     var user_resident_type = '';
     var house_type_user = document.querySelectorAll(".house__type span");
     
     house_type_user.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            user_resident_type = event.currentTarget.innerHTML;
           //console.log(`Min amount is ${event.currentTarget.innerHTML}`);
        });
       
      })

      var user_resident_room = '';
      var room_type_user = document.querySelectorAll(".house__type_2");
      
      room_type_user.forEach((item, index) => {
         item.addEventListener('click', (event) => {
            user_resident_room = event.currentTarget.innerHTML;
            //console.log(`Min amount is ${event.currentTarget.innerHTML}`);
         });
        
       })

       var user_min_budget_2 = '';
       var user_type_min_budget = document.querySelectorAll(".min__range li");
       user_type_min_budget.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            user_min_budget_2 = event.currentTarget.innerHTML;
           //console.log(`Min amount is ${event.currentTarget.innerHTML}`);
        });
       
      })
      var user_max_budget_2 = '';
      var user_type_max_budget = document.querySelectorAll(".max__range li");
      user_type_max_budget.forEach((item, index) => {
       item.addEventListener('click', (event) => {
           user_max_budget_2 = event.currentTarget.innerHTML;
          //console.log(`Min amount is ${event.currentTarget.innerHTML}`);
       });
      
     })
     var user_new_location = document.getElementById('user_new_location')
     function formSubmitted_2(){
     console.log(`Your Type location is :${user_new_location.value}`);
        console.log("Your Resident Type is : ", user_resident_type);
        console.log("Number of rooms are : ",   user_resident_room);
        console.log("Your minimum Budget is : ", user_min_budget_2);
        console.log("Your maximum Budget is : ", user_max_budget_2);


        // console.log("Maximum Budget is : ",max__amount);
 
        return false;
      }

  













function toggle (){
    let options = document.querySelectorAll(".house__type");
    let options_2 = document.querySelectorAll(".house__type_2");


    for(let i= 0; i < options.length; i++){
             options[i].onclick= function(){
               for( var j = 0 ; j < options.length; j++){
                   if(options[j].classList.contains("active")){
                       options[j].classList.remove("active");
                   }
               }
                 options[i].classList.add("active")
             }
    }
    for(let i= 0; i < options_2.length; i++){
        options_2[i].onclick= function(){
          for( var j = 0 ; j < options_2.length; j++){
              if(options_2[j].classList.contains("active")){
                options_2[j].classList.remove("active");
              }
          }
          options_2[i].classList.add("active")
        }
}
}




toggle();


// function user_mobile_value(){
//     let house_type = document.querySelectorAll(".house__type span");
//     house_type.forEach((item, index) => {
//         item.addEventListener('click', (event) => {
//             console.log(`Your Resident type is :${event.target.innerHTML}`)
//             // max__value.value = event.currentTarget.innerHTML;
//         //    console.log(`Max amount is ${event.currentTarget.innerHTML}`);
//         });
        
//       });
// }

// user_mobile_value()





// var drop_down = document.querySelector('.dropdown_list');
// if(drop_down)