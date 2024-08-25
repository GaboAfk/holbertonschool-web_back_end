#!/usr/bin/env python3
"""pymongo module"""


def list_all(mongo_collection):
    """list all documents in mongo_collection

    Args:
        mongo_collection (Collection): mongo collection

    Returns:
        Cursor: cursor obj with documents or a empty list if dont find any
    """
    return mongo_collection.find({})
