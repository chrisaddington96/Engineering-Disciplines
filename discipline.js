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
    var q4 = document.getElementsByName('Q4');
    var q5 = document.getElementsByName('Q5');
    
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
    }
    else if(a1 == 2){
        biosVal+=2;
        biomVal++;
        chemVal++;
    }
    else if(a1 == 3){
        civilVal+=2;
        mechVal++;
        mineVal++;
    }
    else{
        csVal+=2;
        compeVal++;
        elecVal++;
    }
    

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
        
    }
    else if(a2 == 2){
        compeVal+=2;
        csVal++;
        matVal++;
    }
    else if(a2 == 3){
        techVal+=2;
    }
    else{
        aeroVal+=2;
        mechVal++;
    }

    // Get the value q3
    for(i = 0; i < q3.length; i++){
        if(q3[i].checked){
            var a3 = q3[i].value;
        }
    }

    // Assign values for a3
    if(a3 == 1){
        biomValm+=2;
    }
    else if(a3 == 2){
        chemVal+=2;
    }
    else{
        civilVal+=2;
        mineVal++;
    }

    // Get the value q4
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
    }
    else if(a4 == 2){
        elecVal+=2;
        aeroVal++;
    }
    else if(a4 == 3){
        matVal+=2;
        chemVal++;
        biomVal++;
        biosVal++;
    }
    else{
        mineVal+=2;
        mechVal++;
        civilVal++;
    }

    // Get the value q5
    for(i = 0; i < q5.length; i++){
        if(q5[i].checked){
            var a5 = q5[i].value;
        }
    }

    // Assign values for a5
    if(a5 == 1){
        aero+=2;
        compeVal++;
        csVal++;
    }
    else if(a5 == 2){
        biomVal+=2;
        elecVal++;
        techVal++;
    }
    else if(a5 == 3){
        chemVal+=2;
        biosVal++;
        matVal++;
    }
    else{
        mineVal+=2;
        mechVal++;
        civilVal++;
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

    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);
    console.log(a5);
    console.log(disc);

    // Assign correct discipline href to submit button
    var discipline = dict[max_index];
    var link = folder + discipline;
    var submit = document.getElementById('submit');
    submit.href=link;
}

