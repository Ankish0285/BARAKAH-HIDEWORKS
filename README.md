# Barakah Hideworks

E-commerce platform built with **React**, **Node.js**, and **Python**.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React + Vite + React Router |
| Backend API | Node.js + Express + MongoDB |
| AI & Analytics | Python + FastAPI |

## Project Structure

```
barakah hideworks/
├── frontend/          # React app
│   └── src/
│       ├── pages/
│       ├── components/
│       ├── services/    # API calls (Node + Python via Node)
│       └── ...
└── backend/
    ├── server.js        # Node.js entry
    ├── routes/          # Express routes
    ├── models/          # MongoDB models
    ├── database/        # DB connection & seeds
    ├── controllers/
    └── python/          # Python FastAPI service
        ├── main.py
        └── requirements.txt
```

## Getting Started

### 1. Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

Runs at http://localhost:3000

### 2. Backend (Node.js)

```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

Runs at http://localhost:5000

### 3. Python Service (AI & Analytics)

```bash
cd backend/python
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Runs at http://localhost:8000

## How They Connect

```
React (3000)  →  Node API (5000)  →  Python (8000)
                     ↓
                 MongoDB
```

- React calls Node at `/api/*`
- Node handles auth, products, orders, cart, etc.
- Node forwards AI chat & analytics to Python service
- MongoDB stores all data via Mongoose models

## API Endpoints

**Node.js (`/api`)**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | API health check |
| GET | `/products` | All products |
| GET | `/products/:id` | Single product |
| GET | `/products/search?q=` | Search products |
| GET | `/categories` | All categories |
| GET | `/categories/:slug/products` | Products by category |
| POST | `/auth/login` | Login |
| POST | `/auth/register` | Register |
| POST | `/auth/otp` | Verify OTP |
| POST | `/auth/forgot-password` | Reset password |
| GET | `/orders` | All orders |
| POST | `/orders` | Place order |
| GET | `/orders/track/:id` | Track order |
| GET | `/offers` | All coupons |
| POST | `/coupons/validate` | Validate coupon |
| GET | `/reviews` | All reviews |
| POST | `/ai/chat` | AI assistant |
| GET | `/ai/analytics/summary` | Analytics |

**Python (`/`)**
- `GET /health` — Python service health
- `POST /ai/chat` — AI responses
- `GET /analytics/summary` — Sales analytics

> Without MongoDB, Node API uses in-memory mock data automatically.

## Features

- Shop, categories, products, search
- Cart, checkout, payment, wishlist
- User accounts & authentication
- Order tracking & reviews
- Admin dashboard
- AI assistant (Python)
- Analytics (Python)
