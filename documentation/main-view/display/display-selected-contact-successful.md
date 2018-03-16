## The diagram for MainView (Right-hand side section): Successfully Loaded Selected Contact to Main View

[Click Here For Image](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgTWFpblZpZXcgKFJpZ2h0LWhhbmQgc2lkZSBzZWN0aW9uKTogU3VjY2Vzc2Z1bGx5IExvYWRlZCBTZWxlY3RlZCBDb250YWN0IHRvAEcFIFZpZXcKCgBOCUNvbXBvbmVudCgAYgguanMpLT4AAh86MS5pZiBpZCBpbiBwYXJhbXMAMSJBAIErBXMoYQACBi9pbmRleABIBTIubG9hZACBKwgAgSsHKGMAgTQGSWQpCgAiGS0-U2VydmVyOjIuZ2V0AIFlB0J5SWQAMgwAHQYAZRwzLgCCPQcvUmVzcG9uc2UAVxxSZWR1Y2VycyhzdG9yZS9yAAgHAIITBTQAgUYFAIJuBwCDDwoAgUUIKQoAIhstAIJVIjUuAIIPByBsAINjBQCDB0I2LmRpc3BsYXkgAIJpBw&s=default)

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