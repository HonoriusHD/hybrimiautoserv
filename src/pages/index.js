import React, { useState } from 'react';

import Header from 'components/header';
import ueImage from 'assets/UEinfo.png';
import { ue_text } from 'components/modal/ue_text';

import Hero from 'sections/hero';
import About from 'sections/about';
import Process from 'sections/process';
import Services from 'sections/services';
import Contact from 'sections/contact';
import ContactForm from 'sections/contact-form';
import Footer from 'sections/footer';

import Modal from 'components/modal';

import ImageComponent from 'components/image_component';

import { createContext } from 'react';
export const ModalContext = createContext();

const Home = () => {
  const [isModalVisible, setIsModalVIsible] = useState(' ');

  const handleModalVisibility = () => {
    let modalState = isModalVisible == 'openModal' ? '' : 'openModal';
    setIsModalVIsible(modalState);
  };
  return (
    <main>
      <ModalContext.Provider value={{ handleModalVisibility }}>
        <Modal isModalVisible={isModalVisible}>
          <ImageComponent
            image={ueImage}
            objectFit='contain'
            imageSize='autoHeight'
            alt='Acesta reprezinta informatii cu privire la proiectu UE prin care a fost realizat aceasta afacere'
          />
          {ue_text()}
        </Modal>
        <Header />
        <Hero />
        <About />
        <Services />
        <Process />
        <Contact />
        <ContactForm />
        <Footer />
      </ModalContext.Provider>
    </main>
  );
};

export default Home;
