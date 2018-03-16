## The diagram for Failure in Initial Page Load of NavBar (Left-hand section)

[Click Here For Image](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgTmF2QmFyIChMZWZ0LWhhbmQgc2VjdGlvbik6IEZhaWx1cmUgaW4gSW5pdGlhbCBQYWdlIExvYWQKCgAzB0NvbXBvbmVudCgARQYuanMpLT5BAD8FcyhhAAIGL2luZGV4LmpzKToxLmxvYWRBbGxDb250YWN0cwoAExktPlNlcnZlcjoyLmdldAAoCygpCgAUBgBNHDMuAIE5BwBFHFJlZHVjZXJzKHN0b3JlL3IACAcAgSUFNACBJQUAgR8IRmFpbGVkCgAWGy0tPgCBeRs6NS5jAIFrByBmAEcFIHRvIGxvYWQAgiweADccNi5zaG93IGVycm9yIG1lc3NhZ2UK&s=default)

### Or

#### Go to the following link and paste the text below:
[https://www.websequencediagrams.com/](https://www.websequencediagrams.com/)

title NavBar (Left-hand side section): Failure in Initial Page Load

NavBar Component(NavBar.js)->Actions(actions/index.js):1.loadAllContacts
Actions(actions/index.js)->Server:2.getAllContacts()
Server->Actions(actions/index.js):3.Failure
Actions(actions/index.js)->Reducers(store/reducers.js):4.loadContactsFailed
Reducers(store/reducers.js)-->NavBar Component(NavBar.js):5.contacts failed to load
NavBar Component(NavBar.js)->NavBar Component(NavBar.js):6.show error message

