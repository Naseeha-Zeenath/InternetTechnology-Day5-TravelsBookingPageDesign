
const bookingList = [];




function btnConformBooking() {
    let booking = {
        FirstName: document.getElementById("txtFirstName").value,
        LastName: document.getElementById("txtLastName").value,
        PhoneNum: document.getElementById("txtPhoneNum").value,
        Email: document.getElementById("txtEmail").value,
        From: document.getElementById("txtFrom").value,
        To: document.getElementById("txtTo").value,
        AdultsCount: document.getElementById("txtAdults").value,
        ChildrenCount: document.getElementById("txtChildren").value,
        TripDate: document.getElementById("txtDate").value,
        Time: document.getElementById("txtTime").value
       
    }
    bookingList.push(booking);

    console.log(bookingList);

    localStorage.setItem("bookingList",JSON.stringify(booking));

}


function btnSearchBooking(){
    alert("search");
}