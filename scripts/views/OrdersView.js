;(function (application, BB) {
    application.views.OrdersView = BB.View.extend({
        el: '.order',
        views: [],
        renderOrderView: function (model) {
            var orderView = new application.views.OrderView({model: model});
            this.views.push(orderView);
            this.$el.append(orderView.render().el);
        },
        initialize: function () {
            this.orderCollection = new application.collections.OrderCollection();
            this.listenTo(this.orderCollection,
                "reset", this.render);

            this.listenTo(this.orderCollection,
                "add", this.renderOrderView);
        },
        render: function () {
            this.orderCollection.each(this.renderOrderView);

            return this;
        },
        events: {
            'click .delete ': 'delete',
            'click .del ': 'delAll'

        },
        delete:
            function(){
                var oIndex = $(event.target.parentNode).attr('orderIndex');

                if (oIndex != undefined) {
                    var d = this.orderCollection.get(oIndex);
                    this.orderCollection.remove(d);
                    $(event.target.parentNode).remove();
                }
            },


        delAll:
            function(){
                this.orderCollection.reset();

                this.$el.remove();
            }
    });


} (APP, Backbone));