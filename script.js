const changedate = document.getElementById('changedate');
const dateoptions=document.getElementById('date-options');

//   Use new Date() pre-defined function to get date 

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formatting= `${day}-${month}-${year}`;
changedate.textContent=formatting

// Use Switch Statement for Multiple cases
dateoptions.addEventListener('click', ()=>{
switch(dateoptions.value){
case "yy-mm-dd":
    changedate.textContent=formatting.split('-').reverse().join('-');
    break;
case "dd-mm-yy-hh-mm":
    changedate.textContent=`${day}-${month}-${year}-${hours} Hours-${minutes} Minutes`;
    break;
default:
    changedate.textContent=formatting;
}
});
