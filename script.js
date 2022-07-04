// The variables.
let q = {
  wood: 0,
  paper: 0,
  funds: 0,
  paperSold: 0,
  Allpaper: 0,
  AxeCost: 3,
  woodperclick: 1,
  acorn: 0,
  squirrel: 0,
  squirrelprice: 10,
  squirrelpower: 1,
  threshold: 5,
  sellingrate: 3000,
  fundsdeposited: 0,
  stocks: 0,
  total: 0
}

q.acorn= q.acorn < 0 ? 0 :q.acorn;
q.threshold= q.threshold < 0 ? 0 :q.threshold;
q.stocks= q.stocks < 0 ? 0 :q.stocks;

function updatecount(){ // This function makes it so that the counters don't lag and show past numbers.
    setInterval(() => {
        document.getElementById("squirrelcounter").innerHTML = "Buying Another Squirrel Currenctly Costs " + q.squirrelprice +" Acorns"
        document.getElementById("Allpaper").innerHTML = "Ever Since You Started This Journey, You Have Made " + q.Allpaper + " Sheets of Paper"
        document.getElementById("squirrel").innerHTML = "You Have " + q.squirrel + " Squirrels"
        document.getElementById("acorn").innerHTML = "You Have " + q.acorn + " Acorns"
        document.getElementById("paper made").innerHTML = "You Have " + q.paper + " Sheets of Paper"
        document.getElementById("wood cut").innerHTML = "You Have " + q.wood + " Wood"
        document.getElementById("funds").innerHTML = "Available Funds: $ " + q.funds
        document.getElementById("Papersold").innerHTML = q.paperSold + " Paper Sold"
    }, 40);

}


function reset() {
  let answer = confirm('Are you sure you want to reset the game?');
  if(answer = true) {
    q.wood= 0,
    q.paper= 0,
    q.funds= 0,
    q.paperSold= 0,
    q.Allpaper= 0,
    q.AxeCost= 3,
    q.woodperclick= 1,
    q.acorn= 0,
    q.squirrel= 0,
    q.squirrelprice= 10,
    q.squirrelpower= 1,
    q.threshold= 5,
    q.sellingrate= 3000,
    q.fundsdeposited= 0,
    q.stocks= 0,
    q.total= 0
  }
}


// High risk investment 


function medrisk() {
  let medrisk = Math.floor(Math.random() * 51);
  let randomdecide = Math.floor(Math.random() * 1001);
  if ((randomdecide % 5) == 0) {
    q.stocks += medrisk
    document.getElementById("stocks").innerHTML = "Stocks: $ " + q.stocks
  } else if ((randomdecide % 3) == 0) {
    q.stocks -= medrisk
    q.stocks= q.stocks < 0 ? 0 :q.stocks;
    document.getElementById("stocks").innerHTML = "Stocks: $ " + q.stocks
  }
  q.stocks= q.stocks < 0 ? 0 :q.stocks;
}
Stock_change_rate = setInterval(medrisk, 2500);

// Low risk investment


function deposit() { // Allows you to deposit your funds
  q.fundsdeposited = q.funds
  q.total = q.fundsdeposited + q.stocks
  q.funds = 0
  document.getElementById("deposited").innerHTML = "Deposited: $ " + q.fundsdeposited
  document.getElementById("funds").innerHTML = "Available Funds: $ " + q.funds
  document.getElementById("Total").innerHTML = "Total: $ " + q.total
}


function withdraw() {
  if (q.fundsdeposited > 0) {
    q.funds += q.total
    q.total = 0
    q.fundsdeposited = 0
    q.stocks = 0
    document.getElementById("deposited").innerHTML = "Deposited: $ " + q.fundsdeposited
    document.getElementById("funds").innerHTML = "Available Funds: $ " + q.funds
    document.getElementById("Total").innerHTML = "Total: $ " + q.total
    document.getElementById("readout5").innerHTML = " "
  } else if (q.fundsdeposited <= 0) {
    document.getElementById("readout5").innerHTML = "You haven't tried investing any money. What do you expect to withdraw?"
  }
}


function revealbutton() { // This function checks if you have crossed the threshold (which starts at 5 and doubles ecerytime you buy it) and reveals the button.
  let x = document.getElementById("fastsell");
  if (q.funds >= q.threshold) {
    x.style.display = "block";
  } else if (q.funds < q.threshold) {
    x.style.display = "none";
  }
}
interval_reveal = setInterval(revealbutton, 1000);  // This timer checks if you crossed the threshold every second

function fastsell() { // People say that selling paper was slow. I'm not complaining as I got to learn many new things whilst I was making this.
  if(q.funds >= q.threshold){
    q.threshold= q.threshold < 0 ? 0 :q.threshold;
    q.sellingrate -= 500
    q.funds -= q.threshold
    q.threshold *= 2
    Math.floor(q.threshold)
    document.getElementById("funds").innerHTML = "Available Funds: $ " + q.funds
  } else if (q.funds < q.threshold){
    q.sellingrate -= 0
  }
}


function buysquirrel() { // Allows you to buy squirrels, which Auto-cut trees for you and protect you from arthritis
  if (q.acorn >= q.squirrelprice) {
   q.squirrel += 1
   q.acorn -= q.squirrelprice
   document.getElementById("squirrel").innerHTML = "You Have " + q.squirrel + " Squirrels"
   document.getElementById("acorn").innerHTML = "You Have " + q.acorn + " Acorns"
   q.squirrelprice += 10
   document.getElementById("squirrelcounter").innerHTML = "Buying Another Squirrel Currenctly Costs " + q.squirrelprice +" Acorns"
   var mainGameLoop = window.setInterval(function () {
      cuttrees()
    }, 1000)  
  } else if (q.acorn < q.squirrelprice) {
    q.squirrel += 0
    q.acorn= q.acorn < 0 ? 0 :q.acorn;
  }
  q.acorn= q.acorn < 0 ? 0 :q.acorn;
}


function AxeUpgrade() { // Allows you to get more wood per click but in turn takes (a small bit of) your funds.
    if (q.funds >= q.AxeCost) {
      q.funds -= q.AxeCost
      q.woodperclick += 1
      q.AxeCost *= 2
      document.getElementById("AxeCost").innerHTML = "* Upgrade Your Axe. Cost: $ " + q.AxeCost 
      document.getElementById("readout4").innerHTML = "You have enough funds to upgrade your axe."
      document.getElementById("funds").innerHTML = "Available Funds: $ " + q.funds    
    } else if (q.AxeCost > q.funds) {
      document.getElementById("readout4").innerHTML = "You don't have enough money to upgrade your axe!"        
    }
  }


function makemoney() { // Automatically sells your paper and in turn increases your amount of funds by one.
    if (q.paper > 0) {
        q.paper -= 1
        q.funds += 1
        q.paperSold += 1
        document.getElementById("paper made").innerHTML = "You Have " + q.paper + " Sheets of Paper"
        document.getElementById("funds").innerHTML = "Available Funds: $ " + q.funds
        document.getElementById("Papersold").innerHTML = q.paperSold + " Paper Sold"
        document.getElementById("readout2").innerHTML = "You have some paper to sell."
    } else if (q.paper <= 0) {
        document.getElementById("readout2").innerHTML = "You don't have any paper to sell!"
        }
}    

interval = setInterval(makemoney, q.sellingrate); // The "timer" which allows this function to perform automatically.


function cuttrees(){ // Allows you to get wood.
  q.wood += q.woodperclick
  document.getElementById("wood cut").innerHTML = "You Have " + q.wood + " Wood"
  let RandomNumber = Math.floor(Math.random() * 1001);
  if ((RandomNumber % 7) == 0) {
    q.acorn += 1
    document.getElementById("acorn").innerHTML = "You Have " + q.acorn + " Acorns"
  } else if ((RandomNumber % 7) !== 0) {
    q.acorn += 0
    document.getElementById("acorn").innerHTML = "You Have " + q.acorn + " Acorns"
  }
}

function makepaper(){ // Allows you to produce paper by decreasing your amount of wood.
    if (q.wood > 0) {
    q.paper += 1
    q.wood -= 1
    q.Allpaper += 1
    document.getElementById("paper made").innerHTML = "You Have " + q.paper + " Sheets of Paper"
    document.getElementById("wood cut").innerHTML = "You Have " + q.wood + " Wood"
    document.getElementById("readout3").innerHTML = " "
    document.getElementById("Allpaper").innerHTML = "Ever Since You Started This Journey, You Have Made " + q.Allpaper + " Sheets of Paper"
    } else if (q.wood <= 0) {
    document.getElementById("readout3").innerHTML = "You don't have enough wood to make paper!"
    }
}


function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
} 

var savegame = JSON.parse(localStorage.getItem("TreeIncSave"))
if (savegame !== null) {
  q = savegame
}

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('TreeIncSave', JSON.stringify(q))
}, 150)


// Made by Cogstump, with love <3
