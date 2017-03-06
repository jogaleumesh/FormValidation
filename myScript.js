var UserName = document.querySelector('input[name=username]');
var Password = document.querySelector('input[name=pass]');
var ConsfimPassword = document.querySelector('input[name=confirmPass]');
var Email = document.querySelector('input[name=email]');
var Mobile = document.querySelector('input[name=mobile]');
var Country = document.querySelector('select');
var Gender = document.querySelectorAll('input[name=gender]');
var Condition = document.querySelector('input[type=checkbox]');



function formValidate () {
    if (UserName.value.length < 5 ){
        UserName.nextElementSibling.innerHTML = "Please enter username more than 5 char!";
            UserName.focus() ;
            return false;
    }if (true){
        UserName.nextElementSibling.innerHTML = "";
    }

    if(Password.value.length < 6){
         Password.nextElementSibling.innerHTML ='Please enter password more than 6 char';
            Password.focus() ;
            return false;
    }if (true){
        Password.nextElementSibling.innerHTML = "";
    }

    if(ConsfimPassword.value != Password.value){
        ConsfimPassword.nextElementSibling.innerHTML = 'Password  not match';
    	ConsfimPassword.focus() ;
        return false;
    }if (true){
        ConsfimPassword.nextElementSibling.innerHTML = "";
    }

    var atpos = Email.value.indexOf("@");
    var dotpos = Email.value.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=Email.value.length) {
        Email.nextElementSibling.innerHTML = "Not a valid e-mail address";
        Email.focus();
        return false;
      }if (true){
        Email.nextElementSibling.innerHTML = "";
    }

    if( Mobile.value.length != 10 || isNaN(Mobile.value)){
            Mobile.nextElementSibling.innerHTML = "Please Provide Valid Number";
    		Mobile.focus();
    		return false;
    	}if (true){
        Mobile.nextElementSibling.innerHTML = "";
    }


    var BirthDate = document.querySelector('input[name=birthDate]');
    var now = new Date();
    var myDate = BirthDate.value.split("-");
    var bornYear = parseInt(myDate[0]);
    var currentYear =now.getFullYear();
    var age = currentYear-bornYear;
    if (BirthDate.value == ''){
        BirthDate.nextElementSibling.innerHTML='Please provide your birthdate';
        BirthDate.focus();
        return false;
    }if(age < 18){
        BirthDate.nextElementSibling.innerHTML = "Your age is below 18.";
        BirthDate.focus();
        return false;
    }if (true){
        BirthDate.nextElementSibling.innerHTML = "";
    }


    if( Country.value == "-1" )
        {
         Country.nextElementSibling.innerHTML = "Please provide your country!";
         Country.focus();
         return false;
        } if (true){
        Country.nextElementSibling.innerHTML = "";
    }  

    if(Gender[0].checked == false && Gender[1].checked == false && Gender[2].checked == false){
            document.getElementById('gender').innerHTML = "Please Choose Your Gender";
            return false;
        }if (true){
        document.getElementById('gender').innerHTML = "";
    }  

    if(Condition.checked == false){
        Condition.nextElementSibling.innerHTML = "Please check the terms & Conditions box";
        return false;
    }if (true){
        Condition.nextElementSibling.innerHTML = "";
    }  

    return ( true );
}	 


