const songs = [
  {
    title: "Adaptation",
    file: "songs/Adaptation.mp3",
    duration: "04:43",
    cover: "covers/Adaptation.jpg",
  },
  {
    title: "Blinding Lights",
    file: "songs/BlindingLights.mp3",
    duration: "03:20",
    cover: "covers/BlindingLights.jpg",
  },
  {
    title: "Call Out My Name",
    file: "songs/CallOutMyName.mp3",
    duration: "03:48",
    cover: "covers/CallOutMyName.jpg",
  },
  {
    title: "Is There Someone Else",
    file: "songs/IsThereSomeoneElse.mp3",
    duration: "03:19",
    cover: "covers/IsThereSomeoneElse.jpg",
  },
  {
    title: "Montreal",
    file: "songs/Montreal.mp3",
    duration: "04:10",
    cover: "covers/Montreal.jpg",
  },
  {
    title: "Professional",
    file: "songs/Professional.mp3",
    duration: "06:08",
    cover: "covers/Professional.jpg",
  },
  {
    title: "Rolling Stone",
    file: "songs/RollingStone.mp3",
    duration: "03:50",
    cover: "covers/RollingStone.png",
  },
  {
    title: "Starboy",
    file: "songs/Starboy.mp3",
    duration: "03:49",
    cover: "covers/Starboy.png",
  },
  {
    title: "The Town",
    file: "songs/TheTown.mp3",
    duration: "05:07",
    cover: "covers/TheTown.jpg",
  },
  {
    title: "Wicked Games",
    file: "songs/WickedGames.mp3",
    duration: "05:25",
    cover: "covers/WickedGames.jpg",
  },
];

const songList = document.getElementById("songList");
const playPauseBtn = document.getElementById("playPause");
const progress = document.getElementById("progress");
const currentSongLabel = document.getElementById("current-song");

let audio = new Audio();
let currentSongIndex = 0;
let isPlaying = false;

// Load all songs into page
songs.forEach((song, index) => {
  const songItem = document.createElement("div");
  songItem.classList.add("song-item");
  songItem.innerHTML = `
        <img src="${song.cover}" alt="Cover">
        <span>${song.title}</span>
        <span>${song.duration}</span>
    `;
  songItem.addEventListener("click", () => playSong(index));
  songList.appendChild(songItem);
});

function playSong(index) {
  currentSongIndex = index;
  audio.src = songs[index].file;
  audio.play();
  isPlaying = true;
  playPauseBtn.src = "pause-icon.png"; // Change to pause icon
  currentSongLabel.innerText = songs[index].title;
}

playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playPauseBtn.src = "play-icon.png"; // Change to play icon
  } else {
    audio.play();
    isPlaying = true;
    playPauseBtn.src = "pause-icon.png"; // Change to pause icon
  }
});

// Update progress bar
audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

// Seek when user moves progress bar
progress.addEventListener("input", () => {
  audio.currentTime = (progress.value * audio.duration) / 100;
});

// Play next song automatically
audio.addEventListener("ended", () => {
  currentSongIndex++;
  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0;
  }
  playSong(currentSongIndex);
});


// Commit on Sun Apr 02 11:20:48 2023: Add audio player controls

// Commit on Sun Apr 02 14:17:35 2023: Implement play/pause functionality

// Commit on Mon Apr 03 09:11:57 2023: Load songs dynamically with JavaScript

// Commit on Mon Apr 03 11:48:10 2023: Attach event listeners to song items

// Commit on Mon Apr 03 14:35:42 2023: Add play/pause toggle from song list

// Commit on Mon Apr 03 17:02:28 2023: Fix bug with song switching

// Commit on Tue Apr 04 10:25:33 2023: Implement progress bar for current song

// Commit on Tue Apr 04 12:49:09 2023: Add seek functionality to progress bar

// Commit on Tue Apr 04 15:30:51 2023: Update UI when song ends

// Commit on Wed Apr 05 09:59:02 2023: Play next song automatically on song end