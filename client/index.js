// get compliment

const baseUrl = 'http://localhost:4000/api'

document.getElementById("complimentButton").onclick = 
 () => {
  axios.get(`${baseUrl}/compliment/`)
      .then((response) => {
        const data = response.data;
        alert(data);
      });
};

//end get compliment

//get fortune
const fortuneBtn = document.querySelector('#fortuneButton');
const appendFortunes = document.querySelector('.appendFortunes');

const getFortune = () => {
  axios
  .get(`${baseUrl}/fortunes/`)
  .then( (res) => {

    const { id, fortune} = res.data;
    

    const newDiv = document.createElement('div');
    const newP = document.createElement('p');

    newDiv.classList.add('newFortuneDiv');
    newP.classList.add('fortuneTxt');

    if(fortune === undefined) {
      newP.textContent = `No more fortunes, add more below`;
     } else {
      newP.textContent = `"${fortune}"`;
     }

    

    newDiv.appendChild(newP);
    appendFortunes.appendChild(newDiv);

  })
}

fortuneBtn.addEventListener('click', getFortune);
//end get fortune

//post new fortune
const fortuneInput = document.querySelector('.fortuneInput');
const fortuneSumbit = document.querySelector('.submitBtn');

const createFortune = (event) => {
  event.preventDefault();
  if (fortuneInput.value === "") {
    alert('Please input a fortune');
    return
  }
  let inputValue = fortuneInput.value;
  let newFortune = {
    fortune: inputValue
  }
  axios
  .post(`${baseUrl}/fortunes`, newFortune)
  .then( (res) => {
    const { id, fortune} = res.data;
    console.log(id)
    const newDiv = document.createElement('div');
    const newP = document.createElement('p');
    

    newDiv.classList.add('newFortuneDiv');
    newP.classList.add('fortuneTxt');
    


    newP.textContent = `"${fortune}"`;
  

    newDiv.appendChild(newP);
    
    appendFortunes.appendChild(newDiv);

    fortuneInput.value = "";
  })
}


fortuneSumbit.addEventListener('click', createFortune)
//end post new fortune

//delete fortune
const remove = document.querySelector('span')
const deleteFortune = () => {
  while(appendFortunes.firstChild) {
    appendFortunes.removeChild(appendFortunes.firstChild)
  }
  axios
  .delete(`${baseUrl}/fortunes/`)
  .then((res) => 
  console.log(res.data)
  )

}

remove.addEventListener('click', deleteFortune);

//end delete fortune

//get user info

const appendUser = document.querySelector('.appendUser');
window.onload = () => {
  axios
  .get(`${baseUrl}/users`)
  .then((res) => {
   const fName = document.createElement('p');
   const lName = document.createElement('p');
   const fColor = document.createElement('p');

    const {firstName, lastName, favColor} = res.data;

    fName.textContent = firstName;
    lName.textContent = lastName;
    fColor.textContent = favColor;

    appendUser.appendChild(fName);
    appendUser.appendChild(lName);
    appendUser.appendChild(fColor);

  })
};

//end get user info


//update user info
const fNameInput = document.querySelector('.fName')
const lNameInput = document.querySelector('.lName')
const fColorInput = document.querySelector('.fColor')
const userBtn = document.querySelector('.userBtn');



const updateUser = (event) => {
  event.preventDefault();

  while(appendUser.firstChild) {
    appendUser.removeChild(appendUser.firstChild);
  }
  const newUser = {
    "firstName": fNameInput.value,
      "lastName": lNameInput.value,
      "favColor": fColorInput.value
  }

  axios
  .put(`${baseUrl}/users`, newUser)
  .then((res) => {
    const fName = document.createElement('p');
    const lName = document.createElement('p');
    const fColor = document.createElement('p');

   const {firstName, lastName, favColor} = res.data[0];

   fName.textContent = firstName;
    lName.textContent = lastName;
    fColor.textContent = favColor;

    appendUser.appendChild(fName);
    appendUser.appendChild(lName);
    appendUser.appendChild(fColor);

    fNameInput.value = "";
    lNameInput.value = "";
    fColorInput.value = "";
  })
}


userBtn.addEventListener('click', updateUser)


//end update user info