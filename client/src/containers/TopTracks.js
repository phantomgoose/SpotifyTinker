import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';

class TopTracks extends Component {
  // componentWillMount() {
  //   console.log('Will mount fired');
  //   this.props.verifyLogin();
  // }

  render() {
    if (!this.props.tracks) {
      return <p>No tracks to show... yet?</p>;
    }
    console.log(this.props.tracks);
    const barColors = ['brown', 'orange', 'red', 'purple', 'blue'];
    const overAllStatsCumulative = {
      acousticness: 0,
      danceability: 0,
      energy: 0,
      instrumentalness: 0,
      valence: 0,
    };
    const trackItems = this.props.tracks.map(track => {
      const trackData = {
        labels: ['acousticness', 'danceability', 'energy', 'instrumentalness', 'valence'],
        datasets: [
          {
            label: track.name,
            backgroundColor: barColors,
            data: [track.acousticness, track.danceability, track.energy, track.instrumentalness, track.valence],
          },
        ],
      };
      Object.keys(overAllStatsCumulative).forEach(key => {
        if (track[key] !== undefined) {
          overAllStatsCumulative[key] += track[key];
        }
      });

      return (
        <li key={track.id}>
          {track.artists[0].name} - {track.name}
          <Bar data={trackData} height={100} width={50} options={{ legend: { display: false }, maintainAspectRatio: false }} />
        </li>
      );
    });
    Object.keys(overAllStatsCumulative).forEach(key => {
      overAllStatsCumulative[key] = overAllStatsCumulative[key] / trackItems.length;
    });
    console.log(trackItems);
    console.log(overAllStatsCumulative);
    const overAllStatsData = {
      labels: ['acousticness', 'danceability', 'energy', 'instrumentalness', 'valence'],
      datasets: [
        {
          label: 'Overall averages',
          backgroundColor: barColors,
          data: [
            overAllStatsCumulative.acousticness,
            overAllStatsCumulative.danceability,
            overAllStatsCumulative.energy,
            overAllStatsCumulative.instrumentalness,
            overAllStatsCumulative.valence,
          ],
        },
      ],
    };
    return (
      <ol>
        <div>
          Overall averages
          <Bar data={overAllStatsData} height={100} width={50} options={{ legend: { display: false }, maintainAspectRatio: false }} />
        </div>
        {trackItems}
      </ol>
    );
  }
}

const mapStateToProps = state => {
  let tracks = null;
  if (state.user && state.user.items) {
    tracks = state.user.items;
  }
  return {
    tracks,
  };
};

export default connect(mapStateToProps)(TopTracks);
