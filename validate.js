function validate()
{
    if(document.myform.firstName.value=="")
    {
        alert("please enter your name");
        document.myform.firstName.focus();
        return false;
    }
    if(document.myform.email.value=="")
    {
        alert("please enter your email");
        document.myform.email.focus();
        return false;
    }
    if(document.myform.password.value=="")
    {
        alert("please enter your password");
        document.myform.password.focus();
        return false;
    }
    if(document.myform.number.value=="" || isNaN(document.myform.number.value) || document.myform.number.value.length != 10)
    {
        alert("please enter correct number");
        document.myform.number.focus();
        return false;
    }
    if(document.myform.country.value=="0")
    {
        alert("please select your country");
        return false;
    }
    return true;
}