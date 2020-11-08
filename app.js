const textInput = document.querySelector('.textIn');
const nameUL = document.querySelector('.name');
const addName = document.querySelector('.icon1');
const oneRandom = document.querySelector('.by-1');
const twoTeams = document.querySelector('.by-2');
const threeTeams = document.querySelector('.by-3');
const fourTeams = document.querySelector('.by-4');
const fiveTeams = document.querySelector('.by-5');
const sevenTeams = document.querySelector('.by-7');
const div3 = document.querySelector('.container3');

let arrayNames = [];

const addNameToList = (event) => {
    event.preventDefault();
    // let targ = event.target;
    if (textInput.value != "") {
    arrayNames.push(textInput.value);
    //create div 
    let newDiv = document.createElement('div');
    newDiv.classList.add('new-div');
    nameUL.appendChild(newDiv);
    //create li
    let newName = document.createElement('li');
    newName.classList.add('new-name');
    newName.innerText = textInput.value;
    newDiv.appendChild(newName);
    //create delete button
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = `<i class="fas fa-minus-circle"></i>`;
    newDiv.appendChild(deleteButton);

    textInput.value = "";
    }
}


const deleteList = (event) => {
    const targ = event.target;
    if (targ.classList[0] === "delete-button"){
        const nameDiv = targ.parentElement;
        nameDiv.remove();
    }

    for(let i=0; i < arrayNames.length; i++) {
        const nameDiv = targ.parentElement;
        if(arrayNames[i] === nameDiv.childNodes[0].innerText) {
            arrayNames.splice(i,1);
        }
    }
}

const byOneRandom = (event) => {
    event.preventDefault();
    div3.innerHTML = "";

    let randomName = arrayNames[Math.floor(Math.random() * arrayNames.length)];
    
    let newDiv = document.createElement('div');
    newDiv.classList.add('lucky-one');
    div3.appendChild(newDiv);

    let winner = document.createElement('h1');
    winner.classList.add('winnerby-1');
    winner.innerText = randomName;
    newDiv.appendChild(winner);
}

const byTwoRandom = (event) => {
    event.preventDefault();
    div3.innerHTML = "";

    let totalNum =  Math.ceil((arrayNames.length)/2);

    let newArray = arrayNames;
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    let x=0
    for (let i=0; i < totalNum; i++) {
        let teamDiv = document.createElement('div');
        teamDiv.classList.add('team2');
        div3.appendChild(teamDiv);

        
        let name1 = document.createElement('h5');
        name1.innerText = newArray[x];
        teamDiv.appendChild(name1);

        let name2 = document.createElement('h5');
        name2.innerText = newArray[x+1];
        teamDiv.appendChild(name2);

        x+=2;
    }
}


const byThreeRandom = (event) => {
    event.preventDefault();
    div3.innerHTML = "";

    let totalNum =  Math.ceil((arrayNames.length)/3);

    let newArray = arrayNames;
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    let x = 0;
   
    for (let i=0; i < totalNum; i++) {
        let teamDiv = document.createElement('div');
        teamDiv.classList.add('team2');
        div3.appendChild(teamDiv);

        let name1 = document.createElement('h5');
        name1.innerText = newArray[x];
        teamDiv.appendChild(name1);
        
        let name2 = document.createElement('h5');
        name2.innerText = newArray[x+1];
        teamDiv.appendChild(name2);

        let name3 = document.createElement('h5');
        name3.innerText = newArray[x+2];
        teamDiv.appendChild(name3);

        x+=3;
        
    }
}

const byFourRandom = (event) => {
    event.preventDefault();
    div3.innerHTML = "";

    let totalNum =  Math.ceil((arrayNames.length)/4);

    let newArray = arrayNames;
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    let x = 0;
   
    for (let i=0; i < totalNum; i++) {
        let teamDiv = document.createElement('div');
        teamDiv.classList.add('team2');
        div3.appendChild(teamDiv);

        let name1 = document.createElement('h5');
        name1.innerText = newArray[x];
        teamDiv.appendChild(name1);
        
        let name2 = document.createElement('h5');
        name2.innerText = newArray[x+1];
        teamDiv.appendChild(name2);

        let name3 = document.createElement('h5');
        name3.innerText = newArray[x+2];
        teamDiv.appendChild(name3);

        let name4 = document.createElement('h5');
        name4.innerText = newArray[x+3];
        teamDiv.appendChild(name4);

        x+=4;
        
    }
}

const byFiveRandom = (event) => {
    event.preventDefault();
    div3.innerHTML = "";

    let totalNum =  Math.ceil((arrayNames.length)/5);

    let newArray = arrayNames;
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    let x = 0;
   
    for (let i=0; i < totalNum; i++) {
        let teamDiv = document.createElement('div');
        teamDiv.classList.add('team2');
        div3.appendChild(teamDiv);

        let name1 = document.createElement('h5');
        name1.innerText = newArray[x];
        teamDiv.appendChild(name1);
        
        let name2 = document.createElement('h5');
        name2.innerText = newArray[x+1];
        teamDiv.appendChild(name2);

        let name3 = document.createElement('h5');
        name3.innerText = newArray[x+2];
        teamDiv.appendChild(name3);

        let name4 = document.createElement('h5');
        name4.innerText = newArray[x+3];
        teamDiv.appendChild(name4);

        let name5 = document.createElement('h5');
        name5.innerText = newArray[x+4];
        teamDiv.appendChild(name5);

        x+=5;
        
    }
}

const bySevenRandom = (event) => {
    event.preventDefault();
    div3.innerHTML = "";

    let totalNum =  Math.ceil((arrayNames.length)/7);

    let newArray = arrayNames;
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    let x = 0;
   
    for (let i=0; i < totalNum; i++) {
        let teamDiv = document.createElement('div');
        teamDiv.classList.add('team2');
        div3.appendChild(teamDiv);

        let name1 = document.createElement('h5');
        name1.innerText = newArray[x];
        teamDiv.appendChild(name1);
        
        let name2 = document.createElement('h5');
        name2.innerText = newArray[x+1];
        teamDiv.appendChild(name2);

        let name3 = document.createElement('h5');
        name3.innerText = newArray[x+2];
        teamDiv.appendChild(name3);

        let name4 = document.createElement('h5');
        name4.innerText = newArray[x+3];
        teamDiv.appendChild(name4);

        let name5 = document.createElement('h5');
        name5.innerText = newArray[x+4];
        teamDiv.appendChild(name5);

        let name6 = document.createElement('h5');
        name6.innerText = newArray[x+5];
        teamDiv.appendChild(name6);

        let name7 = document.createElement('h5');
        name7.innerText = newArray[x+6];
        teamDiv.appendChild(name7);

        x+=7;
    }
}

nameUL.addEventListener('click', deleteList);
addName.addEventListener('click', addNameToList);
oneRandom.addEventListener('click', byOneRandom);
twoTeams.addEventListener('click', byTwoRandom);
threeTeams.addEventListener('click', byThreeRandom);
fourTeams.addEventListener('click', byFourRandom);
fiveTeams.addEventListener('click', byFiveRandom);
sevenTeams.addEventListener('click', bySevenRandom);

