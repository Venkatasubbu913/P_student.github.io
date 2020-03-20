var studentsArr = []
function createOptionsInSelect() {
    $(".studentSelect").html("")
    studentsArr.forEach(x => {
        $(".studentSelect").append(`<option>${x.Name}</option>`)
    })
}

$("#studentDetailsSubmitBtn").click(function () {
    let name = $("#name").val()
    let mail = $("#mail").val()
    let phNo = $("#phNo").val()
    let studentObj = new student(name, mail, phNo)
    studentsArr.push(studentObj)
    console.log(studentObj)
    createOptionsInSelect()
    alert("student details are submitted..!")
})

class student {
    constructor(name, mail, phNo) {
        this.Name = name || "invalid",
            this.Email = mail || "invalid",
            this.PhoneNumber = phNo || "invalid",
            this.Marks = []
    }
    highestMarks() {
        let arr = this.Marks
        let maxMarks = Math.max(...arr)
        // alert(`max marks of ${this.Name} is ${maxMarks}.`)
        return maxMarks
    }
    totalSubjects() {
        // alert(`${this.Name} had ${this.Marks.length} Subjects.!`)
        return this.Marks.length
    }
    showMarks() {
        // alert(`${this.Name} All Marks are ${this.Marks}`)
        return this.Marks
    }
    average() {
        let arr = this.Marks
        let sum = arr.reduce((a, b) => a + b)
        let l = this.Marks.length
        // alert(`${this.Name} Marks Average is ${(sum / l)}`)
        return (sum / l)
    }
    low() {
        let arr = this.Marks
        let lowMarks = Math.min(...arr)
        // alert(`minimum marks of ${this.Name} is ${lowMarks}.`)
        return lowMarks
    }
}

$("#resetSubjectsBtn").click(function () {
    $("#subjectsAndMarksDiv").html(`<div>
                                        <h3>Subject Name</h3>
                                        <hr>
                                    </div>
                                    <div>
                                        <h3>Marks</h3>
                                        <hr>
                                    </div>
                                    <div>Maths</div>
                                    <div><input type="number" id="Maths" class="marksInput"></div>
                                    <div>Physics</div>
                                    <div><input type="number" id="Physics" class="marksInput"></div>
                                    <div>Chemistry</div>
                                    <div><input type="number" id="Chemistry" class="marksInput"></div>`
    )
})
// $("#marksSubmitBtn").click(assignMarks())
// function assignMarks() {
$("#marksSubmitBtn").click(function () {
    alert("U pressed Marks submit button")
    let selectedStudent = $("#selectStudentToAddMarks").val()

    // let maths = Number($("#Maths").val())
    // let phy = Number($("#Physics").val())
    // let che = Number($("#Chemistry").val())
    // let marks = [maths, phy, che]
    // let marks= $(".marksInput").val()
    var inputs = document.querySelectorAll(".marksInput")
    console.log(inputs.length + " it is number of inputs")
    // console.log(inputs)
    var marks = []
    for (m = 0; m < inputs.length; m++) {
        marks.push(Number(document.querySelectorAll(".marksInput")[m].value))
    }
    console.log("all subjects marks are = " + marks)
    flag = 0
    // studentsArr.forEach(x => {
    //     if(x.Name== selectedStudent) {
    //         flag= 1
    //         break
    //     }
    // })
    for (i = 0; i < studentsArr.length; i++) {
        if (studentsArr[i].Name == selectedStudent) {
            flag = 1
            break
        }
    }
    if (flag == 1) {
        studentsArr[i].Marks = marks
        console.log(studentsArr[i].Marks + "<-- marks arr of " + studentsArr[i].Name)
    }
    console.log(marks)
    console.log(selectedStudent)
})

$("#studentDetailsShowBtn").click(function () {
    let selectedStudent = $("#selectStudentToSeeHisDetails").val()
    let selectedDetail = $("#selectMarksDetail").val()
    console.log(selectedDetail, selectedStudent)
    for (j = 0; j < studentsArr.length; j++) {
        if (studentsArr[j].Name == selectedStudent) {
            if (selectedDetail == 1) {
                var result = studentsArr[j].highestMarks()
                $("#displaySelectedStudentDetail").html(`<div>${studentsArr[j].Name} Higest of Marks is ${result}</div>`)
                break
            }
            else if (selectedDetail == 2) {
                var result = studentsArr[j].totalSubjects()
                $("#displaySelectedStudentDetail").html(`<div>${studentsArr[j].Name} Total Subjects are ${result}</div>`)
                break
            }
            else if (selectedDetail == 3) {
                var result = studentsArr[j].showMarks()
                $("#displaySelectedStudentDetail").html(`<div>${studentsArr[j].Name} All Subjects Marks are ${result}</div>`)
                break
            }
            else if (selectedDetail == 4) {
                var result = studentsArr[j].average()
                $("#displaySelectedStudentDetail").html(`<div>${studentsArr[j].Name} Marks Average is ${result}</div>`)
                break
            }
            else if (selectedDetail == 5) {
                var result = studentsArr[j].low()
                $("#displaySelectedStudentDetail").html(`<div>${studentsArr[j].Name} Least of Marks is ${result}</div>`)
                break
            }
        }
    }
})

$("#addSubjectBtn").click(function () {
    $("#subjectsAndMarksDiv").append(`<div>Extra Subject</div>
                                        <div><input class="marksInput"></input></div>`)
})