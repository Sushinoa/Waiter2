;(function (application, BB) {
    application.views.DishesView = BB.View.extend({
        el: '.menu',
        views: [],
        initialize: function (opts) {
            this.dishesCollection = new application.collections.DishesCollection(opts);
            this.listenTo(this.dishesCollection,
                "reset", this.render)
        },
        render: function () {
            this.dishesCollection.each(function (model) {
                var dishView = new application.views.DishView({model: model});
                this.views.push(dishView);
                this.$el.append(dishView.render().el);
            }, this);

            return this;
        },

        events: {
            'click ': 'order'
        },
        order:
            function(){
                var dIndex = $(event.target.parentNode).attr('dishIndex');

                if (dIndex != undefined) {
                    var d = this.dishesCollection.get(dIndex);
                    var f = this.dishesCollection.get(dIndex).get("number");
                    d.set("number", f+1);

                }
                Backbone.trigger("order", d);
               
            }

    });
}(APP, Backbone));