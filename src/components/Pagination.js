import React from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../redux/posts/actions';

class Pagination extends React.Component {

  state = {
    offset: 0
  }

  handleNext = () => {
    const offset = this.state.offset + this.props.limit;
    this.props.getPosts(this.props.limit, offset);
    this.setState({offset});
  }

  handlePrev = () => {
    if (this.state.offset<=0) return;
    const offset = this.state.offset - this.props.limit
    this.props.getPosts(this.props.limit, offset);
    this.setState({offset});
  }

  render = () => (
    <div className="row mt-5 mb-3">
      <div className="col-12 text-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button className="page-link" onClick={this.handlePrev}>Previous</button>
            </li>
            <li className="page-item"><a className="page-link" href="/#">1</a></li>
            <li className="page-item"><a className="page-link" href="/#">2</a></li>
            <li className="page-item"><a className="page-link" href="/#">3</a></li>
            <li className="page-item">
              <button className="page-link" onClick={this.handleNext}>Next</button>
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