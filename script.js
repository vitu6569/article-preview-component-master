const  shareOptions = document.getElementById("share")
document.querySelector('#buttonShare').addEventListener("click", function () {
    this.classList.toggle('active');
    shareOptions.classList.toggle('active');
})