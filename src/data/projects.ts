export interface Project {
  id: string
  title: string
  category: string
  shortDescription: string
  cardTags: readonly string[]
  overview: string
  highlights: readonly string[]
  technologies: readonly string[]
  image: string
  imageWidth: number
  imageHeight: number
  imageAlt: string
  github: string
}

// Approved V2.0 copy; shared data is ready for future gallery reuse.
export const featuredProjects: readonly Project[] = [
  {
    "id": "terragpt",
    "title": "TerraGPT — Smart Farming Assistant",
    "category": "Generative AI · LLM Applications",
    "shortDescription": "A tool-first agricultural AI assistant combining soil databases, live weather information, and locally hosted LLMs to deliver contextual crop, soil, and farming recommendations.",
    "cardTags": [
      "Python",
      "Ollama",
      "Gradio",
      "SQLite",
      "LLMs"
    ],
    "overview": "Built an agricultural AI assistant using locally hosted Mistral and LLaMA-2 models, combining soil and crop databases, real-time weather information, and tool-based query routing to deliver context-aware farming guidance through a Gradio interface.",
    "highlights": [
      "**Tool-First Routing:** Developed routing across SQLite agricultural data, weather APIs, and LLM-generated responses.",
      "**Local LLM Integration:** Integrated Ollama-hosted language models with domain-focused prompting and response caching.",
      "**Results & Optimization:** Reported approximately **70% structured-tool query handling** and **30–40% lower response latency** through caching in project testing."
    ],
    "technologies": [
      "Python",
      "Ollama",
      "Mistral",
      "LLaMA-2",
      "Gradio",
      "SQLite",
      "APIs"
    ],
    "image": "images/terragpt-dashboard.png",
    "imageWidth": 1672,
    "imageHeight": 941,
    "imageAlt": "Conceptual TerraGPT Smart Farming Assistant interface illustrating crop recommendations, soil information, weather data, and locally hosted language model options.",
    "github": "https://github.com/bhargava-suryadevara/TerraGPT--Smart-Farming-Assistant"
  },
  {
    "id": "autonomous-driving",
    "title": "End-to-End Autonomous Driving using PPO",
    "category": "Reinforcement Learning · Autonomous Systems",
    "shortDescription": "Developed a PPO-based autonomous driving agent using actor–critic reinforcement learning, visual observations, and curriculum-based training to improve vehicle control in CARLA simulation.",
    "cardTags": [
      "Python",
      "PyTorch",
      "PPO",
      "CARLA",
      "TensorBoard"
    ],
    "overview": "Developed the PPO reinforcement learning framework for a collaborative autonomous driving system in CARLA, implementing actor–critic networks to learn steering, throttle, and braking from visual observations. The project incorporated curriculum learning, reward shaping, and VAE-based visual representation experiments to improve training stability and driving performance.",
    "highlights": [
      "**PPO & Actor–Critic Development:** Implemented policy/value networks, Gaussian action distributions, GAE, and PPO optimization with mini-batch updates and entropy regularization.",
      "**Training & Integration:** Developed rollout collection, image/VAE-feature preprocessing, checkpoints, and monitoring workflows, integrating the agent with CARLA simulation.",
      "**Evaluation & Results:** Evaluated approximately **1,200 training episodes**, observing increased rewards and driving distance, with notable improvement after roughly **700 episodes**."
    ],
    "technologies": [
      "Python",
      "PyTorch",
      "CARLA",
      "PPO",
      "Actor–Critic",
      "GAE",
      "VAE",
      "NumPy",
      "TensorBoard"
    ],
    "image": "images/autonomous-driving-ppo.jpg",
    "imageWidth": 1426,
    "imageHeight": 767,
    "imageAlt": "CARLA autonomous driving simulator showing a vehicle navigating an urban road with PPO evaluation telemetry, route progress, vehicle controls, and lane-deviation measurements.",
    "github": "https://github.com/bhargava-suryadevara/End-to-End-Autonomous-Driving-using-Proximal-Policy-Optimization"
  },
  {
    "id": "image-deblurring",
    "title": "Deep Learning for Image Deblurring",
    "category": "Deep Learning · Computer Vision",
    "shortDescription": "Developed and optimized a U-Net image-restoration pipeline on the GoPro dataset, evaluating model capacity, training duration, and loss functions to improve motion-deblurring quality.",
    "cardTags": [
      "Python",
      "PyTorch",
      "U-Net",
      "OpenCV",
      "SSIM"
    ],
    "overview": "Developed a deep learning pipeline to restore motion-blurred images using a U-Net encoder–decoder architecture trained on the GoPro dataset. Conducted systematic experiments with network capacity, training duration, and combined pixel-level and structural-similarity loss functions to improve reconstruction quality.",
    "highlights": [
      "**Model Development:** Implemented U-Net image restoration with encoder–decoder layers, skip connections, and paired blurred/sharp image preprocessing.",
      "**Training & Optimization:** Compared 32- and 64-channel architectures, 30- and 50-epoch training, and loss functions including L1 + SSIM and Charbonnier + SSIM.",
      "**Evaluation & Results:** Achieved **26.09 dB PSNR and 0.7762 SSIM**, improving over the baseline by **0.48 dB PSNR and 0.0135 SSIM** across the reported experiments."
    ],
    "technologies": [
      "Python",
      "PyTorch",
      "U-Net",
      "CNNs",
      "OpenCV",
      "NumPy",
      "Pillow",
      "PSNR",
      "SSIM"
    ],
    "image": "images/image-deblurring-comparison.jpeg",
    "imageWidth": 776,
    "imageHeight": 260,
    "imageAlt": "Side-by-side image deblurring comparison showing a motion-blurred input, restored image produced by a U-Net model, and corresponding ground-truth sharp image.",
    "github": "https://github.com/bhargava-suryadevara/Deep-Learning-Approaches-for-Image-Deblurring-A-U-Net-vs.-MPRNet-Study-on-the-GoPro-Benchmark"
  }
]

// Approved All Projects-only records; the first three reuse featuredProjects.
const remainingProjects: readonly Project[] = [
  {
    "id": "event-correlation-soc",
    "title": "Event Correlation SOC — Agentic AI",
    "category": "Agentic AI · Cybersecurity",
    "shortDescription": "Developed an AI-assisted Security Operations Center platform combining LLM-powered threat detection, multi-event incident correlation, and Neo4j knowledge graphs to investigate suspicious activity across authentication and network logs.",
    "cardTags": [
      "Python",
      "LLM Agents",
      "Neo4j",
      "Docker",
      "Streamlit"
    ],
    "overview": "Developed core AI detection, event correlation, and graph integration components for a collaborative AI-assisted Security Operations Center (SOC). The system analyzes authentication and network/IDS logs using LLM-powered detection agents, correlates related security events into structured incidents, and maps relationships between users, hosts, IP addresses, and threats in Neo4j to support security investigations.",
    "highlights": [
      "**Agentic Threat Detection:** Built Python-based LLM agents using OpenAI/Groq-compatible APIs to identify suspicious behaviors, generate structured detections, and assign severity and confidence information.",
      "**Event Correlation & Knowledge Graphs:** Implemented entity- and time-window-based correlation to connect related alerts into multi-stage incidents, with Neo4j graph integration for security relationship analysis.",
      "**Evaluation & Performance:** Achieved **0.092 ms mean correlation latency** in a controlled small-sample benchmark and separately validated workflows using synthetic datasets of up to **130,000 security records**."
    ],
    "technologies": [
      "Python",
      "OpenAI / Groq",
      "Neo4j",
      "Cypher",
      "Docker",
      "Streamlit",
      "pytest",
      "LLM Agents"
    ],
    "image": "images/event-correlation-soc.jpeg",
    "imageWidth": 1166,
    "imageHeight": 876,
    "imageAlt": "Event Correlation SOC dashboard showing authentication and network log ingestion, security analysis pipeline, threat feed, investigation severity distribution, and asset overview.",
    "github": "https://github.com/bhargava-suryadevara/Event-Correlation-SOC"
  },
  {
    "id": "bitcoin-forecasting",
    "title": "Bitcoin Price Forecasting using Prophet",
    "category": "Machine Learning · Time-Series Forecasting",
    "shortDescription": "Built an end-to-end Bitcoin forecasting application using Prophet, historical price data, feature engineering, and a Flask interface with interactive predictions and trend visualizations.",
    "cardTags": [
      "Python",
      "Prophet",
      "Pandas",
      "Flask",
      "Plotly"
    ],
    "overview": "Developed an end-to-end Bitcoin price forecasting application using Prophet to model historical market trends and seasonality. Integrated data preprocessing, feature engineering, and forecasting into a Flask web application that allows users to select dates, generate price predictions, and explore interactive Plotly visualizations.",
    "highlights": [
      "**Data Engineering & Modeling:** Prepared historical Bitcoin data using Python, Pandas, and Hadoop, implementing Prophet models with engineered seasonality and market-related features.",
      "**Forecasting & Evaluation:** Conducted rolling cross-validation across **30+ evaluation windows**, comparing Prophet with ARIMA and baseline forecasting approaches using RMSE and MAPE.",
      "**Optimization & Web Application:** Achieved a **35% relative reduction in MAPE versus the baseline** and integrated the forecasting model with Flask and interactive Plotly predictions."
    ],
    "technologies": [
      "Python",
      "Prophet",
      "Hadoop",
      "Pandas",
      "NumPy",
      "Flask",
      "Plotly",
      "ARIMA",
      "RMSE / MAPE"
    ],
    "image": "images/bitcoin-prophet-forecast.png",
    "imageWidth": 831,
    "imageHeight": 501,
    "imageAlt": "Bitcoin price forecasting visualization showing Prophet model predictions, projected trends, uncertainty intervals, and time-series seasonality analysis.",
    "github": "https://github.com/bhargava-suryadevara/Time-Series-Analysis-For-Bitcoin-Price-Prediction-using-Prophet"
  },
  {
    "id": "defect-detection",
    "title": "Intelligent Defect Detection",
    "category": "Deep Learning · Computer Vision",
    "shortDescription": "Developed and evaluated YOLOv8 and Swin Transformer-based object detection models for identifying wood-surface defects, improving recognition of small and overlapping flaws in manufacturing quality inspection.",
    "cardTags": [
      "Python",
      "PyTorch",
      "YOLOv8",
      "Swin Transformer",
      "OpenCV"
    ],
    "overview": "Developed and evaluated an AI-based manufacturing defect detection system using YOLOv8 and a Swin Transformer-enhanced architecture. Trained and compared models on annotated wood-surface images to identify cracks, knots, discoloration, and other defects, with emphasis on improving detection of small and overlapping flaws.",
    "highlights": [
      "**Model Development:** Implemented YOLOv8 and Swin Transformer-enhanced detection workflows to compare convolutional and attention-based feature extraction.",
      "**Data Processing & Training:** Prepared approximately **4,000 wood-defect images** across eight annotated classes, using dataset splitting, augmentation, and GPU-based model training.",
      "**Evaluation & Results:** Evaluated YOLOv8 against Swin-YOLOv8 on a wood-defect dataset, improving **mAP@0.5 from 86.0% to 94.2% (+8.2 percentage points)**, with stronger detection of small and overlapping surface defects."
    ],
    "technologies": [
      "Python",
      "PyTorch",
      "YOLOv8",
      "Swin Transformer",
      "Ultralytics",
      "timm",
      "Albumentations",
      "Torchvision",
      "mAP / Precision / Recall"
    ],
    "image": "images/intelligent-defect-detection.jpg",
    "imageWidth": 2800,
    "imageHeight": 1024,
    "imageAlt": "Wood-surface defect detection example showing annotated Live Knot and Resin regions with bounding boxes and confidence scores.",
    "github": "https://github.com/bhargava-suryadevara/INTELLIGENT-DEFECT-DETECTION"
  },
  {
    "id": "toxicity-detection",
    "title": "AI-Powered Toxicity Detection",
    "category": "NLP · Deep Learning",
    "shortDescription": "Built and evaluated deep learning models for multi-label toxic comment classification, comparing fine-tuned BERT, recurrent neural networks, and hybrid architectures across six toxicity categories.",
    "cardTags": [
      "Python",
      "BERT",
      "PyTorch",
      "TensorFlow",
      "Hugging Face"
    ],
    "overview": "Developed a multi-label NLP classification system to identify toxic language in online comments using deep learning and transformer-based architectures. Compared LSTM, BiLSTM, GRU, CNN-LSTM, and fine-tuned BERT models on the Kaggle Toxic Comment dataset, addressing text preprocessing, class imbalance, and model evaluation across six toxicity categories.",
    "highlights": [
      "**NLP Model Development:** Implemented and compared LSTM, BiLSTM, GRU, CNN-LSTM, and fine-tuned BERT architectures for multi-label comment classification.",
      "**Data Processing & Optimization:** Worked with **159,571 labeled comments** across six toxicity categories, applying text cleaning, tokenization, regularization, and class-imbalance handling techniques.",
      "**Evaluation & Results:** Evaluated architectures using F1-score, exact-match accuracy, and ROC-AUC. Fine-tuned BERT achieved a **0.9920 validation mean ROC-AUC at epoch 2**, delivering the strongest reported discrimination among the tested models, with subsequent validation trends indicating early overfitting."
    ],
    "technologies": [
      "Python",
      "BERT",
      "LSTM / BiLSTM",
      "GRU",
      "CNN-LSTM",
      "PyTorch",
      "TensorFlow / Keras",
      "Hugging Face",
      "Scikit-learn"
    ],
    "image": "images/ai-toxicity-detection.png",
    "imageWidth": 1672,
    "imageHeight": 941,
    "imageAlt": "Conceptual AI-Powered Toxicity Detection infographic illustrating BERT and recurrent-model comparisons, six toxicity categories, and multi-label classification.",
    "github": "https://github.com/bhargava-suryadevara/Toxic-Comment-Detection-for-Online-Platforms-BERT-RNN-"
  },
  {
    "id": "box-office",
    "title": "Box Office Revenue & Movie Success Prediction",
    "category": "Machine Learning · Predictive Analytics",
    "shortDescription": "Developed classification and regression pipelines for movie-success categorization and box-office revenue estimation, comparing ensemble ML models with engineered financial, popularity, and movie metadata features.",
    "cardTags": [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "Pandas"
    ],
    "overview": "Developed machine learning workflows to classify movie success and estimate box-office revenue using movie metadata, audience ratings, and financial indicators. Performed exploratory analysis, feature engineering, and comparative evaluation across linear, tree-based, and gradient-boosting models.",
    "highlights": [
      "**Data Engineering & Feature Analysis:** Processed movie metadata, engineered budget, popularity, genre, and audience-rating features, and identified a **0.71 correlation between budget and revenue** in exploratory analysis.",
      "**Machine Learning Development:** Compared **six classification algorithms**, including Logistic Regression, Random Forest, XGBoost, LightGBM, SVC, and CatBoost, alongside **four regression approaches** for revenue estimation.",
      "**Evaluation & Results:** Achieved **98% reported classification accuracy** with LightGBM and CatBoost, compared with **93% for Logistic Regression** and **82% for SVC**. Gradient Boosting delivered the lowest reported test RMSE of approximately **$65M** for revenue prediction."
    ],
    "technologies": [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "Matplotlib",
      "Seaborn"
    ],
    "image": "images/box-office-prediction.jpg",
    "imageWidth": 784,
    "imageHeight": 724,
    "imageAlt": "Feature correlation heatmap showing relationships between movie budget, revenue, IMDb ratings, audience votes, popularity, and other movie metadata.",
    "github": "https://github.com/bhargava-suryadevara/Box-Office-Revenue-and-Movie-Success-Prediction"
  }
]

export const allProjects: readonly Project[] = [...featuredProjects, ...remainingProjects]
