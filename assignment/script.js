const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const skillsInput = document.getElementById('skills');
const profilePicInput = document.getElementById('profile-pic');
const resumeOutput = document.getElementById('resume-output');
const outputName = document.getElementById('output-name');
const outputEmail = document.getElementById('output-email');
const outputSkills = document.getElementById('output-skills');
const outputProfilePic = document.getElementById('profile-pic');
const profileimg = document.getElementById('profile-img');
const form = document.getElementById('resume-form');
const fileInput = document.getElementById('profile-pic');
const previewImage = document.getElementById('preview-image');
const errorMessage = document.getElementById('error-message');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     outputName.textContent = nameInput.value;
//     outputEmail.textContent = emailInput.value;
//     outputSkills.textContent = skillsInput.value;
//     if (fileInput.files && fileInput.files[0]) {
//         const reader = new FileReader();
//         reader.onload = function(e) {
//             outputProfilePic.style.backgroundImage = `url(${e.target.result})`;
//             outputProfilePic.style.backgroundSize = 'cover';
//             outputProfilePic.style.backgroundPosition = 'center';
//             outputProfilePic.style.width = '150px';
//             outputProfilePic.style.height = '150px';
//             outputProfilePic.style.borderRadius = '50%';
//             outputProfilePic.style.marginBottom = '20px';
//             errorMessage.textContent = '';
//             resumeOutput.style.display = 'block';
//             form.style.display = 'none';
//         }
//         reader.readAsDataURL(fileInput.files[0]);
//     } else {
//         errorMessage.textContent = 'Please upload a profile picture.';
//         resumeOutput.style.display = 'block';
//         form.style.display = 'none';
//         outputProfilePic.style.backgroundImage = '';
//         outputProfilePic.style.width = '0';

//         outputProfilePic.style.height = '0';
//         outputProfilePic.style.marginBottom = '0';
//         outputProfilePic.style.borderRadius = '0';
//         outputProfilePic.style.backgroundSize = '';
//         outputProfilePic.style.backgroundPosition = '';
//         outputProfilePic.style.border = 'none';
//         outputProfilePic.style.display = 'none';
//         outputProfilePic.style.margin = '0';
//         outputProfilePic.style.padding = '0';
//         outputProfilePic.style.boxShadow = 'none';
//         outputProfilePic.style.transition = 'none';
//         outputProfilePic.style.opacity = '0';
//         outputProfilePic.style.transform = 'none';
//         outputProfilePic.style.filter = 'none';
//         outputProfilePic.style.zIndex = '0';

//         outputProfilePic.style.position = 'static';
//         outputProfilePic.style.top = 'auto';
//         outputProfilePic.style.left = 'auto';
//         outputProfilePic.style.right = 'auto';
//         outputProfilePic.style.bottom = 'auto';

//         outputProfilePic.style.display = 'none';
//         outputProfilePic.style.margin = '0';
//         outputProfilePic.style.padding = '0';
//         outputProfilePic.style.boxShadow = 'none';
//         outputProfilePic.style.transition = 'none';
//     }
// });


function handlesubmit(e) {
    console.log("In the handle submit function")
    e.preventDefault();
    outputName.textContent = nameInput.value;

   // do all the things on the profileimg
    outputEmail.textContent = emailInput.value;
    outputSkills.textContent = skillsInput.value;
  
    // jsut directly change the display of the prolfieimg
    profileimg.style.display = 'block';

}



const button = document.getElementById('generateResume');

button.addEventListener('click', handlesubmit);