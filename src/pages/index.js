import React from "react";
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout';
import { Grid, Container, Button, Image, Card, Icon } from 'semantic-ui-react';



export default () => (
  <Layout>
    <Grid as={Container} style={{ marginTop: '50px', marginBottom:'50px' }} text>
      <Grid.Row>
        <Grid.Column>
          <Image src="https://images.pexels.com/photos/921294/pexels-photo-921294.png?auto=compress&cs=tinysrgb&h=750&w=1260" />
          <h1>This is my title</h1>
          <p>Ex non tempor mollit culpa velit exercitation ea sunt veniam irure sint cupidatat in elit. Irure anim dolore cupidatat consectetur laboris laboris deserunt do elit excepteur voluptate. Est esse magna cupidatat aliqua veniam occaecat ex sit consectetur et quis deserunt ea in. Magna consequat exercitation eu dolor aliqua exercitation nisi ullamco veniam dolore amet.</p>
          <p>Ex non tempor mollit culpa velit exercitation ea sunt veniam irure sint cupidatat in elit. Irure anim dolore cupidatat consectetur laboris laboris deserunt do elit excepteur voluptate. Est esse magna cupidatat aliqua veniam occaecat ex sit consectetur et quis deserunt ea in. Magna consequat exercitation eu dolor aliqua exercitation nisi ullamco veniam dolore amet.</p>
          <p>Ex non tempor mollit culpa velit exercitation ea sunt veniam irure sint cupidatat in elit. Irure anim dolore cupidatat consectetur laboris laboris deserunt do elit excepteur voluptate. Est esse magna cupidatat aliqua veniam occaecat ex sit consectetur et quis deserunt ea in. Magna consequat exercitation eu dolor aliqua exercitation nisi ullamco veniam dolore amet.</p>
          <Button>Click me</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid as={Container}>
      <Grid.Row>
        <Grid.Column>
          <Card.Group itemsPerRow={2}>
          <Card as={Grid}>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image src='https://www.blendswap.com/files/images/2014/02/image72542/medium_ab2c6bd80f9de6167809cd7fd7598a4d.jpg' />
                </Grid.Column>
                <Grid.Column>
                  <Card.Content>
                    <Card.Header><h2>Super title</h2></Card.Header>
                    <Card.Meta>
                      <span className='date'>Eva Spessotto, 22 march 2019</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      22 Friends
                    </a>
                  </Card.Content>
                </Grid.Column>
              </Grid.Row>
            </Card>

            <Card as={Grid}>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image src='https://www.blendswap.com/files/images/2014/02/image72542/medium_ab2c6bd80f9de6167809cd7fd7598a4d.jpg' />
                </Grid.Column>
                <Grid.Column>
                  <Card.Content>
                    <Card.Header><h2>Super title</h2></Card.Header>
                    <Card.Meta>
                      <span className='date'>Eva Spessotto, 22 march 2019</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      22 Friends
                    </a>
                  </Card.Content>
                </Grid.Column>
              </Grid.Row>
            </Card>
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>

  </Layout>

)