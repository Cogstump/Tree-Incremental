// The variables.
wood = 0,
paper = 0,
funds = 0,
paperSold = 0,
Allpaper = 0,
AxeCost = 3,
woodperclick = 1,
acorn = 0,
squirrel = 0,
squirrelprice = 10,
squirrelpower = 1,
threshold = 5,
sellingrate = 3000

acorn= acorn < 0 ? 0 :acorn;
threshold= threshold < 0 ? 0 :threshold;

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


function revealbutton() { // This function checks if you have crossed the threshold (which starts at 5 and doubles ecerytime you buy it) and reveals the button.
  var x = document.getElementById("fastsell");
  if (funds >= threshold) {
    x.style.display = "block";
  } else if (funds < threshold) {
    x.style.display = "none";
  }
}
interval_reveal = setInterval(revealbutton, 1000);  // This timer checks if you crossed the threshold every second

function fastsell() { // People say that selling paper was slow. I'm not complaining as I got to learn many new things whilst I was making this.
  if(funds >= threshold){
    threshold= threshold < 0 ? 0 :threshold;
    sellingrate -= 500
    funds -= threshold
    threshold *= 2
    Math.floor(threshold)
  } else if (funds < threshold){
    sellingrate -= 0
  }
}


function buysquirrel() { // Allows you to buy squirrels, which Auto-cut trees for you and protect you from arthritis
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

interval = setInterval(makemoney, sellingrate); // The "timer" which allows this function to perform automatically.


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
    
function save() {
  localStorage.setItem('wood', JSON.stringify(wood));
  localStorage.setItem('paper', JSON.stringify(paper));
  localStorage.setItem('funds', JSON.stringify(funds));
  localStorage.setItem('paperSold', JSON.stringify(paperSold));
  localStorage.setItem('Allpaper', JSON.stringify(Allpaper));
  localStorage.setItem('AxeCost', JSON.stringify(AxeCost));
  localStorage.setItem('woodperclick', JSON.stringify(woodperclick));
  localStorage.setItem('acorn', JSON.stringify(acorn));
  localStorage.setItem('squirrel', JSON.stringify(squirrel));
  localStorage.setItem('squirrelprice', JSON.stringify(squirrelprice));
  localStorage.setItem('squirrelpower', JSON.stringify(squirrelpower));
  localStorage.setItem('threshold', JSON.stringify(threshold));
  localStorage.setItem('sellingrate', JSON.stringify(sellingrate));
}

savegame = setInterval(save, 500);

function load() {
  wood = JSON.parse(localStorage.getItem('wood'));
  paper = JSON.parse(localStorage.getItem('paper'));
  funds = JSON.parse(localStorage.getItem('funds'));
  paperSold = JSON.parse(localStorage.getItem('paperSold'));
  Allpaper = JSON.parse(localStorage.getItem('Allpaper'));
  AxeCost = JSON.parse(localStorage.getItem('AxeCost'));
  woodperclick = JSON.parse(localStorage.getItem('woodperclick'));
  acorn = JSON.parse(localStorage.getItem('acorn'));
  squirrel = JSON.parse(localStorage.getItem('squirrel'));
  squirrelprice = JSON.parse(localStorage.getItem('squirrelprice'));
  squirrelpower = JSON.parse(localStorage.getItem('squirrelpower'));
  threshold = JSON.parse(localStorage.getItem('threshold'));
  sellingrate = JSON.parse(localStorage.getItem('sellingrate'));
}


// Made by Parlakarmut, with love <3
