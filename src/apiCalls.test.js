import  { fetchFilms, fetchPeople, fetchPlanets, fetchVehicles } from './apiCalls';

describe('fetchFilms', () => {
  let mockFilmsResponse
  beforeEach( () => {
    mockFilmsResponse = [
      {title: 'movie 1',
      id: 1
    }];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve( {
        ok: true,
        json: () => Promise.resolve(mockFilmsResponse)
      })
    })
  });

  it('fetchFilms should be called with correct params', () => {
    const expected = ['https://swapi.co/api/films/'];
    fetchFilms();
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  })

  it('fetchFilms should return a parsed response if status is ok', async () =>{
    const result = await fetchFilms();
    fetchFilms()
    expect(result).toEqual(mockFilmsResponse)
  })

  it('fetchFilms should return error if status is not ok', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve( {
        ok: false,
      })
    })
    await expect(fetchFilms()).rejects.toEqual(Error('Error fetching films'))
  })
})

describe('fetchPeople', () => {
  let mockPeopleResponse
  beforeEach( () => {
    mockPeopleResponse = [
      {title: 'person 1',
      id: 1
    }];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve( {
        ok: true,
        json: () => Promise.resolve(mockPeopleResponse)
      })
    })
  });

  it('fetchPeople should be called with correct params', () => {
    const expected = ['https://swapi.co/api/people/'];
    fetchPeople();
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  })

  it('fetchPeople should return a parsed response is status if ok', async () =>{
    const result = await fetchPeople();
    fetchPeople()
    expect(result).toEqual(mockPeopleResponse)
  })

  it('fetchPeople should return error if status is not ok', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve( {
        ok: false,
      })
    })
    await expect(fetchPeople()).rejects.toEqual(Error('Error fetching people'))
  })
})

describe('fetchPlanets', () => {
  let mockPlanetsResponse
  beforeEach( () => {
    mockPlanetsResponse = [
      {title: 'planet 1',
      id: 1
    }];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve( {
        ok: true,
        json: () => Promise.resolve(mockPlanetsResponse)
      })
    })
  });

  it('fetchPlanets should be called with correct params', () => {
    const expected = ['https://swapi.co/api/planets/'];
    fetchPlanets();
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  })

  it('fetchPlanets should return a parsed response is status if ok', async () =>{
    const result = await fetchPeople();
    fetchPlanets()
    expect(result).toEqual(mockPlanetsResponse)
  })

  it('fetchPlanets should return error if status is not ok', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve( {
        ok: false,
      })
    })
    await expect(fetchPlanets()).rejects.toEqual(Error('Error fetching planets'))
  })
})

describe('fetchVehicles', () => {
  let mockVehiclesResponse
  beforeEach( () => {
    mockVehiclesResponse = [
      {title: 'vehicle 1',
      id: 1
    }];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve( {
        ok: true,
        json: () => Promise.resolve(mockVehiclesResponse)
      })
    })
  });

  it('fetchVehicles should be called with correct params', () => {
    const expected = ['https://swapi.co/api/vehicles/'];
    fetchVehicles();
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  })

  it('fetchVehicles should return a parsed response is status if ok', async () =>{
    const result = await fetchPeople();
    fetchVehicles()
    expect(result).toEqual(mockVehiclesResponse)
  })

  it('fetchVehicles should return error if status is not ok', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve( {
        ok: false,
      })
    })
    await expect(fetchVehicles()).rejects.toEqual(Error('Error fetching vehicles'))
  })
})