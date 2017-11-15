# Let's just use the local mongod instance. Edit as needed.

# Please note that MONGO_HOST and MONGO_PORT could very well be left
# out as they already default to a bare bones local 'mongod' instance.
MONGO_HOST = 'localhost'
MONGO_PORT = 27017

# Skip these if your db has no auth. But it really should.
#MONGO_USERNAME = 'ssergey'
#MONGO_PASSWORD = 'p4ssw0rd'

MONGO_DBNAME = 'apitest'

# Enable reads (GET), inserts (POST) and DELETE for resources/collections
# (if you omit this line, the API will default to ['GET'] and provide
# read-only access to the endpoint).
RESOURCE_METHODS = ['GET', 'POST', 'DELETE']

# Enable reads (GET), edits (PATCH), replacements (PUT) and deletes of
# individual items  (defaults to read-only item access).
ITEM_METHODS = ['GET', 'PATCH', 'PUT', 'DELETE']

# REST apis are prefixed.
URL_PREFIX = "api"


schema = {
    # Schema definition, based on Cerberus grammar. Check the Cerberus project
    # (https://github.com/nicolaiarocci/cerberus) for details.
    'question_text': {
        'type': 'string',
        'minlength': 1,
        'maxlength': 10000,
    },
    # 'question_type' is a string,  and can only contain values from 'allowed'.
    'question_type': {
        'type': 'string',
        'allowed': ["radio", "checkbox"],
    },

    'choices': {
        'type': 'list',
        'schema': {
            'text': {'type': 'string'},
            'sub_choices': {
                'type': 'list',
                'schema': {
                    'text': {'type': 'string'},
                },
            }
        },
    },

}


questions = {
    # 'title' tag used in item links. Defaults to the resource title minus
    # the final, plural 's' (not really needed here)
    'item_title': 'question',

    # We choose to override global cache-control directives for this resource.
    'cache_control': 'max-age=10,must-revalidate',
    'cache_expires': 10,

    # most global settings can be overridden at resource level
    'resource_methods': ['GET', 'POST'],

    'schema': schema
}


DOMAIN = {
    'questions': questions,
}
