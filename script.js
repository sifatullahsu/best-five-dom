function getId(id) {
  return document.getElementById(id);
}

function getClass(className){
  return document.getElementsByClassName(className);
}

/**
 * Added event on player cards using className "player"  
**/
for(let singlePlayer of getClass("player")){
  singlePlayer.addEventListener("click", function (event) {
    const tagName = event.target.tagName;
    const selectFive = getId("select-five");

    if (tagName === "BUTTON") {
      if(selectFive.childElementCount <= 4){
        const playerId = event.target.parentElement.parentElement.id;
        const playerNameSelector = "#" + playerId + " h3";
        const playerButton = "#" + playerId + " button";

        const playerName = document.querySelector(playerNameSelector).innerText;
    
        // Create a new list element & assign text
        const createLi = document.createElement("li");
        createLi.innerText = playerName;
        selectFive.appendChild(createLi);
    
        // Disable the button
        document.querySelector(playerButton).setAttribute("disabled", true);
      }
      else{
        alert('You have already added 5 players');
      }
    }
  });
}

/**
 * Calculate Button Event  
**/
getId('calculate').addEventListener('click', function(){
  const selectFive = getId("select-five").childElementCount;
  const perPlayer = parseFloat(getId('per-player').value);

  if(isNaN(perPlayer) == false && 0 <= perPlayer){
    getId('calculate-amount').innerText = perPlayer * selectFive;
  } 
  else{
    alert('Please input valid value..');
  }
});

/**
 * Calculate Total Button Event  
**/
getId('calculate-total').addEventListener('click', function(){
  const calculateAmount = parseFloat(getId('calculate-amount').innerText);
  const manager = parseFloat(getId('manager').value);
  const coach = parseFloat(getId('coach').value);

  if(isNaN(manager) == false && isNaN(coach) == false && manager >= 0 && coach >= 0 ){
    getId('calculate-total-amount').innerText = calculateAmount + manager + coach;
  } 
  else{
    alert('Please input valid value..');
  }
});