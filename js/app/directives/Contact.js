function Contact() {
	return {
		restrict: 'E',
		template: [
			'<div class="contact">',
				'Name: {{ ctrl.contact.name.title }} {{ ctrl.contact.name.first }} {{ ctrl.contact.name.last }} - <a href="" ng-click="ctrl.remove(ctrl.id)">Remove</a>',
			'</div>'
		].join(''),

		controllerAs: 'ctrl',
		controller: function ($rootScope) {
			this.remove = function (id) {
				 $rootScope.$broadcast('remove', id);
						// this.remove(this.id == id);
			};
			// $rootScope.$on('remove', function (remove, id) {
			// 		console.log($rootScope.id);
			// 	});
		},

		bindToController: {
			id: '=',
			contact: '='
		}
	}
}

angular
	.module('app')
	.directive('contact', Contact);
