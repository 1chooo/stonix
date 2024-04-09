from typing import Any


def auth_admin(
    username: str,
    password: str,
    *args: Any, 
    **kwargs: Any,
) -> bool:
    if username == "admin" and password == "admin":
        return True
    else:
        return False
    
'''
Use Case:

Add the following code to app/views/dashboard.py in the build_playground function:

demo.auth=auth_admin             # temporary disable auth
demo.auth_message = 'Welcome to ToDAM!!!'
'''
