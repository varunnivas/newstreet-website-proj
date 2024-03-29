import newsContainer from './container/newsContainer';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const NewsPage = () => {
    <Provider store = {store}>
        <newsContainer />
    </Provider>,
    document.getElementById('root')
};

export default NewsPage;