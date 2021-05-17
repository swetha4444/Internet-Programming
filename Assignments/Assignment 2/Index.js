var studentCount = 0;
var rowcount =1;
var sectionheight = 300;

function add() 
{
  var person = prompt("Add Student Name");
  var mark = prompt("Add Student Marks");
  studentCount++;
  sectionheight += 50;
  event.preventDefault();
  document.getElementById(studentCount).classList.remove("disappear");
  document.getElementById("name"+studentCount).value = person;
  document.getElementById("mark"+studentCount).value = mark;
  document
    .getElementById("student" + studentCount)
    .classList.remove("disappear");
  getDetails.style.height = sectionheight + "px";
  if (studentCount === 5) 
  {
    document.getElementById("addStudent").classList.add("disappear");
  }
}

function removeField(element) 
{
  var id = Number(element.id[1]) + 1;
  for (i = id; i < studentCount; i++) 
  {
    document.getElementById("name" + i).value = document.getElementById(
      "name" + (i + 1)
    ).value;
    document.getElementById("mark" + i).value = document.getElementById(
      "mark" + (i + 1)
    ).value;
  }
  document.getElementById("name" + studentCount).value = "";
  document.getElementById("mark" + studentCount).value = "";
  document.getElementById(studentCount).classList.add("disappear");
  document.getElementById("student" + studentCount).classList.add("disappear");
  sectionheight -= 50;
  getDetails.style.height = sectionheight + "px";
  if (studentCount === 5) 
  {
    document.getElementById("addStudent").classList.remove("disappear");
  }
  studentCount--;
}


function calculateGrade(mark) 
{
  if (mark > 90) 
  {
    return "A";
  } 
  else if (mark > 80 && mark <= 90) 
  {
    return "B";
  } 
  else if (mark > 70 && mark <= 80) 
  {
    return "C";
  } 
  else if (mark > 60 && mark <= 70) 
  {
    return "D";
  } 
  else if (mark > 50 && mark <= 60) 
  {
    return "E";
  } 
  else 
  {
    return "F";
  }
}

function displayTable() 
{
  var alertcheck = 0;
  event.preventDefault();
  for (i = 1; i <= studentCount; i++) 
  {
    var name = document.getElementById("name" + i).value;
    var mark = document.getElementById("mark" + i).value;
    if (name == "")
    {
      alertcheck = 1;
      alert("Please enter a name first!");
    }
    if (mark < 0 || mark > 100 || mark == "") 
    
    {
      alertcheck = 1;
      alert("Marks should be between 0 and 100 .");
    }
    if (alertcheck == 1) 
    {
      break;
    }
  }
  if (!alertcheck) 
  {
    document.getElementById("form").classList.add("disappear");
    document.getElementById("gradeTable").classList.remove("disappear");
    getDetails.style.height = sectionheight + 70 + "px";
    for (i = 1; i <= studentCount; i++) 
    {
      var name = document.getElementById("name" + i).value;
      var grade = calculateGrade(document.getElementById("mark" + i).value);
      document.getElementById("tableName" + i).innerHTML = name;
      document.getElementById("grade" + i).innerHTML = grade;
    }
  }
}

function exit() 
{
  location.reload();
}
