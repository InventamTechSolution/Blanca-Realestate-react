export const BASE_API_URL = import.meta.env.VITE_API_URL;

export const S3_BASE_URL = import.meta.env.VITE_S3_BUCKET_BASE_URL || "";

export const UPLOAD_BASE_URL = BASE_API_URL || "";
  

export const acceptedDocsExtensions = {
  "application/pdf": [".pdf"],
  "application/msword": [".doc"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
    ".docx",
  ],
};

export const PROJECT_STATUS_LABELS = {
    "new-launches": "New Launch",
    "coming-soon": "Coming Soon",
    "on-going": "ONGOING",
    "completed": "Completed",
    "sold-out": "Sold Out",
  };