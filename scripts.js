$('#submit-form').on('click', () => {

    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let bday = document.getElementById('birth_date').value;
    let cellphone = document.getElementById('cellphone').value;
    let email = document.getElementById('email').value;


    console.log("name:",name);
    console.log("surname:",surname);
    console.log("bday:",bday);
    console.log("cellphone:",cellphone);
    console.log("email:",email);


    $.post("capture.php",{name:name,surname:surname,bday:bday,cellphone:cellphone,email})
    .done(function(data, status, xhr){
      alert('success'+ data);
      console.log(data);
    })
    .fail(function(data, status, xhr){
    alert(status);
  
    })
    .always(function(data, status, xhr){
    alert(status);
  
    });




});


$('#get-results').on('click', ()=>{
    let searchTerm = document.getElementById('query').value;
    
    $.post("query.php",{searchTerm:searchTerm})
    .done(function(data, status, xhr){
      alert('success'+ data);
      console.log(data);

      var result = JSON.parse(data);
             console.log('result', result.length);
     result.map((val,i) =>{
        console.log('value', val.name);
        document.getElementById('name'+i).innerHTML = val.name;
        document.getElementById('surname'+i).innerHTML = val.surname;
        document.getElementById('bdate'+i).innerHTML = val.bday;
        document.getElementById('cell'+i).innerHTML = val.cell;
        document.getElementById('email'+i).innerHTML = val.email;
        document.getElementById('joined'+i).innerHTML = val.joined;
      });
      //document.getElementById('results').innerHTML = person;
            
    
      
    

var navi = document.createElement("nav");
var ul = document.createElement("ul");
var pag = document.createElement("li");
pag.classList.add("page-item");
var anchors = document.createElement("a");
anchors.setAttribute('href', "#");
pag.appendChild(anchors);
ul.appendChild(pag);

ul.classList.add("pagination");


navi.appendChild(ul);



      for(let j = 0; j <= result.length; j++){
      
        var paging = document.createElement("li");
        var createAText = document.createTextNode(j);
        var anchor = document.createElement("a");
        anchor.setAttribute('href', "#");
        anchor.appendChild(createAText);
        anchor.classList.add("page-link");
        paging.appendChild(anchor);
        paging.classList.add("page-item");
        
        navi.appendChild(paging);
      }
      
      document.getElementById('pa').innerHTML = navi;
    
    
    
    })
    .fail(function(data, status, xhr){
    alert(status);
  
    })
    .always(function(data, status, xhr){
    alert(status);
  
    });

   
});