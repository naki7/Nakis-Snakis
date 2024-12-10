# Project Goal
The goal of this project was to use React to create the front-end of an artificial e-commerce site. This would include all functionalities required for an e-commerce site, except for making back-end calls/API calls for actual financial transactions.

# First Steps
The project started by laying out all the required components. This would include 'Navbar' for navigating the site on larger screens; 'Hero' for displaying the companies name as well as an image to entice possible clients; 'CompanyInfo' which gives a short description of the company along with another image for visual appeal; 'Products' which would list all the products inside individual components; and lastly, 'Footer' which would contain company details like addresses and contact details.

# Challenges
This project required me to use parts of react functionality like 'useState' in a well structured manner in order to both allow the website to have interactivity but also to maintain important variables that users could adjust via input. These variables needed to be placed appropriately as access to them via 'props' through children components was important, if they were misplaced it could cause either errors in components due to not having any access to these variables, or not having access to ways of updating these variables. That last part was rectified by creating component functions in parent components that would change variables, and the children (or children of children) would only need to call on these function components (while including any appropriate arguments where necessary).

Some key parts I struggled with was accidentally calling hooks within components for onclick functionalities. This was resolved by creating functions in parents that would then be passed down as props. This prevented incorrect hook calls as the function being called was being managed by a parent rather than by children which could cause infinite loops and in general bad hook calling structure.

# Next Steps
I used javascript/react functionalities to create the interactivity between components, such as using a component builder to build multiple product 'Card's so that each individual card would not need to be made, rather the component builder would be invoked with appropriate prop arguments, thus making for quicker and neater code. Similar was done in order to create the 'CheckoutPage' component as it used the 'MiniProducts' component to build multiple divs with appropriate values based on the values that were stored within the 'Cart' from user input.

CSS was used to create the styling of the website and individual react components. 
The primary struggles I had but resolved were around using flex appropriately to create layouts that were both functional and also appealing. The main part I stuggled with from using flex, but eventually learned from a mix of research and trial-and-error, was using flex-direction appropriately and furthermore how that impacted justify and align as the horizontal and vertical axis would change between 'column' and 'row' uses.

# Final Steps
The focus of this was ensuring @media queries were functional in order to create appropriate break points. While the site was designed mobile first, the components would need to change to fit larger screens like tablets, and larger than that like laptop and computer monitors. A last challenge was included as mobile first design has changed slightly as modern phones have started to include screen width sizes as low as 320px, now.
The primary issues with this included having the navbar be visible or hidden depending on screen size (which was handled by including Javascript to determine a change in classnames for larger screens).
Some screen size issues arose through the process of using @media queries as objects that should have changed size from responsive code, were not behaving as anticipated. These specific instances were handled on an individual basis, such as decreasing the size of the navbar list items on below 420px screens as even though it was set to inactive/hidden, it still wanted to take up the same amount of space.

# Lessons Learnt
- React funtionality (especially useState, Props, Hooks, and how React impacts parent-children relationships)
- Javascript conditionals (focusing on how they interact within a react environment and how they can best be used to implement components based on user input)
- @media queries as my knowledge was generally lacking around the topic but this project helped me iron out those details
- learnt that there are great websites that can be used as tools to improve my own sites such as angrytools.com which was useful in simplifying code to make CSS gradients, and FontAwesome to use Icons (although I have since learnt about cdnjs.com which can simplify the process of implementing FontAwesome icons in html style code so that individual icons can be used rather than importing libraries [which will be the preferred process in future projects]).