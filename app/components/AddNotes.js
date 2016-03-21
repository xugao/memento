var React = require('react');
var NavBar = require('../components/NavBar');

function AddNotes (props){
    return (
        <div>
            <NavBar />
                <header>
                    <div className="header-content">
                        <div className="header-content-inner">
                            <h1>Start Notes Taking</h1>
                        </div>
                    </div>
                </header>
        </div>
    );
}

module.exports = AddNotes;
