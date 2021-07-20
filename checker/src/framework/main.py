from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/checker")
def check_item():
    return {"item_id": item_id, "q": q}
