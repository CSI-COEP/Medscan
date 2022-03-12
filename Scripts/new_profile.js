    var firebaseConfig = {
      apiKey: "AIzaSyBJHf2Dyia-4EL8JVudp33B9T930Bt7Uos",
      authDomain: "medscan-bd3f1.firebaseapp.com",
      databaseURL: "https://medscan-bd3f1.firebaseio.com",
      projectId: "medscan-bd3f1",
      storageBucket: "medscan-bd3f1.appspot.com",
      messagingSenderId: "544262913242",
      appId: "1:544262913242:web:f3d3e5dbac87c5869039e3",
      measurementId: "G-6TKMDDPF5F"

    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);  
    var db =firebase.firestore();


  //
  // ----NEW PROFILE CREATION -----
  //

  var male_btn=document.getElementById("male-btn");
  var female_btn=document.getElementById("female-btn");

  var Alergies_Added_Container = document.getElementById("Alergies-Added");
  var Alergie_Added_Diplay = document.getElementById("Alergie-Added");

  var Alergies = [ ];
  var PHCs =[];
  var gender ;

  var mssg_div = document.getElementById("mssg-div");    
  var fullName = document.getElementById("full_name");
  var height = document.getElementById("height");
  var weight = document.getElementById("weight");
  var age = document.getElementById("age");
  var pin = document.getElementById("pin");
  var blood_grp = document.getElementById("blood-grp");
 
  var linkToLoginPage = document.getElementById("linkToLoginPage");
  var submit_btn = document.getElementById("submit-btn");
  var reactivate_submit = document.getElementById("reactivate-submit");
  
  function setMale(){
    gender= "Male";
    male_btn.classList.add("gender-male");
    female_btn.classList.remove("gender-female");
  }
  function setFemale(){
    gender= "Female";
    male_btn.classList.remove("gender-male");
    female_btn.classList.add("gender-female");
  }

  
  function updateAlergies(){
    var alergie= document.getElementById("Alergies");
    Alergies.push(alergie.value);
    
    // Displaying Added Items List
    var main_div = document.getElementById("Alergies-Added");
    
    element_span = document.createElement("span");
    element_span.id="Alergie-Added";
    element_span.appendChild(document.createTextNode(alergie.value))
    
    main_div.appendChild(element_span);
    alergie.value='';
    
  }
  function updatePHC(){
    var PHC= document.getElementById("PHC");
    PHCs.push(PHC.value);

    var main_div = document.getElementById("PHCs-Added");
    
    element_span = document.createElement("span");
    element_span.id="PHC-Added";
    element_span.appendChild(document.createTextNode(PHC.value))
    
    main_div.appendChild(element_span);

    PHC.value='';
  }



  function submitForm() { 
 
    // if(fullName.value !="" ){
    if(fullName.value !="" && age.value != "" && weight.value !="" && height.value !="" && gender !="" ){
        db.collection("Patients").add({
        
        Full_Name: fullName.value,
        Age : age.value ,
        Gender: gender,
        Weight: weight.value  ,
        Height: height.value ,

        Pin: pin.value,

        Blood_Group: blood_grp.value,
        Allergies :Alergies,
        PHC:PHCs,
        textNote: []
        })

        .then(function(docRef) {
          console.log("Document successfully written!");
          
          mssg_div.classList.remove("error");
          mssg_div.classList.add("success");
          
          linkToLoginPage.classList.add("show");
          linkToLoginPage.classList.remove("hide");
          
          submit_btn.classList.remove("submit-btn");
          submit_btn.disabled= true;
          
          reactivate_submit.classList.add("show");
                reactivate_submit.classList.remove("hide");
                
                mssg_div.innerText=("New Profile Succesfuly Created - ID : " + docRef.id);
                
              })
            .catch(function(error) {
                mssg_div.classList.add("error");
                //   console.error("Error writing document: ", error);
            });

    }else{
        console.log("errrr");

        mssg_div.classList.add("error");
        mssg_div.innerText="pls fill in the required(*) fields";
        
    }
  };

function reactivateSubmit(){

    submit_btn.disabled= false ;
    resetForm();
    reactivate_submit.classList.remove("show"); 
    reactivate_submit.classList.add("hide"); 
}


  function resetForm(){

    fullName.value="";
    height.value="";
    weight.value="";
    age.value="";
    blood_grp.value="";
    Alergies = [];
    PHCs = [];

    mssg_div.classList.remove("show");
    mssg_div.classList.add("hide");
  }
