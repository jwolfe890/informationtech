import React from 'react';
import './portfolio.css'

const Portfolio = () => {
    return (
            <div class="portfolio">
                    <h2>PROJECTS</h2>
                    <div class="flex-row">
                    <img class="iml" src="http://res.cloudinary.com/dszmqm6le/image/upload/v1519851635/Webp.net-resizeimage_4.jpg" />
                
                <div class="flex-row2">
                        <h1 class="proj">Quoriron</h1>
                        <span class="box1">An application that allows users to ask and answer questions, and to up or down vote the best answers. Utilized React and React-Router 4 to provide a dynamic client-side utilizing fetch calls and multiple lifecycle methods. 
                        Handled API calls with Rails using Restful routing and associated models. Implemented Redux to supply connected React components with updated store data. Incorporated React-Bootstrap and custom CSS to provide responsive styling.</span>
                        <span class="box2">Powered by: React, Ruby on Rails</span>
                        <div class="demos">
                            <a target="_blank" href="https://github.com/jwolfe890/Quoriron"><span class="social">GITHUB</span></a>
                            <a target="_blank" href="https://fast-springs-39703.herokuapp.com/"><span class="social">DEMO</span></a>
                         </div>
                    </div>
                </div>

                <div class="flex-row">
                    <img src="http://res.cloudinary.com/dszmqm6le/image/upload/v1519851635/Webp.net-resizeimage_4_copy_2.jpg" />                    
                    <div class="flex-row2">
                        <h1 class="proj2">Top5</h1>
                        <span class="box1">An application that allows users to make Top 5 lists and search and view other users’ lists. Implemented the Ruby on Rails framework and the Devise gem with OAUTH to provide custom authentication. Incorporated ActiveRecord Scope Methods to organize, rate and classify lists. Incorporated Rails nested routes, validations, scope methods, aliasing, and collection select to allow users multiple categorical options for searching and creating Top 5 lists</span>
                        <span class="box2">Powered by: Ruby on Rails</span>
                        <div class="demos">
                            <a target="_blank" href="https://github.com/jwolfe890/Top5"><span class="social">GITHUB</span></a>
                            <a target="_blank" href="https://www.youtube.com/watch?v=kaB3hOti_34&t=2s"><span class="social">DEMO</span></a>
                        </div>
                    </div>
                </div>

                <div class="flex-row">
                <img src="http://res.cloudinary.com/dszmqm6le/image/upload/v1519851635/Webp.net-resizeimage_4_copy.jpg" />
                    <div class="flex-row2">
                        <h1 class="proj2">Task Manager</h1>
                        <span class="box1">An application that provides users the ability to create create, edit, and delete tasks. Implemented the Jquery within a Ruby on Rails Framework. Translated JSON responses to Javascript model objects and built out methods on the model object prototype. Implemented AJAX calls to a Rails controller for asynchronous changes to the DOM</span>
                        <span class="box2">Powered by: Ruby on Rails, JQuery, JavaScript</span>
                        <div class="demos">
                            <a target="_blank" href="https://github.com/jwolfe890/Task_Manager"><span class="social">GITHUB</span></a>
                            <a target="_blank" href="https://www.youtube.com/watch?v=9sY5lRa1qFo"><span class="social">DEMO</span></a>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Portfolio;



