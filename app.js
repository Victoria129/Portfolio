const data = [
  {
    heading: "Tonic",
    image: "./assets/project1.png",
    content: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type 
    specimen book. It has survived not only five centuries, but 
    also the leap into electronic typesetting, remaining essent`,
  },

  {
    heading: "Multi-post <br/>Stories",
    image: "./assets/project 3.png",
    content: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type 
    specimen book. It has survived not only five centuries, but 
    also the leap into electronic typesetting, remaining essent`,
  },

  {
    heading: "Tonic",
    image: "./assets/project image 2.png",
    content: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type 
    specimen book. It has survived not only five centuries, but 
    also the leap into electronic typesetting, remaining essent`,
  },

  {
    heading: "Multi-post <br/>Stories",
    image: "./assets/project 4.png",
    content: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type 
    specimen book. It has survived not only five centuries, but 
    also the leap into electronic typesetting, remaining essent`,
  },
]

const openBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.menu-links');
const modal = document.querySelector('.modal');
const popupWrap = document.querySelector('.pop-up-wrap');
const projectBtn = document.querySelectorAll('.see-project-btn');

projectBtn.forEach(function(Btn){
  Btn.addEventListener('click', function(e){
    const i = e.currentTarget.dataset.id; 
    popupWrap.innerHTML = `<div class="pop-up-nav">
    <h2 class="poppins" id="logo">${data[i].heading}</h2>
    <span class = "pop-up-closeBtn">&times;</span>
  </div>

<div class="pop-up-about">
    <ul class="poppins canopy-modal">
      <li class="about-li" id="canopy">CANOPY</li>
      <li class="about-li">Back End Dev</li>
      <li class="about-li">2015</li>
    </ul>
</div>

<div class="pop-up-image-wrap">
  <img class="snapshoot" src="${data[i].image}" alt="Tanner Christensen's portfolio image">
</div>
   
<div class="pop-up-text-content">
  <p class="poppins-regular" id="modal-text">${data[i].content}</p>
  <div class="tag-wrap">
  <ul class="poppins-regular language-button">
    <li class="languages">html</li>
    <li class="languages">css</li>
    <li class="languages">javascript</li>
  </ul>
<div class="pop-up-btn">
  <button class="poppins-regular see-live-btn">See live<img class="live-icon" src="./assets/live-icon.png"/></button>
  <button class="poppins-regular see-source-btn">See source<img id="github-modal-icon" src="./assets/github-icon.png"/></button>
</div>
</div>
</div>
`
    modal.style.visibility = 'visible';
    const closeModal = document.querySelector('.pop-up-closeBtn');
    closeModal.addEventListener('click', function(){
      modal.style.visibility = 'hidden';
    })
  })
})

openBtn.addEventListener('click', function (){
  mobileMenu.classList.add('show-menu');
});

closeBtn.addEventListener('click', function (){
  mobileMenu.classList.remove('show-menu');
});

navLinks.forEach(function(link) {
  link.addEventListener('click', function(){
    mobileMenu.classList.remove('show-menu');
  });
}) ;

formDesktop.addEventListener('submit', (e) =>{
  const email = document.querySelector('.email-desktop').value;
  e.preventDefault();
  if(email.toLowerCase() === email){
    formDesktop.submit();
  } else {
    document.querySelector('#error-desk').textContent='Email should include only lowercase!';
  }
})


document.querySelectorAll('.text-field').forEach((input)=>
input.addEventListener('keyup', ()=>{
  if(input.name ==='name'){
    formData.name = input.value;
  } else if(input.type ==='email'){
    formData.email = input.value;
  }else if(input.name === 'textarea'){
    formData.message = input.value;
  }
  
  localStorage.setItem('formInputs', formData);  
}));

const getInputData = () => {
  if(localStorage.getItem('formInputs') !== null){
    let localFormData = JSON.parse(localStorage.getItem('formInputs'));

    document.getElementById('name').value = localFormData.name;
    document.getElementById('email').value = localFormData.email;
    document.getElementById('textarea').value = localFormData.message;

    formData.name = localFormData.name;
    formData.email = localFormData.email;
    formData.message = localFormData.message;
    
  }
};

