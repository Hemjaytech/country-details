let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-Input");
searchBtn.addEventListener("click", () => {
  let countryName = countryInput.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `


        
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>


        <div class="flag-container">
        
        <p>
        <img src="${data[0].coatOfArms.svg}" class="arm-img">
        <div class="armstext">
        <h2>${data[0].name.common} Coat of Arms</h2>
      </div>
        </p>
   
        </div>
        



        <div ="class-wrapper">
        <div class="data-wrapper">
        <h4>Capital:</h4>
        <span> ${data[0].capital[0]}</span>
        </div>
        </div>

        <div ="class-wrapper">
        <div class="data-wrapper">
        <h4>Continent:</h4> 
        <span>${data[0].continents[0]}</span>
        </div>
        </div>

        <div ="class-wrapper">
        <div class="data-wrapper">
        <h4>Population:</h4> 
        <span>${data[0].population}</span>
        </div>
        </div>

        <div ="class-wrapper">
        <div class="data-wrapper">
        <h4>Currency:</h4>
        <span>${Object.keys(data[0].currencies)[0]}</span>
        </div>
        </div>

        <div ="class-wrapper">
        <div class="data-wrapper">
        <h4>Border:</h4>
        <span>
  ${Object.values(data[0].borders).toString().split(",").join(", ")}</span>
        </div>
        </div>
        
        <div ="class-wrapper">
                <div class="data-wrapper">
        <h4>Language(s):</h4> 
        <span>${Object.values(data[0].languages)
          .toString()
          .split(",")
          .join(", ")}</span>
        </div>
        </div> `;
    })
    .catch(() => {
      if (countryName == 0) {
        result.innerHTML = `<h3>Input field is empty</h3>`;
      } else result.innerHTML = `<h3>Please enter a valid Country</h3>`;
    });
});

// Done my Hemjay
// Happy Coding
