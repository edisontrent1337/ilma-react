import React from "react";
import "./button.fx.css";

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering: false
        };
        this.hoverHandler = this.hoverHandler.bind(this);
        this.leaveHandler = this.leaveHandler.bind(this);
    }

    componentDidMount() {
    }

    hoverHandler() {
        this.setState({
            hovering: true
        });
    }

    leaveHandler() {
        this.setState({
            hovering: false
        });
    }

    render() {
        const {color, mode, onClick, value, hint} = this.props;
        let validator = this.props.validator;
        const formattedHint =
            hint &&
            hint.map((elem, i) => {
                return <span key={i}> {elem} </span>;
            });
        if (typeof validator === "undefined") {
            validator = () => true;
        }
        return (
            <div>
                <button
                    className="button"
                    style={{
                        fontSize: "18px",
                        fontWeight: "400",
                        backgroundColor: this.state.hovering ? color : "transparent",
                        border:
                            "1px solid " +
                            (this.state.hovering ? "transparent" : this.props.color),
                        color: this.state.hovering ? "#FFF" : color,
                        padding: mode === "big" ? "10px 15px 10px 15px" : "5px 15px 5px 15px",
                        borderRadius: "6px",
                        opacity: validator ? "0.8" : "0.3",
                        transition: "0.2s",
                        display: "block",
                        width: mode === "big" ? "100%" : "auto",
                        float: 'left',
                        marginRight: "10px"
                    }}
                    onClick={onClick}
                    onMouseLeave={this.leaveHandler}
                    onMouseOver={this.hoverHandler}
                    disabled={!validator}
                >
                    {value}
                </button>
                <span
                    style={{
                        fontSize: "12px",
                        color: "#616161"
                    }}
                >
          {formattedHint}
        </span>
            </div>
        );
    }
}
