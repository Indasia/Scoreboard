import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

// use PureComponent for performance issues if a specific component is rerendering too often
class Player extends PureComponent {

    static PropTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number,
        index: PropTypes.number
    };

    render() {
        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
                    {this.props.name}
                </span>

                <Counter
                    score={this.props.score}
                    index={this.props.index}
                    changeScore={this.props.changeScore}
                />
            </div>
        );
    }
}

export default Player;