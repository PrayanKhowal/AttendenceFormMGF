const scriptURL = "https://script.google.com/macros/s/AKfycbyGm0j8AFuwdkToJXt7xxdPh3_CyohY5abVgjkoBUOuJJjJvAfzoqFuohTeQHt0WTfv/exec";

const form = document.getElementById("attendanceForm");
const button = document.getElementById("submitBtn");

form.addEventListener("submit", function(e){

e.preventDefault();

/* show loading */
button.classList.add("loading");
button.disabled = true;

const formData = new FormData(form);

fetch(scriptURL,{
method:"POST",
body:formData,
mode:"no-cors"
})
.then(()=>{
showSuccess();
form.reset();
})
.catch(()=>{
showError();
})
.finally(()=>{
button.classList.remove("loading");
button.disabled = false;
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
