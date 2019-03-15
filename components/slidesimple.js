import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Content, LayoutCentered, Button } from '../theme';
import * as icon from '../assets/images/trality_small.png';

const Center = styled.div`
    width: 60%;
    @media (max-width: 768px) {
        width: 70%;
    }
    @media (max-width: 468px) {
        width: 90%;
    }
`;


@observer
export class SlideSimple extends React.Component {
    render() {
        return (
            <LayoutCentered>
                <Center>
                    <Content header="it's simple." icon={icon} iconHeight={22}>
                        <div>
                            Up until now, algorithmic crypto trading was reserved for a handful of expert traders. 
                            Trality finally lets leisure traders who have limited experience with algorithmic trading make use of trading bots to continuously beat the crypto market for profits. It’s simple: experts design the most complex bots
                            and everyone can follow their trade signals without investing much time and know-how.
                        </div>
                    </Content>
                </Center>
            </LayoutCentered>
        );
    }
}
