/**
 * Author: Quan Vo
 * Date: 4/17/19
 */

class ProductList {
  constructor(props){
    super(props);

    this.state = {
      products: [],
      loading: false
    }
  }

  componentDidMount(){
    this.setState({loading: true})
    const results = Promise('');
    this.setState({products: results});
  }

  render(){

  }

}