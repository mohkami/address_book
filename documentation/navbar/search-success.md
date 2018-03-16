## The diagram for Successful Contacts Load on Search

[Click Here For Image](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgTmF2QmFyIChMZWZ0LWhhbmQgc2VjdGlvbik6IFN1Y2Nlc3NmdWwgQ29udGFjdHMgTG9hZCBvbiBTZWFyY2gKClVzZXItPgA_B0NvbXBvbmVudCgAUQYuanMpOjEuaW5wdXQgcwAtBSB0ZXJtCgAVGwAvHjIudGhyb3R0bGUvZGVib3VuY2UgXG4gAFwGZm9yIDUwMCBtcwBDHkEAgVwFcyhhAAIGL2luZGV4AIEnBTMuAIEgBgCBZwgoAIEqCykKAB8ZLT5TZXJ2ZXI6NAAjHQAfBgBkHDUuAIJtBy9SZXNwb25zZQBZHFJlZHVjZXJzKHN0b3JlL3IACAcAgnEFNi5sb2FkIGZvdW5kIGMAgzcHCgAXGy0AgygeNy4APQggbG9hZGVkAIMKOjguZGlzcGxheSBsaXN0&s=default)

### Or

#### Go to the following link and paste the text below:
[https://www.websequencediagrams.com/](https://www.websequencediagrams.com/)

title NavBar (Left-hand side section): Successful Contacts Load on Search

User->NavBar Component(NavBar.js):1.input search term
NavBar Component(NavBar.js)->NavBar Component(NavBar.js):2.throttle/debounce \n input for 500 ms
NavBar Component(NavBar.js)->Actions(actions/index.js):3.searchContacts(search term)
Actions(actions/index.js)->Server:4.searchContacts(search term)
Server->Actions(actions/index.js):5.Success/Response
Actions(actions/index.js)->Reducers(store/reducers.js):6.load found contacts
Reducers(store/reducers.js)-->NavBar Component(NavBar.js):7.contacts loaded
NavBar Component(NavBar.js)->NavBar Component(NavBar.js):8.display list