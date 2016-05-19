;(function (application, BB) {
    application.collections.DishesCollection = BB.Collection.extend({
    model: application.models.DishesModel,
    url: function (categoryname) {
        return  "JSON/" + categoryname + ".json";
    },
    initialize: function (opts) {
        this.fetch({reset: true,
            url: this.url(opts.collUrl)}
        );

    }

});
} (APP, Backbone));    