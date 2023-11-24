
function toggleSidebar(){
   const sidebar = document.getElementById('sidebar');
   const overlay = document.getElementById('overlay');
   
   if(sidebar.style.right === '0px'){
    sidebar.style.right = "-250px";
    overlay.style.display = "none";
   }

   else {
    sidebar.style.right = "0";
    overlay.style.display = "block";
   }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    sidebar.style.right = "-250px";
    overlay.style.display = "none";
}