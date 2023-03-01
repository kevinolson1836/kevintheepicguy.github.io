/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
let main = "open";

function openNav() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if(w > 786){
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
    else{
      document.getElementById("mySidebar").style.width = "100%";
      document.getElementById("main").style.marginLeft = "0";
    }
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
  }


  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeBlogNav() {
    document.getElementById("mySidebar").style.width = "0";
  }


  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeOpenMain() {
    if(main === "open"){
      document.getElementById("collapseExampleMain").style.display = "none";
      main = "close";
    } 
    else{
      document.getElementById("collapseExampleMain").style.display = "inline";
      main = "open"
    }
  }
