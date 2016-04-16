(function () {
    var ngTableControls = angular.module("ngTableControls", []);
    ngTableControls.directive("tableControls", function($filter, $compile) {
    return {
        require: '?ngModel',
        templateUrl: '/table-controls/template/table_controls_tpl.html',
        restrict: 'E',
        scope: {
        },
        transclude: true,
        link: function(scope, element, attrs, ngModel) {
            scope.tableContolData = {};
            scope.$watch("tableContolData.filterSearchModel", function (value) {
                ngModel.$setViewValue(value);
            });

            scope.openTable = true;
            scope.toggleSearchToolbar = function() {
                scope.showSearchToolbar = !(scope.showSearchToolbar);
            }

            scope.toggleMinimizeTable = function(){
                scope.minimizeTable = !(scope.minimizeTable);
            }

            scope.toggleExpand = function() {
                scope.expandTable = !(scope.expandTable);
            }

            scope.closeTablePanel = function() {
                scope.openTable = !(scope.openTable);
            }
        }
    }
});
}());

/*template : '<div class="col-md-12" data-ng-if="openTable"> <div class="panel panel-widget" ng-class="{\'panel-fullsize\' : expandTable}"> <div class="panel-title"> <ul class="panel-tools"> <li><a href="javascript:void(0)" data-ng-click="toggleSearchToolbar()" class="icon search-tool"><i class="fa fa-search"></i></a></li> <li><a href="javascript:void(0)" data-ng-click="toggleMinimizeTable()" class="icon minimise-tool"><i class="fa fa-minus"></i></a></li> <li><a href="javascript:void(0)" data-ng-click="toggleExpand()" class="icon expand-tool"><i class="fa fa-expand"></i></a></li> <li><a href="javascript:void(0)" data-ng-click="closeTablePanel()" class="icon closed-tool"><i class="fa fa-times"></i></a></li> </ul> </div> <div class="panel-search" data-ng-show="showSearchToolbar"> <form> <input type="text" data-ng-model="tableContolData.filterSearchModel" class="form-control" placeholder="Search..."> <i class="fa fa-search icon"></i> </form> </div> <div class="panel-body table-responsive" data-ng-hide="minimizeTable"> <ng-transclude></ng-transclude> </div> </div> </div>',*/