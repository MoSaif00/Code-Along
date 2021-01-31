const meditation =()=>{
    const song=document.querySelector('.audio-sound');
    const play=document.querySelector('.play');
    const outline= document.querySelector('.moving-outline circle');
    const video = document.querySelector('.video-container video');


    //sounds
    cosnt sounds=document.querySelectorAll('.sound-pick button');

    //time display
    const timeDisplay=document.querySelector('.time-display');

    const outlineLength=outline.getTotalLength();

    //duration
    let fakeDuration=400;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDasharray=222;

    //play sound 
    play.addEventListener('click',()=>{
        song.play();
    });
};

meditation();