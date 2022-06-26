// Section no 4 ke button
function myFunction1() {
    var x = document.getElementById("first-hide");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction2() {
      var y = document.getElementById("secound-hide");
      if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
    }
    function myFunction3() {
      var z = document.getElementById("third-hide");
      if (z.style.display === "none") {
        z.style.display = "block";
      } else {
        z.style.display = "none";
      }
    }
    function myFunction4() {
        var a = document.getElementById("fourth-hide");
        if (a.style.display === "none") {
          a.style.display = "block";
        } else {
          a.style.display = "none";
        }
      }
      // Slide navigation bar 
      function openNav() {
        document.getElementById("mySidenav").style.display = "block";
      }
  
      function closeNav() {
        document.getElementById("mySidenav").style.display = "none";
      }

      // I faced one problem in navigartion bar than use this function
      var n = window.matchMedia("(min-width: 981px)")
      myFunction(n) // Call listener function at run time
      n.addListener(myFunction)
      function myFunction(n) {
        if (n.matches) { // If media query matches
          document.getElementById("mySidenav").style.display = "block";
        } else {
          document.getElementById("mySidenav").style.display = "none";
        }
      }
     