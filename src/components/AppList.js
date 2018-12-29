import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
const data = Array.from(new Array(8)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));
class AppList extends Component {
    render() {
        return (<Grid data={data} activeStyle={false} />)
    }
    
}
export default AppList 