;(function (application, BB) {
    application.routes.CategoriesRoutes = BB.Router.extend({
        routes: {
            "": "index",
            "categories/:category": "renderByCategory"
            
        },
        index: function () {
            if (this.currentView != undefined && this.currentView != this.ordersView ) {
                this.currentView.$el.empty();
                this.currentView.render();
            } else {
                this.currentView = new application.views.CategoriesView();
            }
        },
        initialize: function(){
            this.listenTo(Backbone, "menu", function(category){
                this.currentView.$el.empty();
                this.navigate("categories/"+category, {trigger:true})
            });
            this.ordersView = new application.views.OrdersView();
            this.ordersView.render();
          
          },
        

               
        
        renderByCategory: function(category){
            if (this.currentView!= this.ordersView ){this.currentView.$el.empty();
            }
            
            this.dishesView = new application.views.DishesView({
                collUrl: category
            } );

                

        }

    });

} (APP, Backbone));