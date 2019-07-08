
export const fetchFilms = ()=> {
   let filmsURL = 'https://swapi.co/api/films/'
    return fetch(filmsURL)
      .then(response => response.json())
      .then(data => data.results)
};

export const fetchPeople = () => {
  return fetch('https://swapi.co/api/people/')
  .then(response => response.json())
  .then(data => data.results)
};
    
export const fetchPlanets = () => { 
  return fetch('https://swapi.co/api/planets/')
  .then(response => response.json())
  .then(data => data.results)
};

export const fetchVehicles = () => { 
  return fetch('https://swapi.co/api/vehicles/')
  .then(response => response.json())
  .then(data => data.results)
};

