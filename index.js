function play(sound) {
    player = document.querySelector('.player')
    player.innerHTML = `<audio src="assets/${sound}.wav" autoplay></audio>`
}


