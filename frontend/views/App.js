import React from 'react';
import PropTypes from 'prop-types';
import { Button, Menu, Search, Icon } from 'semantic-ui-react';
import { Link, IndexLink } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {

  render() {
    return (
      <Menu borderless stackable>
      <Menu.Item>
      <Icon name='slack'/>
      </Menu.Item>
      <Menu.Item>
      <Button as={IndexLink} to='/'>Login</Button>
      </Menu.Item>
      <Menu.Item>
      <Button as={Link} to='/mockup'>MockProfile</Button>
      </Menu.Item>
      <Menu.Item>
      <Button as={Link} to='/mockinput'>MockOptions</Button>
      </Menu.Item>
       <Menu.Item position='right'>
       <Search icon='search' placeholder='we need a search'/>
      </Menu.Item>
       {/* <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/about">About</Link>
        {' | '}
        <Link to="/mockup">MockProfile</Link>*/}
        <br/>
        {this.props.children}
      </Menu>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
