function Contact() {
	return {
		restrict: 'E',
		template: [
			'<div class="contact">',
				'Name: {{ ctrl.contact.name.title }} {{ ctrl.contact.name.first }} {{ ctrl.contact.name.last }} - <a href="" ng-click="ctrl.remove(ctrl.id)">Remove</a>',
			'</div>'
		].join(''),
		controller: function ($rootScope) {
			this.remove = function(id) {
				debugger
				var contact = this.contacts[id];
				$rootScope.$emit('destroy_contact', id);
				// $scope.$on('$destroy', myListener);
				$rootScope.destroy;
			};
		},
		controllerAs: 'ctrl',
		bindToController: {
			id: '=',
			contact: '='
		}
	}
}

angular
	.module('app')
	.directive('contact', Contact);
