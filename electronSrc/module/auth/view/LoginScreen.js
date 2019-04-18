/**
 * Author: Quan Vo
 * Date: 4/17/19
 */

import authDispatcher from "../model/authDispatcher";

class LoginScreen {
  componentDidMount() {
    authDispatcher.signIn(username, password);
  }

  render() {
    <View>
      {this.props.loading && <ActivityIndicator/>}
      <Button onPress={() => authDispatcher.signIn(username, password)}/>
    </View>
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading
});

connect ...