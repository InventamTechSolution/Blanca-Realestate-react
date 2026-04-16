"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  ContactModalProvider,
  useContactModal,
} from "@/context/ContactModalContext";
import ScrollToTopOnRouteChange from "@/components/common/ScrollToTopOnRouteChange";

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

function AppShellInner({ children }) {
  const { isOpen } = useContactModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
