import React from 'react';
import Registration from './components/Registration';
import Preview from './components/Preview';

const App = () => {
    return (
        <div>
            <h1>Registration Form</h1>
            <Registration />
            <h1>Preview</h1>
            <Preview />
        </div>
    );
};

export default App;
