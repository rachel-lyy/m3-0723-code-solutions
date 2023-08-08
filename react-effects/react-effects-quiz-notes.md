# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  - When a component loads on screen
- What is a React Effect?
  - Ability to specify side effects caused by rendering of components rather than by an event.
- When should you use an Effect and when should you not use an Effect?
  - You should use an Effect for something outside of you system like APIs, 3rd party widgets, networks, etc.
- When do Effects run?
  - After the component renders
- What function is used to declare an Effect?
  - useEffect
- What are Effect dependencies and how do you declare them?
  - Dependencies prevent Effects from re-running. You declare them by stating it an array before the closing parentheses of the useEffect function.
- Why would you want to clean up from an Effect?
  - It stops what the Effect is doing. Ex “connect” and “disconnect”
- How do you clean up from an Effect?
  - You write a clean up function that undoes the Effect.
- When does the cleanup function run?
  - When a component unmounts (gets removed) from the page

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
