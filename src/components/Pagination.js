import React from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../redux/posts/actions';

class Pagination extends React.Component {

  state = {
    offset: 0
  }

  handleNext = () => {
    const newOffset = this.state.offset + this.props.limit;
    this.props.getPosts(this.props.limit, newOffset);
    this.setState({offset: newOffset});
  }

  handlePrev = () => {
    const newOffset = this.state.offset - this.props.limit;
    this.props.getPosts(this.props.limit, newOffset);
    this.setState({offset: newOffset});
  }

  render = () => (
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
            <li className="page-item"><a className="page-link" href="/#">1</a></li>
            <li className="page-item"><a className="page-link" href="/#">2</a></li>
            <li className="page-item"><a className="page-link" href="/#">3</a></li>
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

const mapStateToProps = ({pagination}) => ({
  count: pagination.count,
  limit: pagination.limit
});

const mapDispatchToProps = {
  getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);