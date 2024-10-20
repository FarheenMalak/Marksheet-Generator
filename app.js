document.getElementById("generate-btn").addEventListener("click", function() {
    var subject1 = document.getElementById("subject1").value;
    var marks1 = parseInt(document.getElementById("marks1").value);
    var subject2 = document.getElementById("subject2").value;
    var marks2 = parseInt(document.getElementById("marks2").value);
    var subject3 = document.getElementById("subject3").value;
    var marks3 = parseInt(document.getElementById("marks3").value);
    var totalMarks = 100;

    if (!subject1 || !subject2 || !subject3 || isNaN(marks1) || isNaN(marks2) || isNaN(marks3) ||
        marks1 < 0 || marks2 < 0 || marks3 < 0 || marks1 > totalMarks || marks2 > totalMarks || marks3 > totalMarks) {
        alert("Please enter valid subjects and marks.");
        return;
    }

    var percentagesub1 = (marks1 / totalMarks) * 100;
    var percentagesub2 = (marks2 / totalMarks) * 100;
    var percentagesub3 = (marks3 / totalMarks) * 100;
    
    var totalObtMarks = marks1 + marks2 + marks3;
    var totalPercentage = (totalObtMarks / (totalMarks * 3)) * 100;

    var resultSection = document.getElementById("result-section");
    resultSection.innerHTML = `
        <h3>Marksheet</h3>
        <table>
            <tr>
                <th>Subject</th>
                <th>Total Marks</th>
                <th>Obtained Marks</th>
                <th>Percentage</th>
            </tr>
            <tr>
                <td>${subject1}</td>
                <td>${totalMarks}</td>
                <td>${marks1}</td>
                <td>${percentagesub1.toFixed(2)}%</td>
            </tr>
            <tr>
                <td>${subject2}</td>
                <td>${totalMarks}</td>
                <td>${marks2}</td>
                <td>${percentagesub2.toFixed(2)}%</td>
            </tr>
            <tr>
                <td>${subject3}</td>
                <td>${totalMarks}</td>
                <td>${marks3}</td>
                <td>${percentagesub3.toFixed(2)}%</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>${totalMarks * 3}</td>
                <td>${totalObtMarks}</td>
                <td>${totalPercentage.toFixed(2)}%</td>
            </tr>
        </table>
    `;
    resultSection.style.display = 'block';
});
