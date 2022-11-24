import React, { Component } from 'react';

import light from "../../Messenger/Messenger_light.module.scss"

// light img
import delete_light from '../../../assets/img/light/delete.png';
import copy_light from '../../../assets/img/light/copy.png';

class ContextMenu extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        xPos: "0px",
        yPos: "0px",
        showMenu: false,
        dobleClick: false
    }

    componentDidMount() {
        document.addEventListener("click", this.handleClick);
        document.addEventListener("contextmenu", this.handleContextMenu);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick);
        document.removeEventListener("contextmenu", this.handleContextMenu);
    }

    handleClick = (e) => {
        if (this.state.showMenu) {
            this.setState({ showMenu: false, dobleClick: false })
            this.props.setMsgActive()
        };
    };

    handleContextMenu = (e) => {
        e.preventDefault();
        if (this.props.msgActive && !this.state.dobleClick) {
            this.setState({
                xPos: `${e.pageX - 150}px`,
                yPos: `${e.pageY}px`,
                showMenu: true,
                dobleClick: true
            });
        }
    };

    copyClick = (e) => {
        navigator.clipboard.writeText(this.props.msgActive.message)
        this.props.setMsgActive()
        this.setState({ dobleClick: false })
        this.props.setPopupText("Message copied")
        setTimeout(() => {this.props.setPopupText(null)}, 2000)
    }

    deleteClick = (e) => {
        this.setState({ dobleClick: false })
        this.props.setPopupText("Message deleted")
        this.props.deleteMsg(this.props.msgActive ,this.props.chatActive)
        setTimeout(() => {this.props.setPopupText(null)}, 2000)
    }

    render() {
        const { showMenu, xPos, yPos } = this.state;

        if (showMenu)
            return (
                <ul
                    className={light.context_menu}
                    style={{
                        top: yPos,
                        left: xPos,
                        position: "absolute",
                    }}
                >
                    <li onClick={this.copyClick.bind(this)} className={light.item}>
                        <img src={copy_light} alt="#" />
                        <span>Copy</span>
                    </li>
                    <li onClick={this.deleteClick.bind(this)} className={light.item}>
                        <img src={delete_light} alt="#" />
                        <span>Delete</span>
                    </li>
                </ul>
            );
        else return null
    }
}

export default ContextMenu;