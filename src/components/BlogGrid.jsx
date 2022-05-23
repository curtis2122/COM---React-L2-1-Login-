//import React from 'react';
import React,{ useState, useMemo } from 'react';
import { Col, Row, Card, Spin } from 'antd';
import { Link } from 'react-router-dom';

class BlogGrid extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://COMBlog28032022.curtiswang1.repl.co/api/v1/dogs')
      .then(data => {
        console.log("show" + JSON.stringify(data))
        this.setState({ posts: data });
      })
      .catch(err => console.log("Error fetching dog listing", err));
  }

  render() {
    if (!this.props.dogList.length) {
      return <h2>Loading bloggrid...</h2>
    }
    const cardList = this.props.dogList.map(post => {
      return (
        <div style={{ padding: "12px" }} key={post.ID}>
          <Col span={8}>

            <Card title={post.name} style={{ width: 300 }} bordered={true}>
              <p>AGE: {post.age}</p>
              <p>Sex: {post.sex}</p>
              <p>Shelter ID: {post.shelterid}</p>
              <p>Staff ID: {post.staffid}</p>
              <p>breed: {post.breed}</p>
              <img src={post.imageurl} width="220" height="180"/><br />
              <p></p>
              <Link to={`/detaildog/${post.id}`}>Details </Link><br/>
             
           <Link to={`/updatedog/${post.id}`}>Update or Delete </Link>

            </Card>
          </Col>
        </div>
      )
    });
    return (
      <Row type="flex" justify="space-around">
        {cardList}
      </Row>
    );
  }
}

export default BlogGrid;