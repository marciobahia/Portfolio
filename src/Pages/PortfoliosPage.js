import React, { useState } from 'react';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import portfolios from '../data/portfolios';
import Menu from '../Components/Menu';
import Button from '../Components/Button';

const allButtons = ['Tudo', ...new Set(portfolios.map(item => item.category))]

function PortfoliosPage() {
    const [menuItem, setMenuItems] = useState(portfolios);
    // eslint-disable-next-line no-unused-vars
    const [button, setButtons] = useState(allButtons);

    const filter = (button) => {

        if(button === 'Tudo'){
            setMenuItems(portfolios);
            return;
        }

        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'portfolios'} />
            <InnerLayout>

                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage
