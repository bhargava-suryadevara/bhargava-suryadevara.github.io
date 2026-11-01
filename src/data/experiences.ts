export interface Experience {
  id: string
  role: string
  organization: string
  dates: string
  subtitle?: string
  location?: string
  shortDescription?: string
  overview?: string
  keyContributions?: readonly string[]
  tags?: readonly string[]
  technicalFocus?: string
  professionalFocus?: string
}

// Verbatim approved copy. ** markers preserve the supplied emphasis.
// Latest owner instruction overrides historical inline expansion: use centered popups.
export const experiences: readonly Experience[] = [
  {
    "id": "riddell",
    "role": "AI Developer Intern",
    "organization": "Riddell",
    "dates": "May 2026 – Present",
    "shortDescription": "Developed enterprise AI agents and intelligent automation workflows using Microsoft Copilot Studio and Microsoft AI Foundry, supporting business decision-making, IT service automation, and enterprise knowledge retrieval. Built SignalGuide to assess ideas against nine licensed software products and improved IT ticket classification by **35%**, reaching **76% accuracy across approximately 8,000 tickets**.",
    "overview": "Developed enterprise AI agents and intelligent automation workflows using Microsoft Copilot Studio and Microsoft AI Foundry, supporting business decision-making, IT service automation, and enterprise knowledge retrieval. Built SignalGuide to assess ideas against nine licensed software products and improved IT ticket classification by **35%**, reaching **76% accuracy across approximately 8,000 tickets**.",
    "keyContributions": [
      "**Enterprise AI Agent Development:** Built SignalGuide using Microsoft Copilot Studio to evaluate business ideas against **nine licensed software products**, assessing product fit, licensing limitations, integration requirements, and implementation risks through structured decision workflows.",
      "**IT Support AI & Classification:** Developed AI-assisted ticket classification and employee self-service workflows using Copilot Studio and Microsoft AI Foundry, incorporating text and screenshot analysis, prompt guardrails, fallback handling, and routing refinements. Improved classification performance by **35%**, achieving **76% accuracy across approximately 8,000 tickets**.",
      "**AI Decision Auditing:** Integrated Microsoft Dataverse to store business submissions, AI recommendations, reasoning summaries, review notes, and exceptions, creating a searchable audit history for AI-assisted assessments.",
      "**Enterprise Graph RAG:** Developed Neo4j knowledge graph structures, Cypher queries, and Python ingestion workflows to connect SAP process information, functional specifications, and related entities. Integrated graph retrieval with Microsoft Copilot Studio through **Model Context Protocol (MCP)**.",
      "**Document & Knowledge Automation:** Built Python workflows to convert SAP functional specification documents into structured Markdown with YAML metadata, validating document identifiers and linking content to Neo4j entities while organizing supporting documentation in SharePoint.",
      "**SAP Integration & Database Prototyping:** Evaluated PostgreSQL with Apache AGE for graph storage and querying, and validated **SAP Cloud ALM** test-management API retrieval in a sandbox environment using REST/JSON workflows. Used Postman for API testing and integration exploration."
    ],
    "tags": [
      "Copilot Studio",
      "Microsoft AI Foundry",
      "Dataverse",
      "Python",
      "Neo4j",
      "MCP"
    ],
    "technicalFocus": "Enterprise AI Agents · Microsoft Copilot Studio · Microsoft AI Foundry · Prompt Engineering · Graph RAG · Neo4j · MCP · SAP Integrations · SharePoint · REST APIs · Postman · Workflow Automation"
  },
  {
    "id": "sjsu-instructional-assistant",
    "role": "Instructional Student Assistant (ISA)",
    "organization": "San José State University · Part-time",
    "dates": "January 2026 – May 2026",
    "subtitle": "CMPE 189-03 — AI, Data Engineering and Ethics",
    "shortDescription": "Supported Dr. Bertin Cordova in administering CMPE 189-03, assisting with coursework management and student academic support for approximately 25 students. Graded assignments, clarified course-related questions, and organized instructor-provided quizzes and assignments in Canvas.",
    "keyContributions": [
      "Graded student assignments for CMPE 189-03, supporting consistent coursework assessment.",
      "Clarified course-related questions and assignment instructions for students throughout the semester.",
      "Organized and published instructor-provided quizzes and assignments in Canvas for a class of approximately 25 students."
    ],
    "professionalFocus": "Academic Support · Communication · Coursework Assessment · Canvas LMS",
    "tags": [
      "Canvas LMS",
      "Assignment Grading",
      "Student Support",
      "Course Administration"
    ],
    "overview": "Supported Dr. Bertin Cordova in administering CMPE 189-03, assisting with coursework management and student academic support for approximately 25 students. Graded assignments, clarified course-related questions, and organized instructor-provided quizzes and assignments in Canvas."
  },
  {
    "id": "sjsu-capstone",
    "role": "AI Security Research — Master's Capstone",
    "organization": "San José State University · Academic Research",
    "dates": "August 2025 – May 2026",
    "shortDescription": "Developed LLM-powered security detection agents, event correlation logic, and Neo4j knowledge graph integration for an AI-assisted Security Operations Center (SOC) platform. The correlation stage achieved **0.092 ms mean latency on a controlled sample benchmark**, while the broader system was tested with synthetic datasets containing up to **130,000 security records**.",
    "overview": "Developed LLM-powered security detection agents, event correlation logic, and Neo4j knowledge graph integration for an AI-assisted Security Operations Center (SOC) platform. The correlation stage achieved **0.092 ms mean latency on a controlled sample benchmark**, while the broader system was tested with synthetic datasets containing up to **130,000 security records**.",
    "keyContributions": [
      "**Agentic Threat Detection:** Developed Python-based LLM detection agents using OpenAI/Groq-compatible APIs to analyze authentication and network/IDS logs, identify suspicious behavioral patterns, and generate structured detections with severity, confidence scores, and supporting event references.",
      "**Event Correlation & Performance:** Implemented entity- and time-window-based correlation logic that links related security detections into multi-stage incidents. The correlation stage achieved **0.092 ms mean latency** on the report's controlled sample benchmark.",
      "**Large-Dataset Validation:** Contributed to system testing with synthetic datasets containing up to **50,000 authentication records and 80,000 network records**, evaluating processing behavior across larger security event volumes.",
      "**Knowledge Graph Integration:** Implemented Neo4j knowledge graph integration to represent and explore relationships among users, hosts, IP addresses, and correlated incidents.",
      "**Testing & Deployment:** Used pytest for functional and integration testing of detection and correlation components, and Docker Compose for local containerized execution and integration with Neo4j."
    ],
    "tags": [
      "Python",
      "OpenAI / Groq",
      "Neo4j",
      "Docker",
      "pytest"
    ],
    "subtitle": "Event Correlation using Agentic AI in Cyber Security",
    "technicalFocus": "Agentic AI · Python · OpenAI/Groq APIs · Event Correlation · Neo4j · Docker Compose · pytest · Security Analytics"
  },
  {
    "id": "augur",
    "role": "AI/ML Engineer",
    "organization": "Augur Talentcare Pvt Ltd · Remote",
    "dates": "June 2022 – May 2024",
    "shortDescription": "Engineered and deployed ML inference services using FastAPI, Docker, and AWS, supporting Scikit-learn, TensorFlow/Keras, and PyTorch models. Improved deployment reliability by reducing environment-related issues by **32%**, while automating release preparation from **3 hours to 45 minutes** and supporting data workflows involving **500K+ records**.",
    "overview": "Engineered and deployed ML inference services using FastAPI, Docker, and AWS, supporting Scikit-learn, TensorFlow/Keras, and PyTorch models. Improved deployment reliability by reducing environment-related issues by **32%**, while automating release preparation from **3 hours to 45 minutes** and supporting data workflows involving **500K+ records**.",
    "keyContributions": [
      "**ML Model Serving:** Built FastAPI-based REST inference services for Scikit-learn, TensorFlow/Keras, and PyTorch models, implementing validated prediction requests, structured responses, and health checks for downstream application integration.",
      "**MLOps & Release Reliability:** Standardized Docker, Git, and CI/CD workflows and established MLflow experiment tracking and model registry practices, reducing environment-related deployment issues by **32%**.",
      "**Data Engineering:** Prepared and validated **500K+ structured records** using Python, SQL, Pandas, NumPy, and Apache Spark to support feature engineering, model validation, and batch inference.",
      "**AWS Deployment Automation:** Automated model packaging and repeat deployment setup using **AWS S3, EC2, SageMaker, Bash, and Docker**, reducing preparation time from **3 hours to 45 minutes**.",
      "**Monitoring & Collaboration:** Supported inference monitoring for latency, prediction errors, and model-quality issues while coordinating releases with **four cross-functional groups** across data science, backend engineering, QA, and delivery."
    ],
    "tags": [
      "Python",
      "FastAPI",
      "Docker",
      "AWS SageMaker",
      "MLflow",
      "CI/CD"
    ],
    "subtitle": "India · ML Model Deployment Pipeline",
    "technicalFocus": "ML Model Serving · MLOps · REST APIs · AWS Deployment · Data Engineering · Model Monitoring · CI/CD"
  },
  {
    "id": "smartinternz",
    "role": "Machine Learning Intern",
    "organization": "SmartInternz · Remote",
    "dates": "May 2023 – August 2023",
    "shortDescription": "Independently developed an end-to-end Bitcoin forecasting application using Hadoop-based data processing, Prophet time-series modeling, and a Flask web interface. Applied feature engineering and rolling cross-validation across 30+ evaluation windows, achieving a **35% reduction in MAPE versus the baseline**.",
    "overview": "Independently developed an end-to-end Bitcoin forecasting application using Hadoop-based data processing, Prophet time-series modeling, and a Flask web interface. Applied feature engineering and rolling cross-validation across 30+ evaluation windows, achieving a **35% reduction in MAPE versus the baseline**.",
    "keyContributions": [
      "**Data Engineering:** Built a historical Bitcoin data preprocessing workflow using Python, Pandas, and Hadoop to prepare time-series data for forecasting.",
      "**Forecasting & Optimization:** Developed Prophet forecasting models and engineered features involving market regimes, seasonality, and calendar effects, achieving a **35% reduction in MAPE versus the baseline**.",
      "**Model Evaluation:** Conducted rolling cross-validation across **30+ evaluation windows**, comparing Prophet with ARIMA and baseline forecasting approaches using RMSE and MAPE.",
      "**Application Development:** Integrated the trained model into a Flask web application with date-based Bitcoin price predictions and interactive Plotly forecast visualizations."
    ],
    "tags": [
      "Python",
      "Prophet",
      "Hadoop",
      "Pandas",
      "Flask",
      "Plotly"
    ],
    "location": "Hyderabad, Telangana, India",
    "technicalFocus": "Time-Series Forecasting · Data Engineering · Feature Engineering · Model Evaluation · Flask Web Development"
  }
]
