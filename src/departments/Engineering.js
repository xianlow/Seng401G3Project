import React, { Component } from "react";
import testServices from "../services/testServices";

import { Link } from "react-router-dom";
const profilePic = "./images/ess-logo.png"
export default class Engineering extends Component {
  constructor(props) {
    super(props);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);

    this.state = {
      test: [],
      currentTutorial: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }


  retrieveTutorials() {
    testServices.getAll()
      .then(response => {
        this.setState({
          test: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  removeAllTutorials() {
    testServices.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }


  render() {
    const {test} = this.state;

    return (

          <div className="list-group">
            {test &&
              test.map((tutorial) => (
                <div className="post">
                    <div class="post_profile_pic">
                    <img src={profilePic} alt="profile_pic"/>
                    </div>
                  <div class="post_content">
                    <div class="post_text_Container">
                        <div class="username">
                            <h3>Engineering Department</h3>
                        </div>
                        <div class="post_description">
                            <p>{tutorial.eventId}</p>
                            <p>{tutorial.aggregateId}</p>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          
    );
  }
}