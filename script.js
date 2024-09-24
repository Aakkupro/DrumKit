document.querySelector('.key').addEventListener('click', function(e){
    const audio = document.querySelector(`audio[data-key="${e.target.getAttribute('data-key')}"]`);
    //console.log(audio);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
});
document.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //console.log(audio);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
});
