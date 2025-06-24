# Portfolio Backend (Flask)

## Setup

1. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run locally:
   ```bash
   python app.py
   ```

## API Endpoints

- `/api/projects` - Get all portfolio projects
- `/api/services` - Get available services
- `/api/store` - Get store items
- `/api/blog` - Get blog posts
- `/api/testimonials` - Get client testimonials
- `/api/faqs` - Get frequently asked questions

## Deployment

### Option 1: Render
1. Create a new Web Service
2. Connect your GitHub repo
3. Set build command: `pip install -r requirements.txt`
4. Set start command: `gunicorn app:app`

### Option 2: Railway
1. Create new project
2. Connect your GitHub repo
3. Add Python environment
4. Deploy! 