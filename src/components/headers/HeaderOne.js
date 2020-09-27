import React, { Component } from 'react'

export default class HeaderOne extends Component {
    render() {
        return (
            <div>
                <h1 className="text-2xl font-bold text-gray-900 pt-3">{this.props.text}</h1>
            </div>
        )
    }
}
