import React, { Component } from 'react';
import Notifications from './notifications';
import ProjectList from '../projects/projectList';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render(){

       // console.log(this.props);

       const {projects} = this.props;
    
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">  {/*Project List Component*/}
                      <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1"> {/*Notifications Component*/}
                     <Notifications />
                    </div>  
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        projects : state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard); //This implies that Dashboard component is now connected to the store