from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/projects')
def projects():
    return jsonify([
        {"title": "Magnet Agency Website", "description": "Branding, Development", "image": "https://placehold.co/600x400", "case_study": "#"},
        {"title": "Mint Web Design", "description": "Web Design, Landing Page", "image": "https://placehold.co/600x400", "case_study": "#"},
        {"title": "Astra Framer Development", "description": "Web Design, Development", "image": "https://placehold.co/600x400", "case_study": "#"}
    ])

@app.route('/api/services')
def services():
    return jsonify([
        {"title": "Product Design", "description": "Designing user-centered digital experiences."},
        {"title": "Graphic Design", "description": "Transforming ideas into visually striking designs."},
        {"title": "Web Design", "description": "Building visually stunning, responsive websites."},
        {"title": "Framer Development", "description": "Interactive, high-performance websites made easy."}
    ])

@app.route('/api/store')
def store():
    return jsonify([
        {"title": "Magnet Figma & Framer Template", "price": "$29", "image": "https://placehold.co/600x400"},
        {"title": "Saas & Startup Template", "price": "$59", "image": "https://placehold.co/600x400"},
        {"title": "AI Saas Startup Figma Template", "price": "$99", "image": "https://placehold.co/600x400"}
    ])

@app.route('/api/blog')
def blog():
    return jsonify([
        {"title": "Designing Intuitive Dashboards for Teams", "category": "Product Design", "image": "https://placehold.co/400x300", "url": "#"},
        {"title": "Simplifying Checkout Flows for E-commerce", "category": "Product Design", "image": "https://placehold.co/400x300", "url": "#"},
        {"title": "Top 5 Design Trends to Watch in 2025", "category": "Design Trends", "image": "https://placehold.co/400x300", "url": "#"},
        {"title": "Why Sustainability Will Shape Design in 2026", "category": "Design Trends", "image": "https://placehold.co/400x300", "url": "#"},
        {"title": "The Power of Visual Hierarchy in Design", "category": "Design Principles", "image": "https://placehold.co/400x300", "url": "#"},
        {"title": "Why Simplicity is the Key to Great Design", "category": "Design Principles", "image": "https://placehold.co/400x300", "url": "#"}
    ])

@app.route('/api/testimonials')
def testimonials():
    return jsonify([
        {"name": "John Ramesh", "role": "Manager, Jion", "text": "An incredible ability to turn complex ideas into simple, intuitive designs. Working with them was seamless and inspiring!", "image": "https://placehold.co/100x100"},
        {"name": "Ray Wilson", "role": "Design Director", "text": "Their attention to detail and user-focused mindset made all the difference. Our product is now more engaging and easier to use!", "image": "https://placehold.co/100x100"},
        {"name": "Sarah Johnson", "role": "Product Manager, Tech Sphere", "text": "It was a game-changer for our project. Their ability to blend creativity with user-centered design principles resulted in a product our users love.", "image": "https://placehold.co/100x100"}
    ])

@app.route('/api/faqs')
def faqs():
    return jsonify([
        {"question": "What services do you offer?", "answer": "Product design, graphic design, web design, and Framer development."},
        {"question": "What does your design process look like?", "answer": "Discover, ideate, design, test & refine."},
        {"question": "How long does a project typically take?", "answer": "Depends on the scope, but most projects take 2-6 weeks."},
        {"question": "Do you collaborate with developers or teams?", "answer": "Yes, I work with both individual clients and teams."},
        {"question": "How can we start working together?", "answer": "Contact me via the website to schedule an intro call."}
    ])

if __name__ == '__main__':
    app.run(debug=True) 