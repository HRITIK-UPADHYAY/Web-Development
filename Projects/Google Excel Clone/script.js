//****** elements components. *********
const tHead = document.getElementById("table-heading");
const tBody = document.getElementById("table-body");
const currentCellHeading = document.getElementById("current-cell");
const sheetNo = document.getElementById("sheet-no");
const btnContainaer = document.getElementById("btn-container");

//******* excel buttons. *********
const boldBtn = document.getElementById("bold-btn");
const italicBtn = document.getElementById("italic-btn");
const underlineBtn = document.getElementById("underline-btn");
const leftBtn = document.getElementById("left-btn");
const centerBtn = document.getElementById("center-btn");
const rightBtn = document.getElementById("right-btn");
const cutBtn = document.getElementById("cut-btn");
const copyBtn = document.getElementById("copy-btn");
const pasteBtn = document.getElementById("paste-btn");
const uploadInput = document.getElementById("upload-input");
const addSheetBtn = document.getElementById("add-sheet-btn");

//*******   excel dropdowns. *******
const fontFamilyDropdown = document.getElementById("font-style-dropdown");
const fontSizeDropdown = document.getElementById("font-size-dropdown");

//*******  excel colors buttons.  *******
const bgColorSelector = document.getElementById("bgColor");
const fontColorSelector = document.getElementById("fontColor");

//*******  variable to save cell.  *******
let prevCell;  //store the previous cell id.
let currCell;  //store the current cell id.
let cutCell;   //store the cell id which content i will cut.
let lastPressedBtn;  //store the last button(either cut,copy) using for pasting method.
let noSheets = 1;
let currentSheet = 1;
let prevSheet;
let prevAlignBtn;

//create a 2d array for storing the excell data for download.
let matrix = new Array(100);
createNewMatrix();

function createNewMatrix() {
    for(let row=0; row<100; row++) {
        matrix[row] = new Array(26);
        for(let col=0; col<26; col++) {
            matrix[row][col] = {};
        }
    }
}


//if anything store in localStorage then render into UI.
if(localStorage.getItem('arrMatrix')) {
    for(let i=1; i<JSON.parse(localStorage.getItem('arrMatrix')).length; i++) {
        addNextSheet(true);
    } 

    matrix = JSON.parse(localStorage.getItem('arrMatrix'))[0];
    // renderMatrix();
}

//create a table like structure for excel sheet.
function colGenerator(typeOfcell, appendingType, isInnerText, rowNo) {
   for(let i=1; i<=26; i++) {
        const cell = document.createElement(typeOfcell);
        if(isInnerText) {
            cell.innerText = String.fromCharCode(i+64);
            cell.setAttribute('id', String.fromCharCode(i+64)) //set id to every typeOfCell tag.
        }
        else {
            cell.setAttribute('id', `${String.fromCharCode(i+64)}${rowNo}`);
            cell.setAttribute('contenteditable', 'true');
            cell.addEventListener('focusout', updateObjectInMatrix);
            cell.addEventListener('focus', event => onFocusFunction(event.target))
        }
        appendingType.appendChild(cell);
   }
}
colGenerator("th", tHead, true); 

function tableBodyGeneration() {
    tBody.innerHTML = '';
    for(let i=1; i<=100; i++) {
        const tr = document.createElement("tr");

        const th = document.createElement("th");
        th.className = "sno";
        th.innerText = i;
        th.setAttribute('id', i);  //set id to every th tag.

        tr.appendChild(th);
        colGenerator("td", tr, false, i); //append 26 unique TDs in every row.
        tBody.appendChild(tr);
    }
}
tableBodyGeneration();

//if an cell is rewritten so we store that rewritten data into matrix array for downloading.
function updateObjectInMatrix() {
    let id = currCell.id;
    let tempObj = {
        id: id,
        text: currCell.innerText,
        style: currCell.style.cssText
    }

    //update the cell into matrix.
    // let cell adress is "A1"(colRow) => col -> 'A' and row -> 1; 
    //matrix address will be no. so convert them into no.
    //ascii(A) -> no and row -> row - 1 (index is starting with 0 in array).
    let col = id[0].charCodeAt(0) - 65;    //fetch its address into matrix by row and coloumn.
    let row = id.substr(1) - 1;
    matrix[row][col] = tempObj;
}


//when we focus on a cell then it will change the background of colour in which coloum or row im present.
function onFocusFunction(cell) {
    currCell = cell;

    if(prevCell) {
        prevCell.style.border = '1px solid #dadce0';
        changeCellColor(prevCell, 'transparent');
    }

    currCell.style.border = '0.2rem solid blue';
    currentCellHeading.innerText = `${cell.id}`;
    changeCellColor(cell, '#cfe0fb');

    // if our current cell is already bold,italic,underline or not. 
    btnHighlighter(currCell, boldBtn, 'fontWeight', 'bold');
    btnHighlighter(currCell, italicBtn, 'fontStyle', 'italic');
    btnHighlighter(currCell, underlineBtn, 'textDecoration', 'underline');
    btnHighlighter(currCell, leftBtn, 'textAlign', 'left');
    btnHighlighter(currCell, centerBtn, 'textAlign', 'center');
    btnHighlighter(currCell, rightBtn, 'textAlign', 'right');

    prevCell = cell;
}

function changeCellColor(cell, color) {
    const colHead = document.getElementById(cell.id[0]);
    const rowHead = document.getElementById(cell.id.substring(1));

    colHead.style.backgroundColor = color;
    rowHead.style.backgroundColor = color;
}

function btnHighlighter(currCell, button, styleProperty, styleValue) {
    if(currCell.style[styleProperty] === styleValue) {
        button.style.backgroundColor = '#cfe0fb';
    }
    else button.style.backgroundColor = 'transparent';
}


// addEventListener to the bold, italic and underline buttons. 
boldBtn.addEventListener('click', () => btnClickHandler(currCell, boldBtn, 'fontWeight', 'bold', 'normal'));
italicBtn.addEventListener('click', () => btnClickHandler(currCell, italicBtn, 'fontStyle', 'italic', 'normal'));
underlineBtn.addEventListener('click', () => btnClickHandler(currCell, underlineBtn, 'textDecoration', 'underline', 'none'));

function btnClickHandler(currCell, button, styleProperty, styleValue, toggleStyle) {
    if(currCell.style[styleProperty] === styleValue) {
        currCell.style[styleProperty] = toggleStyle;
        button.style.backgroundColor = 'transparent';
    }
    else {
        currCell.style[styleProperty] = styleValue;
        button.style.backgroundColor = '#cfe0fb';
    }

    updateObjectInMatrix();
}

// addEventListener to the left, center and right buttons.
leftBtn.addEventListener('click', (event) => { alignmentChange(currCell, leftBtn, 'left'); });
centerBtn.addEventListener('click', (event) => { alignmentChange(currCell, centerBtn, 'center'); });
rightBtn.addEventListener('click', (event) => { alignmentChange(currCell, rightBtn, 'right'); });

function alignmentChange(currCell, button, textAlignValue){
    if(prevAlignBtn) {
        prevAlignBtn.style.backgroundColor = 'transparent';
    }

    currCell.style.textAlign = textAlignValue;
    button.style.backgroundColor = '#cfe0fb';
    updateObjectInMatrix();

    prevAlignBtn = button;
}

// addEventListener to the fontFamilyDropdown, fontSizeDropdown buttons.
fontFamilyDropdown.addEventListener('change', () => {
    currCell.style.fontFamily = fontFamilyDropdown.value;
    updateObjectInMatrix();
})

fontSizeDropdown.addEventListener('change', () => {
    currCell.style.fontSize = fontSizeDropdown.value
    updateObjectInMatrix();
})

//color inputs. 
//input evnet has more better user experience and but input is very heavy event listener.
bgColorSelector.addEventListener('input', () => {
    currCell.style.backgroundColor = bgColorSelector.value;
    updateObjectInMatrix();
})

fontColorSelector.addEventListener('change', () => {
    currCell.style.color = fontColorSelector.value;
    updateObjectInMatrix();
})

//add eventlistener to cut copy and paste button.
cutBtn.addEventListener('click', () => {
    cutCell = {
        text: currCell.innerText,
        style: currCell.style.cssText,
    };

    currCell.innerText = '';
    currCell.style.cssText = '';

    lastPressedBtn = 'cut';

    updateObjectInMatrix();

    //style -> it is an object which stores all the property in an object.
    //cssText -> property of style object which saves my style properties in text {short form of style}.
})

copyBtn.addEventListener('click', () => {
    cutCell = {
        text: currCell.innerText,
        style: currCell.style.cssText,
    };

    lastPressedBtn = 'copy';
})

pasteBtn.addEventListener('click', () => {
    currCell.innerText = cutCell.text;
    currCell.style = cutCell.style;
    //you can pass cssText to style.

    if(lastPressedBtn === 'cut') {
        cutCell = undefined;
    }

    updateObjectInMatrix();
})

//download and upload of a matrix.
function downloadMatrix() {
    const matrixString = JSON.stringify(matrix);
    
    //memory out of my matrixString.
    const blob = new Blob([matrixString],{type: 'application/json'});

    //i have my memory which is formed out of matrixString.
    const link = document.createElement('a');

    // convert my blob to link href(URL). 
    link.href = URL.createObjectURL(blob);
    link.download = 'table.json';

    link.click();
}

uploadInput.addEventListener('input', uploadMatrix);
function uploadMatrix(event) {
    const file = event.target.files[0];
    if(file) {
        const fileReader = new FileReader();
        fileReader.readAsText(file);
        console.log("hii");
        fileReader.onload = function(event) {
           const fileContent =JSON.parse(event.target.result);
           matrix = fileContent;
           renderMatrix(); 
        }

        //fileReader is inbuild instance of my FileReaderClass.
    }
}


// add sheet logic 
//  -> save my matrix data somewhere -> localStorage.
//  -> array of matrix to store the matrix.
//  -> cleanup matrix. 
//  -> cleanup table. 
//  -> update current sheet no. 
//  -> update total no of Sheets. 
//  -> create button for new sheet.
addSheetBtn.addEventListener('click', () => {
    addNextSheet(false);

    saveMatrix();  //save the matrix in localStorage.
    createNewMatrix(); //create a new matrix(sheet).
    tableBodyGeneration(); //append the new matrix(sheet) to the table Body.
})

function addNextSheet(firstRender) {
    const btn = document.createElement("button");
    noSheets++;

    if(firstRender) {
        prevSheet = currentSheet;
        currentSheet = noSheets;
    }

    btn.innerText = `sheet${noSheets}`;
    btn.style.backgroundColor = '#c2e7ff'
    btn.setAttribute('id', `sheet-${noSheets}`);
    btn.setAttribute('onclick', 'viewSheet(event)');
    btnContainaer.appendChild(btn);
}

function saveMatrix() {
    if(localStorage.getItem('arrMatrix')) {
        let tempMatrixArr = JSON.parse(localStorage.getItem('arrMatrix'));
        tempMatrixArr.push(matrix);
        localStorage.setItem('arrMatrix', JSON.stringify(tempMatrixArr));
    }
    else {
        let tempMatrixArr = [matrix];
        localStorage.setItem('arrMatrix', JSON.stringify(tempMatrixArr));
    }
    
}

function viewSheet(event) {
    prevSheet = currentSheet;
    currentSheet = event.target.id.split('-')[1];
    let matrixArr = JSON.parse(localStorage.getItem('arrMatrix'));
    
    matrixArr[prevSheet-1] = matrix;
    localStorage.setItem('arrMatrix', JSON.stringify(matrixArr));

    matrix = matrixArr[currentSheet-1];
    tableBodyGeneration();
    renderMatrix();
}

function renderMatrix() {
    console.log(matrix);
    matrix.forEach(row => {
        row.forEach(cellObj => {
            if(cellObj.id) {
                let currentCell = document.getElementById(cellObj.id);
                currentCell.innerText = cellObj.text;
                currCell.style = cellObj.style;
            }
        })
    })
}

