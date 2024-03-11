 const music = new Audio('songs/1.mp3');
 /* music.play(); */

 const songs =[
    {
        id:"1",
        songName: `Woh Chaand Kahan Se Laogi <br>
        <div class="subtitle">Vishal Mishra _ Urvashi Rautela_ Mohsin Khan _Muntashir M</div>`,
        poster: "img/1.jpeg",
    },
    {
        id:"2",
        songName: `Dil Haara Song  <br>
        <div class="subtitle">_ Tashan _ Saif Ali Khan_ Kareena Kapoor _ Sukhwinder Singh_ Vishal-Shekhar_ Piyush(MP3_320K)</div>`,
        poster: "img/2.jpeg",
    },
    {
        id:"3",
        songName: `Falak Tak Song <br>
        <div class="subtitle"> _ Tashan _ Akshay Kumar_ Kareena Kapoor_ Udit Narayan_</div>`,
        poster: "img/3.jpeg",
    },
    {
        id:"4",
        songName: `Dil Jhoom _ Gadar 2<br>
        <div class="subtitle">Arijit Singh _ Sunny Deol_ Utkarsh Sharma_ Simratt K _ Mithoon_ Sayeed Quadri</div>`,
        poster: "img/4.jpeg",
    },
    {
        id:"5",
        songName: `Dil Mera Chahe (Full Song) <br>
        <div class="subtitle">Nafe Khan _ Sumi _ Manish _ Hindi Song 2017 _ Analog Records(MP3_160K</div>`,
        poster: "img/5.jpeg",
    },
    {
        id:"6",
        songName: `Designer (Full Video)<br>
        <div class="subtitle">Guru Randhawa_ Yo Yo Honey Singh Ft. Divya Khosla Kumar _ Mihir G _ Bhushan K</div>`,
        poster: "img/6.jpeg",
    },
    {
        id:"7",
        songName: `B Praak _ UDD GAYA <br>
        <div class="subtitle">Jaani _ Gurnam Bhullar _ Tania _ LEKH Movie Song</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `ANIMAL_ SATRANGA(Song)<br>
        <div class="subtitle">Ranbir Kapoor_Rashmika_Sandeep V_Arijit_Shreyas P_Siddharth-Garima _Bhushan K</div>`,
        poster: "img/8.jpeg",
    },
    {
        id:"9",
        songName: `ANIMAL_PEHLE BHI MAIN<br>
        <div class="subtitle">Ranbir Kapoor_Tripti Dimri _ Sandeep V _ Vishal M_Raj S _ Bhushan K</div>`,
        poster: "img/9.jpeg",
    },
    {
        id:"10",
        songName: `Chal Tere Ishq Mein <br>
        <div class="subtitle">Gadar 2 _Utkarsh Sharma_Simratt Kaur _Vishal M_Mithoon_Neeti_Sayeed</div>`,
        poster: "img/10.jpeg",
    },
    {
        id:"11",
        songName: `Haare Haare<br>
        <div class="subtitle">Aishwarya Rai _ Chandrachur Singh _ Josh _ 90_s Romantic Song</div>`,
        poster: "img/11.jpeg",
    },
    {
        id:"12",
        songName: `Jaage Jaage<br>
        <div class="subtitle"> Mere Yaar Ki Shaadi Hai _ Jimmy Shergill_ Sanjana _ Sonu Nigam</div>`,
        poster: "img/12.jpeg",
    },
    {
        id:"13",
        songName: `Heeriye (Official Audio)<br>
        <div class="subtitle"> Jasleen Royal ft Arijit Singh_ Dulquer Salmaan_ Aditya Sharma _Taani Tanvir</div>`,
        poster: "img/13.jpeg",
    },
    {
        id:"14",
        songName: `Jogi -<br>
        <div class="subtitle">Shaadi Mein Zaroor Aana _Rajkummar Rao_Kriti K_Arko ft Aakanksha Sharma</div>`,
        poster: "img/14.jpeg",
    },
    {
        id:"15",
        songName: `Kaun Tujhe Song <br>
        <div class="subtitle">Jass Inder Ft. Palak Muchal _ Dhvani Bhanushal</div>`,
        poster: "img/15.jpeg",
    },
    {
        id:"16",
        songName: `Masked Wolf <br>
        <div class="subtitle">Astronaut In The Ocean</div>`,
        poster: "img/16.jpeg",
    },
    {
        id:"17",
        songName: `Phir Bhi Tumko Chaahunga<br>
        <div class="subtitle"> Arijit Singh _ Arjun K _ Shraddha K _ Mithoon_ Manoj M(MP3_160K)</div>`,
        poster: "img/17.jpeg",
    },
    {
        id:"18", 
        songName: `Nazm Nazm<br>
        <div class="subtitle">Bareilly Ki Barfi _ Kriti Sanon_ Ayushmann Khurrana _ Rajkummar Rao </div>`,
        poster: "img/18.jpeg",
    },
    {
        id:"19",
        songName: `Thoda Thoda Pyaar _ <br>
        <div class="subtitle">Neha Sharma_Stebin Ben_Nilesh Ahuja_Kumaar_Zee Music Originals</div>`,
        poster: "img/19.jpeg",
    },
    {
        id:"20",
        songName: `Zihaal e Miskin <br>
        <div class="subtitle">Javed-Mohsin _ Vishal Mishra_ Shreya Ghoshal _ Rohit Z_ Nimrit A _ Kunaal V</div>`,
        poster: "img/20.jpeg",
    }
 ]


 Array.from(document.getElementsByClassName('songItem')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
 });


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

 masterPlay.addEventListener('click',() => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
        }
    else {
        music.pause(); 
        wave.classList.remove('active1'); 
        masterPlay.classList.add('bi-play-fill'); 
        masterPlay.classList.remove('bi-pause-fill');     
    }
 });
 const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill'); 
        el.classList.remove('bi-pause-circle-fill');
    })
 }
 const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
    el.style.background = 'rgb(105,105,105,.0)';
    })
 }

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from( document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click',(el) => {
    index = el.target.id;
    //console.log(index);
    music.src =`songs/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    download_music.href = 'audio/${index}.mp3';
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
         let { songName } = elss;
         title.innerHTML = songName;
         download_music.setAttribute('download',songName);
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105,.1)";
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill'); 
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
    });

})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
 
  if (sec1 < 10) {
    sec1 =`0${sec1}`;
    
  }
  currentEnd.innerText = `${min1}:${sec1}`;
   
  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  if (sec2 < 10) {
    sec2 =`0${sec2}`;
  }
  currentStart.innerText = `${min2}:${sec2}`;  

  
 let progressBar = parseInt((music_curr / music_dur) * 100);
 seek.Value = progressBar;
/*  console.log(seek.value); */ 
 let seekbar = seek.Value;
 bar2.style.width = `${seekbar}%`;
 dot.style.left = `${seekbar}%`;
});
seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');
vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;  
});
let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;  
    }
    music.src =`songs/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
         let { songName } = elss;
         title.innerHTML = songName;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105,.1)";
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill'); 
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
})
next.addEventListener('click', ()=>{
    index ++;
    if (index >  Array.from(document.getElementsByClassName('songItem')).length ) {
        index = 1;  
    }
    music.src =`songs/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
         let { songName } = elss;
         title.innerHTML = songName;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105,.1)";
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill'); 
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1'); 
});
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];
pop_song_right.addEventListener('click',() => {
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click',() => {
    pop_song.scrollLeft -= 330;
})
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_box = document.getElementsByClassName('Artists_box')[0];
pop_art_right.addEventListener('click',() => {
    Artists_box.scrollLeft += 330;
})
pop_art_left.addEventListener('click',() => {
    Artists_box.scrollLeft -= 330;
})

let shuffle = document.getElementsByClassName('shuffle')[0];
  
 shuffle.addEventListener('click',()=>{
    let a  = shuffle.innerHTML;

      switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
      }
 });
 music.addEventListener

