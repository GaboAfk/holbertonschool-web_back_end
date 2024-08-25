#!/usr/bin/env python3
"""pymongo module"""


def schools_by_topic(mongo_collection, topic):
    """return a list of school having a specific topic

    Args:
        mongo_collection (Collection): mongo collection
        topic (str): topic to find

    Returns:
        cursor: list of school filtred
    """
    return mongo_collection.find({"topics": topic})
