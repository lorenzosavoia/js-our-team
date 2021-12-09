const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

const container = document.querySelector(".team-container");
// console.log(container);
for (let i = 0; i < team.length; i++) {
  const element = team[i];
  const cardTemplateDiv = `
  <div class="team-card">
    <div class="card-image">
      <img
        src="img/${element.image}"
        alt="${element.name}"
      />
    </div>
    <div class="card-text">
      <h3>${element.name}</h3>
      <p>${element.role}</p>
    </div>
  </div>`;
  container.innerHTML += cardTemplateDiv;
  // console.log(cardTemplateDiv);
  // console.log(element.image);
  // console.log(element.name);
  // console.log(element.role)
}

const inputName = document.getElementById("name");
const inputRole = document.getElementById("role");
const inputImg = document.getElementById("image")
const button = document.getElementById("addMemberButton");


button.addEventListener('click', function() {
  const  nameMember = inputName.value;
  const  roleMember = inputRole.value;
  const  imgMember = inputImg.value;

  if (nameMember.length > 0 && roleMember.length > 0 && imgMember.length < 0) {
    const newCard = {
      name : nameMember,
      role : roleMember,
      image : imgMember,
    };
    team.push(newCard)
    const cardTemplateDiv = `
    <div class="team-card">
      <div class="card-image">
        <img
          src="img/${element.image}"
          alt="${element.name}"
        />
      </div>
      <div class="card-text">
        <h3>${element.name}</h3>
        <p>${element.role}</p>
      </div>
    </div>`;
    container.innerHTML += cardTemplateDiv;  
  }else{
    console.log("non hai inserito nulla");
  }
 
});