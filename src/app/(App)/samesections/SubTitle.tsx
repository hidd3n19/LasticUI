import React from 'react';

type SubtitleProps = {
  subtitle: string
  buttonText?: string;
  onClick?: () => void
  disabled?: boolean
}

const Subtitle: React.FC<SubtitleProps> = ({ subtitle, buttonText, onClick, disabled}) => {
  return (
    <section className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8 flex flex-row justify-between pb-2">
      <h2 className="font-unbounded uppercase font-bold py-2 px-5 text-xl md:text-1xl xl:text-2xl">
        {subtitle}
      </h2>
      {buttonText && 
      <button
      onClick={onClick}
      disabled={disabled}
      className={`${disabled ? 'bg-gray-2 text-gray-14 cursor-not-allowed' : 'bg-pink-3 hover:bg-pink-4 text-black cursor-pointer'} font-unbounded uppercase font-black rounded-2xl   border border-gray-8 text-base inline-flex items-center justify-center px-12 py-3 mr-3 text-center text-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-3`}
    >
        {buttonText}
        </button>
        }
    </section>
  )
}

export default Subtitle
