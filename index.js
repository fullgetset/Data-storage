const requestUrl = 'https://swapi.py4e.com/api/people/';

async function f(url) {
  try {
    const response = await fetch(url);
    localStorage.setItem('obj', JSON.stringify(response))
  } catch (err) {
    alert(err);
  }
}

f(requestUrl);
console.log(localStorage.getItem('obj'))