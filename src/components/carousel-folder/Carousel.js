import React, { Component } from 'react'
import { CarouselItem, CarouselCaption, Carousel, CarouselIndicators, CarouselControl } from 'reactstrap'
import { connect } from 'react-redux'

class HomepageCarousel extends Component {

    state = {
        items: this.props.homeCarouselData,
        activeIndex: 0,
        animating: false
    }


    onExiting = () => {
        //this.state.animating = true;
        this.setState({
            animating: true
        })
    }

    onExited = () => {
        //this.state.animating = false;
        this.setState({
            animating: false
        })
    }

    next = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex = (newIndex) => {
        if (this.state.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;
        //console.log('carousel array ', this.props.homeCarouselData)

        const slides = this.state.items.map((item) => {
            return (
                <CarouselItem
                    className="carouselImg"
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.id}
                >
                    <img src={item.imageURL} alt='carousel' />
                    <CarouselCaption captionText={item.name} captionHeader={item.name} />
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log('state ', state)
    return {
        homeCarouselData: state.hotelReducer.homeCarousel
    }
}

export default connect(mapStateToProps)(HomepageCarousel)