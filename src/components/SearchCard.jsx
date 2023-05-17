import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {IoIosArrowDown} from 'react-icons/io'
import {TbArrowsExchange} from 'react-icons/tb'
import '../components/SearchCard.css'

const SearchCard = () => {

  const [selected, setSelected] = useState(new Date())
  let selectedDate = <p></p>
  let selectedMonths = <p></p>
  let selectedYear = <p></p>
  let selectedDay = <p></p>
  if(selected){
    selectedDate = <p>{format(selected, 'd')}</p>
    selectedMonths = <p>{format(selected,'MMM')}</p>
    selectedYear = <p>{format(selected,'yy')}</p>
    selectedDay = <p>{format(selected,'eeee')}</p>
    // console.log(selectedDate.props.children)
  }
  return (
    <div className='bg-base-200'>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center relative">
          <div className="w-full">
          <TbArrowsExchange className='arrow-icons'/>
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
              <label className='cursor-pointer' htmlFor="deparature-modal">Deparature <IoIosArrowDown className='inline text-blue-400 text-xl font-bold'/></label>
              {/* <div htmlFor="my-modal-3" className="stat-title">Deparature <IoIosArrowDown className='inline text-blue-400 text-xl font-bold'/></div> */}
              <div className="stat-value font-bold flex"><span className='font-bold'>{selectedDate}</span><span className='text-2xl font-normal flex ml-2'>{selectedMonths}'{selectedYear}</span></div>
              <div className="stat-desc">{selectedDay}</div>
            </div>

             {/* Return */}
            <div className="stat text-left transition ease-in duration-400">
            <label htmlFor="return-modal">Return <IoIosArrowDown className='inline text-blue-400 text-xl font-bold'/></label>
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



      {/* deparature modals */}
      <input type="checkbox" id="deparature-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-3xl">
            <label htmlFor="deparature-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <DayPicker 
              mode='single'
              selected={selected}
              onSelect={setSelected}
              selectedDate={selectedDate}
              numberOfMonths={2}
            />
          </div>
        </div>

        {/* return modals */}
        <input type="checkbox" id="return-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="return-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
            <p className="py-4">You have been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          </div>
        </div>
    </div>
  );
};

export default SearchCard;
