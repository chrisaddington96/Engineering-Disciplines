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

function calcDiscipline(){
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

    // Get the questions by element name
    var q1 = document.getElementsByName('Q1');
    var q2 = document.getElementsByName('Q2');
    var q3 = document.getElementsByName('Q3');
    
    // Get the value q1
    for(i = 0; i < q1.length; i++){
        if(q1[i].checked){
            var a1 = q1[i].value;
        }
    }

    // Assign values for q2
    if(a1 == 1){
        aeroVal++;
        techVal++;
        matVal++;
    }
    else if(a1 == 2){
        biosVal++;
        biomVal++;
        chemVal++;
    }
    else if(a1 == 3){
        civilVal++;
        mechVal++;
        mineVal++;
    }
    else{
        csVal++;
        compeVal++;
        elecVal++;
    }
    

    // Get the value q2
    for(i = 0; i < q2.length; i++){
        if(q2[i].checked){
            var a2 = q2[i].value;
        }
    }

    // Assign values for q2
    if(a2 == 1){
        biosVal++;
        elecVal++;
        
    }
    else if(a2 == 2){
        compeVal;
        csVal++;
        matVal++;
    }
    else if(a2 == 3){
        techVal++;
    }
    else{
        aeroVal++;
        mechVal++;
    }

    // Get the value q3
    for(i = 0; i < q3.length; i++){
        if(q3[i].checked){
            var a3 = q3[i].value;
        }
    }

    // Assign values for q2
    if(a3 == 1){
        biomValm++;
    }
    else if(a3 == 2){
        chemVal++;
    }
    else{
        civilVal++;
        mineVal++;
    }
    
    
    // Do something with values to assign discipline
    var disc = [aeroVal, biomVal, biosVal, chemVal, civilVal ,compeVal, csVal , elecVal, techVal, matVal, mechVal, mineVal];
    var dict={
        0 : aero,
        1 : biom,
        2 : bios,
        3 : chem,
        4 : civil,
        5 : compe,
        6 : cs,
        7 : elec,
        8 : tech,
        9 : mat,
        10 : mech,
        11 : mine
    };
    var max_index = 0;
    var max = disc[0];
    for(i = 1; i < disc.length; i++){
        if (disc[i] > max){
            max_index = i;
            max = disc[i];
        }
    }

    // Assign correct discipline href to submit button
    var discipline = dict[max_index];
    var link = folder + discipline;
    var submit = document.getElementById('submit');
    submit.href=link;
}

