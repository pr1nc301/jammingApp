import React from 'react';
import styles from './TrackList.module.css';
import Track from '../Track/Track';

const TrackList = (props) => {
    return (
      <div className="TrackList">
        {props.tracks.map((track) => {
          return (
            <Track
              track={track}
              key={track.id}
              onAdd={props.onAdd}
              isRemoval={props.isRemoval}
              onRemove={props.onRemove}
            />
          );
        })}
      </div>
    );
  };

export default TrackList;