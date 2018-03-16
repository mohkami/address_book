## The diagram for MainView (Right-hand side section): Failed to Load Selected Contact to Main View

[Click Here For Image](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgTWFpblZpZXcgKFJpZ2h0LWhhbmQgc2lkZSBzZWN0aW9uKTogRmFpbGVkIHRvIExvYWQgU2VsZWN0ZWQgQ29udGFjdCB0bwBCBSBWaWV3CgoASQlDb21wb25lbnQoAF0ILmpzKS0-AAIfOjEuaWYgaWQgaW4gcGFyYW1zADEiQQCBJgVzKGEAAgYvaW5kZXgASAUyLmxvYWQAgSsIAIErByhjAIE0BklkKQoAIhktPlNlcnZlcjozLmdldACBZQdCeUlkADIMAB0GAGUcNC5GYWlsdXJlAE4cUmVkdWNlcnMoc3RvcmUvcgAIBwCCCgU1AIE9BQCCZQcAgwUGCgAVGy0Agj8iNi4AgXkHIGYAg1EJbG9hZACCeUI3LnNob3cgZXJyb3IgbWVzc2FnZQo&s=default)

### Or

#### Go to the following link and paste the text below:
[https://www.websequencediagrams.com/](https://www.websequencediagrams.com/)

title MainView (Right-hand side section): Failed to Load Selected Contact to Main View

MainView Component(MainView.js)->MainView Component(MainView.js):1.if id in params
MainView Component(MainView.js)->Actions(actions/index.js):2.loadSelectedContact(contactId)
Actions(actions/index.js)->Server:3.getContactById(contactId)
Server->Actions(actions/index.js):4.Failure
Actions(actions/index.js)->Reducers(store/reducers.js):5.loadContactFailed
Reducers(store/reducers.js)-->MainView Component(MainView.js):6.contact failed to load
MainView Component(MainView.js)->MainView Component(MainView.js):7.show error message
