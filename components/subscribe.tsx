import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { observable, computed } from 'mobx';
import { Button } from '../theme';
import jsonp from 'jsonp';
import { getCookie, setCookie } from '../util/cookies';
import * as arrow from '../assets/images/arrow-down.svg';

const Text = styled.input`
    border-radius: none;
    border: solid 1px #c4c4e2;
    box-shadow: none !important;
    border-right: none;
    height: 55px;
    transition: 0.3s;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 16px;
    color: #8686ac;
    width: 100%;
    -webkit-appearance: none;
    border-radius: 0px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    &:focus {
        outline: none;
    }
`;

const ButtonContainer = styled.div`
    margin-top: 25px;
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    & > div:first-child {
        margin-bottom: 15px;
    }
    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`;

const InputContainer = styled.div`
    flex-grow: 1;
    margin-right: 10px;
    display: flex;
`;

const Confirm = styled.div<{ disabled?: boolean }>`
    border: solid 1px #c4c4e2;
    width: 30px;
    height: 55px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-left: none;
    display: flex;
    position: relative;
    ${(props) => props.disabled && 'background-color: #F2F1F0'};
`;

const Checkmark = styled.div<{ show?: boolean }>`
    position: absolute;
    top: 17px;
    transition: 0.3s all;
    opacity: 0;
    &:after {
        content: '';
        display: block;
        width: 8px;
        height: 14px;
        border: solid ${(props) => props.theme.main};
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
    ${(props) => props.show && 'opacity: 1.0'};
`;

const Error = styled.div<{ show?: boolean }>`
    position: absolute;
    left: 0px;
    top: 18px;
    width: 14px;
    height: 14px;
    opacity: 0;
    transition: 0.3s all;
    &:before,
    &:after {
        position: absolute;
        left: 3px;
        content: ' ';
        height: 20px;
        width: 3px;
        background-color: #ec4040;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
    ${(props) => props.show && 'opacity: 1.0'};
`;

const Loader = styled.div<{ show?: boolean }>`
    position: absolute;
    width: 28px;
    height: 28px;
    top: 17px;
    left: -5px;
    &:after {
        content: ' ';
        display: block;
        width: 20px;
        height: 20px;
        margin: 1px;
        border-radius: 50%;
        border: 3px solid ${(props) => props.theme.main};
        border-color: ${(props) => props.theme.main} transparent ${(props) => props.theme.main} transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    ${(props) => (props.show ? 'display: block' : 'display: none')};
`;

const Confirmation = styled.div`
    color: black;
`;

@observer
class Subscribe extends React.Component {
    BASE_URL = 'https://trality.us19.list-manage.com/subscribe/post-json?u=c7a47bb0a40e39af74ae61074&id=9db93b0bb1&EMAIL=';

    @observable
    email = '';

    @observable
    error = false;

    @observable
    success = false;

    @observable
    sending = false;

    @observable
    isOpen = false;

    componentDidMount() {
        let subscribed = getCookie('trality_subscribed');
        if (subscribed) {
            this.success = true;
        }
    }

    onChange(ev: any) {
        this.email = ev.target.value;
    }

    onClick() {
        if (this.isValidEmail) {
            this.subscribe();
        } else {
            this.error = true;
            setTimeout(() => (this.error = false), 500);
        }
    }

    @computed
    get isValidEmail() {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.email.toLowerCase());
    }

    @computed
    get hasErrors() {
        return this.email == '' || !this.isValidEmail;
    }

    get url() {
        return `${this.BASE_URL}${this.email.toLowerCase()}`;
    }

    subscribe() {
        this.sending = true;
        let multiple = false;
        let track = () => {
            this.context.mixpanel.track('subscribed');
        };
        jsonp(
            this.url,
            {
                param: 'c',
            },
            (err, data) => {
                if (err) {
                    this.error = true;
                } else if (data.result !== 'success') {
                    if (data.msg.indexOf('is already subscribed to list') !== -1) {
                        this.context.mixpanel.track('subscribedMultiple');
                        this.success = true;
                        multiple = true;
                    } else {
                        this.error = data.msg;
                    }
                } else {
                    this.success = data.msg;
                }
                this.sending = false;
                if (this.success == true) {
                    if (!multiple) track();
                    this.email = '';
                    setCookie('trality_subscribed', true, 360);
                }
            },
        );
    }

    get disabled() {
        return this.sending;
    }

    renderSuccess() {
        return (
            <Confirmation>
                <img src={arrow} alt="Arrow down" /> Awesome! Thank you for subscribing to our beta wait list.
            </Confirmation>
        );
    }

    renderSubscribe() {
        return (
            <React.Fragment>
                <InputContainer>
                    <Text disabled={this.disabled} type="input" placeholder="Your email <3" value={this.email} onChange={this.onChange.bind(this)} />
                    <Confirm disabled={this.disabled}>
                        <Checkmark show={this.isValidEmail && !this.sending && !this.error} />
                        <Error show={this.error && !this.sending} />
                        <Loader show={this.sending} />
                    </Confirm>
                </InputContainer>
                <Button type="button" onClick={this.onClick.bind(this)}>
                    trade together.
                </Button>
            </React.Fragment>
        );
    }

    render() {
        return <ButtonContainer>{this.success ? this.renderSuccess() : this.renderSubscribe()}</ButtonContainer>;
    }
}

export { Subscribe };
