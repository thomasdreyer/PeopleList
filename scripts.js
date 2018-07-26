



/* Adding post data to php backend to insert data into database */
$('#submit-form').on('click', () => {

    let name = document.getElementById('name').value;
    name = name.toLowerCase();
    let surname = document.getElementById('surname').value;
    surname = surname.toLowerCase();
    let bday = document.getElementById('birth_date').value;
    let cellphone = document.getElementById('cellphone').value;
    let email = document.getElementById('email').value;

    $.post("capture.php",{name:name,surname:surname,bday:bday,cellphone:cellphone,email})
    .done(function(data, status, xhr){
      
       if(data === 'error'){
         alert('An error occured, please check the form fields and try again');
        //$('#fail').modal('show')
       }
       else{

        alert('Person data added successfully');
        //$('#success').alert();

       }

      
    })
    .fail(function(data, status, xhr){
    alert('An error occured, please check the form fields and try again');
        //$('#fail').modal('show');
    })
   
});


/* Handling the search function */
var searchTerm;
 
 $('#get-results').on('click', ()=>{
   
    searchTerm = document.getElementById('query').value;
    searchTerm = searchTerm.toLowerCase();


    $.post("query.php",{searchTerm:searchTerm})
     .done(function(data, status, xhr){
            
      var result = JSON.parse(data);
      var peopleData = result[0];
      
      for(var q = 1; q <= peopleData.length; q++){


    let tr = document.createElement("TR");

    let th = document.createElement("TH");
    let number = document.createTextNode(q);
    th.appendChild(number);

    let tdname = document.createElement("TD");
    tdname.setAttribute("id", "name" + q);

    let tdsurname = document.createElement("TD");
    tdsurname.setAttribute("id", "surname" + q);
    
    let tdbdate = document.createElement("TD");
    tdbdate.setAttribute("id", "bdate" + q);

    let tdcell = document.createElement("TD");
    tdcell.setAttribute("id", "cell" + q);
  
    let tdemail = document.createElement("TD");
    tdemail.setAttribute("id", "email" + q);


    let tdjoined = document.createElement("TD");
    tdjoined.setAttribute("id", "joined" + q);

     tr.appendChild(th);
     tr.appendChild(tdname);
     tr.appendChild(tdsurname);
     tr.appendChild(tdbdate);
     tr.appendChild(tdcell);
     tr.appendChild(tdemail);
     tr.appendChild(tdjoined);

             
       document.getElementById("table-body").appendChild(tr);

       }
        peopleData.map((val,i) =>{
        
        document.getElementById('name'+ (i + 1)).innerHTML = val.name.charAt(0).toUpperCase() + val.name.substr(1);;
        document.getElementById('surname'+ (i + 1)).innerHTML = val.surname.charAt(0).toUpperCase() + val.surname.substr(1); ;
        document.getElementById('bdate'+ (i + 1)).innerHTML = val.bday;
        document.getElementById('cell'+ (i + 1)).innerHTML = val.cell;
        document.getElementById('email'+ (i + 1)).innerHTML = val.email;
        document.getElementById('joined'+ (i + 1)).innerHTML = val.joined;
      });
     

       if( peopleData.length >= 10 ){
       
    let z = document.createElement("LI");
    z.classList.add("page-item");
    let k = document.createElement("A");
    let l = document.createTextNode("Previous");
    k.setAttribute("onclick", "next(0)");
     k.setAttribute("id", "previous");
    k.classList.add("page-link");
    k.appendChild(l);
    z.appendChild(k);
    document.getElementById("page").appendChild(z);


        var j = 1;//result[1];
        var i = 0;
       for(let m = 0; m <= result[1]; m +=10){
      
    let p = document.createElement("LI");
    p.classList.add("page-item");
    let x = document.createElement("A");
    let t = document.createTextNode(j++);
    x.setAttribute("onclick", "next(" + i++ * 10 + ")");
    x.classList.add("page-link");
    x.appendChild(t);
    p.appendChild(x);
    document.getElementById("page").appendChild(p);
       }

    let f = document.createElement("LI");
    f.classList.add("page-item");
    let g = document.createElement("A");
    let w = document.createTextNode("Next");
    g.setAttribute("onclick", "next(10)");
    g.setAttribute("id", "next");
    g.classList.add("page-link");
    g.appendChild(w);
    f.appendChild(g);
    document.getElementById("page").appendChild(f);

   }
       
 })
    .fail(function(data, status, xhr){
    alert(status);
  
    })
    .always(function(data, status, xhr){
    alert(status);
  
    });

   
});


/* Handles the pagination of data */
function next(val){

     document.getElementById("table-body").innerHTML = " ";
    

      if(val >= 10){
     document.getElementById("previous").setAttribute("onclick", "next("+ (val - 10) +")");
     document.getElementById("next").setAttribute("onclick", "next("+ (val + 10) +")");
        }

    $.post("queries.php",{searchTerm:searchTerm, dataOffset:val})
    .done(function(data, status, xhr){
     
      
     var result = JSON.parse(data);
     var peopleData = result;
      

      for(var q = 1; q <= peopleData.length; q++){

    let tr = document.createElement("TR");
    let th = document.createElement("TH");
    let number = document.createTextNode(q);
    th.appendChild(number);

    let tdname = document.createElement("TD");
    tdname.setAttribute("id", "name" + q);

    let tdsurname = document.createElement("TD");
    tdsurname.setAttribute("id", "surname" + q);
    
    let tdbdate = document.createElement("TD");
    tdbdate.setAttribute("id", "bdate" + q);

    let tdcell = document.createElement("TD");
    tdcell.setAttribute("id", "cell" + q);
  
    let tdemail = document.createElement("TD");
    tdemail.setAttribute("id", "email" + q);


    let tdjoined = document.createElement("TD");
    tdjoined.setAttribute("id", "joined" + q);

     tr.appendChild(th);
     tr.appendChild(tdname);
     tr.appendChild(tdsurname);
     tr.appendChild(tdbdate);
     tr.appendChild(tdcell);
     tr.appendChild(tdemail);
     tr.appendChild(tdjoined);

             
       document.getElementById("table-body").appendChild(tr);

       
       }
        peopleData.map((val,i) =>{
        console.log('value', val.name);
        document.getElementById('name'+ (i + 1)).innerHTML = val.name;
        document.getElementById('surname'+ (i + 1)).innerHTML = val.surname;
        document.getElementById('bdate'+ (i + 1)).innerHTML = val.bday;
        document.getElementById('cell'+ (i + 1)).innerHTML = val.cell;
        document.getElementById('email'+ (i + 1)).innerHTML = val.email;
        document.getElementById('joined'+ (i + 1)).innerHTML = val.joined;
      });
     

    
    
    
    })
    .fail(function(data, status, xhr){
    alert('Sorry, an Error occured :-(');
  
    })
   

      

}



