var ad = document.getElementById('name');
var lname = document.getElementById('lname');


function store() {
    localStorage.setItem('name', ad.value);
    localStorage.setItem('lname', lname.value);
}


function check() {

   
    var storedName = localStorage.getItem('name');
    var storedlName = localStorage.getItem('lname');

  
    var userName = document.getElementById('name').value;
    var userlName = document.getElementById('lname').value;

    
    if(userName!== storedName || userlName !== storedlName) {
        alert('ERROR');
    }
    else {

        alert('You are loged in.');
        location.href="todo.html";
    }
}