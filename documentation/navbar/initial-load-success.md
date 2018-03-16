## The diagram for Successful Initial Page Load of NavBar (Left-hand section)

[Click Here For Image](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgTmF2QmFyIChMZWZ0LWhhbmQgc2VjdGlvbik6IFN1Y2Nlc3NmdWwgSW5pdGlhbCBQYWdlIExvYWQKCgAzB0NvbXBvbmVudCgARQYuanMpLT5BAD8FcyhhAAIGL2luZGV4LmpzKToxLmxvYWRBbGxDb250YWN0cwoAExktPlNlcnZlcjoyLmdldAAoCygpCgAUBgBNHDMuAIE5By9SZXNwb25zZQBOHFJlZHVjZXJzKHN0b3JlL3IACAcAgS4FNACBIxAAgg8KbHkKAB8bLS0-AIILGzo1LmMAgX0HIGxvYWRlZACCNh4ALxw2LmRpc3BsYXkgbGlzdAo&s=default)

### Or

#### Go to the following link and paste the text below:
[https://www.websequencediagrams.com/](https://www.websequencediagrams.com/)

title NavBar (Left-hand side section): Successful Initial Page Load

NavBar Component(NavBar.js)->Actions(actions/index.js):1.loadAllContacts
Actions(actions/index.js)->Server:2.getAllContacts()
Server->Actions(actions/index.js):3.Success/Response
Actions(actions/index.js)->Reducers(store/reducers.js):4.loadAllContactsSuccessfully
Reducers(store/reducers.js)-->NavBar Component(NavBar.js):5.contacts loaded
NavBar Component(NavBar.js)->NavBar Component(NavBar.js):6.display list
