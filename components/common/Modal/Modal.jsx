import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.css";

let scrollLockCount = 0;
let previousBodyStyles = null;
let previousHtmlOverflow = null;
let previousHtmlScrollBehavior = null;

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
        previousHtmlScrollBehavior = html.style.scrollBehavior;

        const scrollY = window.scrollY || window.pageYOffset || 0;
        body.dataset.modalScrollY = String(scrollY);

        const scrollbarWidth = window.innerWidth - html.clientWidth;
        if (scrollbarWidth > 0) {
            body.style.paddingRight = `${scrollbarWidth}px`;
        }

        // Freeze background scroll reliably (incl. mobile browsers)
        html.style.overflow = "hidden";
        body.style.overflow = "hidden";
        body.style.position = "fixed";
        body.style.top = `-${scrollY}px`;
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

    const restoreScrollY = (() => {
        const fromDataset = body.dataset.modalScrollY;
        if (fromDataset != null && fromDataset !== "") {
            const n = Number(fromDataset);
            if (Number.isFinite(n)) return n;
        }
        const top = body.style.top || "0";
        const parsed = parseInt(top, 10);
        return Number.isFinite(parsed) ? Math.abs(parsed) : 0;
    })();

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

    delete body.dataset.modalScrollY;

    // Prevent global `scroll-behavior: smooth` from animating restoration.
    const prevScrollBehavior = previousHtmlScrollBehavior ?? "";
    previousHtmlScrollBehavior = null;
    html.style.scrollBehavior = "auto";

    // Defer until after styles are applied to avoid visual jump.
    window.requestAnimationFrame(() => {
        window.scrollTo(0, restoreScrollY);
        html.style.scrollBehavior = prevScrollBehavior;
    });
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
