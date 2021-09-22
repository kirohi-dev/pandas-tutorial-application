from fastapi import FastAPI

from .framework.router import router

app = FastAPI()

app.include_router(router)
