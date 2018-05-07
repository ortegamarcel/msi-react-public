import React from 'react';

import Paper from 'material-ui/Paper';

export default class Settings extends React.Component {
    render() {
        return (
            <div>
                <Paper rounded={false} style={{minHeight:"200px"}}>
                    <h1>Einstellungen</h1>
                </Paper>
            </div>
        );
    }
}
