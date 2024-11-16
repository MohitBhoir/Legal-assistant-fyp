import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function RegTemplate() {

  const features = [
    {
      image: '../public/images/will.png', // Replace with actual image URLs
      heading: 'Will Aggrement',
      buttonText: 'Get Started',
      link: 'will'
    },
    {
      image: '../public/images/lease.png',
      heading: 'Lease',
      buttonText: 'Get Started',
      link: 'lease'
    },
    {
      image: '../public/images/name.png',
      heading: 'Name Change',
      buttonText: 'Get Started',
      link: 'name-change'
    },
    {
      image: '../public/images/property.png',
      heading: 'Property',
      buttonText: 'Get Started',
      link: 'property'
    },
  ];

  return (
    <section className="w-full h-full dark:bg-gray-900 justify-center flex flex-col ">
  <div className="mt-16 py-8 px-4 mx-auto max-w-screen-4xl text-center lg:py-16 ">
    <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-teal-100">
      Explore Our Features
    </h1>
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${features.length % 4} gap-10 sm:h-auto lg:h-[350px] lg:w-[80rem]`}>
      {features.map((feature, index) => (
        <div
          key={index}
          className="justify-center flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 "
        >
          <img
            src={feature.image}
            alt={feature.heading}
            className="mb-4 w-full h-36 object-contain rounded-lg"
          />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {feature.heading}
          </h3>
          <Link to={`/find-template/${feature.link}`}>
            <button
              className="btn btn-accent inline-flex justify-center items-center py-2 px-4 mt-4 text-base font-medium text-gray-900 font-semibold rounded-lg"
            >
              {feature.buttonText}
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
