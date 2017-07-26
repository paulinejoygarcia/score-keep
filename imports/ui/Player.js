import React from 'react';

import {Players} from './../api/players';

export default class Player extends React.Component {
  render() {
    const player = this.props.player;
    let itemClassName = `item item--position-${player.rank}`;
    return (
      <div className={itemClassName}>
        <div className="player">
          <div className="player__actions">
            <h3 className="player__name">{player.name}</h3>
            <p className="player__stats">
              {player.position} place - {player.score} point(s)
            </p>
          </div>
          <div className="player__actions">
            <button className="button button--round" onClick={(e) => Players.update(player._id, {$inc: {score: 1}})}>+1</button>
            <button className="button button--round" onClick={(e) => Players.update(player._id, {$inc: {score: -1}})}>-1</button>
            <button className="button button--round" onClick={(e) => Players.remove(player._id)}>x</button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  player: React.PropTypes.object.isRequired
};
