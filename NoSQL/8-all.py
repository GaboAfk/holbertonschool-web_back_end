#!/usr/bin/env python3
"""pymongo module"""


def list_all(mongo_collection):
    """list all documents in mongo_collection

    Args:
        mongo_collection (Collection): mongo collection

    Returns:
        Cursor: cursor obj with documents or a empty list if dont find any
    """
    if mongo_collection.count_documents({}) == 0:
        return []
    res = mongo_collection.find({})

    return res
