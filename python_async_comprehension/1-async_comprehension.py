#!/usr/bin/env python3
"""async comprehension module"""


from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """return yielded float numbers in a async generator
    """

    """ values = []
    async for i in async_generator():
        values.append(i)
    return values """

    return [num async for num in async_generator()]
