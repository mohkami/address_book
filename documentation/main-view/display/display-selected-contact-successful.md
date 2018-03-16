## The diagram for MainView (Right-hand side section): Successfully Loaded Selected Contact to Main View

[Click Here For Image](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgTWFpblZpZXcgKFJpZ2h0LWhhbmQgc2lkZSBzZWN0aW9uKTogRW1wdHkAJQUgACYFU3RhdGUgKFdoZW4gbm8gY29udGFjdCBpcyBzZWxlY3RlZCkKCgBQCUNvbXBvbmVudChOYXZCYXIuanMpLT4AAh06MS5pZiBubyBpZCBpbiBwYXJhbXMAFD4yLnJlbmRlciBlAIFIBXMAgT4FdGVtcGxhdGUK&s=default)

### Or

#### Go to the following link and paste the text below:
[https://www.websequencediagrams.com/](https://www.websequencediagrams.com/)

title MainView (Right-hand side section): Successfully Loaded Selected Contact to Main View

MainView Component(MainView.js)->MainView Component(MainView.js):1.if id in params
MainView Component(MainView.js)->Actions(actions/index.js):2.loadSelectedContact(contactId)
Actions(actions/index.js)->Server:2.getContactById(contactId)
Server->Actions(actions/index.js):3.Success/Response
Actions(actions/index.js)->Reducers(store/reducers.js):4.loadContactSuccessful(contact)
Reducers(store/reducers.js)-->MainView Component(MainView.js):5.contact loaded
MainView Component(MainView.js)->MainView Component(MainView.js):6.display contact