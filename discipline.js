// Global var for folder where all discipline pages are held
// and vars for each discipline page
var folder = "Disciplines/";
var aero = "aerospace.html";
var biom = "biomedical.html";
var bios = "biosystems.html";
var chem = "chemical.html";
var civil = "civil.html";
var compe = "compe.html";
var cs = "cs.html";
var elec = "electrical.html";
var mat = "materials.html";
var mech = "mechanical";
var mine = "mining.html";
var tech = "technology.html";
var dictGlobal = [aero, biom, bios, chem, civil, compe, cs, elec, tech, mat, mech, mine];

// Values for deciding discipline
var aeroVal = 0;
var biomVal = 0;
var biosVal = 0;
var chemVal = 0;
var civilVal = 0;
var compeVal = 0;
var csVal = 0;
var elecVal = 0;
var matVal = 0;
var mechVal = 0;
var mineVal = 0;
var techVal = 0;
var totPoints = 0;

// Objects for creating sorted lists
/*
const aeroOBJ ={id:"Aerospace Engineering", url="aerospace.html"};
const biomOBJ ={id:"Biomedical Engineering", url="biomedical.html"};
const biosOBJ ={id:"Biosystems Engineering", url="biosystems.html"};
const chemOBJ ={id:"Chemical Engineering", url="chemical.html"};
const civilOBJ ={id:"Civil Engineering", url="civil.html"};
const compeOBJ ={id:"Computer Engineering", url="compe.html"};
const csOBJ ={id:"Computer Science", url="cs.html"};
const elecOBJ ={id:"Electrical Engineering", url="electrical.html"};
const matOBJ ={id:"Materials Engineering", url="materials.html"};
const mechOBJ ={id:"Mechanical Engineering", url="mechanical.html"};
const mineOBJ ={id:"Mining Engineering", url="mining.html"};
const techOBJ ={id:"Technology Engineering", url="technology.html"};
const dictGlobalOBJ = [aeroOBJ, biomOBJ, biosOBJ, chemOBJ, civilOBJ, compeOBJ, csOBJ, elecOBJ, techOBJ, matOBJ, mechOBJ, mineOBJ];
*/

function question1(){
    var q1 = document.getElementsByName('Q1');
    
    // Get the value q1
    for(i = 0; i < q1.length; i++){
        if(q1[i].checked){
            var a1 = q1[i].value;
        }
    }

    // Assign values for a2
    if(a1 == 1){
        aeroVal+=2;
        techVal++;
        matVal++;
        totPoints+=4;
    }
    else if(a1 == 2){
        biosVal+=2;
        biomVal++;
        chemVal++;
        totPoints+=4;
    }
    else if(a1 == 3){
        civilVal+=2;
        mechVal++;
        mineVal++;
        totPoints+=4;
    }
    else{
        csVal+=2;
        compeVal++;
        elecVal++;
        totPoints+=4;
    }

    // Go to the next question
    var link = "q2.html";
    var submit = document.getElementById('submit');
    submit.href = link;

}

function question2(){
    var q2 = document.getElementsByName('Q2');

    // Get the value q2
    for(i = 0; i < q2.length; i++){
        if(q2[i].checked){
            var a2 = q2[i].value;
        }
    }

    // Assign values for a2
    if(a2 == 1){
        biosVal+=2;
        elecVal++;
        totPoints+=3;
        
    }
    else if(a2 == 2){
        compeVal+=2;
        csVal++;
        matVal++;
        totPoints+=4;
    }
    else if(a2 == 3){
        techVal+=2;
        totPoints+=2;
    }
    else{
        aeroVal+=2;
        mechVal++;
        totPoints+=3;
    }

    // Go to the next question
    var link = "q3.html";
    var submit = document.getElementById('submit');
    submit.href = link;

}

function question3(){
    var q3 = document.getElementsByName('Q3');

    // Get the value q3
    for(i = 0; i < q3.length; i++){
        if(q3[i].checked){
            var a3 = q3[i].value;
        }
    }

    // Assign values for a3
    if(a3 == 1){
        biomVal+=2;
        totPoints+=2;
    }
    else if(a3 == 2){
        chemVal+=2;
        totPoints+=2;
    }
    else{
        civilVal+=2;
        mineVal++;
        totPoints+=3;
    }

    // Go to the next question
    var link = "q4.html";
    var submit = document.getElementById('submit');
    submit.href = link;
}

function question4(){
    var q4 = document.getElementsByName('Q4');

        // Get the value q3
        for(i = 0; i < q4.length; i++){
            if(q4[i].checked){
                var a4 = q4[i].value;
            }
        }
    
        // Assign values for a4
        if(a4 == 1){
            csVal+=2;
            compeVal++;
            techVal++;
            totPoints+=4;
        }
        else if(a4 == 2){
            elecVal+=2;
            aeroVal++;
            totPoints+=3;
        }
        else if(a4 == 3){
            matVal+=2;
            chemVal++;
            biomVal++;
            biosVal++;
            totPoints+=5;
        }
        else{
            mineVal+=2;
            mechVal++;
            civilVal++;
            totPoints+=4;
        }

        // Go to the next question
        var link = "q5.html";
        var submit = document.getElementById('submit');
        submit.href = link;
}

function question5(){
    var q5 = document.getElementsByName('Q5');

    // Get the value q5
    for(i = 0; i < q5.length; i++){
        if(q5[i].checked){
            var a5 = q5[i].value;
        }
    }

    // Assign values for a5
    if(a5 == 1){
        aeroVal+=2;
        compeVal++;
        csVal++;
        totPoints+=4;
    }
    else if(a5 == 2){
        biomVal+=2;
        elecVal++;
        techVal++;
        totPoints+=4;
    }
    else if(a5 == 3){
        chemVal+=2;
        biosVal++;
        matVal++;
        totPoints+=4;
    }
    else{
        mineVal+=2;
        mechVal++;
        civilVal++;
        totPoints+=4;
    }

    /*
    // Go to the next question
    var link = folder + "q6.html";
    var submit = document.getElementById('submit');
    submit.href = link;
    */

    calcDiscipline();
}

function calcDiscipline(){
     // Do something with values to assign discipline
    var valArr = [aeroVal, biomVal, biosVal, chemVal, civilVal ,compeVal, csVal , elecVal, techVal, matVal, mechVal, mineVal];
    var max_index = 0;
    var max = valArr[0];
    for(var i = 1; i < valArr.length; i++){
        if (valArr[i] > max){
            max_index = i;
            max = valArr[i];
        }
    }   

    // Assign correct discipline href to submit button
    var discipline = dictGlobal[max_index];
    var link = folder + discipline;
    var submit = document.getElementById('submit');
    console.log(link);
    submit.href = link;

    // Create cookie of user results
    saveData(valArr, totPoints)
}

// Function to create a cookie to store the users results
function saveData(valArr, totPoints){
    // Make list of discipline names
    var dict = ["aero", "biom", "bios", "chem", "civil", "compe", "cs", "elec", "tech", "mat", "mech", "mine"];

    // Save each disciplines value in local storage
    for(var i = 0; i < valArr.length; i++){
        localStorage.setItem(dict[i], valArr[i]);
    }

    // Store the total points as well
    localStorage.setItem("totPoints", totPoints);
}

// Load the users cookie
function loadData(){
    // Make list of discipline names
    var nameList = ["aero", "biom", "bios", "chem", "civil", "compe", "cs", "elec", "tech", "mat", "mech", "mine"];

    // Make list of discipline values
    var valArr = [];

    // Retrieve every value from local storage
    for(var i = 0; i < nameList.length; i++){
        valArr.push(localStorage.getItem(nameList[i]));
    }

    // Variable for the total number of points
    var totPoints = localStorage.getItem("totPoints");

    // Calculate percentage matchs
    for(var i = 0; i < valArr.length; i++){
        valArr[i] = Math.round((valArr[i] / totPoints) * 100);
    }
    
    // Make table
    createTable(nameList, valArr);
}

function createTable(nameList, valArr){
    // Get the table element and kill any kids
    var list = document.getElementById("discipline-list");
    while(list.hasChildNodes()){
        list.removeChild(list.lastChild);
    }

    // Make dict of percentages and corresponding pathways
    var sortList = {};
    for(var i = 0; i <valArr.length; i++){
        sortList[nameList[i]] = valArr[i]; 
    }

    // Sort dict on value(percentages)
    newList = sortDict(sortList);    
    var sortedKeys = newList.keys();

    // Add percentages and url to table
    for(var i = 0; i < newList.length; i++){
        // Make list item
        var li = document.createElement("li");
        li.setAttribute("id", sortedKeys[i]);

        var discName = "";

        // Get current discipline name
        for(var i = 0; i < dictGlobalOBJ.length; i++){
            if(dictGlobalOBJ[i].url == sortedKeys[i]){
                discName = dictGlobalOBJ[i].id;
            }
        }

        // Make url 
        var a = document.createElement("a");
        a.setAttribute("href", sortedKeys[i]);
        a.textContent(discName + ":" + sortList[i]);

        // Add url to li item
        li.appendChild(a);
        list.appendChild(li);


    }



}

// Sort a dictionary by its value
function sortDict(obj){
    items = Object.keys(obj).map(function(key) {
        return [key, obj[key]];
    });
    items.sort(function(first, second) {
        return second[1] - first[1];
    });
    sorted_obj={}
    $.each(items, function(k, v) {
        use_key = v[0]
        use_value = v[1]
        sorted_obj[use_key] = use_value
    })
    return(sorted_obj)
}


