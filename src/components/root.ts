// Copyright (c) 2025 Yoni
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import template from "./root.xml?raw";
import owlylogo from "../owly-logo-black.svg";

import { Component, useState, xml } from "@odoo/owl";
import { Navbar } from "./navbar";
import { NavbarMenuItemShape } from "./navbar-interface";
import { HomePage } from "./home-page";
import { TypographyPage } from "./typography";
import { SamplePage } from "./sample-page";

export class Root extends Component {
    static template = xml`${template}`;
    static components = {
        Navbar
    }

    state: {
        currentPage: typeof Component;
    }

    setup() {
        this.state = useState({
            currentPage: HomePage
        })
    }

    get menuItems() {
        let menu: NavbarMenuItemShape[] = [];
        menu.push({
            title: "Home",
            icon: "home",
            data: HomePage,
            callback: this.props.onMenuClicked
        })
        menu.push({
            title: "Typography",
            icon: "typography",
            data: TypographyPage,
            callback: this.props.onMenuClicked
        })
        menu.push({
            title: "Sample Page",
            icon: "html",
            data: SamplePage,
            callback: this.props.onMenuClicked
        })
        return menu;
    }

    onMenuClicked(data: typeof Component){
        this.state.currentPage = data;
    }

    get pageComponent() {
        return this.state.currentPage;
    }

    get pageProps() {
        return {}
    }

    get owlyLogo(){
        return owlylogo;
    }
}
