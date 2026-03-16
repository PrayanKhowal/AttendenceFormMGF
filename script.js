const scriptURL = "https://script.google.com/macros/s/AKfycbyGm0j8AFuwdkToJXt7xxdPh3_CyohY5abVgjkoBUOuJJjJvAfzoqFuohTeQHt0WTfv/exec";

const form = document.getElementById("attendanceForm");
const button = document.getElementById("submitBtn");

/* add checkmark element */

const checkmark = document.createElement("span");
checkmark.className = "checkmark";
checkmark.innerText = "✓";
button.appendChild(checkmark);

form.addEventListener("submit", function(e){

e.preventDefault();

button.classList.add("loading");
button.disabled = true;

const formData = new FormData(form);

fetch(scriptURL,{
method:"POST",
body:formData,
mode:"no-cors"
})
.then(()=>{

button.classList.remove("loading");
button.classList.add("success");

showSuccess();
form.reset();

setTimeout(()=>{
button.classList.remove("success");
button.disabled=false;
},2000);

})
.catch(()=>{

button.classList.remove("loading");
button.disabled=false;

showError();

});

});


function showSuccess(){

const toast=document.createElement("div");

toast.innerText="✅ Attendance Submitted";

toast.style.position="fixed";
toast.style.top="30px";
toast.style.left="50%";
toast.style.transform="translateX(-50%)";
toast.style.background="rgba(34,197,94,0.9)";
toast.style.color="white";
toast.style.padding="14px 22px";
toast.style.borderRadius="10px";
toast.style.fontWeight="500";
toast.style.fontFamily="Inter, sans-serif";
toast.style.boxShadow="0 10px 25px rgba(0,0,0,0.25)";
toast.style.backdropFilter="blur(6px)";
toast.style.zIndex="1000";

document.body.appendChild(toast);

setTimeout(()=>{
toast.remove();
},3000);

}


function showError(){

const toast=document.createElement("div");

toast.innerText="❌ Submission Failed";

toast.style.position="fixed";
toast.style.top="30px";
toast.style.left="50%";
toast.style.transform="translateX(-50%)";
toast.style.background="rgba(220,38,38,0.9)";
toast.style.color="white";
toast.style.padding="14px 22px";
toast.style.borderRadius="10px";
toast.style.fontWeight="500";
toast.style.fontFamily="Inter, sans-serif";
toast.style.boxShadow="0 10px 25px rgba(0,0,0,0.25)";
toast.style.backdropFilter="blur(6px)";
toast.style.zIndex="1000";

document.body.appendChild(toast);

setTimeout(()=>{
toast.remove();
},3000);

}
