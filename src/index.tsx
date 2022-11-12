import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';


import { store } from './redux/configStore';
import HomeTemplate from './templates/HomeTemplate';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Detail from './pages/Details/Detail';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='' element={<HomeTemplate />}>
                    <Route index element={<Home />}></Route>
                    <Route path='home' element={<Home />}></Route>
                    <Route path='detail' element={<Detail />}>
                        <Route path=':id'></Route>
                    </Route>
                    {/* path="*" nếu link ko  có thì sẽ dẫn về trang khác */}
                    <Route path='*' element={<Navigate to=" " />}></Route>
                </Route>

            </Routes>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

