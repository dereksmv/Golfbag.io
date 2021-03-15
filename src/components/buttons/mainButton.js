import React from 'react';

class MainButton extends React.Component {
    render() {
        return(
            <div>
                <div class="inline-flex rounded-md shadow">
                    <button onClick={this.props.onClick} class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                    Submit
                    </button>
                </div>            
            </div>

        )
    }
}

export default MainButton;