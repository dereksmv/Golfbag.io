import React from 'react';

class SecondaryButton extends React.Component {
    render() {
        return(
            <div>
                <div className={"ml-3 inline-flex rounded-md"}>
                    <a href="#" className={"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-green-500 bg-transparent hover:text-green-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"}>
                        Reset Form
                    </a>
                </div>            
            </div>

        )
    }
}

export default SecondaryButton;