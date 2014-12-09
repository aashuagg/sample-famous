if(Meteor.isClient){
	Template.loginForm.events({
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
	})

}
