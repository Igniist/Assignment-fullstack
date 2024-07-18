import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HeroSection openModal={openModal} />
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default App;
