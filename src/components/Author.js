import React, { Component } from 'react'

export class Author extends Component {
    render () {
        return (
            <div>
                <div className="control, author">
                    <div className="tags has-addons">
                    <span className="tag is-dark">By Robert Cárdenas</span>
                    <span className="tag is-info">1.0.0</span>
                    </div>
                </div>
            </div>
        )
    }
}

