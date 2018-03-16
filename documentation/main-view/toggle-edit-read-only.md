## The diagram for Toggling between edit and display mode

![alt text](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgTWFpblZpZXcgKFJpZ2h0LWhhbmQgc2lkZSBzZWN0aW9uKTogVG9nZ2xpbmcgYmV0d2VlbiBlZGl0IGFuZCBkaXNwbGF5IG1vZGUKClVzZXItPgBJCUNvbXBvbmVudCgAXQguanMpOjEuQ2xpY2sgb24gRWRpdCBidXR0b24KABgfADYiMi5zZXQAgRYFTW9kZVxuaW4gc3RhdGUgdG8gdHJ1ZQAgQjMucmVuZGVyAIF6Bm1vZGUgdGVtcGxhdGUAgVUnNACBcgpTdWJtaXQgb3IgQ2FuY2VsAIE_QjUAgWYbZmFscwCBNkxyZWFkLW9ubACDdQYAgX0K&s=default)

[Click Here For Image](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgTWFpblZpZXcgKFJpZ2h0LWhhbmQgc2lkZSBzZWN0aW9uKTogVG9nZ2xpbmcgYmV0d2VlbiBlZGl0IGFuZCBkaXNwbGF5IG1vZGUKClVzZXItPgBJCUNvbXBvbmVudCgAXQguanMpOjEuQ2xpY2sgb24gRWRpdCBidXR0b24KABgfADYiMi5zZXQAgRYFTW9kZVxuaW4gc3RhdGUgdG8gdHJ1ZQAgQjMucmVuZGVyAIF6Bm1vZGUgdGVtcGxhdGUAgVUnNACBcgpTdWJtaXQgb3IgQ2FuY2VsAIE_QjUAgWYbZmFscwCBNkxyZWFkLW9ubACDdQYAgX0K&s=default)

### Or

#### Go to the following link and paste the text below:
[https://www.websequencediagrams.com/](https://www.websequencediagrams.com/)

title MainView (Right-hand side section): Toggling between edit and display mode

User->MainView Component(MainView.js):1.Click on Edit button
MainView Component(MainView.js)->MainView Component(MainView.js):2.set editMode\nin state to true
MainView Component(MainView.js)->MainView Component(MainView.js):3.render edit mode template
User->MainView Component(MainView.js):4.Click on Submit or Cancel
MainView Component(MainView.js)->MainView Component(MainView.js):5.set editMode\nin state to false
MainView Component(MainView.js)->MainView Component(MainView.js):3.render read-only mode template
