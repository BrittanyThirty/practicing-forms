$(document).ready(function(){
  // var age = parseInt(prompt("Enter your age!"));

  // if(age>21){
  //   $('#over21').show();
  // }else if(age===21){
  //   alert("Phew, you just made it!")
  //   $('#over21').show();
  // }else{
  //   $('#under21').show();
  // }

  //if user selects monkey, show monkey div



  $("form#favoriteAnimal").submit(function(event){
    var response = $("select#animalChoices").val();


    if(response == "monkey"){
      $('#monkeyshow').show();
    }else if(response == "walrus"){
      $('#walrusshow').show();
    }else if(response == "cat"){
      $('#catshow').show();
    }else
      $('#dogshow').show();
    })
  });
