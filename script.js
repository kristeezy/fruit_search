const input = document.querySelector('#fruit');
const suggestionsList = document.querySelector('.suggestions ul');

const fruitList = ['Apple', 'Banana', 'Orange', 'Grape', 'Strawberry', 'Watermelon', 'Mango', 'Pineapple', 'Cherry', 'Peach', 'Pear', 'Kiwi', 'Plum', 'Raspberry', 'Blueberry', 'Blackberry', 'Cranberry', 'Apricot', 'Avocado', 'Lemon', 'Lime'];

function search(str) {
  let results = [];

  for (const fruit of fruitList) {
    if (fruit.toLowerCase().includes(str.toLowerCase())) {
      results.push(fruit);
    }
  }

  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  suggestionsList.innerHTML = '';

  if (results.length > 0) {
    for (const result of results) {
      const li = document.createElement('li');
      li.textContent = result;
      suggestionsList.appendChild(li);
    }
    suggestionsList.classList.add('has-suggestions');
  } else {
    suggestionsList.classList.remove('has-suggestions');
  }
}

function useSuggestion(e) {
  if (e.target.tagName === 'LI') {
    input.value = e.target.textContent;
    suggestionsList.classList.remove('has-suggestions');
  }
}

input.addEventListener('keyup', searchHandler);
suggestionsList.addEventListener('click', useSuggestion);
