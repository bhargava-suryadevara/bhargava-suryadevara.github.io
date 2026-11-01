export interface SkillCategory {
  id: string
  title: string
  skills: readonly string[]
}

// Exact approved Technical Skills V2.2 content, in owner-supplied order.
export const skillCategories: readonly SkillCategory[] = [
  {
    "id": "skills-1",
    "title": "Programming & Backend",
    "skills": [
      "Python",
      "Java",
      "C++",
      "SQL",
      "JavaScript",
      "TypeScript",
      "FastAPI",
      "REST APIs",
      "OOP",
      "Data Structures",
      "Algorithms",
      "Git"
    ]
  },
  {
    "id": "skills-2",
    "title": "Machine Learning & Deep Learning",
    "skills": [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "Hugging Face",
      "BERT",
      "CNNs",
      "Model Evaluation",
      "Feature Engineering"
    ]
  },
  {
    "id": "skills-3",
    "title": "Generative AI & Agents",
    "skills": [
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "LLM Agents",
      "MCP",
      "Tool Calling",
      "Prompt Engineering",
      "Embeddings",
      "Semantic Search",
      "Ollama",
      "Structured Outputs"
    ]
  },
  {
    "id": "skills-4",
    "title": "Computer Vision & Reinforcement Learning",
    "skills": [
      "OpenCV",
      "U-Net",
      "YOLOv8",
      "Swin Transformer",
      "PPO",
      "Actor–Critic",
      "GAE",
      "CARLA",
      "CNN-LSTM",
      "Image Restoration",
      "Reward Shaping",
      "Curriculum Learning"
    ]
  },
  {
    "id": "skills-5",
    "title": "Cloud & MLOps",
    "skills": [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "MLflow",
      "CI/CD",
      "GitHub Actions",
      "Linux",
      "Bash",
      "SageMaker",
      "Model Deployment",
      "Experiment Tracking"
    ]
  },
  {
    "id": "skills-6",
    "title": "Data, Databases & AI Platforms",
    "skills": [
      "Pandas",
      "NumPy",
      "PostgreSQL",
      "SQLite",
      "Neo4j",
      "Cypher",
      "Apache Spark",
      "Hadoop",
      "Dataverse",
      "Microsoft Copilot Studio",
      "Power Automate",
      "Gradio",
      "Microsoft AI Foundry"
    ]
  }
]
