    
import React from 'react'
import '../css/style.css';
import SectionCol from './SectionCol';
import SectionHeading from './SectionHeading';
import SecComposition from './SecComposition';
    
const SectionRow = (props) =>{
    return(
        <div className="row">
            <SectionCol>
                <SectionHeading>
                    <h3 className="heading-tertiary u-margin-bottom-small">you're going to fall in love with nature</h3>
                    <p className="paragraph">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Nesciunt laudantium
                        quam aperiam dolore atque ipsa id voluptatum tempora
                        obcaecati animi earum omnis, consequuntur dolores
                        necessitatibus incidunt fugiat sint beatae distinctio!
                    </p>
                </SectionHeading>
                <SectionHeading>
                    <h3 className="heading-tertiary u-margin-bottom-small">Live advantures like you never have before </h3>
                    <p className="paragraph">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Nesciunt laudantium
                        quam id voluptatum tempora obcaecati animi earum
                    </p>
                </SectionHeading>
                <a href="#" className="btn-text">Learn more &rarr;</a>
            </SectionCol>

            <SectionCol>
                <SecComposition />
            </SectionCol>
        </div>
    )   
}

export default SectionRow