'use client'

import Modal from '@/app/(App)/paraId/Modal';
import { ConnectButton } from '@/components/web3/ConnectButton';
import { useInkathon } from '@poppyseed/lastic-sdk';
import { useState } from 'react';
import SubTitle from '../samesections/SubTitle';
import AnalyticSection from './AnalyticSection';
import MyCores from './ParaIdFetch';

const InstaCore = () => {
  const { activeAccount, activeRelayChain } = useInkathon()
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleButtonClick = () => {
    setIsModalOpen(true); // Open modal when button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  if (!activeAccount) {
    return (
      <>
        <SubTitle subtitle="Connect your wallet" />
        <AnalyticSection />
        <section className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8 flex flex-col items-stretch">
          <MyCores />
        </section>
      </>
    )
  }

  return (
    <>
     <SubTitle subtitle={`Para Id Execution on ${activeRelayChain?.name}`} 
     buttonText="Create Para Id"
     onClick={handleButtonClick} />
      {/* Corrected syntax */}
      
      <section className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8 flex flex-col items-stretch">
        <MyCores />
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal}> {/* Render modal */}
        <div className='flex justify-center items-center flex-col'>
          <div>
          <h1 className=' text-center font-unbounded font-bold py-4 px-5 text-xl md:text-1xl xl:text-2xl'>
          Create Para Id 
          </h1>
          </div>

          <div className='text-left  w-4/5'>
            <h3 className='py-2 border-b mx-8 font-sans font-2xl font-bold flex justify-between'>Account:<ConnectButton /></h3>
          
          
            <h3 className='py-2 border-b mx-8 font-sans font-2xl font-bold'>Parachain Id</h3>
            <h3 className='py-2 mx-8 font-2xl font-sans font-bold'>Reserve Deposit</h3>
        </div>
        <button className='font-black rounded-2xl bg-[#fff6ee] border border-gray-8 text-base inline-flex items-center justify-center px-12 py-3 mr-3 text-center text-black hover:bg-primary-800'>
          SUBMIT
        </button>
        </div>
        
      </Modal>
    </>
  )
}

export default InstaCore
