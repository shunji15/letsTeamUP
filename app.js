const textInput = document.querySelector('.textIn');
const nameUL = document.querySelector('.name');
const addName = document.querySelector('.icon1');
const oneRandom = document.querySelector('.by-1');
const twoTeams = document.querySelector('.by-2');
const threeTeams = document.querySelector('.by-3');
const fourTeams = document.querySelector('.by-4');
const fiveTeams = document.querySelector('.by-5');
const customBtn = document.querySelector('.custom');
const customInput = document.querySelector('.teamUpNum');
const div3 = document.querySelector('.container3');


const arrayNames = [];


const addNameToList = (event) => {
        event.preventDefault();
        
        // let targ = event.target;
        if (textInput.value != "") {
        arrayNames.push(textInput.value);

        nameUL.innerHTML += `
            <div class="new-div">
                <li class="new-name">
                ${textInput.value}
                </li>
                <button class="delete-button">
                    <i class="fas fa-minus-circle"></i>
                </button>
            </div>
        `;

        textInput.value = "";
        }
}



const deleteList = (event) => {
        const targ = event.target;
        if (targ.classList[0] === "delete-button"){
            const nameDiv = targ.parentElement;
            nameDiv.remove();

            const str = nameDiv.children[0].innerText.trim();
            const num = arrayNames.indexOf(str);
            arrayNames.splice(num,1);
        }

        

        // for(let i=0; i < arrayNames.length; i++) {
        //     const nameDiv = targ.parentElement;
        //     if(arrayNames[i] === nameDiv.childNodes[0].innerText) {
        //         arrayNames.splice(i,1);
        //     }
        // }

        console.log(arrayNames);
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


const randomizeArray = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
}

const createTeamDiv = (str, num) => {
    let teamDiv = document.createElement('div');
    teamDiv.classList.add(str);
    div3.appendChild(teamDiv);
    
    // add team number
    let teamNum = document.createElement('p');
    teamNum.innerText = `TEAM ${num}`;
    teamNum.classList.add('teamNumber');
    teamDiv.appendChild(teamNum);
    
    return teamDiv;
}

const addNameToDiv = (arr, index, div) => {
    if(arr[index] === null || arr[index] === undefined) {
        let name = document.createElement('h5');
        name.innerText = "";
        div.appendChild(name);
    } else {
        let name = document.createElement('h5');
        name.innerText = arr[index];
        div.appendChild(name);
    }
    
}


const byTwoRandom = (event) => {
        event.preventDefault();
        div3.innerHTML = "";

        let newArray =  randomizeArray(arrayNames);
        
        let x=0;
        let num = 1;
        while(x<newArray.length) {
            let teamDiv = createTeamDiv('team2', num);
            
            addNameToDiv(newArray, x, teamDiv);
            addNameToDiv(newArray, x+1, teamDiv);

            num++;
            x+=2;
        }

}


const byThreeRandom = (event) => {
    event.preventDefault();
    div3.innerHTML = "";

    let newArray = randomizeArray(arrayNames);
   
    let x=0;
    let num=1;
        while(x<newArray.length) {
            let teamDiv = createTeamDiv('team2',num);
            
            addNameToDiv(newArray, x, teamDiv);
            addNameToDiv(newArray, x+1, teamDiv);
            addNameToDiv(newArray, x+2, teamDiv);

            num++;
            x+=3;
        }

}

const byFourRandom = (event) => {
    event.preventDefault();
    div3.innerHTML = "";

    let newArray = randomizeArray(arrayNames);
   
    let x=0;
    let num=1;
        while(x<newArray.length) {
            let teamDiv = createTeamDiv('team2', num);
            
            addNameToDiv(newArray, x, teamDiv);
            addNameToDiv(newArray, x+1, teamDiv);
            addNameToDiv(newArray, x+2, teamDiv);
            addNameToDiv(newArray, x+3, teamDiv);

            num++;
            x+=4;
        }
}

const byFiveRandom = (event) => {
    event.preventDefault();
    div3.innerHTML = "";

    let newArray = randomizeArray(arrayNames);
   
    let x=0;
    let num=1;
        while(x<newArray.length) {
            let teamDiv = createTeamDiv('team2',num);
            
            addNameToDiv(newArray, x, teamDiv);
            addNameToDiv(newArray, x+1, teamDiv);
            addNameToDiv(newArray, x+2, teamDiv);
            addNameToDiv(newArray, x+3, teamDiv);
            addNameToDiv(newArray, x+4, teamDiv);

            num++;
            x+=5;
        }
}



const byCustomRandom = (event) => {
    event.preventDefault();
    div3.innerHTML = "";


    customNum = parseInt(customInput.value);   
    
    let newArray = randomizeArray(arrayNames);

    let x=0;
    let num=1;
    while(x<newArray.length) {
        let teamDiv = createTeamDiv('team2', num);
    
        for(i=x; i<=x+customNum-1; i++) {
            addNameToDiv(newArray, i, teamDiv)
        };

        num++;
        x+=customNum;
    }

}

nameUL.addEventListener('click', deleteList);
addName.addEventListener('click', addNameToList);
oneRandom.addEventListener('click', byOneRandom);
twoTeams.addEventListener('click', byTwoRandom);
threeTeams.addEventListener('click', byThreeRandom);
fourTeams.addEventListener('click', byFourRandom);
fiveTeams.addEventListener('click', byFiveRandom);
customBtn.addEventListener('click', byCustomRandom);


