import { Component, Fragment} from 'react'
import './style.css';
import { Menu } from 'antd';
import icon from './logo.png'

import { BorderBottomOutlined } from '@ant-design/icons';

const items = [
    {"key":1,"icon":<BorderBottomOutlined />,"label":"VOA慢速英语"},
    {"key":2,"icon":<BorderBottomOutlined />,"label":"VOA常速英语"},
    {"key":3,"icon":<BorderBottomOutlined />,"label":"VOA英文教学"},
    {"key":4,"icon":<BorderBottomOutlined />,"label":"走遍美国"},
    {"key":5,"icon":<BorderBottomOutlined />,"label":"空中英语教室"},
    {"key":6,"icon":<BorderBottomOutlined />,"label":"大家说英语"}
]

class AppHeader extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <img src={icon} className='app-header-logo'></img>
                <Menu className='app-header-menu' mode="horizontal" items={items} />
            </Fragment>
        )
    }
}

export default AppHeader