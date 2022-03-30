let formSubmit = document.querySelector('form');
let resultSubmit = document.getElementById('result-submit');
let results = document.querySelectorAll('.results');
let resultView = document.getElementById('result-view');
let finalResult;





resultSubmit = () => {
  let str = "";
  for(let i = 0; i < results.length; i++){
    // str += '<p>';

    str += ` ${results[i].value} `;
    // str += '</p>'
    finalResult = str;

  }

  resultView.innerHTML = finalResult;

};

formSubmit = (event) => {
  event.preventDefault();
};
