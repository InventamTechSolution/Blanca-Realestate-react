import React, { createContext, useContext, useState } from "react";

const ContactModalContext = createContext();

export const ContactModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [thankYouContent, setThankYouContent] = useState({
    title: "Thank You",
    message:
      "Thank you for reaching out! We’ve received your details and a Blanca representative will get in touch with you shortly to discuss your requirements.",
  });

  const openContactModal = (data = null) => {
    setModalData(data);
    setIsOpen(true);
  };

  const closeContactModal = () => {
    setIsOpen(false);
    setModalData(null);
  };

  const openThankYouModal = (content) => {
    if (content?.title || content?.message) {
      setThankYouContent((prev) => ({
        title: content?.title ?? prev.title,
        message: content?.message ?? prev.message,
      }));
    }
    setIsThankYouOpen(true);
  };

  const closeThankYouModal = () => setIsThankYouOpen(false);

  return (
    <ContactModalContext.Provider
      value={{
        isOpen,
        modalData,
        openContactModal,
        closeContactModal,
        isThankYouOpen,
        thankYouContent,
        openThankYouModal,
        closeThankYouModal,
      }}
    >
      {children}
    </ContactModalContext.Provider>
  );
};

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error(
      "useContactModal must be used within a ContactModalProvider",
    );
  }
  return context;
};
