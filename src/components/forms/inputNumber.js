import React, { Component } from 'react'

export default class InputNumber extends Component {
    render() {
        return (
            <div>
                <div>
                    <label 
                        htmlFor={this.props.name} 
                        class="flex text-sm mx-2 w-full pb-1 font-semibold text-gray-700">
                        {this.props.label}
                    </label>
                    <input 
                        onBlur={this.props.onBlur}
                        onChange={this.props.onChange}
                        type="number" 
                        name={this.props.name}
                        id={this.props.id}
                        placeholder={this.props.placeholder} 
                        class="w-full py-2 px-3 text-gray-700 rounded-md"
                        value={this.props.value}
                        min={this.props.min}
                        max={this.props.max}
                        />                
                </div>
            </div>
        )
    }
}
