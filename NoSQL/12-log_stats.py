#!/usr/bin/env python3
"""pymongo module"""

from pymongo import MongoClient


client = MongoClient('mongodb://127.0.0.1:27017')
nginx_coll = client.logs.nginx

all_logs = nginx_coll.count_documents({})
path_status = nginx_coll.count_documents({"path": "/status"})
methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
nginx_counter = nginx_coll.count_documents

print(all_logs, 'logs')
print('Methods:')
for method in methods:
    print(f"\tmethod {method}:", nginx_counter({"method": method}))
print(path_status, "status check")
