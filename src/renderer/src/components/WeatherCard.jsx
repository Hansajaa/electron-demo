import './WeatherCard.css'
import image from '../assets/weather_icons/03d.png'
import locationImage from '../assets/location-icon.png'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
// import icon01d from '../assets/weather_icons/01d.png'
// import icon01n from '../assets/weather_icons/01n.png'
// import icon02d from '../assets/weather_icons/02d.png'
// import icon02n from '../assets/weather_icons/02n.png'
// import icon03d from '../assets/weather_icons/03d.png'
// import icon03n from '../assets/weather_icons/03n.png'
// import icon04d from '../assets/weather_icons/04d.png'
// import icon04n from '../assets/weather_icons/04n.png'
// import icon09d from '../assets/weather_icons/09d.png'
// import icon09n from '../assets/weather_icons/09n.png'
// import icon10d from '../assets/weather_icons/10d.png'
// import icon10n from '../assets/weather_icons/10n.png'
// import icon11d from '../assets/weather_icons/11d.png'
// import icon11n from '../assets/weather_icons/11n.png'
// import icon13d from '../assets/weather_icons/13d.png'
// import icon13n from '../assets/weather_icons/13n.png'
// import icon50d from '../assets/weather_icons/50d.png'
// import icon50n from '../assets/weather_icons/50n.png'

function WeatherCard(props) {
  const [city, setCity] = useState('Colombo')

  const {register,handleSubmit} = useForm();

  const onSubmit = (data) => {
    setCity(data.search);
  }

  const apiKey = 'ff4b41be54077fc82ce47fc4894362a7';


  return (
    <div>
      {/* input field */}

      <form className="my-0">
        <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            {...register("search")}
            type="search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search city..."
            required
          />
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      {/* weather card */}
      <div class="my-10 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-700 dark:border-gray-700 w-96">
        <p className="font-bold mx-5 my-3">Now</p>
        <div className="flex flex-col">
          <div className="flex">
            <div class="p-5">
              <a href="#">
                <h2 class="mb-2 my-3 text-6xl font-sans tracking-tight text-gray-900 dark:text-white">
                  25 &#8451;
                </h2>
              </a>
            </div>
            <a href="#">
              <img class="rounded-t-lg mx-10 my-0 mb-0" src={image} alt="" width={125} />
            </a>
          </div>

          <div className="mx-5 my-0 mb-5">
            <p className="text-2xl">Broken Clouds</p>
          </div>
          <hr className="w-4/5 mx-auto border-gray-300 opacity-40" />

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <div className="flex flex-col mx-5 my-8 mb-5">
              <div className="flex">
                <img src={locationImage} alt="" />
                <p className="mx-4">{city}</p>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
