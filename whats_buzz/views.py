import facebook


def blah(request):
    print('1')
    token = 'EAAPHWQZBMiNUBACBouVAZBCua8Y6PrxThwrsQybN0Il7RYskHOrDdR2TZBnXKKVcLeSYZB1oe7ODtRcF07GiO6SDtt3ChsZCa1ri4khn6BHrN2txIHB5ycvqT3YVzfWd03iDzwYmz71l5uYzw2nCOAeUk5gtx8jO96Gj3OZBt0XwZDZD'

    graph = facebook.GraphAPI(access_token=token, version='2.5')
    profile = graph.get_object("me")
    print(profile)
