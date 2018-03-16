## The diagram for MainView (Right-hand side section): Succesfully Edit Selected Contact on Main View

[Click Here For Image](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgTWFpblZpZXcgKFJpZ2h0LWhhbmQgc2lkZSBzZWN0aW9uKTogRmFpbGVkIHRvIEVkaXQgU2VsZWN0ZWQgQ29udGFjdCB0bwBCBSBWaWV3CgpVc2VyLT4ATwlDb21wb25lbnQoAGMILmpzKToxLkZpbGwgb3V0IHRoZSBmb3JtCgAVHy0-QQCBDQVzKGEAAgYvaW5kZXgASgUyLmVkaXQAgQoHKGMAgRMGKQoAGBktPlNlcnZlcjozLnVwZGF0ZQCBRQdCeUlkADUKAB4GAFwcNC5GYWlsdXJlAE8cUmVkdWNlcnMoc3RvcmUvcgAIBwCCAwU1AIEtDACCYwYKABUbLQCCOCI2LgCBeAcgZgCDLwkAgV4GAII_IgCDFiA3LnNob3cgZXJyb3IgbWVzc2FnZQo&s=default)

### Or

#### Go to the following link and paste the text below:
[https://www.websequencediagrams.com/](https://www.websequencediagrams.com/)

title MainView (Right-hand side section): Succesfully Edit Selected Contact on Main View

User->MainView Component(MainView.js):1.Fill out the form
MainView Component(MainView.js)->Actions(actions/index.js):2.editContact(contact)
Actions(actions/index.js)->Server:3.updateContactById(contact)
Server->Actions(actions/index.js):4.Success/Response
Actions(actions/index.js)->Reducers(store/reducers.js):5.successfully edited contact
Reducers(store/reducers.js)-->MainView Component(MainView.js):6.load edited contact
MainView Component(MainView.js)->MainView Component(MainView.js):7.update selected contact