## The diagram for Failure in Contacts Load on Search

[Click Here For Image](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgTmF2QmFyIChMZWZ0LWhhbmQgc2VjdGlvbik6IEZhaWx1cmUgaW4gQ29udGFjdHMgTG9hZCBvbiBTZWFyY2gKClVzZXItPgA_B0NvbXBvbmVudCgAUQYuanMpOjEuaW5wdXQgcwAtBSB0ZXJtCgAVGwAvHjIudGhyb3R0bGUvZGVib3VuY2UgXG4gAFwGZm9yIDUwMCBtcwBDHkEAgVwFcyhhAAIGL2luZGV4AIEnBTMuAIEgBgCBZwgoAIEqCykKAB8ZLT5TZXJ2ZXI6NAAjHQAfBgBkHDUuAIJtBwBQHFJlZHVjZXJzKHN0b3JlL3IACAcAgmgFNi5sb2FkAIMmCEZhaWxlZAoAFhstAIMeHjcuYwCDcQhmAEcFIHRvIGxvYWQAgwg6OC5zaG93IGVycm9yIG1lc3NhZ2U&s=default)

### Or

#### Go to the following link and paste the text below:
[https://www.websequencediagrams.com/](https://www.websequencediagrams.com/)

title NavBar (Left-hand side section): Failure in Contacts Load on Search

User->NavBar Component(NavBar.js):1.input search term
NavBar Component(NavBar.js)->NavBar Component(NavBar.js):2.throttle/debounce \n input for 500 ms
NavBar Component(NavBar.js)->Actions(actions/index.js):3.searchContacts(search term)
Actions(actions/index.js)->Server:4.searchContacts(search term)
Server->Actions(actions/index.js):5.Failure
Actions(actions/index.js)->Reducers(store/reducers.js):6.loadContactsFailed
Reducers(store/reducers.js)-->NavBar Component(NavBar.js):7.contacts failed to load
NavBar Component(NavBar.js)->NavBar Component(NavBar.js):8.show error message