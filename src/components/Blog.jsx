import React from 'react';

const Blog = () => {
    return (
        <div className='mb-12 md:grid md:grid-cols-2 gap-5 my-container'>
            <div className='bg-purple-50 my-container mt-12 text-justify rounded-xl shadow-lg hover:bg-pink-50'>
                <h4 className='text-xl font-bold py-5 px-4'>when should you use context api?</h4>
                <p className='pb-5 px-4 hover:font-medium transition duration-1000'>The Context API in React is a way to share data across the component tree without passing props down manually at every level. I should consider using the Context API when:

                    Multiple components share the same data: If i have several components that need access to the same data, using the Context API can simplify your code by providing a single source of truth for that data.

                    Deeply nested components: Passing data through several layers of components using props can lead to "prop drilling," which can make my code difficult to read and maintain. In such cases, the Context API can help reduce the complexity of passing props down to deeply nested components.

                    Dynamic data: If the data that i need to pass down to components changes frequently, using the Context API can make it easier to update that data in a central location and have those changes propagate down to all of the components that depend on it.
                </p>
            </div>
            <div className='bg-purple-50 my-container mt-12 text-justify rounded-xl shadow-lg hover:bg-pink-50'>
                <h4 className='text-xl font-bold py-5 px-4'>what is custom hook?</h4>
                <p className='pb-5 px-4 hover:font-medium transition duration-1000'>A custom hook in React is a JavaScript function that uses React hooks such as useState, useEffect, useContext, etc. and provides a reusable piece of code that encapsulates some stateful logic. Custom hooks allow you to reuse complex stateful logic across multiple components without duplicating code.
                </p>
            </div>
            <div className='bg-purple-50 my-container mt-12 text-justify rounded-xl shadow-lg hover:bg-pink-50'>
                <h4 className='text-xl font-bold py-5 px-4'>what is useRef?</h4>
                <p className='pb-5 px-4 hover:font-medium transition duration-1000'>useRef is a hook in React that provides a way to store and manipulate mutable values that persist across component renders without triggering a re-render.

                    The useRef hook returns an object with a current property that can be used to store any mutable value, such as a DOM node reference, a timer ID, or any other value that needs to persist between renders.useRef can also be used to store values that need to persist across renders, but don't need to trigger a re-render.
                </p>
            </div>
            <div className='bg-purple-50 my-container mt-12 text-justify rounded-xl shadow-lg hover:bg-pink-50'>
                <h4 className='text-xl font-bold py-5 px-4'>what is UseMemo?</h4>
                <p className='pb-5 px-4 hover:font-medium transition duration-1000'>useMemo is a hook in React that allows you to optimize performance by memoizing the result of a function so that it only re-computes when the dependencies change.

                    The useMemo hook takes two arguments: a function that returns a value, and an array of dependencies that the function relies on. If any of the dependencies change, the function will be re-executed and the new result will be returned. If none of the dependencies change, the memoized result from the previous render will be returned without re-executing the function.
                </p>
            </div>


        </div>
    );
};

export default Blog;