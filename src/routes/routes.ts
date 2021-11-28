// import {LazyPage1, LazyPage2, LazyPage3} from "../01-lazyload/pages";
import {lazy, LazyExoticComponent} from "react";
import {NoLazy} from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    name: string,
    // Component: () => JSX.Element,
    Component:  LazyExoticComponent<() => JSX.Element> | JSXComponent,
}

const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/ '../01-lazyload/layout/LazyLayout'));
// const Lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/ '../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/ '../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload',
        Component: LazyLayout,
        name: 'Lazy-layout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
    // {
    //     to: '/lazy2',
    //     path: 'lazy2',
    //     Component: Lazy2,
    //     name: 'Lazy-2'
    // },
    // {
    //     to: '/lazy3',
    //     path: 'lazy3',
    //     Component: Lazy3,
    //     name: 'Lazy-3'
    // },

]
