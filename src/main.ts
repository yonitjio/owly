// Copyright (c) 2025 Yoni
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import './scss/styles.scss'

import { App, EventBus, whenReady } from "@odoo/owl";
import { Root } from "./components/root";

import { Collapse } from "bootstrap";

document.querySelectorAll('.collapse')
    .forEach(col => {
        new Collapse(col)
    });

const env = {
    is_production: import.meta.env.PROD,
    bus: new EventBus(),
    BUS_MAIN_CHANNEL: "owly-main-channel"
};

const app = new App(Root, { env });

whenReady(app.mount(document.body));
