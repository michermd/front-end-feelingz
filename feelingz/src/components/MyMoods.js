import React, { Component } from 'react';
import MoodCard from './MoodCard'
import { connect } from 'react-redux'
import { getUserMoods } from '../actions'
import { Grid, Container, Segment, Button } from 'semantic-ui-react';

class MyMoods extends Component {

  componentDidMount = () => {
    fetch(`http://localhost:3001/api/v1/mood_posts/`)
    .then(res => res.json())
    .then(userMoods => {
      this.props.getUserMoods(userMoods.data)
    })
  }



  render() {
    // console.log(this.props);
    return (
      <div>
        <Container>
          <Segment>
            <center>
              <Button className='btn' basic color="purple" onClick={() => this.props.history.push('/index')}>Create a New Mood</Button>
            </center>
          </Segment>
          <Segment>
            <Grid relaxed columns={4}>
              { this.props.user_moods.map(mood => {
                // console.log('mood id', mood.id);
                return (
                  <Grid.Column>
                    <MoodCard key={mood.id} mood={mood}/>
                  </Grid.Column>)
                })
              }
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }

}

const mapsStateToProps = (state) => {
  return {
    user_moods: state.user_moods
  }
}

export default connect(mapsStateToProps, { getUserMoods }) (MyMoods);
