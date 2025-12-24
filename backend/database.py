from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME")

if not MONGO_URI or not DB_NAME:
    raise Exception("MongoDB environment variables not set")

client = MongoClient(MONGO_URI)
db = client[DB_NAME]

print("Connected to DB:", DB_NAME)

career_collection = db["career_applications"]
contact_collection = db["contact_msg"]
job_applications = db["job_applications"]
