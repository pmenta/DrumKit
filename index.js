function play(sound) {
    player = document.querySelector('.player')
    player.innerHTML = `<audio src="assets/${sound}.wav" autoplay></audio>`
}


document.addEventListener('keydown', function(e) {
    if(e.which == 65){
      document.getElementById("bt_a").click();
    }
    else if(e.which == 83){
        document.getElementById("bt_s").click();
      }
    else if(e.which == 68){
        document.getElementById("bt_d").click();
      }  
    else if(e.which == 70){
        document.getElementById("bt_f").click();
      }
    else if(e.which == 71){
        document.getElementById("bt_g").click();
      }
    else if(e.which == 72){
        document.getElementById("bt_h").click();
      }  
});