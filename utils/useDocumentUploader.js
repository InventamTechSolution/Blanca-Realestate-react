import { useState } from "react";
import {
  removeDocument,
  uploadDocument,
} from "../services/documentUploadService";

/** Store API-relative paths like `uploads/documents/...` (not `src/common/...` URLs). */
const normalizeStoredUploadPath = (raw) => {
  if (!raw || typeof raw !== "string") return "";
  let p = raw.trim().replace(/^\/+/, "");
  if (p.startsWith("src/common/")) {
    p = p.slice("src/common/".length);
  }
  return p;
};

export const useDocumentUploader = () => {
  const [isLoading, setIsLoading] = useState(false);

  const uploadFile = async (file) => {
    setIsLoading(true);
    try {
      const response = await uploadDocument(file);
      const fromApi = response?.data?.path ?? "";
      return normalizeStoredUploadPath(fromApi);
    } catch (error) {
      console.error("Failed to upload document:", error);
      return "";
    } finally {
      setIsLoading(false);
    }
  };

  const removeUploadedFile = async (filePath) => {
    if (!filePath) return null;

    setIsLoading(true);
    try {
      const response = await removeDocument(filePath);
      return response;
    } catch (error) {
      console.error("Failed to remove document:", error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    uploadFile,
    removeUploadedFile,
    isLoading,
  };
};
