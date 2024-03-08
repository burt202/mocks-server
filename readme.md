# Mocks Server

### To Run

- `npm run mocks`
- fetch users using mocks in default collection: `curl http://localhost:3100/api/users`
- update the selected collection using `mocks-server` backend admin api: `curl -X PATCH -d '{"mock":{"collections":{"selected":"all-users"}}}' -H 'Content-Type: application/json' http://localhost:3110/api/config`
- fetch users using mocks in updated collection: `curl http://localhost:3100/api/users`

### Workflows

For local dev:

- add `SELECTED_COLLECTION` to `.env` to choose initial collection on app load
- update api url env var to point to `http://localhost:3100` before running mocks server

For playwright automated tests:

- start app & mocks using [webServer](https://playwright.dev/docs/test-webserver#multiple-web-servers) config setting
- call `PATCH http://localhost:3110/api/config` passing in new collections name relevant for test

### Frustrations

Mocks server is not written in TS so babel is needed :(
