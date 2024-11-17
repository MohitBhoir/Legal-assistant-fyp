import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function RegTemplate() {

  const features = [
    {
      image: '../public/images/will.png', // Replace with actual image URLs
      heading: 'Will Agreement',
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
    <section className="w-full h-full dark:bg-gray-900 flex flex-col justify-center">
      <div className="mt-10 py-8 px-6 mx-auto max-w-screen-lg text-center lg:py-14">
        <h1 className="mb-8 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-teal-100  ">
          Explore Our Features
        </h1>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <img
                src={feature.image}
                alt={feature.heading}
                className="mb-5 w-full h-32 object-contain rounded-lg"
              />
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                {feature.heading}
              </h3>
              <Link to={`/find-template/${feature.link}`}>
                <button
                  className="btn btn-accent inline-flex justify-center items-center py-2 px-5 mt-4 text-base font-medium text-gray-900 font-semibold rounded-lg"
                >
                  {feature.buttonText}
                  <svg
                    className="w-4 h-4 ms-2 rtl:rotate-180"
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
