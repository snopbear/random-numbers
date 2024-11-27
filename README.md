# RandomNumbers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).










### Report on the Implementation of the Random Number Generator Project


### Overview
This project implements a **Random Number Generator** with the following requirements:  
1. A form where users can:  
   - Select a number from **0 to 9** using a dropdown.  
   - Enter the desired length of the random number in an input field.  
2. A submit button to generate and display a random number.  
3. The ability to continuously update the generated number every **5 seconds**.  
4. Unit tests to ensure functionality and robustness.  
5. Optimized performance and memory management to ensure a smooth user experience.  
6. A visually appealing design with **Angular Material** for reusable components.

---

### Key Features
1. **Random Number Generation**:
   - Users can generate a number with a random prefix and a favorite number concatenated.  
   - The generated number is updated periodically to reflect new random prefixes.

2. **Form Validation**:
   - **Favorite Number**: Mandatory field selected via a dropdown.  
   - **Number Length**: Numeric input field with validation rules:  
     - Required.  
     - Minimum value: 1.  
     - Maximum value: 500.

3. **Auto-Update Mechanism**:
   - Automatically updates the generated number at a regular interval (**5 seconds**).  
   - Safe handling ensures only one active interval at a time.

4. **Testing and Quality Assurance**:
   - Unit tests cover critical functions such as random number generation and interval management.  
   - Mock services are used to isolate and test components independently.

---

#### **Performance and Memory Management**
To ensure efficient operation and prevent memory leaks, the following strategies were implemented:

1. **Interval Management**:
   - Only one interval is allowed to run at a time.  
   - Redundant intervals are stopped before starting a new one using `stopAutoUpdating()`.  
   - Upon component destruction, intervals are cleared to release resources.

2. **Methods to Ensure Robust Handling**:
   - `stopAutoUpdating()`: Stops any currently active interval to prevent memory leaks.  
   - `isAutoUpdateRunning()`: Checks if an interval is active to avoid unnecessary duplication.  
   - `startAutoUpdateSafe()`: Combines both functionalities to ensure no redundant intervals are created when starting a new auto-update.

3. **Benefits**:
   - Ensures optimal resource usage and avoids CPU overloading from multiple overlapping intervals.  
   - Prevents memory leaks by clearing intervals upon component destruction or when new intervals are initiated.  

---

#### **Styling and User Experience**
- The design uses **Angular Material** for dropdowns, input fields, and buttons to maintain a clean and modern interface.  
- Visual feedback and clear validation messages guide the user through the form.

---

#### **Project Achievements**
- **Reusable Components**: Leveraged Angular's modularity to integrate reusable components efficiently.  
- **Performance Optimization**: Implemented robust interval management to maintain smooth operation over extended periods.  
- **Memory Safety**: Ensured that the application is free from memory leaks with proactive interval clearing.  
- **Testing Coverage**: Delivered unit tests that cover essential methods and workflows, enhancing confidence in the solution's reliability.

---

#### **Future Improvements**
1. **Dynamic Update Frequency**: Allow users to customize the interval duration instead of a fixed 5-second period.  
2. **Persist Generated Number**: Save generated numbers locally or to a server for historical reference.  
3. **Enhanced Styling**: Add animations and more interactive elements to improve engagement.  
4. **Error Handling**: Display user-friendly messages if invalid inputs are submitted.

