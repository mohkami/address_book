## The diagram for MainView (Right-hand side section): Failed to Edit Selected Contact on Main View

[Click Here For Image](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgTWFpblZpZXcgKFJpZ2h0LWhhbmQgc2lkZSBzZWN0aW9uKTogRmFpbGVkIHRvIEVkaXQgU2VsZWN0ZWQgQ29udGFjdCBvbgBCBSBWaWV3CgpVc2VyLT4ATwlDb21wb25lbnQoAGMILmpzKToxLkZpbGwgb3V0IHRoZSBmb3JtCgAVHy0-QQCBDQVzKGEAAgYvaW5kZXgASgUyLmVkaXQAgQoHKGMAgRMGKQoAGBktPlNlcnZlcjozLnVwZGF0ZQCBRQdCeUlkADUKAB4GAFwcNC5GYWlsdXJlAE8cUmVkdWNlcnMoc3RvcmUvcgAIBwCCAwU1AIEtDACCYwYKABUbLQCCOCI2LgCBeAcgZgCDLwkAgV4GAII_IgCDFiA3LnNob3cgZXJyb3IgbWVzc2FnZQ&s=default)

### Or

#### Go to the following link and paste the text below:
[https://www.websequencediagrams.com/](https://www.websequencediagrams.com/)

title MainView (Right-hand side section): Failed to Edit Selected Contact on Main View

User->MainView Component(MainView.js):1.Fill out the form
MainView Component(MainView.js)->Actions(actions/index.js):2.editContact(contact)
Actions(actions/index.js)->Server:3.updateContactById(contact)
Server->Actions(actions/index.js):4.Failure
Actions(actions/index.js)->Reducers(store/reducers.js):5.editContactFailed
Reducers(store/reducers.js)-->MainView Component(MainView.js):6.contact failed to update
MainView Component(MainView.js)->MainView Component(MainView.js):7.show error message