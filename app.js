/**
 * Created by vagrant on 3/14/17.
 */

//Create our playlist instance
var playlist = new Playlist();
var hereComesTheSun = new song("Here comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine = new song("walking on Sunshine", "Katrina and the Waves", "3:43");

//Add the songs to the playlist
playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);

//Add title, artist, duration to the song constructor
// set them as properties for the song that we are creating
//Set the boolean value as false

function Song(title, artist, duration ) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.isPlaying = false;
}



Song.prototype.play = function() {
    this.isPlaying = true;

};

Song.prototype.stop = function() {
    this.isPlaying = false;

};

Song.prototype.toHTML = function() {

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

Playlist.prototype.renderInElement = function() {

};

