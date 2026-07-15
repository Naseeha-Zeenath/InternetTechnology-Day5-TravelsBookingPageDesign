function btnConformBooking(){
    let txtFirstName = document.getElementById("txtFirstName");
    let txtLastName = document.getElementById("txtLastName");
    let txtPhoneNum = document.getElementById("txtPhoneNum");
    let txtEmail = document.getElementById("txtEmail");
    let txtFrom = document.getElementById("txtFrom");
    let txtTo = document.getElementById("txtTo");
    let txtAdults = document.getElementById("txtAdults");
    let txtChildren = document.getElementById("txtChildren");
    let txtDate = document.getElementById("txtDate");
    let txtTime = document.getElementById("txtTime");

  
    let txtInsuranceYes = document.getElementById("txtInsuranceYes");
    let txtInsuranceNo = document.getElementById("txtInsuranceNo");


    console.log("First Name : "+txtFirstName.value);
    console.log("Last Name : "+txtLastName.value);
    console.log("Phone Number : "+txtPhoneNum.value);
    console.log("Email : "+txtEmail.value);
    console.log("From : "+txtFrom.value);
    console.log("To : "+txtTo.value);
    console.log("Adults : "+txtAdults.value);
    console.log("Children : "+txtChildren.value);
    console.log("Date : "+txtDate.value);
    console.log("Time : "+txtTime.value);
    // console.log("JourneyType : "+txtJourneyType);
    console.log("Iclude Insurance - yes  : "+txtInsuranceYes.value);
    console.log("Iclude Insurance - no   : "+txtInsuranceNo.value);
    console.log(txtJourneyType);
}