import React from 'react';

class Pagination extends React.Component {

  state = { offset: 0 }

  handleNext = () => {
    const newOffset = this.state.offset + this.props.limit;
    this.props.getter(this.props.limit, newOffset);
    this.setState({offset: newOffset});
  }

  handlePrev = () => {
    const newOffset = this.state.offset - this.props.limit;
    this.props.getter(this.props.limit, newOffset);
    this.setState({ offset: newOffset });
  }

  jumpToPage = offset => {
    this.props.getter(this.props.limit, offset);
    this.setState({ offset });
  }

  render = () => {
    const elem = [];
    for (let i = 0; i < this.props.pageCount; i++) {
      elem.push(
        <li key={i} className="page-item">
          <a
            className="page-link"
            onClick={() => this.jumpToPage(i*this.props.limit)}
            href="/#"
          >
            {i + 1}
          </a>
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

export default Pagination;