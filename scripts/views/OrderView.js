;(function (application, BB) {
    application.views.OrderView =BB.View.extend({

        tagName: 'tbody',

        template: _.template($("#order").html()),
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.attr('orderIndex', this.model.cid);
            return this;
        }
    });
} (APP, Backbone));