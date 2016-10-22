from dal import autocomplete

from .models import Tags


class TagsAutocomplete(autocomplete.Select2QuerySetView):
    def get_queryset(self):
        # Filter out results depending on the visitor.
        if not self.request.user.is_authenticated():
            return Tags.objects.none()

        qs = Tags.objects.all()

        if self.q:
            qs = qs.filter(name__istartswith=self.q)

        return qs

    def get_result_label(self, result):
        return super().get_result_label(result.name)
