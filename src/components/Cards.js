import React from "react";
import { Grid,Image, Card, Icon, Label } from 'semantic-ui-react';


const Cards = () => {
  return (
    <Card.Group itemsPerRow={2} doubling>
      <Card as={Grid}>
        <Grid.Row columns={2} verticalAlign='middle'>
          <Grid.Column width={6} >
            <Image fluid src='https://images.pexels.com/photos/2033481/pexels-photo-2033481.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
          </Grid.Column>
          <Grid.Column width={10}>
            <Card.Content>
              <Card.Header><h2>Super title</h2></Card.Header>
              <Card.Meta>
                <Image avatar src='https://www.blendswap.com/files/images/2014/02/image72542/medium_ab2c6bd80f9de6167809cd7fd7598a4d.jpg' />
                <span className='date'>Eva Spessotto, 22 march 2019 | 5min</span>
              </Card.Meta>
              <Card.Description>Anim aliquip consectetur amet qui dolore in occaecat ipsum. Commodo sint mollit non anim reprehenderit laborum Lorem pariatur esse fugiat ex pariatur nisi eu.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label>Javascript</Label>
              <Label>React</Label>
              <Label>GatsbyJS</Label>
            </Card.Content>
          </Grid.Column>
        </Grid.Row>
      </Card>
      <Card as={Grid}>
        <Grid.Row columns={2} verticalAlign='middle'>
          <Grid.Column width={6} >
            <Image fluid src='https://images.pexels.com/photos/2033481/pexels-photo-2033481.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
          </Grid.Column>
          <Grid.Column width={10}>
            <Card.Content>
              <Card.Header><h2>Super title</h2></Card.Header>
              <Card.Meta>
                <Image avatar src='https://www.blendswap.com/files/images/2014/02/image72542/medium_ab2c6bd80f9de6167809cd7fd7598a4d.jpg' />
                <span className='date'>Eva Spessotto, 22 march 2019 | 5min</span>
              </Card.Meta>
              <Card.Description>Anim aliquip consectetur amet qui dolore in occaecat ipsum. Commodo sint mollit non anim reprehenderit laborum Lorem pariatur esse fugiat ex pariatur nisi eu.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label>Javascript</Label>
              <Label>React</Label>
              <Label>GatsbyJS</Label>
            </Card.Content>
          </Grid.Column>
        </Grid.Row>
      </Card>
    </Card.Group>
  );
}

export default Cards;