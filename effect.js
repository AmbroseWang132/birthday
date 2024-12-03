$('#play').click(function() {
    var audio = $('.song')[0]; // Select the audio element
    audio.play(); // Play the audio
    $(this).hide(); // Hide the button
});
