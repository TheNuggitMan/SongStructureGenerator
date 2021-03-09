//get the output area in the index file that will produce the constructed song
const output = document.getElementById('output');

//run the output function on button press in HTML index
function renewOutput() {
    output.textContent = getSongStructure();
}

function getSongStructure() {
    return 'Testing --- Chorus(1), Verse(2), Outro';
}
