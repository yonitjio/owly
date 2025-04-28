// Copyright (c) 2025 Yoni
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import template from "./navbar-item.xml?raw";

import { Component, xml } from "@odoo/owl";

export class NavbarItem extends Component {
    static template = xml`${template}`;
    static props = {
        title: { type: String, optional: true },
        icon: { type: String, optional: true },
        data: { type: Object, optional: true },
        callback: { type: Function, optional: true }
    }

    onClick(){
        this.props.callback(this.props.data);
    }
}
