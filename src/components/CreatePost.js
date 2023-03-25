import React, {Component} from "react";
import testServices from "../services/testServices";
import "../styles/CreatePost.css";
export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);
    
        this.state = {
          id: null,
          eventId: "",
          aggregateId: "", 
          published: false,
    
          submitted: false
        };
      }

      onChangeTitle(e) {
        this.setState({
          eventId: e.target.value
        });
      }
    
      onChangeDescription(e) {
        this.setState({
          aggregateId: e.target.value
        });
      }

      saveTutorial() {
        var data = {
          eventId: this.state.eventId,
          aggregateId: this.state.aggregateId
        };
    
        testServices.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,
              eventId: response.data.eventId,
              aggregateId: response.data.aggregateId,
              published: response.data.published,
    
              submitted: true
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
      newTutorial() {
        this.setState({
          id: null,
          eventId: "",
          aggregateId: "",
          published: false,
    
          submitted: false
        });
      }
    
      render() {
        return (
            <div className="submit-form">
              {this.state.submitted ? (
                <div>
                  <h4>You submitted successfully!</h4>
                  <button className="btn btn-success" onClick={this.newTutorial}>
                    Add
                  </button>
                </div>
              ) : (
                <div>
                  {/* <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="eventId"
                      required
                      value={this.state.eventId}
                      onChange={this.onChangeTitle}
                      name="eventId"
                    />
                  </div> */}
      
                  <div className="form-group">
                    <h2>Create New Post</h2>
                    <br/>
                    <textarea
                      placeholder="contents" 
                      rows="8" 
                      cols="40"
                      className="form-control"
                      id="aggregateId"
                      required
                      value={this.state.aggregateId}
                      onChange={this.onChangeDescription}
                      name="aggregateId"
                    />
                  </div>
      
                  <button onClick={this.saveTutorial} className="btn btn-success">
                    Save Post
                  </button>
                </div>
              )}
            </div>
          );
      }

}