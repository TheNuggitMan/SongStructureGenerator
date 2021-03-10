//get the output area in the index file that will produce the constructed song
const output = document.getElementById('output');

//run the output function on button press in HTML index
function renewOutput() {
    output.textContent = getSongStructure();
}

function getSongStructure() {
    const elementIndices = [0,1,2,3,4,5];
    let elementOut ='';
    let elementIndex = [];

    for (i = 0; i < elementIndices.length-1; i++){
        let n = Math.ceil(Math.random()*5);
        let songElement = elementIndices[Math.floor(Math.random()*6)];

        if (elementIndex.includes(songElement)) {
                continue;
            }
            elementIndex.push(songElement)
            switch (songElement) {
                case 0:
                    elementOut += ' Intro ';
                    break;
                case 1:
                    elementOut += ` Verse(${n}) `;
                    break;
                case 2:
                    elementOut += ` Chorus(${n}) `;
                    break;
                case 3:
                    elementOut += ` Bridge(${n}) `;
                    break;
                case 4:
                    elementOut += ` Solo(${n}) `;
                    break;
                case 5:
                    elementOut += ` Outro `;
                    break;
                default:
                    elementOut += ' Work it out yourself..';
            }
            console.log(elementIndex.length, elementIndex);
        }
        if (elementIndex.length < 3){
            return getSongStructure();
        }
        return elementOut;
};
