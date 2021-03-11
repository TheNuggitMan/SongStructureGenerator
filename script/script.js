//get the output area in the index file that will produce the constructed song
const output = document.getElementById('structureOutput');
let u = document.getElementById('instanceInput');
let elInput = document.getElementById('elementInput');

// lets user reset the input to nothing allowing random choices again.
const resetInput = (u) => {
    if(u.value){
        return u.value = '';
    }
    if(elInput.value){
        return elInput.value = '';
    }
};

//run the output function on button
function renewOutput(u) {
    if(elInput.value > 6){
        return alert(`You entered ${elInput.value}, please choose between 0 - 6`);
    }
    let b = elInput.value;
    let n = u.value;
    return getSongStructure(n, b);
};

// if no user input then a random number gets assigned as u - to become n.
function getSongStructure(n, b) {
    // used for the loop length and to retrieve a random number index in the loop
    const elementIndices = [0,1,2,3,4,5];

    // sets an array of 6 empty elements to be spliced into at a given position later.
    let elementOut = [ , , , , , ];

    // will be used to store each instance of the loop,
    // then be used to test a condition with .includes,
    // then the length after the fact will be tested against to either output or restart the loop
    let elementIndex = [];

        for (i = 0; i < elementIndices.length; i++){
            let v = n;
            if (v === '' || v === undefined){
            v = Math.ceil(Math.random()*5);
        }
            let songElement = elementIndices[Math.floor(Math.random()*6)];

            // test if an iteration output has already passed to avoid duplicate outputs. If true, continue past that iteration.
            if (elementIndex.includes(songElement)) {
                    continue;
                }

                elementIndex.push(songElement)
                switch (songElement) {
                    case 0:
                        elementOut.splice(0, 1, 'Intro');
                        break;
                    case 1:
                        elementOut.splice(1, 1, `Verse(${v})`);
                        break;
                    case 2:
                        elementOut.splice(2, 1, `Chorus(${v})`);
                        break;
                    case 3:
                        elementOut.splice(3, 1, `Bridge(${v})`);
                        break;
                    case 4:
                        elementOut.splice(4, 1, `Solo(${v})`);
                        break;
                    case 5:
                        elementOut.splice(5, 1, `Outro`);
                        break;
                    default:
                        elementOut.push('Work it out yourself..');
                }
            }

        if(b){
            // if user input, then test legnth of output against input.
            if (elementIndex.length == b){
                output.innerHTML = '<p>'+ elementOut.join(' ') + '</p>';
            } else {
                return getSongStructure(n,b);
        }
    } if(!b) {
        // if no user input and output is less that 3, restart the whole loop again
        if (elementIndex.length < 3){
            return getSongStructure(n,b);
        } output.innerHTML = '<p>'+ elementOut.join(' ') + '</p>';
    }
};
