let list = [];
let count=0;
let num=0;
function getdata()
{
    // details of student
    let name = document.getElementById("name").value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
      }
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    if ( gender ==null) {
        
        alert("Please enter Gender");
        return false;
    }
    else{
        gender = document.querySelector('input[name="gender"]:checked').value; 
    }
    
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    if (phone == "") {
        alert("Phone Number is required");
        return false;
    }
    let email = document.getElementById("email").value;

    let person ={name:name,dob:dob,gender:gender,address:address,phone:phone,email:email};
    // console.log(person);
    list.push(person);
    console.log(list);

    // emergency details
    let name1 = document.getElementById("name1").value;
    let relation = document.getElementById("relation").value;
    let em_contact = document.getElementById("emergency").value;
    // document.getElementById("demo").innerHTML = "Name =" + name + "  " + "dob =" + dob + "  " + "gender = "  + gender +"  "+"address = " + address +"  "+"phone = " + phone + " "+"email = "+ email+" ";
    // document.getElementById("demo1").innerHTML = "Name =" + name1 + "  " +"Relation = " +relation +"  "+"emergency contact = "+ em_contact;
    document.getElementById("form1").reset();
    document.getElementById("form2").reset();
   
     adddata(list.length,count);
    count +=1;
    
}
//appending to table
function adddata(len,num){
    for(i=num;i<len;i++)
    {
        document.getElementById("tablebody").innerHTML +=
         "<tr>"+
            "<td>"+ (i+1) +"</td>"+
            "<td>"+list[i].name +"</td>"+
            "<td>"+list[i].dob +"</td>"+
            "<td>"+list[i].gender+"</td>"+
            "<td>"+list[i].address +"</td>"+
            "<td>"+list[i].phone +"</td>"+
            "<td>"+list[i].email +"</td>"+
            "<td>"+"<button onclick= 'obj_delete("+i+")' >"+"DELETE  "+'<i class="fa-solid fa-trash">'+'</i>' +"  "+ "</button>" +"<button onclick= 'editdata("+i+")' >"+"EDIT  "+'<i class="fa-regular fa-pen-to-square"> '+'</i>' +"</button>" +"</td>"+
        "</tr>"
    }
}
//deleting objects from table
function obj_delete(i){
    // console.log(i);
    list.splice(i,1);
    // console.log(list);
    document.getElementById("tablebody").innerHTML ="";
    console.log(list.length);
    adddata(list.length,num);
    count--;
}
//work of New btn
function getfocus() {
    document.getElementById("form1").reset();
    document.getElementById("form2").reset();
    document.getElementById("name").focus();
    document.getElementById("savebtn").disabled = false;
    document.getElementById("updatebtn").disabled = true;
  }
//edit function
function editdata(i) {
    document.getElementById("savebtn").disabled = true;
    document.getElementById("updatebtn").disabled = false;
    document.getElementById("name").value = list[i].name;
    document.getElementById("dob").value = list[i].dob;
    document.querySelector('input[name="gender"][value="' + list[i].gender + '"]').checked = true; 
    document.getElementById("address").value = list[i].address;
    document.getElementById("phone").value = list[i].phone;
    document.getElementById("email").value = list[i].email;
    document.getElementById("name").focus();
    editedindex = i;
}
let editedindex;
//update btn
function updatedata(i){
    
    let name = document.getElementById("name").value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
      }
    let phone = document.getElementById("phone").value;
      if (phone == "") {
          alert("Phone Number is required");
          return false;
      }
    obj_delete(i);
    getdata();
    alert("Data updated successfully");
    document.getElementById("savebtn").disabled = false;
    document.getElementById("updatebtn").disabled = true;
    document.getElementById("name").focus();
}