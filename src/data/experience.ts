import type { Experience } from "../types/experience";

export const experience: Experience[] = [
  {
    id: "nescom-awc-fyp",
    company: "NESCOM & AWC",
    role: "Industry-Sponsored Project",
    location: "Islamabad, Pakistan",
    employmentType: "Final Year Project",
    startDate: "2025-08",
    endDate: "2026-05",
    description:
      "Collaborated with NESCOM and AWC on a drone-based real-time infrastructure detection system.",
    highlights: [
      "Designed and implemented aerial object detection pipelines using YOLO and Faster R-CNN, integrating feature-matching techniques for accurate infrastructure identification and localization.",
      "Developed an end-to-end drone video analytics pipeline with CSRT tracking, optimizing deployment on NVIDIA Jetson Orin Nano to achieve approximately 30 FPS real-time inference while reducing latency for embedded edge environments..",
    ],
    technologies: [
      "Computer Vision",
      "Edge Computing",
      "YOLO",
      "Python",
      "TensorFlow",
      "OpenCV",
      "TensorRT Optimization",
    ],
  },
  {
    id: "mentoga-internship",
    company: "MENTOGA",
    role: "Machine Learning Engineering Intern",
    location: "Remote",
    employmentType: "Internship",
    startDate: "2025-07",
    endDate: "2025-08",
    description:
      "Contributed to the development of machine learning solutions, gaining hands-on experience across the complete ML development lifecycle from data preparation to model evaluation.",

    highlights: [
      "Developed and evaluated machine learning models for sentiment analysis and personalized recommendation systems, applying data preprocessing, feature engineering, model training, hyperparameter tuning, and performance evaluation to improve predictive accuracy.",
      "Built end-to-end machine learning pipelines for structured datasets, including data cleaning, exploratory data analysis, feature selection, validation, and model comparison and best practices for reproducible ML workflows.",
    ],

    technologies: [
      "Python",
      "Scikit-Learn",
      "Machine Learning",
      "Feature Engineering",
      "Model Evaluation",
      "Model Deployment",
    ],
  },
];
