from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Barakah Hideworks Python Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


@app.get("/health")
def health():
    return {
        "status": "ok",
        "message": "Barakah Hideworks Python service is running",
        "stack": "Python + FastAPI",
    }


@app.post("/ai/chat")
def ai_chat(payload: ChatRequest):
    message = payload.message.strip()

    reply = (
        f"Thanks for your question about '{message}'. "
        "Our leather experts recommend checking product care guides and size charts before ordering."
    )

    return {"reply": reply, "source": "python-ai-service"}


@app.get("/analytics/summary")
def analytics_summary():
    return {
        "totalOrders": 128,
        "totalRevenue": 485000,
        "topCategory": "Wallets",
        "conversionRate": 3.8,
        "source": "python-analytics-service",
    }
