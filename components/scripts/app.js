//code by Dev-X (chidi prince) for HNG12 stage 0 task 

//function to update time
function updateUTCTime() {
    const now = new Date();
    document.getElementById("utc-time").innerText = now.toUTCString();
}

updateUTCTime(); // initiate update time function
setInterval(updateUTCTime, 1000); // update the update time function


//function to display full bio 
function readmore(){
    alert("Full Stack Web Developer with over 3 years of experience delivering dynamic, user-focused digital solutions. As a Digital Solution Expert, I specialize in providing comprehensive IT services, from crafting sleek and responsive websites to offering tailored tech solutions that drive efficiency and innovation. My passion lies in blending technical expertise with creative problem-solving to help individuals and businesses thrive in the digital age.")
}