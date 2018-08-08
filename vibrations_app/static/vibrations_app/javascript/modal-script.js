var modal = document.getElementById('vibe-modal');
var btn = document.getElementById('btn-start');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = "block";
};
span.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(){
    if(event.target == modal){
        modal.style.display = 'none';
    };
};