describe('GitUserSearchController', function(){
  beforeEach(module('GitUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('GitUserSearchController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function(){
    
    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
        .when("GET", "https://api.github.com/search/users?access_token=25a7ecd4b4211b62b4cb5d5e5d453305838fbaa3&q=hello")
        .respond(
          { items: items }
        );
    }));

    var items = [
       {
        "login": "tansaku",
        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        "html_url": "https://github.com/tansaku"
      }, 
      {
        "login": "stephenlloyd",
        "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
        "html_url": "https://github.com/stephenlloyd"
      }
    ];

    it('display search results', function(){
      ctrl.searchTerm = 'hello';
      ctrl.doSearch()
      httpBackend.flush();
      expect(ctrl.searchResult.items).toEqual(items);
    });


  });
});