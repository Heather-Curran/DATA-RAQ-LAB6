import React from "react";
import Card from 'react-bootstrap/Card';

//Inherite from React.Component
export class BookItem extends React.Component{

    render(){
        return( 
            //Added card
            <div style={{ marginLeft:620}}>
                 <Card className="text-center" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={this.props.book.thumbnailUrl} />
                  <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>
                        <h4>{this.props.book.authors[0]}</h4>
                    </Card.Text>
                  </Card.Body>
                 </Card>
                {/* <h3>{this.props.book.title}</h3>
                <img src={this.props.book.thumbnailUrl} width="200" height="200"/>
                <h4>{this.props.book.authors[0]}</h4> */}
            </div>
        );
    }    
}