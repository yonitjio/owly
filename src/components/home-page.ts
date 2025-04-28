// Copyright (c) 2025 Yoni
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import template from "./home-page.xml?raw";

import { Component, useState, xml } from "@odoo/owl";

export class HomePage extends Component {
    static template = xml`${template}`;

    state: {
        myState: number
    }

    setup(){
        this.state = useState({
            myState: 0
        });
    }

    onClick(){
        this.state.myState = this.state.myState + 1;
    }
}
