import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.css";

let scrollLockCount = 0;
let lockedScrollY = 0;
let previousBodyStyles = null;
let previousHtmlOverflow = null;

function lockScroll() {
    if (typeof document === "undefined") return;

    if (scrollLockCount === 0) {
        const body = document.body;
        const html = document.documentElement;

        previousBodyStyles = {
            overflow: body.style.overflow,
            position: body.style.position,
            top: body.style.top,
            left: body.style.left,
            right: body.style.right,
            width: body.style.width,
            paddingRight: body.style.paddingRight,
        };
        previousHtmlOverflow = html.style.overflow;

        lockedScrollY = window.scrollY || window.pageYOffset || 0;

        const scrollbarWidth = window.innerWidth - html.clientWidth;
        if (scrollbarWidth > 0) {
            body.style.paddingRight = `${scrollbarWidth}px`;
        }

        // Freeze background scroll reliably (incl. mobile browsers)
        html.style.overflow = "hidden";
        body.style.overflow = "hidden";
        body.style.position = "fixed";
        body.style.top = `-${lockedScrollY}px`;
        body.style.left = "0";
        body.style.right = "0";
        body.style.width = "100%";
    }

    scrollLockCount += 1;
}

function unlockScroll() {
    if (typeof document === "undefined") return;

    scrollLockCount = Math.max(0, scrollLockCount - 1);
    if (scrollLockCount > 0) return;

    const body = document.body;
    const html = document.documentElement;

    if (previousBodyStyles) {
        body.style.overflow = previousBodyStyles.overflow;
        body.style.position = previousBodyStyles.position;
        body.style.top = previousBodyStyles.top;
        body.style.left = previousBodyStyles.left;
        body.style.right = previousBodyStyles.right;
        body.style.width = previousBodyStyles.width;
        body.style.paddingRight = previousBodyStyles.paddingRight;
    } else {
        body.style.overflow = "";
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        body.style.width = "";
        body.style.paddingRight = "";
    }

    html.style.overflow = previousHtmlOverflow ?? "";
    previousBodyStyles = null;
    previousHtmlOverflow = null;

    window.scrollTo(0, lockedScrollY);
}

const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    size = "md",
    showHeader = true,
}) => {
    useEffect(() => {
        if (!isOpen) return undefined;
        lockScroll();
        return () => unlockScroll();
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="common-modal-overlay">
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className={`modal-container modal-size-${size}`}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                    >
                        <div className="modal-content glass-card">
                            {showHeader && (
                                <div className="modal-header">
                                    {title && <h3 className="modal-title">{title}</h3>}
                                    <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                                        <Icon icon="lucide:x" />
                                    </button>
                                </div>
                            )}
                            <div className="modal-body">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
