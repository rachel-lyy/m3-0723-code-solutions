# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  - Special functions (exclusive to React) that only available while React is rendering
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  - Use “use” when naming your hook
  - Hooks can only be called at the top level of your components or your own hooks
  - You can’t call hooks inside of conditions, loops, or other nested functions
- What is the purpose of state in React?
  - Retains data between renders
  - Update view with new data
- Why can't we just maintain state in a local variable?
  - It won’t save previous data locally
  - It won’t trigger new renders
- What two actions happen when you call a `state setter` function?
  - You update the state and trigger a render
- When does the local `state variable` get updated with the new value?
  - When it is evoked with something like onClick

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
