document.getElementById("contactBtn").addEventListener("click",function(){
    document.querySelector(".modal-container").style.display = "flex";
});

document.getElementById("close-modal").addEventListener("click",function(){
    document.querySelector(".modal-container").style.display = "none";
});