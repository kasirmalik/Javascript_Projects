let endDate = " 29 September 2024"
 document.getElementById("enddate").innerText = endDate
 const inputs = document.querySelectorAll("input")


 function clock() {
     const end = new Date(endDate)
     const now = new Date()
     const diff = (end - now) / 1000
     if (diff < 0) return;
     // converting days to input
     inputs[0].value = (Math.floor(diff / 3600/ 24));
     // converting hours 
     inputs[1].value =(Math.floor( diff /3600 % 24));
     // calculating minute
     inputs[2].value = (Math.floor( diff /60 % 6));
     // calculating seconds
     inputs[3].value = (Math.floor( diff) % 60);


 }
 clock();
// to pe
 setInterval(
    () =>{
        clock()
    },
    1000
 )