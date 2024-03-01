
// * @name: Assignement1
// * @Course Code: SODV1201
// * @class: Software Development Diploma program
// * @author: Dan Lu 



//The name of the picture appear after 10 seconds
const photoTitle = document.querySelector('.title')
console.log(photoTitle);
setTimeout(function () {
  photoTitle.innerHTML = "Profile photo"
  photoTitle.style.color = "blue"
}, 10000)


//The footer of the page should include current date
setInterval(function () {
  const date = document.querySelector('.date');
  const currentDate = new Date();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const formattedDate = `${monthNames[monthIndex]} ${day}, ${year}`;
  date.innerHTML = `Date: ${formattedDate}`;
}, 100)

//Mark to Grade converter web page using exception handling
const markconverterbtn = document.querySelector('#markconverter')
const markinput = document.querySelector('#mark')
const message = document.querySelector('#message')
markconverterbtn.addEventListener('click', function () {
  try {
    markinput.style.border = '1px solid gray'
    if (isNaN(markinput.value) || (markinput.value > 100) || (markinput.value < 0)) {
      throw new Error('Please input valid mark')
    }
    if (markinput.value > 90) {
      message.innerHTML = 'Grade A'
      message.style.color = 'blue'
      message.style.fontSize = '30px'
    }
    else if (markinput.value > 80) {
      message.innerHTML = 'Grade B'
      message.style.color = 'blue'
      message.style.fontSize = '30px'
    }
    else if (markinput.value > 70) {
      message.innerHTML = 'Grade C'
      message.style.color = 'blue'
      message.style.fontSize = '30px'
    }
    else if (markinput.value > 50) {
      message.innerHTML = 'Grade D'
      message.style.color = 'blue'
      message.style.fontSize = '30px'
    }
    else {
      message.innerHTML = 'Grade F'
      message.style.color = 'blue'
      message.style.fontSize = '30px'
    }
  } catch (error) {
    if (isNaN(markinput.value)) {
      markinput.style.border = '1px solid red'
      markinput.value = ''
      message.innerHTML = 'Please insert a number'
      message.style.color = 'red'
      message.style.fontSize = '30px'
    }
    else if (markinput.value > 100) {
      markinput.style.border = '1px solid red'
      markinput.value = ''
      message.innerHTML = 'The mark should not be greater than 100'
      message.style.color = 'red'
      message.style.fontSize = '30px'
    }
    else if (markinput.value < 0) {
      markinput.style.border = '1px solid red'
      markinput.value = ''
      message.innerHTML = 'The mark should not be less than 0'
      message.style.color = 'red'
      message.style.fontSize = '30px'
    }
  }
})
