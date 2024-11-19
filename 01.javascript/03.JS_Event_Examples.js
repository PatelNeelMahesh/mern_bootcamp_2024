### **List of Common Event Listeners**

1. **`click`**  
2. **`dblclick`**  
3. **`mouseover`**  
4. **`mouseout`**  
5. **`mouseenter`**  
6. **`mouseleave`**  
7. **`keydown`**  
8. **`keyup`**  
9. **`keypress`**  
10. **`input`**  
11. **`change`**  
12. **`focus`**  
13. **`blur`**  
14. **`submit`**  
15. **`resize`**  
16. **`scroll`**  
17. **`load`**  
18. **`unload`**  
19. **`contextmenu`**  
20. **`drag`**  
21. **`drop`**

---

### **1. `click`**

#### **Description**:
The `click` event is triggered when the user clicks on an element, such as a button, link, or any other clickable item.

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Click Event</title>
</head>
<body>
  <button id="clickBtn">Click Me!</button>

  <script>
    const button = document.getElementById('clickBtn');
    button.addEventListener('click', () => {
      alert('Button clicked!');
    });
  </script>
</body>
</html>
```

**Explanation**:  
- When the user clicks on the button, an alert is shown.

---

### **2. `dblclick`**

#### **Description**:
The `dblclick` event is fired when a user double-clicks on an element.

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Double Click Event</title>
</head>
<body>
  <button id="dblClickBtn">Double-click Me!</button>

  <script>
    const button = document.getElementById('dblClickBtn');
    button.addEventListener('dblclick', () => {
      alert('Button double-clicked!');
    });
  </script>
</body>
</html>
```

**Explanation**:  
- When the user double-clicks the button, an alert is shown.

---

### **3. `mouseover`**

#### **Description**:
The `mouseover` event is triggered when the mouse pointer enters the boundaries of an element.

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mouse Over Event</title>
</head>
<body>
  <div id="hoverDiv" style="width: 200px; height: 200px; background-color: lightblue;">
    Hover over me!
  </div>

  <script>
    const hoverDiv = document.getElementById('hoverDiv');
    hoverDiv.addEventListener('mouseover', () => {
      hoverDiv.style.backgroundColor = 'lightgreen';
    });
  </script>
</body>
</html>
```

**Explanation**:  
- When the mouse hovers over the `<div>`, its background color changes to light green.

---

### **4. `mouseout`**

#### **Description**:
The `mouseout` event occurs when the mouse pointer leaves the boundaries of an element.

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mouse Out Event</title>
</head>
<body>
  <div id="hoverDiv" style="width: 200px; height: 200px; background-color: lightblue;">
    Hover over and out
  </div>

  <script>
    const hoverDiv = document.getElementById('hoverDiv');
    hoverDiv.addEventListener('mouseout', () => {
      hoverDiv.style.backgroundColor = 'lightblue';
    });
  </script>
</body>
</html>
```

**Explanation**:  
- When the mouse leaves the `<div>`, its background color resets to light blue.

---

### **5. `mouseenter`**

#### **Description**:
The `mouseenter` event is similar to `mouseover`, but it does not bubble (it is not propagated to ancestor elements).

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mouse Enter Event</title>
</head>
<body>
  <div id="hoverDiv" style="width: 200px; height: 200px; background-color: lightblue;">
    Enter me!
  </div>

  <script>
    const hoverDiv = document.getElementById('hoverDiv');
    hoverDiv.addEventListener('mouseenter', () => {
      hoverDiv.style.backgroundColor = 'lightgreen';
    });
  </script>
</body>
</html>
```

**Explanation**:  
- When the mouse pointer enters the `<div>`, the background color changes to light green.

---

### **6. `mouseleave`**

#### **Description**:
The `mouseleave` event is similar to `mouseout`, but like `mouseenter`, it does not bubble.

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mouse Leave Event</title>
</head>
<body>
  <div id="hoverDiv" style="width: 200px; height: 200px; background-color: lightblue;">
    Leave me!
  </div>

  <script>
    const hoverDiv = document.getElementById('hoverDiv');
    hoverDiv.addEventListener('mouseleave', () => {
      hoverDiv.style.backgroundColor = 'lightblue';
    });
  </script>
</body>
</html>
```

**Explanation**:  
- When the mouse leaves the `<div>`, the background color resets to light blue.

---

### **7. `keydown`**

#### **Description**:
The `keydown` event is triggered when a key is pressed down.

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Key Down Event</title>
</head>
<body>
  <p>Press any key!</p>
  <p id="keyDisplay"></p>

  <script>
    document.addEventListener('keydown', (event) => {
      const display = document.getElementById('keyDisplay');
      display.textContent = `Key pressed: ${event.key}`;
    });
  </script>
</body>
</html>
```

**Explanation**:  
- When the user presses a key, it is displayed on the page.

---

### **8. `keyup`**

#### **Description**:
The `keyup` event is triggered when a key is released after being pressed.

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Key Up Event</title>
</head>
<body>
  <p>Press and release any key!</p>
  <p id="keyDisplay"></p>

  <script>
    document.addEventListener('keyup', (event) => {
      const display = document.getElementById('keyDisplay');
      display.textContent = `You released: ${event.key}`;
    });
  </script>
</body>
</html>
```

**Explanation**:  
- The `keyup` event captures the key released by the user and displays it.

---

### **9. `keypress`**

#### **Description**:
The `keypress` event is fired when the user presses a key that produces a character value (e.g., letters and numbers).

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Key Press Event</title>
</head>
<body>
  <p>Press a key!</p>
  <p id="keyDisplay"></p>

  <script>
    document.addEventListener('keypress', (event) => {
      const display = document.getElementById('keyDisplay');
      display.textContent = `Character pressed: ${event.key}`;
    });
  </script>
</body>
</html>
```

**Explanation**:  
- Captures key presses that correspond to printable characters.

---

### **10. `input`**

####

 **Description**:
The `input` event occurs when the value of an `<input>` element changes, often used with text fields.

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Input Event</title>
</head>
<body>
  <input type="text" id="inputField" placeholder="Type something...">
  <p id="output"></p>

  <script>
    const inputField = document.getElementById('inputField');
    inputField.addEventListener('input', () => {
      const output = document.getElementById('output');
      output.textContent = `You typed: ${inputField.value}`;
    });
  </script>
</body>
</html>
```

**Explanation**:  
- Every time the user types something in the input field, the text is displayed below the field.

---

---

### **11. `change`**

#### **Description**:
The `change` event occurs when the value of an `<input>`, `<select>`, or `<textarea>` element has been modified and the user leaves the field.

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Change Event</title>
</head>
<body>
  <select id="colorSelect">
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
  </select>
  <p id="selectedColor"></p>

  <script>
    const selectElement = document.getElementById('colorSelect');
    selectElement.addEventListener('change', () => {
      const selected = selectElement.value;
      document.getElementById('selectedColor').textContent = `You selected: ${selected}`;
    });
  </script>
</body>
</html>
```

**Explanation**:  
- When the user selects a color from the dropdown and changes the selection, it displays the selected color.

---

### **12. `focus`**

#### **Description**:
The `focus` event occurs when an element (such as an input field or button) gains focus, meaning the user clicks on it or navigates to it via keyboard.

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Focus Event</title>
</head>
<body>
  <input type="text" id="focusInput" placeholder="Click to focus">

  <script>
    const inputField = document.getElementById('focusInput');
    inputField.addEventListener('focus', () => {
      inputField.style.backgroundColor = 'lightyellow';  // Change background when focused
    });
  </script>
</body>
</html>
```

**Explanation**:  
- When the input field gains focus, the background color changes to light yellow.

---

### **13. `blur`**

#### **Description**:
The `blur` event occurs when an element loses focus, typically after the user clicks away from the element or uses the keyboard to move to another element.

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blur Event</title>
</head>
<body>
  <input type="text" id="blurInput" placeholder="Click and then click away">

  <script>
    const inputField = document.getElementById('blurInput');
    inputField.addEventListener('blur', () => {
      inputField.style.backgroundColor = '';  // Reset background color when blur
    });
  </script>
</body>
</html>
```

**Explanation**:  
- When the input field loses focus, the background color is reset.

---

### **14. `submit`**

#### **Description**:
The `submit` event is triggered when a form is submitted, either by clicking a submit button or pressing Enter in a text field within the form.

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Submit Event</title>
</head>
<body>
  <form id="myForm">
    <input type="text" id="formInput" placeholder="Type something">
    <button type="submit">Submit</button>
  </form>

  <script>
    const form = document.getElementById('myForm');
    form.addEventListener('submit', (event) => {
      event.preventDefault();  // Prevent form from submitting and refreshing the page
      alert('Form submitted!');
    });
  </script>
</body>
</html>
```

**Explanation**:  
- The form submission triggers an alert without actually submitting the form to prevent the page from refreshing.

---

### **15. `resize`**

#### **Description**:
The `resize` event occurs when the browser window is resized.

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resize Event</title>
</head>
<body>
  <p>Resize the browser window to trigger this event!</p>

  <script>
    window.addEventListener('resize', () => {
      console.log('Window resized!');
    });
  </script>
</body>
</html>
```

**Explanation**:  
- Every time the window is resized, a message is logged in the console.

---

### **16. `scroll`**

#### **Description**:
The `scroll` event occurs when the user scrolls the content of an element (e.g., window, or a specific scrollable div).

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scroll Event</title>
</head>
<body>
  <div style="height: 1000px;">
    Scroll to see the event in action!
  </div>

  <script>
    window.addEventListener('scroll', () => {
      console.log('Page is being scrolled!');
    });
  </script>
</body>
</html>
```

**Explanation**:  
- Logs a message to the console whenever the page is scrolled.

---

### **17. `load`**

#### **Description**:
The `load` event is fired when an element (like an image or script) has finished loading. It can also be used on the `window` object to indicate that all resources have been loaded.

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Load Event</title>
</head>
<body>
  <img id="image" src="https://via.placeholder.com/150" alt="Placeholder Image">

  <script>
    window.addEventListener('load', () => {
      alert('All resources are fully loaded!');
    });
  </script>
</body>
</html>
```

**Explanation**:  
- An alert is shown when all resources (images, scripts, etc.) on the page have finished loading.

---

### **18. `unload`**

#### **Description**:
The `unload` event occurs when the document or a window is about to be unloaded, typically when a user is navigating away from the page.

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unload Event</title>
</head>
<body>
  <p>Try to navigate away from this page!</p>

  <script>
    window.addEventListener('unload', () => {
      alert('You are leaving this page!');
    });
  </script>
</body>
</html>
```

**Explanation**:  
- An alert is shown when the user tries to leave the page or close the browser window.

---

### **19. `contextmenu`**

#### **Description**:
The `contextmenu` event occurs when the user right-clicks (or long presses) on an element, typically to open the context menu.

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Context Menu Event</title>
</head>
<body>
  <p>Right-click on this page!</p>

  <script>
    window.addEventListener('contextmenu', (event) => {
      event.preventDefault();  // Prevent the default context menu
      alert('Custom context menu opened!');
    });
  </script>
</body>
</html>
```

**Explanation**:  
- Shows an alert when the user right-clicks anywhere on the page, and prevents the default context menu from appearing.

---

### **20. `drag`**

#### **Description**:
The `drag` event is triggered when an element is being dragged.

##### **Code Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Drag Event</title>
</head>
<body>
  <div id="dragMe" style="width: 100px; height: 100px; background-color: lightcoral;" draggable="true">
    Drag me!
  </div>

  <script>
    const draggableElement = document.getElementById('dragMe');
    draggableElement.addEventListener('drag', () => {
      console.log('

Element is being dragged!');
    });
  </script>
</body>
</html>
```

**Explanation**:  
- Logs to the console when the draggable element is being dragged.

---

### Additional JavaScript Event Listeners

---

### **1. `abort`**
   - **Description**: Fired when an operation (like an image or script loading) is aborted.
   - **Example**: Used to detect when a resource is canceled before it is fully loaded.
   - **Code Example**:
   ```html
   <img src="image.jpg" id="image" onabort="alert('Image load aborted!')">
   ```

---

### **2. `animationiteration`**
   - **Description**: Triggered when a CSS animation iteration completes.
   - **Example**: Used when you want to take action after each animation cycle.
   - **Code Example**:
   ```html
   <div id="box" style="animation: myAnimation 4s infinite;">Box</div>

   <script>
     document.getElementById('box').addEventListener('animationiteration', function() {
       console.log('Animation cycle completed');
     });
   </script>
   ```

---

### **3. `pointerdown`**
   - **Description**: Triggered when a pointer (mouse, touch, stylus) is pressed on the element.
   - **Example**: Used for precise pointer interaction in touch or mouse-based devices.
   - **Code Example**:
   ```html
   <div id="pointerElement" style="width: 100px; height: 100px; background-color: lightblue;">
     Press the pointer here.
   </div>

   <script>
     document.getElementById('pointerElement').addEventListener('pointerdown', () => {
       console.log('Pointer is down!');
     });
   </script>
   ```

---

### **4. `pointermove`**
   - **Description**: Triggered when a pointer (mouse, touch, stylus) is moved over the element.
   - **Example**: Similar to `mousemove` but supports more input types.
   - **Code Example**:
   ```html
   <div id="pointerArea" style="width: 100px; height: 100px; background-color: lightgreen;">
     Move the pointer here.
   </div>

   <script>
     document.getElementById('pointerArea').addEventListener('pointermove', (event) => {
       console.log(`Pointer moved to: (${event.clientX}, ${event.clientY})`);
     });
   </script>
   ```

---

### **5. `pointerup`**
   - **Description**: Triggered when a pointer is released.
   - **Example**: Typically used in combination with `pointerdown` to track pointer actions.
   - **Code Example**:
   ```html
   <div id="pointerArea" style="width: 100px; height: 100px; background-color: lightyellow;">
     Release the pointer here.
   </div>

   <script>
     document.getElementById('pointerArea').addEventListener('pointerup', () => {
       console.log('Pointer released!');
     });
   </script>
   ```

---

### **6. `pointerenter`**
   - **Description**: Similar to `mouseenter`, but supports all pointer devices (mouse, touch, stylus).
   - **Example**: Used to detect when a pointer enters an element.
   - **Code Example**:
   ```html
   <div id="enterArea" style="width: 100px; height: 100px; background-color: lightcoral;">
     Enter the area with pointer.
   </div>

   <script>
     document.getElementById('enterArea').addEventListener('pointerenter', () => {
       console.log('Pointer entered the area');
     });
   </script>
   ```

---

### **7. `pointerleave`**
   - **Description**: Similar to `mouseleave`, but supports all pointer devices.
   - **Example**: Used to detect when the pointer leaves an element.
   - **Code Example**:
   ```html
   <div id="leaveArea" style="width: 100px; height: 100px; background-color: lightpink;">
     Leave the area with pointer.
   </div>

   <script>
     document.getElementById('leaveArea').addEventListener('pointerleave', () => {
       console.log('Pointer left the area');
     });
   </script>
   ```

---

### **8. `scroll`** (on specific elements)
   - **Description**: Fired when a scrollable element’s content is scrolled (can be the `window` or any element with a scrollable container).
   - **Example**: This is a more common use case where you want to track scrolling on a specific element, not the window.
   - **Code Example**:
   ```html
   <div id="scrollArea" style="width: 100px; height: 100px; overflow: scroll;">
     <div style="height: 300px;">Scroll Me</div>
   </div>

   <script>
     document.getElementById('scrollArea').addEventListener('scroll', () => {
       console.log('Scrolled inside the div!');
     });
   </script>
   ```

---

### **9. `storage`**
   - **Description**: Fired when there is a change to the `localStorage` or `sessionStorage` for the document.
   - **Example**: Useful in multi-tab communication, or when tracking changes to stored data.
   - **Code Example**:
   ```html
   <script>
     window.addEventListener('storage', (event) => {
       console.log(`Storage event: ${event.key} changed to ${event.newValue}`);
     });

     // Set an item in localStorage to trigger the event
     localStorage.setItem('user', 'John');
   </script>
   ```

---

### **10. `visibilitychange`**
   - **Description**: Fired when the visibility state of the document changes (e.g., when the page is hidden or visible in the browser tab).
   - **Example**: Used to track when a user switches between browser tabs or minimizes the window.
   - **Code Example**:
   ```html
   <script>
     document.addEventListener('visibilitychange', () => {
       if (document.hidden) {
         console.log('Page is hidden');
       } else {
         console.log('Page is visible');
       }
     });
   </script>
   ```

---

### **11. `touchstart`**
   - **Description**: Triggered when the user touches the screen (only on touch devices).
   - **Example**: Used for touch interaction on mobile devices.
   - **Code Example**:
   ```html
   <div id="touchArea" style="width: 100px; height: 100px; background-color: lightblue;">
     Touch me!
   </div>

   <script>
     document.getElementById('touchArea').addEventListener('touchstart', () => {
       console.log('Touch started');
     });
   </script>
   ```

---

### **12. `touchmove`**
   - **Description**: Triggered when the user moves their finger on the screen (only on touch devices).
   - **Example**: Used to track the movement of a touch.
   - **Code Example**:
   ```html
   <div id="touchArea" style="width: 100px; height: 100px; background-color: lightgreen;">
     Move your finger here.
   </div>

   <script>
     document.getElementById('touchArea').addEventListener('touchmove', (event) => {
       console.log(`Touch moved to: (${event.touches[0].clientX}, ${event.touches[0].clientY})`);
     });
   </script>
   ```

---

### **13. `touchend`**
   - **Description**: Triggered when the user lifts their finger off the screen (only on touch devices).
   - **Example**: Used to detect the end of a touch gesture.
   - **Code Example**:
   ```html
   <div id="touchArea" style="width: 100px; height: 100px; background-color: lightyellow;">
     Release your finger here.
   </div>

   <script>
     document.getElementById('touchArea').addEventListener('touchend', () => {
       console.log('Touch ended');
     });
   </script>
   ```

---

### **14. `contextmenu`**
   - **Description**: Triggered when the user right-clicks on an element (or uses a long press on touch devices).
   - **Example**: Used for custom context menu handling.
   - **Code Example**:
   ```html
   <div id="contextMenuArea" style="width: 200px; height: 200px; background-color: lightgray;">
     Right-click or long-press me for custom context menu.
   </div>

   <script>
     document.getElementById('contextMenuArea').addEventListener('contextmenu', (event) => {
       event.preventDefault();  // Prevent default context menu
       alert('Custom context menu triggered');
     });
   </script>
   ```

---

15. **`mouseenter`**
   - **Description**: Fired when the mouse enters an element.
   - **Example**: Similar to `mouseover`, but it doesn’t trigger when the mouse enters child elements of the target.

16. **`mouseleave`**
   - **Description**: Fired when the mouse leaves an element.
   - **Example**: Similar to `mouseout`, but it doesn’t trigger when the mouse leaves child elements.

17. **`keydown`**
   - **Description**: Fired when a key is pressed down.
   - **Example**: Used for capturing keyboard input.

18. **`keyup`**
   - **Description**: Fired when a key is released.
   - **Example**: Often used to capture the final input after a key press.

19. **`keypress`** (deprecated)
   - **Description**: Fired when a key is pressed and released.
   - **Example**: This event was deprecated and replaced by `keydown` and `keyup`.

20. **`animationstart`**
   - **Description**: Triggered when a CSS animation starts.
   - **Example**: Typically used in conjunction with CSS animations for dynamic effects.

21. **`animationend`**
   - **Description**: Triggered when a CSS animation ends.
   - **Example**: Useful for handling actions after a CSS animation completes.

22. **`transitionend`**
   - **Description**: Fired when a CSS transition ends.
   - **Example**: Used when you need to perform actions after a CSS transition is complete.

23. **`focusin`**
   - **Description**: Fired when an element or any of its child elements receives focus. Propagates from the target to the root.
   
24. **`focusout`**
    - **Description**: Fired when an element or any of its child elements loses focus. Propagates from the target to the root.
