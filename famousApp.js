if(Meteor.isClient){

	var SpringTransition = famous.transitions.SpringTransition;
	var Transitionable = famous.transitions.Transitionable;
	Transitionable.registerMethod('spring', SpringTransition);

	 Transform=null;
  FView.ready(function(require) {
    Transform        = famous.core.Transform;

    // Famono: load famo.us shims and CSS
    famous.polyfills; // jshint ignore:line
    famous.core.famous; // jshint ignore:line
  });

	/*Template.loginForm.events({
		'submit form': function(e){
			e.preventDefault();
			console.log("logging in");
			var email = $('#login-email').val(), password = $('#login-password').val();

			Meteor.loginWithPassword(email, password, function(err){
	            if (err){
	              console.log('Error: '+err.reason+'. Please try again!!');
	            }
	            else
	            { 
	             	Router.go('success');
	            }
	          });
		}
	})

	Template.loginSuccess.helpers({
		name: function(){
			return Meteor.user()? Meteor.user().profile.name.firstName : '';
		}
	})

	Template.loginSuccess.events({
		'click #logout': function(e){
			e.preventDefault();
			Meteor.logout();
			Router.go('/');
		}
	})*/

	Template.items.helpers({
		items: function(){
			return [{name: 'item 1'}, {name: 'item 2'}, {name: 'item 3'}];
		}
	})

	Template.item.famousEvents({
		'click': function(e, fview){
			console.log("famousEvents fview", fview.modifier);
			fview.modifier.halt();
		  	fview.modifier.setTransform(
		      	Transform.translate(50,50),
		      	{ method:"spring", period: 500, dampingRatio: .5, velocity: 0.1 }
		  	);
		}
	})

	/*Template.item.rendered = function() {
	  var fview = FView.from(this);
	  var Transform = famous.core.Transform; // see shortcut help below

	  // "Fly in" animation (see examples/animations for more)
	  fview.modifier.setTransform(
	    Transform.translate(-500,-500)
	  );
	  fview.modifier.setTransform(
	    Transform.translate(0,0),
	    { duration : 1000, curve: 'easeOut' }
	  );
	}*/

}
