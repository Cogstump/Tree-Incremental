


// The variables.
wood = 0,
paper = 0,
funds = 0,
paperSold = 0,
Allpaper = 0,
AxeCost = 10,
woodperclick = 1,
acorn = 0,
squirrel = 0,
squirrelprice = 10,
squirrelpower = 1

acorn= acorn < 0 ? 0 :acorn;

function updatecount(){ // This function makes it so that the counters don't lag and show past numbers.
    setInterval(() => {
        document.getElementById("squirrelcounter").innerHTML = "Buying Another Squirrel Currenctly Costs " + squirrelprice +" Acorns"
        document.getElementById("Allpaper").innerHTML = "Ever Since You Started This Journey, You Have Made " + Allpaper + " Sheets of Paper"
        document.getElementById("squirrel").innerHTML = "You Have " + squirrel + " Squirrels"
        document.getElementById("acorn").innerHTML = "You Have " + acorn + " Acorns"
        document.getElementById("paper made").innerHTML = "You Have " + paper + " Sheets of Paper"
        document.getElementById("wood cut").innerHTML = "You Have " + wood + " Wood"
        document.getElementById("funds").innerHTML = "Available Funds: $ " + funds
        document.getElementById("Papersold").innerHTML = paperSold + " Paper Sold"
    }, 40);

}

function buysquirrel() {
  if (acorn >= squirrelprice) {
   squirrel += 1
   acorn -= squirrelprice
   document.getElementById("squirrel").innerHTML = "You Have " + squirrel + " Squirrels"
   document.getElementById("acorn").innerHTML = "You Have " + acorn + " Acorns"
   squirrelprice += 10
   document.getElementById("squirrelcounter").innerHTML = "Buying Another Squirrel Currenctly Costs " + squirrelprice +" Acorns"
   var mainGameLoop = window.setInterval(function () {
      cuttrees()
    }, 1000)  
  } else if (acorn < squirrelprice) {
    squirrel += 0
    acorn= acorn < 0 ? 0 :acorn;
  }
  acorn= acorn < 0 ? 0 :acorn;
}


function AxeUpgrade() { // Allows you to get more wood per click but in turn takes (a small bit of) your funds.
    if (funds >= AxeCost) {
      funds -= AxeCost
      woodperclick += 1
      AxeCost *= 2
      document.getElementById("AxeCost").innerHTML = "Upgrading Your Axe Currently Costs $ " + AxeCost 
      document.getElementById("readout4").innerHTML = "You have enough money to upgrade your axe."
      document.getElementById("funds").innerHTML = "Available Funds: $ " + funds      
    } else if (AxeCost > funds) {
      document.getElementById("readout4").innerHTML = "You don't have enough money to upgrade your axe!"        
    }
  }


function makemoney() { // Automatically sells your paper and in turn increases your amount of funds by one.
    if (paper > 0) {
        paper -= 1
        funds += 1
        paperSold += 1
        document.getElementById("paper made").innerHTML = "You Have " + paper + " Sheets of Paper"
        document.getElementById("funds").innerHTML = "Available Funds: $ " + funds
        document.getElementById("Papersold").innerHTML = paperSold + " Paper Sold"
        document.getElementById("readout2").innerHTML = "You have some paper to sell."
    } else if (paper <= 0) {
        document.getElementById("readout2").innerHTML = "You don't have any paper to sell!"
        }
}    

interval = setInterval(makemoney, 3000); // The "timer" which allows this function to perform automatically.


function cuttrees(){ // Allows you to get wood.
  wood += woodperclick
  document.getElementById("wood cut").innerHTML = "You Have " + wood + " Wood"
  let RandomNumber = Math.floor(Math.random() * 1001);
  if ((RandomNumber % 7) == 0) {
    acorn += 1
    document.getElementById("acorn").innerHTML = "You Have " + acorn + " Acorns"
  } else if ((RandomNumber % 7) !== 0) {
    acorn += 0
    document.getElementById("acorn").innerHTML = "You Have " + acorn + " Acorns"
  }
}

function makepaper(){ // Allows you to produce paper by decreasing your amount of wood.
    if (wood > 0) {
    paper += 1
    wood -= 1
    Allpaper += 1
    document.getElementById("paper made").innerHTML = "You Have " + paper + " Sheets of Paper"
    document.getElementById("wood cut").innerHTML = "You Have " + wood + " Wood"
    document.getElementById("readout3").innerHTML = "You have enough wood to make paper."
    document.getElementById("Allpaper").innerHTML = "Ever Since You Started This Journey, You Have Made " + Allpaper + " Sheets of Paper"
    } else if (wood <= 0) {
    document.getElementById("readout3").innerHTML = "You don't have enough wood to make paper!"
    }
}


function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
} 
    
var saveGameLoop = window.setInterval(function() {
        localStorage.setItem("TreeIncSave", JSON.stringify(gameData))
      }, 15000)

// These two boys right here allow you to save and load the game.

var savegame = JSON.parse(localStorage.getItem("TreeIncSave"))
      if (savegame !== null) {
        gameData = savegame
    }


// Made by Parlakarmut, with love <3

