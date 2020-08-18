import React, {Component} from 'react';
import '../../styles/directory/Directory.css';
import MenuItem from '../menu-item/MenuItem';
import {Container,Row,Col} from 'react-bootstrap';
import '../../styles/directory/Directory.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Directory extends Component{
  constructor(props){
    super(props)
    this.state={
      section:[
        {
          title:'hats',
          imageUrl:'https://cdna.lystit.com/photos/3f35-2015/09/23/stussy-maroon-world-tour-snapback-hat-purple-product-4-185181650-normal.jpeg',
          id:'uj1',
          linkUrl:'hats'
        },
        {
          title:'jackets',
          imageUrl:'https://img.abercrombie.com/is/image/anf/KIC_132-2310-1402-330_model1?$product-large-anf$',
          id:'aw2',
          linkUrl:'jackets'
        },
        {
          title:'sneakers',
          imageUrl:'https://img.abercrombie.com/is/image/anf/anf_139541_01_life2?$product-large-anf$',
          id:'we3',
          linkUrl:'sneakers'
        },
        {
          title:'womans',
          imageUrl:'https://img.abercrombie.com/is/image/anf/KIC_155-2121-2305-278_model1?$product-large-anf$',
          size:'large',
          id:'tr4',
          linkUrl:'womans'
        },
        {
          title:'mans',
          imageUrl:'https://img.abercrombie.com/is/image/anf/KIC_122-2912-1006-181_model3?$product-large-anf$',
          size:'large',
          id:'sd5',
          linkUrl:'mans'
        },
      ]
    }
  }
  render(){
    return(
        <div >
          <Container className="HomePage">
            <Row>
              {this.state.section.map(({ id,imageUrl,size, ...othersSectionProps})=>{
                return (
                  id === 'sd5' ?
                  <Col  lg={8} sm={12} md={12} xs={12} >
                   <div style={{backgroundImage:`url(${imageUrl})`}} className={`${size} Directory-menu`}>
                     <MenuItem key={id}{...othersSectionProps}/>
                   </div>

                 </Col>
                   :
                  <Col  lg={4} sm={12} md={6}  >
                   <div style={{backgroundImage:`url(${imageUrl})`}} className={`${size} Directory-menu`}>
                     <MenuItem key={id} {...othersSectionProps}/>
                   </div>
                 </Col>
                )
              })}

            </Row>
          </Container>
        </div>
    )
  }
}
export default Directory;
