import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "Startup Launcher ",
    title: "Agentic Startup Launch System",
    shortDescription:
      "AI-powered multi-agent platform that automates the end-to-end startup launch process from idea validation to deployment.",
    technologies: ["Python", "LangGraph", "Grok API", "Github API"],
    githubUrl: "https://github.com/maazehmad/Launch-Mind-Project",
    liveDemoUrl: "https://example.com/launch-mind",
    image: "/images/projects/launch-mind.webp",
    featured: true,
  },
  {
    id: "End-to-End MLOps Pipeline for Heart Disease Prediction",
    title: "End-to-End MLOps Pipeline for Heart Disease Prediction",
    shortDescription:
      "Production-ready MLOps pipeline with experiment tracking, Docker, FastAPI, and real-time model monitoring.",
    technologies: ["Docker", "MLflow", "Prometheus", "Grafana"],
    githubUrl: "https://github.com/maazehmad/heart-disease-mlops",
    liveDemoUrl: "",
    image: "/images/projects/heart-disease-mlops.webp",
    featured: true,
  },
  {
    id: "data-warehouse-etl",
    title: "Data Warehouse & ETL Pipeline",
    shortDescription:
      "Designed a scalable data warehouse with automated ETL pipelines for analytics, reporting, and business intelligence.",
    technologies: ["MYSQL", "ETL", "Dimensional Modeling"],
    githubUrl: "https://github.com/maazehmad/data-warehouse-etl-pipeline",
    liveDemoUrl: "",
    image: "/images/projects/data-warehouse-etl.webp",
    featured: true,
  },
  {
    id: "aws-mlops-pipeline",
    title: "MLOPs Pipeline on AWS",
    shortDescription:
      "Built and deployed a cloud-based machine learning pipeline on AWS with automated training, versioning, and model management.",
    technologies: ["AWS ec2", "Amazon S3", "Docker", "Scikit-Learn"],
    githubUrl: "https://github.com/your-username/aws-mlops-pipeline",
    liveDemoUrl: "",
    image: "/images/projects/aws-mlops-pipeline.webp",
    featured: true,
  },
  {
    id: "bi-chatbot",
    title: "Business Intelligence Chatbot",
    shortDescription:
      "LLM-powered chatbot that delivers business insights, analysis, and decision support through natural language conversations.",
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
      "Interactive D3.js dashboard visualizing Netflix content trends, genres, ratings, and release patterns.",
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
      "Content-based recommendation engine that generates personalized movie suggestions using feature engineering and cosine similarity.",
    technologies: ["Python", "scikit-learn", "Surprise"],
    githubUrl: "https://github.com/maazehmad/movie-recommendation-system",
    liveDemoUrl: "https://movie-recommendation-system-ul6f.onrender.com/",
    image: "/images/projects/movie-recommendation.png",
    featured: true,
  },
];
