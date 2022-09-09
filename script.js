var div = document.createElement("div");
div.setAttribute("class", "margin");

var row = document.createElement("div");
row.setAttribute("class", "row d-flex justify-content-between");
div.append(row);

var column = document.createElement("div");
column.setAttribute("class", "col-sm-12 col-md-12 col-lg-5");
column.setAttribute("id", "column");
row.append(column);

var form = document.createElement("form");
form.setAttribute("class", " form-tyle");
form.setAttribute("id","form")
column.append(form);

var heading = document.createElement("h1");
heading.innerHTML = "Form Submission :";
form.append(heading);

var fname = document.createElement("label");
fname.setAttribute("for", "fname");
fname.innerHTML = `<b>First Name :</b>`;
form.append(fname);

var breaker = document.createElement("br");
form.append(breaker);

var finput = document.createElement("input");
finput.setAttribute("type", "text");
finput.setAttribute("id", "fname");
finput.setAttribute("class", "form-control");
finput.setAttribute("placeholder", "First Name");
form.append(finput);

var breaker2 = document.createElement("br");
form.append(breaker2);

var lname = document.createElement("label");
lname.setAttribute("for", "lname");
lname.innerHTML = `<b>Last Name :</b>`;
form.append(lname);

var breaker1 = document.createElement("br");
form.append(breaker1);

var linput = document.createElement("input");
linput.setAttribute("type", "text");
linput.setAttribute("id", "lname");
linput.setAttribute("class", "form-control");
linput.setAttribute("placeholder", "Last Name");
form.append(linput);

var breaker2 = document.createElement("br");
form.append(breaker2);

var address1 = document.createElement("label");
address1.setAttribute("for", "address1");
address1.innerHTML = `<b>Address :</b>`;
form.append(address1);

var breaker1 = document.createElement("br");
form.append(breaker1);

var address = document.createElement("input");
address.setAttribute("type", "text");
address.setAttribute("id", "address");
address.setAttribute("class", "form-control");
address.setAttribute("placeholder", "Address");
form.append(address);

var breaker3 = document.createElement("br");
form.append(breaker3);

var pin = document.createElement("label");
pin.setAttribute("for", "pin");
pin.innerHTML = `<b>Pincode :</b>`;
form.append(pin);

var breaker1 = document.createElement("br");
form.append(breaker1);

var pininput = document.createElement("input");
pininput.setAttribute("type", "number");
pininput.setAttribute("id", "pin");
pininput.setAttribute("class", "form-control");
pininput.setAttribute("placeholder", "Pin");
form.append(pininput);

var breaker1 = document.createElement("br");
form.append(breaker1);

var field = document.createElement("div");
field.setAttribute("class", "division");
field.innerHTML = `<label for="Gender" class=" fw-bold">Gender:</label><br>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male">
<label class="form-check-label" for="inlineRadio1">Male</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female">
<label class="form-check-label" for="inlineRadio2">Female</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Others" >
<label class="form-check-label" for="inlineRadio3">Other</label>
</div>`;
form.append(field);

var breaker1 = document.createElement("br");
form.append(breaker1);

var field1 = document.createElement("div");
field1.setAttribute("class", "division1");
field1.innerHTML = `<label for="foods"><b>Choice Of Food</b> : <i>(Must choose atleast 2 food items)</i></label><br>
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" name="food" value="North Indian">
  <label class="form-check-label" for="inlineCheckbox1">North Indian</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" name="food" value="South Indian">
  <label class="form-check-label" for="inlineCheckbox2">South Indian</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" name="food" value="Chinese">
  <label class="form-check-label" for="inlineCheckbox3">Chinese</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox4" name="food" value="Japanese">
  <label class="form-check-label" for="inlineCheckbox4">Japanese</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox5" name="food" value="Sea Food">
  <label class="form-check-label" for="inlineCheckbox5">Sea Food</label>
</div>
`;
form.append(field1);

var breaker1 = document.createElement("br");
form.append(breaker1);

var field2 = document.createElement("div");
field2.setAttribute("class", "division2");
field2.innerHTML = `<label for="state"><b>State :</b></label>
<input type="text" id="state" name="state" class="form-control" placeholder="State" ><br>

<label for="country"><b>Country :</b></label>
<input type="text" id="country" name="country" class="form-control" placeholder="Country" ><br>
`
form.append(field2);

let button = document.createElement("button");
button.setAttribute("class", "form-control btn btn-secondary");
button.setAttribute("type", "button");
button.setAttribute("id", "submit");
button.textContent = `Submit`;
button.addEventListener("click",allData)
form.append(button);

var column1 = document.createElement("div"); 
column1.setAttribute("class", "col col-sm-12 col-md-12 col-lg-7");
column1.setAttribute("id", "column1");
row.append(column1);



var heading = document.createElement("h1");
heading.innerText = "Temporary Database";

column1.append(heading);


var table = document.createElement("table");
table.setAttribute("class", "table table-dark table-striped table-sm");
table.innerHTML = `<thead>
  <tr>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">Address</th>
    <th scope="col">Pincode</th>
    <th scope="col">Gender</th>
    <th scope="col">Food</th>
    <th scope="col">State</th>
    <th scope="col">Country</th>
  </tr>
</thead>
`;
column1.append(table);

var body = document.createElement("tbody");
table.append(body);

let food = document.getElementsByName("food");
let gender = document.getElementsByName("inlineRadioOptions");


function allData() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  let genderdata = [];
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderdata.push(gender[i].value);
      gender[i].checked = false;
    }
  }

  let fooditems = [];
  let count = 0;
  for (i = 0; i < food.length; i++) {
    if (food[i].checked) {
      fooditems.push(food[i].value);
      food[i].checked =false;
      count++;
    }
  }
  if (count < 2) {
    alert("Must choose 2 food items");
  } else {
    fooditems = fooditems.join(",");
  }

  var tr = document.createElement("tr");
  body.append(tr);
  tr.innerHTML = `<td data-label="First Name">${document.getElementById("fname").value}</td>
  <td data-label="Last Name">${document.getElementById("lname").value}</td>
      <td data-label="Address">${document.getElementById("address").value}</td>
      <td data-label="Pin code">${document.getElementById("pin").value}</td>
      <td data-label="Gender">${genderdata[0]}</td>
      <td data-label="Food">${fooditems}</td>
      <td data-label="State">${document.getElementById("state").value}</td>
      <td data-label="Country">${document.getElementById("country").value}</td>`;


   function submitform (){
    
   }   
}

document.body.append(div);
