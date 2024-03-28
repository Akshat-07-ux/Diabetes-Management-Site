function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    isNavOpen = true;
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    isNavOpen = false;
}

function openInfoBox() {
    document.getElementById("info-box").style.display = "block";
}

function showMessage() {
    
    var modal = document.createElement("div");
    modal.className = "modal";

    
    var modalContent = document.createElement("div");
    modalContent.className = "modal-content";





    
    var thankYouMessage = document.createElement("p");
    thankYouMessage.innerText = "Thank you for visiting this website. Diabetes is a chronic health condition that affects how your body turns food into energy. Your body breaks down most of the food you eat into sugar (glucose) and releases it into your bloodstream. When your blood sugar goes up, it signals your pancreas to release insulin.This website has been developed with the moto of encouraging people about the increasing risk of diabetes in todays world. The changing life style stands to be the foremost reason for this heist.";



    
    var backButton = document.createElement("button");
    backButton.id = "back-button";
    backButton.innerText = "Back to Home";
    backButton.onclick = function () {
        window.location.href = "index.html"; 
    };

    var imageElement = document.createElement("img");
    imageElement.src = "imgq.jpg";
    imageElement.style.maxWidth = "100%";
    imageElement.style.marginTop = "15px";

    imageElement.style.marginBottom = "50px";


    
    var containerDiv = document.createElement("div");
    containerDiv.appendChild(thankYouMessage);

    containerDiv.appendChild(imageElement);
    containerDiv.appendChild(backButton);
    
    modalContent.appendChild(containerDiv);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);

    
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.backgroundColor = "#fff";
    modal.style.padding = "20px";
    modal.style.borderRadius = "10px";
    modal.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
}



function checkRisk() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;
    var bloodSugar = document.getElementById("blood-sugar").value;
    var bloodPressure = document.getElementById("blood-pressure").value;

    if (bloodSugar <= 120 && bloodPressure <= 80) {
        document.getElementById("result").innerText = name + ", you are fit";
    } else {
        document.getElementById("result").innerText = name + ", you are at risk!";
    }
}




function openRightNav() {
    document.getElementById("sidebar-right").style.width = "250px";
}

function closeRightNav() {
    document.getElementById("sidebar-right").style.width = "0";
}



function displayHealthParameters() {
    var mentorMessage = `
    <br> Dear USERS, <br>

    I extend my heartfelt thanks to each of you for exploring my diabetes prediction website. It is with immense gratitude that I acknowledge your interest in increasing your knowledge about diabetes. My website is crafted with a dedicated focus on empowering individuals with valuable insights into diabetes and fostering a proactive approach towards its management. Your commitment to understanding and sharing this vital information aligns with my mission to create a community that is well-informed and supportive. As you navigate through the resources and features, I hope you find them insightful and empowering. Together, let's raise awareness and contribute to a healthier and informed society. Thank you for being a part of this journey towards diabetes education and prevention.


    <br> 
    Best regards,
    <br>
   AKSHAT BHAGAT 
    ` ;

    var mentorImageSrc = "imgp.png"; 



    var newTab = window.open();



    newTab.document.body.innerHTML = `
    <div style='padding: 20px;'>
    <h2 style="text-align: center; ">MESSAGE FROM THE DEVELOPER</h2>
    <img src="${mentorImageSrc}" alt="Mentor Image" style="width: 200px; height: 200px; margin-bottom: 10px; margin-left: 650px; border: 2px solid #333; border-radius: 50%;">
    <p>${mentorMessage}</p>
</div>`;


}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

let animationActive = false;




let isSidebarOpen = false;

document.getElementById("show-options-button").addEventListener("click", function () {
    if (isSidebarOpen) {
        closeNav();
    } else {
        openNav();
    }
    isSidebarOpen = !isSidebarOpen; 
});

var music = new Audio('music.mp3.mp3'); 
var isMusicPlaying = false;

document.getElementById('music-button').addEventListener('click', function () {
    if (isMusicPlaying) {
        music.pause();
    } else {
        music.play();
    }
    isMusicPlaying = !isMusicPlaying; 
});


let isExploreBarOpen = false;

document.getElementById("explore-more-button").addEventListener("click", function () {
    const sidebarRight = document.getElementById("sidebar-right");

    if (isExploreBarOpen) {
        sidebarRight.style.width = "0"; 
    } else {
        sidebarRight.style.width = "250px"; 
    }

    isExploreBarOpen = !isExploreBarOpen; 
});


var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var span1 = modal1.getElementsByClassName("close")[0];
var span2 = modal2.getElementsByClassName("close")[0];


window.onload = function () {
    modal1.style.display = "block";
    modal2.style.display = "block";
}

span1.onclick = function () {
    modal1.style.display = "none";
}

span2.onclick = function () {
    modal2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

function checkRisk1() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var bloodSugar = document.getElementById("blood-sugar").value;
    var systolic = parseInt(document.getElementById("systolic").value);
    var diastolic = parseInt(document.getElementById("diastolic").value);

    
    if (!bloodSugar || !systolic || !diastolic) {
        document.getElementById("result1").innerText = "Please enter all values.";
        return;
    }

    
    var sugarMessage = (bloodSugar <= 120) ? "normal" : "at risk";
    var systolicMessage = (systolic <= 120) ? "normal" : "at risk";
    var diastolicMessage = (diastolic <= 80) ? "normal" : "at risk";

    document.getElementById("result1").innerText = name + ", your blood sugar level is " + sugarMessage +
        ", systolic blood pressure is " + systolicMessage +
        ", and diastolic blood pressure is " + diastolicMessage + ".";
}


function checkRisk2() {
    var fbiac = parseInt(document.getElementById("fbiac").value);

    
    if (!fbiac) {
        document.getElementById("result2").innerText = "Please enter the value.";
        return;
    }

    
    var message = (fbiac <= 120) ? "normal" : "at risk";
    document.getElementById("result2").innerText = "Your fasting blood glucose level is " + message + ".";
}


function checkRisk3() {
    var prandiol = parseInt(document.getElementById("prandiol").value);


    if (!prandiol) {
        document.getElementById("result3").innerText = "Please enter the value.";
        return;
    }

    
    var message = (prandiol <= 120) ? "normal" : "at risk";
    document.getElementById("result3").innerText = "Your post prandial value is " + message + ".";
}


function toggleOptions() {
    var options = document.querySelector('.options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
    var selectedOption = document.querySelector('.selected-option');
    selectedOption.innerText = options.style.display === 'block' ? '\u25BC Select Sex' : ''; 
}

function selectSex(sex) {
    document.getElementById("sex-label").innerText = "Gender: " + sex;
    toggleOptions(); 
}


function generateReport() {
    checkRisk1();
    checkRisk2();
    checkRisk3();
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex-label").innerText;
    var bloodSugar = document.getElementById("blood-sugar").value;
    var systolic = document.getElementById("systolic").value;
    var diastolic = document.getElementById("diastolic").value;
    var fbiac = document.getElementById("fbiac").value;
    var prandiol = document.getElementById("prandiol").value;

    
    var reportContent = `
    <html>
    <body>
        <h1>Generated Report</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Sex:</strong> ${sex}</p>
        <p><strong>Blood Sugar Level:</strong> ${bloodSugar}</p>
        <p><strong>Blood Pressure:</strong> ${bloodPressure}</p>
    </body>
    </html>
`;
    var reportWindow = window.open();
    reportWindow.document.write(reportContent);
    reportWindow.document.close();
}

var reportContainer = document.createElement("div");
reportContainer.innerHTML = reportContent;


document.body.appendChild(reportContainer);


var result1 = "";
var result2 = "";
var result3 = "";

function checkRisk1() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var bloodSugar = document.getElementById("blood-sugar").value;
    var systolic = parseInt(document.getElementById("systolic").value);
    var diastolic = parseInt(document.getElementById("diastolic").value);

    
    if (!bloodSugar || !systolic || !diastolic) {
        document.getElementById("result1").innerText = "Please enter all values.";
        return;
    }

    
    var sugarMessage = (bloodSugar <= 120) ? "normal" : "at risk";
    var systolicMessage = (systolic <= 120) ? "normal" : "at risk";
    var diastolicMessage = (diastolic <= 80) ? "normal" : "at risk";

    document.getElementById("result1").innerText = name + ", your blood sugar level is " + sugarMessage +
        ", systolic blood pressure is " + systolicMessage +
        ", and diastolic blood pressure is " + diastolicMessage + ".";
}

function checkRisk2() {
    var fbiac = parseInt(document.getElementById("fbiac").value);

    
    if (!fbiac) {
        document.getElementById("result2").innerText = "Please enter the value.";
        return;
    }

    
    var message = (fbiac <= 120) ? "normal" : "at risk";
    document.getElementById("result2").innerText = "Your fasting blood glucose level is " + message + ".";
}

function checkRisk3() {
    var prandiol = parseInt(document.getElementById("prandiol").value);

    
    if (!prandiol) {
        document.getElementById("result3").innerText = "Please enter the value.";
        return;
    }

    
    var message = (prandiol <= 120) ? "normal" : "at risk";
    document.getElementById("result3").innerText = "Your post prandial value is " + message + ".";
}

function toggleOptions() {
    var options = document.querySelector('.options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
    var selectedOption = document.querySelector('.selected-option');
    selectedOption.innerText = options.style.display === 'block' ? '\u25BC Select Sex' : ''; 
}

function selectSex(sex) {
    document.getElementById("sex-label").innerText = "Gender: " + sex;
    toggleOptions(); 
}




function previewImage() {
    var input = document.getElementById('photo-upload');
    var img = document.getElementById('uploaded-photo');
    var photoContainer = document.getElementById('photo-container');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            img.src = e.target.result;
            photoContainer.style.display = 'block';  
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        
        photoContainer.style.display = 'none';
    }
}

function displayFileName(input) {
    var label = document.getElementById("photo-label");
    if (input.files.length > 0) {
        label.innerText = "File chosen";
    } else {
        label.innerText = "Choose File";
    }
}
function generateCombinedReport() {
    
    var imgReportWindow = document.createElement('img');
    imgReportWindow.id = 'uploaded-photo-report-window';
    imgReportWindow.style.maxWidth = '300px';  
    imgReportWindow.style.maxHeight = '160px'; 
    imgReportWindow.style.float = 'right';
    imgReportWindow.style.marginTop = '0px';
    imgReportWindow.style.marginRight = '60px';

    
    var imgMainPage = document.getElementById('uploaded-photo');
    var imgData = getBase64Image(imgMainPage);

    
    imgReportWindow.src = imgData;

    
    var reportContent = `
    <style>
            body {
                font-family: 'Arial', sans-serif;
                color: #333; /* Text color */
                line-height: 1.6;
                margin-left: 400px;
            }
            h1 {
                color: Black;
                text-align:start;
                font-size: 50px;
                font-weight: bold;
                margin-left: 240px;
                text-decoration: underline; 
            }
            p {
                margin-bottom: 2px;
            }
        </style>
        <h1>Final Report</h1>
        <div id="photo-container">
            ${imgReportWindow.outerHTML}
        </div>
        <p><strong>Name:</strong> ${document.getElementById("name").value}</p>
        <p><strong>Age:</strong> ${document.getElementById("age").value}</p>
        <p><strong>Sex:</strong> ${document.getElementById("sex-label").innerText}</p>
        <p><strong>Blood Sugar Level:</strong> ${document.getElementById("blood-sugar").value}</p>
        <p><strong>Systolic Blood Pressure:</strong> ${parseInt(document.getElementById("systolic").value)}</p>
        <p><strong>Diastolic Blood Pressure:</strong> ${parseInt(document.getElementById("diastolic").value)}</p>
        <p><strong>Fasting Blood Glucose Level:</strong> ${parseInt(document.getElementById("fbiac").value)}</p>
        <p><strong>Post Prandial Value:</strong> ${parseInt(document.getElementById("prandiol").value)}</p>
        <p><strong>Risk Check 1:</strong> ${document.getElementById("result1").innerText}</p>
        <p><strong>Risk Check 2:</strong> ${document.getElementById("result2").innerText}</p>
        <p><strong>Risk Check 3:</strong> ${document.getElementById("result3").innerText}</p>
    `;

    
    var reportWindow = window.open();
    reportWindow.document.write(reportContent);
    reportWindow.document.close();

    
    var element = document.createElement('div');
    element.innerHTML = reportContent;


    html2pdf(element, {
        margin: 10,
        filename: 'generated_report.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', margin: { top: 10, right: 10, bottom: 10, left: 10 } }
    });
}

function displayFileName(input) {
    var label = document.getElementById("photo-label");
    if (input.files.length > 0) {
        label.innerText = "File chosen";
    } else {
        label.innerText = "Choose File";
    }
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);

    var dataURL = canvas.toDataURL("image/jpeg");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
