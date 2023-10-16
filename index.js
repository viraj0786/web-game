var Blood = document.querySelector(".three .bullet div img");
var Blood2 = document.querySelector(".one .shooter div img");
var startbtn = document.querySelector(".start-btn");
var rounds = document.querySelector(".top div h2");
var topSeconds = document.querySelector(".top-seconds");
var count1 = 0;
var count2  = 0;
var count = 0;
// computer play
const queryString = window.location.search;

if(queryString === "?id=1"){
  startbtn.addEventListener("click", () => {

    start();
  });
  function start() {
    var settime;
    rounds.setAttribute("style", "display: block");
    if (count == 0){
      rounds.innerHTML  = "round one";
      setTimeout(() => {
        rounds.setAttribute("style", "display: none");
      }, 300);
    }
    if (count == 1){
      rounds.innerHTML  = "round two";
      setTimeout(() => {
        rounds.setAttribute("style", "display: none");
      }, 300);
    }
    if (count == 2){
      rounds.innerHTML  = "round three";
      setTimeout(() => {
        rounds.setAttribute("style", "display: none");
      }, 300);
    }
    if (count == 3){
      rounds.innerHTML  = "round four";
      setTimeout(() => {
        rounds.setAttribute("style", "display: none");
      }, 300);
    }
    if (count == 4){
      rounds.innerHTML  = "round five";
      setTimeout(() => {
        rounds.setAttribute("style", "display: none");
      }, 300);
    }
  
    count = ++count;
  
  
  
    console.log("i m count     "+ count);
    /*for left shooter*/
    function tempLoad() {
     
      var BuletOne = document.querySelector(".two_innerleft img");
      
      console.log(Blood);
      console.log(BuletOne);
      BuletOne.setAttribute("style", "display: block");
      setTimeout(() => {
        BuletOne.setAttribute("style", "left: 20%");
      }, 300);
      setTimeout(() => {
        BuletOne.setAttribute("style", "left: 40%");
      }, 350);
      setTimeout(() => {
        BuletOne.setAttribute("style", "left: 60%");
      }, 400);
      setTimeout(() => {
        BuletOne.setAttribute("style", "left: 80%");
      }, 450);
      setTimeout(() => {
          health2(BuletOne)
        BuletOne.setAttribute("style", "left: 105% ");
        Blood.setAttribute("style", "display: block");
      }, 500);
      setTimeout(() => {
        BuletOne.setAttribute("style", "display: none");
      }, 800);
    }
    tempLoad();
    var finish1 = setInterval(tempLoad, 4500);
   
  
    /*for right shooter*/
    function tempLoad1() {
      
      var BuletOne = document.querySelector(".two_innerright img");
      console.log(BuletOne);
      BuletOne.setAttribute("style", "display: block");
  
      settime = setTimeout(() => {
        Blood.setAttribute("style", "display: none");
        BuletOne.setAttribute("style", "left: 70%");
      }, 1500);
      settime = setTimeout(() => {
        BuletOne.setAttribute("style", "left: 50%");
      }, 1550);
      settime = setTimeout(() => {
        BuletOne.setAttribute("style", "left: 40%");
      }, 1600);
      settime = setTimeout(() => {
        BuletOne.setAttribute("style", "left: 20%");
      }, 1650);
      settime  =setTimeout(() => {
        BuletOne.setAttribute("style", "left: 0");
      }, 1700);
      settime  = setTimeout(() => {
          health(BuletOne);
        Blood2.setAttribute("style", "display: block");
        BuletOne.setAttribute("style", "display: none");
      }, 2000);
      setTimeout(() => {
        Blood2.setAttribute("style", "display: none");
      }, 2700);
    }
    // tempLoad1();
    // var finish2 = setInterval(tempLoad1, 4500);
  
  
  
    function health(BuletOne) {
      var min = 1;
      var max = 5;
      var RandomNo;
      var imspan1 = document.querySelector(".imspan1").innerHTML;
      var getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      RandomNo = getRandomInt(min, max);
      console.log(imspan1);
      var health = imspan1 - RandomNo;
      console.log(health);
      var p2 = document.querySelector(".btns .semi_result .h3 span").innerHTML;
      document.querySelector(".imspan1").innerHTML = health;
      if (p2 == "3"){
        rounds.innerHTML  = "player 2 won the game";
        rounds.setAttribute("style", "display: block");
        clearTimeout(settime)
        clearInterval(finish1)
        clearInterval(finish2)
      }
      if(health <= "0"){
       
        console.log("stop");
  
        clearTimeout(settime)
        clearInterval(finish1)
        clearInterval(finish2)
        document.querySelector(".two_innerright img").setAttribute("style", "display: none");
        document.querySelector(".imspan1").innerHTML = "100";
        document.querySelector(".imspan2").innerHTML = "100";
        count1 = ++count1;
        console.log("this is count   "  +   count1);
        document.querySelector(".semi_result .h3 span").innerHTML = count1;
        if(count <= 4){
        settime = setTimeout(() => {
          start();
        }, 2000);
        }
        if (count == 5){
          rounds.innerHTML  = "player 2 won the game";
          rounds.setAttribute("style", "display: block");
        }
      }
  
    }
    
    function health2() {
        var min = 1;
        var max = 5;
        var RandomNo;
        var imspan1 = document.querySelector(".imspan2").innerHTML;
        var getRandomInt = (min, max) => {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        RandomNo = getRandomInt(min, max);
        console.log(imspan1);
        var health = imspan1 - RandomNo;
        console.log(health);
        var p2 = document.querySelector(".btns .semi_result .h2 span").innerHTML;
        document.querySelector(".imspan2").innerHTML = health;
        if (p2 == "3"){
          rounds.innerHTML  = "player 1 won the game";
          rounds.setAttribute("style", "display: block");
          clearTimeout(settime)
          clearInterval(finish1)
          clearInterval(finish2)
        }
        if(health <= "0"){
          console.log("stop");
          
          console.log(typeof(p1));
  
          clearTimeout(settime)
          clearInterval(finish1)
          clearInterval(finish2)
          document.querySelector(".two_innerright img").setAttribute("style", "display: none");
          document.querySelector(".imspan2").innerHTML = "100";
          document.querySelector(".imspan1").innerHTML = "100";
          count2= ++count2;
          console.log("this is count2" +count2);
          document.querySelector(".semi_result .h2 span").innerHTML = count2;
          if(count <= 4){
          settime = setTimeout(() => {
            start();
          }, 2000);
          }
          if (count == 5){
            rounds.innerHTML  = "player 1 won the game";
            rounds.setAttribute("style", "display: block");
          }
        }
  
      }
  
  }
}


if(queryString === "?id=2"){

  startbtn.addEventListener("click", () => {

    start();
  });
  function start() {
    var settime;
    rounds.setAttribute("style", "display: block");
    if (count == 0){
      rounds.innerHTML  = "round one";
      setTimeout(() => {
        rounds.setAttribute("style", "display: none");
      }, 300);
    }
    if (count == 1){
      rounds.innerHTML  = "round two";
      setTimeout(() => {
        rounds.setAttribute("style", "display: none");
      }, 300);
    }
    if (count == 2){
      rounds.innerHTML  = "round three";
      setTimeout(() => {
        rounds.setAttribute("style", "display: none");
      }, 300);
    }
    if (count == 3){
      rounds.innerHTML  = "round four";
      setTimeout(() => {
        rounds.setAttribute("style", "display: none");
      }, 300);
    }
    if (count == 4){
      rounds.innerHTML  = "round five";
      setTimeout(() => {
        rounds.setAttribute("style", "display: none");
      }, 300);
    }
  
    count = ++count;
  
  
  
    console.log("i m count     "+ count);
    /*for left shooter*/
    function tempLoad() {
     
      var BuletOne = document.querySelector(".two_innerleft img");
      
      console.log(Blood);
      console.log(BuletOne);
      BuletOne.setAttribute("style", "display: block");
      setTimeout(() => {
        BuletOne.setAttribute("style", "left: 20%");
      }, 300);
      setTimeout(() => {
        BuletOne.setAttribute("style", "left: 40%");
      }, 350);
      setTimeout(() => {
        BuletOne.setAttribute("style", "left: 60%");
      }, 400);
      setTimeout(() => {
        BuletOne.setAttribute("style", "left: 80%");
      }, 450);
      setTimeout(() => {
          health2(BuletOne)
        BuletOne.setAttribute("style", "left: 105% ");
        Blood.setAttribute("style", "display: block");
      }, 500);
      setTimeout(() => {
        BuletOne.setAttribute("style", "display: none");
      }, 800);
    }
    tempLoad();
    // var finish1 = setInterval(tempLoad, 4500);
   
    topSeconds.addEventListener("click", ()=>{
      tempLoad1()
    })
    /*for right shooter*/
    function tempLoad1() {
      
      var BuletOne = document.querySelector(".two_innerright img");
      console.log(BuletOne);
      BuletOne.setAttribute("style", "display: block");
  
      settime = setTimeout(() => {
        Blood.setAttribute("style", "display: none");
        BuletOne.setAttribute("style", "left: 70%");
      }, 1500);
      settime = setTimeout(() => {
        BuletOne.setAttribute("style", "left: 50%");
      }, 1550);
      settime = setTimeout(() => {
        BuletOne.setAttribute("style", "left: 40%");
      }, 1600);
      settime = setTimeout(() => {
        BuletOne.setAttribute("style", "left: 20%");
      }, 1650);
      settime  =setTimeout(() => {
        BuletOne.setAttribute("style", "left: 0");
      }, 1700);
      settime  = setTimeout(() => {
          health(BuletOne);
        Blood2.setAttribute("style", "display: block");
        BuletOne.setAttribute("style", "display: none");
      }, 2000);
      setTimeout(() => {
        Blood2.setAttribute("style", "display: none");
      }, 2700);
    }
    // tempLoad1();
    // var finish2 = setInterval(tempLoad1, 4500);
  
  
  
    function health(BuletOne) {
      var min = 1;
      var max = 5;
      var RandomNo;
      var imspan1 = document.querySelector(".imspan1").innerHTML;
      var getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      RandomNo = getRandomInt(min, max);
      console.log(imspan1);
      var health = imspan1 - RandomNo;
      console.log(health);
      var p2 = document.querySelector(".btns .semi_result .h3 span").innerHTML;
      document.querySelector(".imspan1").innerHTML = health;
      if (p2 == "3"){
        rounds.innerHTML  = "player 2 won the game";
        rounds.setAttribute("style", "display: block");
        clearTimeout(settime)
        clearInterval(finish1)
        clearInterval(finish2)
      }
      if(health <= "0"){
       
        console.log("stop");
  
        clearTimeout(settime)
        clearInterval(finish1)
        clearInterval(finish2)
        document.querySelector(".two_innerright img").setAttribute("style", "display: none");
        document.querySelector(".imspan1").innerHTML = "100";
        document.querySelector(".imspan2").innerHTML = "100";
        count1 = ++count1;
        console.log("this is count   "  +   count1);
        document.querySelector(".semi_result .h3 span").innerHTML = count1;
        if(count <= 4){
        settime = setTimeout(() => {
          start();
        }, 2000);
        }
        if (count == 5){
          rounds.innerHTML  = "player 2 won the game";
          rounds.setAttribute("style", "display: block");
        }
      }
      setTimeout(() => {
        tempLoad();
            
          }, 300);
  
    }
    
    function health2() {
        var min = 1;
        var max = 5;
        var RandomNo;
        var imspan1 = document.querySelector(".imspan2").innerHTML;
        var getRandomInt = (min, max) => {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        RandomNo = getRandomInt(min, max);
        console.log(imspan1);
        var health = imspan1 - RandomNo;
        console.log(health);
        var p2 = document.querySelector(".btns .semi_result .h2 span").innerHTML;
        document.querySelector(".imspan2").innerHTML = health;
        if (p2 == "3"){
          rounds.innerHTML  = "player 1 won the game";
          rounds.setAttribute("style", "display: block");
          clearTimeout(settime)
          clearInterval(finish1)
          clearInterval(finish2)
        }
        if(health <= "0"){
          console.log("stop");
          
          console.log(typeof(p1));
  
          clearTimeout(settime)
          clearInterval(finish1)
          clearInterval(finish2)
          document.querySelector(".two_innerright img").setAttribute("style", "display: none");
          document.querySelector(".imspan2").innerHTML = "100";
          document.querySelector(".imspan1").innerHTML = "100";
          count2= ++count2;
          console.log("this is count2" +count2);
          document.querySelector(".semi_result .h2 span").innerHTML = count2;
          if(count <= 4){
          settime = setTimeout(() => {
            start();
          }, 2000);
          }
          if (count == 5){
            rounds.innerHTML  = "player 1 won the game";
            rounds.setAttribute("style", "display: block");
          }
        }
  
      }
  
  }
}


// modal popup work

var main = document.querySelector(".main");

//
var startbtn1 = document.querySelector(".btn-atomatic");
var startbtn2 = document.querySelector(".btn-computer");
var startbtn3 = document.querySelector(".btn-human");
var selectGame = document.querySelectorAll(".select-game");

startbtn1.addEventListener("click", () => {
    main.style.display = "flex !important"
});
startbtn2.addEventListener("click", () => {
  main.style.display = "flex";
});
startbtn3.addEventListener("click", () => {
  main.style.display = "flex"
});



