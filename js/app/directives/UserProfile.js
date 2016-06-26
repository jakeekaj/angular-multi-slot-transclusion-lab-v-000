function UserProfile() {
	return {
		transclude: {
			name:'h4',
			position:'h6',
			description:'p'
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<div></div>',
				'Name <span ng-transclude="name"></span>',
				'Position <span ng-transclude="position"></span>',
				'Description <span ng-transclude="description"></span>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
