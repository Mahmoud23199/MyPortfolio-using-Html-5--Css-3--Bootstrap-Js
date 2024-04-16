var tabContents = document.querySelectorAll(".tab-contents");
var tabLinks = document.querySelectorAll(".tab-links");

function showTab(tabIndex) {
    tabContents.forEach(function(tabContent) {
        tabContent.style.display = "none";
    });

    tabContents[tabIndex].style.display = "block";

    tabLinks.forEach(function(tabLink) {
        tabLink.classList.remove('active');
    });

    tabLinks[tabIndex].classList.add('active');

    
}
showTab(0);

tabLinks.forEach(function(target)
{
    target.addEventListener("click",function()
    {
        var tabIndex = Number(target.getAttribute("data-tab-index"));
        showTab(tabIndex);
    });
});

//--------------------menu----------------------
var sidemenu = document.getElementById("sidemenu");



function closemenu(){
    
    sidemenu.style.right="-200px"
    console.log("close")
}

function openmenu(){
    sidemenu.style.right="0"
    console.log("open")

}
//-------------------------------------------------send gmail 
// function sendemail(){
    
//     console.log("sendemail")

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "mahmoud23199@gmail.com",
//         Password : "506CBB29AFA3FF4494A5C824B4E5EB52393A",
//         To : 'mahmoud23199@gmail.com',
//         From : "mahmoud23199@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }