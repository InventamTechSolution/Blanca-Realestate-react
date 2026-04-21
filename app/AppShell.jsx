"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  ContactModalProvider,
  useContactModal,
} from "@/context/ContactModalContext";
import ScrollToTopOnRouteChange from "@/components/common/ScrollToTopOnRouteChange";
import { usePathname } from "next/navigation";

const LiquidFilters = dynamic(() => import("@/components/common/LiquidFilters"));
const FloatingContactButtons = dynamic(
  () =>
    import(
      "@/components/common/FloatingContactButtons/FloatingContactButtons"
    ),
);
const CookieConsent = dynamic(
  () => import("@/components/common/CookieConsent/CookieConsent"),
);

const ContactModal = dynamic(
  () => import("@/components/common/ContactModal/ContactModal"),
  { ssr: false },
);

const ThankYouModal = dynamic(
  () => import("@/components/common/ThankYouModal/ThankYouModal"),
  { ssr: false },
);

function AppShellInner({ children }) {
  const {
    isOpen,
    closeContactModal,
    isThankYouOpen,
    closeThankYouModal,
    thankYouContent,
  } = useContactModal();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    closeContactModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <ScrollToTopOnRouteChange />

      {mounted && (
        <>
          <LiquidFilters />
          <FloatingContactButtons />
          <CookieConsent />
        </>
      )}

      {isOpen ? <ContactModal /> : null}

      <ThankYouModal
        isOpen={isThankYouOpen}
        onClose={closeThankYouModal}
        title={thankYouContent?.title}
        message={thankYouContent?.message}
      />

      {children}
    </>
  );
}

export default function AppShell({ children }) {
  return (
    <ContactModalProvider>
      <AppShellInner>{children}</AppShellInner>
    </ContactModalProvider>
  );
}
