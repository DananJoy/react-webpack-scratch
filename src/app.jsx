import React from 'react';
import ReactDOM from 'react-dom';
import css from './styles.scss';

global.jQuery = require('jquery');

export class App extends React.Component {
    render() {

        const title = "React JSX"

        return(
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <h2>Hello Bitches</h2>
                            <img className="img-responsive" src={require('./assets/images/doge.jpeg')} alt=""/>
                        </div>
                        <div className="col-md-4 text-center">
                            <h2>Hello Bitches</h2>
                            <img className="img-responsive" src={require('./assets/images/doge.jpeg')} alt=""/>
                        </div>
                        <div className="col-md-4 text-center">
                            <h2>Hello Bitches</h2>
                            <img className="img-responsive" src={require('./assets/images/doge.jpeg')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));