// Copyright (c) 2025 Yoni
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import template from "./navbar.xml?raw";

import { NavbarMenuItemShape } from "./navbar-interface";
import { Component, xml } from "@odoo/owl";
import { NavbarItem } from "./navbar-item";

export class Navbar extends Component {
    static template = xml`${template}`;
    static components = {
        NavbarItem
    }
    static props = {
        title: String,
        icon: String,
        menuItems: Array<NavbarMenuItemShape>,
        onMenuClicked: Function,
    };
    static defaultProps = {
        title: "Title"
    };
}
