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
  total: 0,
  owl: 0,
  owlprice: 20,
  owlpower: 1,
}

q.acorn= q.acorn < 0 ? 0 :q.acorn;
q.threshold= q.threshold < 0 ? 0 :q.threshold;
q.stocks= q.stocks < 0 ? 0 :q.stocks;
let submitted
let submitcheck = "false"
let stockcheck = "false"


console.log("[Are you here to check for some bugs or just to cheat? Whichever it is, you're free to do so!]");


function gambledice() {
  if (submitcheck = "true" ) {
    let randomdice = Math.floor(Math.random()*(6)+1);
    console.log(randomdice)
    document.getElementById("yougot").innerHTML = "You Got: " + randomdice
    if ( randomdice != 6) {
    document.getElementById("readout6").innerHTML = "Well, better luck next time!"
  } else if ( randomdice = 6 ) {
    document.getElementById("readout6").innerHTML = "Congratu - damn - lations!"
    q.funds += submitted * 2.7
    q.funds = Math.ceil(q.funds)
    document.getElementById("funds").innerHTML = "Available Funds: $ " + q.funds
}
 submitcheck = "false"
 }
}


function submitfunc() {
  submitted = document.getElementById("myText").value;
  if (q.funds >= submitted) {
    q.funds -= submitted
    document.getElementById("funds").innerHTML = "Available Funds: $ " + q.funds
    submitcheck = "true"
  } else if (q.funds < submitted) {
    console.log("Your mere existence is a sin");
  }
}



function buyowl() {
  if (q.acorn >= q.owlprice) {
    q.owl += 1
    q.acorn -= q.owlprice
    document.getElementById("owl").innerHTML = "You Have " + q.owl + " Owls"
    document.getElementById("acorn").innerHTML = "You Have " + q.acorn + " Acorns"
    q.owlprice *= 1.8
    q.owlprice = Math.ceil(q.owlprice);
    document.getElementById("owlcounter").innerHTML = "Buying Another Owl Currently Costs " + q.owlprice + " Acorns"
    var owlpaper = window.setInterval(function () {
      makepaper()
    }, 5000)  
   } else if (q.acorn < q.owlprice) {
     q.owl += 0
     q.acorn= q.acorn < 0 ? 0 :q.acorn;
   }
   q.acorn= q.acorn < 0 ? 0 :q.acorn;
 }


function revealstocktrade() {
  let stocks = document.getElementById("stock");
  if (q.funds >= 50 && stockcheck == "false") {
    stocks.style.display = "block";
  }
}
interval_reveal_stock = setInterval(revealstocktrade, 500);

function unlockstocks() {
  if (q.funds >= 250) {
    q.funds -= 250
    let b = document.getElementById("investment");
    b.style.display = "block";
    let c = document.getElementById("stock");
    c.style.display = "none";
    stockcheck = "true"
  }
}


function reset() {
  let confirm = prompt('Type YES to confirm that you want to delete all game data: ');
  if (confirm == "YES" ) {
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
    q.total= 0,
    q.owl= 0,
    q.owlprice= 20,
    q.owlpower= 0
  } else if (confirm == "CHEATS") {
    q.wood= 1000000,
    q.paper= 1000000,
    q.funds= 1000000,
    q.paperSold= 0,
    q.Allpaper= 0,
    q.AxeCost= 3,
    q.woodperclick= 1000000,
    q.acorn= 1000000,
    q.squirrel= 1000000,
    q.squirrelprice= 10,
    q.squirrelpower= 1000000,
    q.threshold= 5,
    q.sellingrate= 3000,
    q.fundsdeposited= 0,
    q.stocks= 0,
    q.total= 0,
    q.owl= 1000000,
    q.owlprice= 20,
    q.owlpower= 0
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


function revealbutton_fastsell() { 
  let x = document.getElementById("fastsell");
  if (q.funds >= q.threshold) {
    x.style.display = "block";
  } else if (q.funds < q.threshold) {
    x.style.display = "none";
  }
}
interval_reveal_fastsell = setInterval(revealbutton_fastsell, 1000);  // This timer checks if you crossed the threshold every second

function fastsell() { 
  if(q.funds >= q.threshold){
    q.threshold= q.threshold < 0 ? 0 :q.threshold;
    q.sellingrate -= 250
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
      document.getElementById("readout4").innerHTML = " "
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
        document.getElementById("readout2").innerHTML = " "
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
