#!/usr/bin/env python3
"""pymongo module"""


def insert_school(mongo_collection, **kwargs):
    """create a new doc with kwargs data and return its id

    Args:
        mongo_collection (Collection): mongo collection

    Returns:
        int: new id's document
    """
    new = mongo_collection.insert_one(kwargs)
    return new.inserted_id
