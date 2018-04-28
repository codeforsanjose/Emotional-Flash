import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class HomePage extends Component {

   render() {
    return (
          <div className="homepage">
              <section class="hero is-medium">
							  <div class="hero-body hero-container">
							      <div class="container has-text-centered">
							        <div class="column is-6 is-offset-3">
							          <h1 class="title" id="hero-title">
							          	Autism App
							          </h1>
							          <h2 class="subtitle" id="hero-sub">
							            A learning platform for Autism.
							          </h2>
							          <div id="hero-buttons">
										    	<NavLink exact className="nav-link-login" to="/Dashboard">      	
										    		<button class="button is-success is-medium" id="students-button">Get Started</button>
										    	</NavLink> 
							          </div>
							        </div>
							      </div>
							    </div>
             	</section>

             	<section>
						     <div class="columns features cards-section">
						      <div class="column is-4">
						        <div class="card is-shady">
						          <div class="card-image has-text-centered">
						              <i class="fa fa-special fa-pencil"></i>
						          </div>
						          <div class="card-content">
						            <div class="content">
						              <h4>Learning Platform</h4>
						              <p>Our gamified learning platform is based on PECS (Picture Exchange Communication System) to provide a fun learning system. </p>
						              <p><a href="#">Learn more</a></p>
						            </div>
						          </div>
						        </div>
						      </div>
						      <div class="column is-4">
						        <div class="card is-shady">
						          <div class="card-image has-text-centered">
						              <i class="fa fa-special fa-graduation-cap"></i>
						          </div>
						          <div class="card-content">
						            <div class="content">
						              <h4>Lorem Ipsum</h4>
						              <p>Lorem Ipsum Something.</p>
						              <p><a href="#">Learn more</a></p>
						            </div>
						          </div>
						        </div>
						      </div>
						      <div class="column is-4">
						        <div class="card is-shady">
						          <div class="card-image has-text-centered">
						              <i class="fa fa-special fa-puzzle-piece"></i>
						          </div>
						          <div class="card-content">
						            <div class="content">
						              <h4>Track Progress</h4>
						              <p>Keep of track of your child's progress as they learn and earn achievements through the learning platform.</p>
						              <p><a href="#">Learn more</a></p>
						            </div>
						          </div>
						        </div>
						      </div>
						    </div>
             	</section>

						<footer class="footer">
						  <div class="container">
						    <div class="content has-text-centered">
						      <p>
						         Code for San Jose
						      </p>
						    </div>
						  </div>
						</footer>

          </div>
    )
  }
}

