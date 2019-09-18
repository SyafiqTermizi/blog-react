import React from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../redux/posts/actions';

class Pagination extends React.Component {

  state = {
    offset: 0,
    pageCount: 0
  }

  handleNext = () => {
    const newOffset = this.state.offset + this.props.limit;
    this.props.getPosts(this.props.limit, newOffset);
    this.setState({offset: newOffset});
  }

  jumpToPage = offset => {
    this.props.getPosts(this.props.limit, offset);
    this.setState({ offset });
  }

  handlePrev = () => {
    const newOffset = this.state.offset - this.props.limit;
    this.props.getPosts(this.props.limit, newOffset);
    this.setState({offset: newOffset});
  }

  componentDidUpdate = prevProps => {
    if (prevProps.count !== this.props.count) {
      this.setState({pageCount: Math.ceil(this.props.count/this.props.limit)})
    }
  }

  render = () => {
    let elem = [];
    for (let i = 0; i < this.state.pageCount; i++) {
      elem.push(
        <li key={i} className="page-item">
          <a className="page-link" onClick={() => this.jumpToPage(i*5)} href="/#">{i + 1}</a>
        </li>
      )
    }
    return (
      <div className="row mt-5 mb-3">
        <div className="col-12 text-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <button
                  disabled={this.state.offset<=0}
                  className="page-link"
                  onClick={this.handlePrev}
                >
                  Previous
                </button>
              </li>
              {elem}
              <li className="page-item">
                <button
                  disabled={this.state.offset === (this.props.count - this.props.limit)}
                  className="page-link"
                  onClick={this.handleNext}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({pagination}) => ({
  count: pagination.count,
  limit: pagination.limit
});

const mapDispatchToProps = {
  getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);