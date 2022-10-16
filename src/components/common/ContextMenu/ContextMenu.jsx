import React, { Component } from 'react';
import light from "../../Messenger/Messenger_light.module.scss"

// light img
import delete_light from '../../../assets/img/light/delete.png';
import copy_light from '../../../assets/img/light/copy.png';

class ContextMenu extends Component {
    state = {
        xPos: "0px",
        yPos: "0px",
        showMenu: false,
        dobleClick: false,
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
        if (this.state.showMenu) this.setState({ showMenu: false, dobleClick: false });
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
                    <li onClick={() => {
                        navigator.clipboard.writeText(this.props.msgActive.message)
                        this.props.setMsgActive()
                        this.setState({dobleClick: false})
                    }} className={light.item}>
                        <img src={copy_light} alt="#" />
                        <span>Copy</span>
                    </li>
                    <li className={light.item}>
                        <img src={delete_light} alt="#" />
                        <span>Delete</span>
                    </li>
                </ul>
            );
        else return null
    }
}

export default ContextMenu;