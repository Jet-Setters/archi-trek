import React from 'react';

class ImgBar extends React.Component {

  render() {
    return(
        <>
        {this.props.locationImages.map((url, idx) => 
          <img key={idx}  src={url} alt="" />
          )}
        </>
    )
  }

}

export default ImgBar