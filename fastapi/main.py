from fastapi import FastAPI, Query
import time

app = FastAPI()


@app.get("/")
async def root(sleep: float = Query(0, title="Sleep Duration", description="Time to sleep in seconds before returning the response")):
    """
    Root endpoint that sleeps for the specified duration.
    """
    time.sleep(sleep)
    return {"message": "Hello, World!", "slept_for": sleep}


@app.get("/greet/{name}")
async def greet(name: str, sleep: float = Query(0, title="Sleep Duration", description="Time to sleep in seconds before returning the response")):
    """
    Greeting endpoint that takes a name as a path parameter and optional sleep time.
    """
    time.sleep(sleep)
    return {"message": f"Hello, {name}!", "slept_for": sleep}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
