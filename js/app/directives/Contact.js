function Contact() {
	return {
		restrict: 'E',
		template: [
			'<div class="contact">',
				'Name: {{ ctrl.contact.name.title }} {{ ctrl.contact.name.first }} {{ ctrl.contact.name.last }} - <a href="" ng-click="ctrl.remove(ctrl.id)">Remove</a>',
			'</div>'
		].join(''),
		controller: function ($rootScope) {
			this.remove = function (id) {
				$rootScope.$broadcast('remove', id);
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
