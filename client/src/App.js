import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Context
import withContext from './Context';
import PrivateRoute from './PrivateRoute';

// Components:
import Header from './components/Header';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import NotFound from './components/NotFound';

// Components with Context:
const HeaderWithContext = withContext(Header);
const CoursesWithContext = withContext(Courses);
const CreateCourseWithContext =  withContext(CreateCourse);
const UpdateCourseWithContext =  withContext(UpdateCourse);
const CourseDetailWithContext =  withContext(CourseDetail);
const UserSignInWithContext =  withContext(UserSignIn);
const UserSignUpWithContext =  withContext(UserSignUp);
const UserSignOutWithContext =  withContext(UserSignOut);

const App = () => {
  return (
    <Router>
        <HeaderWithContext />

        <main>
          <Switch>
            <Route exact path="/" component={CoursesWithContext} />
            <Route path="/courses/create" component={CreateCourseWithContext} />
            <Route path="/courses/:id/update" component={UpdateCourseWithContext} />
            <Route path="/courses/:id" component={CourseDetailWithContext} />
            <Route path="/signin" component={UserSignInWithContext} />
            <Route path="/signup" component={UserSignUpWithContext} />
            <Route path="/signout" component={UserSignOutWithContext} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/forbidden" component={Forbidden} />
            <Route path="/error" component={UnhandledError} />
          </Switch>
        </main>
    </Router>
  );
}

export default App;
