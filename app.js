function gradeCalculator() {

    let studentName = document.getElementById("studentName").value;
    let grade1 = parseFloat(document.getElementById("grade1").value);
    let grade2 = parseFloat(document.getElementById("grade2").value);
    let grade3 = parseFloat(document.getElementById("grade3").value);
    let result = document.getElementById("result");
    if (studentName === "") {
        result.textContent = `Please Enter Student Name.`;
        return;
    }
    if ( isNaN(grade1) || isNaN(grade2) || isNaN(grade3) ||
        grade1 < 0 || grade1 > 100 ||
        grade2 < 0 || grade2 > 100 ||
        grade3 < 0 || grade3 > 100) {
        result.textContent = `Invalid Input. Please Enter Grade (0-100)`;
        return;
    }
    let average = (grade1 + grade2 + grade3) / 3;

    if (average >= 70) {

    result.textContent = `Congradulations ${studentName} you passed! Grade Average: ${average.toFixed(2)}`;
    } else {
        result.textContent = `Keep practicing ${studentName}. Grade Average: ${average.toFixed(2)}`;

    }
    
}
