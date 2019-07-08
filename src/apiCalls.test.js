
import  { fetchFilms } from './apiCalls';

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

  it('fetch films should be called with correct params', () => {
    const expected = ['https://swapi.co/api/films/'];
    fetchFilms();
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  })

  it('fetchFilms should return a parsed response is status if ok', async () =>{
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