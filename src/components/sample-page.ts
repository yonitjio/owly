// Copyright (c) 2025 Yoni
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import template from "./sample-page.xml?raw";

import { Component, xml } from "@odoo/owl";

export class SamplePage extends Component {
    static template = xml`${template}`;
}
