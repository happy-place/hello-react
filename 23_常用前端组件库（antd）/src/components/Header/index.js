import React, {Component} from 'react';
import {Button,Menu, Dropdown,DatePicker, Space } from 'antd';
import {ArrowLeftOutlined,LeftCircleFilled,DownOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css'

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
        <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
);

const { RangePicker } = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}

function onChange2(dates, datesString) {
    console.log(dates, datesString);
}

class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <button className={'header-btn'}>按钮1</button>
                    <Button type="primary">primary 按钮</Button>
                    <Button type="dashed">dashed 按钮</Button>
                    <Button type="link">link 按钮</Button>
                    <Button type="default">default 按钮</Button>
                    <Button type="ghost">ghost 按钮</Button>
                    <Button type="text">text 按钮</Button>
                </div>
                <hr/>
                <div>
                    <ArrowLeftOutlined style={{fontSize: '30px'}}/>
                    <LeftCircleFilled style={{fontSize: '30px'}}/>
                </div>
                <hr/>
                <div>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Hover me <DownOutlined />
                        </a>
                    </Dropdown>
                </div>
                <div>
                    <Space direction="vertical">
                        <DatePicker onChange={onChange} />
                        <RangePicker onChange={onChange2}/>
                    </Space>
                </div>
            </div>
        );
    }
}

export default Header;