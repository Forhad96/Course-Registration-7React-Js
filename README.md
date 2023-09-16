
# Course Registration App
Exploring the world of learning, the web application opens the door to opportunities. find the course that moves you and make the journey with the click of a button. track your progress through the credits and discover the joy of discovery.



## Discuss how i managed the state in your assignment project.

Regarding how I managed state in my assignment project, I used React’s built-in useState hook to manage local state within each component. I also used useEffect hook to handle side effects such as fetching data from an API. For global state management.**Details are described below:-**

- **To manage the api data**: I use a useState hook that stores the data in a state variable. I also use a useEffect hook that runs after the component renders and fetches the data from the api. Inside the useEffect hook, I use the setState function to update the state variable with the fetched data. Based on this data, I dynamically create cards that display the course information.

- **To manage the selected course data**: I use another useState hook that stores an array of selected courses in a state variable. I also use a setState function to update the state variable when the user selects or deselects a course. Based on this state variable, I display a cart that shows the selected courses and their information.

- **To manage the total credit hours**: I use another useState hook that stores the total credit hours in a state variable. I also use a setState function to update the state variable when the user selects or deselects a course. I use a reduce function to calculate the total credit hours from the selected courses array. Based on this state variable, I display the total credit hours in the cart.

- **To manage the remaining credit hours**: I use another useState hook that stores the remaining credit hours in a state variable. I also use a setState function to update the state variable when the user selects or deselects a course. I use a subtraction operation to calculate the remaining credit hours from the total credit hours and the maximum credit hours allowed. Based on this state variable, I display the remaining credit hours in the cart.



## Project features

- **Course selection**: Users can select any course they want by clicking on the "select" button on each course card. The selected course will be added to the cart.
- **Credit update**: When user select any course  select any courses The total credit hour will be updated automatically and the credit hour remaining will be updated accordingly.
- **Price update**: The total price of the selected courses will be updated automatically when a user selects or deselects a course.
- **Toast messages**: Users will see a toast message when they select a course, when their credit hour is up to 20, or when their credit hour remaining is less than 0. The toast messages will inform the users of their current status and provide feedback.
- **Real-time updates**: This feature allows users to receive real-time updates on changes made to the application.


 


## How to use

To use this application, follow these steps:

1. Visit the website and browse through the available courses and click on the "select" button on any course you want to enroll in.
2. You will see a toast message confirming your selection and showing your credit hour remaining.
3. You can view your selected courses on the cart and see the total price of your selected courses.
4. If your credit hour is up to 20, you will see a toast message informing you of that.
5. If your credit hour remaining is less than 0, you will see a toast message warning you of that.


## Notes

- This application is built using React, Tailwind Css, and daisyUI.
- This application uses react-toastify to display toast messages.
- This application uses prop-types to prop-type validation.
- This application uses React Icons for Icons.




## Demo
https://i.ibb.co/kxqsVMB/cousre-Reg.jpg
## Screenshots

![App Screenshot](https://i.ibb.co/kxqsVMB/cousre-Reg.jpg)
![App Screenshot](https://i.ibb.co/3cVxmrM/Screenshot-162.png)



## Authors

- [@Forhad96](https://github.com/Forhad96)


## Feedback

If you have any feedback, please let me know forhad69@outlook.com




