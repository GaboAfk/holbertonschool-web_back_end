#!/usr/bin/env python3
"""pymongo module"""


def update_topics(mongo_collection, name, topics):
    """update a topic in a mongo_collection's document

    Args:
        mongo_collection (Collection): mongo collection
        name (str): name to filter
        topics (list): topic list to update
    """
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
