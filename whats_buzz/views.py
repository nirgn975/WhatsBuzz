import facebook


def blah(request):
    print('1')
    token = 'EAAPHWQZBMiNUBABiPTB6WZCICuRB69KTRJmfb6wYQSAC5fKu9NZChi7bx7XfYtz1xm1iCTJnHfNhFjbHMZCB0GCFOlvJkWy0apZCIMLvAhZAWH6udKWt0yFJjDcTRyhcvdc3ckwMgjjXVSiGy7ZC1KGeRqhtuUKQoFUVTqtZCM422QZDZD'

    graph = facebook.GraphAPI(access_token=token, version='2.5')
    profile = graph.get_object("me")
    print(profile)
