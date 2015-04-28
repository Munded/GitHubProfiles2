
githubUserSearch.controller('GitUserSearchController', ['$resource',function($resource) {

  
  var searchResource = $resource('https://api.github.com/search/users?access_token=25a7ecd4b4211b62b4cb5d5e5d453305838fbaa3');
  var self = this;
  this.pastSearch = []
  self.doSearch = function(){
    // console.log(self.searchTerm)
    self.searchResult = searchResource.get( 
      { q : self.searchTerm } 
      );
    this.pastSearch.push(" " + self.searchTerm)
    this.printResults = this.pastSearch.toString();
  };
}]);