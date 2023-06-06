import React, { useState } from "react";

import Header from "components/header";
import Hero from "sections/hero";
import About from "sections/about";
import Process from "sections/process";
import Services from "sections/services";
import Contact from "sections/contact";
import ContactForm from "sections/contact-form";
import Footer from "sections/footer";

import Modal from "components/modal";

import { createContext } from "react";
export const ModalContext = createContext();

const Home = () => {
  const [modalProps, setModalProps] = useState();
  const [isModalVisible, setIsModalVIsible] = useState(" ");

  const handleModalVisibility = () => {
    let modalState = isModalVisible === "openModal" ? "" : "openModal";
    setIsModalVIsible(modalState);
  };

  const updateModal = (obj) => {
    setModalProps(obj);
  };
  return (
    <main>
      <ModalContext.Provider
        value={{
          handleModalVisibility,
          isModalVisible,
          setIsModalVIsible,
          updateModal,
        }}
      >
        <Modal isModalVisible={isModalVisible} children={modalProps} />
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
