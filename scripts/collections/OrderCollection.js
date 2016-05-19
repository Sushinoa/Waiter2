;(function (application, BB) {
    application.collections.OrderCollection = BB.Collection.extend({
        model: application.models.OrderModel,
        initialize: function () {
            Backbone.on("order", function (model) {
                if (this.orderCollection.get(model.cid) != undefined) {
                    this.orderCollection.get(model.cid).set("number",  this.orderCollection.get(model.cid).get("number") + 1)
                }

                else {
                    this.create(model.toJSON())
                }
            }, this)
        },



        url:"orders.json"

    });
} (APP, Backbone));