import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "launch-mind",
    title: "Launch Mind",
    shortDescription:
      "AI-assisted product ideation and validation tool (placeholder).",
    technologies: ["Python", "LangChain", "React"],
    githubUrl: "https://github.com/maazehmad/Launch-Mind-Project",
    liveDemoUrl: "https://example.com/launch-mind",
    image: "/images/projects/launch-mind.webp",
    featured: true,
  },
  {
    id: "heart-disease-mlops",
    title: "Heart Disease MLOps Pipeline",
    shortDescription:
      "Full MLOps pipeline for heart disease prediction and monitoring.",
    technologies: ["Python", "scikit-learn", "MLflow", "Docker"],
    githubUrl: "https://github.com/maazehmad/heart-disease-mlops",
    liveDemoUrl: "",
    image: "/images/projects/heart-disease-mlops.webp",
    featured: true,
  },
  {
    id: "data-warehouse-etl",
    title: "Data Warehouse & ETL Pipeline",
    shortDescription:
      "ETL pipeline and data warehouse design for analytics workloads.",
    technologies: ["Python", "Airflow", "PostgreSQL", "Redshift"],
    githubUrl: "https://github.com/maazehmad/data-warehouse-etl-pipeline",
    liveDemoUrl: "",
    image: "/images/projects/data-warehouse-etl.webp",
    featured: true,
  },
  {
    id: "aws-mlops-pipeline",
    title: "AWS MLOps Pipeline",
    shortDescription:
      "End-to-end ML pipeline deployed on AWS using SageMaker and CI/CD.",
    technologies: ["AWS", "SageMaker", "Terraform"],
    githubUrl: "https://github.com/your-username/aws-mlops-pipeline",
    liveDemoUrl: "",
    image: "/images/projects/aws-mlops-pipeline.webp",
    featured: true,
  },
  {
    id: "bi-chatbot",
    title: "Business Intelligence Chatbot",
    shortDescription:
      "Chatbot that answers business intelligence queries over datasets.",
    technologies: ["LangChain", "Python", "FastAPI"],
    githubUrl: "https://github.com/maazehmad/business_chatbot",
    liveDemoUrl: "https://business-llm-tool.onrender.com/",
    image: "/images/projects/bi-chatbot.png",
    featured: true,
  },
  {
    id: "netflix-content-dashboard",
    title: "Netflix Content Analysis Dashboard",
    shortDescription:
      "Dashboard analyzing streaming content trends and insights.",
    technologies: ["Python", "Pandas", "Plotly", "Dash"],
    githubUrl: "https://github.com/maazehmad/netflix-dashboard",
    liveDemoUrl: "https://d3-dashboard.onrender.com/",
    image: "/images/projects/netflix-dashboard.png",
    featured: true,
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation System",
    shortDescription:
      "Hybrid content + collaborative filtering recommendation engine.",
    technologies: ["Python", "scikit-learn", "Surprise"],
    githubUrl: "https://github.com/maazehmad/movie-recommendation-system",
    liveDemoUrl: "https://movie-recommendation-system-ul6f.onrender.com/",
    image: "/images/projects/movie-recommendation.png",
    featured: true,
  },
];
