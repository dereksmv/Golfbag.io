import React from 'react';

class ButtonWhiteBackground extends React.Component {
    render() {
        return(
            <div>
                <div class="inline-flex rounded-md shadow">
                    <button onClick={this.props.onClick} class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-green-500 bg-white hover:bg-green-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                    {this.props.buttonText}
                    </button>
                </div>            
            </div>

        )
    }
}

export default ButtonWhiteBackground;