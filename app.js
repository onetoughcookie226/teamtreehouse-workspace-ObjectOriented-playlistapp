/**
 * Created by vagrant on 3/14/17.
 */

//Create our playlist instance
var playlist = new Playlist();

var hereComesTheSun = new Song("Here comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine = new Song("walking on Sunshine", "Katrina and the Waves", "3:43");

//Add the songs to the playlist
playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);

var playlistElement = document.getElementById("playlist");
playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function () {
    playlist.play();
    playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById("next");
playButton.onclick = function () {
    playlist.next();
    playlist.renderInElement(playlistElement);
}


var stopButton = document.getElementById("stop")
playButton.onclick = function () {
    playlist.stop();
    playlist.renderInElement(playlistElement);
}

//Add title, artist, duration to the song constructor
// set them as properties for the song that we are creating
//Set the boolean value as false

function Song(title, artist, duration ) {
    // var song = this;
    Media.call(this, title, duration);
    this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);



Song.prototype.toHTML = function() {
    var htmlString = '<li'
    if(this.isPlaying){
         htmlString += ' class="current"';
    }
    htmlString += '>';
    htmlString += this.title;
    htmlString += ' - ';
    htmlString += this.artist;
    htmlString += '<span class="duration">'
    htmlString += this.duration;
    htmlString += '</span></li>';
    return htmlString;

};

// function for playlist methods
// Create an empty array of songs
//Set the index of the initial song to be 0
function Playlist() {
    this.songs = [];
    this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
    this.songs.push(song);
};

Playlist.prototype.play = function() {
    //access the currentSong from the array pass in the nowPlayingIndex
    var currentSong = this.songs[this.nowPlayingIndex];
    currentSong.play();
};

Playlist.prototype.stop = function(){
    var currentSong = this.songs[this.nowPlayingIndex];
    currentSong.stop();
};

Playlist.prototype.next = function() {
    this.stop();
    //Increase the nowPlayningIndex by 1
    if (this.nowPlayingIndex === this.songs.length){
    //set it back to Zero
        this.nowPlayingIndex =0;
    }

    this.play();
};

//method to display the song on the page

Playlist.prototype.renderInElement = function(list) {
    list.innerHTML = " ";
    //If the  i is less than the songs length
    for (var i = 0; i < this.songs.length; i++){
        list.innerHTML += this.songs[i].toHTML();
    }

};

