import React from 'react';
import './Question.css'

const Questions = () => {
    return (
        <div className='Questions'>
            <h1 className='title'>Some Quetions answer:</h1>
            <div className='question'>
                <h1>How does react works?</h1>
                <p>Ans:
                    ReactJS is one of the most popular JavaScript libraries for mobile and web application development. One of the biggest advantages of using React is that we can infuse HTML code with JavaScript. Users can create a representation of a DOM node by declaring the Element function in React.
                </p>
            </div>
            <div>
                <h1>Difference Between props and state?</h1>
                <p>Ans:
                    <ul>
                        <li>Props are used to pass data from one component to another.</li>
                        <li>The state is a local data storage that is local to the component only and cannot be passed to other components.</li>
                        <li>The this.setState property is used to update the state values in the component.</li>
                    </ul>
                </p>
            </div>
            <div>
                <h1>Without loading data what else is the useEffect API useful for?</h1>
                <p>Ans: Without loading data useEffect API do fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
            </div>
        </div>
    );
};

export default Questions;