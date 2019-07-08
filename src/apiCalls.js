
export const fetchFilms = ()=> {
   let filmsURL = 'https://swapi.co/api/films/'
    return fetch(filmsURL)
      .then(response => {
        if(!response.ok) {
          throw Error ('Error fetching films')
        } else {
        return response.json()
        }
      })
};


export const fetchPeople = ()=> {
  let peopleURL = 'https://swapi.co/api/people/'
   return fetch(peopleURL)
     .then(response => {
       if(!response.ok) {
         throw Error ('Error fetching people')
       } else {
       return response.json()
       }
     })
};
    

export const fetchPlanets = ()=> {
  let planetsURL = 'https://swapi.co/api/planets/'
   return fetch(planetsURL)
     .then(response => {
       if(!response.ok) {
         throw Error ('Error fetching planets')
       } else {
       return response.json()
       }
     })
};


export const fetchVehicles = ()=> {
  let vehiclesURL = 'https://swapi.co/api/vehicles/'
   return fetch(vehiclesURL)
     .then(response => {
       if(!response.ok) {
         throw Error ('Error fetching vehicles')
       } else {
       return response.json()
       }
     })
};

