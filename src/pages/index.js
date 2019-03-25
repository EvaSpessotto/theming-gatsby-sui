import React from "react";
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout';
import Cards from '../components/Cards'
import { Grid, Container, Button, Image, Header } from 'semantic-ui-react';



export default () => (
  <Layout>
    <Grid as={Container} style={{ marginTop: '50px'}} text>
      <Grid.Row>
        <Grid.Column>
          <Image src="https://images.pexels.com/photos/921294/pexels-photo-921294.png?auto=compress&cs=tinysrgb&h=750&w=1260" />
          <Header as='h1'>This is my title</Header>
          <Header as='h2'>This is a subheader</Header>
          <p>Ex non tempor mollit culpa velit exercitation ea sunt veniam irure sint cupidatat in elit. Irure anim dolore cupidatat consectetur laboris laboris deserunt do elit excepteur voluptate. Est esse magna cupidatat aliqua veniam occaecat ex sit consectetur et quis deserunt ea in. Magna consequat exercitation eu dolor aliqua exercitation nisi ullamco veniam dolore amet.</p>
          <p>Ex non tempor mollit culpa velit exercitation ea sunt veniam irure sint cupidatat in elit. Irure anim dolore cupidatat consectetur laboris laboris deserunt do elit excepteur voluptate. Est esse magna cupidatat aliqua veniam occaecat ex sit consectetur et quis deserunt ea in. Magna consequat exercitation eu dolor aliqua exercitation nisi ullamco veniam dolore amet.</p>
          <p>Ex non tempor mollit culpa velit exercitation ea sunt veniam irure sint cupidatat in elit. Irure anim dolore cupidatat consectetur laboris laboris deserunt do elit excepteur voluptate. Est esse magna cupidatat aliqua veniam occaecat ex sit consectetur et quis deserunt ea in. Magna consequat exercitation eu dolor aliqua exercitation nisi ullamco veniam dolore amet.</p>
          <Button>Click me</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid as={Container} style={{ marginBottom: '50px'}}>
      <Grid.Row>
        <Grid.Column>
          <Cards />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>

)