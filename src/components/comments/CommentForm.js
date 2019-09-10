import React from 'react';

class CommentForm extends React.Component {

  render = () => (
    <div className="row mt-5 mb-5">
      <div className="col-12">
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Comment" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CommentForm;
