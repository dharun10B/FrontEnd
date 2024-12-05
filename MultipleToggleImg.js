import React, { Component } from 'react';
import Aot from '../assets/images/Aot.jpg';
import Gojo from '../assets/images/Gojo.jpg';
import zoro from '../assets/images/Roronoa zoro.jpg'; 

class MultipleToggleImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: null,  
        };
    }

    toggleImage = (image) => {
        this.setState({ selectedImage: image });
    };

    render() {
        return (
            <div>
                <h2>Multiple Image with Name</h2>

                {this.state.selectedImage && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>{this.state.selectedImage.alt}</h3>
                        <img
                            src={this.state.selectedImage.src}
                            alt={this.state.selectedImage.alt}
                            height='200px'
                            width='200px'
                        />
                    </div>
                )}

                
              
                <button
                    onClick={() => this.toggleImage({ src: Aot, alt: 'Aot' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show Aot
                </button>
                <button
                    onClick={() => this.toggleImage({ src: Gojo, alt: 'Gojo' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show Gojo
                </button>
                <button
                    onClick={() => this.toggleImage({ src: zoro, alt: 'zoro' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show Zoro
                </button>
            </div>
        );
    }
}

export default MultipleToggleImg;
