
const bookingList = JSON.parse(localStorage.getItem("bookingList"));


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

    console.log(booking);

    localStorage.setItem("bookingList", JSON.stringify(bookingList));

    btnLoadBookingTable();

}


function btnSearchBooking() {

    let bookingList = JSON.parse(localStorage.getItem("bookingList"));


    let booking = bookingList.find(booking => {
        return booking.FirstName === document.getElementById("txtFirstName").value
    })




    document.getElementById("txtFirstName").value = booking.FirstName;
    document.getElementById("txtLastName").value = booking.LastName;
    document.getElementById("txtPhoneNum").value = booking.PhoneNum;
    document.getElementById("txtEmail").value = booking.Email;
    document.getElementById("txtFrom").value = booking.From;
    document.getElementById("txtTo").value = booking.To;
    document.getElementById("txtAdults").value = booking.AdultsCount;
    document.getElementById("txtChildren").value = booking.ChildrenCount;
    document.getElementById("txtDate").value = booking.TripDate;
    document.getElementById("txtTime").value = booking.Time;

    console.log(booking);
}

function btnDeleteBooking() {
    let bookingList = JSON.parse(localStorage.getItem("bookingList"));

    let bookingIndex = bookingList.findIndex(booking => {
        return booking.PhoneNum === document.getElementById("txtPhoneNum").value
    })


    bookingList.splice(index, 1);

    localStorage.setItem("bookingList", JSON.stringify(bookingList));

    console.log(bookingList);
}



function btnLoadBookingTable() {
    alert("ok");
    let bookingList = JSON.parse(localStorage.getItem("bookingList"));

    let body = `
    <tr style="background-color: cadetblue;">
            <th>FirstName</th>
            <th>LastName</th>
            <th>PhoneNum</th>
            <th>Email</th>
            <th>From</th>
            <th>To</th>
            <th>AdultsCount</th>
            <th>ChildrenCount</th>
            <th>TripDate</th>
            <th>Time</th>
        </tr>    
    `;

    bookingList.forEach(element => {
        body += `
       
             <tr>
                 <td>${element.FirstName}</td>
                 <td>${element.LastName}</td>
                 <td>${element.PhoneNum}</td>
                 <td>${element.Email}</td>
                 <td>${element.From}</td>
                 <td>${element.To}</td>
                 <td>${element.AdultsCount}</td>
                 <td>${element.ChildrenCount}</td>
                 <td>${element.TripDate}</td>
                 <td>${element.Time}</td>
             </tr>
         `
    })

    document.getElementById("bookingTable").innerHTML = body;

    console.log(body);
}