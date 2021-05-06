# Server testing with Supertest
## Example

**Let's pretend we have GET request to a page that doesn't exist**
```js
request(base_url).get(broken_url).expect(404, /not found/ig);
```