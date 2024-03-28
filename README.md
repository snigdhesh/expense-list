## F.A.Q
course: React 18 for beginners
site: codewithmosh.com

# section 1
Getting started

# section2
- Create a list group component, and highlight each item in list group - when clicked

# section3
- How to use `index.ts` file?
- How to use `css-modules`?
  - Hint: create module files 
  - Example:  create `ListGroup.module.css` and simply import it.
- How to use `react-icons`? See (react-icons)[https://react-icons.github.io/react-icons/]
  - Hint: `npm i react-icons`
- Change `button` styles on click?
- Create a `Like` Button using icons
  - Hint: Toggle between two different icons (like button and dislike button)

# section 4
- Modify state object
  - Hint: You can't modify, assign a copy of exising object to new object.
- CRUD operations on array
  - Hint: Use operators like filter and map
- CRUD operations on object
  - Hint: Use operators like filter and map
- CRUD operations on array of objects
  - Hint: Use operators like filter and map
- How to do expandable text?
  - Hint: Use `substring()` method on string

# section 5
- How to capture data from FORMs
  - Hint: Use `useRef()` hook
  - Hint: Use `ngOnChange()` event, to update state object
  - Hint: Use `npm i react-hook-form@latest`
- How to handle form submit with `handleSubmit` function coming from `react-hook-form`
- How to perform schema based form validation
  - Hint: `npm i zod@latest`
  - Hint: 
    -   Create schema from zod.
    -   Create FormData object from schema.
    -   Pass this schema to zodResolver.
- What is resolver and how to use it?
  - Hint: `npm i @hookform/resolvers@latest`
  - Hint: This library holds resolvers for various schema based validation libraries like `zod`
  - How to disable submit button if form is not valid
    - Hint: Use `isValid` property from `formState` object coming from `useForm` hook
  
# section 6
 - How to store data to local storage
 - How to call server
 - How to use 'useEffect' hook: We use useEffect, to execute piece of code after component is rendered.
 - What are side effects?
   - Any piece of code that doesn't effect UI rendering are known as side effects/
   - Example: API calls, subscriptions and manually changing DOM elements.
   - Manually changing DOM elements will not render the UI components, hence it can be considered as side effect.
 - How to make an API call
   - Hint: Use library called `axios` : `npm install axios@latest`
 - How to handle errors?
   - Hint: use `.catch` block
 - How to cancel a http request?
   - Hint: Use AbortController() and pass signal property in second parameter of axios request.
   - Hint: Say API call is in component1, but user navigated to component2, then we want to cancel http request in component1. 
 - How to show/hide loading icon?
   - Hint: setLoading=true before axios call, and setLoding=false in .then() and .catch() blocks (Meaning API call is complete)
 - How to perform CURD operation in axios request
   - Hint: Use get, put,patch, post and delete methods
 - How to create custom hook?
   - Just create a function in .ts file and export an object out of it.