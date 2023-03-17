import { useEffect, useState } from 'react'

function MapandFilter() {
  const [users, setUsers] = useState([])
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  useEffect(() => {
    fetch("/src/assets/users.json")
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, [])

  const mapUserData = () => {
    let filterData = users.filter((user) => {
      return user.id == 9
    })
    setUsers(filterData)
  }

  const squareNumbers = () => {
    let numbersData = numbers.map((number) => {
      return number * number
    })
    setNumbers(numbersData)
  }

  const mapNumberData = () => {
    let filterData = numbers.filter((filtered) => {
      return filtered <= 50
    })
    setNumbers(filterData)
  }

  const [showUsers, setShowUsers] = useState(true);
  const [showNumbers, setShowNumbers] = useState(true);

  const UsersDiv = () => (
    <div>
      <button onClick={() => setShowUsers(!showUsers)}>
        <h1 className='text-9xl text-violet-600 font-extrabold'>Users</h1>
      </button>
      {
        showUsers ?
          <div className='flex flex-wrap flex-col items-center'>
            <div className='my-20 w-3/4 mx-auto grid grid-cols-3'>
              {users.map((user) => (
                <div className='flex flex-col justify-center items-center border m-2'>
                  <p>{user.name}</p>
                  <p>{user.username}</p>
                </div>
              ))}
            </div>
            <button className='border bg-violet-600 text-xl text-white rounded px-14 py-3'
              onClick={mapUserData}>Filter</button>
          </div>
          : null
      }
    </div>
  )

  const NumbersDiv = () => (
    <div>
      <button onClick={() => setShowNumbers(!showNumbers)}>
        <h1 className='text-9xl text-violet-600 font-extrabold'>Numbers</h1>
      </button>
      {
        showNumbers ?
          <div className='flex flex-wrap flex-col items-center'>
            <div className='my-20 w-3/4 mx-auto grid grid-cols-3'>
              {numbers.map((number) => (
                <div className='flex flex-col justify-center items-center border m-2'>
                  <p>{number}</p>
                </div>
              ))}
            </div>
            <button className='border bg-violet-600 text-xl text-white rounded px-14 py-3'
              onClick={squareNumbers}>Square</button>
            <button className='border bg-violet-600 text-xl text-white rounded px-14 py-3'
              onClick={mapNumberData}>Filter</button>
          </div>
          : null
      }
    </div>
  )

  return (
    <div className='text-center'>
      <UsersDiv />
      <NumbersDiv />
    </div>
  )
}

export default MapandFilter
