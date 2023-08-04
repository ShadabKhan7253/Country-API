// alert('hEllo');
const abc = document.querySelector('.countries');
// console.log(abc);

/****************** USING XHR ************************************** */

// function getCountry(country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`, true);
//   request.onreadystatechange = () => {
//     // console.log('Hello ' + request.readyState);
//     if ((request.readyState === 4) & (request.status === 200)) {
//       const [data] = JSON.parse(request.responseText);

//       // const data = JSON.parse(request.responseText);
//       // console.log(data);
//       proccessData(data, abc);
//       // console.log(countries);
//     }
//   };
//   request.send();
// }

/****************** USING FETCH WITHOUT ARROW ************************************** */

// function getCountry(country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (res) {
//     if (res.status === 200) {
//       res.json().then(function (result) {
//         proccessData(result[0], abc);
//       });
//     } else if (res.status >= 400) {
//       console.log('error');
//     }
//   });
// }

/****************** USING FETCH WITH ARROW FUNCTION ************************************** */

// function getCountry(country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then((res) => {
//     if (res.status === 200) {
//       res.json().then((result) => {
//         proccessData(result[0], abc);
//       });
//     } else if (res.status >= 400) {
//       abc.style.fontSize = '52px';
//       abc.style.marginTop = '50px';
//       abc.innerHTML = 'Error';
//     }
//   });
// }

/****************** USING ASYNC AWAIT ************************************** */

async function getCountry(country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await res.json();
  proccessData(data[0], abc);
}

function proccessData(data, parentElment) {
  // console.log('Seeit', data);
  // const flag = data[0].flags.png;
  // const population = data[0].name.common;

  const article = document.createElement('article');
  article.className = 'country';

  const img = document.createElement('img');
  img.className = 'country_img';
  img.src = data.flags.png;
  // console.log('Hello', data.flags.png);

  article.appendChild(img);

  const divElement = document.createElement('div');
  divElement.className = 'country_data';

  const h3Element = document.createElement('h3');
  h3Element.className = 'country_name';
  h3Element.textContent = data.name.common;

  divElement.appendChild(h3Element);

  const h4Element = document.createElement('h4');
  h4Element.className = 'country_region';
  h4Element.textContent = data.region;

  divElement.appendChild(h4Element);

  const p1 = document.createElement('p');
  p1.className = 'country_row';
  p1.textContent = '👨‍👨‍👧';

  const span1 = document.createElement('span');
  span1.textContent = (data.population / 1000000).toFixed(1) + ' M people';

  p1.appendChild(span1);

  const p2 = document.createElement('p');
  p2.className = 'country_row';
  p2.textContent = '🧏🏻';

  const span2 = document.createElement('span');
  const langObject = data.languages;
  const langArray = Object.values(langObject);
  span2.textContent = langArray[0];
  p2.appendChild(span2);

  const p3 = document.createElement('p');
  p3.className = 'country_row';
  p3.textContent = ' 🏛️';

  const span3 = document.createElement('span');
  span3.textContent = data.capital;
  // console.log(data.capital);

  p3.appendChild(span3);

  divElement.appendChild(p1);
  divElement.appendChild(p2);
  divElement.appendChild(p3);

  article.appendChild(divElement);

  parentElment.appendChild(article);
}

getCountry('India');
getCountry('America');
getCountry('Portugal');
getCountry('France');
getCountry('Saudi Arabia');
getCountry('UAE');
getCountry('Australia');
getCountry('United Kingdom');
getCountry('Iraq');
getCountry('China');
getCountry('New zealand');
getCountry('Pakistan');
getCountry('Iran');
getCountry('Russia');
getCountry('Germany');
getCountry('Japan');
getCountry('kuwait');
