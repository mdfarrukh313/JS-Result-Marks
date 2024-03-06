

var chemMarks = document.querySelector('#chem-marks')
var phyMarks = document.querySelector('#phy-marks')
var mathMarks = document.querySelector('#math-marks')
var comMarks = document.querySelector('#com-marks')
var bioMarks = document.querySelector('#bio-marks')
var historyMarks = document.querySelector('#history-marks')
var englishMarks = document.querySelector('#eng-marks')
var accountingMarks = document.querySelector('#acc-marks')
var geographyMarks = document.querySelector('#geography-marks')
var economicsMarks = document.querySelector('#economics-marks')
var pakstudiesMarks = document.querySelector('#pakstudies-marks')
var urduMarks = document.querySelector('#urdu-marks')
var islamiyatMarks = document.querySelector('#islamiyat-marks')
var sindhiMarks = document.querySelector('#sindhi-marks')
var arabicMarks = document.querySelector('#arabic-marks')
var studentTotal = document.querySelector('#total-marks')
var percentage = document.querySelector('#percentage')
var grade = document.querySelector('#grade')


function calculatePercentage() {
    console.log(chemMarks.value);
    console.log(phyMarks.value);
    console.log(mathMarks.value);
    console.log(comMarks.value);
    console.log(bioMarks.value);
    console.log(historyMarks.value);
    console.log(englishMarks.value);
    console.log(accountingMarks.value);
    console.log(geographyMarks.value);
    console.log(economicsMarks.value);
    console.log(pakstudiesMarks.value);
    console.log(urduMarks.value);
    console.log(islamiyatMarks.value);
    console.log(sindhiMarks.value);
    console.log(arabicMarks.value);

    var totalMarks = 1500;
    var obtainedMarks = +chemMarks.value + +phyMarks.value + +mathMarks.value + +comMarks.value + +bioMarks.value + +historyMarks.value + +englishMarks.value + +accountingMarks.value + +geographyMarks.value + +economicsMarks.value + +pakstudiesMarks.value + +urduMarks.value + +islamiyatMarks.value + +sindhiMarks.value + +arabicMarks.value;
    console.log('obtained marks ===>', obtainedMarks);
    studentTotal.innerHTML = obtainedMarks;

    var studentPercentage = obtainedMarks / totalMarks * 100;
    percentage.innerHTML = studentPercentage;


    if(studentPercentage > 80){
        grade.innerHTML = 'A+'
    }else if(studentPercentage > 70){
        grade.innerHTML = 'A'
    } else if(studentPercentage > 60){
        grade.innerHTML = 'B'
    }else{
        grade.innerHTML = 'FAIL'
    }
}
















