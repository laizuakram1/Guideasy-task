import React from 'react';
import {IoIosArrowDown} from 'react-icons/io'
import '../components/SearchCard.css'

const SearchCard = () => {
  return (
    <div className='bg-base-200'>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="w-full">
          <div className="stats shadow cursor-pointer">
            
            {/* from state */}
            <div className="stat w-80 h-36 text-left transition ease-in duration-400">
              <div className="stat-title">From</div>
              <div className="stat-value font-bold">Delhi</div>
              <div className="stat-desc">DEL,Delhi airport india</div>
            </div>

            {/* to state */}
            <div className="stat w-80 h-36 text-left transition ease-in duration-400">
              <div className="stat-title">To</div>
              <div className="stat-value font-bold">Bengaluru</div>
              <div className="stat-desc">BLR,Bengaluru internation airport...</div>
            </div>

              {/* Deparature */}
            <div className="stat text-left transition ease-in duration-400">
              <div className="stat-title">Deparature <IoIosArrowDown className='inline text-blue-400 text-xl font-bold'/></div>
              <div className="stat-value font-bold">13 <span className='text-2xl font-medium'>May'23</span></div>
              <div className="stat-desc">Saturday</div>
            </div>

             {/* Return */}
            <div className="stat text-left transition ease-in duration-400">
              <div className="stat-title">Return <IoIosArrowDown className='inline text-blue-400 text-xl font-bold'/></div>
              <p className='w-36 font-medium text-sm text-gray-400'>Tap to add a return date for bigger discount</p>
              {/* <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div> */}
            </div>

              {/* travellers and class */}
            <div className="stat text-left">
              <div className="stat-title">Travellers & Class <IoIosArrowDown className='inline text-blue-400 text-xl font-bold'/></div>
              <div className="stat-value font-bold">1 <span className='text-2xl font-medium'>Traveller</span></div>
              <div className="stat-desc">Economy/Premium Economy</div>
            </div>
        </div>
        {/* state end here */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
